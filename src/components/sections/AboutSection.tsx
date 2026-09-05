import Image from "next/image";
import { institutionalBodies } from "@/lib/site-content";

export function AboutSection() {
	return (
		<section id="sobre" className="bg-[#dcecf5] px-5 py-20">
			<div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
				<div>
					<p className="text-sm font-bold uppercase tracking-[0.18em] text-[#0867A8]">Sobre a secretaria</p>
					<h2 className="mt-3 text-4xl leading-tight text-[#032842] sm:text-5xl">CiTI-DE — Ciência, Tecnologia, Inovação e Desenvolvimento Econômico</h2>
					<p className="mt-6 max-w-xl text-lg leading-8 text-[#53636d]">A CiTI-DE é a secretaria da Prefeitura de Patos responsável por formular e executar as políticas públicas de ciência, tecnologia e inovação do município — conectando empresas, inventores, instituições de ensino e cidadãos às oportunidades do ecossistema local.</p>
					<p className="mt-4 max-w-xl leading-7 text-[#53636d]">Por meio de programas, capacitações e políticas públicas, a secretaria aproxima quem tem uma ideia de quem pode ajudar a colocá-la em prática.</p>
					<div className="mt-8 grid gap-3 sm:grid-cols-2">{institutionalBodies.map((body) => <article key={body.title} className="border-l-4 border-[#FFB800] bg-[#cfe5ef] px-4 py-3"><h3 className="text-base font-bold text-[#032842]">{body.title}</h3><p className="mt-1 text-sm leading-6 text-[#53636d]">{body.text}</p></article>)}</div>
				</div>
				<div className="relative overflow-hidden rounded-3xl bg-[radial-gradient(circle_at_60%_35%,rgba(255,184,0,0.24),transparent_38%)]"><Image src="/images/sobre-pessoa-inovacao-transparent.png" alt="Pessoa trabalhando em um computador, conectada ao sol CiTI-DE, com apoio de tecnologia e inovação" width={1024} height={768} className="relative h-auto w-full object-contain" /></div>
			</div>
		</section>
	);
}