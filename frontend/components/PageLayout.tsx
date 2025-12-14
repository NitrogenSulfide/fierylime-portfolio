import Link from "next/link";

export default function PageLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <>
            <header className="border-b border-neutral-800">
                <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
                    <Link href="/" className="font-medium">
                        Your Name
                    </Link>

                    <div className="flex gap-6 text-sm text-neutral-400">
                        <Link href="/resume" className="hover:text-white">Resume</Link>
                        <Link href="/projects" className="hover:text-white">Projects</Link>
                        <Link href="/photography" className="hover:text-white">Photography</Link>
                        <Link href="/piano" className="hover:text-white">Piano</Link>
                    </div>
                </nav>
            </header>

            <main className="mx-auto max-w-5xl px-6 py-20">
                {children}
            </main>
        </>
    );
}