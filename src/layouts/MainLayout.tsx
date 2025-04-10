
import React, { useState } from 'react';
import Header from '@/components/Header';
import { Activity, AlertTriangle, Bell, Home, User } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface MainLayoutProps {
  children: React.ReactNode;
  title: string;
}

const MainLayout = ({ children, title }: MainLayoutProps) => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navigation = [
    { name: 'Dashboard', href: '/', icon: Home },
    { name: 'Health', href: '/health', icon: Activity },
    { name: 'Reminders', href: '/reminders', icon: Bell },
    { name: 'Alerts', href: '/alerts', icon: AlertTriangle },
    { name: 'Profile', href: '/profile', icon: User },
  ];

  const handleNavigation = (path: string) => {
    navigate(path);
    setIsNavOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header title={title} onMenuClick={() => setIsNavOpen(!isNavOpen)} />
      
      <div className="flex flex-1 relative">
        {/* Mobile navigation overlay */}
        {isNavOpen && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden"
            onClick={() => setIsNavOpen(false)}
          />
        )}
        
        {/* Sidebar navigation */}
        <aside className={cn(
          "fixed inset-y-0 left-0 w-64 bg-white z-30 transform transition-transform duration-300 ease-in-out pt-16 shadow-lg lg:shadow-none lg:translate-x-0 lg:static lg:h-auto",
          isNavOpen ? "translate-x-0" : "-translate-x-full"
        )}>
          <nav className="p-4">
            <ul className="space-y-2">
              {navigation.map((item) => {
                const isActive = location.pathname === item.href;
                return (
                  <li key={item.name}>
                    <button
                      onClick={() => handleNavigation(item.href)}
                      className={cn(
                        "w-full text-left px-4 py-3 flex items-center gap-3 rounded-lg transition-colors text-accessible",
                        isActive
                          ? "bg-primary text-white"
                          : "hover:bg-soft-gray"
                      )}
                    >
                      <item.icon className="h-6 w-6" />
                      <span>{item.name}</span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </nav>
        </aside>
        
        {/* Main content */}
        <main className="flex-1 p-4 pt-2 lg:ml-0">
          <div className="max-w-7xl mx-auto">
            {children}
          </div>
        </main>
      </div>
      
      {/* Mobile navigation bar */}
      <nav className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-10">
        <div className="grid grid-cols-5 gap-1 p-1">
          {navigation.map((item) => {
            const isActive = location.pathname === item.href;
            return (
              <button
                key={item.name}
                onClick={() => handleNavigation(item.href)}
                className={cn("btn-nav", isActive && "active")}
                aria-label={item.name}
              >
                <item.icon className="h-6 w-6" />
                <span className="text-xs">{item.name}</span>
              </button>
            );
          })}
        </div>
      </nav>
    </div>
  );
};

export default MainLayout;
