import { useAlbum } from "@/services/albums";
import { useAlbumsRating, useAlbumsSongs } from "@/services/songs";
import { Link, Route, useRouter } from "wouter";

export default function Wrapper() {
  return (
    <Route path="/eps/:epId">
      {({ epId }) => <EP id={epId} />}
    </Route>
  );
}

function EP({ id }: { id: string }) {
  const { album, loading } = useAlbum(id, "EP")

  const { songs, loading: songsLoading } = useAlbumsSongs(id, "EP");

  if (loading || songsLoading || !album) {
    return <h1 className="py-40 text-center">Loading...</h1>;
  }

  return (
    <div>
      <h1 className="py-4 text-3xl font-semibold text-center">{id}</h1>
      <div className="c grid grid-cols-4">
        <Link key={album.id} href={`/eps/${album.id}`}>
          <a className="col-span-4 md:col-span-1">
            <div className="bg-[#212223]">
              <img
                src={album.cover}
                alt={album.title}
                className="w-full rounded-lg h-60 object-cover"
              />
              <div className="p-4 flex justify-between items-center">
                <div>
                  <h3 className="text-2xl font-black">{album.title}</h3>
                  <h4 className="text-lg">
                    {album.artist}
                    <span className="text-xs ml-2">({album.year})</span>
                  </h4>
                </div>
                <div className="text-4xl font-black">
                  {album.rating.toFixed(1)}
                </div>
              </div>
            </div>
          </a>
        </Link>

        <div className="col-span-4 md:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-6 h-min">
          {songs.map((song, i) => (
            <div className="flex items-center space-x-4 px-6" key={i}>
              <p className="text-xs">{i + 1}. </p>
              <h1 className="text-xl font-semibold">{song.title}</h1>
              <p className="text-xs">{song.features?.join(", ")}</p>
              <div className="flex-1"></div>
              <p className="text-xs">{song.rate}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
