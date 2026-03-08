import Link from "next/link";
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
import { cookies } from "next/headers";
import { navigationByRole } from "./Navigation/navigation";
export const Sidebar = async () => {
  const token = (await cookies()).get("access_token");
  console.log(token);
  const res = await fetch("http://localhost:8080/api/getUserDetails", {
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token.value}`,
    },
  });
  const result = await res.json();
  const navigation = navigationByRole[result.role];

  return (
    <aside className="w-64 h-[calc(100vh-64px)] p-4 overflow-y-auto sticky top-15 no-scrollbar hover:scrollbar">
      {navigation.map((section) => (
        <div key={section.title} className="mb-6">
          <h3 className="text-xs  text-gray-500  mb-2">{section.title}</h3>

          <ul className="space-y-2">
            {section.items.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.path}
                  className="text-sm flex items-center gap-2 px-3 py-2 rounded-[10px] hover:bg-gray-100 antialiased"
                >
                  <item.icon size={18} /> {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </aside>
  );
};
