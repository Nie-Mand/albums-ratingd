import { Route, useRouter } from "wouter";

interface Album {
  id: number;
  title: string;
  artist: string;
  cover: string;
  rating: number;
  year: number;
}

const albums: Album[] = [
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

export default function AlbumWrapper() {
  return (
    <Route path="/albums/:albumId">
      {({ albumId }) => <Album id={albumId} />}
    </Route>
  );
}

function Album({ id }: { id: string }) {
  return (
    <div>
      <h1 className="py-4 text-3xl font-semibold text-center">{id}</h1>
      <div className="c grid grid-cols-4">
        {albums.map((album) => (
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

        <div className="font-sans col-span-3 grid grid-cols-2 gap-6 h-min">
          {new Array(5).fill(0).map((_, i) => (
            <div className="flex items-center space-x-4 px-6" key={i}>
              <p className="text-xs">0. </p>
              <h1 className="text-xl font-semibold">Song Title</h1>
              <p className="text-xs">Featurings</p>
              <div className="flex-1"></div>
              <p className="text-xs">Rating</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
