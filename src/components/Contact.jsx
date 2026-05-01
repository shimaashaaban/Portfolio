import contactImg from "../assets/contact.png";

const inputFields = [
  { type: "text", placeholder: "First Name", extraClass: "", colSpan: false },
  { type: "text", placeholder: "Last Name", extraClass: "", colSpan: false },
  {
    type: "email",
    placeholder: "Email Address",
    extraClass: "mb-4 sm:mb-6 resize-none",
    colSpan: false,
  },
  {
    type: "tel",
    placeholder: "Phone Number",
    extraClass: "mb-4 sm:mb-6 resize-none",
    colSpan: false,
  },
];

const getInputStyles = (darkMode) => ({
  backgroundColor: darkMode ? "#374151" : "#faede3",
  borderColor: darkMode ? "#4b5563" : "#d1d5db",
  color: darkMode ? "white" : "#1f2937",
});

const BASE_INPUT_CLASS =
  "w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg text-sm sm:text-base " +
  "border focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all";
const Email_Phone_Class =
  "w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg text-sm sm:text-base " +
  "border focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all mb-4 sm:mb-6 resize-none";

const Contact = ({ darkMode }) => {
  const inputStyles = getInputStyles(darkMode);

  return (
    <section
      id="contact"
      style={{ backgroundColor: darkMode ? "#111827" : "#f9fafb" }}
      className="py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12" data-aos="fade-up">
          <h2
            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-3"
            style={{ color: darkMode ? "white" : "#1f2937" }}>
            Get In{" "}
            <span
              style={{
                background: "linear-gradient(to right, #f97316, #f59e0b)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }}>
              Touch
            </span>
          </h2>
          <p
            className="text-base sm:text-lg md:text-xl"
            style={{ color: darkMode ? "#d1d5db" : "#6b7280" }}>
            Let's discuss your project
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 items-center">
          {/* Illustration */}
          <div
            className="flex justify-center order-2 lg:order-1"
            data-aos="fade-right">
            <img
              src={contactImg}
              alt="Contact illustration"
              className="w-full max-w-xs sm:max-w-sm lg:max-w-md h-auto object-contain"
            />
          </div>

          {/* Form */}
          <form
            style={{
              background: darkMode
                ? "linear-gradient(to right, #1f2937, #111827)"
                : "linear-gradient(to right, #ffffff, #f9fafb)",
              borderColor: darkMode ? "#374151" : "#e5e7eb",
            }}
            className="rounded-xl p-4 sm:p-5 md:p-6 lg:p-8 border shadow-lg order-1 lg:order-2"
            data-aos="fade-left">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-3 sm:mb-4">
              {/* Text / Email / Tel Inputs */}
              {inputFields.map(({ type, placeholder, extraClass }) => (
                <input
                  key={placeholder}
                  type={type}
                  placeholder={placeholder}
                  style={inputStyles}
                  className={`${BASE_INPUT_CLASS} ${extraClass}`.trim()}
                  required
                />
              ))}

              {/* Message Textarea */}
              <textarea
                rows={4}
                placeholder="Your Message"
                style={inputStyles}
                className={`col-span-1 sm:col-span-2 ${BASE_INPUT_CLASS} resize-none`}
                required
              />

              {/* Submit Button */}
              <button
                type="submit"
                style={{
                  background: "linear-gradient(to right, #f97316, #f59e0b)",
                }}
                className="col-span-1 sm:col-span-2 w-full py-2 sm:py-3 text-white font-semibold
                           rounded-lg text-sm sm:text-base hover:shadow-lg hover:shadow-orange-500/25
                           hover:scale-[1.02] transition-all duration-300">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
