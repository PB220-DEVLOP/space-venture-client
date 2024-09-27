import React, { useState } from 'react';

function RegisterRoom() {
    // State to handle multiple image previews
    const [images, setImages] = useState([]);

    const handleImageChange = (e) => {
        const files = Array.from(e.target.files);
        const imagePreviews = files.map(file => URL.createObjectURL(file));
        setImages(imagePreviews);
    };

    // Facilities and Accommodation Types
    const facilitiesOptions = ["Wifi", "Parking", "Gym", "Swimming Pool", "Air Conditioning", "Laundry", "Food Facility"];
    const accommodationTypes = ["1BHK", "2BHK", "3BHK", "4BHK", "5BHK"];

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center py-10">
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-4xl w-full flex">

                {/* Left Side */}
                <div className="w-1/2 pr-4">
                    <h2 className="text-2xl font-bold mb-6 text-center">Register Your Home</h2>

                    {/* Image Upload Fields with Previews */}
                    <div className="mb-4">
                        <label className="block text-sm font-semibold mb-2">Image Upload (Required)</label>
                        <input
                            type="file"
                            className="block w-full text-sm text-gray-600"
                            onChange={handleImageChange}
                            multiple
                            required
                        />
                        <div className="mt-2 grid grid-cols-4 gap-2">
                            {images.map((image, index) => (
                                <img key={index} src={image} alt={`Preview ${index + 1}`} className="w-20 h-20 rounded-lg" />
                            ))}
                        </div>
                    </div>

                    {/* Facilities Options */}
                    <div className="mb-4">
                        <label className="block text-sm font-semibold mb-2">Facilities</label>
                        <div className="flex flex-wrap gap-2">
                            {facilitiesOptions.map((facility, index) => (
                                <label key={index} className="flex items-center">
                                    <input type="checkbox" className="form-checkbox" />
                                    <span className="ml-2">{facility}</span>
                                </label>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Vertical Divider */}
                <div className="border-l border-gray-300 mx-4"></div>

                {/* Right Side */}
                <div className="w-1/2 pl-4">
                    <div className="mb-4">
                        <label className="block text-sm font-semibold mb-2">Price</label>
                        <input type="text" className="block w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-500" placeholder="Enter price" />
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-semibold mb-2">Location</label>
                        <input type="text" className="block w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-500" placeholder="Enter location" />
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-semibold mb-2">Owner Name</label>
                        <input type="text" className="block w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-500" placeholder="Enter owner name" />
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-semibold mb-2">Furnishing</label>
                        <select className="block w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-500">
                            <option>Semi Furnished</option>
                            <option>Furnished</option>
                            <option>Unfurnished</option>
                        </select>
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-semibold mb-2">Accommodation Type</label>
                        <select className="block w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-500">
                            {accommodationTypes.map((type, index) => (
                                <option key={index}>{type}</option>
                            ))}
                        </select>
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-semibold mb-2">Contact Number</label>
                        <input type="text" className="block w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-500" placeholder="Enter contact number" />
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-semibold mb-2">Room Description</label>
                        <textarea className="block w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-500" placeholder="Enter room description"></textarea>
                    </div>

                    <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700">Register Home</button>
                </div>

            </div>
        </div>
    );
}

export default RegisterRoom;
