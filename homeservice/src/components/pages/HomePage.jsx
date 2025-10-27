import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { fetchServices, selectServices, selectServicesLoading, selectServicesError } from '../../store/slices/servicesSlice';
import Header from '../header.jsx';
import HeroSection from '../HeroSection';
import CartList from '../customer/cusCartList.jsx';
import HomeCareEssentials from '../HomeService/HomeCareEssentials.jsx';
import MostBookedService from '../BookedService/MostBookedService.jsx';

const HomePage = () => {
  const dispatch = useAppDispatch();
  const services = useAppSelector(selectServices);
  const loading = useAppSelector(selectServicesLoading);
  const error = useAppSelector(selectServicesError);

  useEffect(() => {
    dispatch(fetchServices());
  }, [dispatch]);

  if (loading) {
    return (
      <div className="app">
        <Header />
        <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '50vh' }}>
          <div className="text-center">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
            <p className="mt-3">Loading services...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="app">
        <Header />
        <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '50vh' }}>
          <div className="text-center">
            <p className="text-danger">{error}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="app">
      <Header />
      <HeroSection />
      <CartList services={services} cardLimit={3} />
      <HomeCareEssentials services={services} cardLimit={10} />
      <MostBookedService services={services} title="Most Booked Service" cardLimit={8} />
    </div>
  );
};

export default HomePage;
