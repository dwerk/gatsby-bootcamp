import { Link } from "gatsby"
import React from "react"

const Home:React.FC = () => (
  <div>
    <h1>Hello</h1>
    <h2>I'm Demi and I love life</h2>
    <p>
      Need a developer? <Link to="/contact">Contact me.</Link>
    </p>
  </div>
)

export default Home
