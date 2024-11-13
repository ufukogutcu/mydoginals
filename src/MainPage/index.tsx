import { memo, useEffect } from "react"
import "./MainPage.css"

const MainPage = () => {
  useEffect(() => {
    const preventDefault = (e: any) => e.preventDefault()
    document.body.addEventListener("ontouchstart", preventDefault)

    return () => {
      document.body.removeEventListener('ontouchstart', preventDefault)
    };
  }, [])

  return (
    <div
      style={{
        height: "100lvh",
        width: "100lvw",
        overflow: "hidden",
      }}
    >
      aqfwwqf
    </div>
  )
}

export default memo(MainPage)