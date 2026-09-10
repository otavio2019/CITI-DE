import Image from "next/image";
import type { ChangeEvent, FormEvent } from "react";
import { heroCategories } from "@/lib/site-content";
import { FiSearch } from "react-icons/fi";

/* -------------------------------------------------------------------------- */
/* Tipos do hero                                                              */
/* -------------------------------------------------------------------------- */
type HeroSectionProps = {
	searchTerm: string;
	searchMessage: string;
	onSearch: (event: FormEvent<HTMLFormElement>) => void;
	onSearchTermChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

/* -------------------------------------------------------------------------- */
/* Hero principal do portal                                                   */
/* - Fundo com identidade visual azul                                         */
/* - Sol decorativo à direita                                                 */
/* - Título, busca e atalhos no centro                                        */
/* -------------------------------------------------------------------------- */
export function HeroSection({ searchTerm, searchMessage, onSearch, onSearchTermChange }: HeroSectionProps) {
	return (
		<section className="relative isolate min-h-[calc(100svh-76px)] overflow-hidden bg-[linear-gradient(160deg,var(--citi-navy)_0%,var(--citi-blue-dark)_55%,var(--citi-blue)_100%)] text-white md:min-h-[calc(100vh-76px)]">

			{/* -------------------------------------------------------------- */}
			{/* 1) Camadas de fundo (brilhos azul e amarelo)                   */}
			{/* -------------------------------------------------------------- */}
			<div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_82%_38%,rgba(255,184,0,0.22),transparent_34%)]" />
			<div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_78%,rgba(22,136,199,0.16),transparent_30%)]" />

			{/* -------------------------------------------------------------- */}
			{/* 2) Sol decorativo (somente a arte do sol)                      */}
			{/* -------------------------------------------------------------- */}
			<div className="pointer-events-none absolute right-[-12%] top-[-8%] -z-10 h-[70%] w-[70%] sm:right-[-8%] sm:top-[-4%] sm:h-[78%] sm:w-[58%] md:right-[-6%] md:top-[-2%] md:h-[90%] md:w-[46%] lg:w-[42%]">
				{/* Brilho suave atrás do sol */}
				<div
					className="absolute right-[22%] top-[22%] h-[40%] w-[40%] rounded-full bg-[var(--citi-yellow)]/18 blur-3xl"
					aria-hidden="true"
				/>

				{/* Imagem do sol */}
				<Image
					src="/images/sol 2.png"
					alt=""
					width={1280}
					height={1280}
					priority
					aria-hidden="true"
					className="absolute left-[4%] top-[2%] h-[96%] w-[96%] max-w-none object-contain opacity-95 drop-shadow-[0_20px_50px_rgba(255,184,0,0.18)] md:left-[8%] md:top-[6%] md:h-[90%] md:w-[90%]"
				/>
			</div>

			{/* -------------------------------------------------------------- */}
			{/* 3) Conteúdo central do hero                                    */}
			{/* -------------------------------------------------------------- */}
			<div className="relative mx-auto flex min-h-[calc(100svh-76px)] max-w-[1100px] flex-col items-center justify-center px-5 pb-16 pt-14 text-center sm:px-8 sm:pb-20 sm:pt-16 md:min-h-[calc(100vh-76px)] md:px-10 md:py-12">

				{/* 3.1) Selo / eyebrow */}
				<p className="mb-4 text-[0.68rem] font-bold uppercase tracking-[0.22em] text-[var(--citi-yellow)] sm:text-xs">
					Ciência, Tecnologia e Inovação
				</p>

				{/* 3.2) Título principal */}
				<h1 className="max-w-[16ch] font-[family-name:var(--font-joan)] text-[clamp(2.8rem,7vw,5.8rem)] leading-[0.92] tracking-[-0.03em] text-white">
					Portal <span className="text-[var(--citi-yellow)]">CiTI-DE</span>
				</h1>

				{/* 3.3) Texto de apoio */}
				<p className="mt-5 max-w-[38rem] text-base leading-7 text-white/85 sm:text-lg sm:leading-8 md:text-xl">
					O que você precisa? Encontre serviços, programas e informações para impulsionar o desenvolvimento de Patos.
				</p>

				{/* ---------------------------------------------------------- */}
				{/* 3.4) Busca do portal                                       */}
				{/* ---------------------------------------------------------- */}
				<form onSubmit={onSearch} className="mt-8 w-full max-w-[640px] sm:mt-9">
					<label htmlFor="site-search" className="sr-only">
						Buscar no portal CiTI-DE
					</label>

					{/* Campo visual da busca */}
					<div className="flex items-center gap-2 rounded-full bg-white p-2 shadow-[0_18px_40px_rgba(2,24,48,0.28)] ring-1 ring-white/40">
						<FiSearch className="ml-3 shrink-0 text-xl text-[var(--citi-text-muted)]" aria-hidden="true" />
						<input
							id="site-search"
							type="search"
							value={searchTerm}
							onChange={onSearchTermChange}
							aria-describedby="site-search-message"
							aria-invalid={searchMessage.includes("não encontramos") || searchMessage.includes("Digite")}
							placeholder="Buscar por serviços, leis ou programas..."
							className="min-w-0 flex-1 bg-transparent px-2 py-3 text-left text-sm font-medium text-[var(--citi-text)] outline-none placeholder:text-[var(--citi-text-muted)] sm:text-base"
						/>
					</div>

					{/* Mensagem de feedback da busca (sucesso ou erro) */}
					<p
						id="site-search-message"
						role="status"
						aria-live="polite"
						className={searchMessage ? "mt-3 text-sm font-medium text-[var(--citi-yellow-soft)]" : "sr-only"}
					>
						{searchMessage}
					</p>
				</form>

				{/* ---------------------------------------------------------- */}
				{/* 3.5) Atalhos rápidos (chips)                               */}
				{/* ---------------------------------------------------------- */}
				<div className="mt-6 flex w-full max-w-[760px] flex-wrap items-center justify-center gap-2 sm:mt-7 sm:gap-2.5">
					{heroCategories.map((category) => (
						<a
							key={category.label}
							href={category.href}
							className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/10 px-3.5 py-2 text-[0.72rem] font-semibold text-white backdrop-blur-sm transition hover:border-[var(--citi-yellow)] hover:bg-[var(--citi-yellow)]/15 sm:px-4 sm:text-xs"
						>
							{category.label}
						</a>
					))}
				</div>
			</div>
		</section>
	);
}
