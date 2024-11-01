import Image from "next/image";

export default function HeroSection() {
    return (
        <div className="heroSection w-full flex justify-center p-5 border-b">  
            <div className="container">
                <div className="inner flex items-center justify-between min-h-60 py-10">
                    {/* <div className="md:w-6/12"> */}
                    <div className="left max-w-[800px]">
                        <h1 className="text-6xl py-3">Arsalan Mughal</h1>
                        <p className="float-right text-xl">Full Stack Developer with 6+ years in backend development. Skilled in creating high-quality web platform and mobile app APIs.
                        Proficient in managing tasks and timelines, and leading projects to successful completion through effective teamwork</p>
                    </div>
                    {/* <div className="md:w-auto"> */}
                    <div className="right min-w-[350px]">
                        <Image
                            src={"/media/placeholder.svg"}
                            width={250}
                            height={250}
                            className="rounded-full overflow-hidden"
                            alt="Hero Section Banner Image"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}