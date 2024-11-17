import Image from "next/image";
import Link from "next/link";
import SocialMedia from "@/app/ui/social-media";

export default function Sidebar() {
    return (
      <>
        <aside className="md:p-4 space-y-2 md:space-y-4 rounded flex flex-col items-center mx-auto">
        <div className="font-bold text-center text-2xl">Alain Vaucher</div>
        <div className="w-16 h-16 md:w-32 md:h-32 rounded-full overflow-hidden">
            <Image
            src="/alain_vaucher.jpg"
            alt="Alain Vaucher"
            width={128}
            height={128}
            className="object-cover"
            />
        </div>
        <SocialMedia />
        </aside>
      </>
    );
}