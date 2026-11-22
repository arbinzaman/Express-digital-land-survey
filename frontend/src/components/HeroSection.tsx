import React from 'react';
import {
  ArrowRight,
  CheckCircle2,
  Compass,
  Crosshair,
  FileCheck,
  Layers,
  MapPin,
  PhoneCall,
  Shield,
  Sparkles,
  Eye,
} from 'lucide-react';
import { COMPANY_INFO, CORE_SERVICES } from '../data/surveyData';

interface HeroSectionProps {
  activeServiceId: string;
  onSelectService: (serviceId: string) => void;
  onOpenBookingModal: (defaultService?: string) => void;
  onOpenReportModal: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  activeServiceId,
  onSelectService,
  onOpenBookingModal,
  onOpenReportModal,
}) => {
  return (
    <section className="relative pt-36 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-cad-grid border-b border-slate-800/80">
      {/* Ambient Radial Spotlights (Propeller Aero signature lighting) */}
      <div className="pointer-events-none absolute -top-40 left-1/4 w-[650px] h-[650px] rounded-full bg-[#0066FF]/15 blur-[130px]" />
      <div className="pointer-events-none absolute top-20 right-10 w-[500px] h-[500px] rounded-full bg-emerald-500/10 blur-[120px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Official Identity Banner modeled after the PDF Header */}
        <div className="mb-10 p-4 sm:p-5 rounded-2xl bg-slate-900/80 border border-emerald-500/30 backdrop-blur-xl shadow-2xl">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-1.5">
                <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  {COMPANY_INFO.bismillahCode}
                </span>
                <span className="text-xs font-mono uppercase tracking-wider text-[#00D4FF] font-semibold">
                  GOVERNMENT REGISTERED CADASTRAL & DIGITAL SURVEY PLATFORM
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-display font-extrabold tracking-tight text-white">
                <span className="text-emerald-400">EXPRESS</span> digital land survey
              </h2>
            </div>

            {/* The Exact 7 Services Below the Name (Interactive Pills) */}
            <div className="flex flex-wrap items-center gap-2">
              {CORE_SERVICES.map((service) => {
                const isSelected = activeServiceId === service.id;
                return (
                  <button
                    key={service.id}
                    onClick={() => {
                      onSelectService(service.id);
                      const el = document.getElementById('services-suite');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all inline-flex items-center gap-1.5 border ${
                      isSelected
                        ? 'bg-[#0066FF] text-white border-[#00D4FF] shadow-glow-blue'
                        : 'bg-slate-950/90 text-slate-200 border-slate-700/80 hover:border-emerald-400/60 hover:text-white'
                    }`}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <span>{service.title}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Main Hero Grid (Propeller Aero 2-Column Split Layout) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Value Proposition & CTAs */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0066FF]/15 border border-[#0066FF]/40 text-xs font-mono text-cyan-300">
              <Sparkles className="w-3.5 h-3.5 text-[#00D4FF]" />
              <span>PROPELLER-GRADE GEOSPATIAL WORKSITE & MOUZA INTELLIGENCE</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-display font-extrabold tracking-tight text-white leading-[1.1]">
              Every Boundary, Deed & Mouza Layer in{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D4FF] via-[#0066FF] to-emerald-400">
                One High-Precision Platform.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl">
              From Total Station field capture and <strong className="text-white">1" = 64 Feet</strong> CAD map preparation to multi-era <strong className="text-emerald-400">CS</strong> / <strong className="text-fuchsia-400">RS</strong> / <strong className="text-sky-400">BWDB Road</strong> overlap analysis—we turn complex land records into undisputed visual certainty.
            </p>

            {/* Primary & Secondary Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={() => onOpenBookingModal()}
                className="px-6 py-3.5 rounded-xl bg-[#0066FF] hover:bg-[#0052CC] text-white font-display font-bold text-sm sm:text-base shadow-glow-blue transition-all inline-flex items-center gap-2.5 group"
              >
                <span>Schedule a Digital Survey</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="#cad-platform"
                className="px-5 py-3.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-100 border border-slate-700 hover:border-slate-500 font-display font-semibold text-sm sm:text-base transition-all inline-flex items-center gap-2"
              >
                <Layers className="w-4 h-4 text-[#00D4FF]" />
                <span>Launch Interactive Plot Map</span>
              </a>

              <button
                onClick={onOpenReportModal}
                className="px-4 py-3.5 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 font-mono text-xs sm:text-sm font-semibold transition-all inline-flex items-center gap-2"
              >
                <Eye className="w-4 h-4" />
                <span>View 11/10/2026 Report</span>
              </button>
            </div>

            {/* Key Performance & Certification Metrics */}
            <div className="pt-6 border-t border-slate-800/90 grid grid-cols-3 gap-4">
              <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800/80">
                <div className="text-xl sm:text-2xl font-display font-extrabold text-white font-mono">
                  1" = 64'
                </div>
                <div className="text-xs text-slate-400 mt-0.5">
                  Calibrated Cadastral Scale
                </div>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800/80">
                <div className="text-xl sm:text-2xl font-display font-extrabold text-emerald-400 font-mono">
                  #1111210
                </div>
                <div className="text-xs text-slate-400 mt-0.5">
                  Govt. Surveyor Reg No
                </div>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800/80">
                <div className="text-xl sm:text-2xl font-display font-extrabold text-[#00D4FF] font-mono">
                  ±2.0 mm
                </div>
                <div className="text-xs text-slate-400 mt-0.5">
                  Total Station Precision
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Propeller-Style Live Command Center Preview Card */}
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl bg-[#0D1628] border border-slate-700/80 shadow-2xl overflow-hidden">
              {/* Top Window Bar */}
              <div className="px-4 py-3 bg-[#080E1B] border-b border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 text-xs font-mono text-slate-300 font-semibold">
                    EXPRESS-CAD // MOUZA: PARAIN • RS PLOT: 308 (CS/SA: 161)
                  </span>
                </div>
                <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                  LIVE VECTOR VIEW
                </span>
              </div>

              {/* Interactive Mini-Canvas Preview of the PDF Survey Report */}
              <div className="p-5 relative bg-gradient-to-b from-[#0D1628] to-[#09101E]">
                {/* Top Instrument & Scale Calibration Strip (From PDF Top-Left) */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
                  <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-amber-500/15 border border-amber-500/40 flex items-center justify-center shrink-0">
                      <Crosshair className="w-5 h-5 text-amber-400" />
                    </div>
                    <div>
                      <div className="text-[11px] font-mono text-slate-400">INSTRUMENT</div>
                      <div className="text-xs font-bold text-white">Total Station EDM</div>
                      <div className="text-[10px] font-mono text-emerald-400">Scale: 1" = 64 Feet</div>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-fuchsia-500/15 border border-fuchsia-500/40 flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-fuchsia-400" />
                    </div>
                    <div>
                      <div className="text-[11px] font-mono text-slate-400">JURISDICTION</div>
                      <div className="text-xs font-bold text-white">Rupgonj, Narayanganj</div>
                      <div className="text-[10px] font-mono text-fuchsia-300">Mouja: Parain</div>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-cyan-500/15 border border-cyan-500/40 flex items-center justify-center shrink-0">
                      <FileCheck className="w-5 h-5 text-cyan-400" />
                    </div>
                    <div>
                      <div className="text-[11px] font-mono text-slate-400">SURVEY DATE</div>
                      <div className="text-xs font-bold text-white">11/10/2026</div>
                      <div className="text-[10px] font-mono text-cyan-300">Cert: 19570/22</div>
                    </div>
                  </div>
                </div>

                {/* Stylized Vector Diagram of the Survey Report (Plot 308, 310, BWDB Road) */}
                <div className="relative rounded-xl bg-[#070C16] border border-slate-800 p-4 overflow-hidden">
                  {/* North Arrow Badge */}
                  <div className="absolute top-3 left-3 z-10 flex flex-col items-center bg-slate-900/90 border border-slate-700 px-2.5 py-2 rounded-lg">
                    <span className="text-xs font-serif font-bold text-red-400">N</span>
                    <Compass className="w-5 h-5 text-slate-200 mt-0.5" />
                  </div>

                  {/* Scale Grid Mini-Chart (From Top-Left of PDF: 80-60-40-20 / 10-20-30-40-50) */}
                  <div className="absolute top-3 right-3 z-10 bg-slate-900/95 border border-slate-700 px-3 py-1.5 rounded-lg text-right font-mono">
                    <div className="text-[10px] text-slate-400">DIAGONAL GUNIA SCALE</div>
                    <div className="text-xs font-bold text-cyan-300">1" = 64 Feet (10•20•30•40•50)</div>
                  </div>

                  {/* Interactive SVG Preview of the Cadastral Map */}
                  <svg
                    viewBox="0 0 560 330"
                    className="w-full h-[260px] sm:h-[290px] select-none"
                  >
                    <defs>
                      <pattern id="heroGrid" width="20" height="20" patternUnits="userSpaceOnUse">
                        <path
                          d="M 20 0 L 0 0 0 20"
                          fill="none"
                          stroke="rgba(56, 189, 248, 0.08)"
                          strokeWidth="1"
                        />
                      </pattern>
                    </defs>
                    <rect width="560" height="330" fill="url(#heroGrid)" />

                    {/* Neighboring Plot Polygons (RS Magenta Lines) */}
                    <polygon
                      points="70,150 220,100 220,130 75,165"
                      fill="rgba(217, 70, 239, 0.04)"
                      stroke="#D946EF"
                      strokeWidth="1.5"
                    />
                    <polygon
                      points="90,185 160,175 165,205 100,215"
                      fill="rgba(217, 70, 239, 0.06)"
                      stroke="#D946EF"
                      strokeWidth="1.5"
                    />
                    <text x="120" y="200" fill="#E879F9" fontSize="11" fontWeight="bold">
                      305
                    </text>

                    <polygon
                      points="160,175 235,160 238,195 165,205"
                      fill="rgba(217, 70, 239, 0.06)"
                      stroke="#D946EF"
                      strokeWidth="1.5"
                    />
                    <text x="190" y="190" fill="#E879F9" fontSize="11" fontWeight="bold">
                      306
                    </text>

                    {/* Plot 307 */}
                    <polygon
                      points="105,215 238,195 250,295 135,310"
                      fill="rgba(217, 70, 239, 0.05)"
                      stroke="#D946EF"
                      strokeWidth="1.5"
                    />
                    <text x="170" y="258" fill="#E879F9" fontSize="13" fontWeight="bold">
                      307
                    </text>

                    {/* Plot 310 (North of Road) */}
                    <polygon
                      points="220,100 295,82 302,132 225,142"
                      fill="rgba(245, 158, 11, 0.14)"
                      stroke="#F59E0B"
                      strokeWidth="1.8"
                    />
                    <text x="233" y="114" fill="#FDE68A" fontSize="8.5" fontWeight="bold">
                      4.30 Dec
                    </text>
                    <text x="264" y="110" fill="#FDE68A" fontSize="8.5" fontWeight="bold">
                      5.00 Dec
                    </text>

                    <polygon
                      points="295,82 440,55 450,120 302,132"
                      fill="rgba(217, 70, 239, 0.05)"
                      stroke="#D946EF"
                      strokeWidth="1.5"
                    />
                    <text x="360" y="96" fill="#E879F9" fontSize="13" fontWeight="bold">
                      310
                    </text>

                    {/* Brick Road & BWDB Corridor (Aqueduct/Road Blue Line + Red Hatching) */}
                    <polygon
                      points="70,152 475,112 478,136 74,176"
                      fill="rgba(37, 99, 235, 0.22)"
                      stroke="#3B82F6"
                      strokeWidth="2"
                    />
                    <text
                      x="275"
                      y="141"
                      fill="#93C5FD"
                      fontSize="9.5"
                      fontWeight="bold"
                      textAnchor="middle"
                      transform="rotate(-5.5, 275, 141)"
                    >
                      Brick road for social movement • BWDB Acquired Land
                    </text>

                    {/* Target Plot 308 (Center Multi-Parcel) */}
                    <polygon
                      points="238,162 308,154 316,295 250,295"
                      fill="rgba(16, 185, 129, 0.16)"
                      stroke="#10B981"
                      strokeWidth="2.2"
                    />
                    {/* Internal Sub-Lines inside Plot 308 */}
                    <line x1="240" y1="192" x2="310" y2="186" stroke="#D946EF" strokeWidth="1.5" />
                    <line x1="243" y1="220" x2="312" y2="215" stroke="#D946EF" strokeWidth="1.5" />
                    <line x1="245" y1="235" x2="313" y2="230" stroke="#D946EF" strokeWidth="1.5" />
                    <line x1="247" y1="268" x2="315" y2="264" stroke="#D946EF" strokeWidth="1.5" />

                    <text x="275" y="179" fill="#6EE7B7" fontSize="8.5" fontWeight="bold" textAnchor="middle">
                      8.80 Dec
                    </text>
                    <text x="276" y="207" fill="#F0ABFC" fontSize="9.5" fontWeight="bold" textAnchor="middle">
                      308 (6.00 Dec)
                    </text>
                    <text x="278" y="228" fill="#FDE047" fontSize="7.5" fontWeight="bold" textAnchor="middle">
                      2.34 Dec
                    </text>
                    <text x="280" y="253" fill="#6EE7B7" fontSize="8.5" fontWeight="bold" textAnchor="middle">
                      7.20 Dec
                    </text>
                    <text x="281" y="283" fill="#CBD5E1" fontSize="7.5" textAnchor="middle">
                      Mokbul & Others
                    </text>

                    {/* East Plots 311, 312, 316, 317, 318 */}
                    <polygon
                      points="308,154 455,138 458,175 310,186"
                      fill="rgba(217, 70, 239, 0.05)"
                      stroke="#D946EF"
                      strokeWidth="1.5"
                    />
                    <text x="375" y="168" fill="#E879F9" fontSize="12" fontWeight="bold">
                      311
                    </text>

                    <polygon
                      points="310,186 458,175 462,228 313,235"
                      fill="rgba(217, 70, 239, 0.05)"
                      stroke="#D946EF"
                      strokeWidth="1.5"
                    />
                    <text x="380" y="210" fill="#E879F9" fontSize="13" fontWeight="bold">
                      312
                    </text>

                    <polygon
                      points="395,231 462,228 470,312 398,312"
                      fill="rgba(217, 70, 239, 0.05)"
                      stroke="#D946EF"
                      strokeWidth="1.5"
                    />
                    <text x="425" y="275" fill="#E879F9" fontSize="13" fontWeight="bold">
                      316
                    </text>

                    <polygon
                      points="355,233 395,231 398,312 356,312"
                      fill="rgba(217, 70, 239, 0.05)"
                      stroke="#D946EF"
                      strokeWidth="1.5"
                    />
                    <text x="368" y="278" fill="#E879F9" fontSize="12" fontWeight="bold">
                      317
                    </text>

                    <polygon
                      points="313,235 355,233 356,312 316,312"
                      fill="rgba(217, 70, 239, 0.05)"
                      stroke="#D946EF"
                      strokeWidth="1.5"
                    />
                    <text x="326" y="280" fill="#E879F9" fontSize="12" fontWeight="bold">
                      318
                    </text>
                  </svg>

                  {/* Design Overview Legend Bar (Matching PDF Bottom-Left Legend) */}
                  <div className="mt-2 pt-3 border-t border-slate-800/90 flex flex-wrap items-center justify-between gap-2 text-xs">
                    <div className="flex flex-wrap items-center gap-4">
                      <span className="inline-flex items-center gap-1.5 font-mono text-slate-300">
                        <span className="w-5 h-1.5 rounded bg-emerald-500 inline-block" />
                        CS Line (Plot 161)
                      </span>
                      <span className="inline-flex items-center gap-1.5 font-mono text-slate-300">
                        <span className="w-5 h-1.5 rounded bg-fuchsia-500 inline-block" />
                        RS Line (Plot 308)
                      </span>
                      <span className="inline-flex items-center gap-1.5 font-mono text-slate-300">
                        <span className="w-5 h-1.5 rounded bg-blue-500 inline-block" />
                        Aqueduct/Road Line
                      </span>
                    </div>
                    <a
                      href="#cad-platform"
                      className="text-[#00D4FF] hover:underline font-mono text-xs font-semibold"
                    >
                      Click Parcels in Full Viewer ↓
                    </a>
                  </div>
                </div>

                {/* Direct Surveyor Contact Footer inside the Command Card */}
                <div className="mt-4 p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-300 font-bold text-sm">
                      FS
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white flex items-center gap-1.5">
                        <span>Surveyor Faysal Ahamad Shanto</span>
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                      </div>
                      <div className="text-[11px] font-mono text-slate-400">
                        BS-AS Member #898/26 • {COMPANY_INFO.email}
                      </div>
                    </div>
                  </div>
                  <a
                    href="https://wa.me/8801754246123"
                    target="_blank"
                    rel="noreferrer"
                    className="px-3.5 py-2 rounded-lg bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold text-xs inline-flex items-center gap-1.5 transition-colors shrink-0"
                  >
                    <PhoneCall className="w-3.5 h-3.5" />
                    <span>WhatsApp: 01754-246123</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
