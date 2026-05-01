import { FaGithub, FaLinkedin, FaTwitter, FaHeart } from "react-icons/fa";

const Footer = ({ darkMode }) => {
  const currentYear = new Date().getFullYear();

  const socialClass =
    "w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 " +
    "hover:scale-110 hover:bg-gradient-to-r hover:from-orange-500 hover:to-amber-500 hover:text-white " +
    "bg-[#374151] dark:bg-[#f3f4f6] text-white dark:text-[#374151]";

  return (
    <footer
      className="border-t py-8 px-4"
      style={{
        background: darkMode
          ? "linear-gradient(to bottom, #000000, #111827)"
          : "linear-gradient(to bottom, #f3f4f6, #e5e7eb)",
        borderColor: darkMode ? "#374151" : "#d1d5db",
      }}>
      <div className="flex flex-col md:flex-row justify-between items-center gap-6 max-w-6xl mx-auto">
        {/* Left Section */}
        <div className="text-center md:text-left">
          <h3
            className="text-2xl font-bold mb-2"
            style={{
              background: "linear-gradient(to right,#f97316,#f59e0b)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
            }}>
            Portfolio
          </h3>

          <p
            className="text-sm"
            style={{
              color: darkMode ? "#9ca3af" : "#6b7280",
            }}>
            Full Stack Web Developer
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-4 justify-center md:justify-start">
            <a href="#" className={socialClass}>
              <FaGithub />
            </a>
            <a href="#" className={socialClass}>
              <FaLinkedin />
            </a>
            <a href="#" className={socialClass}>
              <FaTwitter />
            </a>
          </div>
        </div>

        {/* Right Section */}
        <div className=" text-center md:text-right">
          <p
            className="text-sm flex items-center justify-end gap-1
             text-[#6b7280] dark:text-[#9ca3af]">
            © {currentYear} Made with
            <FaHeart className="text-red-500" />
            by <span className="mt-1 text-[#f97316]">Shimaa Shaaban</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
