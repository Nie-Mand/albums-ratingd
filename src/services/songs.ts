import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { supabase } from "./api";

interface Song {
  id: string;
  title: string;
  cover: string;
  year: number;
  artist: string;
  rate: number;
  features: string[];
}

async function getAlbumsSongs(album: string) {
  const { data } = await supabase
    .from("songs")
    .select()
    .eq("album", album)
    .order("created_at");
  if (!data || data.length === 0) {
    throw new Error("Song not found");
  }

  return data as Song[];
}

export function useAlbumsSongs(album: string) {
  const [songs, setSongs] = useState<Song[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAlbumsSongs(album)
      .then((data) => setSongs(data))
      .then(() => setLoading(false));
  }, []);

  return {
    songs,
    loading,
  };
}

async function getAlbumRating(album: string) {
  const { data } = await supabase
    .from("songs")
    .select("avg(rate)")
    .eq("album", album);

  if (!data || data.length === 0) {
    throw new Error("Error");
  }

  return data[0].avg[0].rate;
}

export function useAlbumsRating(album: string) {
  const [rating, setRating] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAlbumRating(album)
      .then((data) => setRating(data))
      .then(() => setLoading(false));
  }, []);

  return {
    rating,
    loading,
  };
}

async function getSingles() {
  const { data } = await supabase
    .from("songs")
    .select()
    .is("album", null)
    .order("created_at");
  if (!data || data.length === 0) {
    throw new Error("Song not found");
  }

  return data as Song[];
}

export function useSingles() {
  const { isLoading, data } = useQuery("get-singles", getSingles);

  return {
    singles: data || [],
    loading: isLoading,
  };
}
