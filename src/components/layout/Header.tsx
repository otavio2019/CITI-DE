"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { navigationLinks, programLinks, serviceLinks } from "@/lib/site-content";
import { FiArrowUpRight, FiChevronDown, FiChevronUp, FiMenu, FiX } from "react-icons/fi";

/* -------------------------------------------------------------------------- */
/* Header do portal                                                           */
/* - Marca / logo                                                             */
/* - Menu desktop                                                             */
/* - Botão de acesso oficial                                                  */
/* - Menu mobile                                                              */
/* -------------------------------------------------------------------------- */
export default function Header() {
	/* ---------------------------------------------------------------------- */
	/* 1) Estado dos menus                                                    */
	/* ---------------------------------------------------------------------- */
	const [menuAberto, setMenuAberto] = useState(false);
	const [programasAberto, setProgramasAberto] = useState(false);
	const [servicosAberto, setServicosAberto] = useState(false);

	/* ---------------------------------------------------------------------- */
	/* 2) Helpers de menu                                                     */
	/* ---------------------------------------------------------------------- */
	function fecharMenus() {
		setMenuAberto(false);
		setProgramasAberto(false);
		setServicosAberto(false);
	}

	// Fecha menus com a tecla Escape (acessibilidade).
	useEffect(() => {
		function handleEscape(event: KeyboardEvent) {
			if (event.key === "Escape") fecharMenus();
		}

		document.addEventListener("keydown", handleEscape);
		return () => document.removeEventListener("keydown", handleEscape);
	}, []);

	/* ---------------------------------------------------------------------- */
	/* 3) Render do header                                                    */
	/* ---------------------------------------------------------------------- */
	return (
		<header className="relative z-20 border-b border-white/15 bg-[linear-gradient(to_right,#0867A8_22%,#032842_69%)] px-5 py-5 text-white md:px-6 md:py-6">
			<div className="relative mx-auto flex max-w-7xl items-center gap-3 md:gap-6">

				{/* ---------------------------------------------------------- */}
				{/* 3.1) Marca / logo                                         */}
				{/* ---------------------------------------------------------- */}
				<a href="#inicio" className="flex shrink-0 items-center gap-3 md:gap-4" aria-label="CiTI-DE início">
					<Image
						src="/icons/logo.png"
						alt="Logo CiTI-DE"
						width={52}
						height={52}
						className="h-12 w-12 rounded-full object-contain md:h-14 md:w-14"
					/>
					<span className="flex items-center gap-1 text-[1.8rem] font-bold tracking-tight md:text-[2.2rem]">
						<span className="font-[family-name:var(--font-joan)] text-white">CiTI</span>
						<span className="font-[family-name:var(--font-joan)] text-[var(--citi-yellow)]">-DE</span>
						<span className="relative -top-1 hidden text-[9px] font-bold leading-none text-white/75 sm:inline">
							Patos - PB
						</span>
					</span>
				</a>

				{/* ---------------------------------------------------------- */}
				{/* 3.2) Navegação desktop                                    */}
				{/* ---------------------------------------------------------- */}
				<nav className="absolute left-1/2 hidden -translate-x-1/2 md:block" aria-label="Navegação principal">
					<ul className="flex items-center gap-7 text-sm md:text-[0.95rem]">

						{/* Programas (dropdown) */}
						<li className="relative">
							<button
								type="button"
								onClick={() => setProgramasAberto(!programasAberto)}
								aria-expanded={programasAberto}
								className="flex items-center gap-1 transition hover:text-[var(--citi-yellow)]"
							>
								Programas {programasAberto ? <FiChevronUp aria-hidden="true" /> : <FiChevronDown aria-hidden="true" />}
							</button>

							{programasAberto && (
								<div className="absolute left-0 top-full mt-4 w-56 rounded-xl border border-[var(--citi-blue-soft)] bg-[var(--citi-surface)] p-2 text-[var(--citi-text-muted)] shadow-xl">
									{programLinks.map((program) => (
										<a
											key={program.href}
											href={program.href}
											onClick={fecharMenus}
											className="block rounded-lg px-4 py-3 transition hover:bg-[var(--citi-blue-soft)] hover:text-[var(--citi-navy)]"
										>
											{program.label}
										</a>
									))}
								</div>
							)}
						</li>

						{/* Serviços (dropdown) */}
						<li className="relative">
							<button
								type="button"
								onClick={() => setServicosAberto(!servicosAberto)}
								aria-expanded={servicosAberto}
								className="flex items-center gap-1 transition hover:text-[var(--citi-yellow)]"
							>
								Serviços {servicosAberto ? <FiChevronUp aria-hidden="true" /> : <FiChevronDown aria-hidden="true" />}
							</button>

							{servicosAberto && (
								<div className="absolute left-1/2 top-full mt-4 w-64 -translate-x-1/2 rounded-xl border border-[var(--citi-blue-soft)] bg-[var(--citi-surface)] p-2 text-[var(--citi-text-muted)] shadow-xl">
									{serviceLinks.map((service) => (
										<a
											key={service.href + service.label}
											href={service.href}
											onClick={fecharMenus}
											className="block rounded-lg px-4 py-3 transition hover:bg-[var(--citi-blue-soft)] hover:text-[var(--citi-navy)]"
										>
											{service.label}
										</a>
									))}
								</div>
							)}
						</li>

						{/* Links simples (Sobre, Serviços âncora, Programas âncora etc.) */}
						{navigationLinks.map((link) => (
							<li key={link.href}>
								<a href={link.href} className="transition hover:text-[var(--citi-yellow)]">
									{link.label}
								</a>
							</li>
						))}
					</ul>
				</nav>

				{/* ---------------------------------------------------------- */}
				{/* 3.3) Botão de acesso ao portal oficial                    */}
				{/* ---------------------------------------------------------- */}
				<a
					href="https://citide.patos.pb.gov.br/painel/login"
					className="relative z-10 ml-auto hidden shrink-0 items-center gap-1 rounded-full border border-[#FFB800]/70 px-2.5 py-1.5 text-xs font-medium transition hover:bg-[#FFB800] hover:text-[#032842] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#FFB800] sm:inline-flex md:px-5 md:py-2.5 md:text-sm"
				>
					Acesso Portal oficial <FiArrowUpRight aria-hidden="true" />
				</a>

				{/* ---------------------------------------------------------- */}
				{/* 3.4) Botão do menu mobile                                 */}
				{/* ---------------------------------------------------------- */}
				<button
					type="button"
					className="flex h-10 w-10 shrink-0 flex-col items-center justify-center gap-1.5 rounded-md border border-white/40 md:hidden"
					aria-label={menuAberto ? "Fechar menu" : "Abrir menu"}
					aria-expanded={menuAberto}
					onClick={() => setMenuAberto(!menuAberto)}
				>
					{menuAberto ? <FiX aria-hidden="true" size={21} /> : <FiMenu aria-hidden="true" size={21} />}
				</button>

				{/* ---------------------------------------------------------- */}
				{/* 3.5) Menu mobile                                          */}
				{/* ---------------------------------------------------------- */}
				{menuAberto && (
					<nav
						className="absolute right-0 top-full mt-2 w-[min(14rem,calc(100vw-2rem))] rounded-lg border border-white/15 bg-[var(--citi-navy)] p-3 shadow-xl md:hidden"
						aria-label="Menu mobile"
					>
						<ul className="flex flex-col text-base">
							{/* Programas no mobile */}
							<li>
								<button
									type="button"
									onClick={() => setProgramasAberto(!programasAberto)}
									aria-expanded={programasAberto}
									className="flex w-full items-center justify-between rounded px-3 py-3 text-left transition hover:bg-white/10"
								>
									<span>Programas</span>
									{programasAberto ? <FiChevronUp aria-hidden="true" /> : <FiChevronDown aria-hidden="true" />}
								</button>

								{programasAberto && (
									<ul className="mt-1 border-l border-white/20 pl-3 text-sm text-white/80">
										{programLinks.map((program) => (
											<li key={program.href}>
												<a
													href={program.href}
													onClick={fecharMenus}
													className="block rounded px-3 py-3 hover:bg-white/10 hover:text-white"
												>
													{program.label}
												</a>
											</li>
										))}
									</ul>
								)}
							</li>

							{/* Serviços no mobile */}
							<li>
								<button
									type="button"
									onClick={() => setServicosAberto(!servicosAberto)}
									aria-expanded={servicosAberto}
									className="flex w-full items-center justify-between rounded px-3 py-3 text-left transition hover:bg-white/10"
								>
									<span>Serviços</span>
									{servicosAberto ? <FiChevronUp aria-hidden="true" /> : <FiChevronDown aria-hidden="true" />}
								</button>

								{servicosAberto && (
									<ul className="mt-1 border-l border-white/20 pl-3 text-sm text-white/80">
										{serviceLinks.map((service) => (
											<li key={service.href + service.label}>
												<a
													href={service.href}
													onClick={fecharMenus}
													className="block rounded px-3 py-3 hover:bg-white/10 hover:text-white"
												>
													{service.label}
												</a>
											</li>
										))}
									</ul>
								)}
							</li>

							{/* Links simples no mobile */}
							{navigationLinks.map((link) => (
								<li key={link.href}>
									<a
										href={link.href}
										onClick={fecharMenus}
										className="block rounded px-3 py-3 transition hover:bg-white/10"
									>
										{link.label}
									</a>
								</li>
							))}

							{/* Acesso oficial no mobile */}
							<li>
								<a
									href="https://citide.patos.pb.gov.br/painel/login"
									onClick={fecharMenus}
									className="mt-2 flex items-center justify-between rounded border-t border-white/15 px-3 py-3 font-medium text-[var(--citi-yellow)]"
								>
									Acesso Portal oficial <FiArrowUpRight aria-hidden="true" />
								</a>
							</li>
						</ul>
					</nav>
				)}
			</div>
		</header>
	);
}
