import React from 'react';
import Services from '../components/serviceitem';

function ServicesPage() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Our Services</h1>
      <Services />
    </div>
  );
}

export default ServicesPage;