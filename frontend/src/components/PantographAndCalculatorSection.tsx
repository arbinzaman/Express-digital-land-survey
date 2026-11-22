import React, { useState } from 'react';
import {
  Scaling,
  Calculator,
  Ruler,
  ArrowRightLeft,
  Compass,
  CheckCircle2,
  Sparkles,
} from 'lucide-react';

export const PantographAndCalculatorSection: React.FC = () => {
  // Land Unit Converter State
  const [decimalsInput, setDecimalsInput] = useState<string>('8.80');
  // 4-Side Trapezoidal Field Solver State (Defaulting to Plot 308 Part A: 75', 70', 53', 52.83')
  const [northFt, setNorthFt] = useState<string>('75');
  const [southFt, setSouthFt] = useState<string>('70');
  const [eastFt, setEastFt] = useState<string>('52.83');
  const [westFt, setWestFt] = useState<string>('53');
  // Pantograph Scale State
  const [selectedScale, setSelectedScale] = useState<'64' | '32' | '16'>('64');
  const [mapInches, setMapInches] = useState<string>('1.17');

  const decVal = Math.max(0, parseFloat(decimalsInput) || 0);
  const sqFeetFromDec = decVal * 435.6;
  const kathaFromDec = sqFeetFromDec / 720;
  const bighaFromDec = decVal / 33;
  const sqMetersFromDec = sqFeetFromDec * 0.092903;
  const sqLinksFromDec = decVal * 1000;

  // Average length & width method used in standard land survey verification
  const nVal = Math.max(0, parseFloat(northFt) || 0);
  const sVal = Math.max(0, parseFloat(southFt) || 0);
  const eVal = Math.max(0, parseFloat(eastFt) || 0);
  const wVal = Math.max(0, parseFloat(westFt) || 0);

  const avgWidth = (nVal + sVal) / 2;
  const avgLength = (eVal + wVal) / 2;
  const solvedSqFt = avgWidth * avgLength;
  const solvedDecimals = solvedSqFt / 435.6;
  const solvedKatha = solvedSqFt / 720;

  // Pantograph scale conversion
  const feetPerInch = selectedScale === '64' ? 64 : selectedScale === '32' ? 32 : 16;
  const inchesVal = Math.max(0, parseFloat(mapInches) || 0);
  const groundFeet = inchesVal * feetPerInch;
  const guniaLinks = (groundFeet / 0.66);

  return (
    <section id="pantograph-tool" className="py-24 bg-[#0A1120] border-b border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-xs font-mono text-amber-300 mb-3">
            <Scaling className="w-3.5 h-3.5" />
            <span>SERVICE 04 & INTERACTIVE UTILITIES // PANTOGRAPH & LAND CALCULATOR</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight">
            Interactive Digital Pantograph &{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-emerald-400 to-[#00D4FF]">
              Cadastral Area Solver
            </span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mt-3 leading-relaxed">
            Verify your plot measurements using our calibrated <strong className="text-white">1" = 64 Feet</strong> diagonal scale chart, convert between <strong className="text-emerald-400">Decimals, Katha, Bigha & Sq. Feet</strong>, or enter 4-side chord lengths to compute instant land area.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Card 1: Digital Pantograph & Diagonal Scale Simulator (6 Cols) */}
          <div className="lg:col-span-6 p-6 sm:p-8 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-5 pb-3 border-b border-slate-800">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-xl bg-amber-500/15 border border-amber-500/30 text-amber-400">
                    <Scaling className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-display font-bold text-white">
                      Pantograph & Mouza Scale Transposition
                    </h3>
                    <p className="text-xs text-slate-400">
                      Calibrated to the 1" = 64 Feet Diagonal Scale Chart on our Survey Reports
                    </p>
                  </div>
                </div>
                <span className="font-mono text-xs px-2.5 py-1 rounded bg-blue-500/20 text-blue-300 border border-blue-500/40 font-bold">
                  1" = {feetPerInch} Feet
                </span>
              </div>

              {/* Scale Ratio Selector */}
              <div className="mb-5">
                <label className="text-xs font-mono uppercase text-slate-400 block mb-2">
                  Select Cadastral Mouza Map Scale
                </label>
                <div className="grid grid-cols-3 gap-2.5">
                  <button
                    onClick={() => setSelectedScale('64')}
                    className={`p-3 rounded-xl border text-left transition-all ${
                      selectedScale === '64'
                        ? 'bg-[#0066FF] text-white border-[#00D4FF]'
                        : 'bg-slate-950 text-slate-300 border-slate-800 hover:border-slate-700'
                    }`}
                  >
                    <div className="font-mono font-bold text-sm">1" = 64 Feet</div>
                    <div className="text-[11px] opacity-80">16" = 1 Mile (Standard)</div>
                  </button>
                  <button
                    onClick={() => setSelectedScale('32')}
                    className={`p-3 rounded-xl border text-left transition-all ${
                      selectedScale === '32'
                        ? 'bg-[#0066FF] text-white border-[#00D4FF]'
                        : 'bg-slate-950 text-slate-300 border-slate-800 hover:border-slate-700'
                    }`}
                  >
                    <div className="font-mono font-bold text-sm">1" = 32 Feet</div>
                    <div className="text-[11px] opacity-80">32" = 1 Mile (2x Zoom)</div>
                  </button>
                  <button
                    onClick={() => setSelectedScale('16')}
                    className={`p-3 rounded-xl border text-left transition-all ${
                      selectedScale === '16'
                        ? 'bg-[#0066FF] text-white border-[#00D4FF]'
                        : 'bg-slate-950 text-slate-300 border-slate-800 hover:border-slate-700'
                    }`}
                  >
                    <div className="font-mono font-bold text-sm">1" = 16 Feet</div>
                    <div className="text-[11px] opacity-80">64" = 1 Mile (4x Urban)</div>
                  </button>
                </div>
              </div>

              {/* Map Inches to Ground Feet Input */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div>
                  <label className="text-xs font-mono text-slate-400 block mb-1.5">
                    Measured Map Distance (Inches)
                  </label>
                  <input
                    type="number"
                    step="0.05"
                    value={mapInches}
                    onChange={(e) => setMapInches(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white font-mono text-base focus:outline-none focus:border-[#00D4FF]"
                  />
                </div>
                <div className="p-3.5 rounded-xl bg-slate-950 border border-emerald-500/30 flex flex-col justify-center">
                  <span className="text-[11px] font-mono text-slate-400">REAL GROUND DISTANCE</span>
                  <div className="text-xl font-mono font-extrabold text-emerald-400">
                    {groundFeet.toFixed(1)} Feet{' '}
                    <span className="text-xs font-normal text-slate-400">
                      ({guniaLinks.toFixed(1)} Links)
                    </span>
                  </div>
                </div>
              </div>

              {/* Exact SVG Replica of the Diagonal Scale Chart from the Top-Left of the PDF (80-60-40-20 / 10-20-30-40-50) */}
              <div className="p-4 rounded-2xl bg-[#070C16] border border-slate-800">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-mono text-slate-400 uppercase">
                    CALIBRATED DIAGONAL SCALE CHART (FROM SURVEY REPORT HEADER)
                  </span>
                  <span className="px-2 py-0.5 rounded bg-blue-600/20 border border-blue-500/40 text-blue-300 font-mono text-xs font-bold">
                    1" = 64 Feet
                  </span>
                </div>
                <svg viewBox="0 0 420 120" className="w-full h-auto">
                  {/* Horizontal lines (20, 40, 60, 80) */}
                  <rect x="45" y="15" width="340" height="64" fill="none" stroke="#94A3B8" strokeWidth="1.5" />
                  <line x1="45" y1="31" x2="385" y2="31" stroke="#475569" strokeWidth="1" />
                  <line x1="45" y1="47" x2="385" y2="47" stroke="#475569" strokeWidth="1" />
                  <line x1="45" y1="63" x2="385" y2="63" stroke="#475569" strokeWidth="1" />

                  {/* Left Y-axis labels: 80, 60, 40, 20 */}
                  <text x="35" y="23" fill="#CBD5E1" fontSize="10" fontFamily="monospace" textAnchor="end">80</text>
                  <text x="35" y="39" fill="#CBD5E1" fontSize="10" fontFamily="monospace" textAnchor="end">60</text>
                  <text x="35" y="55" fill="#CBD5E1" fontSize="10" fontFamily="monospace" textAnchor="end">40</text>
                  <text x="35" y="71" fill="#CBD5E1" fontSize="10" fontFamily="monospace" textAnchor="end">20</text>

                  {/* Vertical subdivisions (10, 20, 30, 40, 50) */}
                  <line x1="113" y1="15" x2="113" y2="79" stroke="#94A3B8" strokeWidth="1.2" />
                  <line x1="181" y1="15" x2="181" y2="79" stroke="#94A3B8" strokeWidth="1.2" />
                  <line x1="249" y1="15" x2="249" y2="79" stroke="#94A3B8" strokeWidth="1.2" />
                  <line x1="317" y1="15" x2="317" y2="79" stroke="#94A3B8" strokeWidth="1.2" />

                  {/* Diagonal Pantograph lines inside first bay */}
                  <line x1="45" y1="79" x2="79" y2="15" stroke="#00D4FF" strokeWidth="1.5" />
                  <line x1="79" y1="15" x2="113" y2="79" stroke="#00D4FF" strokeWidth="1.5" />

                  {/* Bottom labels: 10 20 30 40 50 */}
                  <text x="79" y="96" fill="#38BDF8" fontSize="11" fontFamily="monospace" fontWeight="bold" textAnchor="middle">10</text>
                  <text x="147" y="96" fill="#38BDF8" fontSize="11" fontFamily="monospace" fontWeight="bold" textAnchor="middle">20</text>
                  <text x="215" y="96" fill="#38BDF8" fontSize="11" fontFamily="monospace" fontWeight="bold" textAnchor="middle">30</text>
                  <text x="283" y="96" fill="#38BDF8" fontSize="11" fontFamily="monospace" fontWeight="bold" textAnchor="middle">40</text>
                  <text x="351" y="96" fill="#38BDF8" fontSize="11" fontFamily="monospace" fontWeight="bold" textAnchor="middle">50</text>
                </svg>
              </div>
            </div>
          </div>

          {/* Card 2: Instant Land Unit Converter & 4-Side Plot Area Calculator (6 Cols) */}
          <div className="lg:col-span-6 space-y-6">
            {/* Sub-Card A: Decimal / Katha / Sq.Ft Instant Converter */}
            <div className="p-6 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-xl">
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-800">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-400">
                    <ArrowRightLeft className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-display font-bold text-white">
                      Bangladesh Land Unit Converter
                    </h3>
                    <p className="text-xs text-slate-400">
                      1 Decimal (Shotok) = 435.6 Sq. Feet • 1 Katha = 720 Sq. Feet
                    </p>
                  </div>
                </div>
              </div>

              <div className="mb-4">
                <label className="text-xs font-mono text-slate-300 block mb-1.5">
                  Enter Land Area in Decimals (or click a Plot 308 preset):
                </label>
                <div className="flex flex-wrap gap-2 mb-2.5">
                  {['8.80', '6.00', '2.34', '7.20', '4.30', '5.00', '33.00'].map((preset) => (
                    <button
                      key={preset}
                      onClick={() => setDecimalsInput(preset)}
                      className={`px-2.5 py-1 rounded text-xs font-mono transition-colors ${
                        decimalsInput === preset
                          ? 'bg-emerald-500 text-slate-950 font-bold'
                          : 'bg-slate-950 text-slate-300 border border-slate-800 hover:border-slate-600'
                      }`}
                    >
                      {preset} Dec
                    </button>
                  ))}
                </div>
                <input
                  type="number"
                  step="0.01"
                  value={decimalsInput}
                  onChange={(e) => setDecimalsInput(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white font-mono text-base focus:outline-none focus:border-emerald-400"
                />
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
                  <div className="text-[10px] font-mono text-slate-400 uppercase">Sq. Feet</div>
                  <div className="text-base font-mono font-bold text-white mt-0.5">
                    {sqFeetFromDec.toFixed(1)}
                  </div>
                </div>
                <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
                  <div className="text-[10px] font-mono text-slate-400 uppercase">Katha</div>
                  <div className="text-base font-mono font-bold text-emerald-400 mt-0.5">
                    {kathaFromDec.toFixed(2)}
                  </div>
                </div>
                <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
                  <div className="text-[10px] font-mono text-slate-400 uppercase">Bigha</div>
                  <div className="text-base font-mono font-bold text-[#00D4FF] mt-0.5">
                    {bighaFromDec.toFixed(3)}
                  </div>
                </div>
                <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
                  <div className="text-[10px] font-mono text-slate-400 uppercase">Sq. Meters</div>
                  <div className="text-base font-mono font-bold text-amber-300 mt-0.5">
                    {sqMetersFromDec.toFixed(1)}
                  </div>
                </div>
              </div>
            </div>

            {/* Sub-Card B: 4-Side Chord Measurement Area Solver */}
            <div className="p-6 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-xl">
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-800">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-xl bg-[#0066FF]/20 border border-[#0066FF]/40 text-[#00D4FF]">
                    <Calculator className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-display font-bold text-white">
                      4-Side Boundary Dimension Solver
                    </h3>
                    <p className="text-xs text-slate-400">
                      Pre-loaded with Plot 308 Part A (North 75', South 70', West 53', East 52'-10")
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
                <div>
                  <label className="text-[11px] font-mono text-slate-400 block mb-1">North (Ft)</label>
                  <input
                    type="number"
                    value={northFt}
                    onChange={(e) => setNorthFt(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-700 text-white font-mono text-sm"
                  />
                </div>
                <div>
                  <label className="text-[11px] font-mono text-slate-400 block mb-1">South (Ft)</label>
                  <input
                    type="number"
                    value={southFt}
                    onChange={(e) => setSouthFt(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-700 text-white font-mono text-sm"
                  />
                </div>
                <div>
                  <label className="text-[11px] font-mono text-slate-400 block mb-1">East (Ft)</label>
                  <input
                    type="number"
                    value={eastFt}
                    onChange={(e) => setEastFt(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-700 text-white font-mono text-sm"
                  />
                </div>
                <div>
                  <label className="text-[11px] font-mono text-slate-400 block mb-1">West (Ft)</label>
                  <input
                    type="number"
                    value={westFt}
                    onChange={(e) => setWestFt(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-700 text-white font-mono text-sm"
                  />
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-gradient-to-r from-[#0066FF]/15 via-slate-950 to-emerald-500/15 border border-slate-700 flex flex-wrap items-center justify-between gap-4">
                <div>
                  <span className="text-[11px] font-mono text-slate-400 block">
                    COMPUTED PARCEL AREA
                  </span>
                  <div className="text-2xl font-mono font-extrabold text-emerald-400">
                    {solvedDecimals.toFixed(2)} Decimal
                  </div>
                </div>
                <div className="text-right font-mono">
                  <div className="text-sm font-bold text-white">
                    {solvedSqFt.toFixed(1)} Sq. Feet
                  </div>
                  <div className="text-xs text-[#00D4FF]">{solvedKatha.toFixed(2)} Katha</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
