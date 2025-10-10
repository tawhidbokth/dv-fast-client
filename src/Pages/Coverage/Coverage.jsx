import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix default Leaflet icon paths
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

const Coverage = () => {
  const position = [23.685, 90.3563];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold text-black text-center mb-4">
        We are available in 64 districts
      </h1>
      <p className="text-gray-600 text-center mb-6">
        Find your district and see if we deliver to your area.
      </p>

       {/* Search Box */}
      <div className="flex gap-2 mb-6 w-full md:w-1/2">
        <input
          type="text"
          placeholder="Search district (e.g., Dhaka)"
          className="input input-bordered w-full"
        />
        <button className="btn btn-primary">Search</button> 
      </div>

      <div className="w-full md:w-3/4 lg:w-2/3 h-[500px] rounded-2xl overflow-hidden shadow-lg border">
        <MapContainer
          center={position}
          zoom={7}
          scrollWheelZoom={true}
          className="h-full w-full z-0"
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position}>
            <Popup>Bangladesh — Our Delivery Network</Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
};

// ✅ make sure this export is present!
export default Coverage;
