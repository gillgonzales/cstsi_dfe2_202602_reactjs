
import { Outlet } from "react-router"
import Header from "../components/Header"
import { Navbar } from "../components/Navbar"
import { ErrorBoundary } from "react-error-boundary";


function Guest() {
  return (
   <>
      <Navbar />
      <Header />
      <main className='flex w-full justify-center p-3 sm:p-10 '>
        <ErrorBoundary fallbackRender={(error) => {
          console.info(error)
          return (<p>{error?.error?.message}</p>)
        }}>
          <Outlet />
        </ErrorBoundary>
      </main>
    </>
  )
}

export default Guest