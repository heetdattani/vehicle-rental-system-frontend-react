import { useEffect, useState } from "react";
import { getVehicles } from "../api/vehicleApi";
import VehicleCard from "../components/VehicleCard";
import "bootstrap/dist/css/bootstrap.min.css";

function Home() {
  const [vehicles, setVehicles] = useState([]);
  const [search, setSearch] = useState("");
  const fetchVehicles = async () => {
    const res = await getVehicles({ search });
    console.log(res, "res");
    setVehicles(res.vehicles);
  };

  useEffect(() => {
    fetchVehicles();
  }, [search]);

  return (
    <div className="container mt-4">
      {/* Inline CSS for visibility */}
      <style>
        {`
          .form-control {
            font-size: 1.2rem;
            border: 2px solid #007bff;
            box-shadow: 0 2px 8px rgba(0,0,0,0.08);
          }
          .row {
            margin-top: 20px;
          }
          .col-md-4 {
            display: flex;
            justify-content: center;
          }
          .vehicle-card {
            border: 2px solid #007bff;
            border-radius: 12px;
            box-shadow: 0 4px 16px rgba(0,123,255,0.08);
            padding: 16px;
            background: #f8f9fa;
            width: 100%;
            max-width: 350px;
            transition: transform 0.2s;
          }
          .vehicle-card:hover {
            transform: scale(1.03);
            box-shadow: 0 8px 24px rgba(0,123,255,0.16);
          }
        `}
      </style>
      <input
        className="form-control mb-3"
        placeholder="Search vehicles..."
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="row">
        {vehicles.map((vehicle) => (
          <div className="col-md-4 mb-4" key={vehicle._id}>
            <div className="vehicle-card">
              <VehicleCard vehicle={vehicle} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
