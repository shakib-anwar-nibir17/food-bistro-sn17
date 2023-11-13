import slider1 from "../../../assets/home/slide1.jpg";
import slider2 from "../../../assets/home/slide2.jpg";
import slider3 from "../../../assets/home/slide3.jpg";
import slider4 from "../../../assets/home/slide4.jpg";
import slider5 from "../../../assets/home/slide5.jpg";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const Category = () => {
  return (
    <>
      <section>
        <SectionTitle
          subHeading={"From 11:00am to 10:00pm"}
          heading={"ORDER ONLINE"}
        ></SectionTitle>
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          centeredSlides={false}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper mb-20"
        >
          <SwiperSlide>
            <img
              className="w-[350px] h-[350px] lg:h-[450px]"
              src={slider1}
              alt=""
            />
            <h2 className="text-2xl lg:text-4xl text-center text-white -mt-16">
              SALADS
            </h2>
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="w-[350px] h-[350px] lg:h-[450px]"
              src={slider2}
              alt=""
            />
            <h2 className="text-2xl lg:text-4xl text-center text-white -mt-16">
              PIZZA
            </h2>
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="w-[350px] h-[350px] lg:h-[450px]"
              src={slider3}
              alt=""
            />
            <h2 className="text-2xl lg:text-4xl text-center text-white -mt-16">
              SOUP
            </h2>
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="w-[350px] h-[350px] lg:h-[450px]"
              src={slider4}
              alt=""
            />
            <h2 className="text-2xl lg:text-4xl text-center text-white -mt-16">
              DESSERT
            </h2>
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="w-[350px] h-[350px] lg:h-[450px]"
              src={slider4}
              alt=""
            />
            <h2 className="text-2xl lg:text-4xl text-center text-white -mt-16">
              DESSERT
            </h2>
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="w-[350px] h-[350px] lg:h-[450px]"
              src={slider5}
              alt=""
            />
            <h2 className="text-2xl lg:text-4xl text-center text-white -mt-16">
              SALADS
            </h2>
          </SwiperSlide>
        </Swiper>
      </section>
    </>
  );
};

export default Category;
