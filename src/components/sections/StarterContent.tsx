import Image from "next/image";

const heroCategories = [
	"Serviços",
	"Programas",
	"Leis e normas",
	"Oportunidades",
	"Notícias",
	"Contato",
];

export function StarterContent() {
	return (
		<main id="inicio" className="overflow-hidden bg-[#f5f8fb]">
			<section className="relative isolate min-h-[calc(100svh-76px)] overflow-hidden bg-[linear-gradient(115deg,#032842_0%,#075b96_58%,#16437e_100%)] font-[family-name:var(--font-joan)] text-white md:min-h-[calc(100vh-76px)]">
				<div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_78%_42%,rgba(255,184,0,0.2),transparent_29%)]" />
				<div className="mx-auto flex min-h-[calc(100svh-76px)] max-w-6xl items-start justify-center px-5 py-20 md:min-h-[calc(100vh-76px)] md:items-center md:py-16">
					<div className="relative z-10 flex w-full max-w-2xl flex-col items-center text-center">
						<p className="mb-2 text-xs font-bold tracking-wide text-[#FFB800]">
							Ciência, Tecnologia e Inovação
						</p>
						<h1 className="text-4xl leading-none sm:text-6xl md:text-7xl">
							Portal <span className="text-[#FFB800]">CiTI-DE</span>
						</h1>
						<p className="mt-5 max-w-xl text-base font-bold leading-6 text-white/90 sm:text-lg">
							O que você precisa? Encontre serviços, programas e informações para impulsionar o desenvolvimento de Patos.
						</p>
						<label className="mt-8 flex w-full max-w-xl items-center gap-3 rounded-full bg-white px-4 py-2.5 text-left shadow-lg ring-1 ring-black/10 sm:px-5">
							<span className="text-2xl leading-none text-[#8b9398] sm:text-3xl" aria-hidden="true">⌕</span>
							<input
								type="search"
								placeholder="Buscar por serviços, leis ou programas"
								className="min-w-0 flex-1 bg-transparent text-sm font-bold text-[#4c5358] outline-none placeholder:text-[#8b9398]"
							/>
						</label>

						{/* Categorias rápidas para orientar o usuário após a busca. */}
						<div className="mt-8 flex w-full max-w-2xl flex-wrap justify-center gap-3 sm:gap-4">
							{heroCategories.map((category) => (
								<a
									key={category}
									href={`#${category.toLowerCase().replaceAll(" ", "-")}`}
									className="flex w-fit items-center justify-center rounded-full border border-white/40 px-4 py-2.5 text-center text-sm font-bold text-white transition hover:border-[#FFB800] hover:bg-white/10"
								>
									{category}
								</a>
							))}
						</div>
					</div>

					{/* Personagens decorativos que equilibram visualmente os dois lados do hero. */}
					<div className="pointer-events-none absolute bottom-3 left-2 w-20 opacity-90 sm:bottom-5 sm:left-5 sm:w-28 md:bottom-8 md:left-8 md:w-40">
						<Image
							src="/images/pato.png"
							alt=""
							width={256}
							height={256}
							className="h-auto w-full object-contain"
						/>
					</div>
					<div className="pointer-events-none absolute bottom-3 left-1/2 z-10 w-20 -translate-x-1/2 opacity-95 sm:bottom-5 sm:w-28 md:bottom-8 md:left-[28%] md:w-40 md:translate-x-0">
						<Image
							src="/images/robou_dando_chau.webp"
							alt="Robô acenando"
							width={256}
							height={256}
							className="h-auto w-full object-contain"
						/>
					</div>

					<div className="pointer-events-none absolute bottom-[-8%] right-[-8%] hidden w-[42%] max-w-xl opacity-90 md:block">
						<div className="absolute left-1/2 top-1/2 -z-10 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#FFB800]/20 blur-3xl" />
						<Image
							src="/images/sol 2.png"
							alt="Ilustração de um sol com faixas azuis e amarelas"
							width={1280}
							height={1280}
							priority
							className="h-auto w-full animate-[pulse_8s_ease-in-out_infinite] object-contain"
						/>
					</div>
				</div>
			</section>
		</main>
	);
}
