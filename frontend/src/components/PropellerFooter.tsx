import React from 'react';

interface PropellerFooterProps {
  brandMode: 'express' | 'propeller';
  onOpenDemoModal: (defaultService?: string) => void;
  onOpenReportModal: () => void;
  onSelectServiceDetail: (serviceKey: string) => void;
}

export const PropellerFooter: React.FC<PropellerFooterProps> = ({
  brandMode,
  onOpenDemoModal,
  onOpenReportModal,
  onSelectServiceDetail,
}) => {
  const isPropeller = brandMode === 'propeller';

  return (
    <footer id="page-footer" className="l-footer" itemScope itemType="https://schema.org/WPFooter">
      <section
        className="l-section wpb_row footer-top height_medium width_custom color_footer-bottom"
        style={{ '--site-content-width': '1350px' } as React.CSSProperties}
      >
        <div className="l-section-h i-cf">
          <div className="g-cols vc_row via_grid cols_1 laptops-cols_inherit tablets-cols_inherit mobiles-cols_1 valign_top type_default stacking_default">
            <div className="wpb_column vc_column_container">
              <div className="vc_column-inner">
                {/* Column 1: Logo, Socials, Language, SOC2 Badge */}
                <div className="w-vwrapper align_none valign_top" style={{ '--vwrapper-gap': '0rem' } as React.CSSProperties}>
                  <div className="w-image footer-logo align_none">
                    <div className="w-image-h">
                      <img
                        width="1024"
                        height="1024"
                        src="https://www.propelleraero.com/wp-content/uploads/2023/05/footer-logo.svg"
                        className="attachment-large size-large"
                        alt="Propeller Aero: Drone Mapping Platform Homepage"
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                  </div>
                  <div className="w-hwrapper valign_middle align_none" style={{ '--hwrapper-gap': '20px' } as React.CSSProperties}>
                    <div className="w-html">
                      <a href="https://wa.me/8801754246123" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                        <svg fill="none" height="25" viewBox="0 0 24 25" width="24" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="m7.275 21.9395h-3.95833v-12.66671h3.95833zm-1.97917-14.40838c-1.26666 0-2.29583-1.02917-2.29583-2.29583 0-1.26667 1.02917-2.29584 2.29583-2.29584 1.26667 0 2.29584 1.02917 2.29584 2.29584 0 1.26666-1.02917 2.29583-2.29584 2.29583zm16.70417 14.40838h-3.9583v-6.175c0-1.5042 0-3.325-2.0584-3.325-2.0583 0-2.375 1.5833-2.375 3.2458v6.2542h-3.9583v-12.66671h3.8v1.74171h.0792c.5541-1.02921 1.8208-2.05838 3.7208-2.05838 3.9583 0 4.75 2.61248 4.75 6.01668z"
                            fill="#08111d"
                          />
                        </svg>
                      </a>
                    </div>
                    <div className="w-html">
                      <a href="https://wa.me/8801754246123" target="_blank" rel="noreferrer" aria-label="Instagram">
                        <svg fill="none" height="25" viewBox="0 0 24 25" width="24" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="m16.5 3.18945h-9c-1.39193.00149-2.72642.55509-3.71067 1.53934-.98424.98424-1.53784 2.31873-1.53933 3.71066v9.00005c.00149 1.3919.55509 2.7264 1.53933 3.7106.98425.9843 2.31874 1.5379 3.71067 1.5394h9c1.3919-.0015 2.7264-.5551 3.7107-1.5394.9842-.9842 1.5378-2.3187 1.5393-3.7106v-9.00005c-.0015-1.39193-.5551-2.72642-1.5393-3.71066-.9843-.98425-2.3188-1.53785-3.7107-1.53934zm-4.5 14.25005c-.89 0-1.76-.264-2.50007-.7584-.74002-.4945-1.31679-1.1973-1.65739-2.0196-.34059-.8222-.42971-1.727-.25607-2.6.17363-.8729.60221-1.6747 1.23155-2.30403s1.43118-1.05792 2.30408-1.23155 1.7777-.08452 2.6.25608c.8222.34059 1.525.91737 2.0195 1.6574.4945.74.7584 1.61.7584 2.5001-.0012 1.193-.4757 2.3369-1.3194 3.1806-.8436.8436-1.9875 1.3181-3.1806 1.3194zm5.625-9.00005c-.2225 0-.44-.06598-.625-.18959-.185-.12362-.3292-.29932-.4144-.50489-.0851-.20556-.1074-.43177-.064-.64999.0434-.21823.1506-.41869.3079-.57602.1573-.15734.3578-.26448.576-.30789.2183-.04341.4445-.02113.65.06402.2056.08515.3813.22934.5049.41435.1236.185.1896.40251.1896.62501 0 .29837-.1185.58452-.3295.7955s-.4971.3295-.7955.3295zm-2.625 4.50005c0 .5933-.1759 1.1733-.5056 1.6667-.3296.4933-.7982.8778-1.3463 1.1049-.5482.2271-1.1514.2865-1.7334.1707-.5819-.1157-1.1165-.4015-1.53602-.821-.41956-.4196-.70528-.9541-.82104-1.5361-.11575-.5819-.05634-1.1851.17072-1.7333s.61158-1.0167 1.10494-1.3464c.4933-.3296 1.0734-.50555 1.6667-.50555.7956 0 1.5587.31605 2.1213.87865s.8787 1.3257.8787 2.1214z"
                            fill="#08111d"
                          />
                        </svg>
                      </a>
                    </div>
                    <div className="w-html">
                      <a href="https://wa.me/8801754246123" target="_blank" rel="noreferrer" aria-label="Facebook">
                        <svg fill="none" height="25" viewBox="0 0 24 25" width="24" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="m18 6.20305h-1.9836c-1.5328 0-1.8934.66946-1.8934 1.75732v2.25943h3.7868v3.5983h-3.7868v9.1214h-3.8771v-9.1214h-3.2459v-3.5983h3.2459v-2.59415c0-3.01256 1.9836-4.6862 4.8689-4.6862h2.8852z"
                            fill="#08111d"
                          />
                        </svg>
                      </a>
                    </div>
                    <div className="w-html">
                      <a href="mailto:faysalahamed2000s@gmail.com" aria-label="YouTube">
                        <svg fill="none" height="25" viewBox="0 0 24 25" width="24" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="m21.9684 7.45696c-.0883-.34562-.2575-.66527-.4937-.9326s-.5326-.47466-.8647-.6049c-3.2138-1.24125-8.3288-1.23-8.61-1.23s-5.39625-.01125-8.61 1.23c-.3321.13024-.62847.33757-.86466.6049s-.40544.58698-.49378.9326c-.24281.93562-.53156 2.64564-.53156 5.48254 0 2.8368.28875 4.5468.53156 5.4825.08821.3457.25739.6656.49359.9331.23621.2675.53265.475.86485.6053 3.07875 1.1878 7.8975 1.2291 8.5481 1.2291h.1238c.6506 0 5.4722-.0413 8.5481-1.2291.3322-.1303.6286-.3378.8648-.6053s.4054-.5874.4936-.9331c.2429-.9375.5316-2.6457.5316-5.4825 0-2.8369-.2887-4.54692-.5316-5.48254zm-6.9131 6.09374-3.75 2.625c-.1122.0786-.2437.125-.3804.1341-.1366.0091-.2732-.0194-.3948-.0824s-.2237-.158-.2951-.2749-.1094-.2511-.11-.388v-5.25c0-.1372.0377-.2718.1089-.38908s.1732-.21277.295-.2761c.1217-.06332.2584-.09204.3953-.08304.1369.00901.2687.0554.3811.13411l3.75 2.62501c.0987.0692.1792.1611.2348.268s.0846.2256.0846.3461c0 .1204-.029.2391-.0846.346s-.1361.1988-.2348.268z"
                            fill="#08111d"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                  <div className="w-dropdown source_polylang dropdown_height drop_to_right open_on_click">
                    <div className="w-dropdown-h">
                      <div className="w-dropdown-current">
                        <a className="w-dropdown-item" role="button" href="#lang" onClick={(e) => e.preventDefault()}>
                          <span className="w-dropdown-item-title">English</span>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="w-image cert align_none">
                    <a
                      href="#cert"
                      onClick={(e) => {
                        e.preventDefault();
                        onOpenReportModal();
                      }}
                      aria-label="SOC2-TYPE2-BADGE"
                      className="w-image-h"
                    >
                      <img
                        width="452"
                        height="136"
                        src="https://www.propelleraero.com/wp-content/uploads/2023/05/SOC2-TYPE1-BADGE.png"
                        className="attachment-large size-large"
                        alt="Certified Survey Platform"
                        loading="lazy"
                        decoding="async"
                      />
                    </a>
                  </div>
                </div>

                {/* Column 2: Platform / 7 Core Services */}
                <div className="wpb_text_column">
                  <div className="wpb_wrapper">
                    <p>
                      <strong>{isPropeller ? 'Platform' : '7 Core Services'}</strong>
                    </p>
                    <ul>
                      <li>
                        <a href="#s1" onClick={(e) => { e.preventDefault(); onSelectServiceDetail('digital-survey'); }}>
                          {isPropeller ? 'Propeller' : 'Digital Survey'}
                        </a>
                      </li>
                      <li>
                        <a href="#s2" onClick={(e) => { e.preventDefault(); onSelectServiceDetail('map-preparation'); }}>
                          {isPropeller ? 'DirtMate' : 'Map Preparation'}
                        </a>
                      </li>
                      <li>
                        <a href="#s3" onClick={(e) => { e.preventDefault(); onSelectServiceDetail('deeds-mouza-retrieval'); }}>
                          {isPropeller ? 'AeroPoints' : 'Retrieval of Deeds/Mouza Maps'}
                        </a>
                      </li>
                      <li>
                        <a href="#s4" onClick={(e) => { e.preventDefault(); onSelectServiceDetail('pantograph'); }}>
                          {isPropeller ? 'Propeller CAD' : 'Pantograph'}
                        </a>
                      </li>
                      <li>
                        <a href="#s5" onClick={(e) => { e.preventDefault(); onSelectServiceDetail('demarcation'); }}>
                          {isPropeller ? 'Drone & hardware integrations' : 'Demarcation'}
                        </a>
                      </li>
                      <li>
                        <a href="#s6" onClick={(e) => { e.preventDefault(); onSelectServiceDetail('overlap'); }}>
                          {isPropeller ? 'Propeller PPK' : 'Overlap'}
                        </a>
                      </li>
                      <li>
                        <a href="#s7" onClick={(e) => { e.preventDefault(); onSelectServiceDetail('record-verification'); }}>
                          {isPropeller ? 'Photogrammetry' : 'Record Verification'}
                        </a>
                      </li>
                      <li>
                        <a href="#s8" onClick={(e) => { e.preventDefault(); onOpenReportModal(); }}>
                          {isPropeller ? 'LiDAR' : 'Scale 1" = 64 Feet Report'}
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Column 3: Industries */}
                <div className="wpb_text_column">
                  <div className="wpb_wrapper">
                    <p>
                      <strong>Industries</strong>
                    </p>
                    <ul>
                      <li style={{ listStyleType: 'none' }}>
                        <ul>
                          <li><a href="#ind1" onClick={(e) => { e.preventDefault(); onOpenDemoModal('Digital Survey'); }}>Construction</a></li>
                          <li><a href="#ind2" onClick={(e) => { e.preventDefault(); onOpenDemoModal('Overlap'); }}>{isPropeller ? 'Mining' : 'Cadastral & Mouza'}</a></li>
                          <li><a href="#ind3" onClick={(e) => { e.preventDefault(); onOpenDemoModal('Demarcation'); }}>{isPropeller ? 'Aggregates' : 'Industrial & EPZ'}</a></li>
                          <li><a href="#ind4" onClick={(e) => { e.preventDefault(); onOpenDemoModal('Record Verification'); }}>{isPropeller ? 'Waste Management' : 'BWDB & Water Corridors'}</a></li>
                          <li><a href="#ind5" onClick={(e) => { e.preventDefault(); onOpenDemoModal('Map Preparation'); }}>Transportation</a></li>
                          <li><a href="#ind6" onClick={(e) => { e.preventDefault(); onOpenDemoModal('Digital Survey'); }}>Survey + Engineering</a></li>
                          <li><a href="#ind7" onClick={(e) => { e.preventDefault(); onOpenDemoModal('Pantograph'); }}>Data centers</a></li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Column 4: Workflows */}
                <div className="wpb_text_column">
                  <div className="wpb_wrapper">
                    <p>
                      <strong>Workflows</strong>
                    </p>
                    <ul>
                      <li><a href="#wf1" onClick={(e) => { e.preventDefault(); onSelectServiceDetail('digital-survey'); }}>Connect field and office teams</a></li>
                      <li><a href="#wf2" onClick={(e) => { e.preventDefault(); onSelectServiceDetail('map-preparation'); }}>{isPropeller ? 'Track progress and productivity' : 'Draft 1" = 64 Feet CAD Plans'}</a></li>
                      <li><a href="#wf3" onClick={(e) => { e.preventDefault(); onSelectServiceDetail('overlap'); }}>{isPropeller ? 'Verify as-built work against design' : 'Superimpose CS, RS & Road Lines'}</a></li>
                      <li><a href="#wf4" onClick={(e) => { e.preventDefault(); onSelectServiceDetail('record-verification'); }}>{isPropeller ? 'Support safety and compliance' : 'Verify Grantor-Recipient Deeds'}</a></li>
                      <li><a href="#wf5" onClick={(e) => { e.preventDefault(); onSelectServiceDetail('pantograph'); }}>{isPropeller ? 'Manage inventory and volumes' : 'Compute Decimals, Katha & Sq.Ft'}</a></li>
                      <li><a href="#wf6" onClick={(e) => { e.preventDefault(); onSelectServiceDetail('demarcation'); }}>{isPropeller ? 'Capture existing ground' : 'Stake Out Boundary Pillars'}</a></li>
                    </ul>
                  </div>
                </div>

                {/* Column 5: Teams / Surveyors */}
                <div className="wpb_text_column">
                  <div className="wpb_wrapper">
                    <p>
                      <strong>{isPropeller ? 'Teams' : 'Surveyors & Credentials'}</strong>
                    </p>
                    <ul>
                      <li><a href="#tm1" onClick={(e) => { e.preventDefault(); onOpenReportModal(); }}>{isPropeller ? 'Project managers' : 'Faysal Ahamad Shanto'}</a></li>
                      <li><a href="#tm2" onClick={(e) => { e.preventDefault(); onOpenReportModal(); }}>{isPropeller ? 'Foreman + superintendents' : 'Reg No- 1111210'}</a></li>
                      <li><a href="#tm3" onClick={(e) => { e.preventDefault(); onOpenReportModal(); }}>{isPropeller ? 'Site engineers + operations' : 'Certificate No- 19570/22'}</a></li>
                      <li><a href="#tm4" onClick={(e) => { e.preventDefault(); onOpenReportModal(); }}>{isPropeller ? 'VPs + owners' : 'BS-AS Member No- 898/26'}</a></li>
                      <li><a href="#tm5" onClick={(e) => { e.preventDefault(); onOpenReportModal(); }}>{isPropeller ? 'Surveyors + GIS' : 'Mawlana MD Edris Ali'}</a></li>
                      <li><a href="#tm6" onClick={(e) => { e.preventDefault(); onOpenReportModal(); }}>{isPropeller ? 'Estimators + bidders' : 'Senior Reg No- 30827'}</a></li>
                      <li><a href="#tm7" onClick={(e) => { e.preventDefault(); onOpenReportModal(); }}>{isPropeller ? 'Quarry + aggregate managers' : 'Mouja Parain (Plot 308)'}</a></li>
                    </ul>
                  </div>
                </div>

                {/* Column 6: Resources & Direct Contact */}
                <div className="wpb_text_column">
                  <div className="wpb_wrapper">
                    <p>
                      <strong>{isPropeller ? 'Resources' : 'Direct Contact'}</strong>
                    </p>
                    <ul>
                      <li><a href="tel:01754246123">{isPropeller ? 'Community' : 'Faysal: 01754-246123'}</a></li>
                      <li><a href="tel:01521715896">{isPropeller ? 'Blog' : 'Faysal: 01521-715896'}</a></li>
                      <li><a href="tel:01913553545">{isPropeller ? 'Training + support' : 'Edris Ali: 01913-553545'}</a></li>
                      <li><a href="tel:01580594467">{isPropeller ? 'Knowledge base' : 'Edris Ali: 01580-594467'}</a></li>
                      <li><a href="mailto:faysalahamed2000s@gmail.com">{isPropeller ? 'Webinars' : 'faysalahamed2000s@gmail.com'}</a></li>
                      <li><a href="#report" onClick={(e) => { e.preventDefault(); onOpenReportModal(); }}>{isPropeller ? 'Customers' : '11/10/2026 Survey Report'}</a></li>
                      <li><a href="#book" onClick={(e) => { e.preventDefault(); onOpenDemoModal(); }}>{isPropeller ? 'Careers' : 'Rupgonj, Narayanganj'}</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="l-section wpb_row copyright height_medium width_custom color_footer-bottom"
        style={{ '--site-content-width': '1350px' } as React.CSSProperties}
      >
        <div className="l-section-h i-cf">
          <div className="g-cols vc_row via_grid cols_1 laptops-cols_inherit tablets-cols_inherit mobiles-cols_1 valign_top type_default stacking_default">
            <div className="wpb_column vc_column_container">
              <div className="vc_column-inner">
                <div className="wpb_text_column">
                  <div className="wpb_wrapper">
                    <p>
                      © 2026 {isPropeller ? 'Propeller Aero' : 'EXPRESS Digital Land Survey ("786")'}{' '}
                      <a href="#terms" onClick={(e) => { e.preventDefault(); onOpenReportModal(); }}>
                        Terms + Conditions
                      </a>{' '}
                      <a href="#privacy" onClick={(e) => { e.preventDefault(); onOpenReportModal(); }}>
                        Privacy Policy
                      </a>{' '}
                      <a href="#security" onClick={(e) => { e.preventDefault(); onOpenReportModal(); }}>
                        Platform Security
                      </a>{' '}
                      <a href="#trust" onClick={(e) => { e.preventDefault(); onOpenReportModal(); }}>
                        Trust Center
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
};
