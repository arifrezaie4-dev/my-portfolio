export type Project = {
  name: string;
  category: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveDemoUrl?: string;
};

type ProjectCardProps = {
  project: Project;
  index: number;
};

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 16 16" fill="none">
      <path d="M3.5 12.5 12 4m0 0H5m7 0v7" />
    </svg>
  );
}

function ProjectLink({
  href,
  children,
}: {
  href?: string;
  children: string;
}) {
  if (!href) {
    return (
      <span className="project-action project-action-unavailable" aria-disabled="true">
        {children}
        <span className="project-action-status">Soon</span>
      </span>
    );
  }

  return (
    <a
      className="project-action"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
      <ArrowIcon />
    </a>
  );
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const visualVariant = (index % 3) + 1;

  return (
    <article className="project-card">
      <div
        className={`project-art project-art-${visualVariant}`}
        aria-hidden="true"
      >
        <div className="project-art-glow" />
        <div className="project-window">
          <div className="project-window-bar">
            <span />
            <span />
            <span />
            <span className="project-window-label">preview</span>
          </div>
          <div className="project-window-content">
            <span className="project-placeholder-line project-placeholder-short" />
            <span className="project-placeholder-line project-placeholder-medium" />
            <span className="project-placeholder-block" />
            <span className="project-placeholder-line project-placeholder-long" />
            <span className="project-placeholder-line project-placeholder-medium" />
          </div>
        </div>
        <span className="project-art-index">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      <div className="project-card-content">
        <div className="project-card-heading">
          <h3>{project.name}</h3>
          <span className="project-category">{project.category}</span>
        </div>
        <p className="project-card-description">{project.description}</p>

        <div className="project-technologies" aria-label="Technologies">
          {project.technologies.map((technology) => (
            <span className="project-tech-tag" key={technology}>
              {technology}
            </span>
          ))}
        </div>

        <div className="project-card-actions">
          <ProjectLink href={project.githubUrl}>GitHub</ProjectLink>
          <ProjectLink href={project.liveDemoUrl}>Live demo</ProjectLink>
        </div>
      </div>
    </article>
  );
}
