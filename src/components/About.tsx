import Link from 'next/link';
import React from 'react';


export function About() {
    return (
        <section className='max-w-4xl text-left py-20 px-4 mx-auto'>
            <h1 className='text-3xl text-foreground text-balance mb-8'>Обо меня</h1>

            <div className='space-y-4'>
                <p className='text-lg text-muted-foreground text-pretty leading-relaxed'>
                    Меня зовут Саид Газиев. Я начал изучать информационные технологии и программирование 4 года назад
                </p>

                <p className='text-lg text-muted-foreground text-pretty leading-relaxed'>
                    Последние 2 года работал на позиции фронтенд-разработчика(React, Next.js, Typescript, Tailwind CSS, Scss, RTK, RTK Query) в российском подразделении компании <Link className='text-accent hover:text-accent/60 underline underline-offset-3' href={"https://revain.org"} target="_blank" rel="noopener noreferrer">Revain</Link>. Сначала занимался поддержкой и развитием внутренних продуктов компании - информационная панель и разработка системы коммуникации между сотрудниками и корпоративными клиентами.  Потом работал над редизайном UI публичной части сайта. За два года прошел путь от выполнения первоначальных задач и написания тестов до самостоятельного ведения полного цикла разработки
                </p>

                <p className='text-lg text-muted-foreground text-pretty leading-relaxed'>
                    Помимо фронтенд стека, также достаточно неплохо владею такими технологиями, как Python (Django), Docker, Linux (Debian, Ubuntu), Apache, Nginx, S3. То есть, имеются знания в разных областях разработки и поддержки работы приложения
                </p>
            </div>
        </section>
    )
}
