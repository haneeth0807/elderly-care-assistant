
import React from 'react';
import { cn } from '@/lib/utils';
import { Alert } from '@/data/mockData';
import { BellRing, CheckCircle2, Clock } from 'lucide-react';

interface AlertCardProps {
  alert: Alert;
  className?: string;
}

const AlertCard = ({ alert, className }: AlertCardProps) => {
  const getSeverityBadge = () => {
    switch (alert.severity) {
      case 'critical':
        return <span className="bg-red-100 text-red-800 text-sm font-medium px-2.5 py-0.5 rounded">Critical</span>;
      case 'high':
        return <span className="bg-orange-100 text-orange-800 text-sm font-medium px-2.5 py-0.5 rounded">High</span>;
      case 'medium':
        return <span className="bg-yellow-100 text-yellow-800 text-sm font-medium px-2.5 py-0.5 rounded">Medium</span>;
      case 'low':
      default:
        return <span className="bg-blue-100 text-blue-800 text-sm font-medium px-2.5 py-0.5 rounded">Low</span>;
    }
  };

  const getStatusIcon = () => {
    switch (alert.status) {
      case 'resolved':
        return <CheckCircle2 className="h-5 w-5 text-green-600" />;
      case 'acknowledged':
        return <Clock className="h-5 w-5 text-amber-600" />;
      case 'active':
      default:
        return <BellRing className="h-5 w-5 text-red-600 animate-pulse-subtle" />;
    }
  };

  return (
    <div className={cn("card mb-4 border-l-4", {
      "border-l-red-500": alert.severity === 'critical',
      "border-l-orange-500": alert.severity === 'high',
      "border-l-yellow-500": alert.severity === 'medium',
      "border-l-blue-500": alert.severity === 'low',
    }, className)}>
      <div className="flex justify-between items-start">
        <div>
          <h4 className="font-medium text-gray-800 text-lg">{alert.title}</h4>
          <p className="text-gray-600 mt-1">{alert.description}</p>
        </div>
        <div className="flex items-center">
          {getStatusIcon()}
        </div>
      </div>
      
      <div className="flex items-center justify-between mt-3">
        <div>{getSeverityBadge()}</div>
        <span className="text-sm text-gray-500">{alert.time}</span>
      </div>
    </div>
  );
};

export default AlertCard;
