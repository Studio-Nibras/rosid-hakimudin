import { motion } from "framer-motion";
import PortfolioLayout from "@/components/portfolio/PortfolioLayout";
import SectionTitle from "@/components/portfolio/SectionTitle";
import ExperienceItem from "@/components/portfolio/ExperienceItem";
import ProjectCard from "@/components/portfolio/ProjectCard";
import ArticleItem from "@/components/portfolio/ArticleItem";
import { bio, experiences, projects, articles } from "@/data/portfolio";
import { ArrowUpRight } from "lucide-react";

const Index = () => (
  <PortfolioLayout>
    {/* ABOUT */}
    <section id="about" className="mb-16 scroll-mt-16 lg:mb-24 lg:scroll-mt-24">
      <SectionTitle id="about-title">About</SectionTitle>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {bio.split("\n\n").map((paragraph, i) => (
          <p
            key={i}
            className="mb-4 text-sm leading-relaxed text-muted-foreground last:mb-0"
          >
            {paragraph}
          </p>
        ))}
      </motion.div>
    </section>

    {/* EXPERIENCE */}
    <section id="experience" className="mb-16 scroll-mt-16 lg:mb-24 lg:scroll-mt-24">
      <SectionTitle id="experience-title">Experience</SectionTitle>
      <div className="space-y-4">
        {experiences.map((exp, i) => (
          <ExperienceItem key={exp.company} experience={exp} index={i} />
        ))}
      </div>
      <motion.a
        href="#"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-foreground transition-colors hover:text-primary"
      >
        View Full Résumé
        <ArrowUpRight className="h-4 w-4" />
      </motion.a>
    </section>

    {/* PROJECTS */}
    <section id="projects" className="mb-16 scroll-mt-16 lg:mb-24 lg:scroll-mt-24">
      <SectionTitle id="projects-title">Projects</SectionTitle>
      <div className="space-y-4">
        {projects.map((project, i) => (
          <ProjectCard key={project.title} project={project} index={i} />
        ))}
      </div>
      <motion.a
        href="#"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-foreground transition-colors hover:text-primary"
      >
        View Full Project Archive
        <ArrowUpRight className="h-4 w-4" />
      </motion.a>
    </section>

    {/* ARTICLES */}
    <section className="mb-16 scroll-mt-16 lg:mb-24 lg:scroll-mt-24">
      <SectionTitle id="articles-title">Writing</SectionTitle>
      <div className="space-y-1">
        {articles.map((article, i) => (
          <ArticleItem key={article.title} article={article} index={i} />
        ))}
      </div>
    </section>

    {/* FOOTER */}
    <footer className="pb-16 text-xs text-muted-foreground lg:pb-24">
      <p>
        Designed and coded with care. Built with{" "}
        <span className="text-foreground/70">React</span> and{" "}
        <span className="text-foreground/70">Tailwind CSS</span>.
      </p>
    </footer>
  </PortfolioLayout>
);

export default Index;
