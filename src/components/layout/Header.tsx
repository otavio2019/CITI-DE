"use client";

import Image from "next/image";
import { useState } from "react";
import { navigationLinks, programLinks, serviceLinks } from "@/lib/site-content";
import { FiArrowUpRight, FiChevronDown, FiChevronUp, FiMenu, FiX } from "react-icons/fi";

export default function Header() {
	// Controla o menu geral e o submenu de programas separadamente.
	const [menuAberto, setMenuAberto] = useState(false);
	const [programasAberto, setProgramasAberto] = useState(false);
	const [servicosAberto, setServicosAberto] = useState(false);

	function fecharMenus() {
		setMenuAberto(false);
		setProgramasAberto(false);
		setServicosAberto(false);
	}

	return (
		<header className="relative z-20 border-b border-white/15 bg-[linear-gradient(to_right,#0867A8_22%,#032842_69%)] px-5 py-4 text-white">
			<div className="relative mx-auto flex max-w-6xl items-center gap-3 md:gap-5">
				{/* Marca: volta ao início sem recarregar a página. */}
				<a href="#inicio" className="flex shrink-0 items-center gap-3" aria-label="CiTI-DE início">
					<Image src="/icons/logo.png" alt="Logo CiTI-DE" width={40} height={40} className="h-10 w-10 rounded-full object-contain" />
					<span className="flex items-center gap-1 text-3xl font-bold tracking-tight">
						<span className="font-[family-name:var(--font-joan)] text-white">CiTI</span>
						<span className="font-[family-name:var(--font-joan)] text-[#FFB800]">-DE</span>
						<span className="relative -top-1 hidden text-[9px] font-bold leading-none text-white/75 sm:inline">Patos - PB</span>
					</span>
				</a>

				{/* Navegação desktop: Serviços e Programas abrem listas de acesso rápido. */}
				<nav className="absolute left-1/2 hidden -translate-x-1/2 md:block" aria-label="Navegação principal">
					<ul className="flex items-center gap-8 text-sm">
						<li className="relative">
							<button type="button" onClick={() => setProgramasAberto(!programasAberto)} aria-expanded={programasAberto} className="flex items-center gap-1 transition hover:text-[#FFB800] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#FFB800]">
								Programas {programasAberto ? <FiChevronUp aria-hidden="true" /> : <FiChevronDown aria-hidden="true" />}
							</button>
							{programasAberto && (
								<div className="absolute left-0 top-full mt-4 w-56 rounded-xl bg-white p-2 text-[#536b88] shadow-xl">
									{programLinks.map((program) => (
										<a key={program.href} href={program.href} onClick={fecharMenus} className="block rounded-lg px-4 py-3 transition hover:bg-[#f1f5f8] hover:text-[#032842] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#0867A8]">{program.label}</a>
									))}
								</div>
							)}
						</li>
						<li className="relative">
							<button type="button" onClick={() => setServicosAberto(!servicosAberto)} aria-expanded={servicosAberto} className="flex items-center gap-1 transition hover:text-[#FFB800] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#FFB800]">
								Serviços {servicosAberto ? <FiChevronUp aria-hidden="true" /> : <FiChevronDown aria-hidden="true" />}
							</button>
							{servicosAberto && (
								<div className="absolute left-1/2 top-full mt-4 w-64 -translate-x-1/2 rounded-xl bg-white p-2 text-[#536b88] shadow-xl">
									{serviceLinks.map((service) => (
										<a key={service.href + service.label} href={service.href} onClick={fecharMenus} className="block rounded-lg px-4 py-3 transition hover:bg-[#f1f5f8] hover:text-[#032842] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#0867A8]">{service.label}</a>
									))}
								</div>
							)}
						</li>
						{navigationLinks.map((link) => (
							<li key={link.href}><a href={link.href} className="transition hover:text-[#FFB800] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#FFB800]">{link.label}</a></li>
						))}
					</ul>
				</nav>

				<a href="https://citide.patos.pb.gov.br/" className="relative z-10 ml-auto inline-flex shrink-0 items-center gap-1 rounded-full border border-[#FFB800]/70 px-2.5 py-1.5 text-xs font-medium transition hover:bg-[#FFB800] hover:text-[#032842] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#FFB800] md:px-4 md:py-2 md:text-sm">Acesso Portal oficial <FiArrowUpRight aria-hidden="true" /></a>

				{/* Botão mobile: abre uma única navegação com o submenu interno. */}
				<button type="button" className="flex h-10 w-10 shrink-0 flex-col items-center justify-center gap-1.5 rounded-md border border-white/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#FFB800] md:hidden" aria-label={menuAberto ? "Fechar menu" : "Abrir menu"} aria-expanded={menuAberto} onClick={() => setMenuAberto(!menuAberto)}>
					{menuAberto ? <FiX aria-hidden="true" size={21} /> : <FiMenu aria-hidden="true" size={21} />}
				</button>

				{menuAberto && (
					<nav className="absolute right-0 top-full mt-2 w-56 rounded-lg bg-[#032842] p-3 shadow-xl md:hidden" aria-label="Menu mobile">
						<ul className="flex flex-col text-base">
							<li>
								<button type="button" onClick={() => setProgramasAberto(!programasAberto)} aria-expanded={programasAberto} className="flex w-full items-center justify-between rounded px-3 py-2 text-left transition hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#FFB800]">
									<span>Programas</span>{programasAberto ? <FiChevronUp aria-hidden="true" /> : <FiChevronDown aria-hidden="true" />}
								</button>
								{programasAberto && (
									<ul className="mt-1 border-l border-white/20 pl-3 text-sm text-white/80">
										{programLinks.map((program) => <li key={program.href}><a href={program.href} onClick={fecharMenus} className="block rounded px-3 py-2 hover:bg-white/10 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#FFB800]">{program.label}</a></li>)}
									</ul>
								)}
							</li>
							<li>
								<button type="button" onClick={() => setServicosAberto(!servicosAberto)} aria-expanded={servicosAberto} className="flex w-full items-center justify-between rounded px-3 py-2 text-left transition hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#FFB800]">
									<span>Serviços</span>{servicosAberto ? <FiChevronUp aria-hidden="true" /> : <FiChevronDown aria-hidden="true" />}
								</button>
								{servicosAberto && (
									<ul className="mt-1 border-l border-white/20 pl-3 text-sm text-white/80">
										{serviceLinks.map((service) => <li key={service.href + service.label}><a href={service.href} onClick={fecharMenus} className="block rounded px-3 py-2 hover:bg-white/10 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#FFB800]">{service.label}</a></li>)}
									</ul>
								)}
							</li>
							{navigationLinks.map((link) => <li key={link.href}><a href={link.href} onClick={fecharMenus} className="block rounded px-3 py-2 transition hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#FFB800]">{link.label}</a></li>)}
						</ul>
					</nav>
				)}
			</div>
		</header>
	);
}
