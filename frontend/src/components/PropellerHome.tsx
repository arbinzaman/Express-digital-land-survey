import React from 'react';

interface PropellerHomeProps {
  brandMode: 'express' | 'propeller';
  onOpenDemoModal: (defaultService?: string) => void;
  onOpenReportModal: () => void;
  onSelectServiceDetail: (serviceKey: string) => void;
}

const LOGOS = [
  { src: 'https://www.propelleraero.com/wp-content/uploads/2025/05/groeschler-logo.png', alt: 'groeschler logo', w: 414 },
  { src: 'https://www.propelleraero.com/wp-content/uploads/2025/05/louisville-paving-logo.png', alt: 'louisville paving logo', w: 344 },
  { src: 'https://www.propelleraero.com/wp-content/uploads/2025/05/cemex-logo.png', alt: 'Cemex logo', w: 300 },
  { src: 'https://www.propelleraero.com/wp-content/uploads/2025/05/rickabaugh-construction-logo-1.png', alt: 'rickabaugh construction logo', w: 300 },
  { src: 'https://www.propelleraero.com/wp-content/uploads/2025/05/rudus-logo.png', alt: 'RUDUS A CRH Company', w: 206 },
  { src: 'https://www.propelleraero.com/wp-content/uploads/2025/05/bonatti-logo.png', alt: 'Bonatti Logo', w: 300 },
  { src: 'https://www.propelleraero.com/wp-content/uploads/2025/05/menai-logo.png', alt: 'Menai civil contractors logo', w: 300 },
  { src: 'https://www.propelleraero.com/wp-content/uploads/2025/05/kerr-contractors-logo.png', alt: 'Kerr Contractors logo', w: 272 },
  { src: 'https://www.propelleraero.com/wp-content/uploads/2025/05/reif-logo.png', alt: 'Reif logo', w: 236 },
  { src: 'https://www.propelleraero.com/wp-content/uploads/2025/05/dolese-logo.png', alt: 'Dolese logo', w: 300 },
  { src: 'https://www.propelleraero.com/wp-content/uploads/2025/05/dirks-enterprises-logo.png', alt: 'Dirks Enterprise logo', w: 300 },
  { src: 'https://www.propelleraero.com/wp-content/uploads/2025/05/lhoist-logo.png', alt: 'lhoist logo', w: 266 },
  { src: 'https://www.propelleraero.com/wp-content/uploads/2025/05/steax-consulting-logo-1.png', alt: 'steax consulting logo', w: 352 },
];

