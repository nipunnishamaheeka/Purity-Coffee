import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import RootLayout from "./components/layout/RootLayout.tsx";
function App() {

  return (
   <BrowserRouter>
       <Routes>
            <Route path="/app" element={<RootLayout />} />
           {/* <Route path="/contact" element={<Contact />} />*/}
           {/*<Route path="/about" element={<About />} />*/}
       </Routes>
   </BrowserRouter>
  )
}

export default App
