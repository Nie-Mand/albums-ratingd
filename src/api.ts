import { createClient } from "@supabase/supabase-js";
import { useEffect, useState } from "react";

const anon = import.meta.env.VITE_ANON
const url = import.meta.env.VITE_URL

const supabase = createClient(url, anon)

interface Artist {
    id: string;
    name: string;
    genre: string;
    cover: string;
}

async function getArtists() {
    const { data } = await supabase.from("artists").select();
    return data as Artist[];
  }

export function useArtists() {
    const [artists, setArtists] = useState<Artist[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getArtists().then((data) => setArtists(data)).then(() => setLoading(false));
    }, []);

    return {
        artists,
        loading
    }
}