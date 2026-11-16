export default function SectionHeading({
  tag,
  title,
  desc,
  tagBg = "bg-yellow-300",
  sideBadge,
}: {
  tag: string;
  title: string;
  desc: string;
  tagBg?: string;
  sideBadge?: string;
}) {
  return (
    <div className="relative mb-8 sm:mb-12">
      <div className="flex flex-wrap items-center justify-between gap-3">
        {/* Category Tag */}
        <div
          className={`inline-flex items-center border-2 border-black ${tagBg} px-3 py-1 font-mono text-xs font-black uppercase text-black neo-shadow-sm`}
        >
          <span>{tag}</span>
        </div>

        {sideBadge && (
          <div className="hidden border-2 border-black bg-black px-2.5 py-1 font-mono text-[11px] font-bold text-yellow-300 sm:block">
            {sideBadge}
          </div>
        )}
      </div>

      {/* Section Title */}
      <h2 className="mt-3.5 font-display text-3xl font-black tracking-tight text-black sm:text-4xl md:text-5xl">
        {title}
      </h2>

      {/* Description */}
      <p className="mt-2.5 max-w-2xl font-sans text-sm sm:text-base leading-relaxed font-medium text-black/75">
        {desc}
      </p>

      {/* Clean Divider Underline */}
      <div className="mt-4 h-1 w-12 bg-black" />
    </div>
  );
}
