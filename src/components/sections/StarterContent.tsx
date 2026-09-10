"use client";

import { FormEvent, useState } from "react";
import { programs, services } from "@/lib/site-content";
import { HeroSection } from "@/components/sections/HeroSection";
import { PortalSections } from "@/components/sections/PortalSections";

/* -------------------------------------------------------------------------- */
/* Página inicial do portal                                                   */
/* - Controla a busca do hero                                                 */
/* - Monta a ordem: Hero + demais seções                                      */
/* -------------------------------------------------------------------------- */
export function StarterContent() {
	/* ---------------------------------------------------------------------- */
	/* Estado da busca                                                        */
	/* ---------------------------------------------------------------------- */
	const [searchTerm, setSearchTerm] = useState("");
	const [searchMessage, setSearchMessage] = useState("");

	/* ---------------------------------------------------------------------- */
	/* Busca simples em serviços e programas                                  */
	/* ---------------------------------------------------------------------- */
	function handleSearch(event: FormEvent<HTMLFormElement>) {
		event.preventDefault();

		const normalizedTerm = searchTerm.trim().toLocaleLowerCase("pt-BR");

		// Campo vazio
		if (!normalizedTerm) {
			setSearchMessage("Digite um serviço, programa ou palavra-chave para buscar.");
			return;
		}

		// Procura no conteúdo local
		const match = [...services, ...programs].find((item) =>
			`${item.title} ${item.text}`.toLocaleLowerCase("pt-BR").includes(normalizedTerm),
		);

		// Encontrou resultado
		if (match) {
			setSearchMessage(`Encontramos “${match.title}”. Veja esta informação abaixo.`);
			document.getElementById(match.id)?.scrollIntoView({ behavior: "smooth" });
			return;
		}

		// Não encontrou
		setSearchMessage("Ainda não encontramos esse termo. Tente buscar por cursos, empregos ou inovação.");
	}

	/* ---------------------------------------------------------------------- */
	/* Render da página                                                       */
	/* ---------------------------------------------------------------------- */
	return (
		<main id="inicio" className="overflow-hidden bg-[var(--citi-navy)]">
			{/* Parte 1: Hero (apresentação + busca) */}
			<HeroSection
				searchTerm={searchTerm}
				searchMessage={searchMessage}
				onSearch={handleSearch}
				onSearchTermChange={(event) => setSearchTerm(event.target.value)}
			/>

			{/* Parte 2: restante das seções do portal */}
			<PortalSections />
		</main>
	);
}
