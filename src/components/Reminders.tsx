
import React, { useState } from 'react';
import { reminderData, Reminder } from '@/data/mockData';
import ReminderCard from '@/components/ui/ReminderCard';
import { Calendar, CheckCircle2, Filter } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Reminders = () => {
  const [reminders, setReminders] = useState<Reminder[]>(reminderData);
  const [filter, setFilter] = useState<'all' | 'pending' | 'completed'>('all');
  const { toast } = useToast();

  const handleToggleReminder = (id: string) => {
    const updatedReminders = reminders.map(reminder => {
      if (reminder.id === id) {
        const updated = { ...reminder, isCompleted: !reminder.isCompleted };
        if (updated.isCompleted) {
          toast({
            title: "Reminder marked as complete",
            description: `${reminder.title} has been marked as complete`,
          });
        }
        return updated;
      }
      return reminder;
    });
    
    setReminders(updatedReminders);
  };
  
  const filteredReminders = reminders.filter(reminder => {
    if (filter === 'pending') return !reminder.isCompleted;
    if (filter === 'completed') return reminder.isCompleted;
    return true;
  });
  
  const pendingCount = reminders.filter(r => !r.isCompleted).length;
  const completedCount = reminders.filter(r => r.isCompleted).length;

  return (
    <div className="space-y-6">
      <section>
        <h3 className="text-xl-accessible font-semibold mb-4">Today's Reminders</h3>
        
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 bg-soft-purple px-4 py-2 rounded-lg">
              <Calendar className="h-5 w-5 text-primary-blue" />
              <span className="font-medium text-accessible">{new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}</span>
            </div>
          </div>
          
          <div className="flex items-center">
            <div className="bg-white rounded-lg shadow-sm border overflow-hidden flex">
              <button 
                className={`px-4 py-2 text-accessible ${filter === 'all' ? 'bg-primary text-white' : 'hover:bg-gray-50'}`}
                onClick={() => setFilter('all')}
              >
                All ({reminders.length})
              </button>
              <button 
                className={`px-4 py-2 text-accessible ${filter === 'pending' ? 'bg-primary text-white' : 'hover:bg-gray-50'}`}
                onClick={() => setFilter('pending')}
              >
                Pending ({pendingCount})
              </button>
              <button 
                className={`px-4 py-2 text-accessible ${filter === 'completed' ? 'bg-primary text-white' : 'hover:bg-gray-50'}`}
                onClick={() => setFilter('completed')}
              >
                Completed ({completedCount})
              </button>
            </div>
          </div>
        </div>
        
        <div className="space-y-4 mb-24 lg:mb-4">
          {filteredReminders.length > 0 ? (
            filteredReminders.map(reminder => (
              <ReminderCard 
                key={reminder.id} 
                reminder={reminder}
                onToggle={handleToggleReminder}
              />
            ))
          ) : (
            <div className="bg-soft-gray text-center p-8 rounded-lg">
              <CheckCircle2 className="h-12 w-12 mx-auto text-gray-400 mb-2" />
              <p className="text-gray-600 text-accessible">No {filter} reminders found</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Reminders;
