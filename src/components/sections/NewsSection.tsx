import { opportunities } from "@/lib/site-content";
import { FiArrowUpRight } from "react-icons/fi";

const statusStyles = {
	aberto: "border-[var(--citi-yellow)]/50 text-[var(--citi-yellow-soft)]",
	"em breve": "border-white/20 text-white/65",
	atualizado: "border-[var(--citi-blue-light)]/60 text-[var(--citi-blue-light)]",
};

export function NewsSection() {
	return (
		<section id="oportunidades" className="bg-transparent px-5 py-20 text-white">
			<div className="mx-auto max-w-6xl">
				<div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
					<div><p className="text-sm font-bold uppercase tracking-[0.18em] text-[var(--citi-yellow-soft)]">Fique por dentro</p><h2 className="mt-3 text-4xl leading-tight sm:text-5xl">Últimas oportunidades</h2></div>
					<p className="max-w-md text-sm leading-6 text-white/70">Acompanhe cursos, editais, programas e informações importantes da CiTI-DE.</p>
				</div>
				<div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
					{opportunities.map((item) => <article key={item.id} className="flex min-h-64 flex-col rounded-2xl border border-white/15 bg-white/10 p-6 shadow-sm transition hover:-translate-y-1 hover:border-[var(--citi-yellow)] hover:bg-white/15">
						<div className="flex items-center justify-between gap-3 text-xs font-bold uppercase tracking-[0.12em]"><span className="text-[var(--citi-yellow-soft)]">{item.category}</span><span className={`rounded-full border px-2 py-1 tracking-normal ${statusStyles[item.status as keyof typeof statusStyles]}`}>{item.status}</span></div>
						<p className="mt-5 text-xs text-white/55">{item.date}</p><h3 className="mt-2 text-2xl">{item.title}</h3><p className="mt-3 flex-1 leading-7 text-white/70">{item.summary}</p>
						<a href={item.href} className="mt-5 inline-flex items-center gap-1 font-bold text-[var(--citi-yellow)] hover:text-[var(--citi-yellow-soft)]">Ver detalhes <FiArrowUpRight aria-hidden="true" /></a>
					</article>)}
				</div>
			</div>
		</section>
	);
}