import { useState, useEffect } from "react"

export default function App() {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const path = window.location.pathname

  useEffect(() => {
    if (path === "/db") {
      setLoading(true)
      fetch("http://localhost:8000/db")
        .then((res) => {
          if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`)
          }
          return res.json()
        })
        .then((data) => {
          setData(data)
          setLoading(false)
        })
        .catch((err) => {
          console.error("Error:", err)
          setData({ error: `Failed to connect to backend: ${err.message}` })
          setLoading(false)
        })
    }
  }, [path])

  if (path === "/db") {
    return (
      <div style={{ padding: "20px" }}>
        <h1>Database Check</h1>
        {loading ? (
          <p>Loading...</p>
        ) : data ? (
          <pre>{JSON.stringify(data, null, 2)}</pre>
        ) : (
          <p>No data</p>
        )}
      </div>
    )
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>Hello Vite + React 👋</h1>
      <p>Try accessing <a href="/db">/db</a> to check database connection</p>
    </div>
  )
}
