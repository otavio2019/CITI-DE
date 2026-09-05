import Image from "next/image";

const heroCategories = [
	{ label: "Cursos SENAC", href: "#servicos" },
	{ label: "AceleraPatos", href: "#acelerapatos" },
	{ label: "ProInova", href: "#proinova" },
	{ label: "Empregos", href: "#servicos" },
	{ label: "Selo Inovação", href: "#reconhecimento" },
	{ label: "Cartilha completa", href: "#programas" },
];

const citizenServices = [
	{ title: "Patos + Empregos", description: "Portal de vagas, currículos e qualificação profissional.", href: "https://patos.pb.gov.br/" },
	{ title: "Cursos CiTI-DE & SENAC", description: "Cursos gratuitos e capacitações para o mercado de trabalho.", href: "https://cursos.citide.patos.pb.gov.br/" },
	{ title: "ProInova", description: "Apoio ao inventor independente com pedido de patente.", href: "#proinova" },
	{ title: "Cartilha da Inovação", description: "Guia completo do pacote de leis de ciência, tecnologia e inovação.", href: "#programas" },
];

const businessServices = [
	{ title: "AceleraPatos", description: "Benefícios fiscais para empresas de CT&I.", href: "#acelerapatos" },
	{ title: "Selo Patos Inovação", description: "Reconhecimento às empresas mais inovadoras.", href: "#reconhecimento" },
	{ title: "PICTI", description: "Incentivos para projetos de inovação aprovados.", href: "#programas" },
	{ title: "Arranjos Promotores de Inovação", description: "Cooperação entre instituições e empresas.", href: "#sobre" },
	{ title: "CPSI", description: "Contratação pública para soluções inovadoras.", href: "#programas" },
	{ title: "Vitrine Tecnológica", description: "Cadastro de pesquisas e tecnologias locais.", href: "#programas" },
];

const institutionalPillars = [
	{ title: "Conselho Municipal (CMCTI)", description: "Participação da comunidade nas políticas de inovação, avaliando e fiscalizando as ações." },
	{ title: "Fundo Municipal (FMCTI)", description: "Fomento à inovação, incentivo às empresas e investimento em projetos de pesquisa." },
	{ title: "Rede de Promoção (RPI)", description: "Escritórios de inovação em instituições públicas e privadas, coordenados pela CiTI-DE." },
	{ title: "Arranjos Promotores (API)", description: "Cooperação entre instituições de ciência, empresas e organizações para o desenvolvimento local." },
];

function ServiceCard({ title, description, href }: { title: string; description: string; href: string }) {
	return (
		<a href={href} className="group rounded-2xl border border-[#d9e4ec] bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-[#FFB800] hover:shadow-md">
			<div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#e9f4fb] text-xl text-[#0867A8] transition group-hover:bg-[#FFB800]">↗</div>
			<h3 className="text-xl font-bold text-[#032842]">{title}</h3>
			<p className="mt-2 text-sm leading-6 text-[#53636d]">{description}</p>
		</a>
	);
}

