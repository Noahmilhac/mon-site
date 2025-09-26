import { Routes, Route } from "react-router-dom";

function Home() { return <div className="container py-16">Home (temp)</div>; }
function Demo() { return <div className="container py-16">Demo (temp)</div>; }
function Legal() { return <div className="container py-16">Legal (temp)</div>; }

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header viendra en Partie 2 */}
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/demo" element={<Demo/>} />
          <Route path="/legal" element={<Legal/>} />
        </Routes>
      </main>
      {/* Footer viendra en Partie 2 */}
    </div>
  );
}
