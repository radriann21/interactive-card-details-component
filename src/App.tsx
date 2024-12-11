import { MainContainer } from "./components/app/MainContainer"
import { DisplayCreditCard } from "./components/app/DisplayCreditCard"

function App() {
  return (
    <main className="max-w-full min-h-screen flex flex-col md:flex-row items-center">
      <DisplayCreditCard />
      <MainContainer />
    </main>
  )
}

export default App
