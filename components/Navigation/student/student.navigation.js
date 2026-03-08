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
export const studentNavigation = [
  {
    title: "Dashboard",
    items: [
      {
        label: "Student Dashboard",
        path: "/dashboard/student",
        icon: LayoutDashboard,
      },
    ],
  },
  {
    title: "Academics",
    items: [
      { label: "Timetable", path: "/timetable/classes", icon: Calendar },
      { label: "Assignments", path: "/assignments/homework", icon: BookOpen },
      { label: "Results", path: "/results", icon: BarChart3 },
    ],
  },
  {
    title: "Attendance",
    items: [
      {
        label: "My Attendance",
        path: "/attendance/students",
        icon: ClipboardCheck,
      },
    ],
  },
  {
    title: "Library",
    items: [{ label: "Books", path: "/library/books", icon: Library }],
  },
];
