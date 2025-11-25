import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '@/store/authStore';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import {
    BookOpen,
    FileText,
    Calendar,
    Award,
    Bell,
    LogOut,
    Settings,
    Download,
    Upload,
    Clock,
} from 'lucide-react';

export const StudentDashboard = () => {
    const navigate = useNavigate();
    const { user, logout } = useAuthStore();

    const handleLogout = () => {
        logout();
        navigate('/');
    };

    const stats = [
        { icon: BookOpen, label: 'Enrolled Courses', value: '6', color: 'bg-blue-500' },
        { icon: FileText, label: 'Assignments', value: '8', color: 'bg-purple-500' },
        { icon: Award, label: 'GPA', value: '3.75', color: 'bg-green-500' },
        { icon: Calendar, label: 'Attendance', value: '92%', color: 'bg-orange-500' },
    ];

    const enrolledCourses = [
        { name: 'Computer Science 101', instructor: 'Dr. John Smith', progress: 75, nextClass: 'Today, 9:00 AM' },
        { name: 'Data Structures', instructor: 'Prof. Sarah Ahmed', progress: 60, nextClass: 'Today, 11:00 AM' },
        { name: 'Algorithms', instructor: 'Dr. Michael Brown', progress: 80, nextClass: 'Tomorrow, 2:00 PM' },
    ];

    const upcomingAssignments = [
        { title: 'Programming Assignment 1', course: 'CS 101', dueDate: 'Dec 20', status: 'pending' },
        { title: 'Data Structures Quiz', course: 'DS 201', dueDate: 'Dec 22', status: 'submitted' },
        { title: 'Algorithm Analysis', course: 'ALG 301', dueDate: 'Dec 25', status: 'pending' },
    ];

    const recentGrades = [
        { assignment: 'Midterm Exam', course: 'CS 101', grade: 'A', marks: '45/50' },
        { assignment: 'Lab Assignment 2', course: 'DS 201', grade: 'A-', marks: '42/50' },
        { assignment: 'Quiz 1', course: 'ALG 301', grade: 'B+', marks: '38/50' },
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <header className="bg-white shadow-sm border-b">
                <div className="container mx-auto px-4 py-4">
                    <div className="flex items-center justify-between">
                        <div>
                            <h1 className="text-2xl font-bold text-gray-900">Student Dashboard</h1>
                            <p className="text-gray-600">Welcome back, {user?.name}!</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <Button variant="outline" size="icon">
                                <Bell className="h-5 w-5" />
                            </Button>
                            <Button variant="outline" size="icon">
                                <Settings className="h-5 w-5" />
                            </Button>
                            <Button variant="destructive" onClick={handleLogout}>
                                <LogOut className="h-4 w-4 mr-2" />
                                Logout
                            </Button>
                        </div>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="container mx-auto px-4 py-8">
                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Card className="hover:shadow-lg transition-shadow">
                                <CardContent className="pt-6">
                                    <div className={`p-3 rounded-lg ${stat.color} bg-opacity-10 w-fit mb-4`}>
                                        <stat.icon className={`h-6 w-6 ${stat.color.replace('bg-', 'text-')}`} />
                                    </div>
                                    <h3 className="text-2xl font-bold mb-1">{stat.value}</h3>
                                    <p className="text-gray-600 text-sm">{stat.label}</p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>

                <div className="grid lg:grid-cols-3 gap-6">
                    {/* Enrolled Courses */}
                    <Card className="lg:col-span-2">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <BookOpen className="h-5 w-5" />
                                My Courses
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                {enrolledCourses.map((course, index) => (
                                    <div key={index} className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                                        <div className="flex items-start justify-between mb-3">
                                            <div>
                                                <h4 className="font-semibold">{course.name}</h4>
                                                <p className="text-sm text-gray-600">{course.instructor}</p>
                                            </div>
                                            <Badge variant="outline" className="flex items-center gap-1">
                                                <Clock className="h-3 w-3" />
                                                {course.nextClass}
                                            </Badge>
                                        </div>
                                        <div className="space-y-2">
                                            <div className="flex justify-between text-sm">
                                                <span className="text-gray-600">Progress</span>
                                                <span className="font-medium">{course.progress}%</span>
                                            </div>
                                            <Progress value={course.progress} className="h-2" />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>

                    {/* Quick Actions */}
                    <Card>
                        <CardHeader>
                            <CardTitle>Quick Actions</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-2">
                                <Button variant="outline" className="w-full justify-start">
                                    <Calendar className="h-4 w-4 mr-2" />
                                    View Timetable
                                </Button>
                                <Button variant="outline" className="w-full justify-start">
                                    <Download className="h-4 w-4 mr-2" />
                                    Download Materials
                                </Button>
                                <Button variant="outline" className="w-full justify-start">
                                    <Upload className="h-4 w-4 mr-2" />
                                    Submit Assignment
                                </Button>
                                <Button variant="outline" className="w-full justify-start">
                                    <Award className="h-4 w-4 mr-2" />
                                    View Results
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Assignments and Grades */}
                <div className="grid lg:grid-cols-2 gap-6 mt-6">
                    {/* Upcoming Assignments */}
                    <Card>
                        <CardHeader>
                            <CardTitle>Upcoming Assignments</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-3">
                                {upcomingAssignments.map((assignment, index) => (
                                    <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                                        <div className="flex-1">
                                            <h4 className="font-semibold text-sm mb-1">{assignment.title}</h4>
                                            <div className="flex items-center gap-3 text-xs text-gray-600">
                                                <span>{assignment.course}</span>
                                                <span>Due: {assignment.dueDate}</span>
                                            </div>
                                        </div>
                                        <Badge variant={assignment.status === 'submitted' ? 'default' : 'secondary'}>
                                            {assignment.status === 'submitted' ? 'Submitted' : 'Pending'}
                                        </Badge>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>

                    {/* Recent Grades */}
                    <Card>
                        <CardHeader>
                            <CardTitle>Recent Grades</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-3">
                                {recentGrades.map((grade, index) => (
                                    <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                                        <div className="flex-1">
                                            <h4 className="font-semibold text-sm mb-1">{grade.assignment}</h4>
                                            <p className="text-xs text-gray-600">{grade.course}</p>
                                        </div>
                                        <div className="text-right">
                                            <Badge className="mb-1">{grade.grade}</Badge>
                                            <p className="text-xs text-gray-600">{grade.marks}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </main>
        </div>
    );
};