export function StarterContent() {
	return (
		<main id="inicio" className="overflow-hidden bg-[#f5f8fb]">
			<section className="relative isolate min-h-[calc(100svh-76px)] overflow-hidden bg-[linear-gradient(115deg,#032842_0%,#075b96_58%,#16437e_100%)] font-[family-name:var(--font-joan)] text-white md:min-h-[calc(100vh-76px)]">
				<div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_78%_42%,rgba(255,184,0,0.2),transparent_29%)]" />
				<div className="mx-auto flex min-h-[calc(100svh-76px)] max-w-6xl items-start justify-center px-5 py-20 md:min-h-[calc(100vh-76px)] md:items-center md:py-16">
					<div className="relative z-10 flex w-full max-w-4xl flex-col items-center text-center">
						<p className="mb-2 text-xs font-bold tracking-wide text-[#FFB800]">
							Ciência, Tecnologia e Inovação
						</p>
						<h1 className="text-4xl leading-none sm:text-6xl md:text-7xl">
							Portal <span className="text-[#FFB800]">CiTI-DE</span>
						</h1>
						<p className="mt-5 max-w-xl text-base font-bold leading-6 text-white/90 sm:text-lg">
							O que você precisa? Encontre serviços, programas e informações para impulsionar o desenvolvimento de Patos.
						</p>
						<label className="mt-8 flex w-full max-w-xl items-center gap-3 rounded-full bg-white px-4 py-2.5 text-left shadow-lg ring-1 ring-black/10 sm:px-5">
							<span className="text-2xl leading-none text-[#8b9398] sm:text-3xl" aria-hidden="true">⌕</span>
							<input
								type="search"
								placeholder="Buscar por serviços, leis ou programas"
								className="min-w-0 flex-1 bg-transparent text-sm font-bold text-[#4c5358] outline-none placeholder:text-[#8b9398]"
							/>
						</label>

						{/* Categorias rápidas para orientar o usuário após a busca. */}
						<div className="mt-8 flex w-full flex-wrap justify-center gap-3 sm:gap-4 md:flex-nowrap">
							{heroCategories.map((category) => (
								<a
									key={category.label}
									href={category.href}
									className="flex w-fit shrink-0 items-center justify-center rounded-full border border-white/35 px-4 py-2.5 text-center text-sm font-bold text-white transition hover:border-[#FFB800] hover:bg-white/10"
								>
									{category.label}
								</a>
							))}
						</div>
					</div>

					{/* Personagens decorativos que equilibram visualmente os dois lados do hero. */}
					<div className="pointer-events-none absolute bottom-3 left-2 w-20 opacity-90 sm:bottom-5 sm:left-5 sm:w-28 md:bottom-8 md:left-8 md:w-40">
						<Image
							src="/images/pato.png"
							alt=""
							width={256}
							height={256}
							className="h-auto w-full object-contain"
						/>
					</div>
					<div className="pointer-events-none absolute bottom-3 left-1/2 z-10 w-20 -translate-x-1/2 opacity-95 sm:bottom-5 sm:w-28 md:bottom-8 md:left-[28%] md:w-40 md:translate-x-0">
						<Image
							src="/images/robou_dando_chau.webp"
							alt="Robô acenando"
							width={256}
							height={256}
							className="h-auto w-full object-contain"
						/>
					</div>

					<div className="pointer-events-none absolute right-[-20%] top-[-8%] w-[58%] max-w-xl opacity-35 md:bottom-[-8%] md:right-[-8%] md:top-auto md:w-[42%] md:opacity-90">
						<div className="absolute left-1/2 top-1/2 -z-10 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#FFB800]/20 blur-3xl" />
						<Image
							src="/images/sol 2.png"
							alt="Ilustração de um sol com faixas azuis e amarelas"
							width={1280}
							height={1280}
							priority
							className="h-auto w-full animate-[pulse_8s_ease-in-out_infinite] object-contain"
						/>
					</div>
				</div>
			</section>

			<section id="servicos" className="bg-white px-5 py-20">
				<div className="mx-auto max-w-6xl">
					<div className="max-w-2xl">
						<p className="text-sm font-bold uppercase tracking-[0.18em] text-[#0867A8]">Parceria CiTI-DE & SENAC</p>
						<h2 className="mt-3 text-4xl leading-tight text-[#032842] sm:text-5xl">Cursos e capacitações gratuitas</h2>
						<p className="mt-4 text-lg leading-8 text-[#53636d]">Qualificação profissional para impulsionar sua carreira e fortalecer o ecossistema de tecnologia e negócios de Patos.</p>
						<a href="https://cursos.citide.patos.pb.gov.br/" className="mt-6 inline-flex rounded-full bg-[#FFB800] px-5 py-3 font-bold text-[#032842] transition hover:bg-[#e5a500]">Ver cursos disponíveis ↗</a>
					</div>

					<div className="mt-16 grid gap-12 lg:grid-cols-2">
						<div>
							<h2 className="text-3xl text-[#032842]">Para cidadãos</h2>
							<div className="mt-6 grid gap-4 sm:grid-cols-2">
								{citizenServices.map((service) => <ServiceCard key={service.title} {...service} />)}
							</div>
						</div>
						<div>
							<h2 className="text-3xl text-[#032842]">Para empresas</h2>
							<div className="mt-6 grid gap-4 sm:grid-cols-2">
								{businessServices.map((service) => <ServiceCard key={service.title} {...service} />)}
							</div>
						</div>
					</div>
				</div>
			</section>

			<section id="programas" className="bg-[#edf5fa] px-5 py-20">
				<div className="mx-auto max-w-6xl">
					<div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
						<div>
							<p className="text-sm font-bold uppercase tracking-[0.18em] text-[#0867A8]">Em destaque</p>
							<h2 className="mt-3 text-4xl text-[#032842] sm:text-5xl">Programas que estão transformando Patos</h2>
						</div>
						<a href="https://citide.patos.pb.gov.br/cartilha" className="font-bold text-[#0867A8] hover:text-[#032842]">Explorar a cartilha completa ↗</a>
					</div>
					<div className="mt-10 grid gap-5 md:grid-cols-3">
						<a id="proinova" href="https://citide.patos.pb.gov.br/cartilha#proinova" className="rounded-2xl bg-[#032842] p-7 text-white transition hover:-translate-y-1">
							<p className="text-sm font-bold uppercase tracking-[0.16em] text-[#FFB800]">Guia completo</p>
							<h3 className="mt-4 text-3xl">Cartilha da Inovação</h3>
							<p className="mt-3 leading-7 text-white/75">Conheça os programas e as leis de ciência, tecnologia e inovação do município.</p>
						</a>
						<a id="acelerapatos" href="https://citide.patos.pb.gov.br/cartilha#acelerapatos" className="rounded-2xl bg-white p-7 shadow-sm transition hover:-translate-y-1">
							<p className="text-sm font-bold uppercase tracking-[0.16em] text-[#0867A8]">Benefícios fiscais</p>
							<h3 className="mt-4 text-3xl text-[#032842]">AceleraPatos</h3>
							<p className="mt-3 leading-7 text-[#53636d]">ISSQN a 2%, IPTU zerado e mais vantagens para empresas de CT&I.</p>
						</a>
						<a id="reconhecimento" href="https://citide.patos.pb.gov.br/cartilha#reconhecimento" className="rounded-2xl bg-[#FFB800] p-7 text-[#032842] transition hover:-translate-y-1">
							<p className="text-sm font-bold uppercase tracking-[0.16em]">Reconhecimento</p>
							<h3 className="mt-4 text-3xl">Selo Patos Inovação</h3>
							<p className="mt-3 leading-7 text-[#35464f]">Premiação anual para empresas que se destacam em práticas inovadoras e sustentáveis.</p>
						</a>
					</div>
					<div className="mt-12 grid grid-cols-2 gap-6 border-t border-[#c8dce8] pt-8 text-center sm:grid-cols-4">
						<div><strong className="text-4xl text-[#032842]">6</strong><p className="mt-1 text-sm font-bold text-[#53636d]">leis municipais</p></div>
						<div><strong className="text-4xl text-[#032842]">1</strong><p className="mt-1 text-sm font-bold text-[#53636d]">sistema integrado</p></div>
						<div><strong className="text-4xl text-[#032842]">4</strong><p className="mt-1 text-sm font-bold text-[#53636d]">programas de fomento</p></div>
						<div><strong className="text-4xl text-[#032842]">2%</strong><p className="mt-1 text-sm font-bold text-[#53636d]">ISSQN no AceleraPatos</p></div>
					</div>
				</div>
			</section>

			<section id="sobre" className="bg-white px-5 py-20">
				<div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
					<div>
						<p className="text-sm font-bold uppercase tracking-[0.18em] text-[#0867A8]">Sobre a secretaria</p>
						<h2 className="mt-3 text-4xl leading-tight text-[#032842] sm:text-5xl">Ciência, Tecnologia, Inovação e Desenvolvimento Econômico</h2>
						<p className="mt-5 leading-7 text-[#53636d]">A CiTI-DE formula e executa políticas públicas que conectam empresas, inventores, instituições de ensino e cidadãos às oportunidades do ecossistema local.</p>
					</div>
					<div className="grid gap-4 sm:grid-cols-2">
						{institutionalPillars.map((pillar) => (
							<article key={pillar.title} className="border-l-4 border-[#FFB800] bg-[#f5f8fb] p-5">
								<h3 className="text-xl font-bold text-[#032842]">{pillar.title}</h3>
								<p className="mt-2 text-sm leading-6 text-[#53636d]">{pillar.description}</p>
							</article>
						))}
					</div>
				</div>
			</section>

			<section id="contato" className="bg-[#032842] px-5 py-20 text-white">
				<div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2">
					<div>
						<p className="text-sm font-bold uppercase tracking-[0.18em] text-[#FFB800]">Fale com a secretaria</p>
						<h2 className="mt-3 text-4xl sm:text-5xl">Leve a inovação da cartilha para o seu projeto</h2>
						<p className="mt-5 max-w-xl leading-7 text-white/75">A CiTI-DE está disponível para orientar empresas, inventores e instituições de Patos sobre os programas deste guia.</p>
					</div>
					<div className="grid gap-6 sm:grid-cols-2">
						<div><p className="text-xs font-bold uppercase tracking-[0.16em] text-[#FFB800]">E-mail</p><a href="mailto:citi-de@patos.pb.gov.br" className="mt-2 block text-lg hover:text-[#FFB800]">citi-de@patos.pb.gov.br</a></div>
						<div><p className="text-xs font-bold uppercase tracking-[0.16em] text-[#FFB800]">Atendimento</p><p className="mt-2 text-lg">08:00 às 14:00</p></div>
						<div className="sm:col-span-2"><p className="text-xs font-bold uppercase tracking-[0.16em] text-[#FFB800]">Endereço</p><a href="https://maps.app.goo.gl/ibpgjG25uxvzyBYL7" className="mt-2 block text-lg hover:text-[#FFB800]">Avenida Vidal de Negreiros, 84 - Centro, Patos - PB ↗</a></div>
						<div className="sm:col-span-2"><p className="text-xs font-bold uppercase tracking-[0.16em] text-[#FFB800]">Redes sociais</p><div className="mt-2 flex gap-5 text-lg"><a href="https://www.instagram.com/citide_patos/" className="hover:text-[#FFB800]">@citide_patos ↗</a><a href="https://www.instagram.com/pmpatos/" className="hover:text-[#FFB800]">@pmpatos ↗</a></div></div>
					</div>
				</div>
			</section>

			<footer id="portal" className="bg-[#021c2e] px-5 py-8 text-center text-sm text-white/65">
				<p>Prefeitura de Patos · Secretaria de Ciência, Tecnologia, Inovação e Desenvolvimento Econômico</p>
				<a href="https://patos.pb.gov.br/" className="mt-2 inline-block text-[#FFB800] hover:text-white">Acessar o portal da Prefeitura ↗</a>
			</footer>
		</main>
	);
}
