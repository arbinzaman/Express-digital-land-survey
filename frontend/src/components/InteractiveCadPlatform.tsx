import React, { useState } from 'react';
import {
  Compass,
  Eye,
  Layers,
  Maximize2,
  Ruler,
  Sliders,
  CheckCircle2,
  ZoomIn,
  ZoomOut,
  RotateCcw,
  FileSpreadsheet,
  Sparkles,
} from 'lucide-react';
import { COMPANY_INFO, REPORT_PARCELS, PlotParcel } from '../data/surveyData';

interface InteractiveCadPlatformProps {
  onOpenReportModal: () => void;
  onOpenBookingModal: (defaultService?: string) => void;
}

export const InteractiveCadPlatform: React.FC<InteractiveCadPlatformProps> = ({
  onOpenReportModal,
  onOpenBookingModal,
}) => {
  const [selectedParcel, setSelectedParcel] = useState<PlotParcel>(REPORT_PARCELS[0]);
  const [showCsLayer, setShowCsLayer] = useState(true);
  const [showRsLayer, setShowRsLayer] = useState(true);
  const [showRoadLayer, setShowRoadLayer] = useState(true);
  const [showDimensions, setShowDimensions] = useState(true);
  const [showGrantorLabels, setShowGrantorLabels] = useState(true);
  const [viewMode, setViewMode] = useState<'cad-dark' | 'paper-report' | 'terrain-3d'>('cad-dark');
  const [zoom, setZoom] = useState(1);

  return (
    <section id="cad-platform" className="py-24 bg-[#0A1120] border-b border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-10 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0066FF]/15 border border-[#0066FF]/40 text-xs font-mono text-[#00D4FF] mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>PROPELLER MAP ENGINE // INTERACTIVE CADASTRAL WORKSPACE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight">
              Interactive Plot & Overlap Command Center
            </h2>
            <p className="text-slate-300 text-sm sm:text-base mt-2 max-w-2xl">
              Explore our live digital twin of <strong className="text-white">Mouja: Parain, Thana: Rupgonj, District: Narayanganj (RS Plot 308 / CS-SA Plot 161)</strong>. Toggle <span className="text-emerald-400 font-semibold">CS Lines</span>, <span className="text-fuchsia-400 font-semibold">RS Lines</span>, and <span className="text-sky-400 font-semibold">Aqueduct/Road Lines</span> or click any sub-parcel to inspect Grantor/Recipient records.
            </p>
          </div>

          {/* View Mode Switcher (CAD Dark / Official Paper / 3D Isometric) */}
          <div className="flex flex-wrap items-center gap-2 bg-slate-900/90 p-1.5 rounded-xl border border-slate-800">
            <button
              onClick={() => setViewMode('cad-dark')}
              className={`px-3.5 py-2 rounded-lg text-xs font-mono font-semibold transition-all ${
                viewMode === 'cad-dark'
                  ? 'bg-[#0066FF] text-white shadow'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              CAD Dark Mode
            </button>
            <button
              onClick={() => setViewMode('paper-report')}
              className={`px-3.5 py-2 rounded-lg text-xs font-mono font-semibold transition-all ${
                viewMode === 'paper-report'
                  ? 'bg-emerald-500 text-slate-950 font-bold shadow'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Official Paper Sheet
            </button>
            <button
              onClick={() => setViewMode('terrain-3d')}
              className={`px-3.5 py-2 rounded-lg text-xs font-mono font-semibold transition-all ${
                viewMode === 'terrain-3d'
                  ? 'bg-fuchsia-600 text-white shadow'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              3D Perspective Tilt
            </button>
          </div>
        </div>

        {/* Main Propeller Workspace Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Sidebar: Layer Controls & Land Details Table (3 Cols) */}
          <div className="lg:col-span-3 space-y-4">
            {/* Design Overview Layer Toggle Box (Matches PDF Bottom-Left "Design Overview") */}
            <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800">
              <div className="flex items-center justify-between mb-4 pb-2.5 border-b border-slate-800">
                <span className="text-xs font-mono uppercase tracking-wider text-white font-bold flex items-center gap-1.5">
                  <Layers className="w-4 h-4 text-[#00D4FF]" />
                  Design Overview Layers
                </span>
                <span className="text-[10px] font-mono text-slate-400">1" = 64'</span>
              </div>

              <div className="space-y-2.5">
                <label className="flex items-center justify-between p-2.5 rounded-xl bg-slate-950/80 border border-slate-800/80 cursor-pointer hover:border-emerald-500/40 transition-colors">
                  <div className="flex items-center gap-2.5">
                    <input
                      type="checkbox"
                      checked={showCsLayer}
                      onChange={(e) => setShowCsLayer(e.target.checked)}
                      className="rounded accent-emerald-500 w-4 h-4"
                    />
                    <span className="text-xs font-semibold text-emerald-400">CS Line (Plot 161)</span>
                  </div>
                  <span className="w-6 h-2 rounded bg-emerald-500" />
                </label>

                <label className="flex items-center justify-between p-2.5 rounded-xl bg-slate-950/80 border border-slate-800/80 cursor-pointer hover:border-fuchsia-500/40 transition-colors">
                  <div className="flex items-center gap-2.5">
                    <input
                      type="checkbox"
                      checked={showRsLayer}
                      onChange={(e) => setShowRsLayer(e.target.checked)}
                      className="rounded accent-fuchsia-500 w-4 h-4"
                    />
                    <span className="text-xs font-semibold text-fuchsia-400">RS Line (Plot 308)</span>
                  </div>
                  <span className="w-6 h-2 rounded bg-fuchsia-500" />
                </label>

                <label className="flex items-center justify-between p-2.5 rounded-xl bg-slate-950/80 border border-slate-800/80 cursor-pointer hover:border-blue-500/40 transition-colors">
                  <div className="flex items-center gap-2.5">
                    <input
                      type="checkbox"
                      checked={showRoadLayer}
                      onChange={(e) => setShowRoadLayer(e.target.checked)}
                      className="rounded accent-blue-500 w-4 h-4"
                    />
                    <span className="text-xs font-semibold text-sky-400">Aqueduct / Road Line</span>
                  </div>
                  <span className="w-6 h-2 rounded bg-blue-600" />
                </label>

                <label className="flex items-center justify-between p-2.5 rounded-xl bg-slate-950/80 border border-slate-800/80 cursor-pointer">
                  <div className="flex items-center gap-2.5">
                    <input
                      type="checkbox"
                      checked={showDimensions}
                      onChange={(e) => setShowDimensions(e.target.checked)}
                      className="rounded accent-cyan-400 w-4 h-4"
                    />
                    <span className="text-xs font-medium text-slate-300">Chord Dimensions (Ft/In)</span>
                  </div>
                  <Ruler className="w-3.5 h-3.5 text-slate-400" />
                </label>

                <label className="flex items-center justify-between p-2.5 rounded-xl bg-slate-950/80 border border-slate-800/80 cursor-pointer">
                  <div className="flex items-center gap-2.5">
                    <input
                      type="checkbox"
                      checked={showGrantorLabels}
                      onChange={(e) => setShowGrantorLabels(e.target.checked)}
                      className="rounded accent-amber-400 w-4 h-4"
                    />
                    <span className="text-xs font-medium text-slate-300">Grantor / Recipient Text</span>
                  </div>
                  <Sliders className="w-3.5 h-3.5 text-slate-400" />
                </label>
              </div>
            </div>

            {/* Land Details Schedule (Exact Replica of PDF "Land Details" Table) */}
            <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800">
              <div className="flex items-center justify-between mb-3 pb-2 border-b border-slate-800">
                <span className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-bold flex items-center gap-1.5">
                  <FileSpreadsheet className="w-4 h-4" />
                  Land Details Schedule
                </span>
                <span className="text-[11px] font-mono text-slate-400">
                  {COMPANY_INFO.featuredReport.date}
                </span>
              </div>

              <div className="divide-y divide-slate-800/80 text-xs">
                <div className="py-2 flex justify-between">
                  <span className="text-slate-400">District</span>
                  <span className="font-bold text-white">{COMPANY_INFO.featuredReport.district}</span>
                </div>
                <div className="py-2 flex justify-between">
                  <span className="text-slate-400">Thana</span>
                  <span className="font-bold text-white">{COMPANY_INFO.featuredReport.thana}</span>
                </div>
                <div className="py-2 flex justify-between">
                  <span className="text-slate-400">Mouja</span>
                  <span className="font-bold text-rose-400">{COMPANY_INFO.featuredReport.mouja}</span>
                </div>
                <div className="py-2 flex justify-between">
                  <span className="text-slate-400">Plot No (CS/SA)</span>
                  <span className="font-mono font-bold text-emerald-400">
                    {COMPANY_INFO.featuredReport.csSaPlot}
                  </span>
                </div>
                <div className="py-2 flex justify-between">
                  <span className="text-slate-400">Plot No (RS)</span>
                  <span className="font-mono font-bold text-fuchsia-400">
                    {COMPANY_INFO.featuredReport.rsPlot}
                  </span>
                </div>
                <div className="py-2 flex justify-between">
                  <span className="text-slate-400">Drawing Scale</span>
                  <span className="font-mono font-bold text-cyan-300">1" = 64 Feet</span>
                </div>
              </div>

              <button
                onClick={onOpenReportModal}
                className="mt-4 w-full py-2.5 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-white border border-slate-700 transition-colors inline-flex items-center justify-center gap-1.5"
              >
                <Maximize2 className="w-3.5 h-3.5 text-[#00D4FF]" />
                <span>View Printable Survey Sheet</span>
              </button>
            </div>
          </div>

          {/* Center Canvas: Interactive Vector Cadastral Map (6 Cols) */}
          <div className="lg:col-span-6">
            <div
              className={`rounded-2xl border overflow-hidden relative transition-all duration-300 ${
                viewMode === 'paper-report'
                  ? 'bg-report-paper border-emerald-700/40 text-slate-900'
                  : 'bg-[#070C16] bg-cad-grid border-slate-800 text-white'
              }`}
            >
              {/* Top Canvas Toolbar */}
              <div
                className={`px-4 py-3 border-b flex items-center justify-between text-xs font-mono ${
                  viewMode === 'paper-report'
                    ? 'bg-emerald-950/90 text-white border-emerald-800'
                    : 'bg-slate-900/90 text-slate-300 border-slate-800'
                }`}
              >
                <div className="flex items-center gap-2">
                  <Compass className="w-4 h-4 text-emerald-400" />
                  <span>LAND SURVEY REPORT • DATE: 11/10/2026</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <button
                    onClick={() => setZoom((z) => Math.max(0.85, +(z - 0.1).toFixed(2)))}
                    className="p-1.5 rounded bg-slate-800 hover:bg-slate-700 text-slate-200"
                    title="Zoom Out"
                  >
                    <ZoomOut className="w-3.5 h-3.5" />
                  </button>
                  <span className="px-2 text-[11px]">{Math.round(zoom * 100)}%</span>
                  <button
                    onClick={() => setZoom((z) => Math.min(1.35, +(z + 0.1).toFixed(2)))}
                    className="p-1.5 rounded bg-slate-800 hover:bg-slate-700 text-slate-200"
                    title="Zoom In"
                  >
                    <ZoomIn className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => setZoom(1)}
                    className="p-1.5 rounded bg-slate-800 hover:bg-slate-700 text-slate-200"
                    title="Reset Zoom"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Interactive SVG Map Surface */}
              <div className="p-3 sm:p-5 overflow-auto flex items-center justify-center min-h-[510px]">
                <div
                  className="w-full transition-transform duration-500"
                  style={{
                    transform:
                      viewMode === 'terrain-3d'
                        ? `perspective(950px) rotateX(22deg) rotateZ(-4deg) scale(${zoom})`
                        : `scale(${zoom})`,
                  }}
                >
                  <svg viewBox="0 0 680 540" className="w-full h-auto select-none">
                    {/* North Arrow (Left Side just like the PDF) */}
                    <g transform="translate(36, 75)">
                      <text
                        x="14"
                        y="0"
                        fill="#EF4444"
                        fontSize="22"
                        fontFamily="serif"
                        fontWeight="bold"
                        textAnchor="middle"
                      >
                        N
                      </text>
                      <polygon
                        points="14,12 6,155 14,140 24,155"
                        fill={viewMode === 'paper-report' ? '#0F172A' : '#E2E8F0'}
                      />
                      <polygon
                        points="14,80 14,108 26,95"
                        fill={viewMode === 'paper-report' ? '#0F172A' : '#E2E8F0'}
                      />
                    </g>

                    {/* CS Historical Reference Boundary (Green Line Layer) */}
                    {showCsLayer && (
                      <g>
                        <polygon
                          points="105,180 560,70 578,465 160,445"
                          fill="none"
                          stroke="#16A34A"
                          strokeWidth="2.5"
                          strokeDasharray="9 5"
                        />
                        <rect
                          x="455"
                          y="45"
                          width="145"
                          height="22"
                          rx="4"
                          fill="rgba(22, 163, 74, 0.18)"
                          stroke="#16A34A"
                          strokeWidth="1"
                        />
                        <text
                          x="527"
                          y="60"
                          fill={viewMode === 'paper-report' ? '#15803D' : '#4ADE80'}
                          fontSize="10"
                          fontFamily="monospace"
                          fontWeight="bold"
                          textAnchor="middle"
                        >
                          CS/SA PLOT 161 ENVELOPE
                        </text>
                      </g>
                    )}

                    {/* RS Layer: Surrounding Plots (305, 306, 307, 310, 311, 312, 316, 317, 318, 319) */}
                    {showRsLayer && (
                      <g>
                        {/* Top-West Triangle above Brick Road */}
                        <polygon
                          points="105,180 282,115 290,165 108,195"
                          fill="rgba(217, 70, 239, 0.03)"
                          stroke="#D946EF"
                          strokeWidth="1.4"
                        />

                        {/* Plot 310 Sold Sub-Parcels (4.30 Dec & 5.00 Dec by Shafiq Ullah) */}
                        <g
                          onClick={() => setSelectedParcel(REPORT_PARCELS[5])}
                          className="cursor-pointer group"
                        >
                          <polygon
                            points="282,115 370,92 380,160 290,165"
                            fill={
                              selectedParcel.id === 'plot-310-sub'
                                ? 'rgba(245, 158, 11, 0.32)'
                                : 'rgba(245, 158, 11, 0.14)'
                            }
                            stroke="#F59E0B"
                            strokeWidth={selectedParcel.id === 'plot-310-sub' ? '2.8' : '1.8'}
                          />
                          <line
                            x1="326"
                            y1="103"
                            x2="335"
                            y2="162"
                            stroke="#D946EF"
                            strokeWidth="1.2"
                          />
                          {showGrantorLabels && (
                            <>
                              <text
                                x="307"
                                y="128"
                                fill={viewMode === 'paper-report' ? '#9A3412' : '#FDE68A'}
                                fontSize="8"
                                fontWeight="bold"
                                textAnchor="middle"
                              >
                                Shafiq Ullah
                              </text>
                              <text
                                x="308"
                                y="146"
                                fill="#EF4444"
                                fontSize="9.5"
                                fontWeight="bold"
                                textAnchor="middle"
                              >
                                4.30 Dec
                              </text>
                              <text
                                x="354"
                                y="138"
                                fill="#EF4444"
                                fontSize="9.5"
                                fontWeight="bold"
                                textAnchor="middle"
                              >
                                5.00 Dec
                              </text>
                            </>
                          )}
                          {showDimensions && (
                            <>
                              <text x="325" y="96" fill="#EF4444" fontSize="9" fontWeight="bold">
                                70'
                              </text>
                              <text x="273" y="143" fill="#EF4444" fontSize="9" fontWeight="bold">
                                49'
                              </text>
                              <text x="383" y="132" fill="#EF4444" fontSize="9" fontWeight="bold">
                                59'
                              </text>
                              <text x="332" y="173" fill="#EF4444" fontSize="9" fontWeight="bold">
                                75'
                              </text>
                            </>
                          )}
                        </g>

                        {/* Main Plot 310 East */}
                        <polygon
                          points="370,92 560,70 572,150 380,160"
                          fill="rgba(217, 70, 239, 0.04)"
                          stroke="#D946EF"
                          strokeWidth="1.5"
                        />
                        <text x="455" y="122" fill="#D946EF" fontSize="16" fontWeight="bold">
                          310
                        </text>

                        {/* Plot 305 & 306 */}
                        <polygon
                          points="115,232 205,220 212,265 125,282"
                          fill="rgba(217, 70, 239, 0.04)"
                          stroke="#D946EF"
                          strokeWidth="1.5"
                        />
                        <text x="155" y="255" fill="#D946EF" fontSize="14" fontWeight="bold">
                          305
                        </text>

                        <polygon
                          points="205,220 296,208 302,248 212,265"
                          fill="rgba(217, 70, 239, 0.04)"
                          stroke="#D946EF"
                          strokeWidth="1.5"
                        />
                        <text x="245" y="242" fill="#D946EF" fontSize="14" fontWeight="bold">
                          306
                        </text>
                        {showDimensions && (
                          <text x="218" y="272" fill="#EF4444" fontSize="9.5" fontWeight="bold">
                            145'
                          </text>
                        )}

                        {/* Plot 307 */}
                        <polygon
                          points="125,282 302,248 318,415 170,445"
                          fill="rgba(217, 70, 239, 0.04)"
                          stroke="#D946EF"
                          strokeWidth="1.5"
                        />
                        <text x="218" y="352" fill="#D946EF" fontSize="16" fontWeight="bold">
                          307
                        </text>
                        {showDimensions && (
                          <>
                            <text x="140" y="365" fill="#EF4444" fontSize="9.5" fontWeight="bold">
                              148'
                            </text>
                            <text x="240" y="438" fill="#EF4444" fontSize="9.5" fontWeight="bold">
                              110'
                            </text>
                          </>
                        )}

                        {/* TARGET PLOT 308: 5 Interactive Sub-Parcels */}
                        {/* Part A: 8.80 Decimal (Grantor: Md. Shamim and others / Recipient: Zafir Ahmed) */}
                        <g
                          onClick={() => setSelectedParcel(REPORT_PARCELS[0])}
                          className="cursor-pointer"
                        >
                          <polygon
                            points="296,208 386,200 390,256 302,262"
                            fill={
                              selectedParcel.id === 'plot-308-a'
                                ? 'rgba(217, 70, 239, 0.32)'
                                : 'rgba(217, 70, 239, 0.12)'
                            }
                            stroke="#D946EF"
                            strokeWidth={selectedParcel.id === 'plot-308-a' ? '2.8' : '1.8'}
                          />
                          {showGrantorLabels && (
                            <>
                              <text
                                x="343"
                                y="220"
                                fill={viewMode === 'paper-report' ? '#0F172A' : '#F8FAFC'}
                                fontSize="7.5"
                                fontWeight="bold"
                                textAnchor="middle"
                              >
                                Grantor: Md. Shamim & others
                              </text>
                              <text
                                x="343"
                                y="230"
                                fill={viewMode === 'paper-report' ? '#0F172A' : '#CBD5E1'}
                                fontSize="7.5"
                                textAnchor="middle"
                              >
                                Recipient: Zafir Ahmed
                              </text>
                              <text
                                x="343"
                                y="245"
                                fill="#EF4444"
                                fontSize="10"
                                fontWeight="bold"
                                textAnchor="middle"
                              >
                                8.80 Decimal
                              </text>
                            </>
                          )}
                          {showDimensions && (
                            <>
                              <text x="338" y="206" fill="#EF4444" fontSize="9" fontWeight="bold">
                                75'
                              </text>
                              <text x="284" y="238" fill="#EF4444" fontSize="9" fontWeight="bold">
                                53'
                              </text>
                              <text x="393" y="235" fill="#EF4444" fontSize="8.5" fontWeight="bold">
                                52'-10"
                              </text>
                            </>
                          )}
                        </g>

                        {/* Part B: 6.00 Decimal (Grantor: Yakub Ali and others / Recipient: Jafir Ahmed) */}
                        <g
                          onClick={() => setSelectedParcel(REPORT_PARCELS[1])}
                          className="cursor-pointer"
                        >
                          <polygon
                            points="302,262 390,256 393,305 306,310"
                            fill={
                              selectedParcel.id === 'plot-308-b'
                                ? 'rgba(168, 85, 247, 0.34)'
                                : 'rgba(168, 85, 247, 0.14)'
                            }
                            stroke="#D946EF"
                            strokeWidth={selectedParcel.id === 'plot-308-b' ? '2.8' : '1.8'}
                          />
                          <text
                            x="362"
                            y="274"
                            fill="#3B82F6"
                            fontSize="13"
                            fontWeight="bold"
                          >
                            308
                          </text>
                          {showGrantorLabels && (
                            <>
                              <text
                                x="346"
                                y="284"
                                fill={viewMode === 'paper-report' ? '#0F172A' : '#F8FAFC'}
                                fontSize="7.5"
                                fontWeight="bold"
                                textAnchor="middle"
                              >
                                Grantor: Yakub Ali & others
                              </text>
                              <text
                                x="346"
                                y="300"
                                fill="#EF4444"
                                fontSize="10"
                                fontWeight="bold"
                                textAnchor="middle"
                              >
                                6.00 Decimal
                              </text>
                            </>
                          )}
                          {showDimensions && (
                            <>
                              <text x="335" y="260" fill="#EF4444" fontSize="9" fontWeight="bold">
                                70'
                              </text>
                              <text x="275" y="290" fill="#EF4444" fontSize="8.5" fontWeight="bold">
                                37'-10"
                              </text>
                              <text x="396" y="286" fill="#EF4444" fontSize="9" fontWeight="bold">
                                38'
                              </text>
                            </>
                          )}
                        </g>

                        {/* Part C: 2.34 Decimal Central Strip */}
                        <g
                          onClick={() => setSelectedParcel(REPORT_PARCELS[2])}
                          className="cursor-pointer"
                        >
                          <polygon
                            points="306,310 393,305 395,332 309,336"
                            fill={
                              selectedParcel.id === 'plot-308-c'
                                ? 'rgba(236, 72, 153, 0.36)'
                                : 'rgba(236, 72, 153, 0.15)'
                            }
                            stroke="#D946EF"
                            strokeWidth={selectedParcel.id === 'plot-308-c' ? '2.8' : '1.8'}
                          />
                          {showGrantorLabels && (
                            <text
                              x="350"
                              y="325"
                              fill="#EF4444"
                              fontSize="9.5"
                              fontWeight="bold"
                              textAnchor="middle"
                            >
                              2.34 Decimal
                            </text>
                          )}
                          {showDimensions && (
                            <>
                              <text x="342" y="309" fill="#EF4444" fontSize="8.5" fontWeight="bold">
                                68'
                              </text>
                              <text x="290" y="326" fill="#EF4444" fontSize="8.5" fontWeight="bold">
                                15'
                              </text>
                              <text x="398" y="322" fill="#EF4444" fontSize="8.5" fontWeight="bold">
                                15'
                              </text>
                            </>
                          )}
                        </g>

                        {/* Part D: 7.20 Decimal (Grantor: Monoyara / Recipient: Jafir Ahmed) */}
                        <g
                          onClick={() => setSelectedParcel(REPORT_PARCELS[3])}
                          className="cursor-pointer"
                        >
                          <polygon
                            points="309,336 395,332 398,388 314,390"
                            fill={
                              selectedParcel.id === 'plot-308-d'
                                ? 'rgba(217, 70, 239, 0.35)'
                                : 'rgba(217, 70, 239, 0.12)'
                            }
                            stroke="#D946EF"
                            strokeWidth={selectedParcel.id === 'plot-308-d' ? '2.8' : '1.8'}
                          />
                          {showGrantorLabels && (
                            <>
                              <text
                                x="353"
                                y="350"
                                fill={viewMode === 'paper-report' ? '#0F172A' : '#F8FAFC'}
                                fontSize="7.5"
                                fontWeight="bold"
                                textAnchor="middle"
                              >
                                Grantor: Monoyara
                              </text>
                              <text
                                x="353"
                                y="361"
                                fill={viewMode === 'paper-report' ? '#0F172A' : '#CBD5E1'}
                                fontSize="7.5"
                                textAnchor="middle"
                              >
                                Recipient: Jafir Ahmed
                              </text>
                              <text
                                x="353"
                                y="376"
                                fill="#EF4444"
                                fontSize="9"
                                fontWeight="bold"
                                textAnchor="middle"
                              >
                                (2.54+4.66)= 7.20 Dec
                              </text>
                            </>
                          )}
                          {showDimensions && (
                            <>
                              <text x="345" y="335" fill="#EF4444" fontSize="8.5" fontWeight="bold">
                                66'
                              </text>
                              <text x="282" y="366" fill="#EF4444" fontSize="8.5" fontWeight="bold">
                                34'-6"
                              </text>
                              <text x="401" y="366" fill="#EF4444" fontSize="8.5" fontWeight="bold">
                                59'-6"
                              </text>
                            </>
                          )}
                        </g>

                        {/* Part E: Southern Portion (Mokbul and Others) */}
                        <g
                          onClick={() => setSelectedParcel(REPORT_PARCELS[4])}
                          className="cursor-pointer"
                        >
                          <polygon
                            points="314,390 398,388 400,432 318,434"
                            fill={
                              selectedParcel.id === 'plot-308-e'
                                ? 'rgba(16, 185, 129, 0.35)'
                                : 'rgba(16, 185, 129, 0.14)'
                            }
                            stroke="#D946EF"
                            strokeWidth={selectedParcel.id === 'plot-308-e' ? '2.8' : '1.8'}
                          />
                          {showGrantorLabels && (
                            <text
                              x="356"
                              y="414"
                              fill={viewMode === 'paper-report' ? '#0F172A' : '#6EE7B7'}
                              fontSize="8.5"
                              fontWeight="bold"
                              textAnchor="middle"
                            >
                              Mokbul and Others
                            </text>
                          )}
                          {showDimensions && (
                            <>
                              <text x="350" y="387" fill="#EF4444" fontSize="8.5" fontWeight="bold">
                                55'
                              </text>
                              <text x="285" y="416" fill="#EF4444" fontSize="8.5" fontWeight="bold">
                                37'-9"
                              </text>
                              <text x="403" y="414" fill="#EF4444" fontSize="8.5" fontWeight="bold">
                                45'
                              </text>
                              <text x="352" y="444" fill="#EF4444" fontSize="8.5" fontWeight="bold">
                                47'
                              </text>
                            </>
                          )}
                        </g>

                        {/* East Plots: 311, 312, 316, 317, 318, 319 */}
                        <polygon
                          points="386,200 572,182 575,235 390,256"
                          fill="rgba(217, 70, 239, 0.04)"
                          stroke="#D946EF"
                          strokeWidth="1.5"
                        />
                        <text x="470" y="225" fill="#D946EF" fontSize="15" fontWeight="bold">
                          311
                        </text>

                        <polygon
                          points="390,256 575,235 580,322 395,332"
                          fill="rgba(217, 70, 239, 0.04)"
                          stroke="#D946EF"
                          strokeWidth="1.5"
                        />
                        <text x="475" y="292" fill="#D946EF" fontSize="16" fontWeight="bold">
                          312
                        </text>

                        <polygon
                          points="495,326 580,322 590,468 498,465"
                          fill="rgba(217, 70, 239, 0.04)"
                          stroke="#D946EF"
                          strokeWidth="1.5"
                        />
                        <text x="532" y="405" fill="#D946EF" fontSize="16" fontWeight="bold">
                          316
                        </text>

                        <polygon
                          points="446,329 495,326 498,465 446,465"
                          fill="rgba(217, 70, 239, 0.04)"
                          stroke="#D946EF"
                          strokeWidth="1.5"
                        />
                        <text x="460" y="410" fill="#D946EF" fontSize="15" fontWeight="bold">
                          317
                        </text>

                        <polygon
                          points="395,332 446,329 446,465 385,465"
                          fill="rgba(217, 70, 239, 0.04)"
                          stroke="#D946EF"
                          strokeWidth="1.5"
                        />
                        <text x="408" y="414" fill="#D946EF" fontSize="15" fontWeight="bold">
                          318
                        </text>

                        <text x="290" y="458" fill="#D946EF" fontSize="16" fontWeight="bold">
                          319
                        </text>
                      </g>
                    )}

                    {/* Aqueduct / Road Line & BWDB Acquisition Corridor (Blue + Red Hatched Zone) */}
                    {showRoadLayer && (
                      <g
                        onClick={() => setSelectedParcel(REPORT_PARCELS[6])}
                        className="cursor-pointer"
                      >
                        {/* Upper Brick Road Band */}
                        <polygon
                          points="96,192 590,148 592,166 98,210"
                          fill="rgba(37, 99, 235, 0.25)"
                          stroke="#2563EB"
                          strokeWidth="2"
                        />
                        <text
                          x="345"
                          y="181"
                          fill={viewMode === 'paper-report' ? '#1D4ED8' : '#60A5FA'}
                          fontSize="11.5"
                          fontWeight="bold"
                          textAnchor="middle"
                          transform="rotate(-5, 345, 181)"
                        >
                          Brick road for social movement
                        </text>

                        {/* Lower BWDB Acquired Land Band */}
                        <polygon
                          points="98,210 592,166 595,186 102,230"
                          fill="rgba(239, 68, 68, 0.20)"
                          stroke="#2563EB"
                          strokeWidth="2"
                        />
                        <text
                          x="348"
                          y="201"
                          fill="#EF4444"
                          fontSize="10.5"
                          fontWeight="bold"
                          textAnchor="middle"
                          transform="rotate(-5, 348, 201)"
                        >
                          Land acquired by the Bangladesh Water Development Board (BWDB)
                        </text>
                      </g>
                    )}
                  </svg>
                </div>
              </div>

              {/* Bottom Map Status Bar */}
              <div
                className={`px-4 py-2.5 border-t flex flex-wrap items-center justify-between gap-2 text-[11px] font-mono ${
                  viewMode === 'paper-report'
                    ? 'bg-emerald-950 text-emerald-200 border-emerald-800'
                    : 'bg-slate-950/90 text-slate-400 border-slate-800'
                }`}
              >
                <span>TIP: Click any parcel inside Plot 308, Plot 310, or the BWDB Corridor to inspect deed metrics</span>
                <span className="text-emerald-400 font-semibold">
                  Selected: {selectedParcel.plotNo}
                </span>
              </div>
            </div>
          </div>

          {/* Right Sidebar: Live Selected Parcel Inspector (3 Cols) */}
          <div className="lg:col-span-3 space-y-4">
            <div className="p-5 rounded-2xl bg-slate-900/95 border border-slate-700/80 shadow-xl">
              <div className="flex items-center justify-between mb-3">
                <span className="px-2.5 py-0.5 rounded text-[11px] font-mono font-bold bg-[#0066FF]/20 text-[#00D4FF] border border-[#0066FF]/40">
                  PARCEL INSPECTOR
                </span>
                <span className="text-xs font-mono text-emerald-400 flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  {selectedParcel.status.split(' ')[0]}
                </span>
              </div>

              <h3 className="text-lg font-display font-extrabold text-white leading-snug">
                {selectedParcel.title}
              </h3>
              <p className="text-xs font-mono text-slate-400 mt-1">
                {selectedParcel.plotNo} • {selectedParcel.csPlotNo}
              </p>

              {/* Area Readout Cards */}
              {selectedParcel.decimals > 0 ? (
                <div className="grid grid-cols-3 gap-2 my-4">
                  <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-center">
                    <div className="text-base font-mono font-extrabold text-emerald-400">
                      {selectedParcel.decimals.toFixed(2)}
                    </div>
                    <div className="text-[10px] text-slate-400 uppercase font-mono">Decimal</div>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-center">
                    <div className="text-base font-mono font-extrabold text-white">
                      {selectedParcel.katha.toFixed(2)}
                    </div>
                    <div className="text-[10px] text-slate-400 uppercase font-mono">Katha</div>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-center">
                    <div className="text-base font-mono font-extrabold text-[#00D4FF]">
                      {Math.round(selectedParcel.sqFeet)}
                    </div>
                    <div className="text-[10px] text-slate-400 uppercase font-mono">Sq. Feet</div>
                  </div>
                </div>
              ) : (
                <div className="my-4 p-3 rounded-xl bg-blue-500/10 border border-blue-500/30 text-xs text-blue-200">
                  Public Infrastructure & BWDB Acquisition Corridor traversing CS Plot 161 / RS Plot 308.
                </div>
              )}

              {/* Grantor & Recipient Chain */}
              <div className="space-y-2.5 text-xs border-t border-slate-800 pt-3.5">
                <div>
                  <span className="text-slate-400 block text-[11px] font-mono">GRANTOR (SELLER / RECORDED)</span>
                  <span className="font-bold text-white">{selectedParcel.grantor}</span>
                </div>
                <div>
                  <span className="text-slate-400 block text-[11px] font-mono">RECIPIENT (BUYER / POSSESSOR)</span>
                  <span className="font-bold text-emerald-300">{selectedParcel.recipient}</span>
                </div>
              </div>

              {/* 4-Side Chord Measurements */}
              <div className="mt-4 pt-3.5 border-t border-slate-800">
                <div className="text-[11px] font-mono uppercase text-slate-400 mb-2">
                  Surveyed Side Dimensions
                </div>
                <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                  <div className="p-2 rounded-lg bg-slate-950 border border-slate-800 flex justify-between">
                    <span className="text-slate-400">North:</span>
                    <span className="text-white font-bold">{selectedParcel.dimensions.north}</span>
                  </div>
                  <div className="p-2 rounded-lg bg-slate-950 border border-slate-800 flex justify-between">
                    <span className="text-slate-400">South:</span>
                    <span className="text-white font-bold">{selectedParcel.dimensions.south}</span>
                  </div>
                  <div className="p-2 rounded-lg bg-slate-950 border border-slate-800 flex justify-between">
                    <span className="text-slate-400">East:</span>
                    <span className="text-white font-bold">{selectedParcel.dimensions.east}</span>
                  </div>
                  <div className="p-2 rounded-lg bg-slate-950 border border-slate-800 flex justify-between">
                    <span className="text-slate-400">West:</span>
                    <span className="text-white font-bold">{selectedParcel.dimensions.west}</span>
                  </div>
                </div>
              </div>

              <p className="mt-3.5 text-xs text-slate-400 leading-relaxed">
                {selectedParcel.notes}
              </p>

              {/* Quick Sub-Parcel Selector List */}
              <div className="mt-4 pt-3.5 border-t border-slate-800">
                <div className="text-[11px] font-mono uppercase text-slate-400 mb-2">
                  Quick Jump Sub-Parcels
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {REPORT_PARCELS.map((p) => (
                    <button
                      key={p.id}
                      onClick={() => setSelectedParcel(p)}
                      className={`px-2.5 py-1 rounded text-[11px] font-mono transition-colors ${
                        selectedParcel.id === p.id
                          ? 'bg-[#0066FF] text-white font-bold'
                          : 'bg-slate-950 text-slate-300 hover:bg-slate-800 border border-slate-800'
                      }`}
                    >
                      {p.decimals > 0 ? `${p.decimals.toFixed(2)} Dec` : 'BWDB Road'}
                    </button>
                  ))}
                </div>
              </div>

              <button
                onClick={() => onOpenBookingModal('Map Preparation')}
                className="mt-4 w-full py-2.5 px-4 rounded-xl bg-[#0066FF] hover:bg-[#0052CC] text-white font-display font-bold text-xs transition-all inline-flex items-center justify-center gap-1.5"
              >
                <Eye className="w-3.5 h-3.5" />
                <span>Order Similar CAD Map for Your Land</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
