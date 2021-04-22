import { Link } from 'gatsby'
import React from 'react'

const AboutMe:React.FC = () => {
    return (
        <div>
           <h1>About Me</h1>
            <p>This is my bio. I tell a little bit about myself here</p>
            <p><Link to="/contact">Want to work with me? Reach out!</Link></p>
        </div>
    )
}


export default AboutMe


