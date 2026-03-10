interface SectionHeadingProps {
  eyebrow?: string;
  heading: string;
  subheading?: string;
  center?: boolean;
}

export default function SectionHeading({ eyebrow, heading, subheading, center = false }: SectionHeadingProps) {
  return (
    <div className={center ? "text-center max-w-2xl mx-auto" : "max-w-2xl"}>
      {eyebrow && (
        <p className="font-body text-xs tracking-widest uppercase text-terra-600 mb-3 font-medium">
          {eyebrow}
        </p>
      )}
      <h2 className="font-display text-4xl lg:text-5xl font-light text-charcoal leading-tight">
        {heading}
      </h2>
      {subheading && (
        <p className="font-body text-base text-charcoal/60 mt-4 leading-relaxed">
          {subheading}
        </p>
      )}
    </div>
  );
}
