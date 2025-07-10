'use client'

import React, { useState } from 'react'
import { Star, Quote, CheckCircle, ArrowRight } from 'lucide-react'
import PreorderModal from './PreorderModal'
import { trackButtonClick } from '@/lib/analytics'

export default function TestimonialsSection() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  
  const testimonials = [
    {
      name: "김○○",
      role: "개발자",
      age: "29세",
      rating: 5,
      quote: "3주 만에 목 통증이 80% 개선되었어요. 매일 아침 목이 뻣뻣했는데 이제는 개운하게 일어납니다.",
      improvement: "목 통증 80% 개선",
      period: "3주",
      verified: true
    },
    {
      name: "이○○",
      role: "디자이너",
      age: "32세",
      rating: 5,
      quote: "어깨 결림이 심해서 집중이 안 되었는데, 맞춤 운동으로 완전히 달라졌습니다.",
      improvement: "어깨 결림 완전 해결",
      period: "4주",
      verified: true
    },
    {
      name: "박○○",
      role: "사무직",
      age: "35세",
      rating: 5,
      quote: "허리 통증으로 수술까지 고려했는데, 자세 교정으로 수술 없이 해결했어요.",
      improvement: "허리 통증 완치",
      period: "6주",
      verified: true
    }
  ]

  const handleCTAClick = async (buttonText: string) => {
    // Track button click first
    await trackButtonClick(buttonText, 'TestimonialsSection')
    
    // Then open modal
    setIsModalOpen(true)
  }

  return (
    <>
      <section className="section-padding bg-gradient-to-br from-primary-50 to-accent-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
              <span className="gradient-text">실제 사용자들</span>의 
              변화 이야기
            </h2>
            <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
              PosturAI로 자세를 교정한 사용자들의 생생한 후기를 확인해보세요.
              <br className="hidden md:block" />
              당신도 같은 변화를 경험할 수 있습니다.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                      <span className="text-primary-600 font-semibold">
                        {testimonial.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-secondary-900">
                        {testimonial.name}
                      </h3>
                      <p className="text-sm text-secondary-500">
                        {testimonial.role} · {testimonial.age}
                      </p>
                    </div>
                  </div>
                  {testimonial.verified && (
                    <div className="flex items-center text-green-600">
                      <CheckCircle className="w-4 h-4 mr-1" />
                      <span className="text-xs">검증됨</span>
                    </div>
                  )}
                </div>

                <div className="flex items-center mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>

                <div className="relative mb-4">
                  <Quote className="absolute -top-2 -left-2 w-6 h-6 text-primary-200" />
                  <p className="text-secondary-700 italic pl-4">
                    "{testimonial.quote}"
                  </p>
                </div>

                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center text-green-600">
                    <CheckCircle className="w-4 h-4 mr-1" />
                    <span>{testimonial.improvement}</span>
                  </div>
                  <span className="text-secondary-500">{testimonial.period}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-secondary-900 mb-4">
                <span className="text-green-600">평균 3주</span>면 
                당신도 같은 변화를 경험할 수 있습니다
              </h3>
              <p className="text-secondary-600 text-lg">
                수천 명의 사용자가 증명한 효과적인 자세 교정 솔루션
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">95%</div>
                <p className="text-sm text-secondary-600">사용자 만족도</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">3주</div>
                <p className="text-sm text-secondary-600">평균 개선 기간</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">80%</div>
                <p className="text-sm text-secondary-600">통증 감소율</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600 mb-2">24/7</div>
                <p className="text-sm text-secondary-600">언제든 이용 가능</p>
              </div>
            </div>

            <div className="text-center">
              <button 
                onClick={() => handleCTAClick('나도 3주 만에 개선하기')}
                className="btn-primary inline-flex items-center"
              >
                나도 3주 만에 개선하기
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
              <p className="text-sm text-secondary-500 mt-3">
                지금 시작하면 3주 후 완전히 달라진 당신을 만날 수 있습니다
              </p>
            </div>
          </div>
        </div>
      </section>

      <PreorderModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        service="PosturAI"
      />
    </>
  )
} 