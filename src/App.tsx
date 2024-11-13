import BrowserPage from "./BrowserPage"
import MainPage from "./MainPage"
import "./App.css"

function App() {
  const isIos = (window as any)?.navigator?.standalone === true

  return (
    <>
      {isIos ? <MainPage /> : <BrowserPage />}
    </>
  )
}

export default App;
