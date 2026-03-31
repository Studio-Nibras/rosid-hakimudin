import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { Article } from "@/data/portfolio";

interface ArticleItemProps {
  article: Article;
  index: number;
}

const ArticleItem = ({ article, index }: ArticleItemProps) => (
  <motion.a
    href={article.url || "#"}
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.08 }}
    className="group flex items-start gap-4 rounded-lg p-3 transition-colors hover:bg-secondary/40"
  >
    <span className="shrink-0 pt-0.5 text-xs font-semibold text-muted-foreground">
      {article.year}
    </span>
    <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors flex items-center gap-1">
      {article.title}
      <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition-all group-hover:opacity-100 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
    </span>
  </motion.a>
);

export default ArticleItem;
