import { cookies } from "next/headers";
import "../styles/css/index.css";
import { Header } from "@/components/Header";
import { Sidebar } from "@/components/Sidebar";
import AppLayout from "@/components/AppLayout";
export default async function Home() {
  const token = (await cookies()).get("access_token");
  console.log(token )
  const res = await fetch("http://localhost:8080/api/getUserDetails", {
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token.value}`,
    }
  });
  const result = await res.json();
  
  return (
    <AppLayout>
      asas
    </AppLayout>
  );
}
