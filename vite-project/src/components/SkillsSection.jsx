import React, { useEffect, useState } from "react";
import {cn} from "@/lib/utils";


const skills = [
  { name: "HTML/CSS", level: 95, category: "frontend" },
  { name: "JavaScript", level: 90, category: "frontend" },
  { name: "React", level: 90, category: "frontend" },
  { name: "TypeScript", level: 85, category: "frontend" },
  { name: "Tailwind CSS", level: 90, category: "frontend" },
  { name: "Next.js", level: 80, category: "frontend" },

  { name: "Node.js", level: 80, category: "backend" },
  { name: "Express", level: 75, category: "backend" },
  { name: "MongoDB", level: 70, category: "backend" },
  { name: "PostgreSQL", level: 65, category: "backend" },
  { name: "GraphQL", level: 60, category: "backend" },

  { name: "Git/GitHub", level: 90, category: "tools" },
  { name: "Docker", level: 70, category: "tools" },
  { name: "Figma", level: 85, category: "tools" },
  { name: "VS Code", level: 95, category: "tools" }
];


const categories = ["all", "frontend", "backend", "tools"];

const getGradient = (category) => {
  switch (category) {
    case "frontend":
      return ["#00BFFF", "#FF1E56"]; // DeepSkyBlue to Electric Red
    case "backend":
      return ["#00BFFF", "#FFD700"]; // OrangeRed to Gold
    default:
      return ["#FF1493", "#00FFFF"]; // HotPink to Cyan
  }
};

export const SkillsSection = () => {
    const [activeCategory, setActiveCategory] = useState("all");
    const [animated, setAnimated] = useState(false);
    const filteredSkills = skills.filter((skill) => activeCategory === "all" || skill.category === activeCategory
);

  useEffect(() => {
    const timeout = setTimeout(() => setAnimated(true), 300);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Skills</span>
        </h2>

        <div className="flex flx-wrap justify-center gap-4 mb-12">
            {categories.map((category,key) => (
                <button 
                key={key} 
                onClick ={() => setActiveCategory(category)}
                className={cn(
                    "px-5 py-2 rounded-lg transition-colors duration-300 capitalize",
                    activeCategory === category ? "bg-primary text-primary-foreground" : "bg-secondary/70 text-foreground hover:bg-secondary")}>
                    {category}
                </button>
            ))}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 justify-items-center">
          {filteredSkills.map((skill, key) => {
            const [colorStart, colorEnd] = getGradient(skill.category);

            return (
              <div key={key} className="flex flex-col items-center gap-3">
                <div className="relative w-24 h-24">
                  <div
                    className="w-full h-full rounded-full transition-all duration-1000 ease-out"
                    style={{
                      background: animated
                        ? `conic-gradient(${colorStart} 0% ${skill.level / 2}%, ${colorEnd} ${skill.level / 2}% ${skill.level}%,rgb(0, 1, 4) ${skill.level}%)`
                        : `conic-gradient(#e5e7eb 100%)`,
                      transitionDelay: `${key * 100}ms`,
                    }}
                  >
                    <div className="absolute top-1.5 left-1.5 right-1.5 bottom-1.5 bg-card rounded-full flex items-center justify-center">
                      <span className="text-sm font-medium text-muted-foreground">
                        {skill.level}%
                      </span>
                    </div>
                  </div>
                </div>
                <p className="text-sm font-semibold text-center">{skill.name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
