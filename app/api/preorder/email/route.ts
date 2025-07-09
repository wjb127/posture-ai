import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export async function POST(request: NextRequest) {
  try {
    const { service, email, marketing_opt_in } = await request.json()

    if (!service || !email) {
      return NextResponse.json({ error: 'Service and email are required' }, { status: 400 })
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: 'Invalid email format' }, { status: 400 })
    }

    // Check if email already exists for this service
    const { data: existing, error: checkError } = await supabase
      .from('preorders')
      .select('id')
      .eq('service', service)
      .eq('email', email)
      .single()

    if (checkError && checkError.code !== 'PGRST116') {
      console.error('Check error:', checkError)
      return NextResponse.json({ error: 'Database error' }, { status: 500 })
    }

    if (existing) {
      return NextResponse.json({ error: 'Email already registered for this service' }, { status: 409 })
    }

    const { data, error } = await supabase
      .from('preorders')
      .insert([
        {
          service: service,
          email: email,
          marketing_opt_in: marketing_opt_in || false,
          created_at: new Date().toISOString()
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