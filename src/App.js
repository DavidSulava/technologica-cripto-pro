import UploadFilePage from './pages/uploadFilePage';
import NavBar, { paths } from './components/NavBar';
import { Route, Routes } from 'react-router-dom';
import CheckSign from './pages/checkSign';


function App() {
  return (
    <div className="App">
      <div className="body_content">
        <NavBar/>
        <Routes>
          <Route path={paths.sign} element={<UploadFilePage/>}/>
          <Route path={paths.checkSign} element={<CheckSign/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
