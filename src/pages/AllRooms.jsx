import React, { useState } from 'react';
import { assets, facilityIcons, roomsDummyData } from '../assets/assets';
import { useNavigate } from 'react-router-dom';
import { StarRating } from '../components/StarRating';

const CheckBox = ({ label, selected = false, onChange = () => {} }) => {
  return (
    <div className="flex gap-3 items-center cursor-pointer mt-2 text-sm">
      <input type="checkbox" checked={selected} onChange={(e) => onChange(e.target.checked, label)} />
      <span className="font-light select-none">{label}</span>
    </div>
  );
};

const RadioButton = ({ label, selected = false, onChange = () => {} }) => {
  return (
    <div className="flex gap-3 items-center cursor-pointer mt-2 text-sm">
      <input type="radio" name="sortOption" checked={selected} onChange={(e) => onChange(e.target.checked, label)} />
      <span className="font-light select-none">{label}</span>
    </div>
  );
};

const AllRooms = () => {
  const navigate = useNavigate();
  const [openFilters, setOpenFilters] = useState(false);

  const roomTypes = ['Single Bed', 'Double Bed', 'Luxury Room', 'Family Suite'];
  const priceRanges = ['0 to 500', '500 to 1000', '1000 to 2000', '2000 to 3000'];
  const sortOptions = ['Price Low to High', 'Price High to Low', 'Newest First'];

  return (
    <div className="p-4 md:p-8">
  {/* Header */}
  <div className="flex flex-col items-start text-left mb-6">
    <h1 className="font-playfair text-4xl md:text-[40px]">Hotel Rooms</h1>
    <p className="text-sm md:text-base text-gray-500/90 mt-2 max-w-3xl">
      Take advantage of our limited-time offers and special packages to enhance your stay and create unforgettable memories.
    </p>
  </div>

  {/* MAIN CONTENT WITH FILTERS + ROOM LIST */}
  <div className="flex flex-col lg:flex-row gap-10">
    {/* Room List Section */}
    <div className="flex-1">
      {roomsDummyData.map((room) => (
        <div key={room.id} className="flex flex-col md:flex-row gap-6 mb-10 border-b pb-6">
          {/* Room Image */}
          <img
            onClick={() => {
              navigate(`/rooms/${room._id}`);
              window.scrollTo(0, 0);
            }}
            src={room.images[0]}
            alt={`${room.hotel.name} Room Image`}
            title="View Room Details"
            className="w-full md:w-1/3 max-h-[260px] rounded-xl shadow-lg object-cover cursor-pointer"
          />

          {/* Room Info */}
          <div className="flex flex-col gap-2 md:w-2/3">
            <p className="text-gray-500">{room.hotel.city}</p>
            <p
              onClick={() => {
                navigate(`/rooms/${room._id}`);
                window.scrollTo(0, 0);
              }}
              className="text-gray-800 text-3xl font-playfair cursor-pointer"
            >
              {room.hotel.name}
            </p>
            <div className="flex items-center gap-2">
              <StarRating rating={room.hotel.rating} />
              <p className="ml-2 text-sm text-gray-600">200+ reviews</p>
            </div>
            <div className="flex items-center gap-2 text-gray-500 mt-2 text-sm">
              <img src={assets.locationIcon} alt="Location Icon" className="w-4 h-4" />
              <span>{room.hotel.address}</span>
            </div>

            {/* Room amenities */}
            <div className="flex flex-wrap items-center mt-3 mb-6 gap-4">
              {room.amenities.map((item, index) => (
                <div key={index} className="flex items-center gap-2 px-3 py-2 rounded-lg bg-[#F5F5FF]">
                  <img src={facilityIcons[item]} alt={item} className="w-5 h-5" />
                  <p className="text-xs">{item}</p>
                </div>
              ))}
            </div>

            {/* RoomPrice per Night */}
            <p className="text-xl font-medium text-gray-700">${room.pricePerNight} /Night</p>
          </div>
        </div>
      ))}
    </div>

    {/* FILTERS SECTION */}
    <div className="bg-white w-full lg:w-80 border border-gray-300 text-gray-600 p-5 rounded-lg h-fit">
      <div className="flex items-center justify-between pb-2 border-b border-gray-300">
        <p className="text-base font-medium text-gray-800">FILTERS</p>
        <span className="text-xs cursor-pointer">CLEAR</span>
      </div>

      {/* Popular Filters */}
      <div className="pt-4">
        <p className="font-medium text-gray-800 pb-2">Popular Filters</p>
        {roomTypes.map((room, index) => (
          <CheckBox key={index} label={room} />
        ))}
      </div>

      {/* Price Range */}
      <div className="pt-5">
        <p className="font-medium text-gray-800 pb-2">Price Range</p>
        {priceRanges.map((range, index) => (
          <CheckBox key={index} label={`$ ${range}`} />
        ))}
      </div>

      {/* Sort Options */}
      <div className='px-5 pt-5 pb-7'>
        <p className="font-medium text-gray-800 pb-2">Sort By</p>
        {sortOptions.map((option, index) => (
          <RadioButton key={index} label={option} />
        ))}
      </div>
    </div>
  </div>
</div>

  );
};

export default AllRooms;
