import { useEffect, useState } from "react";
import { supabase } from "./api";

interface Album {
  id: string;
  title: string;
  artist: string;
  cover: string;
  year: number;
  rating: number;
}

async function getAlbums() {
  const { data } = await supabase.from("_albums").select();
  return data as Album[];
}

export function useAlbums() {
  const [albums, setAlbums] = useState<Album[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAlbums()
      .then((data) => setAlbums(data))
      .then(() => setLoading(false));
  }, []);

  return {
    albums,
    loading,
  };
}

async function getAlbum(id: string) {
  const { data } = await supabase.from("_albums").select().eq("id", id);

  if (!data || data.length === 0) {
    throw new Error("Album not found");
  }

  return data[0] as Album;
}

export function useAlbum(id: string) {
  const [album, setAlbum] = useState<Album | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAlbum(id)
      .then((data) => setAlbum(data))
      .then(() => setLoading(false));
  }, []);

  return {
    album,
    loading,
  };
}
