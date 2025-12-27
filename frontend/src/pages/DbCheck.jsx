import { useState, useEffect } from "react"

// APIのベースURL（環境変数から取得、デフォルトは開発環境）
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:8000"

export default function DbCheck() {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetch(`${API_BASE_URL}/db`)
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
  }, [])

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

