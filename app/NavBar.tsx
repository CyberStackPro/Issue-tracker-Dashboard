"use client";
import { Bug } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import classNames from "classnames";
import { useSession } from "next-auth/react";
import { Box, Container, Flex } from "@radix-ui/themes";

const NavBar = () => {
  const currentPath = usePathname();
  const { status, data: session } = useSession();
  const links = [
    { label: "Dashboard", href: "/" },
    { label: "Issues", href: "/issues/list" },
  ];
  return (
    <nav className=" border-b py-4 px-5 mb-5  ">
      <Container>
        <Flex justify={"between"}>
          <Flex align={"center"} gap={"4"}>
            <Link href={"/"}>
              <Bug className="w-6 h-6 text-gray-600 dark:text-gray-300" />
            </Link>
            <ul className="flex space-x-6">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={classNames({
                      "text-zinc-900 dark:text-zinc-50":
                        currentPath === link.href,
                      "text-zinc-600 dark:text-zinc-400":
                        currentPath !== link.href,
                      "transition-colors duration-200": true,
                    })}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </Flex>
          <Box>
            {status === "authenticated" && (
              <Link href={"/api/auth/signout"}>Log Out</Link>
            )}
            {status === "unauthenticated" && (
              <Link href={"/api/auth/signin"}>Log In</Link>
            )}
          </Box>
        </Flex>
      </Container>
    </nav>
  );
};

export default NavBar;
