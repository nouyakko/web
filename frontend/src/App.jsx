import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Home from "./pages/Home"
import DbCheck from "./pages/DbCheck"

export default function App() {
  return (
    <BrowserRouter>
      <nav style={{ padding: "20px", borderBottom: "1px solid #ccc" }}>
        <Link to="/" style={{ marginRight: "20px" }}>Home</Link>
        <Link to="/db">Database Check</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/db" element={<DbCheck />} />
      </Routes>
    </BrowserRouter>
  )
}
