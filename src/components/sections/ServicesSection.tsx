import { services } from "@/lib/site-content";
import { serviceIcons } from "@/lib/site-icons";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ServiceCard } from "@/components/ui/ServiceCard";

export function ServicesSection() {
	return (
		<section id="servicos" className="bg-transparent px-5 py-20 text-white">
			<div className="mx-auto max-w-6xl">
				{/* Cabeçalho contextualiza a seção antes dos cards. */}
				<SectionHeader
					eyebrow="Ações diretas"
					title="Serviços para resolver o que você precisa"
					description="Acesse diretamente cursos, empregos, atendimento e oportunidades disponíveis para cidadãos, empresas e instituições."
				/>

				{/* Cada serviço resolve uma ação específica e possui seu próprio CTA. */}
				<div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
					{services.map((service) => {
						const Icon = serviceIcons[service.id as keyof typeof serviceIcons];

						return <ServiceCard key={service.id} {...service} Icon={Icon} />;
					})}
				</div>
			</div>
		</section>
	);
}