'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

export default function Home() {
  const socials = [
    { label: 'ig', href: 'https://instagram.com/doranalytics' },
    { label: 'tt', href: 'https://tiktok.com/@doranalytics' },
    { label: 'x', href: 'https://twitter.com/doranalytics' },
    { label: 'li', href: 'https://www.linkedin.com/in/brian-doran-438ab1102' },
    { label: 'git', href: 'https://github.com/doranalytics' },
    { label: 'food ig', href: 'https://instagram.com/chateau_brian_d' },
  ];

  const pod = [
    { label: 'pod yt', href: 'https://www.youtube.com/@modernleveragepodcast' },
    { label: 'pod tt', href: 'https://tiktok.com/@modernleveragepodcast' },
  ];

  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-sm mx-auto space-y-8">
          <div className="flex flex-col items-center space-y-4 mt-8">
            <h1 className="text-4xl font-bold tracking-tight text-foreground italic">
              <span className="inline-block transition-all duration-300 hover:tracking-wide glow">
                doran<sup>alytics</sup>
              </span>
            </h1>
            
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-primary">socials</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[200px] gap-3 p-4 bg-popover">
                      {socials.map((item) => (
                        <li key={item.label}>
                          <NavigationMenuLink asChild>
                            <Link
                              href={item.href}
                              className="block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {item.label}
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-primary">podcast</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[200px] gap-3 p-4 bg-popover">
                      {pod.map((item) => (
                        <li key={item.label}>
                          <NavigationMenuLink asChild>
                            <Link
                              href={item.href}
                              className="block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {item.label}
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          <div className="flex flex-col items-center space-y-6">
            <h2 className="text-sm text-foreground">founded:</h2>
            <div className="flex flex-col space-y-8">
              <Link href="https://contentsquared.ai" target="_blank" rel="noopener noreferrer">
                <Image
                  src="/c2.png"
                  alt="Content Squared AI"
                  width={400}
                  height={250}
                  className="rounded-2xl hover:opacity-80 transition-opacity"
                />
              </Link>
              <Link href="https://www.dealauthor.com" target="_blank" rel="noopener noreferrer">
                <Image
                  src="/da.png"
                  alt="Deal Author"
                  width={400}
                  height={250}
                  className="rounded-2xl hover:opacity-80 transition-opacity"
                />
              </Link>
              <Link href="https://www.murj.ai" target="_blank" rel="noopener noreferrer">
                <Image
                  src="/murj.png"
                  alt="Murj AI"
                  width={400}
                  height={250}
                  className="rounded-2xl hover:opacity-80 transition-opacity"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}