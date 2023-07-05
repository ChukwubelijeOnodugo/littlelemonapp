import './App.css';
import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer';
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import BookATable from './pages/BookATable';
import NotFound from './pages/NotFound';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='book' element={<BookATable />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
