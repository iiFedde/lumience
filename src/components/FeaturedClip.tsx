type FeaturedClipProps = {
  youtubeId: string;
  spotifyTrackId?: string;
  title?: string;
  className?: string;
};

export function FeaturedClip({
  youtubeId,
  spotifyTrackId,
  title,
  className = "",
}: FeaturedClipProps) {
  const embedUrl = `https://www.youtube-nocookie.com/embed/${youtubeId}?rel=0&modestbranding=1`;
  const spotifyEmbed = spotifyTrackId
    ? `https://open.spotify.com/embed/track/${spotifyTrackId}?utm_source=generator&theme=0`
    : null;

  return (
    <section className={`w-full max-w-5xl ${className}`}>
      <div className="grid items-center gap-8 md:grid-cols-2 md:gap-10">
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

        {spotifyEmbed && (
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#121212] shadow-[0_24px_80px_-24px_rgba(0,0,0,0.8)]">
            <iframe
              src={spotifyEmbed}
              title="Spotify"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              className="h-[352px] w-full border-0 md:h-full md:min-h-[280px]"
            />
          </div>
        )}
      </div>

      {title && (
        <p className="mt-6 text-center text-sm leading-relaxed text-muted-foreground">
          {title}
        </p>
      )}
    </section>
  );
}
