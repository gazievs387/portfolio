import { Button, LinkButton } from "@/UI/Button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/UI/Card"
import Tooltip from "@/UI/Tooltip"
import { LuGithub } from "react-icons/lu"
import { MdOutlineEmail } from "react-icons/md"


export function Contacts() {
    return (
        <section id="contacts" className="py-20 px-4 bg-muted/30">
            <div className="max-w-4xl mx-auto">
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

                        
                        {/* <div className="text-center text-sm text-muted-foreground pt-4">
                            <p>© 2025 Frontend Developer Portfolio. Built with Next.js and Tailwind CSS.</p>
                        </div> */}
                    </CardContent>
                </Card>
            </div>
        </section>
    )
}
