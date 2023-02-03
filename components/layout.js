import Navbar from './navbar'
import Footer from './footer'

export default function Layout({ children }) {
  return (
    <div className=''>
      <Navbar />
      <main className="mt-5 mb-5"> 
      {children}
      </main>
      <Footer />
    </div>
  )
}