'use client';
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription, SheetClose } from '@/components/ui/sheet';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { CiMenuFries } from 'react-icons/ci';
import { NAV_LINKS } from '@/enums';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';
const links = NAV_LINKS;
const MobileNav = () => {
  const pathname = usePathname();
  return (
    <Sheet>
      <SheetTrigger className="f-c-c">
        <CiMenuFries className="text-[32px] text-accent cursor-pointer" />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        <SheetTitle className="hidden"></SheetTitle>
        <SheetDescription className="hidden">
          Make changes to your profile here. Click save when you&apos;re done.
        </SheetDescription>
        <div className="mt-32 mb-40 text-2xl text-center">
          <Link href="/">
            <h1 className="text-4xl font-semibold">
              Zhang<span className="text-accent">.</span>
            </h1>
          </Link>
        </div>
        <nav className="flex flex-col items-center justify-center gap-8">
          {links.map((link) => (
            <Link
              className={`${
                pathname === link.path && 'text-accent border-b-2 border-accent'
              } capitalize font-medium hover:text-accent transition-all`}
              href={link.path}
              key={link.path}
            >
              <SheetClose>{link.name}</SheetClose>
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
