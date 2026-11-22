import React, { useState, useEffect } from 'react';
import {
  Compass,
  ChevronDown,
  Phone,
  ShieldCheck,
  Layers,
  Map,
  FileSearch,
  Scaling,
  MapPin,
  GitCompare,
  FileCheck2,
  Menu,
  X,
  ArrowUpRight,
  Sparkles,
} from 'lucide-react';
import { COMPANY_INFO, CORE_SERVICES, ServiceItem } from '../data/surveyData';

interface NavbarProps {
  onSelectService: (serviceId: string) => void;
  onOpenBookingModal: (defaultService?: string) => void;
  onOpenReportModal: () => void;
}

const SERVICE_ICONS: Record<string, React.ReactNode> = {
  'digital-survey': <Compass className="w-5 h-5 text-[#0066FF]" />,
  'map-preparation': <Map className="w-5 h-5 text-emerald-400" />,
  'deeds-mouza-retrieval': <FileSearch className="w-5 h-5 text-cyan-400" />,
  'pantograph': <Scaling className="w-5 h-5 text-amber-400" />,
  'demarcation': <MapPin className="w-5 h-5 text-lime-400" />,
  'overlap': <GitCompare className="w-5 h-5 text-fuchsia-400" />,
  'record-verification': <FileCheck2 className="w-5 h-5 text-sky-400" />,
};

