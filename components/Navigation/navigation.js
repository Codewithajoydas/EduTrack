import { adminNavigation } from "./admin/admin.navigation";
import { parentNavigation } from "./parent/parent.navigation";
import { principalNavigation } from "./principal/principal.navigation";
import { studentNavigation } from "./student/student.navigation";
import { teacherNavigation } from "./teacher/teacher.navigation";

export const navigationByRole = {
  admin: adminNavigation,
  principal: principalNavigation,
  teacher: teacherNavigation,
  student: studentNavigation,
  parent: parentNavigation,
};
