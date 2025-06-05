import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Sparkles } from "lucide-react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  useEffect(() => {
    AOS.init({
      once: false,
    });
  }, []);

  return (
    <section 
      className="skill" 
      id="Skills" 
      style={{ 
        padding: '80px 0',

      }}
    >
      <div className="container mx-auto px-[5%] sm:px-[5%] lg:px-[10%]">
        <div className="text-center mb-8 px-[5%]">
          <div className="inline-block relative group">
            <h2 
              className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#f1636f] to-[#a855f7]"
              data-aos="zoom-in-up"
              data-aos-duration="600"
            >
              Skills
            </h2>
          </div>
          <p 
            className="mt-2 text-gray-400 max-w-2xl mx-auto text-base sm:text-lg flex items-center justify-center gap-2"
            data-aos="zoom-in-up"
            data-aos-duration="800"
          >
            <Sparkles className="w-5 h-5 text-red-400" />
            The only true limitation is the one you set for yourself.
            <Sparkles className="w-5 h-5 text-red-400" />
          </p>
        </div>

        <div 
          className="skill-bx relative z-10  rounded-2xl p-8  overflow-hidden"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <Carousel 
            responsive={responsive} 
            infinite={true} 
            className="skill-slider"
            autoPlay={true}
            autoPlaySpeed={3000}
            showDots={false}
            arrows={false}
            itemClass="px-4"
          >
            <div className="item relative group h-full">
              <div className="relative z-10 bg-gray-900/50 backdrop-blur-lg rounded-2xl p-6 border border-white/10 overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl h-full flex flex-col items-center justify-center">
                <div className="absolute -z-10 inset-0 bg-gradient-to-br from-[#f1636f] to-[#a855f7] opacity-10 group-hover:opacity-20 transition-opacity duration-300"></div>
                <img 
                  src={meter1} 
                  alt="Web Development Skill Meter" 
                  className="w-32 h-32 mb-6 transition-transform group-hover:scale-110"
                />
                <h5 className="text-xl font-semibold text-white mb-2">
                  Web Development
                </h5>
                <p className="text-sm text-gray-400 text-center">
                  Building responsive and interactive web applications
                </p>
              </div>
            </div>
            <div className="item relative group h-full">
              <div className="relative z-10 bg-gray-900/50 backdrop-blur-lg rounded-2xl p-6 border border-white/10 overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl h-full flex flex-col items-center justify-center">
                <div className="absolute -z-10 inset-0 bg-gradient-to-br from-[#a855f7] to-[#6366f1] opacity-10 group-hover:opacity-20 transition-opacity duration-300"></div>
                <img 
                  src={meter2} 
                  alt="Brand Identity Skill Meter" 
                  className="w-32 h-32 mb-6 transition-transform group-hover:scale-110"
                />
                <h5 className="text-xl font-semibold text-white mb-2">
                  Brand Identity
                </h5>
                <p className="text-sm text-gray-400 text-center">
                  Crafting memorable and distinctive brand experiences
                </p>
              </div>
            </div>
            <div className="item relative group h-full">
              <div className="relative z-10 bg-gray-900/50 backdrop-blur-lg rounded-2xl p-6 border border-white/10 overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl h-full flex flex-col items-center justify-center">
                <div className="absolute -z-10 inset-0 bg-gradient-to-br from-[#6366f1] to-[#f1636f] opacity-10 group-hover:opacity-20 transition-opacity duration-300"></div>
                <img 
                  src={meter3} 
                  alt="Logo Design Skill Meter" 
                  className="w-32 h-32 mb-6 transition-transform group-hover:scale-110"
                />
                <h5 className="text-xl font-semibold text-white mb-2">
                  Logo Design
                </h5>
                <p className="text-sm text-gray-400 text-center">
                  Creating unique visual identities for brands
                </p>
              </div>
            </div>
            <div className="item relative group h-full">
              <div className="relative z-10 bg-gray-900/50 backdrop-blur-lg rounded-2xl p-6 border border-white/10 overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl h-full flex flex-col items-center justify-center">
                <div className="absolute -z-10 inset-0 bg-gradient-to-br from-[#f1636f] to-[#a855f7] opacity-10 group-hover:opacity-20 transition-opacity duration-300"></div>
                <img 
                  src={meter1} 
                  alt="UI/UX Design Skill Meter" 
                  className="w-32 h-32 mb-6 transition-transform group-hover:scale-110"
                />
                <h5 className="text-xl font-semibold text-white mb-2">
                  UI/UX Design
                </h5>
                <p className="text-sm text-gray-400 text-center">
                  Designing intuitive and beautiful user interfaces
                </p>
              </div>
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Skills;