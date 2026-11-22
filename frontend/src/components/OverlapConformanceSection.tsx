import React, { useState } from 'react';
import {
  GitCompare,
  Sliders,
  AlertTriangle,
  CheckCircle2,
  ArrowRight,
  Layers,
  ShieldAlert,
} from 'lucide-react';

interface OverlapConformanceSectionProps {
  onOpenBookingModal: (defaultService?: string) => void;
}

export const OverlapConformanceSection: React.FC<OverlapConformanceSectionProps> = ({
  onOpenBookingModal,
}) => {
  const [sliderValue, setSliderValue] = useState<number>(65);
  const [highlightMode, setHighlightMode] = useState<'all' | 'bwdb' | 'deed-splits'>('all');

  return (
    <section id="overlap-engine" className="py-24 bg-[#070C17] border-b border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left 5 Columns: Explanation & Controls */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-fuchsia-500/10 border border-fuchsia-500/30 text-xs font-mono text-fuchsia-300">
              <GitCompare className="w-3.5 h-3.5" />
              <span>SERVICE 06 & 07 // OVERLAP & RECORD VERIFICATION</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight leading-tight">
              Superimpose <span className="text-emerald-400">CS</span>,{' '}
              <span className="text-fuchsia-400">RS</span> &{' '}
              <span className="text-sky-400">Road Acquisitions</span> Before You Build or Buy.
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Just like Propeller Aero’s design conformance heatmaps, our <strong className="text-white">Multi-Era Cadastral Overlap Engine</strong> aligns historical CS/SA Plot 161 boundaries with current RS Plot 308 subdivisions and public infrastructure corridors.
            </p>

            {/* Interactive Slider Control */}
            <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-4">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-emerald-400 font-bold">1910–1962 CS/SA (PLOT 161)</span>
                <span className="text-white bg-slate-800 px-2 py-0.5 rounded">
                  Blend: {sliderValue}% RS
                </span>
                <span className="text-fuchsia-400 font-bold">CURRENT RS/FIELD (PLOT 308)</span>
              </div>

              <input
                type="range"
                min={0}
                max={100}
                value={sliderValue}
                onChange={(e) => setSliderValue(Number(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-[#0066FF]"
              />

              <div className="flex flex-wrap gap-2 pt-1">
                <button
                  onClick={() => setHighlightMode('all')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-colors ${
                    highlightMode === 'all'
                      ? 'bg-[#0066FF] text-white font-semibold'
                      : 'bg-slate-950 text-slate-400 border border-slate-800'
                  }`}
                >
                  All 3 Cadastral Layers
                </button>
                <button
                  onClick={() => setHighlightMode('bwdb')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-colors ${
                    highlightMode === 'bwdb'
                      ? 'bg-blue-600 text-white font-semibold'
                      : 'bg-slate-950 text-slate-400 border border-slate-800'
                  }`}
                >
                  Focus: BWDB & Road Corridor
                </button>
                <button
                  onClick={() => setHighlightMode('deed-splits')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-colors ${
                    highlightMode === 'deed-splits'
                      ? 'bg-fuchsia-600 text-white font-semibold'
                      : 'bg-slate-950 text-slate-400 border border-slate-800'
                  }`}
                >
                  Focus: Deed Sub-Allotments
                </button>
              </div>
            </div>

            {/* Key Findings from the Parain Mouja Overlap Audit */}
            <div className="space-y-3">
              <div className="p-3.5 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-start gap-3">
                <ShieldAlert className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
                <div className="text-xs text-slate-200 leading-relaxed">
                  <strong className="text-white block mb-0.5">
                    BWDB & Social Brick Road Detection (Aqueduct/Road Line)
                  </strong>
                  Identifies exact strip of land acquired by the Bangladesh Water Development Board (BWDB) and the brick road separating Plot 310 from Plot 308.
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div className="text-xs text-slate-200 leading-relaxed">
                  <strong className="text-white block mb-0.5">
                    Grantor-to-Recipient Share Reconciliation
                  </strong>
                  Verifies 8.80 Dec (Zafir Ahmed), 6.00 Dec + 2.34 Dec + 7.20 Dec (Jafir Ahmed), and southern possession (Mokbul & Others) with zero internal overlap.
                </div>
              </div>
            </div>

            <button
              onClick={() => onOpenBookingModal('Overlap')}
              className="px-6 py-3.5 rounded-xl bg-[#0066FF] hover:bg-[#0052CC] text-white font-display font-bold text-sm shadow-glow-blue transition-all inline-flex items-center gap-2"
            >
              <span>Order CS/RS Overlap Analysis</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Right 7 Columns: Visual Split-Layer Conformance Visualizer */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-[#0B1324] border border-slate-800 p-6 shadow-2xl relative overflow-hidden">
              <div className="flex flex-wrap items-center justify-between gap-2 pb-4 mb-4 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <Layers className="w-4 h-4 text-[#00D4FF]" />
                  <span className="text-xs font-mono uppercase text-white font-bold">
                    CONFORMANCE MATRIX // CS PLOT 161 ↔ RS PLOT 308
                  </span>
                </div>
                <div className="flex items-center gap-3 text-[11px] font-mono">
                  <span className="inline-flex items-center gap-1 text-emerald-400">
                    <span className="w-3 h-1.5 bg-emerald-500 inline-block rounded" /> CS Line
                  </span>
                  <span className="inline-flex items-center gap-1 text-fuchsia-400">
                    <span className="w-3 h-1.5 bg-fuchsia-500 inline-block rounded" /> RS Line
                  </span>
                  <span className="inline-flex items-center gap-1 text-sky-400">
                    <span className="w-3 h-1.5 bg-blue-500 inline-block rounded" /> Road/BWDB
                  </span>
                </div>
              </div>

              {/* SVG Superimposition Comparison Canvas */}
              <div className="rounded-2xl bg-[#060A12] border border-slate-800/90 p-4">
                <svg viewBox="0 0 600 380" className="w-full h-auto select-none">
                  {/* CS/SA Plot 161 Base Layer (Opacity controlled inversely or always visible in green) */}
                  <g style={{ opacity: Math.max(0.25, (120 - sliderValue) / 100) }}>
                    <polygon
                      points="70,60 520,35 535,345 95,335"
                      fill="rgba(22, 163, 74, 0.10)"
                      stroke="#16A34A"
                      strokeWidth="3"
                      strokeDasharray="10 5"
                    />
                    <text
                      x="110"
                      y="92"
                      fill="#4ADE80"
                      fontSize="13"
                      fontFamily="monospace"
                      fontWeight="bold"
                    >
                      HISTORICAL CS / SA PLOT NO: 161 (MOUZA PARAIN)
                    </text>
                    <line
                      x1="70"
                      y1="195"
                      x2="528"
                      y2="170"
                      stroke="#16A34A"
                      strokeWidth="1.8"
                      strokeDasharray="6 4"
                    />
                  </g>

                  {/* RS Layer & Sub-Parcels (Opacity controlled by sliderValue) */}
                  <g style={{ opacity: Math.max(0.2, sliderValue / 100) }}>
                    {/* Plot 310 North */}
                    <polygon
                      points="210,55 320,42 328,112 216,120"
                      fill={
                        highlightMode === 'deed-splits'
                          ? 'rgba(245, 158, 11, 0.28)'
                          : 'rgba(217, 70, 239, 0.08)'
                      }
                      stroke="#D946EF"
                      strokeWidth="2"
                    />
                    <line x1="265" y1="48" x2="272" y2="116" stroke="#D946EF" strokeWidth="1.5" />
                    <text x="238" y="85" fill="#FDE68A" fontSize="10" fontWeight="bold" textAnchor="middle">
                      4.30 Dec
                    </text>
                    <text x="295" y="82" fill="#FDE68A" fontSize="10" fontWeight="bold" textAnchor="middle">
                      5.00 Dec
                    </text>
                    <text x="415" y="85" fill="#E879F9" fontSize="15" fontWeight="bold">
                      RS Plot 310
                    </text>

                    {/* Target RS Plot 308 Multi-Deed Stack */}
                    <g>
                      {/* 8.80 Dec */}
                      <polygon
                        points="220,165 340,156 344,205 224,212"
                        fill={
                          highlightMode === 'deed-splits'
                            ? 'rgba(16, 185, 129, 0.30)'
                            : 'rgba(217, 70, 239, 0.15)'
                        }
                        stroke="#D946EF"
                        strokeWidth="2.2"
                      />
                      <text x="282" y="182" fill="#FFFFFF" fontSize="9.5" fontWeight="bold" textAnchor="middle">
                        Zafir Ahmed • 8.80 Decimal (75' × 53')
                      </text>

                      {/* 6.00 Dec */}
                      <polygon
                        points="224,212 344,205 347,246 227,252"
                        fill="rgba(168, 85, 247, 0.22)"
                        stroke="#D946EF"
                        strokeWidth="2.2"
                      />
                      <text x="285" y="232" fill="#FFFFFF" fontSize="9.5" fontWeight="bold" textAnchor="middle">
                        Jafir Ahmed • 6.00 Decimal (70' × 38')
                      </text>

                      {/* 2.34 Dec */}
                      <polygon
                        points="227,252 347,246 349,268 229,274"
                        fill="rgba(236, 72, 153, 0.28)"
                        stroke="#D946EF"
                        strokeWidth="2.2"
                      />
                      <text x="288" y="263" fill="#FDE047" fontSize="9" fontWeight="bold" textAnchor="middle">
                        2.34 Decimal (15' Strip)
                      </text>

                      {/* 7.20 Dec */}
                      <polygon
                        points="229,274 349,268 352,312 232,316"
                        fill="rgba(16, 185, 129, 0.24)"
                        stroke="#D946EF"
                        strokeWidth="2.2"
                      />
                      <text x="290" y="296" fill="#FFFFFF" fontSize="9.5" fontWeight="bold" textAnchor="middle">
                        Jafir Ahmed • (2.54+4.66) = 7.20 Decimal
                      </text>

                      {/* Mokbul & Others */}
                      <polygon
                        points="232,316 352,312 355,348 235,350"
                        fill="rgba(56, 189, 248, 0.18)"
                        stroke="#D946EF"
                        strokeWidth="2"
                      />
                      <text x="293" y="335" fill="#BAE6FD" fontSize="9" fontWeight="bold" textAnchor="middle">
                        Mokbul & Others (55' / 47')
                      </text>
                    </g>

                    {/* Neighbor RS Labels */}
                    <text x="145" y="265" fill="#E879F9" fontSize="14" fontWeight="bold">
                      RS 307
                    </text>
                    <text x="420" y="190" fill="#E879F9" fontSize="14" fontWeight="bold">
                      RS 311
                    </text>
                    <text x="420" y="255" fill="#E879F9" fontSize="14" fontWeight="bold">
                      RS 312
                    </text>
                    <text x="455" y="325" fill="#E879F9" fontSize="14" fontWeight="bold">
                      RS 316 / 317
                    </text>
                  </g>

                  {/* Aqueduct / Road & BWDB Corridor (Always crisp, pulses when bwdb mode active) */}
                  <g>
                    <polygon
                      points="65,126 540,98 542,120 67,146"
                      fill={
                        highlightMode === 'bwdb'
                          ? 'rgba(37, 99, 235, 0.50)'
                          : 'rgba(37, 99, 235, 0.28)'
                      }
                      stroke="#3B82F6"
                      strokeWidth="2.5"
                    />
                    <text
                      x="305"
                      y="125"
                      fill="#93C5FD"
                      fontSize="10.5"
                      fontWeight="bold"
                      textAnchor="middle"
                      transform="rotate(-3.2, 305, 125)"
                    >
                      BRICK ROAD FOR SOCIAL MOVEMENT (AQUEDUCT / ROAD LINE)
                    </text>

                    <polygon
                      points="67,146 542,120 544,142 69,166"
                      fill={
                        highlightMode === 'bwdb'
                          ? 'rgba(239, 68, 68, 0.45)'
                          : 'rgba(239, 68, 68, 0.24)'
                      }
                      stroke="#2563EB"
                      strokeWidth="2"
                    />
                    <text
                      x="306"
                      y="145"
                      fill="#FCA5A5"
                      fontSize="10"
                      fontWeight="bold"
                      textAnchor="middle"
                      transform="rotate(-3.2, 306, 145)"
                    >
                      LAND ACQUIRED BY BANGLADESH WATER DEVELOPMENT BOARD (BWDB)
                    </text>
                  </g>
                </svg>
              </div>

              {/* Bottom Summary Strip */}
              <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800">
                  <span className="text-slate-400 font-mono block text-[10px]">CS/SA BASELINE</span>
                  <span className="font-bold text-emerald-400">Plot No. 161 (Parain)</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800">
                  <span className="text-slate-400 font-mono block text-[10px]">RS CURRENT RECORD</span>
                  <span className="font-bold text-fuchsia-400">Plot No. 308 (Subdivided)</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800">
                  <span className="text-slate-400 font-mono block text-[10px]">PUBLIC ACQUISITION</span>
                  <span className="font-bold text-sky-400">BWDB + Social Brick Road</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
