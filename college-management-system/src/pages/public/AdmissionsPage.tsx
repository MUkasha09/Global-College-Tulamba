import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { toast } from 'sonner';
import {
    FileText,
    Calendar,
    CheckCircle,
    Clock,
    DollarSign,
    GraduationCap,
    Send,
} from 'lucide-react';

export const AdmissionsPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        program: '',
        previousEducation: '',
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        toast.success('Application submitted successfully! We will contact you soon.');
        setFormData({ name: '', email: '', phone: '', program: '', previousEducation: '' });
    };

    const admissionProcess = [
        {
            icon: FileText,
            step: 'Step 1',
            title: 'Submit Application',
            description: 'Fill out the online application form for BISE or Academy section',
        },
        {
            icon: CheckCircle,
            step: 'Step 2',
            title: 'Document Verification',
            description: 'Submit B-Form/CNIC and previous academic records',
        },
        {
            icon: Clock,
            step: 'Step 3',
            title: 'Assessment/Interview',
            description: 'Entry assessment for placement in appropriate grade',
        },
        {
            icon: GraduationCap,
            step: 'Step 4',
            title: 'Admission Confirmation',
            description: 'Fee submission and enrollment confirmation',
        },
    ];

    const programs = [
        { name: 'BISE Science Group (9-10)', duration: '2 years', fee: 'Contact for Fee Structure' },
        { name: 'BISE Arts Group (9-10)', duration: '2 years', fee: 'Contact for Fee Structure' },
        { name: 'BISE Computer Science (9-10)', duration: '2 years', fee: 'Contact for Fee Structure' },
        { name: 'F.Sc Pre-Medical (11-12)', duration: '2 years', fee: 'Contact for Fee Structure' },
        { name: 'F.Sc Pre-Engineering (11-12)', duration: '2 years', fee: 'Contact for Fee Structure' },
        { name: 'ICS (11-12)', duration: '2 years', fee: 'Contact for Fee Structure' },
        { name: 'Academy Primary (1-5)', duration: 'Annual', fee: 'Monthly Tuition' },
        { name: 'Academy Middle (6-8)', duration: 'Annual', fee: 'Monthly Tuition' },
    ];

    const importantDates = [
        { event: 'New Session Registration', date: 'February - March' },
        { event: 'Classes Commencement', date: 'April' },
        { event: 'Summer Camp (Academy)', date: 'June - August' },
        { event: 'BISE Admissions', date: 'As per Board Schedule' },
        { event: 'Mid-Term Exams', date: 'September' },
        { event: 'Annual Exams', date: 'March' },
    ];

    const requirements = [
        'Completed admission form',
        'Student B-Form / CNIC copy',
        'Father/Guardian CNIC copy',
        'School Leaving Certificate (Original)',
        'Result Card of previous class',
        '4 Passport size photographs',
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
                        <h1 className="text-5xl font-bold mb-6">Admissions</h1>
                        <p className="text-xl text-gray-100 leading-relaxed mb-8">
                            Join Global College Tulamba for excellence in education.
                            Admissions open for BISE Board classes and Academy sections.
                        </p>
                        <Badge className="bg-white text-primary text-base px-6 py-2">
                            Admissions Open for New Session
                        </Badge>
                    </motion.div>
                </div>
            </section>

            {/* Admission Process */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold mb-4">Admission Process</h2>
                        <p className="text-gray-600 text-lg">Simple steps to join our institution</p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                        {admissionProcess.map((process, index) => (
                            <motion.div
                                key={process.step}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <Card className="h-full text-center hover:shadow-lg transition-shadow">
                                    <CardContent className="pt-8">
                                        <div className="p-4 bg-primary/10 rounded-full w-fit mx-auto mb-4">
                                            <process.icon className="h-8 w-8 text-primary" />
                                        </div>
                                        <Badge className="mb-3">{process.step}</Badge>
                                        <h3 className="text-lg font-semibold mb-2">{process.title}</h3>
                                        <p className="text-sm text-gray-600">{process.description}</p>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Programs & Application Form */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                        {/* Programs */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <Card>
                                <CardHeader>
                                    <CardTitle className="text-2xl">Available Programs</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-4">
                                        {programs.map((program, index) => (
                                            <div
                                                key={index}
                                                className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                                            >
                                                <h3 className="font-semibold mb-2">{program.name}</h3>
                                                <div className="flex items-center gap-4 text-sm text-gray-600">
                                                    <span className="flex items-center gap-1">
                                                        <Clock className="h-4 w-4" />
                                                        {program.duration}
                                                    </span>
                                                    <span className="flex items-center gap-1">
                                                        <DollarSign className="h-4 w-4" />
                                                        {program.fee}
                                                    </span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>

                        {/* Application Form */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <Card>
                                <CardHeader>
                                    <CardTitle className="text-2xl">Admission Inquiry</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <form onSubmit={handleSubmit} className="space-y-4">
                                        <div className="space-y-2">
                                            <Label htmlFor="name">Student Name *</Label>
                                            <Input
                                                id="name"
                                                placeholder="Enter student name"
                                                value={formData.name}
                                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                required
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="email">Email (Optional)</Label>
                                            <Input
                                                id="email"
                                                type="email"
                                                placeholder="email@example.com"
                                                value={formData.email}
                                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="phone">Phone/WhatsApp *</Label>
                                            <Input
                                                id="phone"
                                                type="tel"
                                                placeholder="0300-1234567"
                                                value={formData.phone}
                                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                                required
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="program">Interested Class/Program *</Label>
                                            <Select
                                                value={formData.program}
                                                onValueChange={(value) => setFormData({ ...formData, program: value })}
                                                required
                                            >
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Select a class/program" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    {programs.map((program) => (
                                                        <SelectItem key={program.name} value={program.name}>
                                                            {program.name}
                                                        </SelectItem>
                                                    ))}
                                                </SelectContent>
                                            </Select>
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="education">Previous School/Class *</Label>
                                            <Input
                                                id="education"
                                                placeholder="e.g., Class 8 from XYZ School"
                                                value={formData.previousEducation}
                                                onChange={(e) =>
                                                    setFormData({ ...formData, previousEducation: e.target.value })
                                                }
                                                required
                                            />
                                        </div>
                                        <Button type="submit" className="w-full" size="lg">
                                            <Send className="h-4 w-4 mr-2" />
                                            Submit Inquiry
                                        </Button>
                                    </form>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Important Dates & Requirements */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                        {/* Important Dates */}
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <Calendar className="h-5 w-5" />
                                    Academic Calendar
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-3">
                                    {importantDates.map((item, index) => (
                                        <div
                                            key={index}
                                            className="flex items-center justify-between p-3 bg-white rounded-lg"
                                        >
                                            <span className="font-medium">{item.event}</span>
                                            <Badge variant="outline">{item.date}</Badge>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>

                        {/* Requirements */}
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <FileText className="h-5 w-5" />
                                    Required Documents
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-3">
                                    {requirements.map((req, index) => (
                                        <li key={index} className="flex items-start gap-3">
                                            <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                                            <span className="text-gray-700">{req}</span>
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>
        </div>
    );
};
