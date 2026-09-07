import { AboutSection } from "@/components/sections/AboutSection";
import { AudienceSection } from "@/components/sections/AudienceSection";
import { PortalFooter } from "@/components/sections/PortalFooter";
import { ProgramsSection } from "@/components/sections/ProgramsSection";
import { QuickAccessSection } from "@/components/sections/QuickAccessSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { StatsSection } from "@/components/sections/StatsSection";

export function PortalSections() {
	return (
		<div className="portal-content-surface">
			<AboutSection />
			<AudienceSection />
			<QuickAccessSection />
			<ServicesSection />
			<ProgramsSection />
			<StatsSection />
			<PortalFooter />
		</div>
	);
}