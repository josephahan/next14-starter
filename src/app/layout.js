import { Inter } from 'next/font/google'
import './globals.css'
import NavBar from '@/components/navbar/Navbar'
import Footer from '@/components/footer/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Next App',
  description: 'Next.js starter app',
}

//the children is the content of the page. the children is the component that is being rendered by the route. children is a special prop that is passed to the layout component by next js. 
//within the body tag, all the different pages are rendered as children.
//we have specified what the routelyout component should render. the children prop is the content of the page. the children is the component that is being rendered by the route.
//this routelayout is automatically used by next js to wrap the content of all the pages.
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}