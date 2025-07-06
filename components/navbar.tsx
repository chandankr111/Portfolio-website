"use client"

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun, Github, Linkedin, Mail, Twitter } from 'lucide-react';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import XIcon from '@/components/icon/icon';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { href: '/', label: 'About' },
    // { href: '#experience', label: 'Education' },
    { href: '/projects', label: 'Projects' },
    // { href: '#contact', label: 'Contact' },
  ];

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-background/80 backdrop-blur-md border-b border-border shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl font-bold">
              Chandan Kumar
            </Link>
            <motion.p 
              className="text-sm md:text-base text-muted-foreground"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              Software Engineer
            </motion.p>
          </div>
          
          <div className="hidden md:flex space-x-6">
            {navLinks.map((link) => (
              <Link 
                key={link.href} 
                href={link.href}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
          {/* <a href="https://x.com/chandan89531144" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)">
  <XIcon className="w-5 h-5 text-muted-foreground hover:text-foreground transition-colors" />
</a> */}


            <a href="https://github.com/chandankr111" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Github className="w-5 h-5 text-muted-foreground hover:text-foreground transition-colors" />
            </a>
            <a href="https://www.linkedin.com/in/chandan-kumar-55023524b/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin className="w-5 h-5 text-muted-foreground hover:text-foreground transition-colors" />
            </a>
            <a href="https://x.com/chandan89531144" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)">
  <XIcon className="w-5 h-5 text-muted-foreground hover:text-foreground transition-colors" />
</a>
            <a href="mailto:kr38.chandan@gmail.com" aria-label="Email">
              <Mail className="w-5 h-5 text-muted-foreground hover:text-foreground transition-colors" />
            </a>
            
            {mounted && (
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button>
            )}
          </div>
          
          <div className="md:hidden flex items-center">
            {mounted && (
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="mr-2"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button>
            )}
            <Button variant="ghost" size="icon" onClick={toggleMenu} aria-label="Toggle menu">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-background border-b border-border">
          <div className="space-y-1 px-4 pb-3 pt-2">
            {navLinks.map((link) => (
              <Link 
                key={link.href} 
                href={link.href}
                className="block py-2 text-base font-medium text-muted-foreground hover:text-foreground"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex space-x-4 py-3">
              <a href="https://github.com/chandankr111" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github className="w-5 h-5 text-muted-foreground hover:text-foreground" />
              </a>
              <a href="https://www.linkedin.com/in/chandan-kumar-55023524b/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5 text-muted-foreground hover:text-foreground" />
              </a>
              <a href="mailto:kr38.chandan@gmail.com" aria-label="Email">
                <Mail className="w-5 h-5 text-muted-foreground hover:text-foreground" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;