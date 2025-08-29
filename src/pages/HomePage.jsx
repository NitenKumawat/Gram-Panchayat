import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import 'swiper/css';
import images from '../Mock/galleryImages';
import NewsCard from '../components/NewsCard';
import newsItems from '../Mock/news';
import MemberCard from '../components/MemberCard';
import members from '../Mock/member';

const HomePage = () => {
  const filterRecentNews = (items, days = 30) => {
  const now = new Date();
  return items.filter(item => {
    const newsDate = new Date(item.date);
    const diffTime = now - newsDate;
    const diffDays = diffTime / (1000 * 60 * 60 * 24);
    return diffDays <= days;
  });
};

  const recentNews = filterRecentNews(newsItems, 10); // last 30 days

  return (
    <>
      {/* Intro section */}
      <section className="relative flex items-center justify-center text-center text-gray-900 py-20 px-4 overflow-hidden bg-gradient-to-r from-green-100 via-blue-100 to-purple-100">
        <div className="max-w-3xl">
          <h1
            className="text-4xl md:text-6xl font-extrabold mb-6"
            style={{ textShadow: '1px 1px 3px rgba(150, 150, 150, 0.6)' }}
          >
            Gram Panchayat Jobner
          </h1>
          <p
            className="text-lg md:text-xl leading-relaxed"
            style={{ textShadow: '0.5px 0.5px 2px rgba(120, 120, 120, 0.5)' }}
          >
            Gram Panchayat Jobner is dedicated to community development, sustainable growth, and the welfare of its residents.
            We strive to foster an inclusive environment with transparent governance and active participation.
          </p>
        </div>
      </section>

      {/* Gallery Swiper section */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Gallery Highlights</h2>

          <Swiper
            modules={[Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop={true}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {images.map(({ src, alt }, index) => (
              <SwiperSlide key={index}>
                <Link to="/gallery">
                  <div className="overflow-hidden rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 cursor-pointer">
                    <img
                      src={src}
                      alt={alt}
                      loading="lazy"
                      className="w-full h-64 object-cover"
                    />
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
 <section className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-4 ">
       <h2 className="text-3xl font-bold mb-8 text-center">Latest News & Updates</h2>

        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          loop={true}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {recentNews.map((item) => (
            <SwiperSlide key={item.id}>
              <NewsCard {...item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>


      <section className="py-12  max-w-3xl mx-auto px-4">
      <h2 className="text-3xl font-bold mb-8 text-center">Panchayat Members</h2>
      <Swiper
        modules={[Autoplay]}
        direction="vertical"
        spaceBetween={20}
        slidesPerView={1}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop={true}
        style={{ height: '500px' }} // fixed height for vertical swiper
      >
        {members.map((member, idx) => (
          <SwiperSlide key={member.id}>
            <MemberCard member={member} imageLeft={idx % 2 === 0} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>

    <section>
      hi
    </section>


    </>
  );
};

export default HomePage;
