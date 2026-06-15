import { createClient } from '@supabase/supabase-js'

// ⚠️ Remplace ces valeurs par celles de ton projet Supabase
// (Settings > API dans le dashboard Supabase)
const SUPABASE_URL = 'https://rbkhjpfynlghptlrzhdo.supabase.co'
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJia2hqcGZ5bmxnaHB0bHJ6aGRvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODE1NDQxNjcsImV4cCI6MjA5NzEyMDE2N30.RQTD5g4m0ycV3xmFIZZB5sPv83lEjkPZTPLnkwf-Nqo'

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)
