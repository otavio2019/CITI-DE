"use client";

import { FormEvent, useState } from "react";
import { programs, services } from "@/lib/site-content";
import { HeroSection } from "@/components/sections/HeroSection";
import { PortalSections } from "@/components/sections/PortalSections";

// Esta função monta a página na ordem em que o visitante navega por ela.
// O hero permanece aqui porque é a apresentação principal e usa as imagens do projeto.
export function StarterContent() {
	const [searchTerm, setSearchTerm] = useState("");
	const [searchMessage, setSearchMessage] = useState("");

	function handleSearch(event: FormEvent<HTMLFormElement>) {
		event.preventDefault();
		const normalizedTerm = searchTerm.trim().toLocaleLowerCase("pt-BR");

		if (!normalizedTerm) {
			setSearchMessage("Digite um serviço, programa ou palavra-chave para buscar.");
			return;
		}

		const match = [...services, ...programs].find((item) =>
			`${item.title} ${item.text}`.toLocaleLowerCase("pt-BR").includes(normalizedTerm),
		);

		if (match) {
			setSearchMessage(`Encontramos “${match.title}”. Veja esta informação abaixo.`);
				document.getElementById(match.id)?.scrollIntoView({ behavior: "smooth" });
			return;
		}

		setSearchMessage("Ainda não encontramos esse termo. Tente buscar por cursos, empregos ou inovação.");
	}

	return (
		<main id="inicio" className="overflow-hidden bg-[#f5f8fb]">
			<HeroSection
				searchTerm={searchTerm}
				searchMessage={searchMessage}
				onSearch={handleSearch}
				onSearchTermChange={(event) => setSearchTerm(event.target.value)}
			/>

			{/* As demais áreas ficam separadas para facilitar manutenção e evolução. */}
			<PortalSections />
		</main>
	);
}
