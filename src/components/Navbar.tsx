import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { UtensilsCrossed } from "lucide-react";

export default function Navbar() {
  const links = [
    { title: "Home", href: "/" },
    { title: "About", href: "/about" },
    { title: "Menu", href: "/menu" },
    { title: "Contact", href: "/contact" },
  ];

  return (
    <header className="bg-[#e5e9e3] flex h-20 w-full shrink-0 items-center justify-between px-4 md:px-6">
      <Link href="/" className="mr-6 hidden lg:flex" prefetch={false}>
        <UtensilsCrossed className="h-8 w-8 text-[#343d37]" />
        <span className="sr-only">Next.js Cuisine</span>
      </Link>

      {/* Menu button and menu for mobile/tablet */}
      <Sheet>
        <SheetTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            className="lg:hidden ml-auto bg-[#e5e9e3] hover:bg-[#C9DABF]"
          >
            <MenuIcon className="h-6 w-6" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>

        <SheetContent className="bg-[#e5e9e3]" side="right">
          <div className="grid gap-2 py-6">
            {links.map((link, idx) => (
              <Link
                key={idx}
                href={link.href}
                className="flex w-full items-center py-2 text-lg font-semibold text-[#5f685c] hover:text-[#343d37]"
                prefetch={false}
              >
                {link.title}
              </Link>
            ))}
          </div>
        </SheetContent>
      </Sheet>

      {/* Navigation links for large screens */}
      <nav className="ml-auto hidden lg:flex gap-6">
        {links.map((link, idx) => (
          <Link
            key={idx}
            href={link.href}
            className="group inline-flex h-9 w-max items-center justify-center rounded-md text-[#5f685c] hover:text-[#343d37] bg-[#e5e9e3] px-4 py-2 text-sm font-medium transition-colors hover:bg-[#C9DABF] focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
            prefetch={false}
          >
            {link.title}
          </Link>
        ))}
      </nav>
    </header>
  );
}

function MenuIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}
