
import { useState } from 'react';
import { ChevronRight, Newspaper } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CategoryCard from '../components/ui/CategoryCard';
import ProductCard from '../components/ui/ProductCard';
import ReviewCard from '../components/ui/ReviewCard';
import ProductStatistics from '../components/ui/ProductStatistics';
import { categories, products, reviews } from '@/lib/data';
import { getLatestArticles } from '@/lib/news-data';

const Index = () => {
  const featuredCategories = categories.slice(0, 4);
  const featuredProducts = products.filter(product => product.featured).slice(0, 8);
  const featuredReviews = reviews.slice(0, 3);
  const latestNews = getLatestArticles(3);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Banner */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-700 text-white pt-16">
        <div className="section-container py-12 sm:py-16 md:py-20 lg:py-24 laptop:py-28 xl:py-32 flex flex-col items-center text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 animate-in appear-first">
            Phụ kiện điện thoại <br className="hidden md:block" />
            <span className="text-yellow-300">chính hãng</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl max-w-xl mb-6 sm:mb-8 animate-in appear-second">
            Kho phụ kiện đa dạng, chất lượng cao với giá cả cạnh tranh nhất thị trường
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-in appear-third">
            <Link
              to="/products"
              className="bg-white text-blue-600 px-6 py-3 rounded-full font-medium hover:bg-blue-50 transition-colors"
            >
              Xem sản phẩm
            </Link>
            <Link
              to="/contact"
              className="bg-transparent border-2 border-white px-6 py-3 rounded-full font-medium hover:bg-white/10 transition-colors"
            >
              Liên hệ ngay
            </Link>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute bottom-0 left-0 w-full h-16 bg-gray-50 clip-slant" />
      </section>

      {/* Product Statistics Section */}
      <section className="py-12 sm:py-16">
        <div className="section-container">
          <ProductStatistics />
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-12 sm:py-16">
        <div className="section-container">
          <div className="flex justify-between items-center mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">Danh mục sản phẩm</h2>
            <Link 
              to="/products" 
              className="text-primary flex items-center hover:underline font-medium"
            >
              Xem tất cả
              <ChevronRight className="h-4 w-4 ml-1" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {featuredCategories.map((category, index) => (
              <CategoryCard key={category.id} {...category} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="section-container">
          <div className="flex justify-between items-center mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">Sản phẩm nổi bật</h2>
            <Link 
              to="/products" 
              className="text-primary flex items-center hover:underline font-medium"
            >
              Xem tất cả
              <ChevronRight className="h-4 w-4 ml-1" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {featuredProducts.map((product, index) => (
              <ProductCard key={product.id} {...product} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Latest News Section */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="section-container">
          <div className="flex justify-between items-center mb-6 sm:mb-8">
            <div className="flex items-center gap-2">
              <Newspaper className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">Tin tức mới nhất</h2>
            </div>
            <Link 
              to="/news" 
              className="text-primary flex items-center hover:underline font-medium"
            >
              Xem tất cả
              <ChevronRight className="h-4 w-4 ml-1" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            {latestNews.map((article, index) => (
              <Link to={`/news/${article.slug}`} key={article.id}>
                <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow group">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={article.imageUrl} 
                      alt={article.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-0 right-0 bg-primary text-white text-xs font-medium px-2 py-1 m-2 rounded">
                      {categories.find(c => c.id === Number(article.category))?.name}
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-lg mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
                      {article.summary}
                    </p>
                    <div className="flex justify-between items-center text-xs text-muted-foreground">
                      <span>{article.publishDate}</span>
                      <span>{article.viewCount} lượt xem</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          
          <div className="text-center mt-6 sm:mt-8">
            <Link
              to="/news"
              className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-2 text-sm font-medium text-white hover:bg-primary/90 transition-colors"
            >
              Xem thêm tin tức
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="section-container">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-8 sm:mb-12">Khách hàng nói gì về chúng tôi</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {featuredReviews.map((review, index) => (
              <ReviewCard key={review.id} {...review} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 bg-primary text-white">
        <div className="section-container text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6">Bạn cần tư vấn thêm?</h2>
          <p className="max-w-2xl mx-auto mb-6 sm:mb-8 text-base sm:text-lg">
            Đội ngũ chuyên viên của chúng tôi luôn sẵn sàng hỗ trợ bạn mọi lúc mọi nơi
          </p>
          <Link
            to="/contact"
            className="bg-white text-primary px-6 sm:px-8 py-2 sm:py-3 rounded-full font-medium hover:bg-blue-50 inline-block transition-colors"
          >
            Liên hệ ngay
          </Link>
        </div>
      </section>
      
      <Footer />

      <style>
        {`
          .clip-slant {
            clip-path: polygon(0 0, 100% 100%, 100% 100%, 0% 100%);
          }
        `}
      </style>
    </div>
  );
};

export default Index;
