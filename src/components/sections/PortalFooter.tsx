import Image from "next/image";

export function PortalFooter() {
	return (
		<footer id="portal" className="bg-[#021c2e] px-5 py-12 text-sm text-white/65">
			<div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[1.2fr_1fr_1fr]">
				<div>
					<div className="flex items-center gap-3">
						<Image src="/icons/logo.png" alt="Logo CiTI-DE" width={48} height={48} className="h-12 w-12 object-contain" />
						<div>
							<p className="font-[family-name:var(--font-joan)] text-xl text-white">CiTI-DE</p>
							<p className="text-xs text-white/60">Prefeitura de Patos</p>
						</div>
					</div>
					<p className="mt-5 max-w-sm leading-6">Secretaria de Ciência, Tecnologia, Inovação e Desenvolvimento Econômico.</p>
				</div>
				<div>
					<p className="font-bold uppercase tracking-[0.14em] text-[#FFD45A]">Atendimento</p>
					<div className="mt-3 space-y-2 leading-6">
						<p>08:00 às 14:00</p>
						<p>Avenida Vidal de Negreiros, 84 - Centro, Patos - PB</p>
						<a href="mailto:citi-de@patos.pb.gov.br" className="block transition hover:text-[#FFB800]">citi-de@patos.pb.gov.br</a>
					</div>
				</div>
				<div>
					<p className="font-bold uppercase tracking-[0.14em] text-[#FFD45A]">Links oficiais</p>
					<div className="mt-3 flex flex-col items-start gap-2">
						<a href="https://patos.pb.gov.br/" className="transition hover:text-[#FFB800]">Portal da Prefeitura ↗</a>
						<a href="https://www.instagram.com/citide_patos/" className="transition hover:text-[#FFB800]">Instagram CiTI-DE ↗</a>
						<a href="https://www.instagram.com/pmpatos/" className="transition hover:text-[#FFB800]">Instagram Prefeitura ↗</a>
						<a href="https://transparencia.patos.pb.gov.br/" className="transition hover:text-[#FFB800]">Transparência ↗</a>
					</div>
				</div>
			</div>
			<div className="mx-auto mt-10 flex max-w-6xl flex-col justify-between gap-3 border-t border-white/10 pt-5 text-xs sm:flex-row">
				<p>© Prefeitura de Patos · Todos os direitos reservados.</p>
				<div className="flex gap-4"><a href="#acessibilidade" className="hover:text-[#FFB800]">Acessibilidade</a><a href="#privacidade" className="hover:text-[#FFB800]">Política de privacidade</a></div>
			</div>
			<div className="mx-auto mt-4 flex max-w-6xl flex-col gap-1 text-xs text-white/45 sm:flex-row sm:gap-5">
				<p id="acessibilidade">Acessibilidade: este portal prioriza contraste, navegação por teclado e textos alternativos.</p>
				<p id="privacidade">Política de privacidade: os dados informados são tratados conforme a legislação aplicável.</p>
			</div>
		</footer>
	);
}