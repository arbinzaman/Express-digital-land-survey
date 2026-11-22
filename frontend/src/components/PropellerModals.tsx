import React, { useState, useEffect } from 'react';
import { COMPANY_INFO, CORE_SERVICES, REPORT_PARCELS } from '../data/surveyData';

interface ServiceDetailModalProps {
  serviceKey: string | null;
  onClose: () => void;
  onBookService: (serviceTitle: string) => void;
  onOpenReport: () => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  serviceKey,
  onClose,
  onBookService,
  onOpenReport,
}) => {
  if (!serviceKey) return null;
  const service = CORE_SERVICES.find((s) => s.id === serviceKey) || CORE_SERVICES[0];

  return (
    <div className="edls-modal-backdrop" onClick={onClose}>
      <div
        className="edls-modal-card"
        style={{ maxWidth: '860px', padding: '40px' }}
        onClick={(e) => e.stopPropagation()}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px' }}>
          <div>
            <span
              style={{
                display: 'inline-block',
                background: '#ffdd00',
                color: '#08111D',
                fontWeight: 700,
                fontSize: '12px',
                padding: '5px 14px',
                borderRadius: '20px',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                marginBottom: '12px',
              }}
            >
              Service {service.number} • {service.badge}
            </span>
            <h2
              style={{
                fontFamily: 'Montserrat, sans-serif',
                fontSize: '36px',
                lineHeight: '44px',
                fontWeight: 600,
                color: '#08111D',
                margin: 0,
              }}
            >
              {service.title}
            </h2>
          </div>
          <button
            onClick={onClose}
            style={{
              background: '#F5F5F5',
              border: 'none',
              borderRadius: '50%',
              width: '40px',
              height: '40px',
              fontSize: '20px',
              cursor: 'pointer',
              color: '#08111D',
              fontWeight: 700,
            }}
          >
            ×
          </button>
        </div>

        <p style={{ fontSize: '19px', lineHeight: '28px', color: '#08111D', fontWeight: 500, marginBottom: '20px' }}>
          {service.tagline}
        </p>
        <p style={{ fontSize: '16px', lineHeight: '24px', color: 'rgba(8,17,29,0.8)', marginBottom: '28px' }}>
          {service.description}
        </p>

        {/* Service Metrics */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: '16px',
            marginBottom: '28px',
          }}
        >
          {service.metrics.map((m, i) => (
            <div
              key={i}
              style={{
                background: '#F8F8F9',
                padding: '18px 20px',
                borderRadius: '14px',
                border: '1px solid #EAEAEA',
              }}
            >
              <div style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '26px', fontWeight: 700, color: '#08111D' }}>
                {m.value}
              </div>
              <div style={{ fontSize: '13px', color: 'rgba(8,17,29,0.7)', marginTop: '4px' }}>{m.label}</div>
            </div>
          ))}
        </div>

        {/* Deliverables */}
        <div style={{ background: '#F8F8F9', padding: '24px', borderRadius: '16px', marginBottom: '28px' }}>
          <h4
            style={{
              fontFamily: 'Montserrat, sans-serif',
              fontSize: '16px',
              fontWeight: 600,
              margin: '0 0 14px',
              color: '#08111D',
              textTransform: 'uppercase',
            }}
          >
            Certified Deliverables
          </h4>
          <ul style={{ margin: 0, paddingLeft: '20px', lineHeight: '26px', fontSize: '15px', color: '#08111D' }}>
            {service.deliverables.map((d, idx) => (
              <li key={idx}>{d}</li>
            ))}
          </ul>
        </div>

        {/* Quick Switch Between All 7 Services */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <button
              onClick={() => onBookService(service.title)}
              style={{
                background: '#ffdd00',
                color: '#08111D',
                border: 'none',
                borderRadius: '24px',
                padding: '14px 28px',
                fontFamily: 'Nunito Sans, sans-serif',
                fontSize: '15px',
                fontWeight: 700,
                letterSpacing: '0.05em',
                cursor: 'pointer',
              }}
            >
              BOOK {service.title.toUpperCase()}
            </button>
            <button
              onClick={onOpenReport}
              style={{
                background: '#08111D',
                color: '#ffffff',
                border: 'none',
                borderRadius: '24px',
                padding: '14px 28px',
                fontFamily: 'Nunito Sans, sans-serif',
                fontSize: '15px',
                fontWeight: 700,
                letterSpacing: '0.05em',
                cursor: 'pointer',
              }}
            >
              VIEW SAMPLE CAD REPORT
            </button>
          </div>
          <span style={{ fontSize: '13px', color: 'rgba(8,17,29,0.65)' }}>
            Hotline: <strong>01754-246123</strong>
          </span>
        </div>
      </div>
    </div>
  );
};

