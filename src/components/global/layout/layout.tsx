import React, {ReactNode} from "react"

import Header from "../header/header"
import Footer from "../footer/footer"
import "../styles/index.css"
import "./layout.css"

interface LayoutProps {
    children: ReactNode
  }

  const Layout = ({ children }: LayoutProps) => {
return (
    <div className="container">
        <div className="content">
        <Header/>
        {children}
        </div>
        <Footer/>
    </div>
)
}

export default Layout
