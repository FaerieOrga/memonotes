import { createClient } from '@supabase/supabase-js'

// ⚠️ Remplace ces valeurs par celles de ton projet Supabase
// (Settings > API dans le dashboard Supabase)
const SUPABASE_URL = 'https://ytatbulxnhgxjqkgtvle.supabase.co'
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl0YXRidWx4bmhneGpxa2d0dmxlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODE1NDMwMjAsImV4cCI6MjA5NzExOTAyMH0.xcT9l5civoVFDWwMu9DrTwgqxYQKcWQjMq4pCLxPj_M'

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)
