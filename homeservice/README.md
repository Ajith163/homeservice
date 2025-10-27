# Home Services Platform

A modern React-based application for managing home services with a fully responsive design.

## ✨ Features

- ✅ **Fully Responsive Layout** - Works seamlessly on all devices
- ✅ **Component-Based Architecture** - Reusable components for maintainability
- ✅ **Centralized API Management** - Dedicated API setup folder with error handling
- ✅ **Data Flow via Props** - Parent components fetch data, children receive via props
- ✅ **Route Management** - Dedicated routes folder with permission handling
- ✅ **Environment Configuration** - .env file for API endpoint management
- ✅ **Modern Carousel Implementation** - Swiper carousel with auto-play
- ✅ **Loading & Error States** - Proper handling of async operations

## 🎯 Tech Stack

- **React** - Modern UI library
- **Vite** - Fast build tool
- **React Router DOM** - Client-side routing
- **Axios** - HTTP client with interceptors
- **Swiper** - Modern carousel/slider
- **Bootstrap** - Responsive CSS framework

## 📁 Project Structure

```
src/
├── api/                    # API setup folder
│   ├── apiservice.js       # Axios client with interceptors
│   ├── config.js           # API configuration & constants
│   ├── errorHandler.js     # Centralized error handling
│   ├── index.js            # API exports
│   └── productService.js   # Product API calls
├── components/             # Reusable components
│   ├── BookedService/      # Most booked services section
│   ├── customer/           # Customer showcase & satisfaction
│   ├── HomeService/        # Home care essentials with Swiper
│   ├── pages/              # Page components
│   ├── header.jsx          # Navigation header
│   └── HeroSection.jsx     # Hero banner
├── routes/                 # Route definitions
│   └── index.jsx           # Routes & permissions
└── assets/                 # Static assets
    └── logo.png
```

## 🚀 Getting Started

### Installation

```bash
npm install
```

### Environment Setup

1. Copy `.env.example` to `.env`
2. Configure your API endpoint (defaults to JSONPlaceholder)

```env
VITE_BASE_URL=https://jsonplaceholder.typicode.com
VITE_API_TIMEOUT=10000
```

### Development

```bash
npm run dev
```

### Build

```bash
npm run build
```

## 📋 Implementation Details

### ✅ Data Flow Architecture

The application follows a **parent-child data flow pattern**:

1. **Parent Component (`HomePage.jsx`)**:
   - Fetches data using `getProducts()` API call
   - Manages loading and error states
   - Passes data to child components via props

2. **Child Components**:
   - Receive data as props
   - Focus on presentation logic only
   - No internal data fetching

```jsx
// Example from HomePage.jsx
const HomePage = () => {
  const [services, setServices] = useState([]);
  
  useEffect(() => {
    // Fetch data once in parent
    const data = await getProducts();
    setServices(data);
  }, []);

  // Pass data to children
  return (
    <>
      <HomeCareEssentials services={services} />
      <MostBookedService services={services} />
    </>
  );
};
```

### ✅ API Management

**Centralized Error Handling** (`src/api/errorHandler.js`):
- Handles network errors, timeouts, and HTTP errors
- Consistent error messages across all API calls
- Request/response logging with interceptors

**API Configuration** (`src/api/config.js`):
- Environment-based base URL
- Timeout configuration
- HTTP status code constants

### ✅ Component Reusability

Each homepage section is a **reusable component**:

- `HeroSection` - Hero banner with headline
- `ServiceShowcase` - 3 featured services
- `HomeCareEssentials` - Swiper carousel with 10 services
- `MostBookedService` - Horizontal scroll with 8 services

### ✅ Responsive Design

All components are fully responsive with:
- Mobile-first approach
- Breakpoints at 576px, 768px, 992px, 1200px
- Flexible layouts with CSS Grid & Flexbox
- Touch-friendly navigation

### ✅ Carousel Implementation

Uses Swiper library for modern carousel with:
- Auto-play functionality
- Responsive slide counts
- Smooth transitions
- Loop support

## 🔧 API Endpoints

- **Get Products**: `GET /photos?_limit=20`
- **Get Product by ID**: `GET /photos/:id`

Base URL is configured in `.env` file.

## 📱 Screenshots

The app displays:
1. Navigation header
2. Hero section with main call-to-action
3. Service showcase cards
4. Home care essentials carousel
5. Most booked services carousel

## 🎨 Features Implemented

- [x] Functional React components
- [x] Fully responsive layout
- [x] Individual reusable components
- [x] JSONPlaceholder API integration
- [x] Parent fetches data, children receive via props
- [x] Separate API setup folder
- [x] Centralized error handling
- [x] Routes folder with permissions
- [x] Environment configuration
- [x] Modern carousel implementation
- [x] Well-structured code

## 👨‍💻 Author

Built for React Machine Test - UI reusability with structural codes
