import { Badge } from "@/UI/Badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/UI/Card";
import { LinkButton } from "@/UI/Button";
import { LuExternalLink, LuGithub } from "react-icons/lu";


const projects = [
  {
    title: "Revain",
    description: "Платформа отзывов на основе технологии блокчейна",
    image: "/revain-image.jpeg",
    tags: ["Next.js", "TypeScript", "Scss", "RTK", "RTK Query", "Websocket", "Gitlab", "Storybook"],
    liveUrl: "https://revain.org/"
  },
  {
    title: "AI Chat",
    description: "Приложение AI-чата",
    image: "/aichat-image.jpeg",
    tags: ["React", "Typescript", "Webpack", "MUI", "Feature-Sliced Design", "Google Gen AI", "RTK"],
    liveUrl: "https://aichat.gaziev-s.ru",
    githubUrl: "https://github.com/gazievs387/ai-chat",
    hasCode: true
  },
  {
    title: "Idea",
    description: "Социальная сеть. Лента идей, Профиль, Редактор статей, OAuth2 аутентификация",
    image: "/idea-image.jpeg",
    tags: ["React", "Typescript", "CSS Modules", "RTK", "RTK Query", "OAuth2"],
    liveUrl: "https://idea.gaziev-s.ru",
  },
  {
    title: "Исторические даты",
    description: "Анимированные исторические даты",
    image: "/historicaldates-image.jpeg",
    tags: ["React", "Typescript", "Webpack", "Scss"],
    liveUrl: "https://historical-dates.gaziev-s.ru",
    githubUrl: "https://https://github.com/gazievs387/historical-dates",
    hasCode: true
  },
];

export function Projects() {
    return (
        <section id="projects" className="py-20 px-4">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-balance">
                    Мои проекты
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project) => (
                        <Card key={project.title} className="overflow-hidden group">
                            <div className="relative aspect-video overflow-hidden bg-muted">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                            <CardHeader>
                                <CardTitle className="text-balance">{project.title}</CardTitle>
                                <CardDescription className="text-pretty">
                                {project.description}
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="flex flex-wrap gap-2">
                                {project.tags.map((tag) => (
                                    <Badge key={tag} variant="outline">
                                    {tag}
                                    </Badge>
                                ))}
                                </div>
                                <div className="flex gap-2">
                                <LinkButton
                                    size="sm"
                                    variant="default"
                                    href={project.liveUrl}
                                    newTab
                                >
                                    <LuExternalLink className="w-4 h-4 mr-2" />
                                        Смотреть
                                    </LinkButton>
                                    {project.hasCode && <LinkButton
                                        size="sm"
                                        variant="outline"
                                        href={project.githubUrl}
                                        newTab
                                    >
                                        <LuGithub className="w-4 h-4 mr-2" />
                                        Код
                                    </LinkButton>}
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
