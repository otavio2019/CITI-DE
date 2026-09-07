import Image from "next/image";
import type { ChangeEvent, FormEvent } from "react";
import { heroCategories } from "@/lib/site-content";
import { FiSearch } from "react-icons/fi";

type HeroSectionProps = {
	searchTerm: string;
	searchMessage: string;
	onSearch: (event: FormEvent<HTMLFormElement>) => void;
	onSearchTermChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

export function HeroSection({ searchTerm, searchMessage, onSearch, onSearchTermChange }: HeroSectionProps) {
	return (
		<section className="relative isolate min-h-[calc(100svh-76px)] overflow-hidden bg-[linear-gradient(115deg,var(--citi-navy)_0%,var(--citi-blue-dark)_58%,var(--citi-blue)_100%)] text-white md:min-h-[calc(100vh-76px)]">
			<div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_76%_48%,rgba(255,184,0,0.34),transparent_34%)]" />
			<div className="absolute bottom-0 right-0 -z-10 h-[48%] w-full overflow-hidden md:top-0 md:h-full md:w-[60%]">
				<div className="absolute right-[12%] top-[18%] h-[52%] w-[72%] rounded-full bg-[var(--citi-yellow)]/20 blur-3xl" />
				<Image src="/images/sol 2.png" alt="Sol com faixas azuis e amarelas, símbolo de energia e inovação" width={1280} height={1280} priority className="absolute left-[5%] top-[-9%] h-[118%] w-[112%] max-w-none object-contain md:left-[-3%] md:top-[-4%] md:h-[108%]" />
			</div>
			<div className="relative mx-auto flex min-h-[calc(100svh-76px)] max-w-7xl items-center px-5 pb-48 pt-14 sm:px-8 sm:pb-44 sm:pt-16 md:min-h-[calc(100vh-76px)] md:px-10 md:py-12">
				<div className="relative z-10 w-full max-w-xl text-left md:w-[52%]">
					<p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-[var(--citi-yellow-soft)]">Ciência, Tecnologia e Inovação</p>
					<h1 className="max-w-full font-[family-name:var(--font-joan)] text-[clamp(2.75rem,11vw,7rem)] leading-none">
						Portal <span className="text-[var(--citi-yellow)]">CiTI-DE</span></h1>
					<p className="mt-6 max-w-lg text-2xl leading-tight text-white sm:text-3xl">Encontre oportunidades para crescer em Patos</p>
					<p className="mt-4 max-w-lg text-base leading-7 text-white/80 sm:text-lg">Acesse cursos, empregos, programas de inovação e incentivos para empresas.</p>
					<div className="mt-7 flex flex-wrap gap-3">
						<a href="#acesso-rapido" className="inline-flex items-center justify-center rounded-full bg-[var(--citi-yellow)] px-5 py-3 text-sm font-bold text-[var(--citi-navy)] hover:bg-[var(--citi-yellow-soft)]">Encontrar um serviço</a>
						<a href="#programas" className="inline-flex items-center justify-center rounded-full border border-white/40 bg-white/10 px-5 py-3 text-sm font-bold text-white hover:border-[var(--citi-yellow)] hover:bg-white/15">Conhecer os programas</a>
					</div>
					<form onSubmit={onSearch} className="mt-7 max-w-xl">
						<label htmlFor="site-search" className="sr-only">Buscar no portal CiTI-DE</label>
						<div className="flex items-center gap-2 rounded-full bg-[var(--citi-surface)] p-2 shadow-2xl ring-1 ring-white/30">
							<FiSearch className="ml-3 shrink-0 text-xl text-[var(--citi-text-muted)]" aria-hidden="true" />
							<input id="site-search" type="search" value={searchTerm} onChange={onSearchTermChange} aria-describedby="site-search-message" aria-invalid={searchMessage.includes("não encontramos") || searchMessage.includes("Digite")} placeholder="Buscar serviços ou programas" className="min-w-0 flex-1 bg-transparent px-2 py-3 text-sm font-medium text-[var(--citi-text)] outline-none placeholder:text-[var(--citi-text-muted)]" />
						</div>
						<p id="site-search-message" role="status" aria-live="polite" className={searchMessage ? "mt-3 text-sm font-medium text-[var(--citi-yellow-soft)]" : "sr-only"}>{searchMessage}</p>
					</form>

					<div className="mt-7 flex w-full flex-wrap gap-2.5 sm:gap-3">
						{heroCategories.map((category) => (
							<a key={category.label} href={category.href} className="flex w-fit shrink-0 items-center justify-center rounded-full border border-white/35 bg-[var(--citi-navy)]/25 px-3.5 py-2 text-center text-xs font-bold text-white transition hover:border-[var(--citi-yellow)] hover:bg-[var(--citi-yellow)]/15 sm:text-sm">
								{category.label}
							</a>
						))}
					</div>
				</div>

				<div className="pointer-events-none absolute bottom-1 left-3 z-0 w-12 sm:bottom-3 sm:left-5 sm:w-16 md:bottom-5 md:left-10 md:w-20">
					<Image src="/images/pato.png" alt="" width={256} height={256} className="h-auto w-full object-contain" />
				</div>
				<div className="pointer-events-none absolute bottom-1 right-3 z-0 w-12 sm:bottom-3 sm:right-5 sm:w-16 md:bottom-5 md:right-10 md:w-20">
					<Image src="/images/robou_dando_chau.webp" alt="Robô acenando" width={256} height={256} className="h-auto w-full object-contain" />
				</div>
			</div>
		</section>
	);
}