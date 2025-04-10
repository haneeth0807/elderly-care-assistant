
import React from 'react';
import { cn } from '@/lib/utils';
import { ArrowDown, ArrowRight, ArrowUp } from 'lucide-react';
import { VitalData } from '@/data/mockData';

interface VitalCardProps {
  vital: VitalData;
  className?: string;
}

const VitalCard = ({ vital, className }: VitalCardProps) => {
  const getTrendIcon = () => {
    switch (vital.trend) {
      case 'up':
        return <ArrowUp className="h-5 w-5" />;
      case 'down':
        return <ArrowDown className="h-5 w-5" />;
      case 'stable':
      default:
        return <ArrowRight className="h-5 w-5" />;
    }
  };

  const getTrendColor = () => {
    switch (vital.status) {
      case 'normal':
        return 'text-green-600';
      case 'warning':
        return 'text-amber-600';
      case 'alert':
        return 'text-orange-600';
      case 'critical':
        return 'text-red-600';
      default:
        return 'text-green-600';
    }
  };

  return (
    <div
      className={cn(
        "card-vital relative overflow-hidden",
        {
          'card-vital-normal': vital.status === 'normal',
          'card-vital-warning': vital.status === 'warning',
          'card-vital-alert': vital.status === 'alert',
          'card-vital-critical': vital.status === 'critical',
        },
        className
      )}
    >
      <div className="flex flex-col h-full">
        <div className="flex items-center justify-between mb-1">
          <h4 className="font-medium text-gray-800">{vital.name}</h4>
          <span className={`flex items-center ${getTrendColor()}`}>
            {getTrendIcon()}
          </span>
        </div>
        
        <div className="flex items-end gap-1 mt-2">
          <span className="text-2xl-accessible font-bold">{vital.value}</span>
          <span className="text-gray-600 text-accessible">{vital.unit}</span>
        </div>
        
        <span className="text-sm text-gray-500 mt-1">Last updated: {vital.time}</span>
      </div>
    </div>
  );
};

export default VitalCard;
