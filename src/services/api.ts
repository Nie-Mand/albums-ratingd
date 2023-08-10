import { createClient } from "@supabase/supabase-js";
import { useEffect, useState } from "react";

const anon = import.meta.env.VITE_ANON;
const url = import.meta.env.VITE_URL;

export const supabase = createClient(url, anon);
