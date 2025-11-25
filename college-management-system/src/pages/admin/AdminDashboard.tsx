import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '@/store/authStore';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
    Users,
    BookOpen,
    GraduationCap,
    Calendar,
    TrendingUp,
    Bell,
    LogOut,
    Settings,
    BarChart3,
} from 'lucide-react';

export const AdminDashboard = () => {
    const navigate = useNavigate();
    const { user, logout } = useAuthStore();

    const handleLogout = () => {
        logout();
        navigate('/');
    };

    const stats = [
        { icon: Users, label: 'Total Students', value: '5,234', change: '+12%', color: 'bg-blue-500' },
        { icon: BookOpen, label: 'Total Teachers', value: '245', change: '+5%', color: 'bg-green-500' },
        { icon: GraduationCap, label: 'Total Courses', value: '156', change: '+8%', color: 'bg-purple-500' },
        { icon: Calendar, label: 'Active Classes', value: '89', change: '+3%', color: 'bg-orange-500' },
    ];

    const recentActivities = [
        { action: 'New student registered', name: 'Ali Hassan', time: '5 minutes ago' },
        { action: 'Course updated', name: 'Computer Science 101', time: '1 hour ago' },
        { action: 'Teacher added', name: 'Dr. Sarah Ahmed', time: '2 hours ago' },
        { action: 'Announcement posted', name: 'Exam Schedule', time: '3 hours ago' },
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <header className="bg-white shadow-sm border-b">
                <div className="container mx-auto px-4 py-4">
                    <div className="flex items-center justify-between">
                        <div>
                            <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
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
                                    <div className="flex items-center justify-between mb-4">
                                        <div className={`p-3 rounded-lg ${stat.color} bg-opacity-10`}>
                                            <stat.icon className={`h-6 w-6 ${stat.color.replace('bg-', 'text-')}`} />
                                        </div>
                                        <span className="text-sm font-medium text-green-600">{stat.change}</span>
                                    </div>
                                    <h3 className="text-2xl font-bold mb-1">{stat.value}</h3>
                                    <p className="text-gray-600 text-sm">{stat.label}</p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>

                <div className="grid lg:grid-cols-3 gap-6">
                    {/* Quick Actions */}
                    <Card className="lg:col-span-2">
                        <CardHeader>
                            <CardTitle>Quick Actions</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                <Button variant="outline" className="h-24 flex-col gap-2">
                                    <Users className="h-6 w-6" />
                                    <span>Manage Students</span>
                                </Button>
                                <Button variant="outline" className="h-24 flex-col gap-2">
                                    <BookOpen className="h-6 w-6" />
                                    <span>Manage Teachers</span>
                                </Button>
                                <Button variant="outline" className="h-24 flex-col gap-2">
                                    <GraduationCap className="h-6 w-6" />
                                    <span>Manage Courses</span>
                                </Button>
                                <Button variant="outline" className="h-24 flex-col gap-2">
                                    <Calendar className="h-6 w-6" />
                                    <span>Timetable</span>
                                </Button>
                                <Button variant="outline" className="h-24 flex-col gap-2">
                                    <Bell className="h-6 w-6" />
                                    <span>Announcements</span>
                                </Button>
                                <Button variant="outline" className="h-24 flex-col gap-2">
                                    <BarChart3 className="h-6 w-6" />
                                    <span>Reports</span>
                                </Button>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Recent Activities */}
                    <Card>
                        <CardHeader>
                            <CardTitle>Recent Activities</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                {recentActivities.map((activity, index) => (
                                    <div key={index} className="flex items-start gap-3 pb-3 border-b last:border-0">
                                        <div className="p-2 bg-primary/10 rounded-full">
                                            <TrendingUp className="h-4 w-4 text-primary" />
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-sm font-medium">{activity.action}</p>
                                            <p className="text-xs text-gray-600">{activity.name}</p>
                                            <p className="text-xs text-gray-400 mt-1">{activity.time}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Analytics Chart Placeholder */}
                <Card className="mt-6">
                    <CardHeader>
                        <CardTitle>Attendance Overview</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg">
                            <div className="text-center text-gray-500">
                                <BarChart3 className="h-12 w-12 mx-auto mb-2 opacity-50" />
                                <p>Analytics chart will be displayed here</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </main>
        </div>
    );
};
