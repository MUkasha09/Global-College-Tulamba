export type UserRole = 'admin' | 'teacher' | 'student';

export interface User {
    id: string;
    email: string;
    name: string;
    role: UserRole;
    avatar?: string;
}

export interface Student extends User {
    role: 'student';
    rollNumber: string;
    classId: string;
    section: string;
    dateOfBirth: string;
    address: string;
    parentContact: string;
}

export interface Teacher extends User {
    role: 'teacher';
    employeeId: string;
    department: string;
    qualification: string;
    joiningDate: string;
}

export interface Admin extends User {
    role: 'admin';
}

export interface Course {
    id: string;
    name: string;
    code: string;
    department: string;
    credits: number;
    teacherId: string;
    teacherName?: string;
    description?: string;
}

export interface Class {
    id: string;
    name: string;
    section: string;
    academicYear: string;
}

export interface Enrollment {
    id: string;
    studentId: string;
    courseId: string;
    enrollmentDate: string;
}

export interface Attendance {
    id: string;
    studentId: string;
    courseId: string;
    date: string;
    status: 'present' | 'absent' | 'late';
}

export interface Assignment {
    id: string;
    courseId: string;
    title: string;
    description: string;
    dueDate: string;
    totalMarks: number;
    createdBy: string;
    createdAt: string;
}

export interface Submission {
    id: string;
    assignmentId: string;
    studentId: string;
    fileUrl: string;
    submittedAt: string;
    grade?: number;
    feedback?: string;
}

export interface Announcement {
    id: string;
    title: string;
    content: string;
    createdBy: string;
    createdByName?: string;
    targetAudience: 'all' | 'students' | 'teachers' | string; // string for specific class
    createdAt: string;
}

export interface Event {
    id: string;
    title: string;
    description: string;
    date: string;
    images: string[];
}

export interface TimetableEntry {
    id: string;
    classId: string;
    day: 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday';
    timeSlot: string;
    courseId: string;
    courseName?: string;
    teacherId: string;
    teacherName?: string;
    roomNumber: string;
}

export interface StudyMaterial {
    id: string;
    courseId: string;
    title: string;
    fileUrl: string;
    uploadedBy: string;
    uploadedAt: string;
    type: 'pdf' | 'video' | 'document' | 'other';
}

export interface Grade {
    id: string;
    studentId: string;
    courseId: string;
    assignmentId?: string;
    marks: number;
    totalMarks: number;
    semester: string;
    academicYear: string;
}
