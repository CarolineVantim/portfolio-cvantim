"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";
import type { HeroPhoto } from "@/data/photos";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

export default function PhotoCarousel({ photos }: { photos: HeroPhoto[] }) {
  const slides = photos.filter((photo) => photo.src);
  if (slides.length === 0) return null;

  return (
    <Swiper
      modules={[EffectCoverflow, Pagination]}
      effect="coverflow"
      grabCursor
      centeredSlides
      slidesPerView="auto"
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      pagination={{ clickable: true }}
      className="hero-photo-swiper w-full max-w-sm sm:max-w-md"
    >
      {slides.map((photo, index) => (
        <SwiperSlide key={index} className="!h-56 !w-44 sm:!h-64 sm:!w-52">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={photo.src}
            alt={photo.alt}
            className="h-full w-full rounded-2xl object-cover"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
