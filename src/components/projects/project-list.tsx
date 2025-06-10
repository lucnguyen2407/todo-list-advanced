"use client";

import { ProjectCard } from "./project-card";
import type { Project } from "@/lib/types";

// Mock data
const mockProjects: Project[] = [
  {
    id: "1",
    name: "Website Redesign",
    description: "Complete redesign of the company website with modern UI/UX",
    color: "#3B82F6",
    taskCount: 12,
    completedTasks: 9,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "2",
    name: "Mobile App",
    description: "Development of iOS and Android mobile application",
    color: "#10B981",
    taskCount: 8,
    completedTasks: 3,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "3",
    name: "Marketing Campaign",
    description: "Q1 marketing campaign for product launch",
    color: "#F59E0B",
    taskCount: 5,
    completedTasks: 4,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

export function ProjectList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {mockProjects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
}
