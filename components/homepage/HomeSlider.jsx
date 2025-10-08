"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

export default function HomeSlider() {
  const slides = [
    {
      id: 5,
      title: "Career Path Strategy",
      desc: "Plan your journey with personalized guidance and actionable roadmaps.",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRNzMJCvWWv5JPzLyf84vWBLJso46b9kNc8PwzEFYFVQriDNfB2Pc0c1pHq3cCupGRo6E&usqp=CAU.png",
    },
    {
      id: 1,
      title: "Unlock Your Career Potential",
      desc: "Discover your strengths and step confidently toward your dream career.",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNdcAh47rDiZCFyyITmIL2sqIUD6dQXvRZJQ&s.png",
    },
    {
      id: 2,
      title: "Expert Career Guidance",
      desc: "Connect with experienced counselors who help you make smarter career moves.",
      img: "https://bcdn.mindler.com/bloglive/wp-content/uploads/2020/07/01224012/online-career-counselling-770x385.png",
    },
    {
      id: 3,
      title: "Resume Building Workshops",
      desc: "Create a professional resume that lands you the interview you deserve.",
      img: "https://www.careerguide.com/blogPages/images/counsellingIndia.png",
    },
    {
      id: 4,
      title: "Mock Interview Training",
      desc: "Prepare with confidence — sharpen your interview skills and get expert feedback.",
      img: "https://img.freepik.com/premium-vector/man-tv-interview-flat-vector-style-isolated_269655-85846.jpg",
    },
  ];

  return (
    <div className="w-11/12 mx-auto rounded-2xl overflow-hidden shadow-2xl">
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation={true}
        effect="fade"
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        className="h-[65vh]" // 👈 this fixes the height to ~65% of viewport
      >
        {slides.map((s) => (
          <SwiperSlide key={s.id}>
            <div
              className="relative h-[65vh] bg-cover bg-center flex flex-col justify-center items-center text-center transition-all duration-700 ease-in-out"
              style={{ backgroundImage: `url(${s.img})` }}
            >
              {/* dark overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>

              {/* content */}
              <div className="relative z-10 max-w-2xl px-6 text-white">
                <h2 className="text-3xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 drop-shadow-xl mb-3">
                  {s.title}
                </h2>
                <p className="text-base md:text-lg text-gray-200 font-light drop-shadow-md mb-5">
                  {s.desc}
                </p>
                {/* <button className="btn btn-sm md:btn-md bg-gradient-to-r from-blue-600 to-purple-600 border-none text-white hover:scale-105 hover:shadow-lg transition-transform">
                  Learn More
                </button> */}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
