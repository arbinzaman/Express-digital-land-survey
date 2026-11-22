import React from 'react';
import {
  Compass,
  Map,
  FileSearch,
  Scaling,
  MapPin,
  GitCompare,
  FileCheck2,
  CheckCircle2,
  ArrowRight,
  Clock,
  Crosshair,
  Sparkles,
  Layers,
} from 'lucide-react';
import { CORE_SERVICES, ServiceItem } from '../data/surveyData';

interface ServicesSuiteSectionProps {
  activeServiceId: string;
  onSelectService: (serviceId: string) => void;
  onOpenBookingModal: (defaultService?: string) => void;
}

const SERVICE_ICONS: Record<string, React.ReactNode> = {
  'digital-survey': <Compass className="w-5 h-5" />,
  'map-preparation': <Map className="w-5 h-5" />,
  'deeds-mouza-retrieval': <FileSearch className="w-5 h-5" />,
  'pantograph': <Scaling className="w-5 h-5" />,
  'demarcation': <MapPin className="w-5 h-5" />,
  'overlap': <GitCompare className="w-5 h-5" />,
  'record-verification': <FileCheck2 className="w-5 h-5" />,
};

export const ServicesSuiteSection: React.FC<ServicesSuiteSectionProps> = ({
  activeServiceId,
  onSelectService,
  onOpenBookingModal,
}) => {
  const activeService: ServiceItem =
    CORE_SERVICES.find((s) => s.id === activeServiceId) || CORE_SERVICES[0];

  return (
    <section id="services-suite" className="py-24 bg-[#070C17] relative border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-xs font-mono text-emerald-300 mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>CORE PLATFORM CAPABILITIES • 7 SPECIALIZED SERVICES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight">
            Built for Complete Field-to-Registry{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-[#00D4FF]">
              Land Certainty.
            </span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg mt-4 leading-relaxed">
            Explore the seven integrated services offered by <strong className="text-white">EXPRESS Digital Land Survey</strong>. Select any module below to inspect its workflow, accuracy metrics, and certified deliverables.
          </p>
        </div>

        {/* Propeller-Style Horizontal Pill Switcher for the 7 Services */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-8 no-scrollbar border-b border-slate-800">
          {CORE_SERVICES.map((service) => {
            const isActive = service.id === activeService.id;
            return (
              <button
                key={service.id}
                onClick={() => onSelectService(service.id)}
                className={`px-4 py-3 rounded-xl font-display font-bold text-xs sm:text-sm whitespace-nowrap transition-all inline-flex items-center gap-2.5 border ${
                  isActive
                    ? 'bg-[#0066FF] text-white border-[#00D4FF] shadow-glow-blue'
                    : 'bg-slate-900/80 text-slate-300 border-slate-800 hover:bg-slate-800 hover:text-white'
                }`}
              >
                <span className={isActive ? 'text-white' : 'text-[#00D4FF]'}>
                  {SERVICE_ICONS[service.id]}
                </span>
                <span>{service.title}</span>
                <span
                  className={`text-[10px] font-mono px-1.5 py-0.5 rounded ${
                    isActive ? 'bg-white/20 text-white' : 'bg-slate-800 text-slate-400'
                  }`}
                >
                  {service.number}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Service Deep-Dive Showcase (Propeller Interactive Feature Panel) */}
        <div className="rounded-3xl bg-gradient-to-br from-[#0E172A] via-[#0B1222] to-[#080E1A] border border-slate-800 p-6 sm:p-10 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left 7 Columns: Service Overview, Deliverables & CTA */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex flex-wrap items-center gap-3">
                <span className="px-3 py-1 rounded-md text-xs font-mono uppercase font-bold bg-[#0066FF]/20 text-[#00D4FF] border border-[#0066FF]/40">
                  SERVICE {activeService.number} // {activeService.badge}
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-md border border-emerald-500/20">
                  <Crosshair className="w-3.5 h-3.5" />
                  {activeService.accuracySpec}
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs font-mono text-amber-300 bg-amber-500/10 px-2.5 py-1 rounded-md border border-amber-500/20">
                  <Clock className="w-3.5 h-3.5" />
                  {activeService.turnaround}
                </span>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold text-white">
                  {activeService.title}
                </h3>
                <p className="text-lg font-medium text-[#00D4FF] mt-1.5">
                  {activeService.tagline}
                </p>
                <p className="text-slate-300 text-sm sm:text-base mt-4 leading-relaxed">
                  {activeService.description}
                </p>
              </div>

              {/* Deliverables List */}
              <div className="p-5 rounded-2xl bg-slate-900/75 border border-slate-800/90">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold mb-3.5">
                  CERTIFIED DELIVERABLES & OUTPUTS
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {activeService.deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-slate-200 leading-snug">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Metrics Row + Booking Button */}
              <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                <div className="flex items-center gap-6">
                  {activeService.metrics.map((metric, idx) => (
                    <div key={idx}>
                      <div className="text-xl sm:text-2xl font-display font-extrabold text-white font-mono">
                        {metric.value}
                      </div>
                      <div className="text-xs text-slate-400">{metric.label}</div>
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => onOpenBookingModal(activeService.title)}
                  className="px-6 py-3.5 rounded-xl bg-[#0066FF] hover:bg-[#0052CC] text-white font-display font-bold text-sm shadow-glow-blue transition-all inline-flex items-center justify-center gap-2 shrink-0"
                >
                  <span>Request {activeService.shortTitle}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right 5 Columns: 3-Stage Field-to-Office Pipeline & Highlights */}
            <div className="lg:col-span-5 space-y-5">
              <div className="p-6 rounded-2xl bg-[#070C16] border border-slate-800 relative overflow-hidden">
                <div className="flex items-center justify-between mb-5">
                  <span className="text-xs font-mono uppercase tracking-wider text-[#00D4FF] font-semibold">
                    EXECUTION WORKFLOW PIPELINE
                  </span>
                  <Layers className="w-4 h-4 text-slate-400" />
                </div>

                <div className="space-y-4 relative">
                  {activeService.workflowSteps.map((step, index) => (
                    <div
                      key={index}
                      className="p-4 rounded-xl bg-slate-900/90 border border-slate-800/90 flex items-start gap-3.5"
                    >
                      <div className="w-7 h-7 rounded-lg bg-[#0066FF]/20 border border-[#0066FF]/50 text-[#00D4FF] font-mono text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                        0{index + 1}
                      </div>
                      <div>
                        <h5 className="text-sm font-display font-bold text-white">
                          {step.title}
                        </h5>
                        <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                          {step.detail}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Why It Matters Box */}
                <div className="mt-5 pt-5 border-t border-slate-800/90">
                  <div className="text-xs font-mono uppercase text-emerald-400 font-semibold mb-2.5">
                    WHY CLIENTS TRUST THIS MODULE
                  </div>
                  <ul className="space-y-2">
                    {activeService.highlights.map((highlight, idx) => (
                      <li key={idx} className="text-xs text-slate-300 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* All 7 Services Quick-Access Bento Grid (Propeller Overview Grid) */}
        <div className="mt-14">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-display font-bold text-slate-200">
              All 7 Core Services at a Glance
            </h3>
            <span className="text-xs font-mono text-slate-400">
              Click any card to inspect full specifications
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {CORE_SERVICES.map((service) => {
              const isSelected = service.id === activeService.id;
              return (
                <div
                  key={service.id}
                  onClick={() => onSelectService(service.id)}
                  className={`cursor-pointer p-5 rounded-2xl border transition-all flex flex-col justify-between ${
                    isSelected
                      ? 'bg-slate-900 border-[#0066FF] ring-1 ring-[#00D4FF]/50 shadow-glow-blue'
                      : 'bg-slate-900/40 border-slate-800/90 hover:bg-slate-900/80 hover:border-slate-700'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div
                        className={`p-2.5 rounded-xl border ${
                          isSelected
                            ? 'bg-[#0066FF]/20 border-[#00D4FF]/40 text-[#00D4FF]'
                            : 'bg-slate-950 border-slate-800 text-emerald-400'
                        }`}
                      >
                        {SERVICE_ICONS[service.id]}
                      </div>
                      <span className="font-mono text-xs text-slate-500">
                        #{service.number}
                      </span>
                    </div>
                    <h4 className="font-display font-bold text-base text-white">
                      {service.title}
                    </h4>
                    <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">
                      {service.tagline}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono">
                    <span className="text-emerald-400">{service.turnaround.split(' ')[0]}</span>
                    <span className="text-[#00D4FF] font-semibold">
                      {isSelected ? 'Active View' : 'Inspect →'}
                    </span>
                  </div>
                </div>
              );
            })}

            {/* 8th Bento Card: Custom Package CTA */}
            <div className="p-5 rounded-2xl bg-gradient-to-br from-emerald-500/15 via-slate-900 to-[#0066FF]/15 border border-emerald-500/30 flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-mono uppercase px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  COMPLETE TURNKEY SURVEY
                </span>
                <h4 className="font-display font-bold text-base text-white mt-3">
                  Need All 7 Services Combined?
                </h4>
                <p className="text-xs text-slate-300 mt-1.5 leading-relaxed">
                  Book our full-stack package: Mouza Retrieval + Field Total Station Survey + Overlap Map + On-Site Pillar Demarcation.
                </p>
              </div>
              <button
                onClick={() => onOpenBookingModal('Complete 7-Service Turnkey Package')}
                className="mt-4 w-full py-2.5 px-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-display font-bold text-xs transition-colors"
              >
                Book Full Package →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
