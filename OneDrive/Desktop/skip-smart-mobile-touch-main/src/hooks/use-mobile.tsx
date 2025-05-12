import * as React from "react"

const MOBILE_BREAKPOINT = 768

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined)

  React.useEffect(() => {
    // Check if window is defined (to avoid SSR issues)
    if (typeof window !== 'undefined') {
      const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)
      const onChange = () => {
        setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
      }
      
      // Use the correct event listener method with fallback for older browsers
      if (mql.addEventListener) {
        mql.addEventListener("change", onChange)
      } else {
        // @ts-ignore - For older browsers
        mql.addListener(onChange)
      }
      
      // Set initial value
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
      
      // Cleanup
      return () => {
        if (mql.removeEventListener) {
          mql.removeEventListener("change", onChange)
        } else {
          // @ts-ignore - For older browsers
          mql.removeListener(onChange)
        }
      }
    }
  }, [])

  // Return false during SSR, then the actual value once mounted
  return isMobile === undefined ? false : isMobile
}
