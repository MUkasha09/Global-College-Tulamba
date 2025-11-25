import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
    GraduationCap,
    Users,
    BookOpen,
    Award,
    ArrowRight,
    Calendar,
    Cpu,
    Star,
} from 'lucide-react';

export const HomePage = () => {
    const navigate = useNavigate();

    const stats = [
        { icon: Users, label: 'BISE Students (6-12)', value: '800+', color: 'text-blue-600' },
        { icon: BookOpen, label: 'Academy Students (1-12)', value: '1,200+', color: 'text-purple-600' },
        { icon: Users, label: 'Qualified Teachers', value: '60+', color: 'text-green-600' },
        { icon: Award, label: 'Years of Excellence', value: '15+', color: 'text-orange-600' },
    ];

    const features = [
        {
            icon: Award,
            title: 'BISE Multan Board Affiliation',
            description: 'Official affiliation with Board of Intermediate & Secondary Education Multan',
        },
        {
            icon: BookOpen,
            title: 'Comprehensive K-12 Education',
            description: 'Complete education from 1st to 12th standard with dual programs',
        },
        {
            icon: Cpu,
            title: 'IT Sector Excellence',
            description: 'Advanced IT infrastructure managing social networks and digital systems',
        },
        {
            icon: Users,
            title: 'Qualified Teachers',
            description: 'Experienced educators dedicated to student success',
        },
    ];

    const testimonials = [
        {
            name: 'Sarah Ahmed',
            role: 'Computer Science Graduate',
            content: 'The education I received here transformed my career. The faculty is exceptional!',
            rating: 5,
        },
        {
            name: 'Ali Hassan',
            role: 'Business Administration Student',
            content: 'Amazing campus facilities and a supportive learning environment.',
            rating: 5,
        },
        {
            name: 'Fatima Khan',
            role: 'Engineering Graduate',
            content: 'Best decision of my life. The opportunities here are endless!',
            rating: 5,
        },
    ];

    const events = [
        {
            title: 'Annual Science Fair',
            date: 'Dec 15, 2025',
            category: 'Academic',
        },
        {
            title: 'Sports Championship',
            date: 'Jan 20, 2026',
            category: 'Sports',
        },
        {
            title: 'Cultural Festival',
            date: 'Feb 10, 2026',
            category: 'Cultural',
        },
    ];

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center justify-center animated-gradient overflow-hidden">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center text-white max-w-4xl mx-auto"
                    >
                        <Badge className="mb-6 bg-white/20 text-white border-white/30 backdrop-blur-sm text-sm px-4 py-2">
                            🎓 Empowering Future Leaders
                        </Badge>
                        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                            Welcome to
                            <br />
                            <span className="bg-gradient-to-r from-yellow-200 to-yellow-400 bg-clip-text text-transparent">
                                Global College Tulamba
                            </span>
                        </h1>
                        <p className="text-xl md:text-2xl mb-8 text-gray-100 leading-relaxed">
                            BISE Multan Board Education (6-12) • Academy Section (1-12) • IT Excellence
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button
                                size="lg"
                                className="bg-white text-primary hover:bg-gray-100 text-lg px-8 py-6 h-auto"
                                onClick={() => navigate('/admissions')}
                            >
                                Apply Now
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                            <Button
                                size="lg"
                                variant="outline"
                                className="border-white text-white hover:bg-white/10 text-lg px-8 py-6 h-auto"
                                onClick={() => navigate('/about')}
                            >
                                Learn More
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <Card className="text-center hover:shadow-lg transition-shadow">
                                    <CardContent className="pt-6">
                                        <stat.icon className={`h-12 w-12 mx-auto mb-3 ${stat.color}`} />
                                        <h3 className="text-3xl font-bold mb-1">{stat.value}</h3>
                                        <p className="text-gray-600">{stat.label}</p>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="max-w-4xl mx-auto text-center"
                    >
                        <h2 className="text-4xl font-bold mb-6">Our Mission & Vision</h2>
                        <p className="text-lg text-gray-700 leading-relaxed mb-8">
                            To provide quality K-12 education through BISE Multan Board (6-12) and our comprehensive
                            Academy program (1-12), preparing students for higher education and future success.
                            We combine traditional values with modern teaching methods and IT excellence.
                        </p>
                        <div className="grid md:grid-cols-2 gap-6 mt-12">
                            <Card className="text-left hover:shadow-xl transition-shadow">
                                <CardContent className="pt-6">
                                    <GraduationCap className="h-10 w-10 text-primary mb-4" />
                                    <h3 className="text-xl font-semibold mb-3">Academic Excellence</h3>
                                    <p className="text-gray-600">
                                        Delivering rigorous academic programs that prepare students for success in
                                        their chosen fields.
                                    </p>
                                </CardContent>
                            </Card>
                            <Card className="text-left hover:shadow-xl transition-shadow">
                                <CardContent className="pt-6">
                                    <Award className="h-10 w-10 text-primary mb-4" />
                                    <h3 className="text-xl font-semibold mb-3">Research & Innovation</h3>
                                    <p className="text-gray-600">
                                        Encouraging groundbreaking research and fostering a culture of innovation
                                        and discovery.
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Features */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold mb-4">Why Choose Us</h2>
                        <p className="text-gray-600 text-lg">Discover what makes us stand out</p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {features.map((feature, index) => (
                            <motion.div
                                key={feature.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <Card className="h-full hover:shadow-xl transition-all hover:-translate-y-1">
                                    <CardContent className="pt-6">
                                        <div className="p-3 bg-primary/10 rounded-lg w-fit mb-4">
                                            <feature.icon className="h-6 w-6 text-primary" />
                                        </div>
                                        <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                                        <p className="text-gray-600 text-sm">{feature.description}</p>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold mb-4">Student Testimonials</h2>
                        <p className="text-gray-600 text-lg">Hear from our successful students</p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-6">
                        {testimonials.map((testimonial, index) => (
                            <motion.div
                                key={testimonial.name}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <Card className="h-full hover:shadow-lg transition-shadow">
                                    <CardContent className="pt-6">
                                        <div className="flex mb-3">
                                            {[...Array(testimonial.rating)].map((_, i) => (
                                                <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                                            ))}
                                        </div>
                                        <p className="text-gray-700 mb-4 italic">"{testimonial.content}"</p>
                                        <div>
                                            <p className="font-semibold">{testimonial.name}</p>
                                            <p className="text-sm text-gray-500">{testimonial.role}</p>
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Events */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold mb-4">Upcoming Events</h2>
                        <p className="text-gray-600 text-lg">Stay updated with our latest events</p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                        {events.map((event, index) => (
                            <motion.div
                                key={event.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <Card className="hover:shadow-lg transition-shadow">
                                    <CardContent className="pt-6">
                                        <Badge className="mb-3">{event.category}</Badge>
                                        <h3 className="text-lg font-semibold mb-2">{event.title}</h3>
                                        <div className="flex items-center text-gray-600 text-sm">
                                            <Calendar className="h-4 w-4 mr-2" />
                                            {event.date}
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 gradient-academic text-white">
                <div className="container mx-auto px-4 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-3xl mx-auto"
                    >
                        <h2 className="text-4xl font-bold mb-6">Ready to Start Your Journey?</h2>
                        <p className="text-xl mb-8 text-gray-100">
                            Join thousands of students who have transformed their lives at Global College
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button
                                size="lg"
                                className="bg-white text-primary hover:bg-gray-100 text-lg px-8 py-6 h-auto"
                                onClick={() => navigate('/admissions')}
                            >
                                Apply for Admission
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                            <Button
                                size="lg"
                                variant="outline"
                                className="border-white text-white hover:bg-white/10 text-lg px-8 py-6 h-auto"
                                onClick={() => navigate('/contact')}
                            >
                                Contact Us
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};
