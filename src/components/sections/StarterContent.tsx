import Image from "next/image";

const heroCategories = [
	{ label: "Curso SENAC", href: "#servicos" },
	{ label: "Acelera Patos", href: "#programas" },
	{ label: "ProInova", href: "#programas" },
	{ label: "Empregos", href: "#servicos" },
	{ label: "Selo Inovação", href: "#programas" },
	{ label: "Cartilha Completa", href: "#programas" },
];

const services = [
	{ title: "Cursos e capacitações", text: "Qualificação profissional para fortalecer carreiras e negócios em Patos." },
	{ title: "Patos + Empregos", text: "Oportunidades, vagas e caminhos para quem busca entrar ou crescer no mercado." },
	{ title: "ProInova", text: "Apoio para inventores independentes e projetos que podem transformar ideias em soluções." },
];

const programs = [
	{ title: "AceleraPatos", text: "Benefícios e incentivos para empresas de ciência, tecnologia e inovação." },
	{ title: "Selo Patos Inovação", text: "Reconhecimento para empresas que se destacam por práticas inovadoras." },
	{ title: "Cartilha da Inovação", text: "Conheça as leis, programas e oportunidades do ecossistema local." },
];

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

			{/* Serviços: primeira área de conteúdo depois da apresentação inicial. */}
			<section id="servicos" className="bg-white px-5 py-20">
				<div className="mx-auto max-w-6xl">
					<p className="text-sm font-bold uppercase tracking-[0.18em] text-[#0867A8]">Encontre oportunidades</p>
					<h2 className="mt-3 max-w-2xl text-4xl leading-tight text-[#032842] sm:text-5xl">Serviços para movimentar ideias e carreiras</h2>
					<div className="mt-10 grid gap-5 md:grid-cols-3">
						{services.map((service) => (
							<article key={service.title} className="border-t-4 border-[#0867A8] bg-[#f5f8fb] p-6 transition hover:-translate-y-1 hover:shadow-md">
								<h3 className="text-2xl text-[#032842]">{service.title}</h3>
								<p className="mt-3 leading-7 text-[#53636d]">{service.text}</p>
							</article>
						))}
					</div>
				</div>
			</section>

			{/* Programas: apresenta os principais caminhos de inovação do portal. */}
			<section id="programas" className="bg-[#edf5fa] px-5 py-20">
				<div className="mx-auto max-w-6xl">
					<p className="text-sm font-bold uppercase tracking-[0.18em] text-[#0867A8]">Em destaque</p>
					<div className="mt-3 flex flex-col justify-between gap-5 md:flex-row md:items-end">
						<h2 className="max-w-2xl text-4xl leading-tight text-[#032842] sm:text-5xl">Programas que ajudam Patos a inovar</h2>
						<a href="https://citide.patos.pb.gov.br/cartilha" className="font-bold text-[#0867A8] hover:text-[#032842]">Ver cartilha completa ↗</a>
					</div>
					<div className="mt-10 grid gap-5 md:grid-cols-3">
						{programs.map((program, index) => (
							<a key={program.title} href="https://citide.patos.pb.gov.br/cartilha" className={`p-6 transition hover:-translate-y-1 ${index === 1 ? "bg-[#FFB800] text-[#032842]" : "bg-[#032842] text-white"}`}>
								<h3 className="text-2xl">{program.title}</h3>
								<p className={`mt-3 leading-7 ${index === 1 ? "text-[#35464f]" : "text-white/75"}`}>{program.text}</p>
								<span className="mt-6 inline-block font-bold">Saiba mais ↗</span>
							</a>
						))}
					</div>
				</div>
			</section>

			{/* Sobre: explica a missão da secretaria sem reproduzir a estrutura do site de referência. */}
			<section id="sobre" className="bg-white px-5 py-20">
				<div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2 lg:items-center">
					<div>
						<p className="text-sm font-bold uppercase tracking-[0.18em] text-[#0867A8]">Sobre a CiTI-DE</p>
						<h2 className="mt-3 text-4xl leading-tight text-[#032842] sm:text-5xl">Ciência, tecnologia e desenvolvimento para Patos</h2>
					</div>
					<p className="text-lg leading-8 text-[#53636d]">A secretaria conecta empresas, inventores, instituições de ensino e cidadãos às políticas públicas e oportunidades de inovação do município.</p>
				</div>
			</section>

			{/* Contato: deixa os próximos canais de atendimento visíveis e acessíveis. */}
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

			{/* Destino do botão "Acesso Portal" do cabeçalho. */}
			<footer id="portal" className="bg-[#021c2e] px-5 py-8 text-center text-sm text-white/65">
				<p>Prefeitura de Patos · Secretaria de Ciência, Tecnologia, Inovação e Desenvolvimento Econômico</p>
			</footer>

			<section id="inovapatos">
				<div className="mx-auto max-w-6xl">
					<p className="text-sm font-bold uppercase tracking-[0.18em] text-[#0867A8]">Em destaque</p>
					<div className="mt-3 flex flex-col justify-between gap-5 md:flex-row md:items-end">
						<h2 className="max-w-2xl text-4xl leading-tight text-[#032842] sm:text-5xl">Programas que ajudam Patos a inovar</h2>
						<a href="https://citide.patos.pb.gov.br/cartilha" className="font-bold text-[#0867A8] hover:text-[#032842]">Ver cartilha completa ↗</a>
					</div>
					<div className="mt-10 grid gap-5 md:grid-cols-3">
						{programs.map((program, index) => (
							<a key={program.title} href="https://citide.patos.pb.gov.br/cartilha" className={`p-6 transition hover:-translate-y-1 ${index === 1 ? "bg-[#FFB800] text-[#032842]" : "bg-[#032842] text-white"}`}>
								<h3 className="text-2xl">{program.title}</h3>
								<p className={`mt-3 leading-7 ${index === 1 ? "text-[#35464f]" : "text-white/75"}`}>{program.text}</p>
								<span className="mt-6 inline-block font-bold">Saiba mais ↗</span>
							</a>
						))}
					</div>
				</div>
			</section>

			<section id="acelerapatos">
				<div className="mx-auto max-w-6xl">
					<p className="text-sm font-bold uppercase tracking-[0.18em] text-[#0867A8]">Em destaque</p>
					<div className="mt-3 flex flex-col justify-between gap-5 md:flex-row md:items-end">
						<h2 className="max-w-2xl text-4xl leading-tight text-[#032842] sm:text-5xl">Programas que ajudam Patos a inovar</h2>
						<a href="https://citide.patos.pb.gov.br/cartilha" className="font-bold text-[#0867A8] hover:text-[#032842]">Ver cartilha completa ↗</a>
					</div>
					<div className="mt-10 grid gap-5 md:grid-cols-3">
						{programs.map((program, index) => (
							<a key={program.title} href="https://citide.patos.pb.gov.br/cartilha" className={`p-6 transition hover:-translate-y-1 ${index === 1 ? "bg-[#FFB800] text-[#032842]" : "bg-[#032842] text-white"}`}>
								<h3 className="text-2xl">{program.title}</h3>
								<p className={`mt-3 leading-7 ${index === 1 ? "text-[#35464f]" : "text-white/75"}`}>{program.text}</p>
								<span className="mt-6 inline-block font-bold">Saiba mais ↗</span>
							</a>
						))}
					</div>
				</div>
			</section>

			<section id="proinova">
				<div className="mx-auto max-w-6xl">
					<p className="text-sm font-bold uppercase tracking-[0.18em] text-[#0867A8]">Em destaque</p>
					<div className="mt-3 flex flex-col justify-between gap-5 md:flex-row md:items-end">
						<h2 className="max-w-2xl text-4xl leading-tight text-[#032842] sm:text-5xl">Programas que ajudam Patos a inovar</h2>
						<a href="https://citide.patos.pb.gov.br/cartilha" className="font-bold text-[#0867A8] hover:text-[#032842]">Ver cartilha completa ↗</a>
					</div>
					<div className="mt-10 grid gap-5 md:grid-cols-3">
						{programs.map((program, index) => (
							<a key={program.title} href="https://citide.patos.pb.gov.br/cartilha" className={`p-6 transition hover:-translate-y-1 ${index === 1 ? "bg-[#FFB800] text-[#032842]" : "bg-[#032842] text-white"}`}>
								<h3 className="text-2xl">{program.title}</h3>
								<p className={`mt-3 leading-7 ${index === 1 ? "text-[#35464f]" : "text-white/75"}`}>{program.text}</p>
								<span className="mt-6 inline-block font-bold">Saiba mais ↗</span>
							</a>
						))}
					</div>
				</div>
			</section>
		</main>
	);
}
