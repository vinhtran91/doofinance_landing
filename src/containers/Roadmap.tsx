import React, { FC } from "react";
import { SectionTitle } from "components/SectionTitle";
import { TimelinePoint } from "components/TimelinePoint";
import { Swiper, SwiperSlide } from "swiper/react";

import s from "./Roadmap.module.css";
import "swiper/swiper.min.css";

export const Roadmap: FC<{}> = () => {
  return (
    <section id="roadmap" className={s.roadmap}>
      <SectionTitle>Roadmap</SectionTitle>
      <p className={s.description}>DooFinance Roadmap</p>

      <Swiper
        className={s.timeline}
        spaceBetween={20}
        slidesPerView={1}
        centeredSlides={true}
        centeredSlidesBounds={true}
        breakpoints={{
          "640": {
            slidesPerView: 2,            
          },
          "768": {
            slidesPerView: 3,            
          },
          "1024": {
            slidesPerView: 4,            
          },
        }}
      >
        <SwiperSlide>
          <TimelinePoint
            date="5th August 2021"
            content={["Smart Contract create", "Website Launch"]}
          />
        </SwiperSlide>
        <SwiperSlide>
          <TimelinePoint
            date="5th August 2021"
            content={["Initial Liquidity Even on Unicrypt"]}
          />
        </SwiperSlide>
        <SwiperSlide>
          <TimelinePoint
            date="20th August 2021"
            content={["Presale start on Unicrypt"]}
          />
        </SwiperSlide>
        <SwiperSlide>
          <TimelinePoint
            date="Q4 2021"
            content={["Liquidity Lock with Unicrypt", "Launch on Pancakeswap"]}
          />
        </SwiperSlide>
        <SwiperSlide>
          <TimelinePoint
            date="December 2021"
            content={[
              "Launch NFT Marketplace under BSC",
              "Launch Doo Swap Product",
            ]}
          />
        </SwiperSlide>
        <SwiperSlide>
          <TimelinePoint date="Q1 2022" content={["Launch NFT MiniGame"]} />
        </SwiperSlide>
      </Swiper>
    </section>
  );
};
