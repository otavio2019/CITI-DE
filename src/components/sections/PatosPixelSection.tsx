import Image from "next/image";
import { SectionHeader } from "@/components/ui/SectionHeader";

const pixelPlaces = [
	{
		title: "Cruz da Menina",
		image: "/images/patos-pixel/cruz-da-menina.png",
		alt: "Cruz e capela da Cruz da Menina em pixel art, ao pôr do sol no sertão",
	},
	{
		title: "Catedral Nossa Senhora da Guia",
		image: "/images/patos-pixel/catedral-nossa-senhora-da-guia.png",
		alt: "Catedral Nossa Senhora da Guia em pixel art",
	},
	{
		title: "Igreja Nossa Senhora da Conceição",
		image: "/images/patos-pixel/igreja-nossa-senhora-da-conceicao.png",
		alt: "Igreja Nossa Senhora da Conceição em pixel art",
	},
	{
		title: "Mercado Público",
		image: "/images/patos-pixel/mercado-publico.png",
		alt: "Mercado Público de Patos em pixel art",
	},
];

export function PatosPixelSection() {
	return (
		<section id="patos-em-pixels" className="border-y border-white/10 bg-[linear-gradient(180deg,var(--citi-blue-dark),var(--citi-navy))] px-5 py-16 text-white sm:py-20">
			<div className="mx-auto max-w-6xl">
				<div className="flex flex-col justify-between gap-6 border-b border-white/15 pb-8 md:flex-row md:items-end">
					<SectionHeader eyebrow="Identidade local" title="Patos em pixels" />
					<div className="flex items-center gap-3 text-sm text-white/65 md:pb-2">
						<span className="h-2 w-2 rounded-full bg-[var(--citi-yellow)]" aria-hidden="true" />
						<span>Memória, cultura e território</span>
					</div>
				</div>
				<div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
					{pixelPlaces.map((place) => (
						<article key={place.title} className="group relative isolate overflow-hidden rounded-xl border border-white/15 bg-[var(--citi-blue-dark)] shadow-[0_12px_30px_rgba(0,0,0,0.16)] transition duration-300 hover:-translate-y-1 hover:border-[var(--citi-yellow)]/80 hover:shadow-[0_18px_36px_rgba(0,0,0,0.25)]">
							<div className="relative aspect-[4/3] overflow-hidden">
								<Image src={place.image} alt={place.alt} fill sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw" className="object-cover transition duration-500 group-hover:scale-105" />
								<div className="absolute inset-0 bg-gradient-to-t from-[rgba(3,40,66,0.96)] via-[rgba(3,40,66,0.18)] to-transparent" aria-hidden="true" />
								<div className="absolute inset-x-0 bottom-0 p-4">
									<p className="mb-1 text-[10px] font-bold uppercase tracking-[0.18em] text-[var(--citi-yellow-soft)]">Patos · Paraíba</p>
									<h3 className="text-base font-bold leading-snug text-white sm:text-lg">{place.title}</h3>
								</div>
							</div>
						</article>
					))}
				</div>
			</div>
		</section>
	);
}

export default PatosPixelSection;
