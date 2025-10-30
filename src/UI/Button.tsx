import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import Link from 'next/link'
import { cn } from "@/utils/cn"
import { UrlObject } from 'url'


const buttonVariants = cva(
    "inline-flex items-center justify-center gap-2 whitespace-nowrap cursor-pointer rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
    {
        variants: {
        variant: {
            default: 'bg-primary text-primary-foreground hover:bg-primary/90',
            outline: 'border border-input bg-input/30 shadow-xs hover:bg-accent hover:text-accent-foreground'
        },
        size: {
            default: 'h-9 px-4 py-2 has-[>svg]:px-3',
            sm: 'h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5',
            lg: 'h-10 rounded-md px-6 has-[>svg]:px-4'
        },
        },
        defaultVariants: {
            variant: 'default',
            size: 'default',
        },
    },
)


type ButtonProps = React.ComponentProps<'button'> & VariantProps<typeof buttonVariants>

export function Button({className, variant, size, ...props}: ButtonProps) {
    return (
        <button
            className={cn(buttonVariants({variant, size, className}))}
            {...props}
        />
    )
}


type LinkButtonProps = Omit<React.ComponentProps<'a'>, "href"> & VariantProps<typeof buttonVariants> & {href?: UrlObject | string, newTab?: boolean}

export function LinkButton({ className, variant, size, href, newTab=false, ...props}: LinkButtonProps) {
    return (
        <Link
            className={cn(buttonVariants({ variant, size, className }))}
            href={href || ""}
            prefetch={false}
            {...newTab && {target: "_blank", rel: "noopener noreferrer"}}
            {...props}
        />
    )
}