interface DemoBookingModalProps {
  isOpen: boolean;
  defaultService?: string;
  onClose: () => void;
}

export const DemoBookingModal: React.FC<DemoBookingModalProps> = ({
  isOpen,
  defaultService,
  onClose,
}) => {
  const [selectedService, setSelectedService] = useState(defaultService || 'Digital Survey');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [district, setDistrict] = useState('Narayanganj');
  const [thana, setThana] = useState('Rupgonj');
  const [mouja, setMouja] = useState('Parain');
  const [plotNo, setPlotNo] = useState('CS 161 / RS 308');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (defaultService) setSelectedService(defaultService);
    setSubmitted(false);
  }, [defaultService, isOpen]);

  if (!isOpen) return null;

  const whatsappUrl = `https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(
    `Assalamu Alaikum Express Digital Land Survey ("786"),\nI want to request a survey/demo:\n• Service: ${selectedService}\n• Name: ${name}\n• Phone: ${phone}\n• Location: Mouja ${mouja}, Thana ${thana}, District ${district}\n• Plot No: ${plotNo}`
  )}`;

  return (
    <div className="edls-modal-backdrop" onClick={onClose}>
      <div
        className="edls-modal-card"
        style={{ maxWidth: '680px', padding: '40px' }}
        onClick={(e) => e.stopPropagation()}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
          <div>
            <span
              style={{
                display: 'inline-block',
                background: '#ffdd00',
                color: '#08111D',
                fontWeight: 700,
                fontSize: '12px',
                padding: '4px 12px',
                borderRadius: '16px',
                textTransform: 'uppercase',
                marginBottom: '8px',
              }}
            >
              &quot;786&quot; • EXPRESS DIGITAL LAND SURVEY
            </span>
            <h2
              style={{
                fontFamily: 'Montserrat, sans-serif',
                fontSize: '32px',
                lineHeight: '40px',
                fontWeight: 600,
                color: '#08111D',
                margin: 0,
              }}
            >
              Request a Survey or Platform Demo
            </h2>
          </div>
          <button
            onClick={onClose}
            style={{
              background: '#F5F5F5',
              border: 'none',
              borderRadius: '50%',
              width: '40px',
              height: '40px',
              fontSize: '20px',
              cursor: 'pointer',
              color: '#08111D',
              fontWeight: 700,
            }}
          >
            ×
          </button>
        </div>

        {submitted ? (
          <div style={{ textAlign: 'center', padding: '20px 0' }}>
            <h3 style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '26px', color: '#08111D', marginBottom: '12px' }}>
              Your Survey Request is Ready!
            </h3>
            <p style={{ fontSize: '16px', color: 'rgba(8,17,29,0.75)', marginBottom: '24px' }}>
              Connect directly with <strong>Surveyor Faysal Ahamad Shanto (Reg No- 1111210)</strong> via WhatsApp or Phone:
            </p>
            <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                style={{
                  background: '#ffdd00',
                  color: '#08111D',
                  textDecoration: 'none',
                  padding: '15px 30px',
                  borderRadius: '24px',
                  fontWeight: 700,
                  fontSize: '15px',
                }}
              >
                SEND VIA WHATSAPP (01754-246123)
              </a>
              <a
                href="tel:01754246123"
                style={{
                  background: '#08111D',
                  color: '#ffffff',
                  textDecoration: 'none',
                  padding: '15px 30px',
                  borderRadius: '24px',
                  fontWeight: 700,
                  fontSize: '15px',
                }}
              >
                CALL 01754-246123
              </a>
            </div>
          </div>
        ) : (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitted(true);
            }}
            style={{ display: 'grid', gap: '16px' }}
          >
            <div>
              <label style={{ display: 'block', fontSize: '13px', fontWeight: 700, marginBottom: '6px' }}>
                Select Service (7 Core Services)
              </label>
              <select
                value={selectedService}
                onChange={(e) => setSelectedService(e.target.value)}
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  borderRadius: '12px',
                  border: '1px solid #DBDCDC',
                  fontSize: '15px',
                  fontFamily: 'Nunito Sans, sans-serif',
                }}
              >
                {CORE_SERVICES.map((s) => (
                  <option key={s.id} value={s.title}>
                    {s.number}. {s.title} — {s.accuracySpec}
                  </option>
                ))}
              </select>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '13px', fontWeight: 700, marginBottom: '6px' }}>
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g., Zafir Ahmed"
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    borderRadius: '12px',
                    border: '1px solid #DBDCDC',
                    fontSize: '15px',
                  }}
                />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '13px', fontWeight: 700, marginBottom: '6px' }}>
                  Phone / WhatsApp *
                </label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="017XX-XXXXXX"
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    borderRadius: '12px',
                    border: '1px solid #DBDCDC',
                    fontSize: '15px',
                  }}
                />
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '12px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '13px', fontWeight: 700, marginBottom: '6px' }}>
                  District
                </label>
                <input
                  type="text"
                  value={district}
                  onChange={(e) => setDistrict(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '12px 14px',
                    borderRadius: '12px',
                    border: '1px solid #DBDCDC',
                    fontSize: '15px',
                  }}
                />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '13px', fontWeight: 700, marginBottom: '6px' }}>
                  Thana
                </label>
                <input
                  type="text"
                  value={thana}
                  onChange={(e) => setThana(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '12px 14px',
                    borderRadius: '12px',
                    border: '1px solid #DBDCDC',
                    fontSize: '15px',
                  }}
                />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '13px', fontWeight: 700, marginBottom: '6px' }}>
                  Mouja
                </label>
                <input
                  type="text"
                  value={mouja}
                  onChange={(e) => setMouja(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '12px 14px',
                    borderRadius: '12px',
                    border: '1px solid #DBDCDC',
                    fontSize: '15px',
                  }}
                />
              </div>
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '13px', fontWeight: 700, marginBottom: '6px' }}>
                Plot No (CS / SA / RS / BS)
              </label>
              <input
                type="text"
                value={plotNo}
                onChange={(e) => setPlotNo(e.target.value)}
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  borderRadius: '12px',
                  border: '1px solid #DBDCDC',
                  fontSize: '15px',
                }}
              />
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '10px' }}>
              <div style={{ fontSize: '13px', color: 'rgba(8,17,29,0.75)' }}>
                Direct: <strong>01754-246123</strong> / <strong>01521-715896</strong>
              </div>
              <button
                type="submit"
                style={{
                  background: '#ffdd00',
                  color: '#08111D',
                  border: 'none',
                  borderRadius: '24px',
                  padding: '15px 32px',
                  fontFamily: 'Nunito Sans, sans-serif',
                  fontSize: '15px',
                  fontWeight: 700,
                  letterSpacing: '0.05em',
                  cursor: 'pointer',
                }}
              >
                SUBMIT REQUEST
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

