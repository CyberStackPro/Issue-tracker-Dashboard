import { Bug } from "lucide-react";
import Link from "next/link";
import React from "react";

const NavBar = () => {
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
            className="text-zinc-500 hover:text-zinc-800 dark:text-zinc-300 dark:hover:text-zinc-50 transition-colors"
          >
            {link.label}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
