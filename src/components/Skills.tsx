'use client';

import { Badge } from "@/UI/Badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/UI/Card";
import { isMdMediaQuery } from "@/utils/isMdMediaQuery";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger, useGSAP);


const skillCategories = [
  {
    title: "Frontend",
    description: "Создание современных пользовательских интерфейсов",
    skills: ["React", "Next.js", "TypeScript", "JavaScript", "HTML5", "CSS3", "RTK"],
  },
  {
    title: "Стилизация",
    description: "Создание красивого дизайна",
    skills: [
        "Tailwind CSS",
        "Scss",
        "CSS Modules",
        "Material UI (MUI)",
        "CSS Flexbox & Grid"
    ],
  },
  {
    title: "Инструменты & Другое",
    description: "Рабочий процесс и инструменты разработки",
    skills: [
        "Git",
        "Webpack",
        "Vite",
        "Docker",
        "Jest",
        "Vitest",
        "React Testing Library",
        "ESLint",
        "Prettier"
    ],
  },
];


export function Skills() {
    useGSAP(() => {
        const isMdMedia = isMdMediaQuery()
        
        const pinGroupContent = gsap.utils.toArray(`.skills ${isMdMedia ? "div[data-slot=card]" : "> *"}`);

        gsap.set(pinGroupContent, {
            opacity: 0,
            y: 100
        });

        pinGroupContent.forEach((e: any, index: number) => {
            ScrollTrigger.create({
                trigger: e,
                start: "top 80%",
                end: "bottom 40%",
                onEnter: () => gsap.to(e, { delay: isMdMedia ? index * 0.2 : 0, y: 0, opacity: 1, duration: 0.8 }),
                onLeaveBack: () => !isMdMedia && gsap.to(e, { y: 100, opacity: 0, duration: 0.4 })
            });
        });
    })


    return (
        <section className="skills py-20 px-4 bg-muted/30">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-balance">
                    Технологии & Стек
                </h2>
                <div className="grid md:grid-cols-3 gap-6">
                {skillCategories.map((category) => (
                    <Card key={category.title}>
                    <CardHeader>
                        <CardTitle>{category.title}</CardTitle>
                        <CardDescription>{category.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="flex flex-wrap gap-2">
                            {category.skills.map((skill) => (
                                <Badge key={skill} variant="secondary">
                                    {skill}
                                </Badge>
                            ))}
                        </div>
                    </CardContent>
                    </Card>
                ))}
                </div>
            </div>
        </section>
    );
}
