
import React from 'react';
import { userProfile } from '@/data/mockData';
import DataCard from '@/components/ui/DataCard';
import { AlertCircle, HeartPulse, Phone, User, Users } from 'lucide-react';

const UserProfile = () => {
  return (
    <div className="space-y-6 mb-20 lg:mb-0">
      <section>
        <div className="mb-6">
          <div className="flex items-center justify-center">
            <div className="bg-soft-purple h-32 w-32 rounded-full flex items-center justify-center">
              <User className="h-16 w-16 text-primary-blue" />
            </div>
          </div>
          <div className="text-center mt-4">
            <h2 className="text-2xl-accessible font-bold">{userProfile.name}</h2>
            <p className="text-gray-600 text-accessible">{userProfile.age} years old, {userProfile.gender}</p>
          </div>
        </div>
      </section>
      
      <section>
        <div className="grid md:grid-cols-2 gap-6">
          <DataCard title="Medical Information" icon={<HeartPulse className="h-5 w-5" />}>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium mb-2 text-gray-800">Medical Conditions</h4>
                <ul className="list-disc pl-5 space-y-1 text-accessible">
                  {userProfile.conditions.map((condition, index) => (
                    <li key={index}>{condition}</li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="font-medium mb-2 text-gray-800">Allergies</h4>
                <ul className="list-disc pl-5 space-y-1 text-accessible">
                  {userProfile.allergies.map((allergy, index) => (
                    <li key={index}>{allergy}</li>
                  ))}
                </ul>
              </div>
            </div>
          </DataCard>
          
          <DataCard title="Emergency Contact" icon={<AlertCircle className="h-5 w-5" />}>
            <div className="space-y-4">
              <div className="flex gap-3 items-center">
                <div className="bg-soft-purple h-12 w-12 rounded-full flex items-center justify-center">
                  <Users className="h-6 w-6 text-primary-blue" />
                </div>
                <div>
                  <p className="font-medium">{userProfile.emergencyContact.name}</p>
                  <p className="text-gray-600 text-accessible">{userProfile.emergencyContact.relation}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-2 px-3 py-2 bg-soft-blue rounded-lg">
                <Phone className="h-5 w-5 text-primary-blue" />
                <span className="text-accessible">{userProfile.emergencyContact.phone}</span>
              </div>
            </div>
          </DataCard>
        </div>
      </section>
      
      <section className="mt-6">
        <DataCard title="Caregiver Information" icon={<Users className="h-5 w-5" />}>
          <div className="space-y-4">
            <div>
              <h4 className="font-medium mb-1 text-gray-800">{userProfile.caregiver.name}</h4>
              <p className="text-gray-600 text-accessible">Primary Caregiver</p>
            </div>
            
            <div className="flex flex-col md:flex-row md:items-center gap-4">
              <div className="flex items-center gap-2 px-3 py-2 bg-soft-blue rounded-lg">
                <Phone className="h-5 w-5 text-primary-blue" />
                <span className="text-accessible">{userProfile.caregiver.phone}</span>
              </div>
              
              <div className="flex items-center gap-2 px-3 py-2 bg-soft-blue rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-blue" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                <span className="text-accessible">{userProfile.caregiver.email}</span>
              </div>
            </div>
          </div>
        </DataCard>
      </section>
      
      <section className="mt-6">
        <DataCard title="Notification Settings">
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg">
              <label htmlFor="email-notifications" className="text-accessible cursor-pointer">Email Notifications</label>
              <input 
                type="checkbox" 
                id="email-notifications" 
                defaultChecked 
                className="h-6 w-6 rounded text-primary-blue focus:ring-primary-blue"
              />
            </div>
            
            <div className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg">
              <label htmlFor="sms-notifications" className="text-accessible cursor-pointer">SMS Notifications</label>
              <input 
                type="checkbox" 
                id="sms-notifications" 
                defaultChecked 
                className="h-6 w-6 rounded text-primary-blue focus:ring-primary-blue"
              />
            </div>
            
            <div className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg">
              <label htmlFor="emergency-alerts" className="text-accessible cursor-pointer">Emergency Alerts</label>
              <input 
                type="checkbox" 
                id="emergency-alerts" 
                defaultChecked 
                className="h-6 w-6 rounded text-primary-blue focus:ring-primary-blue"
              />
            </div>
            
            <div className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg">
              <label htmlFor="medication-reminders" className="text-accessible cursor-pointer">Medication Reminders</label>
              <input 
                type="checkbox" 
                id="medication-reminders" 
                defaultChecked 
                className="h-6 w-6 rounded text-primary-blue focus:ring-primary-blue"
              />
            </div>
          </div>
        </DataCard>
      </section>
    </div>
  );
};

export default UserProfile;