export const Navbar: React.FC<NavbarProps> = ({
  onSelectService,
  onOpenBookingModal,
  onOpenReportModal,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleServiceJump = (service: ServiceItem) => {
    setMegaMenuOpen(false);
    setMobileMenuOpen(false);
    onSelectService(service.id);
    const el = document.getElementById('services-suite');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top Credential & Direct Hotline Ribbon */}
      <div className="bg-[#050912] border-b border-slate-800/80 text-xs text-slate-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-9 flex items-center justify-between">
          <div className="flex items-center gap-3 overflow-x-auto no-scrollbar py-1">
            <span className="font-mono text-emerald-400 font-semibold tracking-wider px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20">
              {COMPANY_INFO.bismillahCode}
            </span>
            <span className="hidden md:inline-flex items-center gap-1.5 text-slate-300">
              <ShieldCheck className="w-3.5 h-3.5 text-[#00D4FF]" />
              <span>Lead Surveyor: <strong className="text-white">Faysal Ahamad Shanto</strong></span>
            </span>
            <span className="hidden lg:inline-block text-slate-600">|</span>
            <span className="hidden lg:inline-block font-mono text-[11px] text-slate-400">
              Reg No: <strong className="text-slate-200">1111210</strong> • Cert No: <strong className="text-slate-200">19570/22</strong> • BS-AS: <strong className="text-emerald-400">898/26</strong>
            </span>
          </div>

          <div className="flex items-center gap-4 shrink-0">
            <a
              href="tel:01754246123"
              className="inline-flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors font-mono"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-400" />
              <span>01754-246123</span>
            </a>
            <span className="hidden sm:inline text-slate-600">/</span>
            <a
              href="tel:01521715896"
              className="hidden sm:inline-flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors font-mono"
            >
              <span>01521-715896</span>
            </a>
            <button
              onClick={onOpenReportModal}
              className="hidden sm:inline-flex items-center gap-1 text-[#00D4FF] hover:text-white font-medium transition-colors"
            >
              <span>Inspect Sample Report</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Propeller-Style Sticky Navigation Bar */}
      <nav
        onMouseLeave={() => setMegaMenuOpen(false)}
        className={`transition-all duration-300 ${
          scrolled
            ? 'bg-[#0A1120]/95 backdrop-blur-xl border-b border-slate-800/90 shadow-2xl'
            : 'bg-[#0A1120]/85 backdrop-blur-md border-b border-slate-800/50'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-3.5 group">
            <div className="relative w-11 h-11 rounded-xl bg-gradient-to-br from-emerald-500/20 via-[#0066FF]/20 to-cyan-500/20 border border-emerald-400/40 flex items-center justify-center shadow-glow-emerald group-hover:border-[#00D4FF] transition-all">
              <Compass className="w-6 h-6 text-emerald-400 group-hover:rotate-45 transition-transform duration-500" />
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-[#0066FF] ring-2 ring-[#0A1120]" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-display font-extrabold text-lg sm:text-xl tracking-tight text-white">
                  EXPRESS
                </span>
                <span className="text-xs font-mono uppercase px-2 py-0.5 rounded bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 font-semibold">
                  Digital Land Survey
                </span>
              </div>
              <p className="text-[11px] text-slate-400 hidden sm:block">
                Digital Survey • Map Prep • Deeds/Mouza • Pantograph • Demarcation • Overlap • Verification
              </p>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-1">
            {/* Mega-Dropdown Trigger for the 7 Services */}
            <div className="relative">
              <button
                onMouseEnter={() => setMegaMenuOpen(true)}
                onClick={() => setMegaMenuOpen(!megaMenuOpen)}
                className={`px-3.5 py-2 rounded-lg text-sm font-medium inline-flex items-center gap-1.5 transition-colors ${
                  megaMenuOpen
                    ? 'text-white bg-slate-800/90'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                }`}
              >
                <Layers className="w-4 h-4 text-[#00D4FF]" />
                <span>7 Core Services</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    megaMenuOpen ? 'rotate-180 text-[#00D4FF]' : ''
                  }`}
                />
              </button>
            </div>

            <a
              href="#cad-platform"
              className="px-3.5 py-2 rounded-lg text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800/50 transition-colors"
            >
              3D / CAD Platform
            </a>
            <a
              href="#overlap-engine"
              className="px-3.5 py-2 rounded-lg text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800/50 transition-colors"
            >
              CS vs RS Overlap
            </a>
            <a
              href="#pantograph-tool"
              className="px-3.5 py-2 rounded-lg text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800/50 transition-colors"
            >
              Pantograph & Calculator
            </a>
            <a
              href="#official-report"
              className="px-3.5 py-2 rounded-lg text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800/50 transition-colors"
            >
              Survey Report
            </a>
            <a
              href="#surveyors"
              className="px-3.5 py-2 rounded-lg text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800/50 transition-colors"
            >
              Surveyors
            </a>
          </div>

          {/* Right CTAs (Propeller Aero style) */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={onOpenReportModal}
              className="px-4 py-2.5 rounded-lg text-sm font-semibold text-slate-200 hover:text-white border border-slate-700 hover:border-slate-500 bg-slate-900/60 transition-all"
            >
              Report Sheet (Plot 308)
            </button>
            <button
              onClick={() => onOpenBookingModal()}
              className="px-5 py-2.5 rounded-lg text-sm font-semibold text-white bg-[#0066FF] hover:bg-[#0052CC] shadow-glow-blue transition-all inline-flex items-center gap-2"
            >
              <span>Book a Survey</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2.5 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800/60"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Propeller-Style Mega Menu Dropdown for the 7 Services */}
        {megaMenuOpen && (
          <div
            onMouseEnter={() => setMegaMenuOpen(true)}
            onMouseLeave={() => setMegaMenuOpen(false)}
            className="hidden lg:block border-t border-slate-800 bg-[#0B1324]/98 backdrop-blur-2xl shadow-2xl"
          >
            <div className="max-w-7xl mx-auto px-8 py-7">
              <div className="flex items-center justify-between mb-5 pb-3 border-b border-slate-800/80">
                <div>
                  <span className="text-xs font-mono uppercase tracking-widest text-[#00D4FF] font-semibold">
                    EXPRESS DIGITAL LAND SURVEY ECOSYSTEM
                  </span>
                  <h3 className="text-lg font-display font-bold text-white mt-0.5">
                    7 Core Surveying & Cadastral Engineering Services
                  </h3>
                </div>
                <div className="flex items-center gap-3 text-xs text-slate-400 font-mono">
                  <span className="px-2.5 py-1 rounded bg-slate-800/90 border border-slate-700 text-emerald-300">
                    Standard Scale: 1" = 64 Feet
                  </span>
                  <span className="px-2.5 py-1 rounded bg-slate-800/90 border border-slate-700 text-cyan-300">
                    CS • SA • RS • BS Verified
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-4 gap-3.5">
                {CORE_SERVICES.map((service) => (
                  <button
                    key={service.id}
                    onClick={() => handleServiceJump(service)}
                    className="text-left p-4 rounded-xl bg-slate-900/70 hover:bg-slate-800/90 border border-slate-800 hover:border-[#0066FF]/60 transition-all group flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2.5">
                        <div className="p-2 rounded-lg bg-slate-950/90 border border-slate-800 group-hover:border-slate-700">
                          {SERVICE_ICONS[service.id]}
                        </div>
                        <span className="font-mono text-xs text-slate-500 group-hover:text-[#00D4FF]">
                          {service.number}
                        </span>
                      </div>
                      <h4 className="font-display font-bold text-sm text-white group-hover:text-[#00D4FF] transition-colors">
                        {service.title}
                      </h4>
                      <p className="text-xs text-slate-400 mt-1 line-clamp-2 leading-relaxed">
                        {service.tagline}
                      </p>
                    </div>
                    <div className="mt-3 pt-2.5 border-t border-slate-800/60 flex items-center justify-between text-[11px] font-mono text-slate-400">
                      <span>{service.accuracySpec.split(' ')[0]}</span>
                      <span className="text-[#0066FF] group-hover:translate-x-0.5 transition-transform">
                        Explore →
                      </span>
                    </div>
                  </button>
                ))}

                {/* 8th Card: Interactive Report Preview Callout */}
                <div className="p-4 rounded-xl bg-gradient-to-br from-[#0066FF]/20 via-slate-900 to-emerald-500/15 border border-[#0066FF]/40 flex flex-col justify-between">
                  <div>
                    <div className="inline-flex items-center gap-1.5 text-[11px] font-mono uppercase px-2 py-0.5 rounded bg-[#0066FF]/20 text-cyan-300 border border-cyan-500/30 mb-2">
                      <Sparkles className="w-3 h-3" /> Live Case Study
                    </div>
                    <h4 className="font-display font-bold text-sm text-white">
                      Parain Mouja Plot 308 Survey Report
                    </h4>
                    <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                      Inspect our real 11/10/2026 CAD report in Rupgonj, Narayanganj with CS/RS overlap & BWDB corridor analysis.
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      setMegaMenuOpen(false);
                      onOpenReportModal();
                    }}
                    className="mt-3 w-full py-2 px-3 rounded-lg bg-[#0066FF] hover:bg-[#0052CC] text-white text-xs font-semibold transition-colors text-center"
                  >
                    Open Full CAD Sheet →
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Mobile Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-800 bg-[#0A1120] px-4 pt-4 pb-6 space-y-4 max-h-[85vh] overflow-y-auto">
            <div className="text-xs font-mono uppercase text-[#00D4FF] tracking-wider px-2">
              7 Core Services Below Our Name
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {CORE_SERVICES.map((service) => (
                <button
                  key={service.id}
                  onClick={() => handleServiceJump(service)}
                  className="flex items-center gap-3 p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-left"
                >
                  <div className="p-2 rounded-lg bg-slate-950">{SERVICE_ICONS[service.id]}</div>
                  <div>
                    <div className="text-sm font-semibold text-white">{service.title}</div>
                    <div className="text-[11px] text-slate-400 line-clamp-1">{service.tagline}</div>
                  </div>
                </button>
              ))}
            </div>

            <div className="border-t border-slate-800 pt-3 flex flex-col gap-2">
              <a
                href="#cad-platform"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg text-sm font-medium text-slate-200 hover:bg-slate-800"
              >
                Interactive 3D / CAD Map Viewer
              </a>
              <a
                href="#overlap-engine"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg text-sm font-medium text-slate-200 hover:bg-slate-800"
              >
                CS / RS / BWDB Overlap Analyzer
              </a>
              <a
                href="#pantograph-tool"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg text-sm font-medium text-slate-200 hover:bg-slate-800"
              >
                Digital Pantograph & Area Calculator
              </a>
              <a
                href="#official-report"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg text-sm font-medium text-slate-200 hover:bg-slate-800"
              >
                Official Survey Report (11/10/2026)
              </a>
              <a
                href="#surveyors"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg text-sm font-medium text-slate-200 hover:bg-slate-800"
              >
                Certified Surveyors & Credentials
              </a>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row gap-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenReportModal();
                }}
                className="w-full py-2.5 px-4 rounded-lg border border-slate-700 text-sm font-semibold text-white bg-slate-900"
              >
                Inspect Report Sheet
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBookingModal();
                }}
                className="w-full py-2.5 px-4 rounded-lg bg-[#0066FF] text-sm font-semibold text-white"
              >
                Book a Field Survey
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
