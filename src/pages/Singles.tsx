import { useSingles } from "@/services/songs";
import { Route } from "wouter";

interface Single {
  id: number;
  title: string;
  artist: string;
  cover: string;
  rating: number;
  year: number;
}

export default function Wrapper() {
  return (
    <Route path="/singles">
      <Singles />
    </Route>
  );
}

function Singles() {
  const { singles, loading } = useSingles();

  if (loading) {
    return <h1 className="py-40 text-center">Loading...</h1>;
  }

  return (
    <div>
      <h1 className="py-4 text-3xl font-semibold text-center">Singles</h1>
      <div className="c grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
        {singles.map((single) => (
          <div key={single.id} className="bg-[#212223]">
            <img
              src={single.cover}
              alt={single.title}
              className="w-full rounded-lg h-60 object-cover"
            />
            <div className="p-4 flex justify-between items-center">
              <div>
                <h3 className="text-2xl font-black">{single.artist}</h3>
                <h4 className="text-lg">
                  <span className="text-xs ml-2">({single.year})</span>
                </h4>
              </div>
              <div className="text-4xl font-black">
                {single.rate ? single.rate.toFixed(1) : "N/A"}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
