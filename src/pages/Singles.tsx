import { Route } from "wouter";

interface Single {
  id: number;
  title: string;
  artist: string;
  cover: string;
  rating: number;
  year: number;
}

const singles: Single[] = [
  {
    id: 1,
    title: "The Dark Side of the Moon",
    artist: "Pink Floyd",
    cover:
      "https://s11279.pcdn.co/wp-content/uploads/2023/07/utopia-630x630.jpg",
    rating: 5,
    year: 1973,
  },
];

export default function Singles() {
  return (
    <Route path="/singles">
      <h1 className="py-4 text-3xl font-semibold text-center">Singles</h1>
      <div className="c grid grid-cols-4">
        {singles.map((album) => (
          <div key={album.id} className="bg-[#212223] relative">
            <img src={album.cover} alt={album.title} />
            <div className="p-4">
              <h3 className="text-2xl font-black">{album.title}</h3>
              <h4 className="text-lg">
                {album.artist}
                <span className="text-xs ml-2">({album.year})</span>
              </h4>
            </div>
            <div className="text-2xl text-purple-600 font-black absolute top-0 w-full">
              {album.rating}
            </div>
          </div>
        ))}
      </div>
    </Route>
  );
}
