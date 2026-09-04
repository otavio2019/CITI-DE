"use client";

import Image from "next/image";
import { useState } from "react";

const navigationLinks = [
    { label: "Programas", href: "#programas" },
    { label: "Serviços", href: "#servicos" },
    { label: "Sobre", href: "#sobre" },
    { label: "Contato", href: "#contato" },
];

export default function Header() {
    const [menuAberto, setMenuAberto] = useState(false);

  return (
        <header className="relative z-20 bg-[linear-gradient(to_right,#0867A8_22%,#032842_69%)] px-5 py-4 font-[family-name:var(--font-joan)] text-white">
            <div className="relative mx-auto flex max-w-6xl items-center gap-3 md:gap-5">
                {/* Identidade visual e link para o início da página. */}
                <a href="#inicio" className="flex shrink-0 items-center gap-3" aria-label="CiTI-DE início">
                    <Image
                        src="/icons/logo.png"
                        alt="Logo CiTI-DE"
                        width={40}
                        height={40}
                        className="h-10 w-10 rounded-full object-contain"
                    />
                    <span className="flex items-center gap-1 text-3xl font-bold tracking-tight">
                        <span className="text-[#ffffff]">CiTI</span>
                        <span className="text-[#FFB800]">-DE</span>
                        <span className="relative -top-1 hidden text-[9px] font-bold leading-none text-white/75 sm:inline">
                            Patos - PB
                        </span>
                    </span>
                </a>

                {/* Navegação para telas médias e grandes. */}
                <nav className="absolute left-1/2 hidden -translate-x-1/2 md:block" aria-label="Navegação principal">
                    <ul className="flex items-center gap-8 text-sm">
                        {navigationLinks.map((link) => (
                            <li key={link.href}>
                                <a href={link.href} className="transition hover:text-[#FFB800]">
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Acesso destacado ao portal, alinhado à direita. */}
                <a
                    href="#portal"
                    className="relative z-10 ml-auto shrink-0 rounded-full border border-white/40 px-2.5 py-1.5 text-xs font-medium transition hover:bg-white/10 md:px-4 md:py-2 md:text-sm"
                >
                    Acesso Portal <span className="text-[#FFB800]">↗</span>
                </a>

                {/* Botão de três traços que abre o menu exclusivo do mobile. */}
                <button
                    type="button"
                    className="flex h-10 w-10 shrink-0 flex-col items-center justify-center gap-1.5 rounded-md border border-white/40 md:hidden"
                    aria-label={menuAberto ? "Fechar menu" : "Abrir menu"}
                    aria-expanded={menuAberto}
                    onClick={() => setMenuAberto(!menuAberto)}
                >
                    <span className="h-0.5 w-5 bg-white" />
                    <span className="h-0.5 w-5 bg-white" />
                    <span className="h-0.5 w-5 bg-white" />
                </button>

                {menuAberto && (
                    <nav className="absolute right-0 top-full mt-2 w-52 rounded-lg bg-[#032842] p-3 shadow-xl md:hidden" aria-label="Menu mobile">
                        <ul className="flex flex-col text-base">
                            {navigationLinks.map((link) => (
                                <li key={link.href}>
                                    <a
                                        href={link.href}
                                        className="block rounded px-3 py-2 transition hover:bg-white/10"
                                        onClick={() => setMenuAberto(false)}
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                )}
            </div>
    </header>
  );
}