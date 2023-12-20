import type { NextComponentType } from "next";
import type { NowPlayingSong } from "../../@types/now-playing-song.type";

import Image from "next/image";
import Link from "next/link";

import useSWR from "swr";
import { fetcher } from "../../lib/fetcher";

const SpotifyCard: NextComponentType = () => {
  const { data, error } = useSWR<NowPlayingSong>("/api/now-playing", fetcher);

  return (
    <div className="p-4 max-w-full rounded-lg shadow-lg border border-green-500 mb-3">
      <div className="font-sen flex flex-row items-center gap-x-2 text-center text-lg text-gray-300">
        {data?.isPlaying ? (
          <>
            <Link className="flex items-center gap-x-4 cursor-pointer truncate" href={data?.songUrl} passHref>
              <Image className=""
                src={data.albumImageUrl} width="60" height="60" alt={data?.title} />
              <span className="text-white">{data?.title}</span>
            </Link>
            <div className="pb-8 pl-2">
              <Image
                src="/assests/spotify.svg"
                width="20"
                height="20"
                alt="spotify icon"
              />
            </div>
          </>
        ) : (
          <>
            <Image
              src="/assests/spotify.svg"
              width="40"
              height="40"
              alt="spotify icon"
            />
            <p>I&apos;m currently not listening to anything.</p>
          </>
        )}
      </div>
    </div>
  );
};

export default SpotifyCard;


