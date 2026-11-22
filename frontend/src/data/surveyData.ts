export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  shortTitle: string;
  tagline: string;
  description: string;
  badge: string;
  accentColor: string;
  accuracySpec: string;
  turnaround: string;
  deliverables: string[];
  workflowSteps: { title: string; detail: string }[];
  metrics: { label: string; value: string }[];
  highlights: string[];
}

export interface PlotParcel {
  id: string;
  plotNo: string;
  csPlotNo: string;
  title: string;
  grantor?: string;
  recipient?: string;
  decimals: number;
  sqFeet: number;
  katha: number;
  dimensions: {
    north: string;
    south: string;
    east: string;
    west: string;
  };
  category: 'target-subparcel' | 'neighbor-plot' | 'bwdb-corridor';
  status: string;
  color: string;
  notes: string;
}

export const COMPANY_INFO = {
  bismillahCode: '"786"',
  name: 'EXPRESS Digital Land Survey',
  shortName: 'EXPRESS',
  tagline: 'The Single Source of Truth for Digital Land Surveying, CAD Mapping & Cadastral Intelligence',
  scaleStandard: '1" = 64 Feet',
  email: 'faysalahamed2000s@gmail.com',
  primaryPhones: ['01754-246123', '01521-715896'],
  whatsappNumber: '8801754246123',
  featuredReport: {
    reportId: 'EDLS-2026-NRG-308',
    date: '11/10/2026',
    district: 'Narayanganj',
    thana: 'Rupgonj',
    mouja: 'Parain',
    csSaPlot: '161',
    rsPlot: '308',
    scale: '1" = 64 Feet',
    totalInspectedDecimals: 33.64,
  },
  surveyors: [
    {
      id: 'faysal',
      name: 'Faysal Ahamad Shanto',
      role: 'Lead Digital Land Surveyor & GIS Specialist',
      regNo: '1111210',
      certificateNo: '19570/22',
      bsAsMemberNo: '898/26',
      phones: ['01754-246123', '01521-715896'],
      whatsapp: true,
      email: 'faysalahamed2000s@gmail.com',
      badge: 'BS-AS Certified Lead Surveyor',
      specialization: 'Total Station Survey, Multi-Era CS/RS Overlap, CAD Drafting & Deed Auditing',
    },
    {
      id: 'edris',
      name: 'Mawlana MD Edris Ali',
      role: 'Senior Cadastral & Boundary Demarcation Surveyor',
      regNo: '30827',
      certificateNo: 'Govt. Registered Amin / Surveyor',
      bsAsMemberNo: 'Senior Panel',
      phones: ['01913-553545', '01580-594467'],
      whatsapp: false,
      email: 'faysalahamed2000s@gmail.com',
      badge: 'Reg No - 30827',
      specialization: 'Mouza Map Verification, Pantograph Scaling, Field Demarcation & Dispute Resolution',
    },
  ],
};

