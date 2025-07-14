"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Feather } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  const NavLink = ({ href, label, isMobile = false }: { href: string; label: string; isMobile?: boolean }) => {
    const isExternal = href.startsWith('http') || href.startsWith('/cover-letter-rewriter');
    const effectiveHref = isHomePage && !isExternal ? href : `/${href}`;
    
    const linkClasses = cn(
      "text-sm font-medium transition-colors hover:text-primary",
       pathname === href ? "text-primary" : "text-muted-foreground",
       isMobile && "block w-full text-left p-2 rounded-md hover:bg-accent hover:text-accent-foreground"
    );

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
      if (!isExternal) {
        e.preventDefault();
        document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
      }
      if(isMobile) setIsSheetOpen(false);
    };

    if (isHomePage || isExternal) {
      return (
        <Link href={effectiveHref} passHref legacyBehavior>
          <a onClick={handleClick} className={linkClasses}>
            {label}
          </a>
        </Link>
      );
    }

    return (
       <Link href={effectiveHref} passHref legacyBehavior>
          <a className={linkClasses}>{label}</a>
       </Link>
    )
  };

  const MobileNav = () => (
     <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Open navigation menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left">
        <div className="flex flex-col gap-4 p-4">
          <Link href="/" className="flex items-center gap-2 mb-4" onClick={() => setIsSheetOpen(false)}>
            <Feather className="w-6 h-6 text-primary" />
            <span className="font-bold font-headline text-lg">Mohan Gowda</span>
          </Link>
          <nav className="flex flex-col gap-2">
            {isHomePage ? navLinks.map(link => (
              <NavLink key={link.href} {...link} isMobile />
            )) : <NavLink href="/" label="Home" isMobile />}
          </nav>
          <Button asChild className="mt-4" variant="accent">
            <a href="/MK@24.pdf" download="MK@24.pdf">Download Resume</a>
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  )

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="flex items-center gap-4">
           <Link href="/" className="flex items-center gap-2 mr-6">
            <Feather className="w-6 h-6 text-primary" />
            <span className="font-bold font-headline text-lg hidden sm:inline-block">Mohan Gowda</span>
          </Link>
        </div>
        <div className="flex-1 flex items-center justify-end">
          <nav className="hidden md:flex items-center gap-6 text-sm">
            {isHomePage && navLinks.map(link => <NavLink key={link.href} {...link} />)}
            {!isHomePage && <NavLink href="/" label="Home" />}
          </nav>
          <div className="flex items-center gap-2 ml-4">
            <Button asChild variant="accent" size="sm" className="hidden md:inline-flex">
              <a href="/MK@24.pdf" download="MK@24.pdf">Download Resume</a>
            </Button>
            <MobileNav />
          </div>
        </div>
      </div>
    </header>
  );
}
