import Link from "next/link";

export default function Header() {
    return (
        <header className="flex p-5 border-b border-b-slate-100">
            <div className="w-2/12">
                <h1>LOGO</h1>
            </div>
            <nav className="w-8/12">
                <ul className="flex gap-2 justify-center">
                    <li><Link href={'/'} className="border border-zinc-100 px-3 py-1 rounded">Home</Link></li>
                    <li><Link href={'/about'} className="border border-zinc-100 px-3 py-1 rounded">About</Link></li>
                    <li><Link href={'/contact'} className="border border-zinc-100 px-3 py-1 rounded">Contact</Link></li>
                    <li><Link href={'/services'} className="border border-zinc-100 px-3 py-1 rounded">Services</Link></li>
                </ul>
            </nav>
            <div className="w2/12"></div>
        </header>
    )
}