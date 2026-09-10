import { AboutSection } from "@/components/sections/AboutSection";
import { AudienceSection } from "@/components/sections/AudienceSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { HighlightsStripSection } from "@/components/sections/HighlightsStripSection";
import { NewsSection } from "@/components/sections/NewsSection";
import { PortalFooter } from "@/components/sections/PortalFooter";
import { ProgramsSection } from "@/components/sections/ProgramsSection";
import { PatosPixelSection } from "@/components/sections/PatosPixelSection";
import { QuickAccessSection } from "@/components/sections/QuickAccessSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { StatsSection } from "@/components/sections/StatsSection";

export function PortalSections() {
	return (
		<div className="portal-content-surface">
			<AboutSection />
			<QuickAccessSection />
			<HighlightsStripSection />
			<PatosPixelSection />
			<NewsSection />
			<AudienceSection />
			<ServicesSection />
			<ProgramsSection />
			<FaqSection />
			<ContactSection />
			<StatsSection />
			<PortalFooter />
		</div>
	);
}
