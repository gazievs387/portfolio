'use client'


import { Button, LinkButton } from "@/UI/Button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/UI/Card"
import Tooltip from "@/UI/Tooltip"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { LuGithub } from "react-icons/lu"
import { MdOutlineEmail } from "react-icons/md"


export function Contacts() {
    useGSAP(() => {
        const pinGroupContent = gsap.utils.toArray(`.contacts-content`);

        gsap.set(pinGroupContent, {
            opacity: 0,
            scale: 0.5
        });

        pinGroupContent.forEach((e: any, index: number) => {
            ScrollTrigger.create({
                trigger: e,
                start: "top 80%",
                end: "bottom 40%",
                onEnter: () => gsap.to(e, { scale: 1, opacity: 1, duration: 1 }),
            });
        });
    })


    return (
        <section id="contacts" className="py-20 px-4 bg-muted/30">
            <div className="contacts-content max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-balance">Есть интересные предложения?</h2>
                
                <Card className="py-15">
                    <CardHeader className="text-center">
                        <CardTitle className="text-2xl">Контакты</CardTitle>
                        <CardDescription className="text-pretty">
                            Я всегда открыт для обсуждения новых проектов, креативных идей и перспективных возможностей 
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">

                            <Tooltip copyText="gazievs387@gmail.com">
                                <Button className="grow" size="lg">
                                    <MdOutlineEmail className="w-5 h-5 mr-2" />
                                    Отправить Email
                                </Button>
                            </Tooltip>
                            
                            <LinkButton size="lg" variant="outline" href={"https://github.com/gazievs387"} newTab>
                                    <LuGithub className="w-5 h-5 mr-2" />
                                    GitHub
                            </LinkButton>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </section>
    )
}
