import { useCallback, useEffect, useMemo, useState } from "react"
import { Icon } from '@iconify/react'

const BrowserPage = () => {
  const isIos = useMemo(() => {
    const userAgent = window.navigator.userAgent
    return userAgent.match(/iPad/i) || userAgent.match(/iPhone/i)
  }, [])

  const [prompt, setPrompt] = useState<any>(null)

  useEffect(() => {
    const handler = (event: any) => {
      setPrompt(event)
    }

    window.addEventListener("beforeinstallprompt", handler)

    return () => {
      window.removeEventListener('beforeinstallprompt', handler)
    }
  }, [])
  
  const handleClick = useCallback(() => {
    if (prompt) {
      prompt.prompt()
    }
  }, [prompt])

  const installPopupMemo = useMemo(() => {
    return (
      <div>
        a
      </div>
    )
  }, [prompt, handleClick])

  const deviceNotSupportedPrompt = useMemo(() => {
    return (
      <div
        style={{
          position: "absolute",
          width: "400px",
          maxWidth: "80%",
          height: "100px",
          maxHeight: "70%",
          borderRadius: "5px",

          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",

          backgroundColor: "white",

          display: "flex",
          flexFlow: "column nowrap",
          alignItems: "center",
        }}
      >
        <Icon 
          icon="logos:safari"
          width={36}
          style={{flexShrink: "none"}}
        />
        <div
          style={{
            fontSize: "15px",
            fontWeight: "600",
          }}
        >
          Not Supported  
        </div>
        <div>

        </div>
      </div>
    )
  }, [])

  return (
    <div
      style={{
        height: "100lvh",
        width: "100lvw",
        overflow: "hidden",
      }}
    >
      {/* Background */}
      <div 
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: "white",
          filter: "blur(2px) brightness(85%)",
        }} 
      />

      {(isIos&&false) ? installPopupMemo : deviceNotSupportedPrompt}
    </div>
  )
}

export default BrowserPage
