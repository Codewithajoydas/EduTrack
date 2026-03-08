import {
  BarChart3,
  BookOpen,
  ClipboardCheck,
  CreditCard,
  GraduationCap,
  History,
  LayoutDashboard,
  Library,
  School,
  Settings,
  ShieldCheck,
  User,
  UserCheck,
  UserPlus,
  Users,
} from "lucide-react";

export const adminNavigation = [
  {
    title: "Dashboard",
    items: [
      {
        label: "Admin Dashboard",
        path: "/dashboard/admin",
        icon: LayoutDashboard,
      },
    ],
  },
  {
    title: "User Management",
    items: [
      { label: "Users", path: "/users", icon: Users },
      { label: "Roles & Permissions", path: "/roles", icon: ShieldCheck },
      { label: "Profile", path: "/profile", icon: User },
    ],
  },
  {
    title: "Students",
    items: [
      { label: "All Students", path: "/students", icon: GraduationCap },
      { label: "Add Student", path: "/students/add", icon: UserPlus },
      { label: "Student Records", path: "/students/records", icon: History },
    ],
  },
  {
    title: "Teachers",
    items: [
      { label: "All Teachers", path: "/teachers", icon: UserCheck },
      { label: "Add Teacher", path: "/teachers/add", icon: UserPlus },
      {
        label: "Teacher Assignments",
        path: "/teachers/assignments",
        icon: ClipboardCheck,
      },
    ],
  },
  {
    title: "Classes",
    items: [
      { label: "Classes", path: "/classes", icon: School },
      { label: "Sections", path: "/sections", icon: School },
      { label: "Subjects", path: "/subjects", icon: BookOpen },
    ],
  },
  {
    title: "Attendance",
    items: [
      {
        label: "Student Attendance",
        path: "/attendance/students",
        icon: ClipboardCheck,
      },
      {
        label: "Teacher Attendance",
        path: "/attendance/teachers",
        icon: ClipboardCheck,
      },
      {
        label: "Attendance Reports",
        path: "/attendance/reports",
        icon: BarChart3,
      },
    ],
  },
  {
    title: "Fees",
    items: [
      { label: "Fee Structure", path: "/fees/structure", icon: CreditCard },
      { label: "Fee Collection", path: "/fees/collection", icon: CreditCard },
      { label: "Fee Reports", path: "/fees/reports", icon: BarChart3 },
    ],
  },
  {
    title: "Library",
    items: [
      { label: "Books", path: "/library/books", icon: Library },
      { label: "Issue Books", path: "/library/issue", icon: BookOpen },
      { label: "Returns", path: "/library/returns", icon: History },
    ],
  },
  {
    title: "Settings",
    items: [
      { label: "School Settings", path: "/settings/school", icon: Settings },
      { label: "System Settings", path: "/settings/system", icon: Settings },
    ],
  },
];
