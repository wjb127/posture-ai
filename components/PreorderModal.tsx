'use client'

import React, { useState } from 'react'
import { X, Mail, CheckCircle, AlertCircle, Gift, Clock } from 'lucide-react'
import { trackButtonClick } from '@/lib/analytics'

interface PreorderModalProps {
  isOpen: boolean
  onClose: () => void
  service: string
}

export default function PreorderModal({ isOpen, onClose, service }: PreorderModalProps) {
  const [email, setEmail] = useState('')
  const [privacyConsent, setPrivacyConsent] = useState(false)
  const [marketingConsent, setMarketingConsent] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!email || !privacyConsent) {
      setErrorMessage('이메일과 개인정보처리방침 동의는 필수입니다.')
      return
    }

    setIsSubmitting(true)
    setErrorMessage('')

    try {
      // Track button click
      await fetch('/api/preorder/click', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ service }),
      })

      // Save email preorder
      const response = await fetch('/api/preorder/email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          service,
          email,
          marketing_opt_in: marketingConsent,
        }),
      })

      if (response.ok) {
        setSubmitStatus('success')
        
        // 구글애즈 전환 추적 추가
        const { trackPreorderConversion } = await import('@/lib/analytics')
        trackPreorderConversion(email)
        
        setTimeout(() => {
          onClose()
          setSubmitStatus('idle')
          setEmail('')
          setPrivacyConsent(false)
          setMarketingConsent(false)
        }, 2000)
      } else {
        const errorData = await response.json()
        setErrorMessage(errorData.error || '오류가 발생했습니다.')
        setSubmitStatus('error')
      }
    } catch (error) {
      console.error('Submission error:', error)
      setErrorMessage('네트워크 오류가 발생했습니다.')
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  if (!isOpen) return null

  return (
    <div 
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={handleBackdropClick}
    >
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="bg-gradient-to-r from-primary-600 to-accent-600 text-white p-6 rounded-t-2xl relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
          
          <div className="flex items-center mb-4">
            <Gift className="w-8 h-8 mr-3 text-yellow-300" />
            <h2 className="text-2xl font-bold">사전예약 특별 혜택</h2>
          </div>
          
          <div className="bg-white/20 rounded-lg p-4 backdrop-blur-sm">
            <div className="flex items-center mb-2">
              <Clock className="w-5 h-5 mr-2 text-yellow-300" />
              <span className="font-semibold">런칭 전 한정 혜택</span>
            </div>
            <ul className="text-sm space-y-1">
              <li>• 정가 대비 50% 할인</li>
              <li>• 무료 1:1 상담 제공</li>
              <li>• 평생 무료 업데이트</li>
              <li>• 우선 서비스 이용권</li>
            </ul>
          </div>
        </div>

        {/* Body */}
        <div className="p-6">
          {submitStatus === 'success' ? (
            <div className="text-center py-8">
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-2">사전예약 완료!</h3>
              <p className="text-gray-600">
                런칭 소식을 가장 먼저 알려드리겠습니다.
                <br />
                특별 할인 혜택도 놓치지 마세요!
              </p>
            </div>
          ) : (
            <>
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {service === 'PosturAI' ? 'PosturAI 사전예약' : 
                   service === 'ReadaptAI' ? 'ReadaptAI 사전예약' : 
                   'AI 서비스 사전예약'}
                </h3>
                <p className="text-gray-600 text-sm">
                  아직 서비스가 준비 중입니다. 사전예약하시면 런칭 시 특별 혜택을 받으실 수 있습니다.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    이메일 주소 *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your@email.com"
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-start">
                    <input
                      type="checkbox"
                      id="privacy"
                      checked={privacyConsent}
                      onChange={(e) => setPrivacyConsent(e.target.checked)}
                      className="mt-1 w-4 h-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
                      required
                    />
                    <label htmlFor="privacy" className="ml-2 text-sm text-gray-700">
                      <span className="text-red-500">*</span> 개인정보처리방침에 동의합니다.{' '}
                      <button
                        type="button"
                        className="text-primary-600 hover:text-primary-700 underline"
                        onClick={() => window.open('/privacy', '_blank')}
                      >
                        [자세히 보기]
                      </button>
                    </label>
                  </div>

                  <div className="flex items-start">
                    <input
                      type="checkbox"
                      id="marketing"
                      checked={marketingConsent}
                      onChange={(e) => setMarketingConsent(e.target.checked)}
                      className="mt-1 w-4 h-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
                    />
                    <label htmlFor="marketing" className="ml-2 text-sm text-gray-700">
                      마케팅 정보 수신에 동의합니다. (선택)
                      <br />
                      <span className="text-xs text-gray-500">
                        런칭 소식, 특별 혜택, 이벤트 정보를 받아보실 수 있습니다.
                      </span>
                    </label>
                  </div>
                </div>

                {errorMessage && (
                  <div className="flex items-center p-3 bg-red-50 border border-red-200 rounded-lg">
                    <AlertCircle className="w-5 h-5 text-red-500 mr-2" />
                    <span className="text-sm text-red-700">{errorMessage}</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting || !email || !privacyConsent}
                  className="w-full bg-gradient-to-r from-primary-600 to-accent-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-primary-700 hover:to-accent-700 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      처리 중...
                    </>
                  ) : (
                    <>
                      <Gift className="w-5 h-5 mr-2" />
                      사전예약하고 특별 혜택 받기
                    </>
                  )}
                </button>
              </form>

              <div className="mt-4 text-center">
                <p className="text-xs text-gray-500">
                  사전예약은 무료이며, 언제든지 취소하실 수 있습니다.
                </p>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
} 