
import React from 'react';
import DataCard from '@/components/ui/DataCard';
import VitalCard from '@/components/ui/VitalCard';
import { Activity, Bell, Calendar, Clock } from 'lucide-react';
import { vitalData, reminderData, alertData } from '@/data/mockData';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();
  const currentTime = new Date();
  const hours = currentTime.getHours();
  
  let greeting = "Good morning";
  if (hours >= 12 && hours < 17) {
    greeting = "Good afternoon";
  } else if (hours >= 17) {
    greeting = "Good evening";
  }
  
  // Get upcoming reminders (only show incomplete ones)
  const upcomingReminders = reminderData
    .filter(reminder => !reminder.isCompleted)
    .slice(0, 3);
    
  // Get recent alerts (active only)
  const recentAlerts = alertData
    .filter(alert => alert.status === 'active')
    .slice(0, 2);

  return (
    <div className="space-y-6">
      <section className="mb-6">
        <h2 className="text-2xl-accessible font-semibold mb-2">{greeting}, Eleanor</h2>
        <p className="text-gray-600 text-accessible">Here's your health summary for today</p>
      </section>
      
      <section>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl-accessible font-semibold">Health Vitals</h3>
          <button 
            onClick={() => navigate('/health')}
            className="text-primary-blue hover:underline text-accessible flex items-center gap-1"
          >
            <span>View all</span>
          </button>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {vitalData.map((vital) => (
            <VitalCard key={vital.id} vital={vital} />
          ))}
        </div>
      </section>
      
      <div className="grid md:grid-cols-2 gap-6 mt-6">
        <section>
          <DataCard title="Today's Reminders" icon={<Calendar className="h-5 w-5" />}>
            {upcomingReminders.length > 0 ? (
              <div className="space-y-3">
                {upcomingReminders.map((reminder) => (
                  <div key={reminder.id} className="flex items-start gap-3 p-2 hover:bg-gray-50 rounded-lg">
                    <div className="mt-1">
                      {reminder.type === 'medication' ? (
                        <Bell className="h-5 w-5 text-primary-blue" />
                      ) : (
                        <Clock className="h-5 w-5 text-primary-blue" />
                      )}
                    </div>
                    <div>
                      <p className="font-medium">{reminder.title}</p>
                      <p className="text-gray-600 text-sm">{reminder.time} - {reminder.description}</p>
                    </div>
                  </div>
                ))}
                <button 
                  onClick={() => navigate('/reminders')}
                  className="w-full mt-2 text-center text-primary-blue hover:underline text-accessible"
                >
                  View all reminders
                </button>
              </div>
            ) : (
              <p className="text-gray-600">No upcoming reminders for today.</p>
            )}
          </DataCard>
        </section>
        
        <section>
          <DataCard title="Active Alerts" icon={<Activity className="h-5 w-5" />}>
            {recentAlerts.length > 0 ? (
              <div className="space-y-3">
                {recentAlerts.map((alert) => (
                  <div 
                    key={alert.id} 
                    className={`p-3 rounded-lg ${
                      alert.severity === 'critical' ? 'bg-red-50 border-l-2 border-l-red-500' : 
                      alert.severity === 'high' ? 'bg-orange-50 border-l-2 border-l-orange-500' :
                      'bg-yellow-50 border-l-2 border-l-yellow-500'
                    }`}
                  >
                    <div className="flex justify-between">
                      <p className="font-medium">{alert.title}</p>
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        alert.severity === 'critical' ? 'bg-red-100 text-red-800' :
                        alert.severity === 'high' ? 'bg-orange-100 text-orange-800' :
                        'bg-yellow-100 text-yellow-800'
                      }`}>
                        {alert.severity}
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm mt-1">{alert.description}</p>
                    <p className="text-gray-500 text-sm mt-1">{alert.time}</p>
                  </div>
                ))}
                <button 
                  onClick={() => navigate('/alerts')}
                  className="w-full mt-2 text-center text-primary-blue hover:underline text-accessible"
                >
                  View all alerts
                </button>
              </div>
            ) : (
              <div className="bg-soft-green p-3 rounded-lg">
                <p className="text-gray-800">No active alerts at this time.</p>
              </div>
            )}
          </DataCard>
        </section>
      </div>
    </div>
  );
};

export default Dashboard;
