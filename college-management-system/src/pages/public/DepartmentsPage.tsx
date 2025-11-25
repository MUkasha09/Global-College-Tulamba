import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
    BookOpen,
    GraduationCap,
    Users,
    Microscope,
    Calculator,
    Globe,
    Palette,
    Languages,
    Cpu,
    Network,
    Smartphone,
} from 'lucide-react';

export const DepartmentsPage = () => {
    const divisions = [
        {
            title: 'BISE Multan Board Section (6-12)',
            description: 'Official affiliation with Board of Intermediate & Secondary Education Multan',
            icon: GraduationCap,
            color: 'bg-blue-500',
            groups: [
                {
                    name: 'Science Group',
                    icon: Microscope,
                    subjects: ['Biology', 'Physics', 'Chemistry', 'Mathematics'],
                    students: 350,
                },
                {
                    name: 'Arts Group',
                    icon: Languages,
                    subjects: ['Urdu', 'English', 'Islamic Studies', 'Pakistan Studies'],
                    students: 280,
                },
                {
                    name: 'Computer Science',
                    icon: Cpu,
                    subjects: ['Computer Science', 'Mathematics', 'Physics', 'English'],
                    students: 170,
                },
            ],
        },
        {
            title: 'Academy Section (1-12)',
            description: 'Comprehensive education from primary to higher secondary',
            icon: BookOpen,
            color: 'bg-green-500',
            groups: [
                {
                    name: 'Primary Section (1-5)',
                    icon: Palette,
                    subjects: ['English', 'Urdu', 'Mathematics', 'General Science', 'Islamiyat'],
                    students: 450,
                },
                {
                    name: 'Middle Section (6-8)',
                    icon: Calculator,
                    subjects: ['English', 'Urdu', 'Mathematics', 'Science', 'Social Studies'],
                    students: 380,
                },
                {
                    name: 'Secondary (9-10)',
                    icon: Globe,
                    subjects: ['English', 'Urdu', 'Mathematics', 'Science', 'Islamiyat'],
                    students: 250,
                },
                {
                    name: 'Higher Secondary (11-12)',
                    icon: GraduationCap,
                    subjects: ['Pre-Medical', 'Pre-Engineering', 'Computer Science', 'Arts'],
                    students: 120,
                },
            ],
        },
        {
            title: 'IT Sector & Digital Services',
            description: 'Managing social networks and digital infrastructure',
            icon: Network,
            color: 'bg-purple-500',
            groups: [
                {
                    name: 'Social Network Management',
                    icon: Users,
                    subjects: ['Facebook', 'Instagram', 'YouTube', 'Website Management'],
                    students: null,
                },
                {
                    name: 'Digital Infrastructure',
                    icon: Cpu,
                    subjects: ['Server Management', 'Network Administration', 'Cloud Services'],
                    students: null,
                },
                {
                    name: 'Web & App Development',
                    icon: Smartphone,
                    subjects: ['Website Development', 'Mobile Apps', 'Online Learning Systems'],
                    students: null,
                },
            ],
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
                        <h1 className="text-5xl font-bold mb-6">Our Educational Divisions</h1>
                        <p className="text-xl text-gray-100 leading-relaxed">
                            Explore our comprehensive K-12 education programs through BISE Multan Board,
                            Academy sections, and our advanced IT sector managing digital systems.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Main Divisions */}
            {divisions.map((division, divIndex) => (
                <section key={division.title} className={divIndex % 2 === 0 ? 'py-20 bg-white' : 'py-20 bg-gray-50'}>
                    <div className="container mx-auto px-4">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center mb-12"
                        >
                            <div className={`inline-flex p-4 ${division.color} bg-opacity-10 rounded-full mb-4`}>
                                <division.icon className={`h-12 w-12 ${division.color.replace('bg-', 'text-')}`} />
                            </div>
                            <h2 className="text-4xl font-bold mb-4">{division.title}</h2>
                            <p className="text-gray-600 text-lg max-w-2xl mx-auto">{division.description}</p>
                        </motion.div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {division.groups.map((group, index) => (
                                <motion.div
                                    key={group.name}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                >
                                    <Card className="h-full hover:shadow-xl transition-all hover:-translate-y-1 cursor-pointer group">
                                        <CardContent className="pt-8">
                                            <div className={`p-3 ${division.color} bg-opacity-10 rounded-lg w-fit mb-4 group-hover:scale-110 transition-transform`}>
                                                <group.icon className={`h-8 w-8 ${division.color.replace('bg-', 'text-')}`} />
                                            </div>
                                            <h3 className="text-xl font-bold mb-3">{group.name}</h3>
                                            <div className="mb-4">
                                                <p className="text-sm text-gray-500 mb-2 font-semibold">
                                                    {division.title.includes('IT') ? 'Services:' : 'Subjects:'}
                                                </p>
                                                <div className="flex flex-wrap gap-2">
                                                    {group.subjects.map((subject) => (
                                                        <Badge key={subject} variant="secondary" className="text-xs">
                                                            {subject}
                                                        </Badge>
                                                    ))}
                                                </div>
                                            </div>
                                            {group.students !== null && (
                                                <div className="mt-4 pt-4 border-t">
                                                    <Badge variant="outline">
                                                        <Users className="h-3 w-3 mr-1" />
                                                        {group.students} Students
                                                    </Badge>
                                                </div>
                                            )}
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
            ))}

            {/* Why Choose Section */}
            <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-4xl font-bold mb-4">Why Choose Global College Tulamba</h2>
                            <p className="text-gray-600 text-lg">Excellence in every aspect of education</p>
                        </div>
                        <div className="grid md:grid-cols-2 gap-6">
                            {[
                                {
                                    title: 'BISE Multan Board Affiliation',
                                    description: 'Official recognition and standardized curriculum',
                                },
                                {
                                    title: 'Dual Education System',
                                    description: 'Choose between BISE Board or Academy programs',
                                },
                                {
                                    title: 'Modern IT Infrastructure',
                                    description: 'Advanced technology and digital learning systems',
                                },
                                {
                                    title: 'Experienced Faculty',
                                    description: 'Qualified teachers dedicated to student success',
                                },
                            ].map((feature, index) => (
                                <motion.div
                                    key={feature.title}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                >
                                    <Card>
                                        <CardContent className="pt-6">
                                            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                                            <p className="text-gray-600">{feature.description}</p>
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
