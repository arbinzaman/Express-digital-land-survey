import React from 'react';
import {
  Compass,
  Phone,
  Mail,
  ShieldCheck,
  ArrowUpRight,
  MapPin,
} from 'lucide-react';
import { COMPANY_INFO, CORE_SERVICES } from '../data/surveyData';

interface FooterProps {
  onSelectService: (serviceId: string) => void;
  onOpenBookingModal: (defaultService?: string) => void;
  onOpenReportModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onSelectService,
  onOpenBookingModal,
  onOpenReportModal,
}) => {
  return (
    <footer className="bg-[#050912] text-slate-400 border-t border-slate-800/90">
      {/* Pre-Footer Propeller-Style High-Impact CTA Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="rounded-3xl bg-gradient-to-r from-[#0066FF] via-[#0052CC] to-emerald-600 p-8 sm:p-12 text-white shadow-2xl relative overflow-hidden">
          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="max-w-2xl">
              <span className="inline-block px-3 py-1 rounded-full bg-white/15 text-xs font-mono uppercase tracking-wider font-semibold mb-3">
                {COMPANY_INFO.bismillahCode} • READY FOR FIELD DEPLOYMENT
              </span>
              <h2 className="text-2xl sm:text-4xl font-display font-extrabold tracking-tight">
                Protect Your Land Investment with Certified Digital Surveying.
              </h2>
              <p className="text-blue-100 text-sm sm:text-base mt-2.5 leading-relaxed">
                Get millimeter-accurate Total Station surveying, 1" = 64 Feet CAD maps, CS/SA/RS/BS Mouza retrieval, and on-site boundary demarcation from Government Registered Surveyors.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3.5 shrink-0">
              <button
                onClick={() => onOpenBookingModal()}
                className="px-6 py-4 rounded-xl bg-white text-slate-950 hover:bg-slate-100 font-display font-extrabold text-sm shadow-xl transition-all inline-flex items-center justify-center gap-2"
              >
                <span>Book Field Survey Now</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
              <a
                href="tel:01754246123"
                className="px-6 py-4 rounded-xl bg-slate-950/40 hover:bg-slate-950/60 border border-white/30 text-white font-mono font-bold text-sm transition-all inline-flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-emerald-300" />
                <span>Call 01754-246123</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Columns */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-slate-800/80">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Col 1: Brand & Official Credentials (4 Cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/15 border border-emerald-500/40 flex items-center justify-center">
                <Compass className="w-5 h-5 text-emerald-400" />
              </div>
              <div>
                <div className="font-display font-extrabold text-lg text-white">
                  EXPRESS <span className="text-emerald-400">Digital Land Survey</span>
                </div>
                <div className="text-xs font-mono text-slate-400">
                  Scale Standard: 1" = 64 Feet
                </div>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Delivering Propeller-grade geospatial mapping, Total Station digital surveying, multi-era CS/RS overlap conformance, and certified land record verification across Narayanganj, Rupgonj, Dhaka, and all 64 districts of Bangladesh.
            </p>

            <div className="pt-2 space-y-1.5 text-xs font-mono text-slate-300">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Reg No: 1111210 • Certificate No: 19570/22</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#00D4FF]" />
                <span>BS-AS Member No: 898/26 • Senior Reg: 30827</span>
              </div>
            </div>
          </div>

          {/* Col 2: The 7 Core Services (3 Cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-white font-bold">
              7 Core Surveying Services
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              {CORE_SERVICES.map((service) => (
                <li key={service.id}>
                  <button
                    onClick={() => {
                      onSelectService(service.id);
                      const el = document.getElementById('services-suite');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="hover:text-[#00D4FF] transition-colors text-left"
                  >
                    {service.number}. {service.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Interactive Platform Tools (2 Cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-white font-bold">
              Platform Modules
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a href="#cad-platform" className="hover:text-white transition-colors">
                  3D / CAD Plot Viewer
                </a>
              </li>
              <li>
                <a href="#overlap-engine" className="hover:text-white transition-colors">
                  CS vs RS Overlap Slider
                </a>
              </li>
              <li>
                <a href="#pantograph-tool" className="hover:text-white transition-colors">
                  Digital Pantograph
                </a>
              </li>
              <li>
                <a href="#pantograph-tool" className="hover:text-white transition-colors">
                  Decimal & Katha Solver
                </a>
              </li>
              <li>
                <button
                  onClick={onOpenReportModal}
                  className="hover:text-emerald-400 transition-colors text-left"
                >
                  Plot 308 Sample Report
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Direct Surveyor Contact (3 Cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-white font-bold">
              Direct Surveyor Desk
            </h4>
            <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-2.5 text-xs">
              <div className="font-bold text-white">Faysal Ahamad Shanto</div>
              <div className="text-emerald-400 font-mono">
                01754-246123 / 01521-715896
              </div>
              <div className="font-bold text-white pt-1">Mawlana MD Edris Ali</div>
              <div className="text-cyan-300 font-mono">
                01913-553545 / 01580-594467
              </div>
              <div className="pt-1 border-t border-slate-800 flex items-center gap-1.5 text-slate-300 truncate">
                <Mail className="w-3.5 h-3.5 text-rose-400 shrink-0" />
                <span>{COMPANY_INFO.email}</span>
              </div>
              <div className="flex items-center gap-1.5 text-slate-400">
                <MapPin className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Rupgonj, Narayanganj & Nationwide</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="mt-10 pt-6 border-t border-slate-800/70 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} EXPRESS Digital Land Survey. All rights reserved.
          </div>
          <div className="font-mono">
            Certified Cadastral & GIS Platform • Scale 1" = 64 Feet
          </div>
        </div>
      </div>
    </footer>
  );
};
