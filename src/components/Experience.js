import React from "react";
import "./Experience.css";

export default function Experience() {
  const experiences = [
    {
      title: "Frontend Software Developer Intern",
      org: "TechElevate",
      date: "Jan 2025 – May 2025 & June 2025 - August 2025",
      desc: "Built a secure Firebase Authentication SDK-based login system supporting 100+ users, integrated with cloud backend services. Designed and deployed responsive React + TypeScript components connected to real-time APIs, and optimized authentication workflows to boost performance and scalability.",
      img: "/experience/techelevate.png"
    },
    
  ];

  return (
    <section id="experience" className="experience">
      <h2 className="exp-title">Experience</h2>
      <div className="exp-list">
        {experiences.map((exp, i) => (
          <div key={i} className="exp-item">
            <div className="exp-text">
              <h3>{exp.title}</h3>
              <p className="exp-org">{exp.org} | <span>{exp.date}</span></p>
              <p>{exp.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}