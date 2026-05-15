import { createClient } from '@supabase/supabase-js'

// ⚠️ Remplace ces valeurs par celles de ton projet Supabase
// (Settings > API dans le dashboard Supabase)
const SUPABASE_URL = 'https://cxsjwqjcxzmznntrmlsr.supabase.co'
const SUPABASE_ANON_KEY = 'sb_publishable_bOKQ_dH_5bCgBYRRdUMw2Q_Gh1ocpyz'

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)
