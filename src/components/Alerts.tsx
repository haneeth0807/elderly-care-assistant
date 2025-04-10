
import React, { useState } from 'react';
import { alertData, Alert } from '@/data/mockData';
import AlertCard from '@/components/ui/AlertCard';
import { Filter } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Alerts = () => {
  const [alerts, setAlerts] = useState<Alert[]>(alertData);
  const [filter, setFilter] = useState<'all' | 'active' | 'resolved'>('all');
  const { toast } = useToast();

  const handleClearAll = () => {
    toast({
      title: "All alerts cleared",
      description: "All alerts have been marked as resolved",
    });
    
    const updatedAlerts = alerts.map(alert => ({
      ...alert,
      status: 'resolved' as const
    }));
    setAlerts(updatedAlerts);
  };
  
  const filteredAlerts = alerts.filter(alert => {
    if (filter === 'active') return alert.status === 'active' || alert.status === 'acknowledged';
    if (filter === 'resolved') return alert.status === 'resolved';
    return true;
  });
  
  const activeCount = alerts.filter(a => a.status === 'active' || a.status === 'acknowledged').length;
  const resolvedCount = alerts.filter(a => a.status === 'resolved').length;

  return (
    <div className="space-y-6">
      <section>
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl-accessible font-semibold">Alerts & Notifications</h3>
          {activeCount > 0 && (
            <button 
              className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-gray-600 hover:bg-gray-50 text-accessible"
              onClick={handleClearAll}
            >
              Clear All
            </button>
          )}
        </div>
        
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          <div className="bg-white rounded-lg shadow-sm border overflow-hidden flex">
            <button 
              className={`px-4 py-2 text-accessible ${filter === 'all' ? 'bg-primary text-white' : 'hover:bg-gray-50'}`}
              onClick={() => setFilter('all')}
            >
              All ({alerts.length})
            </button>
            <button 
              className={`px-4 py-2 text-accessible ${filter === 'active' ? 'bg-primary text-white' : 'hover:bg-gray-50'}`}
              onClick={() => setFilter('active')}
            >
              Active ({activeCount})
            </button>
            <button 
              className={`px-4 py-2 text-accessible ${filter === 'resolved' ? 'bg-primary text-white' : 'hover:bg-gray-50'}`}
              onClick={() => setFilter('resolved')}
            >
              Resolved ({resolvedCount})
            </button>
          </div>
        </div>
        
        <div className="space-y-4 mb-20 lg:mb-4">
          {filteredAlerts.length > 0 ? (
            filteredAlerts.map(alert => (
              <AlertCard key={alert.id} alert={alert} />
            ))
          ) : (
            <div className="bg-soft-gray text-center p-8 rounded-lg">
              <p className="text-gray-600 text-accessible">No {filter} alerts found</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Alerts;
