import Image from "next/image";
import type { ChangeEvent, FormEvent } from "react";
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
			<div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_78%_42%,rgba(255,184,0,0.28),transparent_36%)]" />
			<div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_88%,rgba(56,189,248,0.14),transparent_28%)]" />

			{/* Sol decorativo no hero — apenas a arte do sol. */}
			<div className="pointer-events-none absolute bottom-0 right-[-4%] -z-10 h-[48%] w-full overflow-hidden md:top-0 md:h-full md:w-[42%]">
				<div className="absolute right-[18%] top-[16%] h-[38%] w-[52%] rounded-full bg-[var(--citi-yellow)]/22 blur-3xl" aria-hidden="true" />
				<Image
					src="/images/sol 2.png"
					alt=""
					width={1280}
					height={1280}
					priority
					aria-hidden="true"
					className="absolute left-[10%] top-[8%] h-[78%] w-[78%] max-w-none object-contain drop-shadow-[0_18px_40px_rgba(255,184,0,0.22)] md:left-[14%] md:top-[12%] md:h-[70%] md:w-[70%]"
				/>
			</div>

			<div className="relative mx-auto flex min-h-[calc(100svh-76px)] max-w-[1280px] items-center px-5 pb-16 pt-12 sm:px-8 sm:pb-20 sm:pt-14 md:min-h-[calc(100vh-76px)] md:px-10 md:py-10 lg:px-12">
				<div className="relative z-10 w-full max-w-[680px] text-left md:w-[58%] md:pr-4">
					{/* Identidade e proposta principal do portal. */}
					<p className="mb-3 text-[0.7rem] font-bold uppercase tracking-[0.2em] text-[var(--citi-yellow-soft)] sm:text-xs">Ciência, Tecnologia e Inovação</p>
					<h1 className="max-w-full font-[family-name:var(--font-joan)] text-[clamp(2.5rem,6vw,6.4rem)] leading-[0.9] tracking-[-0.04em] md:text-[clamp(2.8rem,5.4vw,6.2rem)]">
						Portal <span className="text-[var(--citi-yellow)]">CiTI-DE</span>
					</h1>
					<p className="mt-5 max-w-[34rem] text-lg leading-tight text-white sm:text-2xl lg:text-[1.85rem]">Serviços e oportunidades para impulsionar Patos.</p>
					<p className="mt-4 max-w-[32rem] text-sm leading-6 text-white/80 sm:text-base lg:text-lg">Acesse cursos, programas, emprego e apoio para empresas e cidadãos.</p>

					{/* Busca global focada em uma ação principal: encontrar um serviço. */}
					<form onSubmit={onSearch} className="mt-6 max-w-[620px] sm:mt-7">
						<label htmlFor="site-search" className="sr-only">Buscar no portal CiTI-DE</label>
						<div className="flex items-center gap-2 rounded-full bg-[var(--citi-surface)] p-2 shadow-2xl ring-1 ring-white/30">
							<FiSearch className="ml-3 shrink-0 text-xl text-[var(--citi-text-muted)]" aria-hidden="true" />
							<input id="site-search" type="search" value={searchTerm} onChange={onSearchTermChange} aria-describedby="site-search-message" aria-invalid={searchMessage.includes("não encontramos") || searchMessage.includes("Digite")} placeholder="Buscar no portal..." className="min-w-0 flex-1 bg-transparent px-2 py-3 text-sm font-medium text-[var(--citi-text)] outline-none placeholder:text-[var(--citi-text-muted)]" />
						</div>
						<p id="site-search-message" role="status" aria-live="polite" className={searchMessage ? "mt-3 text-sm font-medium text-[var(--citi-yellow-soft)]" : "sr-only"}>{searchMessage}</p>
					</form>

					<div className="mt-6 sm:mt-7">
						<a href="#acesso-rapido" className="inline-flex items-center justify-center rounded-full bg-[var(--citi-yellow)] px-5 py-3 text-sm font-bold text-[var(--citi-navy)] shadow-lg shadow-[var(--citi-yellow)]/20 transition hover:bg-[var(--citi-yellow-soft)]">
							Encontrar um serviço
						</a>
					</div>
				</div>
			</div>
		</section>
	);
}
