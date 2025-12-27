import { Link } from "react-router-dom"

export default function Home() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Hello Vite + React 👋</h1>
      <p>Try accessing <Link to="/db">/db</Link> to check database connection</p>
    </div>
  )
}

