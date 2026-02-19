import { Link } from "react-router-dom";

function VehicleCard({ vehicle }) {
  console.log(vehicle, "vehicle");
  return (
    <div className="vehicle-card-inner">
      <h5 className="vehicle-title">{vehicle.name}</h5>
      <p className="vehicle-info">
        <strong>Type:</strong> {vehicle.type}
      </p>
      <p className="vehicle-info">
        <strong>Price:</strong> ${vehicle.rentPerDay}/day
      </p>
      <Link
        to={`/vehicle/${vehicle._id}`}
        className="btn btn-primary w-100 mt-2"
      >
        View Details
      </Link>
      <style>
        {`
          .vehicle-card-inner {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            padding: 18px;
            background: #fff;
            border-radius: 12px;
            box-shadow: 0 2px 8px rgba(0,123,255,0.08);
            min-height: 220px;
            height: 100%;
          }
          .vehicle-title {
            font-size: 1.3rem;
            font-weight: 600;
            margin-bottom: 10px;
            color: #007bff;
            word-break: break-word;
          }
          .vehicle-info {
            margin-bottom: 6px;
            font-size: 1rem;
            color: #333;
          }
        `}
      </style>
    </div>
  );
}

export default VehicleCard;
