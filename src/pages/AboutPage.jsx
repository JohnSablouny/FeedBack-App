import React from 'react'
import Card from '../components/shared/Card'
import { Link } from 'react-router-dom'

const AboutPage = () => {
  return (
    <Card>
        <div className="about">
            <h1>About this Project</h1>
            <p>Tis is a React app to leave feedback for a product or service</p>
            <p>Version: 1.0.0</p>
            <p>
                <Link to="/">Back to home</Link>
            </p>
        </div>
    </Card>
  )
}

export default AboutPage