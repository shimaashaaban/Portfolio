import Csharp from "../assets/CSharp.png";
import Angular from "../assets/Angular.png";
import DotnetCore from "../assets/DotnetCore.png";
import Cplusplus from "../assets/Cplusplus.png";
import Sqlserver from "../assets/sqlserver.png";
import Javascript from "../assets/js.png";
import PostgreSql from "../assets/postgre.png";
import Redis from "../assets/redis.png";
import RabbitMQ from "../assets/RabbitMQ.png";
import Docker from "../assets/docker.png";
const Skills = ({ darkMode }) => {
  const skills = [
    {
      name: "C plus plus",
      icon: Cplusplus,
      level: 95,
      color: "from-orange-500 to-amber-500",
    },
    {
      name: "Java script",
      icon: Javascript,
      level: 95,
      color: "from-blue-500 to-cyan-500",
    },
    {
      name: "C Sharp",
      icon: Csharp,
      level: 95,
      color: "from-yellow-500 to-amber-500",
    },
    {
      name: ".NET Core",
      icon: DotnetCore,
      level: 97,
      color: "from-cyan-500 to-blue-500",
    },
    {
      name: "Sql server",
      icon: Sqlserver,
      level: 95,
      color: "from-teal-500 to-cyan-500",
    },
    {
      name: "Angular",
      icon: Angular,
      level: 80,
      color: "from-green-500 to-emerald-500",
    },
    {
      name: "Postgre Sql",
      icon: PostgreSql,
      level: 60,
      color: "from-blue-500 to-indigo-500",
    },
    {
      name: "Rabbit MQ",
      icon: RabbitMQ,
      level: 80,
      color: "from-red-500 to-orange-500",
    },
    {
      name: "Docker",
      icon: Docker,
      level: 80,
      color: "from-blue-500 to-indigo-500",
    },
    {
      name: "Redis",
      icon: Redis,
      level: 50,
      color: "from-red-500 to-orange-500",
    },
  ];
  return (
    <section
      id="skills"
      style={{
        backgroundColor: darkMode ? "#111827" : "#f9fafb",
      }}
      className="py-14 relative overflow-hidden">
      <div className="py-14 relative overflow-hidden">
        <div className="container px-5 py-14 mx-auto">
          <div className="text-center mb-20" data-aos="fade-up">
            <h1
              className="sm:text-4xl text-3xl font-bold title-font mb-4"
              style={{
                color: darkMode ? "white" : "#1f2937",
              }}>
              My
              <span
                className="ml-3"
                style={{
                  background: "linear-gradient(to right,#f97316,#f59e0b)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                }}>
                Skills
              </span>
            </h1>
            <p
              className="text-lg max-w-2xl mx-auto leading-relaxed"
              style={{
                color: darkMode ? "#d1d5db" : "#4b5563",
              }}>
              I am a dedicated full-stack developer skilled in building robust
              backend systems, and implementing secure authentication systems.
              My focus is on performance, scalability, and clean architecture to
              deliver high-quality solutions.
            </p>
          </div>
          <div
            className="flex flex-wrap -m-4"
            data-aos="fade-up"
            data-aos-delay="200">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="p-4 lg:w-1/4 md:w-1/2 w-full"
                data-aos="fade-up"
                data-aos-delay={`${300 + index * 100}`}>
                <div
                  style={{
                    background: darkMode
                      ? "linear-gradient(to bottom right,#1f2937,#111827)"
                      : "linear-gradient(to bottom right,#ffffff,#f3f4f6)",
                    borderColor: darkMode ? "#374151" : "#e5e7eb",
                  }}
                  className="h-full p-6 rounded-2xl border transition-all duration-300 
        hover:-translate-y-2 group hover:shadow-[0_0_30px_rgba(255,165,0,0.15)]">
                  {/* ICON */}
                  <div
                    style={{
                      background: darkMode
                        ? "linear-gradient(to bottom right,#374151,#1f2937)"
                        : "linear-gradient(to bottom right,#f3f4f6,#e5e7eb)",
                    }}
                    className="w-16 h-16 rounded-xl p-3 flex items-center justify-center 
          group-hover:scale-110 transition-transform duration-300">
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  {/* TITLE */}
                  <h3
                    className="text-xl font-bold mt-4"
                    style={{
                      color: darkMode ? "white" : "#1f2937",
                    }}>
                    {skill.name}
                  </h3>
                  <div className="mb-2 flex justify-between items-center">
                    <span
                      className="font-medium"
                      style={{
                        color: darkMode ? "#d1d5db" : "#6b7280",
                      }}>
                      Proficiency
                    </span>
                    <span
                      style={{
                        background:
                          "linear-gradient(to right, #f97316, #f59e0b)",
                        WebkitBackgroundClip: "text",
                        backgroundClip: "text",
                        color: "transparent",
                      }}
                      className="font-bold">
                      {skill.level}%
                    </span>
                  </div>
                  <div
                    className="w-full rounded-full h-3 overflow-hidden"
                    style={{
                      backgroundColor: darkMode ? "#374151" : "#e5e7eb",
                    }}>
                    <div
                      className={`h-full rounded-full bg-linear-to-r ${skill.color} transition-all duration-1000 
                      ease-out`}
                      style={{ width: `${skill.level}%` }}></div>
                  </div>
                  <div
                    className={`mt-6 pt-4 border-t ${darkMode ? "border-gray-700" : "border-gray-300"}`}>
                    <div
                      className="h-1 rounded-full opacity-70 group-hover:w-full transition-all duration-500 w-1/3"
                      style={{
                        background:
                          "linear-gradient(to right, #f97316, #f59e0b)",
                      }}></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
