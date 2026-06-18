import { createClient } from '@supabase/supabase-js'

// ⚠️ Remplace ces valeurs par celles de ton projet Supabase
// (Settings > API dans le dashboard Supabase)
const SUPABASE_URL = 'https://cxsjwqjcxzmznntrmlsr.supabase.co'
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN4c2p3cWpjeHptem5udHJtbHNyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzg4MDM0NTYsImV4cCI6MjA5NDM3OTQ1Nn0.qjcrQ0uWww3aHUW5KobuXkRGL2Zs2_DWGO3TcoyOy9c'

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)
