
import React from 'react';
import { BellRing, Menu, User } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface HeaderProps {
  title: string;
  onMenuClick: () => void;
}

const Header = ({ title, onMenuClick }: HeaderProps) => {
  const { toast } = useToast();
  
  const handleNotificationClick = () => {
    toast({
      title: "New alert",
      description: "Temperature reading above normal range",
    });
  };

  return (
    <header className="bg-white py-3 px-4 flex items-center justify-between shadow-sm sticky top-0 z-10">
      <div className="flex items-center gap-3">
        <button 
          onClick={onMenuClick}
          className="p-2 rounded-full hover:bg-soft-gray lg:hidden"
          aria-label="Toggle menu"
        >
          <Menu className="h-6 w-6" />
        </button>
        <h1 className="text-xl md:text-2xl font-semibold">{title}</h1>
      </div>
      
      <div className="flex items-center gap-2">
        <button 
          onClick={handleNotificationClick}
          className="p-2 rounded-full hover:bg-soft-gray relative"
          aria-label="Notifications"
        >
          <BellRing className="h-6 w-6" />
          <span className="absolute top-1 right-1 bg-red-500 rounded-full h-2 w-2"></span>
        </button>
        
        <button 
          className="p-2 rounded-full hover:bg-soft-gray"
          aria-label="User profile"
        >
          <User className="h-6 w-6" />
        </button>
      </div>
    </header>
  );
};

export default Header;
