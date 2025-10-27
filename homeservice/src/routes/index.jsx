import React from 'react';
import HomePage from '../components/pages/HomePage';
import AboutPage from '../components/pages/AboutPage';
import ContactPage from '../components/pages/ContactPage';
import ServicesPage from '../components/pages/ServicesPage';
import NotFound from '../components/pages/NotFound';

export const ROUTES = {
  HOME: "/",
  ABOUT: "/about",
  CONTACT: "/contact",
  SERVICES: "/services",
  SERVICE_DETAIL: "/services/:id",
  LOGIN: "/login",
  REGISTER: "/register",
  PROFILE: "/profile",
  DASHBOARD: "/dashboard",
  ADMIN: "/admin",
  ADMIN_SERVICES: "/admin/services",
  ADMIN_USERS: "/admin/users",
};

export const routeConfig = [
  {
    path: ROUTES.HOME,
    element: <HomePage />,
  },
  {
    path: ROUTES.ABOUT,
    element: <AboutPage />,
  },
  {
    path: ROUTES.CONTACT,
    element: <ContactPage />,
  },
  {
    path: ROUTES.SERVICES,
    element: <ServicesPage />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export const ROUTE_PERMISSIONS = {
  PUBLIC: [],
  USER: [
    ROUTES.PROFILE,
    ROUTES.DASHBOARD,
  ],
  ADMIN: [
    ROUTES.ADMIN,
    ROUTES.ADMIN_SERVICES,
    ROUTES.ADMIN_USERS,
  ],
};

export const requiresAuth = (path) => {
  return [...ROUTE_PERMISSIONS.USER, ...ROUTE_PERMISSIONS.ADMIN].includes(path);
};

export const requiresAdmin = (path) => {
  return ROUTE_PERMISSIONS.ADMIN.includes(path);
};
