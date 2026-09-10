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
			{/* Camadas visuais ficam atrás do conteúdo para não bloquear interações. */}
			<div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_76%_48%,rgba(255,184,0,0.34),transparent_34%)]" />
			<div className="absolute bottom-0 right-[-2%] -z-10 h-[48%] w-full overflow-hidden md:top-0 md:h-full md:w-[34%]">
				<div className="absolute right-[22%] top-[18%] h-[34%] w-[50%] rounded-full bg-[var(--citi-yellow)]/20 blur-3xl" />
				<Image src="/images/sol 2.png" alt="Sol com faixas azuis e amarelas, símbolo de energia e inovação" width={1280} height={1280} priority className="absolute left-[12%] top-[12%] h-[66%] w-[66%] max-w-none object-contain md:left-[18%] md:top-[15%] md:h-[60%] md:w-[60%]" />
			</div>
			<div className="relative mx-auto flex min-h-[calc(100svh-76px)] max-w-[1280px] items-center justify-center px-5 pb-44 pt-12 sm:px-8 sm:pb-40 sm:pt-14 md:min-h-[calc(100vh-76px)] md:px-10 md:py-10 lg:px-12">
				<div className="relative z-10 w-full max-w-[680px] text-left md:w-[62%] md:pr-4">
					{/* Identidade e proposta principal do portal. */}
					<p className="mb-3 text-[0.7rem] font-bold uppercase tracking-[0.2em] text-[var(--citi-yellow-soft)] sm:text-xs">Ciência, Tecnologia e Inovação</p>
					<h1 className="max-w-full whitespace-nowrap font-[family-name:var(--font-joan)] text-[clamp(2.5rem,7vw,7rem)] leading-[0.9] tracking-[-0.04em] md:text-[clamp(2.75rem,7vw,7rem)]">
						Portal <span className="text-[var(--citi-yellow)]">CiTI-DE</span>
					</h1>
					<p className="mt-5 max-w-[38rem] text-lg leading-tight text-white sm:text-2xl lg:text-[2rem]">O que você precisa? Encontre serviços, programas e informações para impulsionar o desenvolvimento de Patos.</p>
					<p className="mt-4 max-w-[38rem] text-sm leading-6 text-white/80 sm:text-base lg:text-lg">Acesse cursos, empregos, programas de inovação e incentivos para empresas.</p>
					{/* Ações prioritárias aparecem antes da busca para orientar o visitante. */}
					<div className="mt-6 flex flex-wrap gap-2.5 sm:mt-7 sm:gap-3">
						<a href="#acesso-rapido" className="inline-flex items-center justify-center rounded-full bg-[var(--citi-yellow)] px-4 py-2.5 text-xs font-bold text-[var(--citi-navy)] hover:bg-[var(--citi-yellow-soft)] sm:px-5 sm:py-3 sm:text-sm">Encontrar um serviço</a>
						<a href="#programas" className="inline-flex items-center justify-center rounded-full border border-white/40 bg-white/10 px-4 py-2.5 text-xs font-bold text-white hover:border-[var(--citi-yellow)] hover:bg-white/15 sm:px-5 sm:py-3 sm:text-sm">Conhecer os programas</a>
					</div>
					{/* Busca global com mensagem acessível para sucesso e erro. */}
					<form onSubmit={onSearch} className="mt-6 max-w-[720px] sm:mt-7">
						<label htmlFor="site-search" className="sr-only">Buscar no portal CiTI-DE</label>
						<div className="flex items-center gap-2 rounded-full bg-[var(--citi-surface)] p-2 shadow-2xl ring-1 ring-white/30">
							<FiSearch className="ml-3 shrink-0 text-xl text-[var(--citi-text-muted)]" aria-hidden="true" />
							<input id="site-search" type="search" value={searchTerm} onChange={onSearchTermChange} aria-describedby="site-search-message" aria-invalid={searchMessage.includes("não encontramos") || searchMessage.includes("Digite")} placeholder="Buscar por serviços, leis ou programas..." className="min-w-0 flex-1 bg-transparent px-2 py-3 text-sm font-medium text-[var(--citi-text)] outline-none placeholder:text-[var(--citi-text-muted)]" />
						</div>
						<p id="site-search-message" role="status" aria-live="polite" className={searchMessage ? "mt-3 text-sm font-medium text-[var(--citi-yellow-soft)]" : "sr-only"}>{searchMessage}</p>
					</form>

					{/* Atalhos para os destinos mais procurados. */}
					<div className="mt-6 flex w-full max-w-[720px] flex-wrap gap-2 sm:gap-2.5 sm:mt-7 sm:gap-3">
						{heroCategories.map((category) => (
							<a key={category.label} href={category.href} className="flex w-fit shrink-0 items-center justify-center rounded-full border border-white/35 bg-[var(--citi-navy)]/25 px-3 py-2 text-center text-[0.72rem] font-bold text-white transition hover:border-[var(--citi-yellow)] hover:bg-[var(--citi-yellow)]/15 sm:px-3.5 sm:text-xs">
								{category.label}
							</a>
						))}
					</div>
				</div>

				{/* Personagens são decorativos e não participam da navegação. */}
				<div className="pointer-events-none absolute bottom-1 left-3 z-0 w-10 sm:bottom-3 sm:left-5 sm:w-14 md:bottom-5 md:left-10 md:w-16">
					<Image src="/images/pato.png" alt="" width={256} height={256} className="h-auto w-full object-contain" />
				</div>
				<div className="pointer-events-none absolute bottom-1 right-3 z-0 w-10 sm:bottom-3 sm:right-5 sm:w-14 md:bottom-5 md:right-10 md:w-16">
					<Image src="/images/robou_dando_chau.webp" alt="Robô acenando" width={256} height={256} className="h-auto w-full object-contain" />
				</div>
			</div>
		</section>
	);
}