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
export const principalNavigation = [
  {
    title: "Dashboard",
    items: [
      {
        label: "Principal Dashboard",
        path: "/dashboard/principal",
        icon: LayoutDashboard,
      },
    ],
  },
  {
    title: "Students",
    items: [
      { label: "All Students", path: "/students", icon: GraduationCap },
      { label: "Student Records", path: "/students/records", icon: History },
    ],
  },
  {
    title: "Teachers",
    items: [
      { label: "Teachers", path: "/teachers", icon: UserCheck },
      {
        label: "Teacher Assignments",
        path: "/teachers/assignments",
        icon: ClipboardCheck,
      },
    ],
  },
  {
    title: "Attendance",
    items: [
      {
        label: "Attendance Reports",
        path: "/attendance/reports",
        icon: BarChart3,
      },
    ],
  },
  {
    title: "Reports",
    items: [
      {
        label: "Performance Reports",
        path: "/reports/performance",
        icon: BarChart3,
      },
      { label: "Fee Reports", path: "/reports/fees", icon: BarChart3 },
    ],
  },
];
