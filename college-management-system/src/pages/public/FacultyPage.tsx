import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Mail, Award } from 'lucide-react';

export const FacultyPage = () => {
    const faculty = [
        {
            name: 'Muhammad Azam',
            designation: 'Lecturar',
            department: 'Computer Science',
            qualification: 'Masters in Economics, PGD in Computer Science',
            specialization: 'Computer Science, Economics',
            email: 'azam@globalcollege.edu',
            image: '👨‍🏫',
        },
        {
            name: 'Muhammad Irshad Hussain',
            designation: 'Lecturar',
            department: 'Physics',
            qualification: 'MSc in Physics',
            specialization: 'Physics',
            email: 'irshad@globalcollege.edu',
            image: '👨‍🏫',
        },
        {
            name: 'Muhammad Ukasha',
            designation: 'Lecturar',
            department: 'Computer Science',
            qualification: 'BS in Computer System Engineering',
            specialization: 'Artificial Intelligence, Machine Learning',
            email: 'ukasha@globalcollege.edu',
            image: '👨‍💼',
        },
        {
            name: 'Muhammad Atif Watto',
            designation: 'Lecturar',
            department: 'Mathematics',
            qualification: 'MSc in Mathematics',
            specialization: 'Mathematics',
            email: 'atif@globalcollege.edu',
            image: '👨‍💼',
        },
        {
            name: 'Muhammad Mubashir',
            designation: 'Lecturar',
            department: 'English, Urdu',
            qualification: 'MA in English',
            specialization: 'English, Urdu',
            email: 'mubashir@globalcollege.edu',
            image: '👨‍💼',
        },
        {
            name: 'Muhammad Noman',
            designation: 'Lecturar',
            department: 'Chemistry, Biology',
            qualification: 'MSc in Chemistry',
            specialization: 'Chemistry, Biology',
            email: 'noman@globalcollege.edu',
            image: '👨‍🔬',
        },
    ];

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="gradient-academic text-white py-20">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-3xl mx-auto text-center"
                    >
                        <h1 className="text-5xl font-bold mb-6">Our Faculty</h1>
                        <p className="text-xl text-gray-100 leading-relaxed">
                            Meet our distinguished faculty members who are experts in their fields
                            and dedicated to student success.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Faculty Grid */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {faculty.map((member, index) => (
                            <motion.div
                                key={member.email}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <Card className="h-full hover:shadow-xl transition-all hover:-translate-y-1">
                                    <CardContent className="pt-8 text-center">
                                        <div className="text-6xl mb-4">{member.image}</div>
                                        <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                                        <Badge className="mb-3">{member.designation}</Badge>
                                        <div className="text-left space-y-2 mt-4">
                                            <div>
                                                <p className="text-sm font-semibold text-gray-700">Department</p>
                                                <p className="text-sm text-gray-600">{member.department}</p>
                                            </div>
                                            <div>
                                                <p className="text-sm font-semibold text-gray-700">Qualification</p>
                                                <p className="text-sm text-gray-600">{member.qualification}</p>
                                            </div>
                                            <div>
                                                <p className="text-sm font-semibold text-gray-700">Specialization</p>
                                                <p className="text-sm text-gray-600">{member.specialization}</p>
                                            </div>
                                        </div>
                                        <Button variant="outline" className="w-full mt-4" size="sm">
                                            <Mail className="h-4 w-4 mr-2" />
                                            Contact
                                        </Button>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Faculty Excellence */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <Award className="h-16 w-16 text-primary mx-auto mb-6" />
                        <h2 className="text-4xl font-bold mb-6">Faculty Excellence</h2>
                        <p className="text-lg text-gray-700 leading-relaxed mb-8">
                            Our faculty members are not just educators but mentors, researchers, and industry
                            experts who bring real-world experience into the classroom. With numerous
                            publications, patents, and awards, they are committed to advancing knowledge
                            and inspiring the next generation of leaders.
                        </p>
                        <div className="grid md:grid-cols-3 gap-6 mt-12">
                            {[
                                { value: '200+', label: 'Faculty Members' },
                                { value: '500+', label: 'Research Papers' },
                                { value: '50+', label: 'Awards & Honors' },
                            ].map((stat, index) => (
                                <motion.div
                                    key={stat.label}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                >
                                    <Card>
                                        <CardContent className="pt-6 text-center">
                                            <h3 className="text-4xl font-bold text-primary mb-2">{stat.value}</h3>
                                            <p className="text-gray-600">{stat.label}</p>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};
