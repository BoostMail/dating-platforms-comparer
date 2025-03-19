
import * as React from "react"

const MOBILE_BREAKPOINT = 768

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined)

  React.useEffect(() => {
    // Initial check for mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    }
    
    // Set initial value
    checkMobile()
    
    // Setup listener for window resize
    window.addEventListener("resize", checkMobile)
    
    // Cleanup
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  return isMobile === undefined ? false : isMobile
}
