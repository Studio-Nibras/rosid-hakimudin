import { motion } from "framer-motion";
import { ArrowUpRight, Star, Download } from "lucide-react";
import type { Project } from "@/data/portfolio";
import TechBadge from "./TechBadge";

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1 }}
    className="group glass-card glow-hover p-5 sm:p-6"
  >
    <h3 className="font-medium leading-snug text-foreground">
      <a
        href={project.url || "#"}
        className="inline-flex items-center transition-colors hover:text-primary"
        target="_blank"
        rel="noopener noreferrer"
      >
        {project.title}
        <ArrowUpRight className="ml-1 h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
      </a>
    </h3>

    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
      {project.description}
    </p>

    <div className="mt-3 flex items-center gap-4 text-xs text-muted-foreground">
      {project.stars && (
        <span className="flex items-center gap-1">
          <Star className="h-3.5 w-3.5" /> {project.stars.toLocaleString()}
        </span>
      )}
      {project.installs && (
        <span className="flex items-center gap-1">
          <Download className="h-3.5 w-3.5" /> {project.installs}
        </span>
      )}
    </div>

    <div className="mt-3 flex flex-wrap gap-2">
      {project.technologies.map((tech) => (
        <TechBadge key={tech} label={tech} />
      ))}
    </div>
  </motion.div>
);

export default ProjectCard;
