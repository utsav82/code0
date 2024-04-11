import Link from "next/link";

export function MainNav() {
    return (
        <div className="flex items-center justify-between w-full">
            <Link href="/" className="items-center flex">
                <img
                    src="/logo.png"
                    alt="logo"
                    className="w-8 md:w-10 mx-2 h-auto rounded-lg"
                    width={100}
                    height={100}
                />
                <span className="font-extrabold sm:text-xl">Code0</span>
            </Link>
            <div className="flex items-center justify-center gap-3">
                <nav className="flex gap-6">
                    <Link
                        href="/submit"
                        className="font-medium text-sm"
                    >
                        Submit Code
                    </Link>
                    <Link
                        href="/"
                        className="font-medium text-sm"
                    >
                        Submissions
                    </Link>
                </nav>
            </div>
        </div>
    );
}
