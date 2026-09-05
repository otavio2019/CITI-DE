"use client";

import Image from "next/image";
import { FormEvent, useState } from "react";
import { heroCategories, programs, services } from "@/lib/site-content";
import { PortalSections } from "@/components/sections/PortalSections";
import { FiSearch } from "react-icons/fi";

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
			{/* Hero: primeira impressão do portal e atalhos para os conteúdos principais. */}
			<section className="relative isolate min-h-[calc(100svh-76px)] overflow-hidden bg-[linear-gradient(115deg,#032842_0%,#075b96_58%,#16437e_100%)] text-white md:min-h-[calc(100vh-76px)]">
				<div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_76%_48%,rgba(255,184,0,0.34),transparent_34%)]" />
				<div className="absolute bottom-0 right-0 -z-10 h-[56%] w-full overflow-hidden md:top-0 md:h-full md:w-[60%]">
					<div className="absolute right-[12%] top-[18%] h-[52%] w-[72%] rounded-full bg-[#FFB800]/20 blur-3xl" />
					<Image src="/images/sol 2.png" alt="Sol com faixas azuis e amarelas, símbolo de energia e inovação" width={1280} height={1280} priority className="absolute left-[5%] top-[-9%] h-[118%] w-[112%] max-w-none object-contain md:left-[-3%] md:top-[-4%] md:h-[108%]" />
				</div>
				<div className="relative mx-auto flex min-h-[calc(100svh-76px)] max-w-7xl items-center px-5 pb-40 pt-16 sm:px-8 md:min-h-[calc(100vh-76px)] md:px-10 md:py-12">
					<div className="relative z-10 w-full max-w-xl text-left md:w-[52%]">
						<p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-[#FFD45A]">Ciência, Tecnologia e Inovação</p>
						<h1 className="whitespace-nowrap font-[family-name:var(--font-joan)] text-[clamp(2.5rem,10vw,7rem)] leading-none">
							Portal <span className="text-[#FFB800]">CiTI-DE</span></h1>
						<p className="mt-6 max-w-lg text-base leading-7 text-white/90 sm:text-lg">Serviços, programas e informações para impulsionar o desenvolvimento de Patos.</p>
						<form onSubmit={handleSearch} className="mt-8 max-w-xl">
							<label htmlFor="site-search" className="sr-only">Buscar no portal CiTI-DE</label>
							<div className="flex items-center gap-2 rounded-2xl bg-white p-2 shadow-2xl ring-1 ring-white/30">
								<FiSearch className="ml-3 shrink-0 text-xl text-[#8b9398]" aria-hidden="true" />
								<input id="site-search" type="search" value={searchTerm} onChange={(event) => setSearchTerm(event.target.value)} placeholder="Buscar serviços ou programas" className="min-w-0 flex-1 bg-transparent px-2 py-3 text-sm font-medium text-[#172B3A] outline-none placeholder:text-[#8b9398]" />
							</div>
							{searchMessage && <p role="status" className="mt-3 text-sm font-medium text-[#FFD45A]">{searchMessage}</p>}
						</form>

						{/* Os atalhos usam dados externos para que texto e destinos fiquem centralizados. */}
						<div className="mt-8 flex w-full flex-wrap gap-2.5 sm:gap-3">
							{heroCategories.map((category) => (
								<a key={category.label} href={category.href} className="flex w-fit shrink-0 items-center justify-center rounded-full border border-white/35 bg-[#032842]/25 px-3.5 py-2 text-center text-xs font-bold text-white transition hover:border-[#FFB800] hover:bg-[#FFB800]/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#FFB800] sm:text-sm">
									{category.label}
								</a>
							))}
						</div>
					</div>

					{/* Personagens: menores e baixos para reforçar a escala do sol sem competir com ele. */}
					<div className="pointer-events-none absolute bottom-1 left-2 z-20 w-16 sm:bottom-3 sm:left-5 sm:w-24 md:bottom-5 md:left-10 md:w-32">
						<Image src="/images/pato.png" alt="" width={256} height={256} className="h-auto w-full object-contain" />
					</div>
					<div className="pointer-events-none absolute bottom-1 left-[38%] z-20 w-16 -translate-x-1/2 sm:bottom-3 sm:w-24 md:bottom-5 md:left-[34%] md:w-28 md:translate-x-0">
						<Image src="/images/robou_dando_chau.webp" alt="Robô acenando" width={256} height={256} className="h-auto w-full object-contain" />
					</div>
				</div>
			</section>

			{/* As demais áreas ficam separadas para facilitar manutenção e evolução. */}
			<PortalSections />
		</main>
	);
}
