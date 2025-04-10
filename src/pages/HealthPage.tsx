
import React from 'react';
import MainLayout from '@/layouts/MainLayout';
import HealthMonitoring from '@/components/HealthMonitoring';

const HealthPage = () => {
  return (
    <MainLayout title="Health Monitoring">
      <HealthMonitoring />
    </MainLayout>
  );
};

export default HealthPage;
