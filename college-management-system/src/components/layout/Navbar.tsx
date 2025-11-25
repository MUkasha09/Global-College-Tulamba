import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { GraduationCap, Menu, X, LogIn, User, BookOpen, Shield } from 'lucide-react';

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Departments', path: '/departments' },
        { name: 'Faculty', path: '/faculty' },
        { name: 'Admissions', path: '/admissions' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <Link to="/" className="flex items-center space-x-2 group">
                        <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                            <GraduationCap className="h-6 w-6 text-primary" />
                        </div>
                        <span className="text-xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                            Global College Tulamba
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-1">
                        {[
                            { name: 'Home', path: '/' },
                            { name: 'About', path: '/about' },
                            { name: 'Divisions', path: '/departments' },
                            { name: 'Faculty', path: '/faculty' },
                            { name: 'Admissions', path: '/admissions' },
                            { name: 'Contact', path: '/contact' },
                        ].map((link) => (
                            <Link key={link.path} to={link.path}>
                                <Button variant="ghost" className="text-sm">
                                    {link.name}
                                </Button>
                            </Link>
                        ))}
                    </div>

                    {/* Login Dropdown */}
                    <div className="hidden md:block">
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button className="gap-2">
                                    <LogIn className="h-4 w-4" />
                                    Login
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end" className="w-48">
                                <DropdownMenuItem onClick={() => navigate('/admin/login')}>
                                    <Shield className="mr-2 h-4 w-4" />
                                    Admin Portal
                                </DropdownMenuItem>
                                <DropdownMenuItem onClick={() => navigate('/teacher/login')}>
                                    <BookOpen className="mr-2 h-4 w-4" />
                                    Teacher Portal
                                </DropdownMenuItem>
                                <DropdownMenuItem onClick={() => navigate('/student/login')}>
                                    <User className="mr-2 h-4 w-4" />
                                    Student Portal
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>

                {/* Mobile Navigation */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="md:hidden overflow-hidden"
                        >
                            <div className="py-4 space-y-2">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.path}
                                        to={link.path}
                                        onClick={() => setIsOpen(false)}
                                    >
                                        <Button variant="ghost" className="w-full justify-start">
                                            {link.name}
                                        </Button>
                                    </Link>
                                ))}
                                <div className="pt-2 border-t space-y-2">
                                    <Button
                                        variant="outline"
                                        className="w-full justify-start"
                                        onClick={() => {
                                            navigate('/admin/login');
                                            setIsOpen(false);
                                        }}
                                    >
                                        <Shield className="mr-2 h-4 w-4" />
                                        Admin Login
                                    </Button>
                                    <Button
                                        variant="outline"
                                        className="w-full justify-start"
                                        onClick={() => {
                                            navigate('/teacher/login');
                                            setIsOpen(false);
                                        }}
                                    >
                                        <BookOpen className="mr-2 h-4 w-4" />
                                        Teacher Login
                                    </Button>
                                    <Button
                                        variant="outline"
                                        className="w-full justify-start"
                                        onClick={() => {
                                            navigate('/student/login');
                                            setIsOpen(false);
                                        }}
                                    >
                                        <User className="mr-2 h-4 w-4" />
                                        Student Login
                                    </Button>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </nav>
    );
};
