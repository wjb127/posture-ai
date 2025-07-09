import type { Metadata } from 'next'
import React from 'react'
import './globals.css'

export const metadata: Metadata = {
  title: 'PosturAI - AI로 바로잡는 당신의 자세',
  description: 'AI 기반 자세 분석으로 건강한 생활습관을 만들어보세요. 실시간 자세 교정, 맞춤 운동 추천, 개선 추적까지.',
  keywords: ['자세교정', 'AI', '헬스케어', '운동', '건강', '허리통증', '거북목'],
  authors: [{ name: 'PosturAI Team' }],
  robots: 'index, follow',
  openGraph: {
    title: 'PosturAI - AI로 바로잡는 당신의 자세',
    description: 'AI 기반 자세 분석으로 건강한 생활습관을 만들어보세요.',
    type: 'website',
    locale: 'ko_KR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PosturAI - AI로 바로잡는 당신의 자세',
    description: 'AI 기반 자세 분석으로 건강한 생활습관을 만들어보세요.',
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body className="antialiased bg-gray-50">
        {children}
      </body>
    </html>
  )
} 