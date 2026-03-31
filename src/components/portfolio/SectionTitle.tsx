import { motion } from "framer-motion";

interface SectionTitleProps {
  children: React.ReactNode;
  id: string;
}

const SectionTitle = ({ children, id }: SectionTitleProps) => (
  <motion.h2
    id={id}
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    className="mb-4 text-sm font-bold uppercase tracking-widest text-foreground lg:sr-only"
  >
    {children}
  </motion.h2>
);

export default SectionTitle;
