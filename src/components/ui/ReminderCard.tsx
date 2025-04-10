
import React from 'react';
import { cn } from '@/lib/utils';
import { Reminder } from '@/data/mockData';
import { Calendar, CheckSquare, Clock, Pill, Square } from 'lucide-react';

interface ReminderCardProps {
  reminder: Reminder;
  onToggle: (id: string) => void;
  className?: string;
}

const ReminderCard = ({ reminder, onToggle, className }: ReminderCardProps) => {
  const getTypeIcon = () => {
    switch (reminder.type) {
      case 'medication':
        return <Pill className="h-5 w-5 text-primary-blue" />;
      case 'appointment':
        return <Calendar className="h-5 w-5 text-primary-blue" />;
      case 'activity':
        return <Clock className="h-5 w-5 text-primary-blue" />;
      case 'other':
      default:
        return <Clock className="h-5 w-5 text-primary-blue" />;
    }
  };

  const getCheckboxIcon = () => {
    return reminder.isCompleted ? (
      <CheckSquare 
        className="h-6 w-6 text-green-600 cursor-pointer" 
        onClick={() => onToggle(reminder.id)} 
      />
    ) : (
      <Square 
        className="h-6 w-6 text-gray-400 cursor-pointer" 
        onClick={() => onToggle(reminder.id)} 
      />
    );
  };

  return (
    <div className={cn(
      "card mb-4 transition-all", 
      {
        "bg-gray-50": reminder.isCompleted,
        "border-l-4 border-l-primary-blue": reminder.priority === 'high' && !reminder.isCompleted
      },
      className
    )}>
      <div className="flex items-start gap-3">
        {getCheckboxIcon()}
        <div className="flex-grow">
          <h4 className={cn(
            "font-medium text-lg", 
            reminder.isCompleted ? "text-gray-500 line-through" : "text-gray-800"
          )}>
            {reminder.title}
          </h4>
          <p className={cn(
            "mt-1", 
            reminder.isCompleted ? "text-gray-400" : "text-gray-600"
          )}>
            {reminder.description}
          </p>
          <div className="flex items-center gap-2 mt-2">
            {getTypeIcon()}
            <span className={cn(
              "text-sm",
              reminder.isCompleted ? "text-gray-400" : "text-gray-600"
            )}>
              {reminder.time}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReminderCard;
