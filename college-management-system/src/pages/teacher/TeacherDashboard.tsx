import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '@/store/authStore';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
    BookOpen,
    Users,
    FileText,
    Calendar,
    CheckSquare,
    Bell,
    LogOut,
    Settings,
    Clock,
} from 'lucide-react';

export const TeacherDashboard = () => {
    const navigate = useNavigate();
    const { user, logout } = useAuthStore();

    const handleLogout = () => {
        logout();
        navigate('/');
    };

    const stats = [
        { icon: BookOpen, label: 'My Courses', value: '6', color: 'bg-blue-500' },
        { icon: Users, label: 'Total Students', value: '245', color: 'bg-green-500' },
        { icon: FileText, label: 'Assignments', value: '12', color: 'bg-purple-500' },
        { icon: CheckSquare, label: 'Pending Grading', value: '8', color: 'bg-orange-500' },
    ];

    const todaySchedule = [
        { time: '09:00 AM', course: 'Computer Science 101', room: 'Room 201', students: 45 },
        { time: '11:00 AM', course: 'Data Structures', room: 'Room 305', students: 38 },
        { time: '02:00 PM', course: 'Algorithms', room: 'Room 201', students: 42 },
    ];

    const recentAssignments = [
        { title: 'Programming Assignment 1', course: 'CS 101', dueDate: 'Dec 20', submissions: 35, total: 45 },
        { title: 'Data Structures Quiz', course: 'DS 201', dueDate: 'Dec 22', submissions: 28, total: 38 },
        { title: 'Algorithm Analysis', course: 'ALG 301', dueDate: 'Dec 25', submissions: 30, total: 42 },
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <header className="bg-white shadow-sm border-b">
                <div className="container mx-auto px-4 py-4">
                    <div className="flex items-center justify-between">
                        <div>
                            <h1 className="text-2xl font-bold text-gray-900">Teacher Dashboard</h1>
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
                    {/* Today's Schedule */}
                    <Card className="lg:col-span-2">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Calendar className="h-5 w-5" />
                                Today's Schedule
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                {todaySchedule.map((schedule, index) => (
                                    <div key={index} className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                                        <div className="flex items-center gap-2 text-primary font-semibold min-w-[100px]">
                                            <Clock className="h-4 w-4" />
                                            {schedule.time}
                                        </div>
                                        <div className="flex-1">
                                            <h4 className="font-semibold">{schedule.course}</h4>
                                            <p className="text-sm text-gray-600">{schedule.room} • {schedule.students} students</p>
                                        </div>
                                        <Button size="sm">View</Button>
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
                                    <FileText className="h-4 w-4 mr-2" />
                                    Upload Materials
                                </Button>
                                <Button variant="outline" className="w-full justify-start">
                                    <CheckSquare className="h-4 w-4 mr-2" />
                                    Create Assignment
                                </Button>
                                <Button variant="outline" className="w-full justify-start">
                                    <Users className="h-4 w-4 mr-2" />
                                    Mark Attendance
                                </Button>
                                <Button variant="outline" className="w-full justify-start">
                                    <Bell className="h-4 w-4 mr-2" />
                                    Post Announcement
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Recent Assignments */}
                <Card className="mt-6">
                    <CardHeader>
                        <CardTitle>Recent Assignments</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            {recentAssignments.map((assignment, index) => (
                                <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                                    <div className="flex-1">
                                        <h4 className="font-semibold mb-1">{assignment.title}</h4>
                                        <div className="flex items-center gap-4 text-sm text-gray-600">
                                            <span>{assignment.course}</span>
                                            <span>Due: {assignment.dueDate}</span>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <Badge variant={assignment.submissions === assignment.total ? 'default' : 'secondary'}>
                                            {assignment.submissions}/{assignment.total} Submitted
                                        </Badge>
                                        <Button size="sm" className="mt-2">Grade</Button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </main>
        </div>
    );
};
