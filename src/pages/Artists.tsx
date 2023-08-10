import { useArtists } from "@/services/artists";
import { Route } from "wouter";

export default function Wrapper() {
  return (
    <Route path="/artists">
      <Artists />
    </Route>
  );
}

function Artists() {
  const { artists, loading } = useArtists();
  if (loading) {
    return <h1 className="py-40 text-center">Loading...</h1>;
  }
  return (
    <div>
      <h1 className="py-4 text-3xl font-semibold text-center">Artists</h1>
      <div className="c grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
        {artists.map((artist) => (
          <div key={artist.id} className="bg-[#212223]">
            <img
              src={artist.cover}
              alt={artist.name}
              className="w-full rounded-lg h-60 object-cover"
            />
            <div className="p-4 flex justify-between items-center">
              <div>
                <h3 className="text-2xl font-black">{artist.name}</h3>
                <h4 className="text-lg">
                  {artist.genre}
                  {/* <span className="text-xs ml-2">({album.year})</span> */}
                </h4>
              </div>
              <div className="text-4xl font-black">
                {artist.rating ? artist.rating.toFixed(1) : "N/A"}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
