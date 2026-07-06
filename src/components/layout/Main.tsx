import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Booking from '../../pages/Booking';
import Cabins from '../../pages/Cabins';
import Dashboard from '../../pages/Dashboard';
import PageNotFound from '../../pages/PageNotFound';
import Setting from '../../pages/Setting';
import Users from '../../pages/Users';

function Main() {
  return (
    <Routes>
      <Route index element={<Dashboard />} />
      <Route path="/cabins" element={<Cabins />} />
      <Route path="/setting" element={<Setting />} />
      <Route path="/booking" element={<Booking />} />
      <Route path="/users" element={<Users />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default Main;
