import React from 'react'
import './styles.css'
const features = [
  { head: "⚡Blazing fast results", body: "SQL Fiddler is fast, lightweight and free. Specially built for Data Teams." },
  { head: "🔭Query Watcher", body: "Save complex SQL queries and look for previously run queries at any time" },
  { head: "💻Code IntelliSense", body: "Improves your productivity through IntelliSense and other code-aware editing features" }
]

export default function Features() {
  return (
    <div className='section'>
      <div className='feature-wrapper'>
        <h2>Features</h2>
        <div className='features'>
          {
            features.map(feature => (
              <div key={feature.head} className='card'>
                <h3>{feature.head}</h3>
                <p>{feature.body}</p>
              </div>))
          }
        </div>
      </div>
    </div>
  )
}
