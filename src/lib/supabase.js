import { createClient } from '@supabase/supabase-js'

// ⚠️ Remplace ces valeurs par celles de ton projet Supabase
// (Settings > API dans le dashboard Supabase)
const SUPABASE_URL = 'https://txropwegghcrfwiqaadz.supabase.co'
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR4cm9wd2VnZ2hjcmZ3aXFhYWR6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzg3Mzk1MTEsImV4cCI6MjA5NDMxNTUxMX0.bXzzSnrP_J4K3hJY1KQQyje686G-dQzHQJlGeF3KVLc'

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)
