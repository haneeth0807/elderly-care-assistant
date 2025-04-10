
import React from 'react';
import MainLayout from '@/layouts/MainLayout';
import UserProfile from '@/components/UserProfile';

const ProfilePage = () => {
  return (
    <MainLayout title="User Profile">
      <UserProfile />
    </MainLayout>
  );
};

export default ProfilePage;
