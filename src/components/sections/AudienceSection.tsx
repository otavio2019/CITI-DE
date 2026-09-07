"use client";

import { useState } from "react";
import { audiencePaths } from "@/lib/site-content";
import { FiArrowUpRight, FiBriefcase, FiUsers } from "react-icons/fi";

export function AudienceSection() {
	const [audience, setAudience] = useState<keyof typeof audiencePaths>("cidadao");
	const selectedAudience = audiencePaths[audience];

	return (
		<section id="publicos" className="bg-transparent px-5 py-20 text-white">
			<div className="mx-auto max-w-6xl"><div className="max-w-2xl"><p className="text-sm font-bold uppercase tracking-[0.18em] text-[var(--citi-yellow-soft)]">Escolha seu perfil</p><h2 className="mt-3 text-4xl leading-tight sm:text-5xl">Encontre oportunidades para você</h2><p className="mt-4 text-lg leading-8 text-white/75">Selecione seu perfil para ver programas, serviços e caminhos relevantes para sua próxima decisão.</p></div>
				<div className="mt-10 grid gap-4 md:grid-cols-2">{(Object.entries(audiencePaths) as [keyof typeof audiencePaths, (typeof audiencePaths)[keyof typeof audiencePaths]][]).map(([key, path]) => <button key={key} type="button" onClick={() => setAudience(key)} aria-pressed={audience === key} className={`group rounded-2xl border p-6 text-left transition ${audience === key ? "border-[var(--citi-yellow)] bg-[var(--citi-yellow)] text-[var(--citi-navy)] shadow-[0_16px_40px_rgba(255,184,0,0.18)]" : "border-white/20 bg-white/5 text-white hover:border-[var(--citi-yellow-soft)] hover:bg-white/10"}`}><div className="flex items-center justify-between gap-4"><div className={`flex h-12 w-12 items-center justify-center rounded-xl ${audience === key ? "bg-[var(--citi-navy)] text-[var(--citi-yellow)]" : "bg-[var(--citi-blue)] text-white"}`}>{key === "cidadao" ? <FiUsers aria-hidden="true" size={22} /> : <FiBriefcase aria-hidden="true" size={22} />}</div><FiArrowUpRight aria-hidden="true" className={`text-2xl transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 ${audience === key ? "text-[var(--citi-navy)]" : "text-[var(--citi-yellow-soft)]"}`} /></div><h3 className="mt-6 text-2xl">{path.label}</h3><p className={`mt-2 leading-7 ${audience === key ? "text-[var(--citi-text)]" : "text-white/70"}`}>{path.intro}</p></button>)}</div>
				<div className="mt-6 rounded-2xl border border-white/15 bg-[var(--citi-blue-dark)] p-6 sm:p-8"><div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end"><div><p className="text-sm font-bold uppercase tracking-[0.16em] text-[var(--citi-yellow-soft)]">Acessos recomendados</p><h3 className="mt-2 text-2xl">{selectedAudience.label}</h3></div><p className="max-w-xl text-sm leading-6 text-white/75">{selectedAudience.intro}</p></div><div className="mt-6 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">{selectedAudience.items.map((item) => <a key={item.label} href={item.href} className="inline-flex items-center justify-between gap-3 rounded-xl border border-white/15 bg-[var(--citi-navy)]/35 px-4 py-3 text-sm transition hover:border-[var(--citi-yellow-soft)] hover:bg-[var(--citi-navy)]/60"><span>{item.label}</span><FiArrowUpRight aria-hidden="true" className="shrink-0 text-[var(--citi-yellow-soft)]" /></a>)}</div></div>
			</div>
		</section>
	);
}