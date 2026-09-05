import { programs, services } from "@/lib/site-content";

// Esta função concentra as seções abaixo do hero.
// O arquivo existe separado para que StarterContent fique responsável apenas pela composição da página e pelo hero.
export function PortalSections() {
	return (
		<>
			{/* Serviços: apresenta as oportunidades mais procuradas pelo público. */}
			<section id="servicos" className="bg-[linear-gradient(135deg,#dcecf5_0%,#e9f3f8_100%)] px-5 py-20">
				<div className="mx-auto max-w-6xl">
					<p className="text-sm font-bold uppercase tracking-[0.18em] text-[#0867A8]">Encontre oportunidades</p>
					<h2 className="mt-3 max-w-2xl text-4xl leading-tight text-[#032842] sm:text-5xl">Serviços para movimentar ideias e carreiras</h2>
					<div className="mt-10 grid gap-5 md:grid-cols-3">
						{services.map((service) => (
							<article id={service.id} key={service.id} className="border-t-4 border-[#0867A8] bg-[#d2e6f0] p-6 transition hover:-translate-y-1 hover:bg-[#c5deeb] hover:shadow-md">
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
						<a href="https://citide.patos.pb.gov.br/cartilha" className="font-bold text-[#0867A8] hover:text-[#032842]">Ver cartilha completa ↗</a>
					</div>
					<div className="mt-10 grid gap-5 md:grid-cols-3">
						{programs.map((program, index) => (
							<article id={program.id} key={program.id} className={`p-6 transition hover:-translate-y-1 ${index % 3 === 1 ? "bg-[#FFB800] text-[#032842]" : "bg-[#032842] text-white"}`}>
								<h3 className="text-2xl">{program.title}</h3>
								<p className={`mt-3 leading-7 ${index % 3 === 1 ? "text-[#35464f]" : "text-white/75"}`}>{program.text}</p>
								<a href="https://citide.patos.pb.gov.br/cartilha" className="mt-6 inline-block font-bold">Saiba mais ↗</a>
							</article>
						))}
					</div>
				</div>
			</section>

			{/* Sobre: explica a missão institucional em uma seção curta e independente. */}
			<section id="sobre" className="bg-[#dcecf5] px-5 py-20">
				<div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2 lg:items-center">
					<div>
						<p className="text-sm font-bold uppercase tracking-[0.18em] text-[#0867A8]">Sobre a CiTI-DE</p>
						<h2 className="mt-3 text-4xl leading-tight text-[#032842] sm:text-5xl">Ciência, tecnologia e desenvolvimento para Patos</h2>
					</div>
					<p className="text-lg leading-8 text-[#53636d]">A secretaria conecta empresas, inventores, instituições de ensino e cidadãos às políticas públicas e oportunidades de inovação do município.</p>
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
			<footer id="portal" className="bg-[#021c2e] px-5 py-8 text-center text-sm text-white/65">
				<p>Prefeitura de Patos · Secretaria de Ciência, Tecnologia, Inovação e Desenvolvimento Econômico</p>
			</footer>
		</>
	);
}
