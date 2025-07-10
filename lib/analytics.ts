// Analytics utility functions for tracking user interactions

export const trackButtonClick = async (buttonText: string, section: string, service: string = 'PosturAI') => {
  try {
    // Track click event
    await fetch('/api/preorder/click', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ 
        service,
        button_text: buttonText,
        section: section,
        timestamp: new Date().toISOString()
      }),
    })
  } catch (error) {
    console.error('Failed to track button click:', error)
    // Don't block user interaction if tracking fails
  }
}

export const trackModalOpen = async (buttonText: string, section: string, service: string = 'PosturAI') => {
  try {
    await fetch('/api/preorder/click', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ 
        service,
        button_text: buttonText,
        section: section,
        action: 'modal_open',
        timestamp: new Date().toISOString()
      }),
    })
  } catch (error) {
    console.error('Failed to track modal open:', error)
  }
} 

// 구글애즈 전환 추적 함수
export const trackConversion = (conversionLabel: string, value?: number) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'conversion', {
      send_to: `${process.env.NEXT_PUBLIC_GOOGLE_ADS_ID}/${conversionLabel}`,
      value: value || 1,
      currency: 'KRW'
    });
  }
};

// 사전예약 완료 전환 추적
export const trackPreorderConversion = (email: string) => {
  // 기본 클릭 추적
  trackButtonClick('사전예약 완료', 'PreorderModal', 'conversion');
  
  // 구글애즈 전환 추적 (환경 변수에서 전환 라벨 가져오기)
  const conversionLabel = process.env.NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL;
  if (conversionLabel) {
    trackConversion(conversionLabel);
  }
  
  console.log('사전예약 전환 추적 완료:', email);
};

// 구글애즈 gtag 타입 선언
declare global {
  interface Window {
    gtag: (command: string, targetId: string, config?: any) => void;
  }
} 