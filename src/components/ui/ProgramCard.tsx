import type { IconType } from "react-icons";
import { FiArrowUpRight } from "react-icons/fi";
import { ActionButton } from "@/components/ui/ActionButton";
import { StatusBadge } from "@/components/ui/StatusBadge";

type ProgramCardProps = {
	id: string;
	title: string;
	text: string;
	status: string;
	Icon: IconType;
};

export function ProgramCard({ id, title, text, status, Icon }: ProgramCardProps) {
	// Card de iniciativa pública: direciona para a página detalhada do programa.
	return <article id={id} className="flex h-full flex-col rounded-2xl border border-white/15 bg-white/10 p-6 text-white shadow-sm transition hover:-translate-y-1 hover:border-[var(--citi-yellow)] hover:bg-white/15 hover:shadow-md">
		<div className="flex items-start justify-between gap-3"><div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--citi-blue)] text-white"><Icon aria-hidden="true" /></div><StatusBadge label={status} /></div>
		<h3 className="mt-5 text-2xl">{title}</h3><p className="mt-3 flex-1 leading-7 text-white/75">{text}</p>
		<ActionButton href={`/programas/${id}`} variant="outline" className="mt-6 w-fit">Conhecer programa <FiArrowUpRight aria-hidden="true" /></ActionButton>
	</article>;
}
