import { useAlbums } from "@/services/albums";
import { useAlbumsRating } from "@/services/songs";
import { Link, Route } from "wouter";

export default function Wrapper() {
  return (
    <Route path="/">
      <EPs />
    </Route>
  );
}

function EPs() {
  const { albums, loading } = useAlbums("EP");

  if (loading) {
    return <h1 className="py-40 text-center">Loading...</h1>;
  }

  return (
    <div>
      <h1 className="py-4 text-3xl font-semibold text-center">Albums</h1>
      <div className="c grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
        {albums.map((album) => (
          <Link key={album.id} href={`/eps/${album.id}`}>
            <a>
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
        ))}
      </div>
    </div>
  );
}
