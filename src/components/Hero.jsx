import github from "../assets/github.png";
import linkedIn from "../assets/linkedin.png";
import gmail from "../assets/gmail.png";
import hero from "../assets/hero.png";
import hi from "../assets/hi.png";
import CV from "../assets/CV.pdf";
import { Download as DownloadIcon, Mail } from "lucide-react";

const Hero = ({ darkMode }) => {
  const socialIcons = [
    { icon: github, alt: "github" },
    { icon: linkedIn, alt: "linkedin" },
    { icon: gmail, alt: "gmail" },
  ];

  const darkTheme = {
    textPrimary: "text-white",
    textSecondary: "text-gray-300",
    buttonSecondary:
      "text-white border-2 border-orange-500 hover:bg-orange-600",
    decorativeCircle: "bg-orange-500 opacity-10",
  };

  const lightTheme = {
    textPrimary: "text-gray-900",
    textSecondary: "text-gray-700",
    buttonSecondary:
      "text-gray-800 border-2 border-orange-500 hover:bg-orange-500 hover:text-white",
    decorativeCircle: "bg-orange-400 opacity-20",
  };

  const theme = darkMode ? darkTheme : lightTheme;

  return (
    <div className="relative overflow-hidden min-h-screen flex flex-col">
      <section
        id="home"
        data-aos="fade-up"
        data-aos-delay="250"
        className="body-font z-10">
        <div
          className="container mx-auto flex px-4 sm:px-8 lg:px-14
            py-12 lg:py-32 flex-col lg:flex-row items-center justify-between
            lg:mt- mt-14">
          {/* Left column */}
          <div className="lg:w-1/2 w-full flex flex-col items-center lg:items-start">
            {/* Social Icons */}
            <div className="flex justify-center lg:justify-start gap-4 sm:gap-6 mb-6 sm:mb-7 w-full">
              {socialIcons.map((social, index) => (
                <a // ✅ fixed: <a tag was missing
                  key={index}
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                  data-aos="fade-up"
                  data-aos-delay={`${400 + index * 100}`}
                  className="transform hover:scale-110 transition-transform duration-300">
                  <img
                    src={social.icon}
                    alt={social.alt}
                    className={`w-8 h-8 sm:w-10 sm:h-10 object-contain
                      ${darkMode ? "" : "filter brightness-75"}`}
                  />
                </a>
              ))}
            </div>

            {/* Heading */}
            <h1
              // data-aos="fade-up"
              data-aos-delay="500"
              className={`title-font text-3xl sm:text-4xl lg:text-5xl mb-4 font-bold ${theme.textPrimary}`}>
              Hi, I'm Shimaa
            </h1>

            {/* Bio */}
            <p
              className={`mb-6 sm:mb-8 leading-relaxed max-w-md sm:max-w-lg ${theme.textSecondary}`}>
              I'm a Full-Stack Developer with a strong focus on building
              scalable web applications using ASP.NET Core, and Angular. I
              specialize in creating clean, maintainable architectures and
              transforming complex ideas into efficient, user-friendly
              solutions. I have hands-on experience developing APIs, designing
              modern dashboards, and integrating frontend and backend systems
              seamlessly. I'm passionate about writing high-quality code,
              solving real-world problems, and continuously improving my skills.
            </p>

            {/* Buttons */}
            <div
              className="w-full pt-4 sm:pt-6"
              data-aos="fade-up"
              data-aos-delay="700">
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-3 sm:gap-4">
                <a href={CV} download className="w-full sm:w-auto">
                  <button
                    className="w-full sm:w-auto inline-flex items-center justify-center
                      bg-gradient-to-r from-orange-500 to-orange-600
                      text-white py-3 px-6 sm:px-8
                      hover:shadow-[0_0_40px_rgba(255,165,0,0.7)]
                      rounded-full text-base sm:text-lg font-semibold
                      transition-all duration-300">
                    <DownloadIcon className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                    Download CV
                  </button>
                </a>

                <a href="#contact" className="w-full sm:w-auto">
                  <button
                    className={`w-full sm:w-auto inline-flex items-center justify-center
                      ${theme.buttonSecondary}
                      py-3 px-6 sm:px-8
                      hover:shadow-[0_0_40px_rgba(255,165,0,0.7)]
                      rounded-full text-base sm:text-lg font-semibold
                      transition-all duration-300`}>
                    <Mail className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                    Contact Me
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* Right column — Image */}
          <div
            className="lg:w-1/2 w-full max-w-md lg:max-w-lg mt-8 lg:mt-0 flex justify-center"
            data-aos="fade-left"
            data-aos-delay="400">
            <div className="relative w-4/5 sm:w-3/4 lg:w-full">
              <div className="relative overflow-hidden">
                <img
                  src={hero}
                  alt="Hero Image"
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <img
                src={hi}
                alt="Hi icon"
                className="absolute top-4 sm:top-4 left-6 sm:left-20
                  w-14 h-14 sm:w-20 sm:h-20 object-contain
                  animate-bounce opacity-90 z-10"
              />
            </div>
          </div>
        </div>

        {/* Decorative circle */}
        <div
          className={`absolute -top-20 -left-20 w-40 h-40 sm:w-64 sm:h-64
            ${theme.decorativeCircle} rounded-full mix-blend-multiply
            filter blur-3xl animate-pulse delay-1000 hidden sm:block`}
        />
      </section>
    </div>
  );
};

export default Hero;
