
import React from 'react';
import { vitalData, vitalHistory } from '@/data/mockData';
import VitalCard from '@/components/ui/VitalCard';
import DataCard from '@/components/ui/DataCard';
import { Activity } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const HealthMonitoring = () => {
  return (
    <div className="space-y-6">
      <section>
        <h3 className="text-xl-accessible font-semibold mb-4">Current Vitals</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {vitalData.map((vital) => (
            <VitalCard key={vital.id} vital={vital} />
          ))}
        </div>
      </section>
      
      <section className="mt-6">
        <h3 className="text-xl-accessible font-semibold mb-4">Health Trends</h3>
        <div className="space-y-6">
          {vitalHistory.map((vital) => (
            <DataCard 
              key={vital.id} 
              title={`${vital.name} (${vital.unit})`} 
              icon={<Activity className="h-5 w-5" />}
              className="p-5"
            >
              <div className="h-64 mt-2">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart
                    data={vital.data}
                    margin={{ top: 5, right: 5, left: 0, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis 
                      dataKey="time" 
                      tick={{ fontSize: 12 }}
                      height={60}
                      tickMargin={10}
                    />
                    <YAxis 
                      domain={['dataMin - 10', 'dataMax + 10']} 
                      tick={{ fontSize: 12 }}
                      tickMargin={10}
                    />
                    <Tooltip 
                      contentStyle={{ fontSize: '16px', borderRadius: '8px' }} 
                      itemStyle={{ fontSize: '16px' }}
                    />
                    <Legend wrapperStyle={{ fontSize: '16px', paddingTop: '10px' }}/>
                    <Line 
                      type="monotone" 
                      dataKey="value" 
                      name={vital.name}
                      stroke="#4D96FF" 
                      strokeWidth={3}
                      dot={{ r: 6 }}
                      activeDot={{ r: 8 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </DataCard>
          ))}
        </div>
      </section>
      
      <section className="mt-6 mb-20 lg:mb-0">
        <DataCard title="Health Recommendations">
          <div className="p-3 bg-soft-green rounded-lg">
            <p className="text-accessible">Based on your recent vitals, consider:</p>
            <ul className="list-disc pl-5 mt-2 space-y-2 text-accessible">
              <li>Maintaining your current medication schedule</li>
              <li>Continue your daily walking routine</li>
              <li>Monitor your slightly elevated temperature</li>
              <li>Stay hydrated, especially during warm weather</li>
            </ul>
          </div>
          
          <div className="mt-4 p-3 bg-soft-blue rounded-lg">
            <p className="font-medium text-accessible">Next health check:</p>
            <p className="text-gray-600 text-accessible mt-1">Doctor's appointment with Dr. Smith on Thursday, 2:30 PM</p>
          </div>
        </DataCard>
      </section>
    </div>
  );
};

export default HealthMonitoring;
