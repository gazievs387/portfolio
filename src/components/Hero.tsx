import { LinkButton } from "@/UI/Button";
import Tooltip from "@/UI/Tooltip";
import Link from "next/link";
import { LuArrowDown, LuGithub } from "react-icons/lu";
import { MdOutlineEmail } from "react-icons/md";


export function Hero() {
    return (
        <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-4">
            <h1 className="text-foreground text-5xl md:text-7xl font-bold text-balance mb-4">
                Саид Газиев
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground text-balance mb-8">
                Frontend-разработчик React, Next.js
            </p>

            <div className="flex justify-center items-center text-foreground gap-3 mb-8">
                <LinkButton size="lg" href="#projects">
                    Мои Проекты
                </LinkButton>

                <LinkButton variant="outline" size="lg" href="#contacts">
                    Контакты
                </LinkButton>
            </div>

            <div className="flex justify-center items-center gap-5 mt-8">
                <Link
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground"
                    href={"https://github.com/gazievs387"}
                >
                    <LuGithub size={25} />
                </Link>

                <Tooltip copyText="gazievs387@gmail.com">
                    <MdOutlineEmail 
                        className="text-muted-foreground hover:text-foreground cursor-pointer" 
                        size={25} 
                    />
                </Tooltip>
            </div>

            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground animate-bounce">
                <LuArrowDown size={25} />
            </div>
        </section>
    )
}
