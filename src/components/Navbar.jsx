import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon, Menu, X } from "lucide-react";

// ─── Constants (stable references, never re-created on render) ────────────────

const NAV_ITEMS = [
  { name: "Home", link: "#home" },
  { name: "About", link: "#about" },
  { name: "Skills", link: "#skills" },
  { name: "Projects", link: "#projects" },
  { name: "Contact", link: "#contact" },
];

const COLORS = {
  light: {
    navBg: "bg-gradient-to-br from-orange-200 to-white",
    textPrimary: "text-gray-900",
    textSecondary: "text-gray-800",
    textActive: "text-orange-600",
    indicator: "from-orange-500 to-amber-500",
    button: "from-orange-500 to-amber-500",
    toggleBg: "bg-gray-200",
    menuBg: "bg-white/95 border-gray-200",
    menuItemActive: "bg-orange-50",
  },
  dark: {
    navBg: "bg-gradient-to-br from-gray-700 to-black",
    textPrimary: "text-white",
    textSecondary: "text-gray-300",
    textActive: "text-orange-400",
    indicator: "from-orange-500 to-amber-500",
    button: "from-orange-500 to-amber-500",
    toggleBg: "bg-gray-700",
    menuBg: "bg-gray-900/95 border-gray-700",
    menuItemActive: "bg-gray-800",
  },
};

// ─── Sub-components ───────────────────────────────────────────────────────────

const NavLink = ({ item, isActive, colors, onClick }) => (
  <a href={item.link} onClick={() => onClick(item.name)} className="relative">
    <motion.span
      className={`font-medium transition-colors duration-300 ${
        isActive
          ? colors.textActive
          : `${colors.textSecondary} hover:text-orange-500`
      }`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}>
      {item.name}
    </motion.span>

    {isActive && (
      <motion.div
        layoutId="navbar-indicator"
        className={`absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r rounded-full ${colors.indicator}`}
      />
    )}
  </a>
);

const DarkModeToggle = ({ darkMode, onToggle, colors }) => (
  <motion.button
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
    onClick={onToggle}
    className={`p-2 rounded-full ${colors.toggleBg} transition-colors`}
    aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}>
    {darkMode ? (
      <Sun className="w-5 h-5 text-yellow-300" />
    ) : (
      <Moon className="w-5 h-5 text-gray-700" />
    )}
  </motion.button>
);

const MobileMenu = ({
  darkMode,
  navItems,
  activeSection,
  colors,
  onNavClick,
  onClose,
}) => (
  <motion.div
    key="mobile-menu"
    initial={{ opacity: 0, height: 0 }}
    animate={{ opacity: 1, height: "auto" }}
    exit={{ opacity: 0, height: 0 }}
    transition={{ duration: 0.3 }}
    className={`absolute top-full left-0 right-0 mt-2 lg:hidden
      backdrop-blur-lg rounded-xl shadow-lg border ${colors.menuBg}`}>
    <div className="px-4 py-3 space-y-2">
      {navItems.map((item) => {
        const isActive = activeSection === item.name;
        return (
          <a
            key={item.name}
            href={item.link}
            onClick={() => onNavClick(item.name)}
            className="block">
            <motion.div
              whileHover={{ x: 5 }}
              className={`py-3 px-2 rounded-lg text-center ${isActive ? colors.menuItemActive : ""}`}>
              <span
                className={`font-medium ${isActive ? colors.textActive : colors.textSecondary}`}>
                {item.name}
              </span>
            </motion.div>
          </a>
        );
      })}

      <motion.a
        href="#contact"
        onClick={onClose}
        whileTap={{ scale: 0.95 }}
        className={`block py-3 px-4 text-center font-semibold
          rounded-lg bg-gradient-to-r ${colors.button} text-white shadow-md`}>
        Hire Me
      </motion.a>
    </div>
  </motion.div>
);

// ─── Main Component ───────────────────────────────────────────────────────────

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [activeSection, setActiveSection] = useState("Home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const colors = COLORS[darkMode ? "dark" : "light"];

  const handleNavClick = useCallback((name) => {
    setActiveSection(name);
    setIsMenuOpen(false);
  }, []);

  const closeMenu = useCallback(() => setIsMenuOpen(false), []);

  return (
    <div className="flex justify-center w-full fixed z-50 mt-4">
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`relative flex items-center justify-center ${colors.navBg}
          backdrop-blur-lg rounded-2xl px-4 lg:px-8 py-2 shadow-lg`}>
        <div className="flex items-center justify-between w-full space-x-6 lg:space-x-8">
          {/* Logo */}
          <motion.a
            href="/"
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2">
            <span className={`text-xl font-bold ${colors.textPrimary}`}>
              Portfolio<span className="text-orange-500">.</span>
            </span>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.name}
                item={item}
                isActive={activeSection === item.name}
                colors={colors}
                onClick={handleNavClick}
              />
            ))}
          </div>

          {/* Right Controls */}
          <div className="flex items-center space-x-2">
            <DarkModeToggle
              darkMode={darkMode}
              onToggle={toggleDarkMode}
              colors={colors}
            />

            {/* Desktop CTA */}
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`hidden lg:block px-6 py-2 font-semibold
                rounded-full bg-gradient-to-r ${colors.button}
                text-white shadow-md hover:shadow-lg transition-shadow`}>
              Hire Me
            </motion.a>

            {/* Mobile Menu Toggle */}
            <div className="flex lg:hidden">
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsMenuOpen((prev) => !prev)}
                className={`p-2 rounded-lg ${colors.toggleBg}`}
                aria-label="Toggle menu"
                aria-expanded={isMenuOpen}>
                {isMenuOpen ? (
                  <X
                    className={`w-5 h-5 ${darkMode ? "text-white" : "text-gray-700"}`}
                  />
                ) : (
                  <Menu
                    className={`w-5 h-5 ${darkMode ? "text-white" : "text-gray-700"}`}
                  />
                )}
              </motion.button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown */}
        <AnimatePresence>
          {isMenuOpen && (
            <MobileMenu
              darkMode={darkMode}
              navItems={NAV_ITEMS}
              activeSection={activeSection}
              colors={colors}
              onNavClick={handleNavClick}
              onClose={closeMenu}
            />
          )}
        </AnimatePresence>
      </motion.nav>
    </div>
  );
};

export default Navbar;
