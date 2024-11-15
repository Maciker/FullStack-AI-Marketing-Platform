import Link from "next/link";
import React from "react";

export default function ProjectsPage() {
  const projects = [
    { id: 1, name: "Project 1", description: "Description 1" },
    { id: 2, name: "Project 2", description: "Description 2" },
    { id: 3, name: "Project 3", description: "Description 3" },
    { id: 4, name: "Project 4", description: "Description 4" },
    { id: 5, name: "Project 5", description: "Description 5" },
    { id: 6, name: "Project 6", description: "Description 6" },
    { id: 7, name: "Project 7", description: "Description 7" },
    { id: 8, name: "Project 8", description: "Description 8" },
    { id: 9, name: "Project 9", description: "Description 9" },
    { id: 10, name: "Project 10", description: "Description 10" },
  ];
  return (
    <div>
      <h1>Projects</h1>
      <ul>
        {projects.map((project) => (
          <li key={project.id}>
            <Link href={`/project/${project.id}`}>{project.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
