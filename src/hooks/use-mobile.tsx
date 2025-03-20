
import * as React from "react"

const MOBILE_BREAKPOINT = 768

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean>(() => {
    // Initialize with current window width if in browser environment
    if (typeof window !== 'undefined') {
      return window.innerWidth < MOBILE_BREAKPOINT
    }
    return false
  })

  React.useEffect(() => {
    // Skip if not in browser environment
    if (typeof window === 'undefined') return
    
    // Optimize the resize handler with throttling
    let timeoutId: ReturnType<typeof setTimeout> | null = null
    
    const checkMobile = () => {
      if (timeoutId) clearTimeout(timeoutId)
      
      timeoutId = setTimeout(() => {
        setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
      }, 100) // 100ms throttle
    }
    
    // Add event listener
    window.addEventListener("resize", checkMobile)
    
    // Cleanup
    return () => {
      if (timeoutId) clearTimeout(timeoutId)
      window.removeEventListener("resize", checkMobile)
    }
  }, [])

  return isMobile
}
