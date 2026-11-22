import React, { useState } from 'react';
import { PropellerHeader } from './components/PropellerHeader';
import { PropellerHome } from './components/PropellerHome';
import { PropellerFooter } from './components/PropellerFooter';
import {
  ServiceDetailModal,
  DemoBookingModal,
  OfficialSurveyReportModal,
} from './components/PropellerModals';

export function App() {
  const [brandMode, setBrandMode] = useState<'express' | 'propeller'>('express');
  const [activeServiceDetail, setActiveServiceDetail] = useState<string | null>(null);
  const [demoModalOpen, setDemoModalOpen] = useState(false);
  const [defaultDemoService, setDefaultDemoService] = useState<string | undefined>(undefined);
  const [reportModalOpen, setReportModalOpen] = useState(false);

  const handleOpenDemoModal = (serviceTitle?: string) => {
    setActiveServiceDetail(null);
    setDefaultDemoService(serviceTitle);
    setDemoModalOpen(true);
  };

  return (
    <>
      <PropellerHeader
        brandMode={brandMode}
        onOpenDemoModal={handleOpenDemoModal}
        onOpenReportModal={() => setReportModalOpen(true)}
        onSelectServiceDetail={(key) => setActiveServiceDetail(key)}
      />

      <PropellerHome
        brandMode={brandMode}
        onOpenDemoModal={handleOpenDemoModal}
        onOpenReportModal={() => setReportModalOpen(true)}
        onSelectServiceDetail={(key) => setActiveServiceDetail(key)}
      />

      <PropellerFooter
        brandMode={brandMode}
        onOpenDemoModal={handleOpenDemoModal}
        onOpenReportModal={() => setReportModalOpen(true)}
        onSelectServiceDetail={(key) => setActiveServiceDetail(key)}
      />

      {/* Interactive Modals */}
      <ServiceDetailModal
        serviceKey={activeServiceDetail}
        onClose={() => setActiveServiceDetail(null)}
        onBookService={(title) => handleOpenDemoModal(title)}
        onOpenReport={() => {
          setActiveServiceDetail(null);
          setReportModalOpen(true);
        }}
      />

      <DemoBookingModal
        isOpen={demoModalOpen}
        defaultService={defaultDemoService}
        onClose={() => setDemoModalOpen(false)}
      />

      <OfficialSurveyReportModal
        isOpen={reportModalOpen}
        onClose={() => setReportModalOpen(false)}
      />

      {/* Floating View Switcher (Express Digital Land Survey vs. Original Propeller Text) */}
      <div className="edls-floating-dock">
        <button
          onClick={() => setBrandMode('express')}
          style={{
            background: brandMode === 'express' ? '#ffdd00' : 'transparent',
            color: brandMode === 'express' ? '#08111D' : '#ffffff',
          }}
        >
          Express Land Survey (7 Services)
        </button>
        <button
          onClick={() => setBrandMode('propeller')}
          style={{
            background: brandMode === 'propeller' ? '#ffdd00' : 'transparent',
            color: brandMode === 'propeller' ? '#08111D' : '#ffffff',
          }}
        >
          Propeller Aero (Original Text)
        </button>
        <button
          onClick={() => setReportModalOpen(true)}
          style={{
            background: 'rgba(255,255,255,0.12)',
            color: '#ffdd00',
          }}
        >
          Report Sheet
        </button>
      </div>
    </>
  );
}

export default App;