export const CORE_SERVICES: ServiceItem[] = [
  {
    id: 'digital-survey',
    number: '01',
    title: 'Digital Survey',
    shortTitle: 'Digital Survey',
    tagline: 'Millimeter-accurate field data capture powered by Total Station & RTK GNSS.',
    description:
      'Replace manual chain errors with electro-optical Total Station and Dual-Frequency RTK GNSS field surveys. We capture every boundary vertex, road edge, water body, and elevation point directly into georeferenced coordinates.',
    badge: 'FIELD HARDWARE + CLOUD ENGINE',
    accentColor: '#0066FF',
    accuracySpec: '±2mm + 2ppm Angular/Distance',
    turnaround: 'Same-Day Field Capture',
    deliverables: [
      'Raw Total Station coordinate points (CSV / DXF / LandXML)',
      'Georeferenced boundary perimeter & internal subdivision polygon',
      'On-site area computation in Decimal, Katha, Bigha & Sq. Feet',
      'Signed Survey Certificate by Reg. No 1111210 & 30827',
    ],
    workflowSteps: [
      { title: 'Instrument Stationing', detail: 'Setup of calibrated Total Station over verified Mouza traverse control points.' },
      { title: 'Laser Prism Sighting', detail: 'High-density shot collection along existing walls, fences, roads, and corners.' },
      { title: 'Real-Time Area Solve', detail: 'Instant field closure check and vector export to CAD engine.' },
    ],
    metrics: [
      { label: 'Distance Precision', value: '±2.0 mm' },
      { label: 'Field Speed', value: '5x Faster' },
      { label: 'Closure Accuracy', value: '99.98%' },
    ],
    highlights: [
      'Electronic Total Station & Prism Pole measurement',
      'Topographic & boundary feature capture in complex terrains',
      'Zero cumulative chain-sag or tape-stretch error',
    ],
  },
  {
    id: 'map-preparation',
    number: '02',
    title: 'Map Preparation',
    shortTitle: 'Map Preparation',
    tagline: 'Publication-grade CAD land survey reports engineered to 1" = 64 Feet & custom scales.',
    description:
      'Every field survey is transformed into a crystal-clear, color-coded CAD Survey Report featuring exact side lengths in feet and inches, internal parcel areas in Decimals, Grantor-Recipient annotations, Land Details tables, and Design Overview legends.',
    badge: 'CAD / GIS MAP ENGINE',
    accentColor: '#10B981',
    accuracySpec: 'Scale 1" = 64 Feet (16" = 1 Mile)',
    turnaround: '24-Hour Digital & Print Delivery',
    deliverables: [
      'Color-coded Land Survey Report (PDF, AutoCAD DWG & High-Res Print)',
      'Sub-parcel breakdown with Grantor & Recipient ownership blocks',
      'Standardized Land Details schedule (District, Thana, Mouja, CS/SA/RS Plot)',
      'Design Overview legend (CS Line, RS Line, Aqueduct/Road Line)',
    ],
    workflowSteps: [
      { title: 'CAD Vector Drafting', detail: 'Plotting exact bearings and distances from field coordinates at 1" = 64 Feet.' },
      { title: 'Parcel Partitioning', detail: 'Sub-dividing plots by deed ownership (e.g., 8.80, 6.00, 2.34, 7.20 Decimals).' },
      { title: 'Certification & Stamp', detail: 'Dual-surveyor signature verification with official registration numbers.' },
    ],
    metrics: [
      { label: 'Standard Scale', value: '1" = 64\'' },
      { label: 'Vector Formats', value: 'DWG / PDF' },
      { label: 'Dimension Unit', value: 'Feet & Inch' },
    ],
    highlights: [
      'Exact side-by-side chord dimensions (e.g., 52\'-10", 37\'-10", 34\'-6")',
      'Dedicated Design Overview legend for legal clarity',
      'Ready for bank mortgages, mutation, civil courts, and architectural design',
    ],
  },
  {
    id: 'deeds-mouza-retrieval',
    number: '03',
    title: 'Retrieval of Deeds/Mouza Maps',
    shortTitle: 'Deeds & Mouza Maps',
    tagline: 'Instant access to certified CS, SA, RS & BS Mouza sheets and historical title deeds.',
    description:
      'No land survey is valid without authoritative baseline records. We retrieve, scan, and vectorize official Mouza maps (CS, SA, RS, BS/City Jorip) and certified registry deeds so your ground reality is anchored to legal records.',
    badge: 'ARCHIVE & REGISTRY RETRIEVAL',
    accentColor: '#00D4FF',
    accuracySpec: '600 DPI Archival Scan + Vectorization',
    turnaround: '24–48 Hours Retrieval',
    deliverables: [
      'High-resolution CS, SA, RS & BS Mouza sheet extracts',
      'Certified Title Deed (Dalil) & Bia-Deed historical chain retrieval',
      'Mouza Sheet Index verification by District, Thana & JL Number',
      'Digitized CAD overlay ready for field verification',
    ],
    workflowSteps: [
      { title: 'Mouza & Plot Indexing', detail: 'Locating exact sheet number, JL number, and CS/SA/RS plot identifiers.' },
      { title: 'Archive Procurement', detail: 'Retrieving official maps and deed records from settlement & registry archives.' },
      { title: 'High-Precision Vectorizing', detail: 'Converting paper Mouza plots into distortion-corrected CAD vectors.' },
    ],
    metrics: [
      { label: 'Survey Eras', value: 'CS/SA/RS/BS' },
      { label: 'Scan Fidelity', value: '600 DPI' },
      { label: 'Coverage', value: 'All 64 Districts' },
    ],
    highlights: [
      'Complete historical trace from CS/SA Plot 161 to RS Plot 308',
      'Eliminates missing-map delays before field deployment',
      'Detects sheet-edge distortions and paper shrinkage automatically',
    ],
  },
  {
    id: 'pantograph',
    number: '04',
    title: 'Pantograph',
    shortTitle: 'Pantograph',
    tagline: 'Precision multi-scale map enlargement, reduction, and proportional plot transposition.',
    description:
      'Cadastral maps across different eras use varying scales (16" = 1 Mile, 32" = 1 Mile, 64" = 1 Mile). Our mechanical and digital Pantograph system scales and transposes plots with zero geometric distortion.',
    badge: 'PRECISION SCALE TRANSPOSITION',
    accentColor: '#F59E0B',
    accuracySpec: '0.01% Scale Ratio Fidelity',
    turnaround: 'Instant Digital / Mechanical Output',
    deliverables: [
      'Proportional scale conversion between 1"=64\', 1"=32\', and 1"=16\'',
      'Enlarged sub-plot working blueprints for dense multi-owner plots',
      'Harmonized CS-to-RS scale matching sheets',
      'Calibrated scale grid chart (20-40-60-80 / 10-20-30-40-50)',
    ],
    workflowSteps: [
      { title: 'Scale Calibration', detail: 'Establishing reference control grid (e.g., 1" = 64 Feet / Gunia & Link ratio).' },
      { title: 'Pantograph Tracing', detail: 'Synchronized mechanical and parametric CAD scaling of plot vertices.' },
      { title: 'Area Invariance Check', detail: 'Verifying that total Decimal area remains mathematically identical post-scaling.' },
    ],
    metrics: [
      { label: 'Base Ratio', value: '1" = 64 Ft' },
      { label: 'Zoom Ratios', value: '1x to 16x' },
      { label: 'Distortion', value: '< 0.01%' },
    ],
    highlights: [
      'Ideal for small high-value parcels (2.34 to 8.80 Decimals)',
      'Bridges legacy Gunia/Link measurements with modern Feet/Inch CAD plans',
      'Includes calibrated scale bar on every printed report',
    ],
  },
  {
    id: 'demarcation',
    number: '05',
    title: 'Demarcation',
    shortTitle: 'Demarcation',
    tagline: 'Pinpoint on-site corner staking, boundary pillar installation & peaceful possession.',
    description:
      'We take the CAD drawing back to the earth. Using Total Station stakeout mode, our surveyors physically mark every corner, road setback, and internal partition on the ground with concrete pillars or survey pegs.',
    badge: 'ON-SITE PHYSICAL STAKEOUT',
    accentColor: '#84CC16',
    accuracySpec: 'Sub-Centimeter Corner Stakeout',
    turnaround: 'Scheduled On-Site Execution',
    deliverables: [
      'Physical corner pillar / peg placement at exact deed coordinates',
      'Internal partition demarcation between multiple buyers/heirs',
      'Road & public corridor setback marking (e.g., BWDB & Social Roads)',
      'Jointly witnessed Demarcation Handover Report',
    ],
    workflowSteps: [
      { title: 'Control Back-Sighting', detail: 'Locking Total Station onto permanent reference points around the Mouja.' },
      { title: 'Guided Prism Stakeout', detail: 'Directing the prism holder to the exact millimeter coordinate of each corner.' },
      { title: 'Pillar Setting & Sign-Off', detail: 'Installing permanent markers and recording witness verification.' },
    ],
    metrics: [
      { label: 'Stakeout Error', value: '< 5 mm' },
      { label: 'Dispute Resolution', value: '99.4%' },
      { label: 'Verification', value: 'Dual Surveyor' },
    ],
    highlights: [
      'Prevents boundary wall encroachments before construction starts',
      'Separates individual shares cleanly (e.g., Grantor to Recipient partitions)',
      'Respected by local authorities, neighbors, and community mediators',
    ],
  },
  {
    id: 'overlap',
    number: '06',
    title: 'Overlap',
    shortTitle: 'Overlap',
    tagline: 'Multi-era CS, RS & Aqueduct/Road superimposition to expose hidden boundary shifts.',
    description:
      'Our signature Propeller-style conformance workflow: we superimpose CS Lines (Green), RS Lines (Magenta), and Aqueduct/Road Lines (Blue) on a single coordinate canvas to reveal exact overlaps, encroachments, and government acquisitions.',
    badge: 'MULTI-ERA LAYER SUPERIMPOSITION',
    accentColor: '#D946EF',
    accuracySpec: '3-Layer Color-Coded CAD Conformance',
    turnaround: '24-Hour Conformance Report',
    deliverables: [
      'Tri-Color Superimposition Map (CS Green, RS Magenta, Road/Aqueduct Blue)',
      'Acquisition impact calculation (e.g., BWDB land acquisition & Brick Roads)',
      'Plot-to-Plot shift vectors between CS/SA Plot 161 and RS Plot 308',
      'Encroachment & net available land area certification',
    ],
    workflowSteps: [
      { title: 'Common Tie-Point Alignment', detail: 'Anchoring CS and RS Mouza sheets using invariant tri-junctions and landmarks.' },
      { title: 'Layer Superimposition', detail: 'Overlaying CS Line (Green), RS Line (Magenta), and Road/BWDB corridors (Blue).' },
      { title: 'Conflict Quantification', detail: 'Calculating exact Decimal loss/gain per sub-parcel and road corridor.' },
    ],
    metrics: [
      { label: 'Active Layers', value: 'CS + RS + Road' },
      { label: 'Color Coding', value: '3-Channel CAD' },
      { label: 'Clarity Rating', value: '100% Visual' },
    ],
    highlights: [
      'Directly visualizes BWDB land acquisitions & social movement brick roads',
      'Shows why CS/SA Plot 161 evolved into RS Plot 308 and adjacent plots',
      'Essential before purchasing land near canals, highways, or embankments',
    ],
  },
  {
    id: 'record-verification',
    number: '07',
    title: 'Record Verification',
    shortTitle: 'Record Verification',
    tagline: 'Forensic auditing of Khatian, Mutation, Grantor-Recipient chains & land titles.',
    description:
      'Physical possession means nothing if the paper chain is broken. We cross-verify CS, SA, RS, and BS Khatians, mutation (Namjari) records, Grantor-Recipient transfers, and remaining Decimal balances before you invest.',
    badge: 'LEGAL & CADASTRAL AUDIT',
    accentColor: '#38BDF8',
    accuracySpec: '100% Grantor-Recipient Chain Audit',
    turnaround: '48-Hour Verification Dossier',
    deliverables: [
      'Grantor-to-Recipient ownership allotment verification per sub-plot',
      'CS / SA / RS / BS Khatian & Plot number cross-matching table',
      'Detection of excess sale (Grantor selling more Decimals than owned)',
      'Government acquisition & vested property (Arpita/Khas) clearance check',
    ],
    workflowSteps: [
      { title: 'Khatian & Deed Audit', detail: 'Reviewing CS/SA/RS Khatian shares against registered transfer deeds.' },
      { title: 'Sub-Parcel Accounting', detail: 'Mapping each Grantor-Recipient deed (e.g., 8.80, 6.00, 7.20 Decimals) onto the plot.' },
      { title: 'Clearance Certification', detail: 'Issuing a verified Survey & Record Audit Report signed by certified surveyors.' },
    ],
    metrics: [
      { label: 'Chain Depth', value: 'CS to BS' },
      { label: 'Fraud Prevention', value: '100% Audited' },
      { label: 'Certified By', value: 'Reg #1111210' },
    ],
    highlights: [
      'Maps exact Grantor & Recipient names directly inside the survey polygon',
      'Identifies BWDB or public road acquisitions affecting net land area',
      'Protects buyers, developers, and banks from disputed or double-sold plots',
    ],
  },
];

