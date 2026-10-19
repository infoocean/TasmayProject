type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  centered?: boolean;
  light?: boolean;
};

export function SectionHeading({ eyebrow, title, description, centered = false, light = false }: SectionHeadingProps) {
  return (
    <div className={`section-heading${centered ? " section-heading--center" : ""}${light ? " section-heading--light" : ""}`}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2>{title}</h2>
      {description && <p className="section-heading__description">{description}</p>}
    </div>
  );
}
