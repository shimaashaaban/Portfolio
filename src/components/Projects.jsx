import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";
import project4 from "../assets/project4.png";
import project5 from "../assets/project5.png";
import project6 from "../assets/project6.png";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
const Projects = ({ darkMode }) => {
  const projects = [
    {
      id: 1,
      title: "Airbnb",
      desc: `Final project showcasing a booking application
Created a page with details for the apartment to be reserved using 
ASP .NET MVC`,
      image: project1,
      tags: [".NET", "SqlServer"],
    },
    {
      id: 2,
      title: "Hotel booking",
      desc: "Rest APIs for Hotel Booking using asp .NET Web API.",
      image: project2,
      tags: [".NET", "SqlServer"],
    },
    {
      id: 3,
      title: "E-Receipt",
      desc: `An application for managing e-receipts
Worked on the application using ASP.NET Core Web API`,
      image: project3,
      tags: [".NET", "Sqlserver"],
    },
    {
      id: 4,
      title: "Tax Tech",
      desc: `It's an application I developed and use technologies tools to get
       the highest performance and use RabbitMQ as a tool to get invoices faster.`,
      image: project4,
      tags: [".NET", "Sqlserver"],
    },
    {
      id: 5,
      title: "E-Learning",
      desc: "It's an application where I created the student portal section using asp .NET web Api and asp .NET MVC.",
      image: project5,
      tags: [".NET", "Sqlserver"],
    },
    {
      id: 6,
      title: "Egypt mart",
      desc: `Implemented DevOps setup by configuring servers for deploying the application in production Tested all aspects 
      of the frontend and  backend of the projectUtilized Azure DevOps for continuous integration and deployment`,
      image: project6,
      tags: [".NET", "Sqlserver"],
    },
  ];
  return (
    <section
      id="projects"
      style={{
        backgroundColor: darkMode ? "#111827" : "#f9fafb",
      }}
      className="relative py-24">
      <div className="container mx-auto px-4">
        <div className="text-center  mb-10" data-aos="fade-up">
          <h2
            className="text-3xl sm:text-4xl font-bold mb-3"
            style={{
              color: darkMode ? "white" : "#1f2937",
            }}>
            My{" "}
            <span
              style={{
                background: "linear-gradient(to right,#f97316,#f59e0b)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }}>
              Projects
            </span>
          </h2>
          <p
            className="max-w-xl mx-auto"
            style={{
              color: darkMode ? "#d1d5db" : "#6b7280",
            }}>
            A showcase of my recent work
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {projects.map((project, index) => (
            <div
              key={project.id}
              style={{
                background: darkMode
                  ? "linear-gradient(to right,#1f2937,#111827)"
                  : "linear-gradient(to right,#ffffff,#f9fafb)",
                borderColor: darkMode ? "#374151" : "#e5e7eb",
              }}
              className="group rounded-xl border duration-300 hover:border-orange-500/50 transition-all overflow-hidden"
              data-aos="fade-up"
              data-aos-delay={index * 100}>
              {/* Image */}
              <div className="h-40 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-4">
                <h3
                  className="text-lg font-bold mb-2"
                  style={{
                    color: darkMode ? "white" : "#1f2937",
                  }}>
                  {project.title}
                </h3>

                <p
                  className="text-sm mb-3"
                  style={{
                    color: darkMode ? "#d1d5db" : "#6b7280",
                  }}>
                  {project.desc}
                </p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      style={{
                        backgroundColor: darkMode ? "#374151" : "#f3f4f6",
                        color: darkMode ? "#d1d5db" : "#4b5563",
                      }}
                      className="px-2 py-1 text-xs rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-2">
                  <a
                    href="#"
                    style={{
                      backgroundColor: darkMode ? "#374151" : "#f3f4f6",
                      color: darkMode ? "white" : "#374151",
                    }}
                    className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 text-sm rounded-lg hover:opacity-90
                    transition-colors"
                    data-aos="zoom-in"
                    data-aos-delay="300">
                    <FaGithub className="text-sm" />
                    <span>Code</span>
                  </a>
                  <a
                    href="#"
                    style={{
                      background: "linear-gradient(to right,#f97316,#f59e0b)",
                    }}
                    className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 text-white text-sm rounded-lg hover:shadow-lg hover:shadow-orange-500/25 transition-all
                    "
                    data-aos="zoom-in"
                    data-aos-delay="400">
                    <FaExternalLinkAlt className="text-sm" />
                    <span>Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="#"
            style={{
              background: "linear-gradient(to right,#f97316,#f59e0b)",
            }}
            className="inline-flex items-center font-semibold  gap-2 px-7 py-4 text-white text-sm rounded-full hover:shadow-lg hover:shadow-orange-500/25 transition-all
                    "
            data-aos="zoom-in"
            data-aos-delay="400">
            <FaGithub />
            <span>View All Projects</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
