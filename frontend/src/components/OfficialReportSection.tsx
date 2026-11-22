import React, { useState } from 'react';
import {
  FileCheck2,
  Search,
  Printer,
  Maximize2,
  CheckCircle2,
  ShieldCheck,
  Compass,
  Phone,
  Mail,
} from 'lucide-react';
import { COMPANY_INFO, REPORT_PARCELS } from '../data/surveyData';

interface OfficialReportSectionProps {
  onOpenReportModal: () => void;
}

export const OfficialReportSection: React.FC<OfficialReportSectionProps> = ({
  onOpenReportModal,
}) => {
  const [searchQuery, setSearchQuery] = useState('308');
  const [verifiedMessage, setVerifiedMessage] = useState<string | null>(
    'Verified Official Report: Mouja Parain, Thana Rupgonj, District Narayanganj (CS/SA Plot 161 • RS Plot 308 • Date: 11/10/2026)'
  );

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    const q = searchQuery.trim().toLowerCase();
    if (
      q.includes('308') ||
      q.includes('161') ||
      q.includes('parain') ||
      q.includes('1111210') ||
      q.includes('19570') ||
      q.includes('edls')
    ) {
      setVerifiedMessage(
        'AUTHENTICATED: Land Survey Report #EDLS-2026-NRG-308 • Signed by Surveyor Faysal Ahamad Shanto (Reg #1111210) & Surveyor Mawlana MD Edris Ali (Reg #30827).'
      );
    } else {
      setVerifiedMessage(
        `Record lookup for "${searchQuery}": Showing sample certified dossier for Mouja Parain (RS Plot 308 / CS Plot 161). Contact 01754-246123 for archive verification.`
      );
    }
  };

  return (
    <section id="official-report" className="py-24 bg-[#070C17] border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Header + Live Report Verification Bar */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-xs font-mono text-emerald-300 mb-3">
              <FileCheck2 className="w-3.5 h-3.5" />
              <span>OFFICIAL DELIVERABLE SHOWCASE // DIGITAL SURVEY REPORT</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight">
              Certified Land Survey Report & Record Verification
            </h2>
            <p className="text-slate-300 text-sm sm:text-base mt-2">
              Every survey concludes with a legally structured, dual-signed report containing your plot map, Grantor-Recipient partition table, CS/RS overlap lines, and surveyor registration seals.
            </p>
          </div>

          {/* Search / Verify Input */}
          <form onSubmit={handleVerify} className="w-full lg:w-auto flex flex-col sm:flex-row gap-2">
            <div className="relative flex-1 sm:w-72">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Plot 308, CS 161, or Reg 1111210..."
                className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-sm text-white font-mono focus:outline-none focus:border-[#00D4FF]"
              />
            </div>
            <button
              type="submit"
              className="px-5 py-3 rounded-xl bg-[#0066FF] hover:bg-[#0052CC] text-white font-display font-bold text-sm transition-colors"
            >
              Verify Record
            </button>
          </form>
        </div>

        {verifiedMessage && (
          <div className="mb-8 p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-between gap-4">
            <div className="flex items-center gap-3 text-xs sm:text-sm text-emerald-200 font-mono">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
              <span>{verifiedMessage}</span>
            </div>
            <button
              onClick={onOpenReportModal}
              className="px-3.5 py-1.5 rounded-lg bg-emerald-500 text-slate-950 font-bold text-xs shrink-0 hover:bg-emerald-400 transition-colors"
            >
              Full-Screen Sheet
            </button>
          </div>
        )}

        {/* Faithful Digital Replica of the Provided Survey Sheet (Page 1 of PDF) */}
        <div className="rounded-3xl bg-[#FAF9F5] text-slate-900 border-4 border-[#6366F1] shadow-2xl overflow-hidden p-5 sm:p-8">
          {/* Top Document Header (Matches PDF Header Exactly) */}
          <div className="border-b-2 border-blue-800 pb-5">
            <div className="text-center font-serif font-bold text-slate-800 text-lg mb-1">
              {COMPANY_INFO.bismillahCode}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              {/* Left: Total Station & Scale 1" = 64 Feet */}
              <div className="lg:col-span-3 flex flex-col items-center border border-slate-300 rounded-xl p-3 bg-white">
                <div className="text-xs font-mono font-bold text-amber-700 uppercase tracking-wider mb-1">
                  TOTAL STATION & SCALE
                </div>
                <div className="w-full text-[10px] font-mono text-slate-600 text-center mb-1">
                  80 • 60 • 40 • 20 | 10 • 20 • 30 • 40 • 50
                </div>
                <div className="px-4 py-1 rounded bg-blue-100 border border-blue-600 text-blue-900 font-mono font-extrabold text-sm">
                  1" = 64 Feet
                </div>
              </div>

              {/* Center: Green Banner + 7 Services Below the Name + Contact */}
              <div className="lg:col-span-6 text-center space-y-2.5">
                <div className="py-2 px-4 rounded-lg bg-[#6EE7B7] border-2 border-emerald-700 shadow-sm">
                  <h3 className="text-2xl sm:text-3xl font-serif font-extrabold tracking-wide text-emerald-950">
                    EXPRESS digital land survey
                  </h3>
                </div>

                {/* The 7 Services Below the Name */}
                <div className="text-xs sm:text-sm font-bold text-slate-900 flex flex-wrap items-center justify-center gap-x-4 gap-y-1">
                  <span>• Digital Survey</span>
                  <span>• Map Preparation</span>
                  <span>• Retrieval of Deeds/Mouza Maps</span>
                  <span>• Pantograph</span>
                  <span>• Demarcation</span>
                  <span>• Overlap</span>
                  <span>• Record Verification</span>
                </div>

                {/* Email & Phone Numbers */}
                <div className="pt-1 flex flex-col items-center gap-1 text-xs sm:text-sm">
                  <div className="inline-flex items-center gap-1.5 font-bold text-slate-900">
                    <Mail className="w-4 h-4 text-red-600" />
                    <span>Gmail- {COMPANY_INFO.email}</span>
                  </div>
                  <div className="inline-flex items-center gap-2 font-bold text-slate-900">
                    <Phone className="w-4 h-4 text-emerald-700" />
                    <span>Faysal -</span>
                    <span className="text-red-600 font-extrabold">
                      01754-246123, 01521-715896
                    </span>
                  </div>
                </div>
              </div>

              {/* Right: Emblem & Surveyor Faysal Credentials */}
              <div className="lg:col-span-3 border border-slate-300 rounded-xl p-3.5 bg-white text-center">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-100 border border-emerald-600 text-emerald-900 text-xs font-bold mb-1">
                  <Compass className="w-3.5 h-3.5 text-emerald-700" />
                  <span>Express Digital Land Survey</span>
                </div>
                <div className="text-base font-extrabold text-teal-800 underline">Surveyor</div>
                <div className="text-base font-extrabold text-fuchsia-700 mt-0.5">
                  Faysal Ahamad Shanto
                </div>
                <div className="text-xs font-bold text-teal-900 mt-1 space-y-0.5">
                  <div>Reg No- 1111210</div>
                  <div>Certificate No- 19570/22</div>
                  <div>BS-AS Member No - 898/26</div>
                </div>
              </div>
            </div>
          </div>

          {/* Sub-Header: Land Survey Report Title & Date */}
          <div className="py-3 border-b border-slate-300 flex flex-wrap items-center justify-between gap-4">
            <div className="text-xs font-mono text-slate-500">
              REPORT ID: {COMPANY_INFO.featuredReport.reportId}
            </div>
            <h4 className="text-xl sm:text-2xl font-serif font-extrabold text-slate-900 underline">
              Land Survey Report
            </h4>
            <div className="text-base sm:text-lg font-serif font-bold text-slate-900">
              Date- {COMPANY_INFO.featuredReport.date}
            </div>
          </div>

          {/* Body: Schedule Tables + Parcel Summary + Signatures */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pt-6 items-start">
            {/* Left 4 Columns: Land Details Table & Design Overview Table */}
            <div className="lg:col-span-4 space-y-5">
              {/* Land Details Table */}
              <div className="border-2 border-slate-800 bg-white">
                <div className="py-2 px-3 border-b-2 border-slate-800 text-center font-serif font-extrabold text-base text-slate-900">
                  Land Details
                </div>
                <div className="divide-y divide-slate-800 text-xs sm:text-sm font-serif">
                  <div className="grid grid-cols-2 py-1.5 px-3">
                    <span className="font-bold">District</span>
                    <span className="font-bold text-slate-900">Narayanganj</span>
                  </div>
                  <div className="grid grid-cols-2 py-1.5 px-3">
                    <span className="font-bold">Thana</span>
                    <span className="font-bold text-slate-900">Rupgonj</span>
                  </div>
                  <div className="grid grid-cols-2 py-1.5 px-3">
                    <span className="font-bold">Mouja</span>
                    <span className="font-bold text-red-600">Parain</span>
                  </div>
                  <div className="py-1.5 px-3 text-center font-bold bg-slate-100">
                    Plot No -
                  </div>
                  <div className="grid grid-cols-2 py-1.5 px-3">
                    <span className="font-bold">CS/SA</span>
                    <span className="font-bold text-emerald-700">161</span>
                  </div>
                  <div className="grid grid-cols-2 py-1.5 px-3">
                    <span className="font-bold">RS</span>
                    <span className="font-bold text-fuchsia-700">308</span>
                  </div>
                </div>
              </div>

              {/* Design Overview Legend Table */}
              <div className="border-2 border-slate-800 bg-white">
                <div className="py-2 px-3 border-b-2 border-slate-800 text-center font-serif font-extrabold text-base text-slate-900">
                  Design Overview
                </div>
                <div className="divide-y divide-slate-800 text-xs sm:text-sm font-serif">
                  <div className="grid grid-cols-2 items-center py-2.5 px-3">
                    <span className="font-bold text-emerald-800">CS Line</span>
                    <span className="h-2.5 bg-green-600 rounded w-full block" />
                  </div>
                  <div className="grid grid-cols-2 items-center py-2.5 px-3">
                    <span className="font-bold text-fuchsia-700">RS Line</span>
                    <span className="h-2.5 bg-fuchsia-500 rounded w-full block" />
                  </div>
                  <div className="grid grid-cols-2 items-center py-2.5 px-3">
                    <span className="font-bold text-blue-800">Aqueduct/Road Line</span>
                    <span className="h-2.5 bg-blue-600 rounded w-full block" />
                  </div>
                </div>
              </div>
            </div>

            {/* Right 8 Columns: Sub-Parcel Breakdown Table & Dual Surveyor Signatures */}
            <div className="lg:col-span-8 space-y-6">
              <div className="border-2 border-slate-800 bg-white overflow-x-auto">
                <div className="py-2 px-4 border-b-2 border-slate-800 bg-slate-100 flex items-center justify-between">
                  <span className="font-serif font-extrabold text-sm sm:text-base text-slate-900">
                    Verified Sub-Parcel & Grantor-Recipient Schedule (RS Plot 308 & 310)
                  </span>
                  <span className="text-xs font-mono font-bold text-emerald-800">
                    Scale: 1" = 64 Feet
                  </span>
                </div>
                <table className="w-full text-left border-collapse text-xs sm:text-sm">
                  <thead>
                    <tr className="border-b border-slate-300 bg-slate-50 font-serif">
                      <th className="py-2.5 px-3 font-bold">Plot / Segment</th>
                      <th className="py-2.5 px-3 font-bold">Grantor (Seller)</th>
                      <th className="py-2.5 px-3 font-bold">Recipient (Buyer)</th>
                      <th className="py-2.5 px-3 font-bold">Dimensions (N/S/E/W)</th>
                      <th className="py-2.5 px-3 font-bold text-right">Area</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 font-serif">
                    {REPORT_PARCELS.filter((p) => p.decimals > 0).map((parcel) => (
                      <tr key={parcel.id} className="hover:bg-emerald-50/60">
                        <td className="py-2.5 px-3 font-bold text-fuchsia-800">{parcel.plotNo}</td>
                        <td className="py-2.5 px-3 text-slate-800">{parcel.grantor}</td>
                        <td className="py-2.5 px-3 font-semibold text-slate-900">
                          {parcel.recipient}
                        </td>
                        <td className="py-2.5 px-3 font-mono text-xs text-slate-700">
                          N:{parcel.dimensions.north} • S:{parcel.dimensions.south} • E:
                          {parcel.dimensions.east} • W:{parcel.dimensions.west}
                        </td>
                        <td className="py-2.5 px-3 font-bold text-red-600 text-right whitespace-nowrap">
                          {parcel.decimals.toFixed(2)} Decimal
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Dual Surveyor Signatures Footer (Matches Bottom-Right of PDF) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
                <div className="p-4 rounded-xl border border-slate-300 bg-white text-center">
                  <div className="text-sm font-serif font-bold text-teal-800 underline">
                    Surveyor
                  </div>
                  <div className="text-base font-serif font-extrabold text-fuchsia-700 mt-0.5">
                    Mawlana MD Edris Ali
                  </div>
                  <div className="text-xs font-bold text-teal-800 mt-1 space-y-0.5">
                    <div>Reg No- 30827</div>
                    <div>Phone - 01913-553545</div>
                    <div>01580-594467</div>
                  </div>
                </div>

                <div className="p-4 rounded-xl border border-slate-300 bg-white text-center relative">
                  <div className="font-serif italic text-slate-700 text-lg mb-0.5 select-none">
                    Faysal Ahamad
                  </div>
                  <div className="text-sm font-serif font-bold text-teal-800 underline">
                    Surveyor
                  </div>
                  <div className="text-base font-serif font-extrabold text-fuchsia-700 mt-0.5">
                    Faysal Ahamad Shanto
                  </div>
                  <div className="text-xs font-bold text-teal-800 mt-1 space-y-0.5">
                    <div>Reg No- 1111210</div>
                    <div>Certificate No- 19570/22</div>
                    <div>Phone - 01754-246123, 01521-715896</div>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-end gap-3">
                <button
                  onClick={onOpenReportModal}
                  className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs sm:text-sm font-bold inline-flex items-center gap-2 transition-colors"
                >
                  <Maximize2 className="w-4 h-4 text-[#00D4FF]" />
                  <span>Open Full Printable Survey Sheet</span>
                </button>
                <button
                  onClick={() => window.print()}
                  className="px-4 py-2.5 rounded-xl border border-slate-400 hover:bg-slate-200 text-slate-800 text-xs sm:text-sm font-bold inline-flex items-center gap-2 transition-colors"
                >
                  <Printer className="w-4 h-4" />
                  <span>Print Summary</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
