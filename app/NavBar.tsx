"use client";
import { Bug } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import classNames from "classnames";

const NavBar = () => {
  const currentPath = usePathname();
  const links = [
    { label: "Dashboard", href: "/" },
    { label: "Issues", href: "/issues" },
  ];
  return (
    <nav className="flex space-x-6 border-b h-14 px-5 mb-5  items-center">
      <Link href={"/"}>
        <Bug className="w-6 h-6 text-gray-600 dark:text-gray-300" />
      </Link>

      <ul className="flex space-x-6">
        {links.map((link) => (
          <Link
            href={link.href}
            className={classNames({
              "text-zinc-900 dark:text-zinc-50": currentPath === link.href,
              "text-zinc-600 dark:text-zinc-400": currentPath !== link.href,
              "transition-colors duration-200": true,
            })}
          >
            {link.label}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
