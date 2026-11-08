import ProjectCard, { type Project } from "@/components/ProjectCard";

const projects: Project[] = [
  {
    name: "TaskFlow",
    category: "Full-Stack Task Management",
    description:
      "A full-stack task management application featuring secure JWT authentication, role-based authorization, task management, team collaboration, and profile management.",
    technologies: [
      "React",
      "TypeScript",
      "NestJS",
      "Prisma",
      "PostgreSQL",
      "JWT",
      "Bootstrap",
    ],
    githubUrl: "https://github.com/arifrezaie4-dev/task-manager",
    liveDemoUrl: "https://task-manager-ten-ecru-81.vercel.app/",
  },
];

export default function Projects() {
  return (
    <section
      className="projects-section"
      id="projects"
      aria-labelledby="projects-title"
    >
      <div className="projects-container">
        <div className="projects-heading">
          <div>
            <p className="projects-eyebrow">
              <span className="projects-eyebrow-line" />
              A few things I&apos;ve been working on
            </p>
            <h2 id="projects-title">
              Selected <span>projects</span>
            </h2>
          </div>
          <p className="projects-intro">
            A selection of work, experiments, and ideas brought to life.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard
              index={index}
              key={`${project.name}-${index}`}
              project={project}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
