import Image from "next/image";

export default function HeroSection() {
    return (
        <div className="flex justify-around items-center min-h-60 py-10 border-b">  
            <div>
                <h1 className="text-6xl py-3">Hero Section</h1>
                <p className="float-right text-xl">My Next Js 2nd Assignment</p>
            </div>
            <div>
                <Image
                    src={"/media/placeholder.svg"}
                    width={250}
                    height={250}
                    className="rounded-full overflow-hidden"
                    alt="Hero Section Banner Image"
                />
            </div>
        </div>
    )
}