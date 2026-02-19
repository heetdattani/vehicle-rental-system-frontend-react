# Vehicle Rental System Frontend (React)

This project is the frontend for a Vehicle Rental System, built using React. It allows users to browse, search, and rent vehicles. Admins can manage vehicle listings and bookings.

## Features

- User authentication (login/register)
- Vehicle search and filter
- Vehicle booking and rental management
- Admin dashboard for managing vehicles and bookings
- Responsive UI with Bootstrap

## Prerequisites

- Node.js (v20.19.0 or higher recommended)
- npm (v10.8.2 or higher)

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/heetdattani/vehicle-rental-system-frontend-react.git
cd vehicle-rental-system-frontend-react
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm run dev
```

The app will run at [http://localhost:5173](http://localhost:5173).

### 4. Build for production

```bash
npm run build
```

## Environment Variables

Create a `.env` file in the `vehicle-rental-frontend` directory and add your API endpoint:

```
REACT_APP_API_URL=http://localhost:5000
```

## Project Structure

```
vehicle-rental-system-frontend-react/
│
├── vehicle-rental-frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── api/
│   │   └── App.jsx
|   |   |__ page/
|   |   |__ socket/
│   ├── public/
│   └── package.json
└── README.md
```

## Useful Commands

| Command         | Description               |
| --------------- | ------------------------- |
| `npm run dev`   | Start development server  |
| `npm run build` | Build for production      |
| `npm run lint`  | Run linter (if available) |

## Supported Versions

- Node.js v20.19.0+
- React v17, v18

## License

This project is licensed under the MIT License.

---

**For frontend setup, refer to the frontend repository and documentation.**
