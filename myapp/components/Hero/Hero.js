'use client'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import hero1 from "../../public/hero1.png"

const heroTextures = [
  { source: 'https://images.pexels.com/photos/1420707/pexels-photo-1420707.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', alt: 'Hero 1' },
  { source: 'https://images.pexels.com/photos/157888/fashion-glasses-go-pro-female-157888.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', alt: 'Hero 1' },
  { source: 'https://images.pexels.com/photos/989965/pexels-photo-989965.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', alt: 'Hero 1' },
];


const HeroSection = ({ isNonMobile }) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  return (
    <section className='max-w-screen-xl mx-auto'>
      <Carousel
        responsive={responsive}
        infinite={true}
        showThumbs={false}
        showIndicators={false}
        showStatus={false}
        renderArrowPrev={(onClickHandler, hasPrev, label) =>
          hasPrev && (
            <button
              onClick={onClickHandler}
              className="absolute top-1/2 left-0 transform -translate-y-1/2 text-white p-2 z-10"
            >
              <FaChevronLeft className="text-2xl" />
            </button>
          )
        }
        renderArrowNext={(onClickHandler, hasNext, label) =>
          hasNext && (
            <button
              onClick={onClickHandler}
              className="absolute top-1/2 right-0 transform -translate-y-1/2 text-white p-2 z-10"
            >
              <FaChevronRight className="text-2xl" />
            </button>
          )
        }
      >
        {heroTextures.map((texture, index) => (
          <div key={`carousel-image-${index}`} className="relative">
            <img
              src={texture.source}
              alt={`carousel-${index}`}
              className="w-full h-500 object-cover bg-fixed"
            />
                <div
              className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${
                isNonMobile ? '' : 'mx-auto'
              }`}
              style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)', padding: '20px', borderRadius: '8px', zIndex: 100 }}
            >
              <p className="text-white">-- NEW ITEMS</p>
              <h1 className="text-4xl font-bold text-white">Stylish Wallets</h1>
              <p className="font-bold text-white underline">
                Discover More
              </p>
            </div>
          </div>
        ))}
      </Carousel>
    </section>
  );
};

export default HeroSection;
