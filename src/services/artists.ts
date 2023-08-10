import { useEffect, useState } from "react";
import { supabase } from "./api";

interface Artist {
  id: string;
  name: string;
  genre: string;
  cover: string;
  rating: number;
}

async function getArtists() {
  const { data } = await supabase.from("_artists").select().order("rating", {
    ascending: false,
  });

  return data as Artist[];
}

export function useArtists() {
  const [artists, setArtists] = useState<Artist[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getArtists()
      .then((data) => setArtists(data))
      .then(() => setLoading(false));
  }, []);

  return {
    artists,
    loading,
  };
}
