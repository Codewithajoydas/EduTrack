import {
  LayoutDashboard,
  Users,
  ShieldCheck,
  User,
  GraduationCap,
  UserPlus,
  History,
  UserCheck,
  School,
  ClipboardCheck,
  CreditCard,
  FileText,
  Calendar,
  BookOpen,
  Megaphone,
  Library,
  Bus,
  BarChart3,
  Folder,
  Settings,
  Shield,
  Building2,
} from "lucide-react";
export const teacherNavigation = [
  {
    title: "Dashboard",
    items: [
      {
        label: "Teacher Dashboard",
        path: "/dashboard/teacher",
        icon: LayoutDashboard,
      },
    ],
  },
  {
    title: "Students",
    items: [{ label: "My Students", path: "/students", icon: GraduationCap }],
  },
  {
    title: "Attendance",
    items: [
      {
        label: "Take Attendance",
        path: "/attendance/students",
        icon: ClipboardCheck,
      },
    ],
  },
  {
    title: "Assignments",
    items: [
      { label: "Homework", path: "/assignments/homework", icon: BookOpen },
      {
        label: "Submissions",
        path: "/assignments/submissions",
        icon: ClipboardCheck,
      },
    ],
  },
  {
    title: "Timetable",
    items: [
      {
        label: "Teacher Timetable",
        path: "/timetable/teachers",
        icon: Calendar,
      },
    ],
  },
];
