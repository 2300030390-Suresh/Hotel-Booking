import React, { useState } from 'react';
import Title from '../../components/Title';
import { roomsDummyData } from '../../assets/assets';

const ListRoom = () => {
    const [rooms, setRooms] = useState(roomsDummyData);
    const [editIndex, setEditIndex] = useState(null);
    const [editedRoom, setEditedRoom] = useState({});

    const handleEditClick = (index) => {
        setEditIndex(index);
        setEditedRoom(rooms[index]);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEditedRoom({ ...editedRoom, [name]: value });
    };

    const handleSave = () => {
        const updatedRooms = [...rooms];
        updatedRooms[editIndex] = editedRoom;
        setRooms(updatedRooms);
        setEditIndex(null);
    };

    return (
        <div>
            <Title
                align='left'
                font='outfit'
                title='Room Listings'
                subTitle='View, edit, or manage all listed rooms. Keep the information up-to-date to provide the best experience for users.'
            />
            <p className='text-gray-500 mt-8'>All Rooms</p>
            <div className='w-full max-w-3xl text-left border border-gray-300 rounded-lg max-h-80 overflow-y-scroll mt-3'>
                <table className='w-full'>
                    <thead className='bg-gray-50'>
                        <tr>
                            <th className='py-3 px-4 text-gray-800 font-medium'>Name</th>
                            <th className='py-3 px-4 text-gray-800 font-medium max-sm:hidden'>Facility</th>
                            <th className='py-3 px-4 text-gray-800 font-medium'>Price / night</th>
                            <th className='py-3 px-4 text-gray-800 font-medium'>Actions</th>
                        </tr>
                    </thead>
                    <tbody className='text-sm'>
                        {rooms.map((item, index) => (
                            <tr key={index}>
                                <td className='py-3 px-4 text-gray-700 border-t border-gray-300'>
                                    {editIndex === index ? (
                                        <input
                                            type="text"
                                            name="roomType"
                                            value={editedRoom.roomType}
                                            onChange={handleInputChange}
                                            className='border p-1 w-full'
                                        />
                                    ) : (
                                        item.roomType
                                    )}
                                </td>
                                <td className='py-3 px-4 text-gray-700 border-t border-gray-300 max-sm:hidden'>
                                    {item.amenities.join(', ')}
                                </td>
                                <td className='py-3 px-4 text-gray-700 border-t border-gray-300'>
                                    {editIndex === index ? (
                                        <input
                                            type="number"
                                            name="pricePerNight"
                                            value={editedRoom.pricePerNight}
                                            onChange={handleInputChange}
                                            className='border p-1 w-full'
                                        />
                                    ) : (
                                        `$${item.pricePerNight}`
                                    )}
                                </td>
                                <td className='py-3 px-4 text-gray-700 border-t border-gray-300'>
                                    {editIndex === index ? (
                                        <>
                                            <button
                                                onClick={handleSave}
                                                className='text-green-600 text-sm mr-2'
                                            >
                                                Save
                                            </button>
                                            <button
                                                onClick={() => setEditIndex(null)}
                                                className='text-gray-500 text-sm'
                                            >
                                                Cancel
                                            </button>
                                        </>
                                    ) : (
                                        <button
                                            onClick={() => handleEditClick(index)}
                                            className='text-blue-600 text-sm'
                                        >
                                            Edit
                                        </button>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ListRoom;
