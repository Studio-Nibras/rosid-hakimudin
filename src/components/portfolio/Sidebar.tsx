import { Github, Linkedin, Twitter, Code2, Mail } from "lucide-react";
import { socialLinks } from "@/data/portfolio";

const iconMap: Record<string, React.ElementType> = {
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter,
  codepen: Code2,
  mail: Mail,
};

const navItems = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
];

interface SidebarProps {
  activeSection: string;
}

const Sidebar = ({ activeSection }: SidebarProps) => (
  <header className="lg:sticky lg:top-0 lg:flex lg:h-screen lg:w-1/2 lg:max-w-md lg:flex-col lg:justify-between lg:py-24 lg:px-6">
    <div>
      <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
        Alex Chen
      </h1>
      <h2 className="mt-3 text-lg font-medium text-primary">
        Frontend Engineer
      </h2>
      <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
        I build accessible, pixel-perfect digital experiences for the web.
      </p>

      <nav className="mt-16 hidden lg:block" aria-label="In-page navigation">
        <ul className="space-y-4">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.slice(1);
            return (
              <li key={item.href}>
                <a
                  href={item.href}
                  className={`group flex items-center gap-3 text-xs font-bold uppercase tracking-widest transition-colors ${
                    isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <span
                    className={`h-px transition-all ${
                      isActive
                        ? "w-16 bg-foreground"
                        : "w-8 bg-muted-foreground group-hover:w-16 group-hover:bg-foreground"
                    }`}
                  />
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>

    <ul className="ml-1 mt-8 flex items-center gap-5" aria-label="Social links">
      {socialLinks.map((link) => {
        const Icon = iconMap[link.icon] || Mail;
        return (
          <li key={link.name}>
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.name}
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              <Icon className="h-5 w-5" />
            </a>
          </li>
        );
      })}
    </ul>
  </header>
);

export default Sidebar;
