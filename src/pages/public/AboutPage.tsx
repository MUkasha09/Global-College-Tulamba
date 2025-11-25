import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Award, Users, Target, Globe, BookOpen, TrendingUp } from 'lucide-react';

export const AboutPage = () => {
    const values = [
        {
            icon: Award,
            title: 'Excellence',
            description: 'Committed to the highest standards in education and research',
        },
        {
            icon: Users,
            title: 'Community',
            description: 'Building a supportive and inclusive learning environment',
        },
        {
            icon: Target,
            title: 'Innovation',
            description: 'Fostering creativity and forward-thinking approaches',
        },
        {
            icon: Globe,
            title: 'Global Perspective',
            description: 'Preparing students for success in a connected world',
        },
    ];

    const achievements = [
        { year: '2010', title: 'College Founded', description: 'Established with a vision for excellence' },
        { year: '2015', title: 'Accreditation', description: 'Received international accreditation' },
        { year: '2020', title: 'Research Center', description: 'Opened state-of-the-art research facilities' },
        { year: '2025', title: '10,000+ Alumni', description: 'Proud network of successful graduates' },
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
                        <h1 className="text-5xl font-bold mb-6">About Global College Tulamba</h1>
                        <p className="text-xl text-gray-100 leading-relaxed">
                            Providing quality K-12 education through BISE Multan Board affiliation (6-12)
                            and our comprehensive Academy program (1-12), preparing students for success
                            in higher education and beyond.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <Card className="h-full border-2 border-primary/20">
                                <CardContent className="pt-8">
                                    <BookOpen className="h-12 w-12 text-primary mb-4" />
                                    <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
                                    <p className="text-gray-700 leading-relaxed">
                                        To provide accessible, high-quality K-12 education through our BISE Multan Board
                                        program (6-12) and comprehensive Academy (1-12). We are committed to preparing
                                        students for higher education and future success by combining traditional values
                                        with modern teaching methods, IT excellence, and character development.
                                    </p>
                                </CardContent>
                            </Card>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <Card className="h-full border-2 border-primary/20">
                                <CardContent className="pt-8">
                                    <TrendingUp className="h-12 w-12 text-primary mb-4" />
                                    <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
                                    <p className="text-gray-700 leading-relaxed">
                                        To be a leading K-12 institution in Pakistan, recognized for academic excellence,
                                        BISE Multan Board affiliation, and producing well-rounded students who excel in
                                        higher education and make meaningful contributions to society. We envision a future
                                        where quality education transforms lives through both traditional and modern approaches.
                                    </p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold mb-4">Our Core Values</h2>
                        <p className="text-gray-600 text-lg">The principles that guide everything we do</p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                        {values.map((value, index) => (
                            <motion.div
                                key={value.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <Card className="h-full text-center hover:shadow-lg transition-shadow">
                                    <CardContent className="pt-8">
                                        <div className="p-4 bg-primary/10 rounded-full w-fit mx-auto mb-4">
                                            <value.icon className="h-8 w-8 text-primary" />
                                        </div>
                                        <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                                        <p className="text-gray-600">{value.description}</p>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Timeline */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold mb-4">Our Journey</h2>
                        <p className="text-gray-600 text-lg">Milestones in our history of excellence</p>
                    </div>
                    <div className="max-w-4xl mx-auto">
                        {achievements.map((achievement, index) => (
                            <motion.div
                                key={achievement.year}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="relative pl-8 pb-12 border-l-2 border-primary/30 last:pb-0"
                            >
                                <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-primary"></div>
                                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                                    <span className="text-primary font-bold text-2xl">{achievement.year}</span>
                                    <h3 className="text-xl font-semibold mt-2 mb-2">{achievement.title}</h3>
                                    <p className="text-gray-600">{achievement.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Leadership */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold mb-4">Leadership Team</h2>
                        <p className="text-gray-600 text-lg">Meet the visionaries guiding our institution</p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        {[
                            { name: 'Muhammad Azam', role: 'Principal', image: '👨‍🎓' },
                            { name: 'Muhammad Irshad Hussain', role: 'Vice Principal', image: '👩‍🏫' },
                            { name: 'Muhammad Noman', role: 'Dean of Academics', image: '👨‍💼' },
                        ].map((leader, index) => (
                            <motion.div
                                key={leader.name}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <Card className="text-center hover:shadow-lg transition-shadow">
                                    <CardContent className="pt-8">
                                        <div className="text-6xl mb-4">{leader.image}</div>
                                        <h3 className="text-xl font-semibold mb-1">{leader.name}</h3>
                                        <p className="text-gray-600">{leader.role}</p>
                                    </CardContent>
                                </Card><script src=""></script>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};
