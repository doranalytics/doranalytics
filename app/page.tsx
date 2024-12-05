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
import { useTheme } from "next-themes"
import { Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Home() {
  const socials = [
    { label: 'ig', href: 'https://instagram.com/doranalytics' },
    { label: 'tt', href: 'https://tiktok.com/@doranalytics' },
    { label: 'x', href: 'https://twitter.com/doranalytics' },
    { label: 'li', href: 'https://www.linkedin.com/in/brian-doran-438ab1102' },
    { label: 'git', href: 'https://github.com/doranalytics' },
    { label: 'food ig', href: 'https://instagram.com/chateau_brian_d' },
  ];

  const podcast = [
    { label: 'pod yt', href: 'https://www.youtube.com/@modernleveragepodcast' },
    { label: 'pod sptfy', href: 'https://open.spotify.com/show/2Dfs6yVIsD2A6UmvkAfkKK' },
    { label: 'pod ig', href: 'https://www.instagram.com/modernleveragepodcast' },
    { label: 'pod tt', href: 'https://tiktok.com/@modernleveragepodcast' },
  ];

  const { theme, setTheme } = useTheme()

  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-md space-y-8">
          <div className="flex justify-between items-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground">
              doranalytics
            </h1>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            </Button>
          </div>

          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href="https://www.contentsquared.ai" passHref legacyBehavior>
                  <NavigationMenuLink className="text-primary hover:text-primary/80">
                    [content]<sup>squared</sup>
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/consulting" passHref legacyBehavior>
                  <NavigationMenuLink className="text-primary hover:text-primary/80">
                    consulting
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

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
                    {podcast.map((item) => (
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
      </div>
    </main>
  );
}