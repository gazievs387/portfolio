"use client";

import { useState, useRef, useEffect, ReactNode, MouseEvent } from "react";
import { LuClipboardCopy, LuCheck } from "react-icons/lu";


interface TooltipProps {
  copyText: string;
  children: ReactNode;
  hideDelay?: number;
  showDelay?: number;
}


export default function Tooltip({
  copyText,
  children,
  hideDelay = 400,
  showDelay = 50,
}: TooltipProps) {
    const [visible, setVisible] = useState(false);
    const [copied, setCopied] = useState(false);

    const hideTimer = useRef<NodeJS.Timeout | null>(null);
    const showTimer = useRef<NodeJS.Timeout | null>(null);
    const containerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        return () => {
        if (hideTimer.current) clearTimeout(hideTimer.current);
        if (showTimer.current) clearTimeout(showTimer.current);
        };
    }, []);

    const handleEnter = () => {
        if (hideTimer.current) clearTimeout(hideTimer.current);
        showTimer.current = setTimeout(() => setVisible(true), showDelay);
    };

    const handleLeave = () => {
        if (showTimer.current) clearTimeout(showTimer.current);
        hideTimer.current = setTimeout(() => setVisible(false), hideDelay);
    };

    const handleTooltipEnter = () => {
        if (hideTimer.current) clearTimeout(hideTimer.current);
    };

    const handleTooltipLeave = () => {
        hideTimer.current = setTimeout(() => setVisible(false), hideDelay);
    };

    const copyToClipboard = async () => {
        try {
            await navigator.clipboard.writeText(copyText);
            setCopied(true);
            setTimeout(() => setCopied(false), 1400);
        } catch (err) {

        }
    };


    return (
        <div
        ref={containerRef}
        className="relative inline-flex"
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
        onFocus={handleEnter}
        onBlur={handleLeave}
        tabIndex={0}
        aria-haspopup="true"
        aria-expanded={visible}
        >
            {children}

            <div
                onMouseEnter={handleTooltipEnter}
                onMouseLeave={handleTooltipLeave}
                role="tooltip"
                className={`absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2
                            bg-muted text-foreground text-sm rounded-md shadow-lg px-5 py-2
                            flex items-center justify-between gap-10 z-20 transition-opacity duration-150
                            ${visible ? "opacity-100 visible" : "opacity-0 invisible"}`}
                style={{ minWidth: 160 }}
            >
                <span className="max-w-40 text-base">{copyText}</span>

                <button
                    onClick={(e) => {
                        e.stopPropagation();
                        copyToClipboard();
                    }}
                    className="p-1 rounded-md hover:bg-gray-700 transition cursor-pointer"
                    aria-label="Скопировать email"
                    type="button"
                >
                    {copied ? (
                        <LuCheck className="w-5 h-5 text-green-400" />
                    ) : (
                        <LuClipboardCopy className="w-5 h-5" />
                    )}
                </button>
            </div>
        </div>
    );
}
