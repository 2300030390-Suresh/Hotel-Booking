import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import AllRooms from './pages/AllRooms';
import RoomDetails from './pages/RoomDetails';
import MyBookings from './pages/MyBookings';

// ✅ Correct import paths
import LayOut from "./pages/hotelOwner/Layout";
import Dashboard from "./pages/hotelOwner/Dashboard";
import AddRoom from "./pages/hotelOwner/AddRoom";
import ListRoom from "./pages/hotelOwner/ListRoom";

const App = () => {
  const location = useLocation();
  const isOwnerPath = location.pathname.includes("/owner");

  return (
    <div>
      {!isOwnerPath && <Navbar />}
      
      <div className='min-h-[70vh]'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/rooms' element={<AllRooms />} />
          <Route path='/rooms/:id' element={<RoomDetails />} />
          <Route path='/my-bookings' element={<MyBookings />} />
          
          {/* Owner Routes */}
          <Route path='/owner' element={<LayOut />}>
            <Route index element={<Dashboard />} />
            <Route path='add-room' element={<AddRoom />} />
            <Route path='list-room' element={<ListRoom />} />
          </Route>
        </Routes>
      </div>

      {!isOwnerPath && <Footer />}
    </div>
  );
};

export default App;
