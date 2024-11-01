
interface TYPE_FOOTER {
    className?: string
}
    
export default function Footer({ className }:TYPE_FOOTER) {
    return (
        <footer className={`${className ?? ''} flex p-5 bottom-0 fixed justify-center w-full border-t border-t-slate-100 bg-background`} >
            <div className="container text-center">Next Js Assignment 2024</div>
        </footer>
    )
}