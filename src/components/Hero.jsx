import github from "../assets/github.png";
import linkedIn from "../assets/linkedin.png";
import gmail from "../assets/gmail.png";
import { div } from "framer-motion/client";

const Hero = ({ darkMode }) => {
  const socialIcons = [
    { icon: github, alt: "github" },
    { icon: linkedIn, alt: "linkedin" },
    { icon: gmail, alt: "gmail" },
  ];
  const darkTheme = {
    textPrimary: "text-white",
    textSecondray: "text-gray-300",
    buttonSecondray: `text-white border-2 border-orange-500 
   hover:bg-orange-600`,
    decorativeCircle: "bg-orange-500 opacity-10",
  };

  const lightTheme = {
    textPrimary: "text-gray-900",
    textSecondray: "text-gray-700",
    buttonSecondray: `text-gray-800 border-2 border-orange-500 
hover:bg-orange-500 hover:text-white`,
    decorativeCircle: "bg-orange-400 opacity-20",
  };
  const theme = darkMode ? darkTheme : lightTheme;
  return (
    <div className="relative  over-floww-hidden mon-h-screen flex flex-col">
      <section
        id="home"
        data-aos="fade-up"
        data-aos-delat="250"
        className="body-font z-10">
        <div
          className="container mx-auto flex px-4 sm:px-8 lg:px-14
               py-12 1g:py-32 flex-col lg:flex-row items-center justify-between
              1g:mt-0 mt-14">
          <div
            className="flex justify-center lg:justify-start
gap-4 sm:gap-6 mb-6 sm:mb-7 w-full">
            {socialIcons.map((social, index) => (
              <a
                key={index}
                href="#"
                target="_blank"
                data-aos-delay={`${400 + index * 100}`}
                className="transform hover:scale-110 transition-transform duration-300">
                <img
                  src={social.icon}
                  alt={social.alt}
                  className={`w-8 h-8 sm:w-10 sm:h-10
                    object-contain ${darkMode ? "" : "filter brightness-75"}`}
                />
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
