import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';

export const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        toast.success('Message sent successfully! We will get back to you soon.');
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    };

    const contactInfo = [
        {
            icon: MapPin,
            title: 'Address',
            details: 'Gali Bari Jamia Masjid Mohallah Dogran, Tulamba, Pakistan',
        },
        {
            icon: Phone,
            title: 'Phone',
            details: '+92 306 025 5897'
        },
        {
            icon: Mail,
            title: 'Email',
            details: 'mazamlmis@gmail.com',
        },
        {
            icon: Clock,
            title: 'Office Hours',
            details: 'Mon - Fri: 8:00 AM - 5:00 PM',
        },
    ];

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="gradient-primary text-white py-20">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-3xl mx-auto text-center"
                    >
                        <h1 className="text-5xl font-bold mb-6">Contact Us</h1>
                        <p className="text-xl text-gray-100 leading-relaxed">
                            Have questions? We'd love to hear from you. Send us a message and we'll
                            respond as soon as possible.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Contact Info Cards */}
            <section className="py-12 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {contactInfo.map((info, index) => (
                            <motion.div
                                key={info.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <Card className="text-center hover:shadow-lg transition-shadow">
                                    <CardContent className="pt-6">
                                        <div className="p-3 bg-primary/10 rounded-full w-fit mx-auto mb-4">
                                            <info.icon className="h-6 w-6 text-primary" />
                                        </div>
                                        <h3 className="font-semibold mb-2">{info.title}</h3>
                                        <p className="text-sm text-gray-600">{info.details}</p>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Form & Map */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                        {/* Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <Card>
                                <CardHeader>
                                    <CardTitle className="text-2xl">Send us a Message</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <form onSubmit={handleSubmit} className="space-y-4">
                                        <div className="grid md:grid-cols-2 gap-4">
                                            <div className="space-y-2">
                                                <Label htmlFor="name">Full Name *</Label>
                                                <Input
                                                    id="name"
                                                    placeholder="John Doe"
                                                    value={formData.name}
                                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                    required
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <Label htmlFor="email">Email *</Label>
                                                <Input
                                                    id="email"
                                                    type="email"
                                                    placeholder="john@example.com"
                                                    value={formData.email}
                                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div className="grid md:grid-cols-2 gap-4">
                                            <div className="space-y-2">
                                                <Label htmlFor="phone">Phone</Label>
                                                <Input
                                                    id="phone"
                                                    type="tel"
                                                    placeholder="+92 123 456 7890"
                                                    value={formData.phone}
                                                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <Label htmlFor="department">Department *</Label>
                                                <Select
                                                    value={formData.subject}
                                                    onValueChange={(value) => setFormData({ ...formData, subject: value })}
                                                    required
                                                >
                                                    <SelectTrigger>
                                                        <SelectValue placeholder="Select Department" />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        <SelectItem value="BISE Section (6-12)">BISE Section (6-12)</SelectItem>
                                                        <SelectItem value="Academy Section (1-12)">Academy Section (1-12)</SelectItem>
                                                        <SelectItem value="IT Sector Services">IT Sector Services</SelectItem>
                                                        <SelectItem value="General Inquiry">General Inquiry</SelectItem>
                                                    </SelectContent>
                                                </Select>
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="message">Message *</Label>
                                            <Textarea
                                                id="message"
                                                placeholder="Tell us how we can help you..."
                                                rows={6}
                                                value={formData.message}
                                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                                required
                                            />
                                        </div>
                                        <Button type="submit" className="w-full" size="lg">
                                            <Send className="h-4 w-4 mr-2" />
                                            Send Message
                                        </Button>
                                    </form>
                                </CardContent>
                            </Card>
                        </motion.div>

                        {/* Map */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <Card className="h-full">
                                <CardHeader>
                                    <CardTitle className="text-2xl">Find Us</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
                                        <div className="text-center text-gray-500">
                                            <MapPin className="h-12 w-12 mx-auto mb-2 opacity-50" />
                                            <p>Map integration placeholder</p>
                                            <p className="text-sm mt-1">Google Maps embed would go here</p>
                                        </div>
                                    </div>
                                    <div className="mt-6 space-y-4">
                                        <div>
                                            <h3 className="font-semibold mb-2">Campus Location</h3>
                                            <p className="text-gray-600 text-sm">
                                                Our campus is conveniently located in the heart of Tulamba,
                                                easily accessible by public transportation and with ample parking
                                                facilities for visitors.
                                            </p>
                                        </div>
                                        <div>
                                            <h3 className="font-semibold mb-2">Visitor Information</h3>
                                            <p className="text-gray-600 text-sm">
                                                Campus tours are available Monday through Friday. Please contact
                                                our admissions office to schedule a visit.
                                            </p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
};
