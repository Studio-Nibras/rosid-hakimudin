interface TechBadgeProps {
  label: string;
}

const TechBadge = ({ label }: TechBadgeProps) => (
  <span className="inline-flex items-center rounded-full bg-badge px-3 py-1 text-xs font-medium text-badge-foreground">
    {label}
  </span>
);

export default TechBadge;
