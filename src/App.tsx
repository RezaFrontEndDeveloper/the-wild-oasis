import { BrowserRouter } from 'react-router-dom';

import Header from './components/layout/Header';
import Main from './components/layout/Main';
import SideBar from './components/layout/SideBar';

function App() {
  return (
    <BrowserRouter>
      <div className="font-serif">
        <div className="flex">
          <div>
            <SideBar />
          </div>
          <div className="w-full">
            <Header />

            <Main />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
