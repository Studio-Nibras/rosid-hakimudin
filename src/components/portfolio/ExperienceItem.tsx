import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { Experience } from "@/data/portfolio";
import TechBadge from "./TechBadge";

interface ExperienceItemProps {
  experience: Experience;
  index: number;
}

const ExperienceItem = ({ experience, index }: ExperienceItemProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1 }}
    className="group glass-card glow-hover p-5 sm:p-6"
  >
    <div className="sm:grid sm:grid-cols-[140px_1fr] sm:gap-6">
      <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground sm:mb-0 sm:pt-1">
        {experience.period}
      </p>

      <div>
        <h3 className="font-medium leading-snug text-foreground">
          {experience.role} ·{" "}
          <a
            href={experience.companyUrl}
            className="inline-flex items-center text-primary transition-colors hover:text-primary/80"
            target="_blank"
            rel="noopener noreferrer"
          >
            {experience.company}
            <ArrowUpRight className="ml-0.5 h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </h3>

        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          {experience.description}
        </p>

        {experience.products && (
          <p className="mt-2 text-xs text-muted-foreground">
            {experience.products.map((p, i) => (
              <span key={p}>
                {i > 0 && " · "}
                <span className="text-foreground/70">✦ {p}</span>
              </span>
            ))}
          </p>
        )}

        <div className="mt-3 flex flex-wrap gap-2">
          {experience.technologies.map((tech) => (
            <TechBadge key={tech} label={tech} />
          ))}
        </div>
      </div>
    </div>
  </motion.div>
);

export default ExperienceItem;
