import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './Components/LoginPage';
import ListViewPage from './Components/ListViewPage';
import DetailViewPage from './Components/DetailViewPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/list" element={<ListViewPage />} />
        <Route path="/detail/:id" element={<DetailViewPage />} />
      </Routes>
    </Router>
  );
};

export default App;