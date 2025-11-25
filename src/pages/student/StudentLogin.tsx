import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useAuthStore } from '@/store/authStore';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { User, Loader2 } from 'lucide-react';
import { toast } from 'sonner';

export const StudentLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    const login = useAuthStore((state) => state.login);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const success = await login(email, password, 'student');

            if (success) {
                toast.success('Welcome back!');
                navigate('/student/dashboard');
            } else {
                toast.error('Invalid credentials. Please try again.');
            }
        } catch (error) {
            toast.error('An error occurred. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center gradient-primary p-4">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="w-full max-w-md"
            >
                <Card className="shadow-2xl border-0 backdrop-blur-sm bg-white/95">
                    <CardHeader className="space-y-1 text-center">
                        <div className="flex justify-center mb-4">
                            <div className="p-3 bg-purple-100 rounded-full">
                                <User className="h-12 w-12 text-purple-600" />
                            </div>
                        </div>
                        <CardTitle className="text-3xl font-bold">Student Portal</CardTitle>
                        <CardDescription className="text-base">
                            Access your courses, assignments, and results
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="email">Email</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="student@college.edu"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    className="h-11"
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="password">Password</Label>
                                <Input
                                    id="password"
                                    type="password"
                                    placeholder="••••••••"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                    className="h-11"
                                />
                            </div>
                            <Button
                                type="submit"
                                className="w-full h-11 text-base bg-purple-600 hover:bg-purple-700"
                                disabled={isLoading}
                            >
                                {isLoading ? (
                                    <>
                                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                        Signing in...
                                    </>
                                ) : (
                                    'Sign In'
                                )}
                            </Button>
                        </form>
                        <div className="mt-6 text-center text-sm text-muted-foreground">
                            <p>Demo credentials:</p>
                            <p className="font-mono mt-1">student@college.edu / password</p>
                        </div>
                    </CardContent>
                </Card>
                <div className="mt-4 text-center">
                    <Button
                        variant="ghost"
                        onClick={() => navigate('/')}
                        className="text-white hover:text-white/80 hover:bg-white/10"
                    >
                        ← Back to Home
                    </Button>
                </div>
            </motion.div>
        </div>
    );
};
