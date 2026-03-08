"use client";
import Image from "next/image";
import { Field } from "./ui/field";
import {
  InputGroup,
  InputGroupButton,
  InputGroupInput,
} from "./ui/input-group";
import { Bell, Search } from "lucide-react";
import { Button } from "./ui/button";
import { AvatarImage, Avatar } from "./ui/avatar";

export const Header = () => {
  return (
    <header className="flex justify-between items-center p-2 w-full sticky top-0 bg-white dark:bg-gray-900 z-10">
      <div className="logo">
        <Image
          src={"/images/edutrack-high-resolution-logo-transparent.png"}
          width={100}
          height={20}
          alt="EduTrack Logo | School Management System"
        />
      </div>
      <nav className="flex items-center gap-2">
        <Field className={"w-75"}>
          <InputGroup>
            <InputGroupInput placeholder="Search by name, class or roll number" type="search" />
            <InputGroupButton >
              <Search />
            </InputGroupButton>
          </InputGroup>
        </Field>
        <ul className="flex items-center gap-2">
          <li>
            <Button className="notification" variant="ghost">
              <Bell size={18} />
            </Button>
          </li>
          <li>
            <Avatar>
              <AvatarImage src="https://codewithajoydas.live/logo.png" />
            </Avatar>
          </li>
        </ul>
      </nav>
    </header>
  );
};
