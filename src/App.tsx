import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from '@/components/ui/sonner';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { ProtectedRoute } from '@/components/layout/ProtectedRoute';

// Public Pages
import { HomePage } from '@/pages/public/HomePage';
import { AboutPage } from '@/pages/public/AboutPage';
import { DepartmentsPage } from '@/pages/public/DepartmentsPage';
import { FacultyPage } from '@/pages/public/FacultyPage';
import { AdmissionsPage } from '@/pages/public/AdmissionsPage';
import { ContactPage } from '@/pages/public/ContactPage';

// Login Pages
import { AdminLogin } from '@/pages/admin/AdminLogin';
import { TeacherLogin } from '@/pages/teacher/TeacherLogin';
import { StudentLogin } from '@/pages/student/StudentLogin';

// Admin Pages
import { AdminDashboard } from '@/pages/admin/AdminDashboard';

// Teacher Pages
import { TeacherDashboard } from '@/pages/teacher/TeacherDashboard';

// Student Pages
import { StudentDashboard } from '@/pages/student/StudentDashboard';

function App() {
    return (
        <BrowserRouter>
            <div className="flex flex-col min-h-screen">
                <Routes>
                    {/* Public Routes with Navbar */}
                    <Route
                        path="/*"
                        element={
                            <>
                                <Navbar />
                                <main className="flex-grow pt-16">
                                    <Routes>
                                        <Route path="/" element={<HomePage />} />
                                        <Route path="/about" element={<AboutPage />} />
                                        <Route path="/departments" element={<DepartmentsPage />} />
                                        <Route path="/faculty" element={<FacultyPage />} />
                                        <Route path="/admissions" element={<AdmissionsPage />} />
                                        <Route path="/contact" element={<ContactPage />} />
                                    </Routes>
                                </main>
                                <Footer />
                            </>
                        }
                    />

                    {/* Login Routes (No Navbar/Footer) */}
                    <Route path="/admin/login" element={<AdminLogin />} />
                    <Route path="/teacher/login" element={<TeacherLogin />} />
                    <Route path="/student/login" element={<StudentLogin />} />

                    {/* Admin Routes */}
                    <Route
                        path="/admin/dashboard"
                        element={
                            <ProtectedRoute allowedRoles={['admin']}>
                                <AdminDashboard />
                            </ProtectedRoute>
                        }
                    />

                    {/* Teacher Routes */}
                    <Route
                        path="/teacher/dashboard"
                        element={
                            <ProtectedRoute allowedRoles={['teacher']}>
                                <TeacherDashboard />
                            </ProtectedRoute>
                        }
                    />

                    {/* Student Routes */}
                    <Route
                        path="/student/dashboard"
                        element={
                            <ProtectedRoute allowedRoles={['student']}>
                                <StudentDashboard />
                            </ProtectedRoute>
                        }
                    />
                </Routes>
            </div>
            <Toaster position="top-right" richColors />
        </BrowserRouter>
    );
}

export default App;
