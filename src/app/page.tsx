import TypewriterText from "@/components/TypewriterText";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-gradient-to-r min-h-screen grainy from-rose-100 to-teal-100 ">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <h1 className="font-semibold text-6xl text-center">Take <span className="font-bold text-green-500">efficient notes</span> with AI assistance.
        </h1>
        <div className="mt-4"> </div>
        {/* Typewriter effect tagline  */}
        <h2 className="font-semibold text-3xl text-center text-slate-700">
          <TypewriterText />
        </h2>
        {/* Bigger margin div */}
        <div className="mt-8"> </div>
          <div className="flex justify-center">
            <Link href='/dashboard'>
              <Button className="--secondary">Get Started</Button>
            </Link>
          </div>
        {/* End of header div: */}
      </div>
    </div>
  );
}