export const REPORT_PARCELS: PlotParcel[] = [
  {
    id: 'plot-308-a',
    plotNo: 'RS 308 (Part A)',
    csPlotNo: 'CS/SA 161',
    title: 'Plot 308 — North Sub-Parcel (8.80 Decimal)',
    grantor: 'Md. Shamim and others',
    recipient: 'Zafir Ahmed',
    decimals: 8.80,
    sqFeet: 3833.28,
    katha: 5.32,
    dimensions: {
      north: "75'-0\"",
      south: "70'-0\"",
      east: "52'-10\"",
      west: "53'-0\"",
    },
    category: 'target-subparcel',
    status: 'Verified & Demarcated',
    color: '#D946EF',
    notes: 'Directly south of BWDB acquired corridor. Verified under RS Plot 308 / CS-SA Plot 161.',
  },
  {
    id: 'plot-308-b',
    plotNo: 'RS 308 (Part B)',
    csPlotNo: 'CS/SA 161',
    title: 'Plot 308 — Upper-Mid Sub-Parcel (6.00 Decimal)',
    grantor: 'Yakub Ali and others',
    recipient: 'Jafir Ahmed',
    decimals: 6.00,
    sqFeet: 2613.60,
    katha: 3.63,
    dimensions: {
      north: "70'-0\"",
      south: "68'-0\"",
      east: "38'-0\"",
      west: "37'-10\"",
    },
    category: 'target-subparcel',
    status: 'Verified & Demarcated',
    color: '#A855F7',
    notes: 'Contiguous mid-northern allotment inside RS Plot 308 with verified CS/RS boundary alignment.',
  },
  {
    id: 'plot-308-c',
    plotNo: 'RS 308 (Part C)',
    csPlotNo: 'CS/SA 161',
    title: 'Plot 308 — Central Strip (2.34 Decimal)',
    grantor: 'Recorded Co-Sharers',
    recipient: 'Jafir Ahmed (Allocated Strip)',
    decimals: 2.34,
    sqFeet: 1019.30,
    katha: 1.42,
    dimensions: {
      north: "68'-0\"",
      south: "66'-0\"",
      east: "15'-0\"",
      west: "15'-0\"",
    },
    category: 'target-subparcel',
    status: 'Verified & Demarcated',
    color: '#EC4899',
    notes: '15-foot uniform width central strip connecting upper and lower segments of RS Plot 308.',
  },
  {
    id: 'plot-308-d',
    plotNo: 'RS 308 (Part D)',
    csPlotNo: 'CS/SA 161',
    title: 'Plot 308 — Lower-Mid Sub-Parcel (7.20 Decimal)',
    grantor: 'Monoyara',
    recipient: 'Jafir Ahmed',
    decimals: 7.20,
    sqFeet: 3136.32,
    katha: 4.36,
    dimensions: {
      north: "66'-0\"",
      south: "55'-0\"",
      east: "59'-6\"",
      west: "34'-6\"",
    },
    category: 'target-subparcel',
    status: 'Verified (2.54 + 4.66 = 7.20 Dec)',
    color: '#D946EF',
    notes: 'Combined deed parcel (2.54 + 4.66 = 7.20 Decimal) transferred from Grantor Monoyara to Recipient Jafir Ahmed.',
  },
  {
    id: 'plot-308-e',
    plotNo: 'RS 308 (Part E)',
    csPlotNo: 'CS/SA 161',
    title: 'Plot 308 — Southern Sub-Parcel (Mokbul & Others)',
    grantor: 'Mokbul and Others',
    recipient: 'Mokbul and Others (Possession)',
    decimals: 5.10,
    sqFeet: 2221.56,
    katha: 3.09,
    dimensions: {
      north: "55'-0\"",
      south: "47'-0\"",
      east: "45'-0\"",
      west: "37'-9\"",
    },
    category: 'target-subparcel',
    status: 'Adjacent Sub-Holders Verified',
    color: '#10B981',
    notes: 'Southernmost portion of RS Plot 308 bordering Plot 318 and Plot 319.',
  },
  {
    id: 'plot-310-sub',
    plotNo: 'RS 310 (Sold Portion)',
    csPlotNo: 'CS/SA 161 (North)',
    title: 'Plot 310 — Grantor Shafiq Ullah (4.30 + 5.00 = 9.30 Decimal)',
    grantor: 'Shafiq Ullah',
    recipient: 'Verified Purchaser',
    decimals: 9.30,
    sqFeet: 4051.08,
    katha: 5.63,
    dimensions: {
      north: "70'-0\"",
      south: "75'-0\"",
      east: "59'-0\"",
      west: "49'-0\"",
    },
    category: 'neighbor-plot',
    status: 'Split: 4.30 Dec + 5.00 Dec',
    color: '#F59E0B',
    notes: 'Located north of the brick road corridor; subdivided into 4.30 Decimal (West) and 5.00 Decimal (East).',
  },
  {
    id: 'bwdb-corridor',
    plotNo: 'BWDB & Brick Road Corridor',
    csPlotNo: 'Aqueduct / Road Line',
    title: 'Brick Road for Social Movement & BWDB Acquired Land',
    grantor: 'Public / BWDB Acquisition',
    recipient: 'Bangladesh Water Development Board (BWDB)',
    decimals: 0,
    sqFeet: 0,
    katha: 0,
    dimensions: {
      north: 'Full East-West Traverse',
      south: 'Full East-West Traverse',
      east: 'Aqueduct / Road Line',
      west: 'Aqueduct / Road Line',
    },
    category: 'bwdb-corridor',
    status: 'Protected Public Corridor (Blue Line)',
    color: '#2563EB',
    notes: 'Cross-cutting infrastructure zone featuring Brick road for social movement and Land acquired by the Bangladesh Water Development Board (BWDB).',
  },
];
