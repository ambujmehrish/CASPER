import React, { useState } from 'react';
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useIsMobile();

  const navigationItems = [
    { label: 'Home', href: '#hero' },
    { label: 'Overview', href: '#overview' },
    { label: 'Objectives', href: '#objectives' },
    { label: 'Team', href: '#team' },
    { label: 'Timeline', href: '#timeline' },
    { label: 'Impact', href: '#impact' },
    { label: 'Publications', href: '#publications' }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  const NavItems = ({ className = "", onClick }: { className?: string; onClick?: () => void }) => (
    <nav className={cn("flex gap-6", className)}>
      {navigationItems.map((item) => (
        <button
          key={item.label}
          onClick={() => {
            scrollToSection(item.href);
            onClick?.();
          }}
          className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium text-sm"
        >
          {item.label}
        </button>
      ))}
    </nav>
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-purple-600">
              <span className="text-lg font-bold text-white">C</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-gray-900">CASPER</span>
              <span className="text-xs text-gray-600 hidden sm:block">MSCA Research Project</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          {!isMobile && (
            <div className="hidden md:flex items-center space-x-8">
              <NavItems />
              <Button 
                variant="outline" 
                size="sm"
                className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
              >
                Contact
              </Button>
            </div>
          )}

          {/* Mobile Navigation */}
          {isMobile && (
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" className="md:hidden">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col space-y-6 mt-6">
                  <div className="flex items-center space-x-3 pb-4 border-b">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-purple-600">
                      <span className="text-sm font-bold text-white">C</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="font-bold text-gray-900">CASPER</span>
                      <span className="text-xs text-gray-600">MSCA Research Project</span>
                    </div>
                  </div>
                  
                  <NavItems 
                    className="flex-col items-start space-y-4" 
                    onClick={() => setIsOpen(false)}
                  />
                  
                  <div className="pt-4 border-t">
                    <Button 
                      variant="outline" 
                      className="w-full border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
                      onClick={() => setIsOpen(false)}
                    >
                      Contact
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;