"use client";

import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
} from "@nextui-org/navbar";
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
import { link as linkStyles } from "@nextui-org/theme";
import NextLink from "next/link";
import clsx from "clsx";
import { useState } from "react";
import { usePathname } from "next/navigation";

import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import { EnvelopeIcon, WhatsappIcon } from "@/components/icons";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <NextUINavbar
      isMenuOpen={isMenuOpen}
      maxWidth="xl"
      position="sticky"
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="md:hidden"
        />
        <NavbarBrand>
          <NextLink href="/">
            <p className="font-bold text-xl">Complex Armenopolis</p>
          </NextLink>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden md:flex gap-4" justify="center">
        {siteConfig.navItems.map((item) => (
          <NavbarItem key={item.href}>
            <NextLink
              className={clsx(
                linkStyles({
                  color: "foreground",
                  underline: pathname === item.href ? "always" : "hover",
                }),
              )}
              href={item.href}
            >
              {item.label}
            </NextLink>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem className="flex gap-3">
          <Link
            isExternal
            aria-label="WhatsApp"
            href={siteConfig.links.whatsapp}
          >
            <WhatsappIcon className="text-default-500" />
          </Link>
          <Link isExternal aria-label="E-Mail" href={siteConfig.links.email}>
            <EnvelopeIcon className="text-default-500" />
          </Link>
          <ThemeSwitch />
        </NavbarItem>
        <NavbarItem className="hidden md:flex">
          <Button
            as={Link}
            className="text-lg font-normal text-default-600 bg-default-100"
            href="/contact"
            variant="faded"
          >
            Contact
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {siteConfig.navItems.map((item) => (
          <NavbarItem key={item.href} className="flex justify-center my-5">
            <NextLink
              className={clsx(
                linkStyles({
                  color: "foreground",
                  size: "lg",
                  underline: pathname === item.href ? "always" : "hover",
                }),
              )}
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </NextLink>
          </NavbarItem>
        ))}
        <NavbarItem className="flex justify-center my-5">
          <Button
            as={Link}
            className="text-lg font-normal text-default-600 bg-default-100"
            href="/contact"
            variant={pathname === "/contact" ? "faded" : "flat"}
          >
            Contact
          </Button>
        </NavbarItem>
      </NavbarMenu>
    </NextUINavbar>
  );
};
