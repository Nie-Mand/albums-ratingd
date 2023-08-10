import { useEffect, useState } from "react";
import { useQuery } from "react-query";
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
  const { isLoading, data } = useQuery("get-albums", getAlbums);

  return {
    albums: data || [],
    loading: isLoading,
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
  const { isLoading, data } = useQuery("get-album", () => getAlbum(id));

  return {
    album: data || null,
    loading: isLoading,
  };
}