export const PropellerHome: React.FC<PropellerHomeProps> = ({
  brandMode,
  onOpenDemoModal,
  onOpenReportModal,
  onSelectServiceDetail,
}) => {
  const isPropeller = brandMode === 'propeller';

  return (
    <div className="l-canvas type_wide" id="top">
      <main id="page-content" className="l-main" itemProp="mainContentOfPage">
        {/* SECTION 1: HERO (.ndnp-header.home) */}
        <section className="l-section wpb_row ndnp-header home height_medium">
          <div className="l-section-h i-cf">
            <div className="g-cols vc_row via_grid cols_1 laptops-cols_inherit tablets-cols_inherit mobiles-cols_1 valign_top type_default stacking_default">
              <div className="wpb_column vc_column_container">
                <div className="vc_column-inner">
                  {!isPropeller && (
                    <div className="w-text">
                      <span className="w-text-h">
                        <span className="w-text-value">
                          Digital Survey • Map Preparation • Retrieval of Deeds/Mouza Maps • Pantograph • Demarcation • Overlap • Record Verification
                        </span>
                      </span>
                    </div>
                  )}
                  <div className="wpb_text_column">
                    <div className="wpb_wrapper">
                      <h1>
                        {isPropeller
                          ? 'Your 3D drone mapping software now does CAD'
                          : 'Your 3D digital land survey platform now does CAD'}
                      </h1>
                      <p>
                        {isPropeller
                          ? 'Create concept designs on your site map with Propeller CAD, stake out points with DirtMate RTK, and bring field data back into Propeller. Your plans, hardware, and team, connected through one shared map.'
                          : 'Create 1" = 64 Feet survey plans with Express CAD, stake out boundaries with Total Station & RTK Demarcation, and superimpose CS/SA/RS Mouza overlaps. Your deeds, hardware, and surveyors, connected through one shared map.'}
                      </p>
                    </div>
                  </div>
                  <div className="w-btn-wrapper align_none">
                    <a
                      className="w-btn us-btn-style_5"
                      href="#cad-report"
                      onClick={(e) => {
                        e.preventDefault();
                        onOpenReportModal();
                      }}
                    >
                      <span className="w-btn-label">
                        {isPropeller ? 'CHECK OUT CAD' : 'CHECK OUT CAD REPORT'}
                      </span>
                    </a>
                  </div>
                  <div className="w-btn-wrapper align_none">
                    <a
                      className="w-btn us-btn-style_3"
                      href="#request-demo"
                      onClick={(e) => {
                        e.preventDefault();
                        onOpenDemoModal();
                      }}
                    >
                      <span className="w-btn-label">
                        {isPropeller ? 'REQUEST A DEMO' : 'BOOK A SURVEY'}
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: HERO VIDEO (.ndnp-video) */}
        <section
          className="l-section wpb_row ndnp-video height_auto width_custom"
          style={{ '--site-content-width': '1410px' } as React.CSSProperties}
        >
          <div className="l-section-h i-cf">
            <div className="g-cols vc_row via_grid cols_1 laptops-cols_inherit tablets-cols_inherit mobiles-cols_1 valign_top type_default stacking_default">
              <div className="wpb_column vc_column_container">
                <div className="vc_column-inner">
                  <div className="w-video us_custom_25b368a5 align_none has_border_radius">
                    <div className="w-video-h">
                      <video preload="metadata" playsInline autoPlay loop muted>
                        <source
                          type="video/mp4"
                          src="https://get.propelleraero.com/hubfs/Demand%20Gen%20misc%20DG/CAD%20Launch%20Video%203%2016x9%20-%20w%20subtitles.mp4"
                        />
                      </video>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: LOGO CAROUSEL (.platform-stories) */}
        <section className="l-section wpb_row platform-stories height_medium">
          <div className="l-section-h i-cf">
            <div className="g-cols vc_row via_grid cols_1 laptops-cols_inherit tablets-cols_inherit mobiles-cols_1 valign_top type_default stacking_default">
              <div className="wpb_column vc_column_container">
                <div className="vc_column-inner">
                  <div className="w-content-carousel items_auto logo-carousel">
                    <div
                      className="owl-carousel valign_middle dotstyle_circle navstyle_circle arrows-ver-pos_middle arrows-hor-pos_on_sides_outside arrows-disabled_hide autoplay_continual owl-responsive-2000 owl-loaded"
                      role="group"
                      aria-label="Carousel"
                    >
                      <div className="owl-stage-outer">
                        <div className="owl-stage">
                          {[...LOGOS, ...LOGOS].map((logo, idx) => (
                            <div className="owl-item" key={idx}>
                              <div className="w-image align_center">
                                <div className="w-image-h">
                                  <img
                                    decoding="async"
                                    width={logo.w}
                                    height="100"
                                    src={logo.src}
                                    className="attachment-full size-full"
                                    alt={logo.alt}
                                    loading="lazy"
                                  />
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-btn-wrapper align_center">
                    <a
                      className="w-btn us-btn-style_5"
                      href="#stories"
                      onClick={(e) => {
                        e.preventDefault();
                        onOpenReportModal();
                      }}
                    >
                      <span className="w-btn-label">
                        {isPropeller
                          ? 'SEE ALL CUSTOMER STORIES'
                          : 'INSPECT SAMPLE SURVEY REPORT (PLOT 308)'}
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4: PLATFORM COMMAND CENTER (.platform-products) */}
        <section
          id="platform-section"
          className="l-section wpb_row us_custom_887a049b platform-products height_medium"
        >
          <div className="l-section-h i-cf">
            <div className="g-cols vc_row via_grid cols_1 laptops-cols_inherit tablets-cols_inherit mobiles-cols_1 valign_top type_default stacking_default">
              <div className="wpb_column vc_column_container">
                <div className="vc_column-inner">
                  <div className="w-text propeller-sub-title">
                    <span className="w-text-h">
                      <span className="w-text-value">
                        {isPropeller ? 'Propeller Platform' : 'Express Digital Land Survey Platform'}
                      </span>
                    </span>
                  </div>
                  <div className="wpb_text_column title-section">
                    <div className="wpb_wrapper">
                      <h2>
                        {isPropeller
                          ? 'It’s more than just drone mapping. It’s your command center.'
                          : 'It’s more than just land surveying. It’s your cadastral command center.'}
                      </h2>
                      <p>
                        {isPropeller
                          ? 'Propeller simplifies daily oversight using a map-based command center with analytics tools and reporting capabilities. Connecting all your site docs in one hub, you’ll reduce operating costs, align your team, and keep proof of work on hand.'
                          : 'Express Digital Land Survey simplifies property verification using a map-based command center with Digital Survey, Map Preparation, Retrieval of Deeds/Mouza Maps, Pantograph, Demarcation, Overlap, and Record Verification in one certified hub.'}
                      </p>
                    </div>
                  </div>

                  {/* Row 1: Image Left + Text Right */}
                  <div
                    className="g-cols wpb_row via_grid cols_2 laptops-cols_inherit tablets-cols_inherit mobiles-cols_1 valign_middle type_default stacking_default"
                    style={{ '--columns-gap': '3rem' } as React.CSSProperties}
                  >
                    <div className="wpb_column vc_column_container">
                      <div className="vc_column-inner">
                        <div className="w-image us_custom_923f2bd6 has_aspect_ratio align_none">
                          <div className="w-image-h">
                            <img
                              decoding="async"
                              width="1350"
                              height="941"
                              src="https://www.propelleraero.com/wp-content/uploads/2025/08/3D-Drone-Mapping-Software-aeropoint-dirtmate-software-propeller.jpg"
                              className="attachment-full size-full"
                              alt="Aeropoint DJI Mavic 3 Enterprise Propeller DirtMate and software screenshot"
                              loading="lazy"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="wpb_column vc_column_container">
                      <div className="vc_column-inner">
                        <div className="wpb_text_column">
                          <div className="wpb_wrapper">
                            <h3>
                              {isPropeller
                                ? 'Hardware agnostic, accuracy obsessed'
                                : 'Digital Survey & Demarcation, accuracy obsessed'}
                            </h3>
                            <p>
                              {isPropeller
                                ? 'Upload surface data from the capture or survey tool that best matches your accuracy needs. This could be drone mapping, GNSS rover, total station, or other conventional methods. Propeller brings it all together into one unified map. Our high-precision processing ensures that every data point aligns reliably, no matter how it was captured. With everything in one place, your team can trust the map and make confident, accurate decisions across the site.'
                                : 'Capture boundary data from the survey instrument that best matches your precision needs—electro-optical Total Station, RTK GNSS rover, aerial drone mapping, or Pantograph scaling. Express brings CS, SA, RS, and BS Mouza records together into one unified 1" = 64 Feet map so your landowners, buyers, and engineers can make confident decisions across every decimal.'}
                            </p>
                            <blockquote>
                              <p>
                                {isPropeller
                                  ? '“We were within 2/100ths of a foot of our lidar scan—Propeller just works. The AeroPoints are like gold when you’re flying a drone.”'
                                  : '“Every sub-parcel in Mouja Parain (RS Plot 308 / CS Plot 161)—from 8.80 Decimal to 7.20 Decimal—was demarcated within millimeters.”'}
                              </p>
                              <p>
                                {isPropeller ? (
                                  <>
                                    – John Triska, Owner at <strong>3D Data Prep Inc</strong>
                                  </>
                                ) : (
                                  <>
                                    – Faysal Ahamad Shanto, Lead Surveyor (
                                    <strong>Reg No- 1111210 • Cert No- 19570/22</strong>)
                                  </>
                                )}
                              </p>
                            </blockquote>
                          </div>
                        </div>
                        <div className="w-text">
                          <a
                            href="#hardware-integrations"
                            onClick={(e) => {
                              e.preventDefault();
                              onSelectServiceDetail('digital-survey');
                            }}
                            className="w-text-h"
                          >
                            <span className="w-text-value">
                              {isPropeller
                                ? 'SEE OUR HARDWARE INTEGRATIONS'
                                : 'EXPLORE DIGITAL SURVEY & DEMARCATION'}
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="w-separator size_custom" style={{ height: '30px' }} id="fa18" />

                  {/* Row 2: Text Left + Video Right (.reversed) */}
                  <div
                    className="g-cols wpb_row via_grid cols_2 laptops-cols_inherit tablets-cols_inherit mobiles-cols_1 valign_middle type_default reversed stacking_default"
                    style={{ '--columns-gap': '3rem' } as React.CSSProperties}
                  >
                    <div className="wpb_column vc_column_container">
                      <div className="vc_column-inner">
                        <div className="wpb_text_column">
                          <div className="wpb_wrapper">
                            <h3>
                              {isPropeller
                                ? 'Your entire site, in your hands'
                                : 'Retrieval of Deeds & Mouza Maps, in your hands'}
                            </h3>
                            <p>
                              {isPropeller
                                ? 'Keep your site in your pocket, on your desk, or even in the cab of your machines. With a simple, cloud-based map you easily keep tabs on what’s complete and what’s left to do from wherever you are – no matter your technical background.'
                                : 'Keep your CS, SA, RS, and BS Mouza maps and registered title deeds in your pocket, on your desk, or on-site during demarcation. With clear Grantor-to-Recipient partitioning and 1" = 64 Feet scale indexing, you can verify ownership shares from wherever you are.'}
                            </p>
                            <blockquote>
                              <p>
                                {isPropeller
                                  ? '“Now, we can see the sites we’re considering building and pull them up in Propeller, and look at them and analyze them all together. That’s been really exciting.”'
                                  : '“Having CS/SA Plot 161 and RS Plot 308 superimposed alongside the BWDB acquired land and brick road made title verification effortless.”'}
                              </p>
                              <p>
                                {isPropeller ? (
                                  <>
                                    – Lonny Reed, Owner at <strong>Legend Engineering</strong>
                                  </>
                                ) : (
                                  <>
                                    – Mawlana MD Edris Ali, Senior Surveyor (
                                    <strong>Reg No- 30827 • 01913-553545</strong>)
                                  </>
                                )}
                              </p>
                            </blockquote>
                          </div>
                        </div>
                        <div className="w-text">
                          <a
                            href="#mobile"
                            onClick={(e) => {
                              e.preventDefault();
                              onSelectServiceDetail('deeds-mouza-retrieval');
                            }}
                            className="w-text-h"
                          >
                            <span className="w-text-value">
                              {isPropeller
                                ? 'Learn How it Works on Mobile'
                                : 'Explore Retrieval of Deeds/Mouza Maps'}
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="wpb_column vc_column_container">
                      <div className="vc_column-inner">
                        <div className="w-video us_custom_158b09b5 align_none has_border_radius">
                          <div className="w-video-h">
                            <video preload="metadata" playsInline autoPlay loop muted>
                              <source
                                type="video/mp4"
                                src="https://www.propelleraero.com/wp-content/uploads/2025/08/Mobile-video.mp4"
                              />
                            </video>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="w-separator size_custom" style={{ height: '30px' }} id="gebb" />

                  {/* Row 3: Image Left + Text Right */}
                  <div
                    className="g-cols wpb_row via_grid cols_2 laptops-cols_inherit tablets-cols_inherit mobiles-cols_1 valign_middle type_default stacking_default"
                    style={{ '--columns-gap': '3rem' } as React.CSSProperties}
                  >
                    <div className="wpb_column vc_column_container">
                      <div className="vc_column-inner">
                        <div className="w-image align_none">
                          <div className="w-image-h">
                            <img
                              decoding="async"
                              width="2560"
                              height="1440"
                              src="https://www.propelleraero.com/wp-content/uploads/2026/07/Propeller-CAD_Trench-to-drainage-point-scaled.jpg"
                              className="attachment-full size-full"
                              alt="CAD design on real survey terrain"
                              loading="lazy"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="wpb_column vc_column_container">
                      <div className="vc_column-inner">
                        <div className="wpb_text_column">
                          <div className="wpb_wrapper">
                            <h3>
                              {isPropeller
                                ? 'Turn your site ideas into earthwork designs'
                                : 'Map Preparation & Pantograph scaling with CAD precision'}
                            </h3>
                            <p>
                              {isPropeller
                                ? 'Describe what you need—a haul road, ramp, or pad—and Propeller CAD helps turn it into a preliminary 3D design on your real survey terrain. Explore options, refine your concept, and share it for review—all without leaving Propeller.'
                                : 'Whether you need a 1" = 64 Feet Land Survey Report, multi-owner plot partitioning (8.80 Dec, 6.00 Dec, 2.34 Dec, 7.20 Dec), or distortion-free Pantograph enlargement, our CAD engine plots exact chord measurements in feet and inches directly on your real survey terrain.'}
                            </p>
                            <blockquote>
                              <p>
                                {isPropeller
                                  ? '“Propeller gives my clients who don’t speak CAD a far better understanding of the site. They can finally visualize what’s going on.”'
                                  : '“Our color-coded CAD reports give landowners who don’t speak CAD a crystal-clear understanding of CS lines, RS lines, and road acquisitions.”'}
                              </p>
                              <p>
                                {isPropeller ? (
                                  <>
                                    – Bryce Morehart, Vice President and Chief Drone Pilot at{' '}
                                    <strong>Morehart Field Services</strong>
                                  </>
                                ) : (
                                  <>
                                    – Express Digital Land Survey,{' '}
                                    <strong>BS-AS Member No- 898/26</strong>
                                  </>
                                )}
                              </p>
                            </blockquote>
                          </div>
                        </div>
                        <div className="w-text">
                          <a
                            href="#cad"
                            onClick={(e) => {
                              e.preventDefault();
                              onSelectServiceDetail('map-preparation');
                            }}
                            className="w-text-h"
                          >
                            <span className="w-text-value">
                              {isPropeller
                                ? 'EXPLORE PROPELLER CAD'
                                : 'EXPLORE MAP PREPARATION & PANTOGRAPH'}
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="w-separator size_custom" style={{ height: '30px' }} id="i7ff" />

                  {/* Row 4: Text Left + Image Right (.reversed) */}
                  <div
                    className="g-cols wpb_row via_grid cols_2 laptops-cols_inherit tablets-cols_inherit mobiles-cols_1 valign_middle type_default reversed stacking_default"
                    style={{ '--columns-gap': '3rem' } as React.CSSProperties}
                  >
                    <div className="wpb_column vc_column_container">
                      <div className="vc_column-inner">
                        <div className="wpb_text_column">
                          <div className="wpb_wrapper">
                            <h3>
                              {isPropeller
                                ? 'Your map-based SharePoint'
                                : 'Overlap & Record Verification in one shared workspace'}
                            </h3>
                            <p>
                              {isPropeller
                                ? 'Rather than storing site docs across many systems, you’ll manage everything in Propeller. Bring all your geospatial data–from PDF design plans to TIN surfaces–together in a shared workspace. With one truth, the whole project team stays aligned and works smarter.'
                                : 'Superimpose CS Line (Green), RS Line (Magenta), and Aqueduct/Road Line (Blue) in one unified CAD sheet. Cross-check Khatian numbers, Grantor-to-Recipient deed chains, and BWDB acquisitions so buyers, sellers, and neighbors stay aligned on one single source of truth.'}
                            </p>
                            <blockquote>
                              <p>
                                {isPropeller
                                  ? '“We use Propeller as a communication platform. Sharing updates, raising issues, and walking projects like we’re right there on site together.”'
                                  : '“Superimposing CS Plot 161 over RS Plot 308 immediately resolved boundary questions around the brick road and BWDB corridor.”'}
                              </p>
                              <p>
                                {isPropeller ? (
                                  <>
                                    – Hayden Taylor, Quarry Manager at{' '}
                                    <strong>Lehigh Hanson</strong>
                                  </>
                                ) : (
                                  <>
                                    – Verified Survey Report,{' '}
                                    <strong>Mouja Parain, Rupgonj, Narayanganj</strong>
                                  </>
                                )}
                              </p>
                            </blockquote>
                          </div>
                        </div>
                        <div className="w-text">
                          <a
                            href="#collaborate"
                            onClick={(e) => {
                              e.preventDefault();
                              onSelectServiceDetail('overlap');
                            }}
                            className="w-text-h"
                          >
                            <span className="w-text-value">
                              {isPropeller
                                ? 'Learn How Users Collaborate'
                                : 'Explore Overlap & Record Verification'}
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="wpb_column vc_column_container">
                      <div className="vc_column-inner">
                        <div className="w-image us_custom_923f2bd6 has_aspect_ratio align_none">
                          <div className="w-image-h">
                            <img
                              decoding="async"
                              width="1350"
                              height="901"
                              src="https://www.propelleraero.com/wp-content/uploads/2025/08/3D-Drone-Mapping-Software-machine-productivity-1.jpg"
                              className="attachment-full size-full"
                              alt="DirtMate dashboard highlighting the work of 2 bull dozers on a worksite"
                              loading="lazy"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 5: SOLUTIONS 6-CARD 3D ICON GRID (.platform-scale.home) */}
        <section
          id="solutions-section"
          className="l-section wpb_row platform-scale home height_medium"
        >
          <div className="l-section-h i-cf">
            <div className="g-cols vc_row via_grid cols_1 laptops-cols_inherit tablets-cols_inherit mobiles-cols_1 valign_top type_default stacking_default">
              <div className="wpb_column vc_column_container">
                <div className="vc_column-inner">
                  <div className="w-text">
                    <span className="w-text-h">
                      <span className="w-text-value">
                        {isPropeller ? 'Solutions' : '7 Core Services Below Our Name'}
                      </span>
                    </span>
                  </div>
                  <div className="wpb_text_column propeller-section-title">
                    <div className="wpb_wrapper">
                      <h2>
                        {isPropeller
                          ? 'How you can boost productivity with Propeller'
                          : 'How you can secure every plot with Express Digital Land Survey'}
                      </h2>
                    </div>
                  </div>

                  {/* Row 1 of 3D Icons */}
                  <div
                    className="g-cols wpb_row via_grid cols_3 laptops-cols_inherit tablets-cols_inherit mobiles-cols_1 valign_top type_default stacking_default"
                    style={{ '--columns-gap': '3rem' } as React.CSSProperties}
                  >
                    <div className="wpb_column vc_column_container">
                      <div className="vc_column-inner">
                        <div className="w-image align_none">
                          <div className="w-image-h">
                            <img
                              decoding="async"
                              width="1254"
                              height="1254"
                              src="https://www.propelleraero.com/wp-content/uploads/2026/10/Capture-reality-icon.png"
                              className="attachment-full size-full"
                              alt="Capture your reality"
                              loading="lazy"
                            />
                          </div>
                        </div>
                        <div className="wpb_text_column">
                          <div className="wpb_wrapper">
                            <h3>{isPropeller ? 'Capture your reality' : '1. Digital Survey'}</h3>
                            <p>
                              {isPropeller
                                ? 'Bring surveys from different sources onto one map. Process raw survey data or upload existing surfaces to start measuring and understanding your site.'
                                : 'Capture millimeter-accurate field coordinates using electronic Total Station and RTK GNSS rovers. Eliminate manual chain errors across your entire Mouza.'}
                            </p>
                          </div>
                        </div>
                        {!isPropeller && (
                          <div className="w-text">
                            <a
                              href="#s1"
                              onClick={(e) => {
                                e.preventDefault();
                                onSelectServiceDetail('digital-survey');
                              }}
                              className="w-text-h"
                            >
                              <span className="w-text-value">EXPLORE DIGITAL SURVEY</span>
                            </a>
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="wpb_column vc_column_container">
                      <div className="vc_column-inner">
                        <div className="w-image align_none">
                          <div className="w-image-h">
                            <img
                              decoding="async"
                              width="1254"
                              height="1254"
                              src="https://www.propelleraero.com/wp-content/uploads/2026/10/ideas-to-design-icon.png"
                              className="attachment-full size-full"
                              alt="Turn ideas into designs"
                              loading="lazy"
                            />
                          </div>
                        </div>
                        <div className="wpb_text_column">
                          <div className="wpb_wrapper">
                            <h3>
                              {isPropeller
                                ? 'Turn ideas into designs'
                                : '2. Map Preparation & Pantograph'}
                            </h3>
                            <p>
                              {isPropeller
                                ? 'Describe a road, ramp, or pad and use Propeller CAD to create a preliminary design on your real survey terrain. Explore options, refine your concept, and share it for qualified review.'
                                : 'Draft publication-grade 1" = 64 Feet CAD survey maps and perform distortion-free Pantograph scale conversions with exact side chords and Decimal tables.'}
                            </p>
                          </div>
                        </div>
                        <div className="w-text">
                          <a
                            href="#s2"
                            onClick={(e) => {
                              e.preventDefault();
                              onSelectServiceDetail('map-preparation');
                            }}
                            className="w-text-h"
                          >
                            <span className="w-text-value">
                              {isPropeller
                                ? 'EXPLORE PROPELLER CAD'
                                : 'EXPLORE MAP PREP & PANTOGRAPH'}
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className="wpb_column vc_column_container">
                      <div className="vc_column-inner">
                        <div className="w-image align_none">
                          <div className="w-image-h">
                            <img
                              decoding="async"
                              width="1254"
                              height="1254"
                              src="https://www.propelleraero.com/wp-content/uploads/2026/10/design-to-reality-icon.png"
                              className="attachment-full size-full"
                              alt="Compare design to reality"
                              loading="lazy"
                            />
                          </div>
                        </div>
                        <div className="wpb_text_column">
                          <div className="wpb_wrapper">
                            <h3>
                              {isPropeller
                                ? 'Compare design to reality'
                                : '3. Overlap (CS, RS & Road)'}
                            </h3>
                            <p>
                              {isPropeller
                                ? 'See how site conditions compare with your plans. Check cut and fill, spot differences, and understand what’s left to reach design.'
                                : 'Superimpose CS Lines (Green), RS Lines (Magenta), and Aqueduct/Road Lines (Blue) to expose boundary shifts, encroachments, and BWDB acquisitions.'}
                            </p>
                          </div>
                        </div>
                        <div className="w-text">
                          <a
                            href="#s3"
                            onClick={(e) => {
                              e.preventDefault();
                              onSelectServiceDetail('overlap');
                            }}
                            className="w-text-h"
                          >
                            <span className="w-text-value">
                              {isPropeller
                                ? 'EXPLORE DESIGN VS REALITY'
                                : 'EXPLORE CS VS RS OVERLAP'}
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="w-separator size_custom" style={{ height: '60px' }} />

                  {/* Row 2 of 3D Icons */}
                  <div
                    className="g-cols wpb_row via_grid cols_3 laptops-cols_inherit tablets-cols_inherit mobiles-cols_1 valign_top type_default stacking_default"
                    style={{ '--columns-gap': '3rem' } as React.CSSProperties}
                  >
                    <div className="wpb_column vc_column_container">
                      <div className="vc_column-inner">
                        <div className="w-image align_none">
                          <div className="w-image-h">
                            <img
                              decoding="async"
                              width="1254"
                              height="1254"
                              src="https://www.propelleraero.com/wp-content/uploads/2026/10/measure-progress-icon.png"
                              className="attachment-full size-full"
                              alt="Measure progress and quantities"
                              loading="lazy"
                            />
                          </div>
                        </div>
                        <div className="wpb_text_column">
                          <div className="wpb_wrapper">
                            <h3>
                              {isPropeller
                                ? 'Measure progress and quantities'
                                : '4. Retrieval of Deeds/Mouza Maps'}
                            </h3>
                            <p>
                              {isPropeller
                                ? 'Track completed work, remaining quantities, and stockpile volumes. Compare surveys over time to see what’s changed and plan what comes next.'
                                : 'Procure and digitize authoritative CS, SA, RS, and BS Mouza sheets alongside certified registry title deeds (Dalil) across all 64 districts.'}
                            </p>
                          </div>
                        </div>
                        <div className="w-text">
                          <a
                            href="#s4"
                            onClick={(e) => {
                              e.preventDefault();
                              onSelectServiceDetail('deeds-mouza-retrieval');
                            }}
                            className="w-text-h"
                          >
                            <span className="w-text-value">
                              {isPropeller
                                ? 'EXPLORE PROGRESS + PRODUCTIVITY TRACKING'
                                : 'EXPLORE DEEDS + MOUZA RETRIEVAL'}
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className="wpb_column vc_column_container">
                      <div className="vc_column-inner">
                        <div className="w-image align_none">
                          <div className="w-image-h">
                            <img
                              decoding="async"
                              width="1254"
                              height="1254"
                              src="https://www.propelleraero.com/wp-content/uploads/2026/10/keep-teams-connected-icon.png"
                              className="attachment-full size-full"
                              alt="Keep teams connected"
                              loading="lazy"
                            />
                          </div>
                        </div>
                        <div className="wpb_text_column">
                          <div className="wpb_wrapper">
                            <h3>
                              {isPropeller ? 'Keep teams connected' : '5. On-Site Demarcation'}
                            </h3>
                            <p>
                              {isPropeller
                                ? 'Give field and office teams a shared view of the site. Bring maps, photos, and updates together, with access to the information each team needs.'
                                : 'Translate CAD coordinates directly onto the ground with Total Station laser stakeout, physical corner pillar placement, and witnessed boundary handover.'}
                            </p>
                          </div>
                        </div>
                        {!isPropeller && (
                          <div className="w-text">
                            <a
                              href="#s5"
                              onClick={(e) => {
                                e.preventDefault();
                                onSelectServiceDetail('demarcation');
                              }}
                              className="w-text-h"
                            >
                              <span className="w-text-value">EXPLORE DEMARCATION</span>
                            </a>
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="wpb_column vc_column_container">
                      <div className="vc_column-inner">
                        <div className="w-image align_none">
                          <div className="w-image-h">
                            <img
                              decoding="async"
                              width="1254"
                              height="1254"
                              src="https://www.propelleraero.com/wp-content/uploads/2026/10/Confidence-report-icon.png"
                              className="attachment-full size-full"
                              alt="Report with confidence"
                              loading="lazy"
                            />
                          </div>
                        </div>
                        <div className="wpb_text_column">
                          <div className="wpb_wrapper">
                            <h3>
                              {isPropeller
                                ? 'Report with confidence'
                                : '6. Record Verification & Reports'}
                            </h3>
                            <p>
                              {isPropeller
                                ? 'Turn site measurements and visuals into clear reports. Keep stakeholders informed and build a record of completed work through closeout.'
                                : 'Audit Khatian shares, Mutation records, and Grantor-Recipient chains, delivered in a dual-signed Land Survey Report by Reg #1111210 & Reg #30827.'}
                            </p>
                          </div>
                        </div>
                        {!isPropeller && (
                          <div className="w-text">
                            <a
                              href="#s6"
                              onClick={(e) => {
                                e.preventDefault();
                                onOpenReportModal();
                              }}
                              className="w-text-h"
                            >
                              <span className="w-text-value">VIEW SAMPLE SURVEY REPORT</span>
                            </a>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 6: MEET OUR PRODUCTS (.home-integrate) */}
        <section
          id="products-section"
          className="l-section wpb_row home-integrate height_medium width_custom"
          style={{ '--site-content-width': '1410px' } as React.CSSProperties}
        >
          <div className="l-section-h i-cf">
            <div className="g-cols vc_row via_grid cols_1 laptops-cols_inherit tablets-cols_inherit mobiles-cols_1 valign_top type_default stacking_default">
              <div className="wpb_column vc_column_container">
                <div className="vc_column-inner">
                  <div className="w-text propeller-sub-title">
                    <span className="w-text-h">
                      <span className="w-text-value">
                        {isPropeller ? 'Our products' : 'Our equipment & deliverables'}
                      </span>
                    </span>
                  </div>
                  <div className="wpb_text_column propeller-section-title">
                    <div className="wpb_wrapper">
                      <h2>
                        {isPropeller
                          ? 'Meet Propeller’s products'
                          : 'Meet Express Digital Land Survey’s suite'}
                      </h2>
                    </div>
                  </div>

                  {/* Top 2-Col Core Product */}
                  <div
                    className="g-cols wpb_row via_grid cols_2 laptops-cols_inherit tablets-cols_inherit mobiles-cols_1 valign_middle type_default stacking_default"
                    style={{ '--columns-gap': '3rem' } as React.CSSProperties}
                  >
                    <div className="wpb_column vc_column_container">
                      <div className="vc_column-inner">
                        <div className="w-image us_custom_923f2bd6 has_aspect_ratio align_none">
                          <div className="w-image-h">
                            <img
                              decoding="async"
                              width="1350"
                              height="901"
                              src="https://www.propelleraero.com/wp-content/uploads/2025/08/3D-Drone-Mapping-Software-on-devices-propeller.jpg"
                              className="attachment-full size-full"
                              alt="Propeller side by side on 3 different devices"
                              loading="lazy"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="wpb_column vc_column_container">
                      <div className="vc_column-inner">
                        <div className="w-text yellow-pill">
                          <span className="w-text-h">
                            <span className="w-text-value">Core product</span>
                          </span>
                        </div>
                        <div className="wpb_text_column">
                          <div className="wpb_wrapper">
                            <h3>{isPropeller ? 'Propeller' : 'Express CAD & Land Survey Report'}</h3>
                            <p>
                              {isPropeller
                                ? 'A cloud-based hub to map, measure, and manage projects with your team.'
                                : 'A complete 1" = 64 Feet digital survey & cadastral mapping hub to measure, partition, superimpose CS/RS Mouza layers, and certify land ownership.'}
                            </p>
                          </div>
                        </div>
                        <div className="w-text propeller-text-link">
                          <a
                            href="#platform-page"
                            onClick={(e) => {
                              e.preventDefault();
                              onOpenReportModal();
                            }}
                            className="w-text-h"
                          >
                            <span className="w-text-value">
                              {isPropeller
                                ? 'Visit Platform Page'
                                : 'Open Interactive Report (Plot 308)'}
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="w-separator size_custom" style={{ height: '60px' }} id="ud19" />

                  {/* Bottom 3-Col Add-ons */}
                  <div
                    className="g-cols wpb_row via_grid cols_3 laptops-cols_inherit tablets-cols_inherit mobiles-cols_1 valign_top type_default stacking_default"
                    style={{ '--columns-gap': '3rem' } as React.CSSProperties}
                  >
                    <div className="wpb_column vc_column_container">
                      <div className="vc_column-inner">
                        <div className="w-image us_custom_923f2bd6 has_aspect_ratio align_none">
                          <div className="w-image-h">
                            <img
                              decoding="async"
                              width="900"
                              height="601"
                              src="https://www.propelleraero.com/wp-content/uploads/2025/08/DJI-Matrice-4-Enterprise-drone-for-mapping-flying.jpg"
                              className="attachment-full size-full"
                              alt="DJI M4E flying in the sky"
                              loading="lazy"
                            />
                          </div>
                        </div>
                        <div className="w-text grey-pill">
                          <span className="w-text-h">
                            <span className="w-text-value">
                              {isPropeller ? 'Add-on' : 'Service 01 & 04'}
                            </span>
                          </span>
                        </div>
                        <div className="wpb_text_column">
                          <div className="wpb_wrapper">
                            <h3>
                              {isPropeller ? 'Survey processing' : 'Digital Survey & Pantograph'}
                            </h3>
                            <p>
                              {isPropeller
                                ? 'A drone photogrammetry and lidar processing pipeline for fast, hassle-free results.'
                                : 'Total Station electro-optical field capture paired with 1" = 64 Feet diagonal Gunia & Pantograph scaling.'}
                            </p>
                          </div>
                        </div>
                        <div className="w-text propeller-text-link">
                          <a
                            href="#processing"
                            onClick={(e) => {
                              e.preventDefault();
                              onSelectServiceDetail('pantograph');
                            }}
                            className="w-text-h"
                          >
                            <span className="w-text-value">
                              {isPropeller ? 'Dig into Processing' : 'Dig into Pantograph & Survey'}
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className="wpb_column vc_column_container">
                      <div className="vc_column-inner">
                        <div className="w-image us_custom_923f2bd6 has_aspect_ratio align_none">
                          <div className="w-image-h">
                            <img
                              decoding="async"
                              width="900"
                              height="601"
                              src="https://www.propelleraero.com/wp-content/uploads/2025/08/dirtmate-falling-pile-dirt-black.jpg"
                              className="attachment-full size-full"
                              alt="Dirtmate falling into a pile of dirt"
                              loading="lazy"
                            />
                          </div>
                        </div>
                        <div className="w-text grey-pill">
                          <span className="w-text-h">
                            <span className="w-text-value">
                              {isPropeller ? 'Add-on' : 'Service 05'}
                            </span>
                          </span>
                        </div>
                        <div className="wpb_text_column">
                          <div className="wpb_wrapper">
                            <h3>{isPropeller ? 'DirtMate' : 'Boundary Demarcation'}</h3>
                            <p>
                              {isPropeller
                                ? 'A high-accuracy GNSS receiver that connects your fieldwork to Propeller. Capture points, check grade, and stake out designs.'
                                : 'High-accuracy RTK GNSS & Total Station stakeout that connects your deeds to the ground. Stake out corners and set boundary pillars.'}
                            </p>
                          </div>
                        </div>
                        <div className="w-text propeller-text-link">
                          <a
                            href="#dirtmate"
                            onClick={(e) => {
                              e.preventDefault();
                              onSelectServiceDetail('demarcation');
                            }}
                            className="w-text-h"
                          >
                            <span className="w-text-value">
                              {isPropeller ? 'Check out Dirtmate' : 'Check out Demarcation'}
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className="wpb_column vc_column_container">
                      <div className="vc_column-inner">
                        <div className="w-image us_custom_923f2bd6 has_aspect_ratio align_none">
                          <div className="w-image-h">
                            <img
                              decoding="async"
                              width="900"
                              height="601"
                              src="https://www.propelleraero.com/wp-content/uploads/2025/08/stacked-ground-control-points-aeropoints.jpg"
                              className="attachment-full size-full"
                              alt="Aeropoints stacked in a star"
                              loading="lazy"
                            />
                          </div>
                        </div>
                        <div className="w-text grey-pill">
                          <span className="w-text-h">
                            <span className="w-text-value">
                              {isPropeller ? 'Add-on' : 'Service 03, 06 & 07'}
                            </span>
                          </span>
                        </div>
                        <div className="wpb_text_column">
                          <div className="wpb_wrapper">
                            <h3>
                              {isPropeller
                                ? 'AeroPoints'
                                : 'Deeds, Mouza Overlap & Verification'}
                            </h3>
                            <p>
                              {isPropeller
                                ? 'The only smart ground control points, making survey-grade data simple.'
                                : 'CS/SA/RS/BS Mouza retrieval, tri-color boundary overlap analysis, and forensic Grantor-Recipient record verification.'}
                            </p>
                          </div>
                        </div>
                        <div className="w-text propeller-text-link">
                          <a
                            href="#aeropoints"
                            onClick={(e) => {
                              e.preventDefault();
                              onSelectServiceDetail('record-verification');
                            }}
                            className="w-text-h"
                          >
                            <span className="w-text-value">
                              {isPropeller
                                ? 'learn About Aeropoints'
                                : 'Learn About Overlap & Records'}
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 7: INDUSTRIES WE SERVE (.home-industries) */}
        <section
          id="industries-section"
          className="l-section wpb_row us_custom_4fb9e5a3 home-industries height_medium width_custom"
          style={{ '--site-content-width': '1410px' } as React.CSSProperties}
        >
          <div className="l-section-h i-cf">
            <div className="g-cols vc_row via_grid cols_1 laptops-cols_inherit tablets-cols_inherit mobiles-cols_1 valign_top type_default stacking_default">
              <div className="wpb_column vc_column_container">
                <div className="vc_column-inner">
                  <div className="wpb_text_column propeller-section-title">
                    <div className="wpb_wrapper">
                      <h2>{isPropeller ? 'Industries we serve' : 'Sectors & land projects we serve'}</h2>
                    </div>
                  </div>

                  {/* Row 1 of Industries (2 Cols) */}
                  <div
                    className="g-cols wpb_row via_grid cols_2 laptops-cols_inherit tablets-cols_inherit mobiles-cols_1 valign_top type_default stacking_default"
                    style={{ '--columns-gap': '3rem' } as React.CSSProperties}
                  >
                    <div className="wpb_column vc_column_container">
                      <div className="vc_column-inner">
                        <h3 className="w-text">
                          <span className="w-text-h">
                            <span className="w-text-value">
                              {isPropeller
                                ? 'Construction'
                                : 'Residential & Commercial Construction'}
                            </span>
                          </span>
                        </h3>
                        <div className="w-image us_custom_923f2bd6 has_aspect_ratio align_none">
                          <div className="w-image-h">
                            <img
                              decoding="async"
                              width="1350"
                              height="901"
                              src="https://www.propelleraero.com/wp-content/uploads/2025/08/3D-Drone-Mapping-Software-three-construction-workers-inspecting-site.jpg"
                              className="attachment-full size-full"
                              alt="three construction workers inspecting site"
                              loading="lazy"
                            />
                          </div>
                        </div>
                        <div className="w-text propeller-text-link">
                          <a
                            href="#construction"
                            onClick={(e) => {
                              e.preventDefault();
                              onOpenDemoModal('Digital Survey');
                            }}
                            className="w-text-h"
                          >
                            <span className="w-text-value">Learn More</span>
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className="wpb_column vc_column_container">
                      <div className="vc_column-inner">
                        <h3 className="w-text">
                          <span className="w-text-h">
                            <span className="w-text-value">
                              {isPropeller ? 'Mining' : 'Mouza Cadastral & Sub-Parcel Partition'}
                            </span>
                          </span>
                        </h3>
                        <div className="w-image us_custom_923f2bd6 has_aspect_ratio align_none">
                          <div className="w-image-h">
                            <img
                              decoding="async"
                              width="1350"
                              height="901"
                              src="https://www.propelleraero.com/wp-content/uploads/2025/08/3D-Drone-Mapping-Software-large-open-pit-mine-aerial-view.jpg"
                              className="attachment-full size-full"
                              alt="large open pit mine aerial view"
                              loading="lazy"
                            />
                          </div>
                        </div>
                        <div className="w-text propeller-text-link">
                          <a
                            href="#mining"
                            onClick={(e) => {
                              e.preventDefault();
                              onOpenReportModal();
                            }}
                            className="w-text-h"
                          >
                            <span className="w-text-value">Learn More</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="w-separator size_custom" style={{ height: '60px' }} id="a87f" />

                  {/* Row 2 of Industries (2 Cols) */}
                  <div
                    className="g-cols wpb_row via_grid cols_2 laptops-cols_inherit tablets-cols_inherit mobiles-cols_1 valign_top type_default stacking_default"
                    style={{ '--columns-gap': '3rem' } as React.CSSProperties}
                  >
                    <div className="wpb_column vc_column_container">
                      <div className="vc_column-inner">
                        <h3 className="w-text">
                          <span className="w-text-h">
                            <span className="w-text-value">
                              {isPropeller ? 'Aggregates' : 'Industrial Zones & Earthworks'}
                            </span>
                          </span>
                        </h3>
                        <div className="w-image us_custom_923f2bd6 has_aspect_ratio align_none">
                          <div className="w-image-h">
                            <img
                              decoding="async"
                              width="1350"
                              height="901"
                              src="https://www.propelleraero.com/wp-content/uploads/2025/08/3D-Drone-Mapping-Software-gravel-and-rock-crushing-plant-dusty-environment.jpg"
                              className="attachment-full size-full"
                              alt="gravel and rock crushing plant dusty environment"
                              loading="lazy"
                            />
                          </div>
                        </div>
                        <div className="w-text propeller-text-link">
                          <a
                            href="#aggregates"
                            onClick={(e) => {
                              e.preventDefault();
                              onOpenDemoModal('Demarcation');
                            }}
                            className="w-text-h"
                          >
                            <span className="w-text-value">Learn More</span>
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className="wpb_column vc_column_container">
                      <div className="vc_column-inner">
                        <h3 className="w-text">
                          <span className="w-text-h">
                            <span className="w-text-value">
                              {isPropeller
                                ? 'Waste management'
                                : 'BWDB Acquisitions & Public Corridors'}
                            </span>
                          </span>
                        </h3>
                        <div className="w-image us_custom_923f2bd6 has_aspect_ratio align_none">
                          <div className="w-image-h">
                            <img
                              decoding="async"
                              width="1350"
                              height="900"
                              src="https://www.propelleraero.com/wp-content/uploads/2025/11/Waste-management-site.jpg"
                              className="attachment-full size-full"
                              alt="Waste management site"
                              loading="lazy"
                            />
                          </div>
                        </div>
                        <div className="w-text propeller-text-link">
                          <a
                            href="#waste"
                            onClick={(e) => {
                              e.preventDefault();
                              onOpenDemoModal('Overlap');
                            }}
                            className="w-text-h"
                          >
                            <span className="w-text-value">Learn More</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 8: TAKE PROPELLER FOR A SPIN (.solutions-cta.platform-sub) */}
        <section className="l-section wpb_row us_custom_0d15be52 solutions-cta platform-sub height_medium">
          <div className="l-section-h i-cf">
            <div className="g-cols vc_row via_grid cols_1 laptops-cols_inherit tablets-cols_inherit mobiles-cols_1 valign_top type_default stacking_default">
              <div className="wpb_column vc_column_container">
                <div className="vc_column-inner">
                  <div className="wpb_text_column title-section">
                    <div className="wpb_wrapper">
                      <h2>
                        {isPropeller
                          ? 'Take Propeller for a spin'
                          : 'Inspect our certified Land Survey Report'}
                      </h2>
                      <p>
                        {isPropeller
                          ? 'Get to know the map and turn your project into insights with our 14-day free trial.'
                          : 'Explore our real 11/10/2026 CAD Survey Report for Mouja Parain, Thana Rupgonj, District Narayanganj (CS/SA Plot 161 • RS Plot 308) or book a field survey today.'}
                      </p>
                    </div>
                  </div>
                  <div className="w-btn-wrapper align_center">
                    <a
                      className="w-btn us-btn-style_5"
                      href="#try-free"
                      onClick={(e) => {
                        e.preventDefault();
                        onOpenReportModal();
                      }}
                    >
                      <span className="w-btn-label">
                        {isPropeller ? 'TRY FOR FREE' : 'OPEN SURVEY REPORT'}
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 9: 3-COLUMN YELLOW ICONBOXES (.platform-cta) */}
        <section className="l-section wpb_row us_custom_f0aa17ea platform-cta height_medium">
          <div className="l-section-h i-cf">
            <div className="g-cols vc_row via_grid cols_3 laptops-cols_inherit tablets-cols_inherit mobiles-cols_1 valign_top type_default stacking_default">
              {/* Box 1 */}
              <div className="wpb_column vc_column_container">
                <div className="vc_column-inner">
                  <div className="w-iconbox iconpos_top style_default color_primary align_left icontype_img">
                    <div className="w-iconbox-icon" style={{ fontSize: '44px' }}>
                      {/* Exact SVG 1 from propelleraero.com */}
                      <svg fill="none" height="100" viewBox="0 0 100 100" width="100" xmlns="http://www.w3.org/2000/svg">
                        <rect fill="#fd0" height="100" rx="16" width="100" />
                        <path
                          d="m28.3327 33.7493h-5.4167v37.9167c0 2.9792 2.4375 5.4167 5.4167 5.4167h37.9167v-5.4167h-37.9167zm43.3333-10.8333h-32.5c-2.9792 0-5.4167 2.4375-5.4167 5.4167v32.5c0 2.9792 2.4375 5.4167 5.4167 5.4167h32.5c2.9792 0 5.4167-2.4375 5.4167-5.4167v-32.5c0-2.9792-2.4375-5.4167-5.4167-5.4167zm0 37.9167h-32.5v-32.5h32.5zm-27.0833-18.9584h21.6667v5.4167h-21.6667zm0 8.1251h10.8333v5.4166h-10.8333zm0-16.2501h21.6667v5.4167h-21.6667z"
                          fill="#08111d"
                        />
                      </svg>
                    </div>
                    <div className="w-iconbox-meta">
                      <div className="w-iconbox-title">
                        {isPropeller ? 'Dig deeper' : 'Inspect Land Records'}
                      </div>
                      <div className="w-iconbox-text">
                        <p>
                          {isPropeller
                            ? 'Tap into a library of educational resources.'
                            : 'Review CS/SA Plot 161, RS Plot 308, and Grantor-Recipient schedules.'}
                        </p>
                        <p>
                          <a
                            href="#learn"
                            onClick={(e) => {
                              e.preventDefault();
                              onOpenReportModal();
                            }}
                          >
                            {isPropeller ? 'START LEARNING' : 'VIEW REPORT SHEET'}
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Box 2 */}
              <div className="wpb_column vc_column_container">
                <div className="vc_column-inner">
                  <div className="w-iconbox iconpos_top style_default color_primary align_left icontype_img">
                    <div className="w-iconbox-icon" style={{ fontSize: '44px' }}>
                      {/* Exact SVG 2 from propelleraero.com */}
                      <svg fill="none" height="100" viewBox="0 0 100 100" width="100" xmlns="http://www.w3.org/2000/svg">
                        <clipPath id="a">
                          <path d="m17.5 17.5h65v65h-65z" />
                        </clipPath>
                        <rect fill="#fd0" height="100" rx="16" width="100" />
                        <g clipPath="url(#a)">
                          <path
                            d="m28.3333 33.7487h48.75v-5.4167h-48.75c-2.9791 0-5.4166 2.4375-5.4166 5.4167v29.7917h-5.4167v8.125h37.9167v-8.125h-27.0834zm51.4584 5.4167h-16.25c-1.4896 0-2.7084 1.2187-2.7084 2.7083v27.0833c0 1.4896 1.2188 2.7084 2.7084 2.7084h16.25c1.4895 0 2.7083-1.2188 2.7083-2.7084v-27.0833c0-1.4896-1.2188-2.7083-2.7083-2.7083zm-2.7084 24.375h-10.8333v-18.9584h10.8333z"
                            fill="#08111d"
                          />
                        </g>
                      </svg>
                    </div>
                    <div className="w-iconbox-meta">
                      <div className="w-iconbox-title">
                        {isPropeller ? 'Start your free trial' : '7 Core Survey Services'}
                      </div>
                      <div className="w-iconbox-text">
                        <p>
                          {isPropeller
                            ? 'Try Propeller for free. No credit card required.'
                            : 'Digital Survey, Map Prep, Deeds/Mouza, Pantograph, Demarcation & Overlap.'}
                        </p>
                        <p>
                          <a
                            href="#trial"
                            onClick={(e) => {
                              e.preventDefault();
                              onSelectServiceDetail('digital-survey');
                            }}
                          >
                            {isPropeller ? 'TRY FOR FREE' : 'EXPLORE ALL 7 SERVICES'}
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Box 3 */}
              <div className="wpb_column vc_column_container">
                <div className="vc_column-inner">
                  <div className="w-iconbox iconpos_top style_default color_primary align_left icontype_img">
                    <div className="w-iconbox-icon" style={{ fontSize: '44px' }}>
                      {/* Exact SVG 3 from propelleraero.com */}
                      <svg fill="none" height="100" viewBox="0 0 100 100" width="100" xmlns="http://www.w3.org/2000/svg">
                        <rect fill="#fd0" height="100" rx="16" width="100" />
                        <g fill="#08111d">
                          <path d="m74.3744 50.5968c0-14.8687-11.5376-24.9708-24.375-24.9708-12.7021 0-24.3751 9.8854-24.3751 25.1333-1.625.9208-2.7083 2.6542-2.7083 4.6583v5.4167c0 2.9792 2.4375 5.4167 5.4167 5.4167h2.7083v-16.5209c0-10.4812 8.4771-18.9583 18.9584-18.9583 10.4812 0 18.9583 8.4771 18.9583 18.9583v19.2292h-21.6667v5.4167h21.6667c2.9792 0 5.4167-2.4375 5.4167-5.4167v-3.3042c1.5979-.8395 2.7083-2.4916 2.7083-4.4416v-6.2292c0-1.8958-1.1104-3.5479-2.7083-4.3875z" />
                          <path d="m41.8743 55.4176c1.4958 0 2.7084-1.2125 2.7084-2.7083s-1.2126-2.7083-2.7084-2.7083c-1.4957 0-2.7083 1.2125-2.7083 2.7083s1.2126 2.7083 2.7083 2.7083z" />
                          <path d="m58.1244 55.4176c1.4957 0 2.7083-1.2125 2.7083-2.7083s-1.2126-2.7083-2.7083-2.7083c-1.4958 0-2.7084 1.2125-2.7084 2.7083s1.2126 2.7083 2.7084 2.7083z" />
                          <path d="m66.2494 47.3739c-1.3-7.7188-8.0167-13.6229-16.1146-13.6229-8.2063 0-17.0355 6.7979-16.3313 17.4687 6.6896-2.7354 11.7271-8.6937 13.1625-15.9521 3.5479 7.123 10.8334 12.025 19.2834 12.1063z" />
                        </g>
                      </svg>
                    </div>
                    <div className="w-iconbox-meta">
                      <div className="w-iconbox-title">
                        {isPropeller ? 'Talk to sales' : 'Talk to Surveyor Faysal'}
                      </div>
                      <div className="w-iconbox-text">
                        <p>
                          {isPropeller
                            ? 'Book a personalized demo to see the platform in action.'
                            : 'Call 01754-246123 / 01521-715896 (Reg No- 1111210, Cert No- 19570/22).'}
                        </p>
                        <p>
                          <a
                            href="#book-demo"
                            onClick={(e) => {
                              e.preventDefault();
                              onOpenDemoModal();
                            }}
                          >
                            {isPropeller ? 'BOOK A DEMO' : 'BOOK A SURVEY'}
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};
