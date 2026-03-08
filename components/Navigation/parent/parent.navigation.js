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
export const parentNavigation = [
  {
    title: "Dashboard",
    items: [
      {
        label: "Parent Dashboard",
        path: "/dashboard/parent",
        icon: LayoutDashboard,
      },
    ],
  },
  {
    title: "Children",
    items: [
      {
        label: "Attendance",
        path: "/attendance/students",
        icon: ClipboardCheck,
      },
      { label: "Results", path: "/results", icon: BarChart3 },
      { label: "Assignments", path: "/assignments/homework", icon: BookOpen },
    ],
  },
  {
    title: "Fees",
    items: [
      { label: "Fee Payments", path: "/fees/collection", icon: CreditCard },
    ],
  },
];
