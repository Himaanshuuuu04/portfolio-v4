import React, { useState } from "react";

const CategoryIcons = {
  Education: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-6 h-6 text-[var(--sec)] opacity-70"
    >
      <path d="M12 3L1 9L12 15L21 10.09V17H23V9L12 3ZM5 13.18V17.18L12 21L19 17.18V13.18L12 17L5 13.18Z"></path>
    </svg>
  ),
  "Position of Responsibility": (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-6 h-6 text-[var(--sec)] opacity-70"
    >
      <path d="M12 2C13.1046 2 14 2.89543 14 4C14 5.10457 13.1046 6 12 6C10.8954 6 10 5.10457 10 4C10 2.89543 10.8954 2 12 2ZM21 9V7C21 6.44772 20.5523 6 20 6H16.5C16.1022 6 15.7206 6.15804 15.4393 6.43934L12 9.87868L8.56066 6.43934C8.27936 6.15804 7.89782 6 7.5 6H4C3.44772 6 3 6.44772 3 7V9C3 9.55228 3.44772 10 4 10H7.5L12 14.5L16.5 10H20C20.5523 10 21 9.55228 21 9ZM12 16.1213L7.18934 11.3107C6.43553 11.7383 5.74514 12.2997 5.15165 12.9712L12 19.8198L18.8484 12.9712C18.2549 12.2997 17.5645 11.7383 16.8107 11.3107L12 16.1213Z"></path>
    </svg>
  ),
  Achievements: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-6 h-6 text-[var(--sec)] opacity-70"
    >
      <path d="M12 7C13.6569 7 15 8.34315 15 10C15 11.6569 13.6569 13 12 13C10.3431 13 9 11.6569 9 10C9 8.34315 10.3431 7 12 7ZM12 9C11.4477 9 11 9.44772 11 10C11 10.5523 11.4477 11 12 11C12.5523 11 13 10.5523 13 10C13 9.44772 12.5523 9 12 9ZM18 7V5H16.5C16.1056 5 15.7833 4.67775 15.7833 4.28333V2.71667C15.7833 2.32225 16.1056 2 16.5 2H21.5C21.8944 2 22.2167 2.32225 22.2167 2.71667V4.28333C22.2167 4.67775 21.8944 5 21.5 5H20V7C20 10.866 16.866 14 13 14H11C7.134 14 4 10.866 4 7V5H2.5C2.10558 5 1.78333 4.67775 1.78333 4.28333V2.71667C1.78333 2.32225 2.10558 2 2.5 2H7.5C7.89442 2 8.21667 2.32225 8.21667 2.71667V4.28333C8.21667 4.67775 7.89442 5 7.5 5H6V7C6 9.76142 8.23858 12 11 12H13C15.7614 12 18 9.76142 18 7ZM12 15C14.7614 15 17 17.2386 17 20V22H7V20C7 17.2386 9.23858 15 12 15ZM12 17C10.3431 17 9 18.3431 9 20H15C15 18.3431 13.6569 17 12 17Z"></path>
    </svg>
  ),
};

const SkillsList = () => {
  const [openItem, setOpenItem] = useState<string | null>(null);

const skills = {
  Education: [
    "B.Tech in Computer Science (2023–2027), JIIT Noida",
    "D.A.V Public School, Faridabad – PCM, 9.87 CGPA (2010–2023)",
  ],
  "Position of Responsibility": [
    "Frontend Developer, GDG (Aug 2024–Present): Improved UI, hosted tech workshops, mentored juniors",
    "Cinematography & Design Lead, Cinekala (Sept 2023–Present): Produced event content, led film workshops",
  ],
  Achievements: [
    "Web Dev Bootcamp by Dr. Angela Yu – 60+ hrs (HTML, CSS, JS, React, Node, PostgreSQL, Web3)",
    "Smart India Hackathon'24 (Internal Winner): Built scalable EdTech platform with 10K+ users",
    "Google Cloud Study Jams'23: Completed foundations in cloud infrastructure (VMs, storage, networking)",
  ],
};


  const toggleItem = (item: string) => {
    setOpenItem(openItem === item ? null : item);
  };

  return (
    <div className="text-left pt-3 md:pt-9 ">
      <h3 className="text-[var(--white)] text-3xl md:text-4xl font-semibold md:mb-6">
        About Me
      </h3>
      <ul className="space-y-4 mt-4 text-lg">
        {Object.entries(skills).map(([category, items]) => (
          <li key={category} className="w-full">
            <div
              onClick={() => toggleItem(category)}
              className="md:w-[400px] w-full bg-[#1414149c] rounded-2xl text-left hover:bg-opacity-80 transition-all border border-[var(--white-icon-tr)] cursor-pointer overflow-hidden"
            >
              <div className="flex items-center gap-3 p-4">
                {CategoryIcons[category]}
                <div className="flex items-center gap-2 flex-grow justify-between">
                  <div className="min-w-0 max-w-[200px] md:max-w-none overflow-hidden">
                    <span className="block truncate text-[var(--white)] text-lg">
                      {category}
                    </span>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className={`w-6 h-6 text-[var(--white)] transform transition-transform flex-shrink-0 ${
                      openItem === category ? "rotate-180" : ""
                    }`}
                  >
                    <path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path>
                  </svg>
                </div>
              </div>

              <div
                className={`transition-all duration-300 px-4 ${
                  openItem === category
                    ? "max-h-[500px] pb-4 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <ul className="space-y-2 text-[var(--white-icon)] text-sm">
                  {items.map((item, index) => (
                    <div key={index} className="flex items-center">
                      <span className="pl-1">•</span>
                      <li className="pl-3">{item}</li>
                    </div>
                  ))}
                </ul>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SkillsList;
