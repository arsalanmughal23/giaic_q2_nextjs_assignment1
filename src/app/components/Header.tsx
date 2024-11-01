import { MailIcon, PhoneIcon } from "lucide-react";
import Link from "next/link";

interface TYPE_HEADER {
    className?: string
}

export default function Header({ className }:TYPE_HEADER) {
    const mailtoMail:string = 'arsalanmughal23@gmail.com';
    const contactPhone:string = '+92 315 2929408';

    return (
        <header className={`${className ?? ''} header w-full flex justify-center p-5 border-b border-b-slate-100`}>
            <div className="container flex flex-wrap gap-2 justify-between">
                <div>
                    <h1>LOGO</h1>
                </div>
                <nav className="headerNavMenu">
                    <ul className="flex gap-2 justify-start">
                        <li><Link href={'/'} className="border border-zinc-100 btn">Home</Link></li>
                        <li><Link href={'/about'} className="border border-zinc-100 btn">About</Link></li>
                        <li><Link href={'/contact'} className="border border-zinc-100 btn">Contact</Link></li>
                        <li><Link href={'/services'} className="border border-zinc-100 btn">Services</Link></li>
                    </ul>
                </nav>
                <div>
                    <ul className="flex flex-wrap gap-4 justify-start">
                        <li>
                            <Link href={`mailto:${mailtoMail}`} className="flex items-center gap-2 text-sm w-max">
                                <div>
                                    <MailIcon size={24}/>
                                </div>
                                <p>{ mailtoMail }</p>
                                </Link>
                            </li>
                        <li>
                            <Link href={`tel:${contactPhone}`} className="flex items-center gap-2 text-sm w-max">
                                <div>
                                    <PhoneIcon size={24}/>
                                </div>
                                <p>{ contactPhone }</p>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    )
}