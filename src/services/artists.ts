import { useEffect, useState } from "react";
import { useQuery } from "react-query";
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
  const { isLoading, data } = useQuery("get-artists", getArtists);

  return {
    artists: data || [],
    loading: isLoading,
  };
}
