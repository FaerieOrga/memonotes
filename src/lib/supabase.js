import { createClient } from '@supabase/supabase-js'

// ⚠️ Remplace ces valeurs par celles de ton projet Supabase
// (Settings > API dans le dashboard Supabase)
const SUPABASE_URL = 'https://ojnafnvewlfwaupwomgw.supabase.co'
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9qbmFmbnZld2xmd2F1cHdvbWd3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODE1Mzk1ODcsImV4cCI6MjA5NzExNTU4N30.2rJQHoCl6kOvg5N8PUMjK-XcywpfqbKzqlg8m5sKwLw'

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)
