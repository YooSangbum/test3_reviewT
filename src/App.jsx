import './css/App.css';
import list from './pages/productData';
import { Route, Routes, useLocation } from 'react-router-dom';
import { useState } from 'react';

import Header from './pages/Header';
import Footer from './pages/Footer';
import Main from './pages/Main';
import Shop from './pages/Shop';
import Detail from './pages/Detail';

function App() {
  let subName = useLocation().pathname;
  let [data] = useState(list);
  return (
    <div className="App">
      <Header subName={subName} />

      <Routes>
        <Route path="/" element={<Main data={data} />}></Route>
        <Route path="/Shop" element={<Shop data={data} />}></Route>
        <Route path="/Detail/:id" element={<Detail data={data} />}></Route>
        <Route path="/Blog" element={<div>블로그</div>}></Route>
        <Route path="/Story" element={<div>스토리</div>}></Route>
        <Route path="*" element={<div>페이지가없어요</div>}></Route>
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
