import React from 'react';
import {
  Award,
  CheckCircle2,
  Mail,
  Phone,
  ShieldCheck,
  UserCheck,
  MessageSquare,
  CalendarCheck,
} from 'lucide-react';
import { COMPANY_INFO } from '../data/surveyData';

interface SurveyorsAndCredentialsSectionProps {
  onOpenBookingModal: (defaultService?: string) => void;
}

export const SurveyorsAndCredentialsSection: React.FC<SurveyorsAndCredentialsSectionProps> = ({
  onOpenBookingModal,
}) => {
  return (
    <section id="surveyors" className="py-24 bg-[#0A1120] border-b border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0066FF]/15 border border-[#0066FF]/40 text-xs font-mono text-[#00D4FF] mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>CERTIFIED LEADERSHIP & GOVERNMENT REGISTRATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight">
            Signed & Certified by Registered Land Surveyors
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mt-3">
            Every field measurement, CAD map, and demarcation report from{' '}
            <strong className="text-white">EXPRESS Digital Land Survey</strong> is personally executed and certified by our registered surveyors.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {COMPANY_INFO.surveyors.map((surveyor) => (
            <div
              key={surveyor.id}
              className="rounded-3xl bg-gradient-to-br from-slate-900 via-[#0D1628] to-slate-950 border border-slate-800 hover:border-[#0066FF]/60 p-7 sm:p-9 shadow-2xl transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 inline-flex items-center gap-1.5">
                    <Award className="w-3.5 h-3.5" />
                    {surveyor.badge}
                  </span>
                  <span className="text-xs font-mono text-slate-400">
                    Reg No: <strong className="text-white">{surveyor.regNo}</strong>
                  </span>
                </div>

                <div className="flex items-start gap-4 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#0066FF] to-emerald-500 flex items-center justify-center text-white font-display font-extrabold text-2xl shrink-0 shadow-glow-blue">
                    {surveyor.name
                      .split(' ')
                      .slice(0, 2)
                      .map((n) => n[0])
                      .join('')}
                  </div>
                  <div>
                    <div className="text-xs font-mono uppercase tracking-wider text-[#00D4FF] font-semibold">
                      {surveyor.role}
                    </div>
                    <h3 className="text-2xl font-display font-extrabold text-white mt-0.5">
                      {surveyor.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 mt-1.5 leading-relaxed">
                      {surveyor.specialization}
                    </p>
                  </div>
                </div>

                {/* Official Credentials Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
                  <div className="p-3.5 rounded-xl bg-slate-950/90 border border-slate-800">
                    <div className="text-[10px] font-mono text-slate-400 uppercase">
                      Registration No
                    </div>
                    <div className="text-base font-mono font-extrabold text-emerald-400 mt-0.5">
                      {surveyor.regNo}
                    </div>
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-950/90 border border-slate-800">
                    <div className="text-[10px] font-mono text-slate-400 uppercase">
                      Certificate No
                    </div>
                    <div className="text-base font-mono font-extrabold text-white mt-0.5">
                      {surveyor.certificateNo}
                    </div>
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-950/90 border border-slate-800">
                    <div className="text-[10px] font-mono text-slate-400 uppercase">
                      BS-AS Member
                    </div>
                    <div className="text-base font-mono font-extrabold text-[#00D4FF] mt-0.5">
                      {surveyor.bsAsMemberNo}
                    </div>
                  </div>
                </div>
              </div>

              {/* Direct Contact Actions */}
              <div className="pt-5 border-t border-slate-800/90 space-y-3">
                <div className="flex flex-wrap items-center gap-3">
                  {surveyor.phones.map((phone) => (
                    <a
                      key={phone}
                      href={`tel:${phone.replace('-', '')}`}
                      className="px-4 py-2.5 rounded-xl bg-slate-950 hover:bg-slate-800 border border-slate-700 text-xs sm:text-sm font-mono font-bold text-white inline-flex items-center gap-2 transition-colors"
                    >
                      <Phone className="w-4 h-4 text-emerald-400" />
                      <span>{phone}</span>
                    </a>
                  ))}

                  {surveyor.whatsapp && (
                    <a
                      href={`https://wa.me/${COMPANY_INFO.whatsappNumber}`}
                      target="_blank"
                      rel="noreferrer"
                      className="px-4 py-2.5 rounded-xl bg-emerald-500/20 hover:bg-emerald-500/30 border border-emerald-500/40 text-xs sm:text-sm font-bold text-emerald-300 inline-flex items-center gap-2 transition-colors"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>WhatsApp Direct</span>
                    </a>
                  )}
                </div>

                <div className="flex items-center justify-between text-xs text-slate-400 pt-1">
                  <a
                    href={`mailto:${surveyor.email}`}
                    className="inline-flex items-center gap-1.5 hover:text-white transition-colors font-mono"
                  >
                    <Mail className="w-3.5 h-3.5 text-[#00D4FF]" />
                    <span>{surveyor.email}</span>
                  </a>
                  <button
                    onClick={() => onOpenBookingModal()}
                    className="text-[#00D4FF] hover:underline font-semibold inline-flex items-center gap-1"
                  >
                    <CalendarCheck className="w-3.5 h-3.5" />
                    <span>Book Field Visit</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
