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