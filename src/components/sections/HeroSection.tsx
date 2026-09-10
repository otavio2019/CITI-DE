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

			{/* Sol decorativo — só a arte, sem os bonecos de CSS. */}
			<div className="pointer-events-none absolute right-[-6%] top-[-4%] -z-10 h-[42%] w-[70%] overflow-hidden sm:right-[-2%] sm:top-0 sm:h-[48%] sm:w-[48%] md:right-[-1%] md:top-[2%] md:h-[58%] md:w-[40%] lg:w-[36%]">
				<div className="absolute right-[18%] top-[16%] h-[42%] w-[48%] rounded-full bg-[var(--citi-yellow)]/25 blur-3xl" aria-hidden="true" />
				<Image
					src="/images/sol 2.png"
					alt=""
					width={1280}
					height={1280}
					priority
					aria-hidden="true"
					className="absolute left-[8%] top-[4%] h-[88%] w-[88%] max-w-none object-contain drop-shadow-[0_18px_40px_rgba(255,184,0,0.22)] md:left-[12%] md:top-[8%] md:h-[82%] md:w-[82%]"
				/>
			</div>

			<div className="relative mx-auto flex min-h-[calc(100svh-76px)] max-w-[1280px] flex-col items-center px-5 pb-10 pt-12 sm:px-8 sm:pb-12 sm:pt-14 md:min-h-[calc(100vh-76px)] md:flex-row md:items-center md:gap-6 md:px-10 md:py-10 lg:gap-8 lg:px-12">
				<div className="relative z-10 w-full max-w-[680px] text-left md:w-[52%] md:shrink-0 md:pr-2 lg:w-[48%]">
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

				{/* Ilustração principal do portal: jovem, pato, robô e sol de inovação. */}
				<div className="pointer-events-none relative z-0 mt-8 flex w-full max-w-[640px] flex-1 items-end justify-center md:mt-0 md:max-w-none md:justify-end lg:self-stretch">
					<div className="absolute bottom-[12%] right-[8%] hidden h-[42%] w-[58%] rounded-full bg-[var(--citi-yellow)]/18 blur-3xl md:block" aria-hidden="true" />
					<Image
						src="/images/sobre-pessoa-inovacao-transparent.png"
						alt="Jovem em um computador com um pato de fones, um robô e o sol da inovação"
						width={2176}
						height={1632}
						priority
						sizes="(max-width: 768px) 92vw, (max-width: 1280px) 48vw, 620px"
						className="relative h-auto w-full max-w-[560px] object-contain drop-shadow-[0_28px_48px_rgba(2,24,48,0.35)] sm:max-w-[600px] md:max-w-[560px] lg:max-w-[640px] xl:max-w-[680px]"
					/>
				</div>
			</div>
		</section>
	);
}
