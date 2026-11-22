import React, { useState, useEffect } from 'react';
import {
  X,
  CheckCircle2,
  Phone,
  Mail,
  MessageSquare,
  Printer,
  Compass,
  MapPin,
  Send,
  Sparkles,
} from 'lucide-react';
import { COMPANY_INFO, CORE_SERVICES } from '../data/surveyData';

interface BookingModalProps {
  isOpen: boolean;
  defaultService?: string;
  onClose: () => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  defaultService,
  onClose,
}) => {
  const [selectedServices, setSelectedServices] = useState<string[]>([
    defaultService || 'Digital Survey',
  ]);
  const [clientName, setClientName] = useState('');
  const [phone, setPhone] = useState('');
  const [district, setDistrict] = useState('Narayanganj');
  const [thana, setThana] = useState('Rupgonj');
  const [mouja, setMouja] = useState('');
  const [plotInfo, setPlotInfo] = useState('');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (defaultService) {
      setSelectedServices([defaultService]);
    }
    setSubmitted(false);
  }, [defaultService, isOpen]);

  if (!isOpen) return null;

  const toggleService = (title: string) => {
    setSelectedServices((prev) =>
      prev.includes(title) ? prev.filter((t) => t !== title) : [...prev, title]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const whatsappText = encodeURIComponent(
    `Assalamu Alaikum Express Digital Land Survey ("786"),\n` +
      `I would like to book a survey:\n` +
      `• Services: ${selectedServices.join(', ')}\n` +
      `• Name: ${clientName || 'Client'}\n` +
      `• Phone: ${phone}\n` +
      `• Location: Mouja ${mouja || 'N/A'}, Thana ${thana}, District ${district}\n` +
      `• Plot (CS/SA/RS): ${plotInfo || 'N/A'}\n` +
      `• Notes: ${notes || 'Please contact me for scheduling.'}`
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-2xl rounded-3xl bg-[#0D1628] border border-slate-700 shadow-2xl overflow-hidden my-8">
        {/* Top Header */}
        <div className="px-6 py-5 bg-[#080E1B] border-b border-slate-800 flex items-center justify-between">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-mono text-emerald-400">
              <Sparkles className="w-3.5 h-3.5" />
              <span>EXPRESS DIGITAL LAND SURVEY // FIELD DISPATCH</span>
            </div>
            <h3 className="text-xl font-display font-extrabold text-white mt-0.5">
              Schedule a Digital Survey or Record Audit
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {submitted ? (
          <div className="p-8 text-center space-y-5">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-9 h-9" />
            </div>
            <h4 className="text-2xl font-display font-extrabold text-white">
              Survey Request Prepared!
            </h4>
            <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
              Your request for <strong className="text-emerald-400">{selectedServices.join(', ')}</strong> in{' '}
              <strong className="text-white">
                {mouja ? `Mouja ${mouja}, ` : ''}
                {thana}, {district}
              </strong>{' '}
              is ready. Connect directly with Lead Surveyor{' '}
              <strong className="text-white">Faysal Ahamad Shanto (Reg #1111210)</strong> below:
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <a
                href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${whatsappText}`}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-display font-bold text-sm inline-flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Send Instantly via WhatsApp (01754-246123)</span>
              </a>
              <a
                href={`mailto:${COMPANY_INFO.email}?subject=Survey Request - ${district}/${thana}&body=${whatsappText}`}
                className="w-full sm:w-auto px-5 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-display font-semibold text-sm inline-flex items-center justify-center gap-2 border border-slate-700"
              >
                <Mail className="w-4 h-4 text-[#00D4FF]" />
                <span>Send via Gmail</span>
              </a>
            </div>

            <div className="pt-4 border-t border-slate-800 flex items-center justify-center gap-6 text-xs font-mono text-slate-400">
              <span>Direct Call: 01754-246123</span>
              <span>•</span>
              <span>Alt: 01521-715896</span>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-5 max-h-[80vh] overflow-y-auto">
            {/* Multi-select 7 Services */}
            <div>
              <label className="text-xs font-mono uppercase text-slate-300 font-semibold block mb-2">
                1. Select Required Services (7 Core Modules)
              </label>
              <div className="flex flex-wrap gap-2">
                {CORE_SERVICES.map((s) => {
                  const active = selectedServices.includes(s.title);
                  return (
                    <button
                      type="button"
                      key={s.id}
                      onClick={() => toggleService(s.title)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all border ${
                        active
                          ? 'bg-[#0066FF] text-white border-[#00D4FF]'
                          : 'bg-slate-950 text-slate-300 border-slate-800 hover:border-slate-600'
                      }`}
                    >
                      {active ? '✓ ' : '+ '}
                      {s.title}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Client Info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-mono text-slate-300 block mb-1">Your Name *</label>
                <input
                  type="text"
                  required
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                  placeholder="e.g., Zafir Ahmed"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-sm text-white focus:outline-none focus:border-[#00D4FF]"
                />
              </div>
              <div>
                <label className="text-xs font-mono text-slate-300 block mb-1">
                  Mobile / WhatsApp Number *
                </label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="e.g., 017XX-XXXXXX"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-sm text-white font-mono focus:outline-none focus:border-[#00D4FF]"
                />
              </div>
            </div>

            {/* Land Details (District, Thana, Mouja, Plot) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div>
                <label className="text-xs font-mono text-slate-300 block mb-1">District</label>
                <input
                  type="text"
                  value={district}
                  onChange={(e) => setDistrict(e.target.value)}
                  placeholder="Narayanganj"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-sm text-white focus:outline-none focus:border-[#00D4FF]"
                />
              </div>
              <div>
                <label className="text-xs font-mono text-slate-300 block mb-1">Thana / Upazila</label>
                <input
                  type="text"
                  value={thana}
                  onChange={(e) => setThana(e.target.value)}
                  placeholder="Rupgonj"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-sm text-white focus:outline-none focus:border-[#00D4FF]"
                />
              </div>
              <div>
                <label className="text-xs font-mono text-slate-300 block mb-1">Mouja Name</label>
                <input
                  type="text"
                  value={mouja}
                  onChange={(e) => setMouja(e.target.value)}
                  placeholder="e.g., Parain"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-sm text-white focus:outline-none focus:border-[#00D4FF]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-mono text-slate-300 block mb-1">
                  CS / SA / RS / BS Plot Numbers
                </label>
                <input
                  type="text"
                  value={plotInfo}
                  onChange={(e) => setPlotInfo(e.target.value)}
                  placeholder="e.g., CS/SA 161, RS 308"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-sm text-white font-mono focus:outline-none focus:border-[#00D4FF]"
                />
              </div>
              <div>
                <label className="text-xs font-mono text-slate-300 block mb-1">
                  Additional Notes / Land Area (Decimals)
                </label>
                <input
                  type="text"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="e.g., Need demarcation & CS/RS overlap map"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-sm text-white focus:outline-none focus:border-[#00D4FF]"
                />
              </div>
            </div>

            <div className="pt-3 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="text-xs text-slate-400 font-mono">
                Hotline: <strong className="text-emerald-400">01754-246123</strong> /{' '}
                <strong className="text-white">01521-715896</strong>
              </div>
              <button
                type="submit"
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#0066FF] hover:bg-[#0052CC] text-white font-display font-bold text-sm shadow-glow-blue inline-flex items-center justify-center gap-2 transition-all"
              >
                <Send className="w-4 h-4" />
                <span>Confirm & Generate Dispatch</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

interface FullReportSheetModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const FullReportSheetModal: React.FC<FullReportSheetModalProps> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/85 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-5xl rounded-2xl bg-[#FAF9F5] text-slate-900 border-4 border-indigo-600 shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col">
        {/* Modal Action Bar */}
        <div className="px-5 py-3 bg-slate-900 text-white flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2 text-xs sm:text-sm font-mono">
            <Compass className="w-4 h-4 text-emerald-400" />
            <span>OFFICIAL SURVEY SHEET PREVIEW // MOUZA: PARAIN • RS PLOT: 308 (11/10/2026)</span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => window.print()}
              className="px-3 py-1.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs inline-flex items-center gap-1.5"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print Sheet</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Sheet Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          <div className="text-center font-serif font-bold text-lg">"786"</div>
          <div className="p-3 rounded-lg bg-[#6EE7B7] border-2 border-emerald-700 text-center">
            <h2 className="text-2xl sm:text-4xl font-serif font-extrabold text-emerald-950">
              EXPRESS digital land survey
            </h2>
            <p className="text-xs sm:text-sm font-bold text-slate-900 mt-1">
              Digital Survey • Map Preparation • Retrieval of Deeds/Mouza Maps • Pantograph • Demarcation • Overlap • Record Verification
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs sm:text-sm border-b-2 border-blue-800 pb-4">
            <div className="p-3 border border-slate-300 rounded bg-white">
              <div className="font-mono font-bold text-blue-900">Scale: 1" = 64 Feet</div>
              <div className="text-xs text-slate-600 mt-1">
                Diagonal Scale: 80-60-40-20 / 10-20-30-40-50
              </div>
            </div>
            <div className="p-3 border border-slate-300 rounded bg-white text-center font-bold">
              <div>Gmail: faysalahamed2000s@gmail.com</div>
              <div className="text-red-600 mt-1">Faysal: 01754-246123, 01521-715896</div>
            </div>
            <div className="p-3 border border-slate-300 rounded bg-white text-center">
              <div className="font-bold text-teal-800 underline">Surveyor</div>
              <div className="font-extrabold text-fuchsia-700">Faysal Ahamad Shanto</div>
              <div className="text-xs font-bold text-teal-900">
                Reg No- 1111210 • Cert No- 19570/22 • BS-AS- 898/26
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <span className="font-mono text-xs text-slate-500">Scale 1" = 64 Feet</span>
            <h3 className="text-xl font-serif font-extrabold underline">Land Survey Report</h3>
            <span className="font-serif font-bold">Date- 11/10/2026</span>
          </div>

          {/* Full Vector Sheet Diagram */}
          <div className="border-2 border-slate-300 rounded-xl bg-white p-4">
            <svg viewBox="0 0 650 380" className="w-full h-auto">
              {/* North Arrow */}
              <text x="35" y="45" fill="#DC2626" fontSize="22" fontFamily="serif" fontWeight="bold" textAnchor="middle">
                N
              </text>
              <polygon points="35,55 27,185 35,170 43,185" fill="#0F172A" />

              {/* Plot 310 */}
              <polygon points="240,85 335,65 345,125 248,132" fill="rgba(245, 158, 11, 0.12)" stroke="#D946EF" strokeWidth="1.8" />
              <line x1="288" y1="75" x2="295" y2="128" stroke="#D946EF" strokeWidth="1.4" />
              <text x="266" y="102" fill="#0F172A" fontSize="8" fontWeight="bold" textAnchor="middle">Shafiq Ullah</text>
              <text x="268" y="116" fill="#DC2626" fontSize="9" fontWeight="bold" textAnchor="middle">4.30 Dec</text>
              <text x="318" y="108" fill="#DC2626" fontSize="9" fontWeight="bold" textAnchor="middle">5.00 Dec</text>

              <polygon points="335,65 510,45 520,115 345,125" fill="none" stroke="#D946EF" strokeWidth="1.5" />
              <text x="415" y="88" fill="#D946EF" fontSize="16" fontWeight="bold">310</text>

              {/* Brick Road + BWDB Corridor */}
              <polygon points="90,155 535,115 538,132 92,172" fill="rgba(37, 99, 235, 0.15)" stroke="#2563EB" strokeWidth="1.8" />
              <text x="315" y="146" fill="#1D4ED8" fontSize="11" fontWeight="bold" textAnchor="middle" transform="rotate(-5, 315, 146)">
                Brick road for social movement
              </text>
              <polygon points="92,172 538,132 540,150 95,190" fill="rgba(239, 68, 68, 0.15)" stroke="#2563EB" strokeWidth="1.8" />
              <text x="318" y="164" fill="#DC2626" fontSize="10.5" fontWeight="bold" textAnchor="middle" transform="rotate(-5, 318, 164)">
                Land acquired by the Bangladesh Water Development Board (BWDB)
              </text>

              {/* Plots 305, 306, 307 */}
              <polygon points="105,192 180,182 185,222 112,235" fill="none" stroke="#D946EF" strokeWidth="1.4" />
              <text x="135" y="212" fill="#D946EF" fontSize="13" fontWeight="bold">305</text>
              <polygon points="180,182 260,172 265,210 185,222" fill="none" stroke="#D946EF" strokeWidth="1.4" />
              <text x="215" y="202" fill="#D946EF" fontSize="13" fontWeight="bold">306</text>
              <polygon points="112,235 265,210 278,340 145,360" fill="none" stroke="#D946EF" strokeWidth="1.4" />
              <text x="195" y="290" fill="#D946EF" fontSize="15" fontWeight="bold">307</text>

              {/* Target Plot 308 */}
              <polygon points="260,172 355,164 368,345 278,340" fill="rgba(217, 70, 239, 0.06)" stroke="#D946EF" strokeWidth="2" />
              <line x1="264" y1="212" x2="358" y2="205" stroke="#D946EF" strokeWidth="1.5" />
              <line x1="268" y1="250" x2="361" y2="244" stroke="#D946EF" strokeWidth="1.5" />
              <line x1="270" y1="270" x2="363" y2="264" stroke="#D946EF" strokeWidth="1.5" />
              <line x1="274" y1="310" x2="366" y2="306" stroke="#D946EF" strokeWidth="1.5" />

              <text x="310" y="186" fill="#0F172A" fontSize="7.5" fontWeight="bold" textAnchor="middle">Grantor: Md. Shamim & others | Zafir Ahmed</text>
              <text x="310" y="200" fill="#DC2626" fontSize="9.5" fontWeight="bold" textAnchor="middle">8.80 Decimal</text>
              <text x="312" y="226" fill="#1D4ED8" fontSize="12" fontWeight="bold" textAnchor="middle">308</text>
              <text x="312" y="240" fill="#DC2626" fontSize="9.5" fontWeight="bold" textAnchor="middle">6.00 Decimal (Jafir Ahmed)</text>
              <text x="315" y="261" fill="#DC2626" fontSize="8.5" fontWeight="bold" textAnchor="middle">2.34 Decimal</text>
              <text x="318" y="288" fill="#0F172A" fontSize="7.5" fontWeight="bold" textAnchor="middle">Grantor: Monoyara | Jafir Ahmed</text>
              <text x="318" y="300" fill="#DC2626" fontSize="9" fontWeight="bold" textAnchor="middle">(2.54+4.66)= 7.20 Decimal</text>
              <text x="320" y="328" fill="#0F172A" fontSize="8.5" fontWeight="bold" textAnchor="middle">Mokbul and Others</text>

              {/* Plots 311, 312, 316, 317, 318 */}
              <polygon points="355,164 525,150 528,195 358,205" fill="none" stroke="#D946EF" strokeWidth="1.4" />
              <text x="430" y="182" fill="#D946EF" fontSize="14" fontWeight="bold">311</text>
              <polygon points="358,205 528,195 532,265 363,264" fill="none" stroke="#D946EF" strokeWidth="1.4" />
              <text x="435" y="238" fill="#D946EF" fontSize="15" fontWeight="bold">312</text>
              <polygon points="465,264 532,265 540,365 468,365" fill="none" stroke="#D946EF" strokeWidth="1.4" />
              <text x="492" y="325" fill="#D946EF" fontSize="15" fontWeight="bold">316</text>
              <polygon points="415,264 465,264 468,365 415,365" fill="none" stroke="#D946EF" strokeWidth="1.4" />
              <text x="430" y="330" fill="#D946EF" fontSize="14" fontWeight="bold">317</text>
              <polygon points="363,264 415,264 415,365 368,365" fill="none" stroke="#D946EF" strokeWidth="1.4" />
              <text x="378" y="332" fill="#D946EF" fontSize="14" fontWeight="bold">318</text>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};
