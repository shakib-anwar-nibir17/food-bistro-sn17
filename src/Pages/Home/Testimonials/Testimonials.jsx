import quote from "../../../assets/home/quote-left 1.svg";
import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import axios from "axios";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";

import { Rating, Star } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";

const customStyles = {
  itemShapes: Star,
  activeFillColor: "#CD9003",
  inactiveFillColor: "#A1A1A1",
};

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/reviews")
      .then((response) => setReviews(response.data));
  }, []);

  return (
    <section>
      <SectionTitle
        heading={"TESTIMONIALS"}
        subHeading={"What Our Clients Say"}
      ></SectionTitle>
      <div>
        <Swiper
          navigation={true}
          modules={[Navigation]}
          className="mySwiper my-16"
        >
          {reviews.map((review) => (
            <SwiperSlide key={review._id}>
              <div className="flex justify-center mb-4 mt-10">
                <Rating
                  itemStyles={customStyles}
                  style={{ maxWidth: 180 }}
                  value={review.rating}
                  readOnly
                />
              </div>
              <div className="flex justify-center">
                <img src={quote} alt="" />
              </div>
              <div className="text-center w-[80%] mx-auto space-y-4 mt-8 mb-20">
                <p className="text-lg">{review.details}</p>
                <h2 className="text-3xl text-[#CD9003]">{review.name}</h2>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
