import React from 'react';
import Link from 'next/link';
import Nav from './Nav';
import { Button } from '@/components/ui/button';
import MobileNav from './MobileNav';
const Header = () => {
  return (
    <header className="py-8 text-white xl:py-12 ">
      <div className="container flex items-center justify-between mx-auto">
        <Link href="/">
          <h1 className="text-4xl font-semibold">
            Zhang<span className="text-accent">.</span>
          </h1>
        </Link>
        <div className="items-center hidden gap-8 md:flex">
          <Nav />
          <Link href="/">
            <Button className="f-c-c h-[44px] px-6 transition-colors rounded-full bg-accent text-primary hover:bg-accent-hover">
              Hire me
            </Button>
          </Link>
        </div>
        <div className="md:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
