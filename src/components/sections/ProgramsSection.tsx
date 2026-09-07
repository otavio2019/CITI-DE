import { programs } from "@/lib/site-content";
import { programIcons } from "@/lib/site-icons";
import { FiArrowUpRight } from "react-icons/fi";
import { ProgramCard } from "@/components/ui/ProgramCard";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function ProgramsSection() {
	return (
		<section id="programas" className="bg-transparent px-5 py-20 text-white">
			<div className="mx-auto max-w-6xl">
				{/* O link da cartilha complementa os detalhes individuais dos programas. */}
				<div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
					<SectionHeader eyebrow="Em destaque" title="Programas que ajudam Patos a inovar" />
					<a href="https://citide.patos.pb.gov.br/cartilha" className="inline-flex items-center gap-1 font-bold text-[var(--citi-yellow)] hover:text-[var(--citi-yellow-soft)]">
						Ver cartilha completa <FiArrowUpRight aria-hidden="true" />
					</a>
				</div>

				{/* ProgramCard concentra o padrão visual e o CTA de cada iniciativa. */}
				<div className="mt-10 grid gap-5 md:grid-cols-3">
					{programs.map((program) => {
						const Icon = programIcons[program.id as keyof typeof programIcons];

						return <ProgramCard key={program.id} {...program} Icon={Icon} />;
					})}
				</div>
			</div>
		</section>
	);
}