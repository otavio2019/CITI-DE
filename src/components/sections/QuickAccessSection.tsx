import { quickAccessLinks } from "@/lib/site-content";
import { quickAccessIcons } from "@/lib/site-icons";
import { FiArrowUpRight } from "react-icons/fi";

export function QuickAccessSection() {
	return (
		<section id="acesso-rapido" className="bg-[#032842] px-5 py-14 text-white sm:py-16">
			<div className="mx-auto max-w-6xl">
				<div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
					<div><p className="text-sm font-bold uppercase tracking-[0.18em] text-[#FFD45A]">Acesso rápido</p><h2 className="mt-2 text-3xl sm:text-4xl">O que você procura?</h2></div>
					<p className="max-w-md text-sm leading-6 text-white/70">Vá direto ao que precisa no portal CiTI-DE.</p>
				</div>
				<div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
					{quickAccessLinks.map((item) => { const Icon = quickAccessIcons[item.id as keyof typeof quickAccessIcons]; return <a key={item.id} href={item.href} className="group flex min-h-28 flex-col justify-between rounded-2xl border border-white/15 bg-white/5 p-5 transition hover:-translate-y-1 hover:border-[#FFB800] hover:bg-[#075b96] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#FFB800]"><Icon aria-hidden="true" className="text-xl text-[#FFD45A] transition group-hover:text-[#FFB800]" /><span className="mt-6 flex items-end justify-between gap-2 text-base font-bold">{item.label}<FiArrowUpRight aria-hidden="true" className="shrink-0 text-[#FFD45A]" /></span></a>; })}
				</div>
			</div>
		</section>
	);
}