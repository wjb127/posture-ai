import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Types for our database tables
export interface PreorderClick {
  id: string
  service: string
  clicked_at: string
}

export interface Preorder {
  id: string
  service: string
  email: string
  marketing_opt_in: boolean
  created_at: string
} 