type FeaturedClipProps = {
  youtubeId: string;
  label?: string;
  title?: string;
  className?: string;
};

export function FeaturedClip({
  youtubeId,
  label,
  title,
  className = "",
}: FeaturedClipProps) {
  const embedUrl = `https://www.youtube-nocookie.com/embed/${youtubeId}?rel=0&modestbranding=1`;

  return (
    <section className={`w-full max-w-xl ${className}`}>
      {label && <p className="eyebrow mb-4 text-center">{label}</p>}
      <div className="overflow-hidden rounded-2xl border border-white/10 bg-black shadow-[0_24px_80px_-24px_rgba(0,0,0,0.8)]">
        <div className="relative aspect-video">
          <iframe
            src={embedUrl}
            title={title ?? "Featured clip"}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            loading="lazy"
            className="absolute inset-0 h-full w-full border-0"
          />
        </div>
      </div>
      {title && (
        <p className="mt-4 text-center text-sm leading-relaxed text-muted-foreground">
          {title}
        </p>
      )}
    </section>
  );
}
