"use client";

import Image from "next/image";
import { useState } from "react";
import { audiencePaths, institutionalBodies, institutionalStats, programs, quickAccessLinks, services } from "@/lib/site-content";
import { FiArrowUpRight, FiBookOpen, FiBriefcase, FiFileText, FiGlobe, FiUsers, FiZap } from "react-icons/fi";

const serviceIcons = {
	cursos: FiBookOpen,
	empregos: FiBriefcase,
	"proinova-servico": FiZap,
};

const programIcons = {
	inovapatos: FiGlobe,
	acelerapatos: FiBriefcase,
	proinova: FiZap,
	"selo-inovacao": FiUsers,
	"empregos-programa": FiBriefcase,
	picti: FiFileText,
};

const quickAccessIcons = {
	curso: FiBookOpen,
	emprego: FiBriefcase,
	ideia: FiZap,
	empresa: FiUsers,
	programas: FiGlobe,
};

// Esta função concentra as seções abaixo do hero.
// O arquivo existe separado para que StarterContent fique responsável apenas pela composição da página e pelo hero.
export function PortalSections() {
	const [audience, setAudience] = useState<keyof typeof audiencePaths>("cidadao");
	const selectedAudience = audiencePaths[audience];

	return (
		<>
			{/* Acesso rápido: organiza a entrada por intenção, antes de apresentar a estrutura institucional. */}
			<section id="acesso-rapido" className="bg-[#032842] px-5 py-14 text-white sm:py-16">
				<div className="mx-auto max-w-6xl">
					<div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
						<div>
							<p className="text-sm font-bold uppercase tracking-[0.18em] text-[#FFD45A]">Acesso rápido</p>
							<h2 className="mt-2 text-3xl sm:text-4xl">O que você procura?</h2>
						</div>
						<p className="max-w-md text-sm leading-6 text-white/70">Vá direto ao que precisa no portal CiTI-DE.</p>
					</div>
					<div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
						{quickAccessLinks.map((item) => {
							const Icon = quickAccessIcons[item.id as keyof typeof quickAccessIcons];
							return (
								<a key={item.id} href={item.href} className="group flex min-h-28 flex-col justify-between rounded-2xl border border-white/15 bg-white/5 p-5 transition hover:-translate-y-1 hover:border-[#FFB800] hover:bg-[#075b96] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#FFB800]">
									<Icon aria-hidden="true" className="text-xl text-[#FFD45A] transition group-hover:text-[#FFB800]" />
									<span className="mt-6 flex items-end justify-between gap-2 text-base font-bold">{item.label}<FiArrowUpRight aria-hidden="true" className="shrink-0 text-[#FFD45A]" /></span>
								</a>
							);
						})}
					</div>
				</div>
			</section>

			{/* Sobre: apresenta primeiro a missão da secretaria e como ela conecta o ecossistema local. */}
			<section id="sobre" className="bg-[#dcecf5] px-5 py-20">
				<div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
					<div>
						<p className="text-sm font-bold uppercase tracking-[0.18em] text-[#0867A8]">Sobre a secretaria</p>
						<h2 className="mt-3 text-4xl leading-tight text-[#032842] sm:text-5xl">CiTI-DE — Ciência, Tecnologia, Inovação e Desenvolvimento Econômico</h2>
						<p className="mt-6 max-w-xl text-lg leading-8 text-[#53636d]">A CiTI-DE é a secretaria da Prefeitura de Patos responsável por formular e executar as políticas públicas de ciência, tecnologia e inovação do município — conectando empresas, inventores, instituições de ensino e cidadãos às oportunidades do ecossistema local.</p>
						<p className="mt-4 max-w-xl leading-7 text-[#53636d]">Por meio de programas, capacitações e políticas públicas, a secretaria aproxima quem tem uma ideia de quem pode ajudar a colocá-la em prática.</p>
						<div className="mt-8 grid gap-3 sm:grid-cols-2">
							{institutionalBodies.map((body) => (
								<article key={body.title} className="border-l-4 border-[#FFB800] bg-[#cfe5ef] px-4 py-3">
									<h3 className="text-base font-bold text-[#032842]">{body.title}</h3>
									<p className="mt-1 text-sm leading-6 text-[#53636d]">{body.text}</p>
								</article>
							))}
						</div>
					</div>
					<div className="relative overflow-hidden rounded-3xl bg-[radial-gradient(circle_at_60%_35%,rgba(255,184,0,0.24),transparent_38%)]">
						<Image
							src="/images/sobre-pessoa-inovacao-transparent.png"
							alt="Pessoa trabalhando em um computador, conectada ao sol CiTI-DE, com apoio de tecnologia e inovação"
							width={1024}
							height={768}
							className="relative h-auto w-full object-contain"
						/>
					</div>
				</div>
			</section>

			{/* Caminhos por público: a pessoa escolhe sua intenção antes de navegar pelos detalhes. */}
			<section id="publicos" className="bg-[#032842] px-5 py-20 text-white">
				<div className="mx-auto max-w-6xl">
					<div className="max-w-2xl">
						<p className="text-sm font-bold uppercase tracking-[0.18em] text-[#FFD45A]">Comece por aqui</p>
						<h2 className="mt-3 text-4xl leading-tight sm:text-5xl">O que você está buscando?</h2>
						<p className="mt-4 text-lg leading-8 text-white/75">Escolha o seu caminho e encontre as oportunidades mais relevantes sem precisar conhecer a estrutura da secretaria.</p>
					</div>

					<div className="mt-10 grid gap-4 md:grid-cols-2">
						{(Object.entries(audiencePaths) as [keyof typeof audiencePaths, (typeof audiencePaths)[keyof typeof audiencePaths]][]).map(([key, path]) => (
							<button key={key} type="button" onClick={() => setAudience(key)} aria-pressed={audience === key} className={`group rounded-2xl border p-6 text-left transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#FFB800] ${audience === key ? "border-[#FFB800] bg-[#FFB800] text-[#032842] shadow-[0_16px_40px_rgba(255,184,0,0.18)]" : "border-white/20 bg-white/5 text-white hover:border-[#FFD45A] hover:bg-white/10"}`}>
								<div className="flex items-center justify-between gap-4">
									<div className={`flex h-12 w-12 items-center justify-center rounded-xl ${audience === key ? "bg-[#032842] text-[#FFB800]" : "bg-[#0867A8] text-white"}`}>
										{key === "cidadao" ? <FiUsers aria-hidden="true" size={22} /> : <FiBriefcase aria-hidden="true" size={22} />}
									</div>
									<FiArrowUpRight aria-hidden="true" className={`text-2xl transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 ${audience === key ? "text-[#032842]" : "text-[#FFD45A]"}`} />
								</div>
								<h3 className="mt-6 text-2xl">{path.label}</h3>
								<p className={`mt-2 leading-7 ${audience === key ? "text-[#35464f]" : "text-white/70"}`}>{path.intro}</p>
							</button>
						))}
					</div>

					<div className="mt-6 rounded-2xl border border-white/15 bg-[#075b96] p-6 sm:p-8">
						<div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
							<div>
								<p className="text-sm font-bold uppercase tracking-[0.16em] text-[#FFD45A]">Acessos recomendados</p>
								<h3 className="mt-2 text-2xl">{selectedAudience.label}</h3>
							</div>
							<p className="max-w-xl text-sm leading-6 text-white/75">{selectedAudience.intro}</p>
						</div>
						<div className="mt-6 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
							{selectedAudience.items.map((item) => (
								<a key={item.label} href={item.href} className="inline-flex items-center justify-between gap-3 rounded-xl border border-white/15 bg-[#032842]/35 px-4 py-3 text-sm transition hover:border-[#FFD45A] hover:bg-[#032842]/60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#FFD45A]">
									<span>{item.label}</span>
									<FiArrowUpRight aria-hidden="true" className="shrink-0 text-[#FFD45A]" />
								</a>
							))}
						</div>
					</div>
				</div>
			</section>

			{/* Serviços: apresenta as oportunidades mais procuradas pelo público. */}
			<section id="servicos" className="bg-[linear-gradient(135deg,#dcecf5_0%,#e9f3f8_100%)] px-5 py-20">
				<div className="mx-auto max-w-6xl">
					<p className="text-sm font-bold uppercase tracking-[0.18em] text-[#0867A8]">Encontre oportunidades</p>
					<h2 className="mt-3 max-w-2xl text-4xl leading-tight text-[#032842] sm:text-5xl">Serviços para movimentar ideias e carreiras</h2>
					<div className="mt-10 grid gap-5 md:grid-cols-3">
						{services.map((service) => (
							<article id={service.id} key={service.id} className="border-t-4 border-[#0867A8] bg-[#d2e6f0] p-6 transition hover:-translate-y-1 hover:bg-[#c5deeb] hover:shadow-md">
								<div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-[#0867A8] text-xl text-white shadow-sm">
									{(() => { const Icon = serviceIcons[service.id as keyof typeof serviceIcons]; return <Icon aria-hidden="true" />; })()}
								</div>
								<h3 className="text-2xl text-[#032842]">{service.title}</h3>
								<p className="mt-3 leading-7 text-[#53636d]">{service.text}</p>
							</article>
						))}
					</div>
				</div>
			</section>

			{/* Programas: todos os destinos do dropdown ficam representados por um card com ID próprio. */}
			<section id="programas" className="bg-[#edf5fa] px-5 py-20">
				<div className="mx-auto max-w-6xl">
					<p className="text-sm font-bold uppercase tracking-[0.18em] text-[#0867A8]">Em destaque</p>
					<div className="mt-3 flex flex-col justify-between gap-5 md:flex-row md:items-end">
						<h2 className="max-w-2xl text-4xl leading-tight text-[#032842] sm:text-5xl">Programas que ajudam Patos a inovar</h2>
						<a href="https://citide.patos.pb.gov.br/cartilha" className="inline-flex items-center gap-1 font-bold text-[#0867A8] hover:text-[#032842]">Ver cartilha completa <FiArrowUpRight aria-hidden="true" /></a>
					</div>
					<div className="mt-10 grid gap-5 md:grid-cols-3">
						{programs.map((program, index) => (
							<article id={program.id} key={program.id} className={`p-6 transition hover:-translate-y-1 ${index % 3 === 1 ? "bg-[#FFB800] text-[#032842]" : "bg-[#032842] text-white"}`}>
								<div className={`mb-5 flex h-11 w-11 items-center justify-center rounded-xl ${index % 3 === 1 ? "bg-[#032842] text-[#FFB800]" : "bg-[#0867A8] text-white"}`}>
									{(() => { const Icon = programIcons[program.id as keyof typeof programIcons]; return <Icon aria-hidden="true" />; })()}
								</div>
								<h3 className="text-2xl">{program.title}</h3>
								<p className={`mt-3 leading-7 ${index % 3 === 1 ? "text-[#35464f]" : "text-white/75"}`}>{program.text}</p>
								<a href="https://citide.patos.pb.gov.br/cartilha" className="mt-6 inline-flex items-center gap-1 font-bold">Saiba mais <FiArrowUpRight aria-hidden="true" /></a>
							</article>
						))}
					</div>
				</div>
			</section>

			{/* Indicadores: traduz a atuação pública em números simples e verificáveis. */}
			<section id="indicadores" className="bg-[#032842] px-5 py-14 text-white sm:py-16">
				<div className="mx-auto max-w-6xl">
					<div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
						<div>
							<p className="text-sm font-bold uppercase tracking-[0.18em] text-[#FFD45A]">Estrutura e alcance</p>
							<h2 className="mt-2 text-3xl sm:text-4xl">Inovação com base institucional</h2>
						</div>
						<p className="max-w-md text-sm leading-6 text-white/70">Dados que mostram a dimensão das políticas públicas de ciência, tecnologia e inovação de Patos.</p>
					</div>
					<div className="mt-8 grid grid-cols-2 divide-x divide-white/15 border-y border-white/15 sm:grid-cols-4">
						{institutionalStats.map((stat) => (
							<div key={stat.label} className="px-4 py-6 text-center first:border-l-0 sm:px-6">
								<strong className="block text-4xl text-[#FFB800] sm:text-5xl">{stat.value}</strong>
								<span className="mt-2 block text-xs font-bold uppercase tracking-[0.12em] text-white/70">{stat.label}</span>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Contato: concentra os canais oficiais da secretaria. */}
			<section id="contato" className="bg-[#032842] px-5 py-20 text-white">
				<div className="mx-auto flex max-w-6xl flex-col justify-between gap-8 md:flex-row md:items-end">
					<div>
						<p className="text-sm font-bold uppercase tracking-[0.18em] text-[#FFB800]">Fale com a secretaria</p>
						<h2 className="mt-3 max-w-2xl text-4xl sm:text-5xl">Leve sua ideia para o ecossistema de inovação</h2>
					</div>
					<div className="text-base leading-8 text-white/80">
						<p>citi-de@patos.pb.gov.br</p>
						<p>08:00 às 14:00</p>
						<a href="https://maps.app.goo.gl/ibpgjG25uxvzyBYL7" className="text-[#FFB800] hover:text-white">Avenida Vidal de Negreiros, 84 - Centro ↗</a>
					</div>
				</div>
			</section>

			{/* Mantém o destino do botão de acesso existente no cabeçalho. */}
			<footer id="portal" className="bg-[#021c2e] px-5 py-12 text-sm text-white/65">
				<div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[1.2fr_1fr_1fr]">
					<div>
						<div className="flex items-center gap-3">
							<Image src="/icons/logo.png" alt="Logo CiTI-DE" width={48} height={48} className="h-12 w-12 object-contain" />
							<div>
								<p className="font-[family-name:var(--font-joan)] text-xl text-white">CiTI-DE</p>
								<p className="text-xs text-white/60">Prefeitura de Patos</p>
							</div>
						</div>
						<p className="mt-5 max-w-sm leading-6">Secretaria de Ciência, Tecnologia, Inovação e Desenvolvimento Econômico.</p>
					</div>
					<div>
						<p className="font-bold uppercase tracking-[0.14em] text-[#FFD45A]">Atendimento</p>
						<div className="mt-3 space-y-2 leading-6">
							<p>08:00 às 14:00</p>
							<p>Avenida Vidal de Negreiros, 84 - Centro, Patos - PB</p>
							<a href="mailto:citi-de@patos.pb.gov.br" className="block transition hover:text-[#FFB800]">citi-de@patos.pb.gov.br</a>
						</div>
					</div>
					<div>
						<p className="font-bold uppercase tracking-[0.14em] text-[#FFD45A]">Links oficiais</p>
						<div className="mt-3 flex flex-col items-start gap-2">
							<a href="https://patos.pb.gov.br/" className="transition hover:text-[#FFB800]">Portal da Prefeitura ↗</a>
							<a href="https://www.instagram.com/citide_patos/" className="transition hover:text-[#FFB800]">Instagram CiTI-DE ↗</a>
							<a href="https://www.instagram.com/pmpatos/" className="transition hover:text-[#FFB800]">Instagram Prefeitura ↗</a>
							<a href="https://transparencia.patos.pb.gov.br/" className="transition hover:text-[#FFB800]">Transparência ↗</a>
						</div>
					</div>
				</div>
				<div className="mx-auto mt-10 flex max-w-6xl flex-col justify-between gap-3 border-t border-white/10 pt-5 text-xs sm:flex-row">
					<p>© Prefeitura de Patos · Todos os direitos reservados.</p>
					<div className="flex gap-4"><a href="#acessibilidade" className="hover:text-[#FFB800]">Acessibilidade</a><a href="#privacidade" className="hover:text-[#FFB800]">Política de privacidade</a></div>
				</div>
				<div className="mx-auto mt-4 flex max-w-6xl flex-col gap-1 text-xs text-white/45 sm:flex-row sm:gap-5">
					<p id="acessibilidade">Acessibilidade: este portal prioriza contraste, navegação por teclado e textos alternativos.</p>
					<p id="privacidade">Política de privacidade: os dados informados são tratados conforme a legislação aplicável.</p>
				</div>
			</footer>
		</>
	);
}
