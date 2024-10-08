import Link from "next/link";

export default function Header() {
    return (
        <header className="flex p-5 border-b border-b-slate-100">
            <div className="w-2/12">
                <h1>LOGO</h1>
            </div>
            <nav className="w-8/12">
                <ul className="flex gap-2 justify-center">
                    <li className="border border-zinc-100 px-3 rounded"><Link href={'/'}>Home</Link></li>
                    <li className="border border-zinc-100 px-3 rounded"><Link href={'/about'}>About</Link></li>
                    <li className="border border-zinc-100 px-3 rounded"><Link href={'/contact'}>Contact</Link></li>
                    <li className="border border-zinc-100 px-3 rounded"><Link href={'/services'}>Services</Link></li>
                </ul>
            </nav>
            <div className="w2/12"></div>
        </header>
    )
}