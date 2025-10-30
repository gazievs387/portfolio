import { Badge } from "@/UI/Badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/UI/Card";


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
    return (
        <section className="py-20 px-4 bg-muted/30">
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
