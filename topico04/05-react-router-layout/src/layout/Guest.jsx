
import { Outlet } from 'react-router'
import Head from '../components/Head/Head'
import Footer from '../components/Footer/Footer'

const Guest = () => {
    return (
        <div>
            <Head/>
            <main>
            <Outlet />
            </main>
            <Footer/>
        </div>
    )
}

export default Guest