import Image from "next/image";

export function StarterContent() {
	return (
		<main id="inicio" className="overflow-hidden bg-[#f5f8fb]">
			<section className="relative isolate min-h-[calc(100vh-76px)] overflow-hidden bg-[linear-gradient(115deg,#032842_0%,#0867A8_58%,#0b8fc5_100%)] text-white">
				<div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_80%_45%,rgba(255,184,0,0.24),transparent_28%)]" />
				<div className="mx-auto grid min-h-[calc(100vh-76px)] max-w-6xl items-center gap-8 px-5 py-16 md:grid-cols-[1.05fr_0.95fr] md:py-20">
					<div className="max-w-xl">
						<p className="mb-5 text-sm font-bold uppercase tracking-[0.2em] text-[#FFB800]">
							Inovação que transforma
						</p>
						<h1 className="max-w-lg text-5xl font-bold leading-[0.98] tracking-tight sm:text-6xl">
							O futuro de Patos começa aqui.
						</h1>
						<p className="mt-6 max-w-lg text-lg leading-8 text-white/80">
							Conectamos pessoas, ideias e oportunidades para impulsionar o desenvolvimento
							de Patos - PB.
						</p>
						<div className="mt-9 flex flex-wrap items-center gap-4">
							<a
								href="#servicos"
								className="rounded-full bg-[#FFB800] px-6 py-3 font-bold text-[#032842] transition hover:bg-[#ffc933]"
							>
								Conheça nossos serviços
							</a>
							<a
								href="#informacoes"
								className="rounded-full border border-white/40 px-6 py-3 font-bold text-white transition hover:bg-white/10"
							>
								Saiba mais <span className="text-[#FFB800]">↗</span>
							</a>
						</div>
					</div>

					<div className="relative mx-auto w-full max-w-xl md:translate-x-8">
						<div className="absolute left-1/2 top-1/2 -z-10 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#FFB800]/20 blur-3xl" />
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
