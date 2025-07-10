import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export async function POST(request: NextRequest) {
  try {
    const { service, button_text, section, action, timestamp } = await request.json()

    if (!service) {
      return NextResponse.json({ error: 'Service is required' }, { status: 400 })
    }

    const { data, error } = await supabase
      .from('preorder_clicks')
      .insert([
        {
          service: service,
          button_text: button_text || 'Unknown',
          section: section || 'Unknown',
          action: action || 'click',
          clicked_at: timestamp || new Date().toISOString(),
          user_agent: request.headers.get('user-agent') || null,
          ip_address: request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || null
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