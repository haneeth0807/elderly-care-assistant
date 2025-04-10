
import React from 'react';
import MainLayout from '@/layouts/MainLayout';
import Reminders from '@/components/Reminders';

const RemindersPage = () => {
  return (
    <MainLayout title="Reminders">
      <Reminders />
    </MainLayout>
  );
};

export default RemindersPage;
