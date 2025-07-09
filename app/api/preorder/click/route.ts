import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export async function POST(request: NextRequest) {
  try {
    const { service } = await request.json()

    if (!service) {
      return NextResponse.json({ error: 'Service is required' }, { status: 400 })
    }

    const { data, error } = await supabase
      .from('preorder_clicks')
      .insert([
        {
          service: service,
          clicked_at: new Date().toISOString()
        }
      ])

    if (error) {
      console.error('Supabase error:', error)
      return NextResponse.json({ error: 'Database error' }, { status: 500 })
    }

    return NextResponse.json({ success: true, data })
  } catch (error) {
    console.error('API error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
} 