import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from 'components/NavBar';
import DashBoard from 'pages/DashBoard';

function Router() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<DashBoard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
