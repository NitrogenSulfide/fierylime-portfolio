"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { siteConfig } from '@/data/site';

export default function PageLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();
    return (
        <>
            <header className="border-b border-neutral-800">
                <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
                    <Link href="/" className="font-medium">
                        {siteConfig.ownerName}
                    </Link>

                    <div className="flex gap-6 text-sm text-neutral-400">
                        <Link
                            href="/resume"
                            className={
                                pathname === "/resume"
                                    ? "text-white"
                                    : "text-neutral-400 hover:text-white"
                            }
                        >
                            Resume
                        </Link>

                        <Link
                            href="/projects"
                            className={
                                pathname === "/projects"
                                    ? "text-white"
                                    : "text-neutral-400 hover:text-white"
                            }
                        >
                            Projects
                        </Link>

                        <Link
                            href="/photography"
                            className={
                                pathname === "/photography"
                                    ? "text-white"
                                    : "text-neutral-400 hover:text-white"
                            }
                        >
                            Photography
                        </Link>

                        <Link
                            href="/piano"
                            className={
                                pathname === "/piano"
                                    ? "text-white"
                                    : "text-neutral-400 hover:text-white"
                            }
                        >
                            Piano
                        </Link>
                    </div>
                </nav>
            </header>

            <main className="mx-auto max-w-5xl px-6 py-20">
                {children}
            </main>
        </>
    );
}