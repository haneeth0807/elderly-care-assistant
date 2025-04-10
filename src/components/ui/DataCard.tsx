
import React, { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface DataCardProps {
  title: string;
  children: ReactNode;
  className?: string;
  icon?: ReactNode;
}

const DataCard = ({ title, children, className, icon }: DataCardProps) => {
  return (
    <div className={cn("card animate-fade-in", className)}>
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-medium text-xl-accessible text-gray-800">{title}</h3>
        {icon && <div className="text-primary-blue">{icon}</div>}
      </div>
      <div>{children}</div>
    </div>
  );
};

export default DataCard;
