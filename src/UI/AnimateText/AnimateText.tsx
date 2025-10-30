'use client'
import { useGSAP } from '@gsap/react';
import React, { PropsWithChildren } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import "./AnimateText.css"


gsap.registerPlugin(ScrollTrigger, SplitText, useGSAP);


export function AnimateText({children}: PropsWithChildren) {
    useGSAP(() => {
        const split = new SplitText("div[data-animate] p", { type: "lines" });

        split.lines.forEach((target) => {
            gsap.to(target, {
                backgroundPositionX: 0,
                ease: "none",
                scrollTrigger: {
                    trigger: target,
                    scrub: 1,
                    start: "top center+=150",
                    end: "bottom center+=150"
                }
            });
        });
    })


    return (
        <div data-animate>
            {children}
        </div>
    )
}
