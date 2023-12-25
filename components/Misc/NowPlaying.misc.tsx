import type { NowPlayingSong } from "../../@types/now-playing-song.type";
import Image from "next/image";
import Link from "next/link";
import useSWR from "swr";
import { fetcher } from "../../lib/fetcher";
import useRevealAnimation from "../../lib/hooks/useRevealAnimation";

const SpotifyCard = () => {
  const { data } = useSWR<NowPlayingSong>("/api/now-playing", fetcher);
  const { ref } = useRevealAnimation();

  return (
    <div ref={ref} className="p-4 max-w-full rounded-lg shadow-lg border border-green-500 mb-3 hidden-component spotify-card-container">
      <div className="font-sen flex flex-row items-center gap-x-2 text-center md:text-lg text-gray-300">
        {data?.isPlaying ? (
          <>
            <Link className="flex items-center gap-x-2 md:gap-x-4 cursor-pointer truncate" href={data?.songUrl} passHref
            prefetch={false}>
              <Image
                src={data.albumImageUrl}
                width={data?.isPlaying ? "40" : "60"} // Smaller width on mobile
                height={data?.isPlaying ? "40" : "60"} // Smaller height on mobile
                alt={data?.title}
                className="md:w-16 md:h-16" // Adjust size on larger screens
              />
              <span className="text-white  md:text-xs lg:text-lg truncate">{data?.title}</span>
            </Link>
            <div className="pb-4 md:pb-8 pl-1 md:pl-2">
              <Image
                src="/assets/spotify.svg"
                width="15" // Smaller width on mobile
                height="15" // Smaller height on mobile
                alt="spotify icon"
                className="md:w-5 md:h-5" // Adjust size on larger screens
              />
            </div>
          </>
        ) : (
          <>
            <Image
              src="/assets/spotify.svg"
              width="30" // Smaller width on mobile
              height="30" // Smaller height on mobile
              alt="spotify icon"
              className="md:w-10 md:h-10" // Adjust size on larger screens
            />
            <p className="text-sm md:text-base">I&apos;m currently not listening to anything.</p>
          </>
        )}
      </div>
    </div>
  );
};

export default SpotifyCard;
