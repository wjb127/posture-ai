'use client'

import React from 'react'
import { Heart, Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    product: [
      { name: "기능 소개", href: "#features" },
      { name: "사용법", href: "#how-it-works" },
      { name: "요금제", href: "#pricing" },
      { name: "FAQ", href: "#faq" }
    ],
    company: [
      { name: "회사 소개", href: "#about" },
      { name: "팀", href: "#team" },
      { name: "채용", href: "#careers" },
      { name: "블로그", href: "#blog" }
    ],
    support: [
      { name: "고객 지원", href: "#support" },
      { name: "문의하기", href: "#contact" },
      { name: "개발자 API", href: "#api" },
      { name: "상태 페이지", href: "#status" }
    ],
    legal: [
      { name: "개인정보처리방침", href: "#privacy" },
      { name: "이용약관", href: "#terms" },
      { name: "쿠키 정책", href: "#cookies" },
      { name: "법적 고지", href: "#legal" }
    ]
  }

  return (
    <footer className="bg-secondary-900 text-white">
      <div className="container-custom py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <div className="w-8 h-8 bg-gradient-to-r from-primary-500 to-accent-500 rounded-lg flex items-center justify-center mr-3">
                <span className="text-white font-bold text-sm">P</span>
              </div>
              <h3 className="text-2xl font-bold">PosturAI</h3>
            </div>
            
            <p className="text-secondary-300 mb-6 leading-relaxed">
              AI 기반 자세 분석으로 더 건강하고 활기찬 일상을 만들어보세요. 
              PosturAI와 함께 올바른 자세를 되찾고 통증 없는 삶을 시작하세요.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center text-secondary-300">
                <Mail className="w-4 h-4 mr-3" />
                <span>contact@posturai.com</span>
              </div>
              <div className="flex items-center text-secondary-300">
                <Phone className="w-4 h-4 mr-3" />
                <span>02-1234-5678</span>
              </div>
              <div className="flex items-center text-secondary-300">
                <MapPin className="w-4 h-4 mr-3" />
                <span>서울시 강남구 테헤란로 123, 10층</span>
              </div>
            </div>
          </div>
          
          {/* Product Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">제품</h4>
            <ul className="space-y-2">
              {footerLinks.product.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-secondary-300 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Company Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">회사</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-secondary-300 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Support Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">지원</h4>
            <ul className="space-y-2">
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-secondary-300 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* Legal Links */}
        <div className="border-t border-secondary-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-wrap gap-6 mb-4 md:mb-0">
              {footerLinks.legal.map((link, index) => (
                <a 
                  key={index}
                  href={link.href}
                  className="text-secondary-400 hover:text-white transition-colors text-sm"
                >
                  {link.name}
                </a>
              ))}
            </div>
            
            <div className="flex items-center text-secondary-400 text-sm">
              <span>© {currentYear} PosturAI. Made with</span>
              <Heart className="w-4 h-4 mx-1 text-red-500" />
              <span>in Seoul</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
} 