interface OfficialSurveyReportModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const OfficialSurveyReportModal: React.FC<OfficialSurveyReportModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [selectedParcelId, setSelectedParcelId] = useState<string>('plot-308-a');
  const [showCsLine, setShowCsLine] = useState(true);
  const [showRsLine, setShowRsLine] = useState(true);
  const [showRoadLine, setShowRoadLine] = useState(true);

  if (!isOpen) return null;

  const activeParcel = REPORT_PARCELS.find((p) => p.id === selectedParcelId) || REPORT_PARCELS[0];

  return (
    <div className="edls-modal-backdrop" onClick={onClose}>
      <div
        className="edls-modal-card"
        style={{
          maxWidth: '1120px',
          padding: '28px 34px',
          border: '4px solid #4F46E5',
          background: '#FAF9F5',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Close & Print Bar */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '12px',
            paddingBottom: '10px',
            borderBottom: '1px solid #CBD5E1',
          }}
        >
          <div style={{ fontSize: '13px', fontWeight: 700, color: '#08111D' }}>
            OFFICIAL DIGITAL LAND SURVEY REPORT SHEET • INTERACTIVE CAD REPLICA
          </div>
          <div style={{ display: 'flex', gap: '10px' }}>
            <button
              onClick={() => window.print()}
              style={{
                background: '#ffdd00',
                color: '#08111D',
                border: 'none',
                borderRadius: '18px',
                padding: '7px 18px',
                fontWeight: 700,
                fontSize: '13px',
                cursor: 'pointer',
              }}
            >
              Print Report Sheet
            </button>
            <button
              onClick={onClose}
              style={{
                background: '#08111D',
                color: '#fff',
                border: 'none',
                borderRadius: '18px',
                padding: '7px 16px',
                fontWeight: 700,
                fontSize: '13px',
                cursor: 'pointer',
              }}
            >
              Close ×
            </button>
          </div>
        </div>

        {/* Exact Header from the Provided PDF */}
        <div style={{ textAlign: 'center', fontFamily: 'Georgia, serif', fontWeight: 700, fontSize: '18px', marginBottom: '6px' }}>
          &quot;786&quot;
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '200px 1fr 240px',
            gap: '16px',
            alignItems: 'center',
            borderBottom: '3px double #1E3A8A',
            paddingBottom: '14px',
          }}
        >
          {/* Left: Total Station & Scale 1" = 64 Feet */}
          <div style={{ textAlign: 'center', background: '#fff', padding: '10px', borderRadius: '10px', border: '1px solid #CBD5E1' }}>
            <div style={{ fontSize: '11px', fontWeight: 700, color: '#B45309' }}>TOTAL STATION SCALE</div>
            <div style={{ fontSize: '10px', fontFamily: 'monospace', margin: '4px 0', color: '#334155' }}>
              80•60•40•20 | 10•20•30•40•50
            </div>
            <div
              style={{
                display: 'inline-block',
                background: '#DBEAFE',
                border: '1.5px solid #1D4ED8',
                color: '#1E3A8A',
                fontWeight: 800,
                fontSize: '14px',
                padding: '3px 12px',
              }}
            >
              1&quot; = 64 Feet
            </div>
          </div>

          {/* Center: Green Banner + 7 Services Below Name + Contact */}
          <div style={{ textAlign: 'center' }}>
            <div
              style={{
                background: '#6EE7B7',
                border: '2px solid #047857',
                padding: '8px 16px',
                marginBottom: '8px',
              }}
            >
              <div
                style={{
                  fontFamily: 'Georgia, serif',
                  fontSize: '28px',
                  fontWeight: 700,
                  color: '#065F46',
                  letterSpacing: '0.02em',
                }}
              >
                EXPRESS digital land survey
              </div>
            </div>
            <div style={{ fontSize: '13px', fontWeight: 700, color: '#08111D', lineHeight: '20px' }}>
              Digital Survey &nbsp; • Map Preparation &nbsp; • Retrieval of Deeds/Mouza Maps
              <br />
              • Pantograph &nbsp; • Demarcation &nbsp; • Overlap &nbsp; • Record Verification
            </div>
            <div style={{ marginTop: '8px', fontSize: '13px', fontWeight: 700 }}>
              <div>Gmail- faysalahamed2000s@gmail.com</div>
              <div style={{ color: '#DC2626', fontSize: '14px', marginTop: '2px' }}>
                Faysal – 01754-246123, 01521-715896
              </div>
            </div>
          </div>

          {/* Right: Surveyor Credentials */}
          <div style={{ textAlign: 'center', background: '#fff', padding: '10px', borderRadius: '10px', border: '1px solid #CBD5E1' }}>
            <div style={{ fontSize: '16px', fontWeight: 800, color: '#0F766E', textDecoration: 'underline' }}>
              Surveyor
            </div>
            <div style={{ fontSize: '15px', fontWeight: 800, color: '#A21CAF', marginTop: '2px' }}>
              Faysal Ahamad Shanto
            </div>
            <div style={{ fontSize: '12px', fontWeight: 700, color: '#0F766E', lineHeight: '18px', marginTop: '4px' }}>
              Reg No- 1111210
              <br />
              Certificate No- 19570/22
              <br />
              BS-AS Member No - 898/26
            </div>
          </div>
        </div>

        {/* Report Title & Layer Toggles */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '10px 0',
            flexWrap: 'wrap',
            gap: '10px',
          }}
        >
          <div style={{ display: 'flex', gap: '12px', fontSize: '12px', fontWeight: 700 }}>
            <label style={{ cursor: 'pointer', color: '#15803D' }}>
              <input type="checkbox" checked={showCsLine} onChange={(e) => setShowCsLine(e.target.checked)} /> CS Line
            </label>
            <label style={{ cursor: 'pointer', color: '#A21CAF' }}>
              <input type="checkbox" checked={showRsLine} onChange={(e) => setShowRsLine(e.target.checked)} /> RS Line
            </label>
            <label style={{ cursor: 'pointer', color: '#1D4ED8' }}>
              <input type="checkbox" checked={showRoadLine} onChange={(e) => setShowRoadLine(e.target.checked)} /> Aqueduct/Road Line
            </label>
          </div>
          <h3
            style={{
              fontFamily: 'Georgia, serif',
              fontSize: '22px',
              fontWeight: 700,
              textDecoration: 'underline',
              margin: 0,
              color: '#08111D',
            }}
          >
            Land Survey Report
          </h3>
          <div style={{ fontFamily: 'Georgia, serif', fontSize: '17px', fontWeight: 700, color: '#08111D' }}>
            Date- 11/10/2026
          </div>
        </div>

        {/* Interactive CAD Map + Land Details + Design Overview + Signatures */}
        <div style={{ display: 'grid', gridTemplateColumns: '260px 1fr', gap: '18px', alignItems: 'start' }}>
          {/* Left Column: Land Details & Design Overview Boxes */}
          <div style={{ display: 'grid', gap: '14px' }}>
            <div style={{ border: '2px solid #08111D', background: '#fff' }}>
              <div
                style={{
                  borderBottom: '2px solid #08111D',
                  padding: '6px',
                  textAlign: 'center',
                  fontFamily: 'Georgia, serif',
                  fontWeight: 700,
                  fontSize: '15px',
                }}
              >
                Land Details
              </div>
              <div style={{ fontSize: '13px', fontFamily: 'Georgia, serif' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '5px 10px', borderBottom: '1px solid #08111D' }}>
                  <span>District</span>
                  <strong>Narayanganj</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '5px 10px', borderBottom: '1px solid #08111D' }}>
                  <span>Thana</span>
                  <strong>Rupgonj</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '5px 10px', borderBottom: '1px solid #08111D' }}>
                  <span>Mouja</span>
                  <strong style={{ color: '#DC2626' }}>Parain</strong>
                </div>
                <div style={{ textAlign: 'center', padding: '4px', fontWeight: 700, borderBottom: '1px solid #08111D' }}>
                  Plot No -
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '5px 10px', borderBottom: '1px solid #08111D' }}>
                  <span>CS/SA</span>
                  <strong style={{ color: '#15803D' }}>161</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '5px 10px' }}>
                  <span>RS</span>
                  <strong style={{ color: '#A21CAF' }}>308</strong>
                </div>
              </div>
            </div>

            <div style={{ border: '2px solid #08111D', background: '#fff' }}>
              <div
                style={{
                  borderBottom: '2px solid #08111D',
                  padding: '6px',
                  textAlign: 'center',
                  fontFamily: 'Georgia, serif',
                  fontWeight: 700,
                  fontSize: '15px',
                }}
              >
                Design Overview
              </div>
              <div style={{ fontSize: '13px', fontFamily: 'Georgia, serif' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px 10px', borderBottom: '1px solid #08111D' }}>
                  <strong style={{ color: '#15803D' }}>CS Line</strong>
                  <span style={{ width: '70px', height: '8px', background: '#16A34A', display: 'inline-block' }} />
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px 10px', borderBottom: '1px solid #08111D' }}>
                  <strong style={{ color: '#A21CAF' }}>RS Line</strong>
                  <span style={{ width: '70px', height: '8px', background: '#D946EF', display: 'inline-block' }} />
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px 10px' }}>
                  <strong style={{ color: '#1E40AF' }}>Aqueduct/Road Line</strong>
                  <span style={{ width: '70px', height: '8px', background: '#2563EB', display: 'inline-block' }} />
                </div>
              </div>
            </div>

            {/* Active Clicked Parcel Details */}
            <div style={{ background: '#fff', border: '1.5px solid #CBD5E1', borderRadius: '10px', padding: '12px', fontSize: '12px' }}>
              <div style={{ fontWeight: 800, color: '#08111D', marginBottom: '4px' }}>{activeParcel.title}</div>
              <div>Grantor: <strong>{activeParcel.grantor}</strong></div>
              <div>Recipient: <strong>{activeParcel.recipient}</strong></div>
              <div style={{ marginTop: '4px', color: '#DC2626', fontWeight: 700 }}>
                N: {activeParcel.dimensions.north} | S: {activeParcel.dimensions.south} | E: {activeParcel.dimensions.east} | W: {activeParcel.dimensions.west}
              </div>
            </div>
          </div>

          {/* Right Column: Interactive SVG CAD Drawing + Dual Signatures */}
          <div>
            <div style={{ background: '#fff', border: '1px solid #CBD5E1', borderRadius: '12px', padding: '10px' }}>
              <svg viewBox="0 0 650 370" style={{ width: '100%', height: 'auto', userSelect: 'none' }}>
                {/* North Arrow */}
                <text x="30" y="40" fill="#DC2626" fontSize="22" fontFamily="serif" fontWeight="bold" textAnchor="middle">
                  N
                </text>
                <polygon points="30,50 22,190 30,175 38,190" fill="#08111D" />

                {/* CS Line Envelope */}
                {showCsLine && (
                  <polygon
                    points="85,145 535,40 545,355 135,350"
                    fill="none"
                    stroke="#16A34A"
                    strokeWidth="2.2"
                    strokeDasharray="8 4"
                  />
                )}

                {/* RS Plots */}
                {showRsLine && (
                  <g>
                    {/* Plot 310 Sold Sub-Parcels */}
                    <g onClick={() => setSelectedParcelId('plot-310-sub')} style={{ cursor: 'pointer' }}>
                      <polygon
                        points="240,80 335,60 345,122 248,128"
                        fill={selectedParcelId === 'plot-310-sub' ? 'rgba(255, 221, 0, 0.35)' : 'rgba(245, 158, 11, 0.12)'}
                        stroke="#D946EF"
                        strokeWidth="1.8"
                      />
                      <line x1="288" y1="70" x2="295" y2="125" stroke="#D946EF" strokeWidth="1.4" />
                      <text x="266" y="96" fill="#08111D" fontSize="8" fontWeight="bold" textAnchor="middle">Shafiq Ullah</text>
                      <text x="268" y="112" fill="#DC2626" fontSize="9.5" fontWeight="bold" textAnchor="middle">4.30 Dec</text>
                      <text x="318" y="105" fill="#DC2626" fontSize="9.5" fontWeight="bold" textAnchor="middle">5.00 Dec</text>
                    </g>

                    <polygon points="335,60 510,40 520,112 345,122" fill="none" stroke="#D946EF" strokeWidth="1.5" />
                    <text x="415" y="84" fill="#D946EF" fontSize="16" fontWeight="bold">310</text>

                    {/* Plots 305, 306, 307 */}
                    <polygon points="105,190 180,180 185,220 112,232" fill="none" stroke="#D946EF" strokeWidth="1.4" />
                    <text x="135" y="210" fill="#D946EF" fontSize="13" fontWeight="bold">305</text>
                    <polygon points="180,180 260,170 265,208 185,220" fill="none" stroke="#D946EF" strokeWidth="1.4" />
                    <text x="215" y="200" fill="#D946EF" fontSize="13" fontWeight="bold">306</text>
                    <polygon points="112,232 265,208 278,338 145,355" fill="none" stroke="#D946EF" strokeWidth="1.4" />
                    <text x="195" y="288" fill="#D946EF" fontSize="15" fontWeight="bold">307</text>

                    {/* Target Plot 308 (Clickable Sub-Parcels) */}
                    <g onClick={() => setSelectedParcelId('plot-308-a')} style={{ cursor: 'pointer' }}>
                      <polygon
                        points="260,170 355,162 358,205 264,212"
                        fill={selectedParcelId === 'plot-308-a' ? 'rgba(255, 221, 0, 0.45)' : 'rgba(217, 70, 239, 0.08)'}
                        stroke="#D946EF"
                        strokeWidth="1.8"
                      />
                      <text x="310" y="183" fill="#08111D" fontSize="7.5" fontWeight="bold" textAnchor="middle">Grantor: Md. Shamim | Zafir Ahmed</text>
                      <text x="310" y="198" fill="#DC2626" fontSize="9.5" fontWeight="bold" textAnchor="middle">8.80 Decimal</text>
                    </g>

                    <g onClick={() => setSelectedParcelId('plot-308-b')} style={{ cursor: 'pointer' }}>
                      <polygon
                        points="264,212 358,205 361,244 268,250"
                        fill={selectedParcelId === 'plot-308-b' ? 'rgba(255, 221, 0, 0.45)' : 'rgba(217, 70, 239, 0.08)'}
                        stroke="#D946EF"
                        strokeWidth="1.8"
                      />
                      <text x="312" y="225" fill="#1D4ED8" fontSize="12" fontWeight="bold" textAnchor="middle">308</text>
                      <text x="312" y="239" fill="#DC2626" fontSize="9.5" fontWeight="bold" textAnchor="middle">6.00 Decimal (Jafir Ahmed)</text>
                    </g>

                    <g onClick={() => setSelectedParcelId('plot-308-c')} style={{ cursor: 'pointer' }}>
                      <polygon
                        points="268,250 361,244 363,264 270,270"
                        fill={selectedParcelId === 'plot-308-c' ? 'rgba(255, 221, 0, 0.45)' : 'rgba(217, 70, 239, 0.08)'}
                        stroke="#D946EF"
                        strokeWidth="1.8"
                      />
                      <text x="315" y="261" fill="#DC2626" fontSize="8.5" fontWeight="bold" textAnchor="middle">2.34 Decimal</text>
                    </g>

                    <g onClick={() => setSelectedParcelId('plot-308-d')} style={{ cursor: 'pointer' }}>
                      <polygon
                        points="270,270 363,264 366,306 274,310"
                        fill={selectedParcelId === 'plot-308-d' ? 'rgba(255, 221, 0, 0.45)' : 'rgba(217, 70, 239, 0.08)'}
                        stroke="#D946EF"
                        strokeWidth="1.8"
                      />
                      <text x="318" y="285" fill="#08111D" fontSize="7.5" fontWeight="bold" textAnchor="middle">Grantor: Monoyara | Jafir Ahmed</text>
                      <text x="318" y="299" fill="#DC2626" fontSize="9" fontWeight="bold" textAnchor="middle">(2.54+4.66)= 7.20 Decimal</text>
                    </g>

                    <g onClick={() => setSelectedParcelId('plot-308-e')} style={{ cursor: 'pointer' }}>
                      <polygon
                        points="274,310 366,306 368,342 278,340"
                        fill={selectedParcelId === 'plot-308-e' ? 'rgba(255, 221, 0, 0.45)' : 'rgba(217, 70, 239, 0.08)'}
                        stroke="#D946EF"
                        strokeWidth="1.8"
                      />
                      <text x="320" y="328" fill="#08111D" fontSize="8.5" fontWeight="bold" textAnchor="middle">Mokbul and Others</text>
                    </g>

                    {/* East Plots 311, 312, 316, 317, 318 */}
                    <polygon points="355,162 525,148 528,195 358,205" fill="none" stroke="#D946EF" strokeWidth="1.4" />
                    <text x="430" y="180" fill="#D946EF" fontSize="14" fontWeight="bold">311</text>
                    <polygon points="358,205 528,195 532,265 363,264" fill="none" stroke="#D946EF" strokeWidth="1.4" />
                    <text x="435" y="236" fill="#D946EF" fontSize="15" fontWeight="bold">312</text>
                    <polygon points="465,264 532,265 540,360 468,360" fill="none" stroke="#D946EF" strokeWidth="1.4" />
                    <text x="492" y="322" fill="#D946EF" fontSize="15" fontWeight="bold">316</text>
                    <polygon points="415,264 465,264 468,360 415,360" fill="none" stroke="#D946EF" strokeWidth="1.4" />
                    <text x="430" y="325" fill="#D946EF" fontSize="14" fontWeight="bold">317</text>
                    <polygon points="363,264 415,264 415,360 368,360" fill="none" stroke="#D946EF" strokeWidth="1.4" />
                    <text x="378" y="328" fill="#D946EF" fontSize="14" fontWeight="bold">318</text>
                  </g>
                )}

                {/* Aqueduct / Road Line & BWDB Corridor */}
                {showRoadLine && (
                  <g onClick={() => setSelectedParcelId('bwdb-corridor')} style={{ cursor: 'pointer' }}>
                    <polygon points="90,152 535,112 538,130 92,170" fill="rgba(37, 99, 235, 0.16)" stroke="#2563EB" strokeWidth="1.8" />
                    <text x="315" y="143" fill="#1D4ED8" fontSize="11" fontWeight="bold" textAnchor="middle" transform="rotate(-5, 315, 143)">
                      Brick road for social movement
                    </text>
                    <polygon points="92,170 538,130 540,148 95,188" fill="rgba(239, 68, 68, 0.16)" stroke="#2563EB" strokeWidth="1.8" />
                    <text x="318" y="161" fill="#DC2626" fontSize="10.2" fontWeight="bold" textAnchor="middle" transform="rotate(-5, 318, 161)">
                      Land acquired by the Bangladesh Water Development Board (BWDB)
                    </text>
                  </g>
                )}
              </svg>
            </div>

            {/* Dual Surveyor Signatures (Matches Bottom Right of PDF) */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginTop: '12px', textAlign: 'center' }}>
              <div style={{ background: '#fff', padding: '10px', borderRadius: '10px', border: '1px solid #CBD5E1' }}>
                <div style={{ fontSize: '13px', fontWeight: 700, color: '#0F766E', textDecoration: 'underline' }}>Surveyor</div>
                <div style={{ fontSize: '15px', fontWeight: 800, color: '#A21CAF' }}>Mawlana MD Edris Ali</div>
                <div style={{ fontSize: '12px', fontWeight: 700, color: '#0F766E' }}>
                  Reg No- 30827 • Phone - 01913-553545, 01580-594467
                </div>
              </div>
              <div style={{ background: '#fff', padding: '10px', borderRadius: '10px', border: '1px solid #CBD5E1' }}>
                <div style={{ fontSize: '13px', fontWeight: 700, color: '#0F766E', textDecoration: 'underline' }}>Surveyor</div>
                <div style={{ fontSize: '15px', fontWeight: 800, color: '#A21CAF' }}>Faysal Ahamad Shanto</div>
                <div style={{ fontSize: '12px', fontWeight: 700, color: '#0F766E' }}>
                  Reg No- 1111210 • Cert No- 19570/22 • Phone - 01754-246123, 01521-715896
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
