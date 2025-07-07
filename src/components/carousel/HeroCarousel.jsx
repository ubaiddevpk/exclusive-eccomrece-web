import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import mob from "../../assets/mobile.jpg"; // ✅ adjust path

// Styled wrapper for custom slick styles
const StyledSliderWrapper = styled.div`
  position: relative;

  .slick-dots {
    position: absolute;
    bottom: 12px;
    width: 100%;
    display: flex !important;
    justify-content: center;
    z-index: 10;
  }

  .slick-dots li button:before {
    font-size: 10px;
    color: white;
    opacity: 0.6;
  }

  .slick-dots li.slick-active button:before {
    opacity: 1;
    color: white;
  }

  /* Responsive styles for mobile */
  @media (max-width: 640px) {
    .slick-slide > div {
      padding: 0 !important;
    }
    .bg-black {
      flex-direction: column !important;
      align-items: center !important;
      height: 340px !important;
      padding: 1rem !important;
    }
    .bg-black .space-y-4 {
      align-items: center !important;
      text-align: center !important;
      margin-bottom: 1rem !important;
    }
    .bg-black h3 {
      font-size: 1.25rem !important;
    }
    .bg-black p {
      font-size: 1rem !important;
    }
    .bg-black button {
      width: 100%;
      font-size: 1rem;
    }
    .bg-black .h-full {
      width: 100%;
      justify-content: center !important;
    }
    .bg-black img {
      height: 120px !important;
      margin-top: -32px !important;
    }
  }
`;

const slides = [
  {
    title: "iPhone 14 Series",
    discount: "Up to 10% off Voucher",
    image: mob,
  },
  {
    title: "Samsung Galaxy",
    discount: "Save up to 20% on Galaxy Series",
    image: mob,
  },
];

const HeroCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    arrows: false,
    speed: 500,
  };

  return (
    <StyledSliderWrapper className="w-full lg:w-3/4 p-4">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div
            key={index}
            className="bg-black text-white p-6 rounded-md flex justify-between items-start h-64 overflow-hidden"
          >
            {/* LEFT TEXT */}
            <div className="space-y-4">
              <h3 className="text-3xl font-bold">{slide.title}</h3>
              <p className="text-xl">{slide.discount}</p>
              <button className="bg-white text-black px-5 py-2 rounded hover:bg-gray-100 transition">
                Shop Now →
              </button>
            </div>

            {/* RIGHT IMAGE */}
            <div className="h-full flex justify-end items-start">
              <img
                src={slide.image}
                alt={slide.title}
                className="h-52 object-contain -mt-20"
                style={{ marginTop: '-100px' }}
              />
            </div>
          </div>
        ))}
      </Slider>
    </StyledSliderWrapper>
  );
};

export default HeroCarousel;
