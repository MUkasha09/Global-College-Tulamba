import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { User } from '@/types';

interface AuthState {
    user: User | null;
    isAuthenticated: boolean;
    login: (email: string, password: string, role: string) => Promise<boolean>;
    logout: () => void;
    setUser: (user: User | null) => void;
}

export const useAuthStore = create<AuthState>()(
    persist(
        (set) => ({
            user: null,
            isAuthenticated: false,

            login: async (email: string, password: string, role: string) => {
                try {
                    // TODO: Replace with actual API call
                    // For now, using mock authentication

                    // Mock users for demonstration
                    const mockUsers: Record<string, User> = {
                        'admin@college.edu': {
                            id: '1',
                            email: 'admin@college.edu',
                            name: 'Admin User',
                            role: 'admin',
                        },
                        'teacher@college.edu': {
                            id: '2',
                            email: 'teacher@college.edu',
                            name: 'John Smith',
                            role: 'teacher',
                        },
                        'student@college.edu': {
                            id: '3',
                            email: 'student@college.edu',
                            name: 'Jane Doe',
                            role: 'student',
                        },
                    };

                    // Simulate API delay
                    await new Promise(resolve => setTimeout(resolve, 1000));

                    const user = mockUsers[email];

                    if (user && user.role === role && password === 'password') {
                        set({ user, isAuthenticated: true });
                        return true;
                    }

                    return false;
                } catch (error) {
                    console.error('Login error:', error);
                    return false;
                }
            },

            logout: () => {
                set({ user: null, isAuthenticated: false });
            },

            setUser: (user: User | null) => {
                set({ user, isAuthenticated: !!user });
            },
        }),
        {
            name: 'auth-storage',
        }
    )
);
