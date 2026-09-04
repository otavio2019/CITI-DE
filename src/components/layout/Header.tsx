export default function Header() {
  return (
        <header className="bg-[linear-gradient(to_right,#0867A8_22%,#032842_69%)] px-5 py-4 font-[family-name:var(--font-joan)] text-white">
            <div className="relative mx-auto flex max-w-6xl items-center gap-5">
                <a href="#inicio" className="flex shrink-0 items-center gap-3" aria-label="CiTI-DE início">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white/80 text-xl font-bold text-white">C</span>
                    <span className="flex items-center gap-1 text-3xl font-bold tracking-tight">
                        <span className="text-[#fffff]">CiTI</span><span className="text-[#FFB800]">-DE</span>
                        <span className="relative -top-1 hidden text-[9px] font-bold leading-none text-white/75 sm:inline">Patos - PB</span>
                    </span>
                </a>

                <nav className="absolute left-1/2 hidden -translate-x-1/2 md:block" aria-label="Navegação principal">
                    <ul className="flex items-center gap-8 text-sm">
                        <li><a href="#inicio" className="transition hover:text-[#FFB800]">Início</a></li>
                        <li><a href="#servicos" className="transition hover:text-[#FFB800]">Serviços</a></li>
                        <li><a href="#programas" className="transition hover:text-[#FFB800]">Programas</a></li>
                        <li><a href="#informacoes" className="transition hover:text-[#FFB800]">Informações</a></li>
                    </ul>
                </nav>

                <a href="#portal" className="relative z-10 ml-auto shrink-0 rounded-full border border-white/40 px-4 py-2 text-sm font-medium transition hover:bg-white/10">
                    Acesso Portal <span className="text-[#FFB800]">↗</span>
                </a>
            </div>
    </header>
  );
}