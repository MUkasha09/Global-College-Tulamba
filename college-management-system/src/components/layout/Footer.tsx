import { Link } from 'react-router-dom';
import { GraduationCap, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300">
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* About */}
                    <div>
                        <div className="flex items-center space-x-2 mb-4">
                            <GraduationCap className="h-6 w-6 text-primary" />
                            <span className="text-xl font-bold text-white">Global College</span>
                        </div>
                        <p className="text-sm text-gray-400 leading-relaxed">
                            Empowering students with quality education and fostering excellence in academics, research, and innovation.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2 text-sm">
                            <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
                            <li><Link to="/departments" className="hover:text-primary transition-colors">Departments</Link></li>
                            <li><Link to="/faculty" className="hover:text-primary transition-colors">Faculty</Link></li>
                            <li><Link to="/admissions" className="hover:text-primary transition-colors">Admissions</Link></li>
                            <li><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Portals */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Portals</h3>
                        <ul className="space-y-2 text-sm">
                            <li><Link to="/admin/login" className="hover:text-primary transition-colors">Admin Portal</Link></li>
                            <li><Link to="/teacher/login" className="hover:text-primary transition-colors">Teacher Portal</Link></li>
                            <li><Link to="/student/login" className="hover:text-primary transition-colors">Student Portal</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Contact Us</h3>
                        <ul className="space-y-3 text-sm">
                            <li className="flex items-start space-x-2">
                                <MapPin className="h-4 w-4 mt-1 text-primary flex-shrink-0" />
                                <span>Gali Bari Jamia Masjid Mohallah Dogran, Tulamba, Pakistan</span>
                            </li>
                            <li className="flex items-center space-x-2">
                                <Phone className="h-4 w-4 text-primary" />
                                <span>+92 306 025 5897</span>
                            </li>
                            <li className="flex items-center space-x-2">
                                <Mail className="h-4 w-4 text-primary" />
                                <span>globalcollegetulamba@gmail.com</span>
                            </li>
                        </ul>
                        <div className="flex space-x-3 mt-4">
                            <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-primary transition-colors">
                                <Facebook className="h-4 w-4" />
                            </a>
                            <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-primary transition-colors">
                                <Twitter className="h-4 w-4" />
                            </a>
                            <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-primary transition-colors">
                                <Instagram className="h-4 w-4" />
                            </a>
                            <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-primary transition-colors">
                                <Linkedin className="h-4 w-4" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
                    <p>&copy; {new Date().getFullYear()} Global College Tulamba. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};
