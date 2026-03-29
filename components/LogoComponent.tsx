"use client";

import Link from "next/link";
import Image from "next/image";

export default function LogoComponent() {
    return (
        <Link href="/" className="flex items-center gap-2.5 relative w-[200px] h-[50px]">
            <Image
                src="/img/quantajs_light.png"
                alt="QuantaJS logo"
                fill
                className="object-contain dark:hidden"
            />
            <Image
                src="/img/quantajs_dark.png"
                alt="QuantaJS logo"
                fill
                className="object-contain hidden dark:block"
            />
        </Link>
    );
}
