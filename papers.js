// ===== RELATED PAPERS DATA =====
// ใช้ไฟล์นี้เพื่อเก็บ DOI ของผลงานวิจัยที่เกี่ยวข้องกับเครื่องมือแต่ละชิ้น
// โดยอ้างอิงจากรหัส id ของเครื่องมือ (ดู id ได้จากไฟล์ data.js)

const relatedPapersData = {
  // 1: Microplate Reader
  1: [
    "",
  ],

  // 2: UV-Vis and Fluorescence Microplate Reader
  2: [
    // "10.xxxx/yyyy"
  ],

  // 3: Microplate Reader (Multimode)
  3: [
    // "10.xxxx/yyyy"
  ],

  // 4: Image Analyzer
  4: [
    "10.1016/j.fct.2025.115743",
    "10.1002/cbin.70013",
    // "10.xxxx/yyyy"
  ],

  // 5: Gel Documentation
  5: [
    // "10.xxxx/yyyy"
  ],

  // 6: Flow Cytometer (Analyzer)
  6: [
    // "10.xxxx/yyyy"
  ],

  // 7: Flow Cytometer (Cell Sorter)
  7: [
    // "10.xxxx/yyyy"
  ],

  // 8: Thermocycler (PCR)
  8: [
    // "10.xxxx/yyyy"
  ],

  // 9: Real-Time PCR (qPCR)
  9: [
    // "10.xxxx/yyyy"
  ],

  // 10: Next-Generation Sequencer (Production-Scale)
  10: [
    // "10.xxxx/yyyy"
  ],

  // 11: Next-Generation Sequencer (Benchtop)
  11: [
    "10.1038/s41598-025-10791-8",
    "10.1038/s41598-025-10791-8",
    // "10.xxxx/yyyy"
  ],

  // 12: Fragment Analyzer
  12: [
    // "10.xxxx/yyyy"
  ],

  // 13: MassARRAY Genotyping System
  13: [
    "10.52635/eamr/16.1.28-39"
    // "10.xxxx/yyyy"
  ],

  // 14: Biomolecular Interaction Analyzer (SPR)
  14: [
    // "10.xxxx/yyyy"
  ],

  // 15: Automated Western Blot
  15: [
    "10.31557/apjcp.2026.27.1.183"

    // "10.xxxx/yyyy"
  ],

  // 16: ELISpot / FluoroSpot Analyzer
  16: [
    // "10.xxxx/yyyy"
  ],

  // 17: MALDI-TOF/TOF Mass Spectrometer
  17: [
    "10.1002/cbf.70256"
    // "10.xxxx/yyyy"
  ],

  // 18: Bioreactor
  18: [
    // "10.xxxx/yyyy"
  ],

  // 19: Biomolecular Imager
  19: [
    // "10.xxxx/yyyy"
  ],

  // 20: CO2 Incubator / Cooling Incubator / Heating Incubator / Shaking Incubator
  20: [
    // "10.xxxx/yyyy"
  ],

  // 21: High Performance Liquid Chromatograph (HPLC)
  21: [
    // "10.xxxx/yyyy"
  ],

  // 22: Ultra Performance LC (UPLC)
  22: [
    // "10.xxxx/yyyy"
  ],

  // 23: HPLC (Thermo Dionex Ultimate 3200/3400)
  23: [
    "10.1002/fsn3.4681",
    // "10.xxxx/yyyy"
  ],

  // 24: Ultra High Performance LC (UHPLC)
  24: [
    // "10.xxxx/yyyy"
  ],

  // 25: LC-MS Triple TOF (High Resolution)
  25: [
    "10.3390/cosmetics13030107"
    // "10.xxxx/yyyy"
  ],

  // 26: LC-MS Triple Quadrupole (QTRAP)
  26: [
    // "10.xxxx/yyyy"
  ],

  // 27: Flash Chromatograph
  27: [
    // "10.xxxx/yyyy"
  ],

  // 28: Direct Analysis in Real Time Mass Spectrometer (DART-MS)
  28: [
    "10.1002/ajoc.202400808",
    // "10.xxxx/yyyy"
  ],

  // 29: Fast Protein Liquid Chromatograph (FPLC)
  29: [
    // "10.xxxx/yyyy"
  ],

  // 30: FPLC (Preparative-Scale)
  30: [
    // "10.xxxx/yyyy"
  ],

  // 31: Gas Chromatograph (GC)
  31: [
    // "10.xxxx/yyyy"
  ],

  // 32: Gas Chromatograph-Mass Spectrometer (GC-MS)
  32: [
    "10.1016/j.afres.2025.101353",
    // "10.xxxx/yyyy"
  ],

  // 33: GC-Triple Quadrupole Mass Spectrometer (GC-TQ)
  33: [
    // "10.xxxx/yyyy"
  ],

  // 34: Ultra-Low Temperature Freezer (-80°C)
  34: [
    // "10.xxxx/yyyy"
  ],

  // 35: Deep Freezer (-40°C)
  35: [
    // "10.xxxx/yyyy"
  ],

  // 36: Standard Freezer (-20°C)
  36: [
    // "10.xxxx/yyyy"
  ],

  // 37: Optical Microscope
  37: [
    // "10.xxxx/yyyy"
  ],

  // 38: Fluorescence Inverted Microscope
  38: [
    // "10.xxxx/yyyy"
  ],

  // 39: Light & Fluorescence Stereomicroscope
  39: [
    "10.1016/j.eti.2024.103991",
    // "10.xxxx/yyyy"
  ],

  // 40: Inverted Microscope
  40: [
    "10.1016/j.fufo.2026.101066"
    // "10.xxxx/yyyy"
  ],

  // 41: Laser Microdissection Microscope
  41: [
    "10.1016/j.jpba.2025.117183"
    // "10.xxxx/yyyy"
  ],

  // 42: High-Resolution Inverted Microscope
  42: [
    // "10.xxxx/yyyy"
  ],

  // 43: DeltaVision Microscope
  43: [
    "10.1128/spectrum.04159-25",
    "10.1371/journal.ppat.1012936",
    "10.1016/j.heliyon.2024.e39048",
    // "10.xxxx/yyyy"
  ],

  // 44: Optical Sectioning Microscope
  44: [
    // "10.xxxx/yyyy"
  ],

  // 45: Atomic Force Microscope (AFM)
  45: [
    "10.1016/j.apsusc.2024.161591",
    // "10.xxxx/yyyy"
  ],

  // 46: Atomic Force Microscope-Raman Spectrometer
  46: [
    "10.1016/j.microc.2026.118555",
    "10.1016/j.fuproc.2026.108482",
    "10.1016/j.mtcomm.2025.113797",
    "10.1016/j.materresbull.2025.113500",
    "10.1016/j.psep.2025.01.006",
    "10.1016/j.carbon.2024.119705",
    "10.21203/rs.3.rs-5505585/v1",
    // "10.xxxx/yyyy"
  ],

  // 47: Cryogenic Transmission Electron Microscope (Cryo-TEM)
  47: [
    "10.1038/s41598-026-55427-7",
    "10.1016/j.ijbiomac.2026.150988",
    "10.64898/2026.01.17.700097",
    "10.1038/s41598-025-34661-5",
    "10.21203/rs.3.rs-7778530/v1",
    // "10.xxxx/yyyy"
  ],

  // 48: Scanning Electron Microscope (SEM)
  48: [
    "10.35848/1347-4065/ae6aaa",
    "10.1021/acsomega.5c07292",
    "10.1007/s11259-025-11000-7",
    "10.1021/acsaem.5c02806",
    "10.1016/j.materresbull.2025.113500",
    "10.1186/s12917-025-04951-1",
    "10.1016/j.nfs.2024.100209",
    "10.3390/ani14223178",
    "10.1038/s41598-024-70276-y",
    // "10.xxxx/yyyy"
  ],

  // 49: Field Emission Scanning Electron Microscope (FE-SEM)
  49: [
    "10.1021/acsomega.6c02494",
    "10.35848/1347-4065/ae6aaa",
    "10.1016/j.applthermaleng.2026.131083",
    "10.37188/lam.2026.073",
    "10.1016/j.isci.2026.115893",
    "10.1016/j.rineng.2026.110377",
    "10.1002/smsc.202500451",
    "10.1021/acsomega.5c03627",
    "10.1002/solr.202400910",
    "10.1039/d4na01022a",
    "10.1016/j.apsusc.2024.161591",
    "10.1021/acsphotonics.4c01469",
    "10.1021/acsomega.4c09165",
    // "10.xxxx/yyyy"
  ],

  // 50: Analytical Balance (2/4/6 digits)
  50: [
    // "10.xxxx/yyyy"
  ],

  // 51: Auto Fine Coater (Sputter Coater)
  51: [
    // "10.xxxx/yyyy"
  ],

  // 52: Autoclave
  52: [
    // "10.xxxx/yyyy"
  ],

  // 53: Automated Liquid Handling System
  53: [
    // "10.xxxx/yyyy"
  ],

  // 54: Automated Vitrification Machine
  54: [
    // "10.xxxx/yyyy"
  ],

  // 55: Centrifuge (Benchtop/High Speed/Superspeed/Ultra Speed)
  55: [
    // "10.xxxx/yyyy"
  ],

  // 56: Sample Concentrator (Cooling/N2/SpeedVac)
  56: [
    // "10.xxxx/yyyy"
  ],

  // 57: Crossflow Filtration Concentrator
  57: [
    // "10.xxxx/yyyy"
  ],

  // 58: Cryostat
  58: [
    "10.1038/s41598-024-84395-z",
    // "10.xxxx/yyyy"
  ],

  // 59: Freeze Dryer (Lyophilizer)
  59: [
    "10.1016/j.carpta.2025.100763",
    // "10.xxxx/yyyy"
  ],

  // 60: Cryogenic Grinder (Freeze Mill)
  60: [
    // "10.xxxx/yyyy"
  ],

  // 61: High Intensity Ultrasonic Processor
  61: [
    // "10.xxxx/yyyy"
  ],

  // 62: Rotary Evaporator
  62: [
    // "10.xxxx/yyyy"
  ],

  // 63: Raman Microscope
  63: [
    "10.1021/acsomega.6c02494",
    "10.1016/j.rineng.2026.110377",
    "10.1016/j.materresbull.2025.113711",
    "10.1016/j.recm.2025.100153",
    "10.1021/acsomega.5c03627",
    "10.1038/s41598-025-99439-1",
    "10.1021/acsphotonics.4c01469",
    "10.1016/j.jksus.2024.103557",
    "10.1016/j.sna.2024.116061",
    "10.1021/acsanm.4c04921",
    "10.1016/j.heliyon.2024.e38708",
    "10.1038/s41598-024-70503-6",
    "10.1039/d4tc02062f",
    // "10.xxxx/yyyy"
  ],

  // 64: Spectrofluorometer
  64: [
    "10.1016/j.surfin.2026.108604",
    "10.1016/j.psep.2025.01.006",
    "10.1039/d4ra04585h",
    // "10.xxxx/yyyy"
  ],

  // 65: NanoDrop Spectrophotometer
  65: [
    // "10.xxxx/yyyy"
  ],

  // 66: Nuclear Magnetic Resonance Spectrometer (NMR)
  66: [
    "10.1039/d5tc03926f",
    "10.1021/acs.inorgchem.5c04533",
    "10.1016/j.recm.2025.100126",
    "10.1016/j.solmat.2025.113545",
    "10.1002/slct.202500544",
    "10.1016/j.nfs.2024.100209",
    "10.1016/j.jddst.2024.106437",
    "10.1016/j.clema.2024.100280",
    // "10.xxxx/yyyy"
  ],

  // 67: Flame Atomic Absorption Spectrometer (FAAS)
  67: [
    "10.1080/15226514.2026.2636202",
    "10.1038/s41598-025-27933-7",
    "10.1002/prp2.70148",
    // "10.xxxx/yyyy"
  ],

  // 68: Graphite Furnace Atomic Absorption Spectrometer (GFAAS)
  68: [
    // "10.xxxx/yyyy"
  ],

  // 69: Inductively Coupled Plasma-Mass Spectrometer (ICP-MS)
  69: [
    "10.1016/j.hazadv.2026.101329",
    "10.1016/j.marpolbul.2026.119905",
    "10.1016/j.hazadv.2026.101157",
    "10.1016/j.rsma.2025.104498",
    "10.1080/03650340.2025.2518266",
    "10.1080/03650340.2025.2518266",
    "10.1016/j.fochx.2024.102119",
    "10.1016/j.jafr.2024.101272",
    // "10.xxxx/yyyy"
  ],

  // 70: Circular Dichroism Spectrometer (CD)
  70: [
    "10.1038/s41598-025-24052-1",
    "10.58837/chula.jmbs.7.s1.21",
    // "10.xxxx/yyyy"
  ],

  // 71: Fourier-Transform Infrared Spectrometer (FTIR)
  71: [
    "10.1007/s11356-026-37873-y",
    "10.1016/j.microc.2026.118555",
    "10.1002/smsc.202500451",
    "10.1016/j.carpta.2025.100763",
    "10.1016/j.eti.2024.103991",
    "10.1016/j.heliyon.2024.e38708",
    "10.1016/j.wasman.2024.08.033",
    "10.1039/d4tc02062f",
    // "10.xxxx/yyyy"
  ],

  // 72: FTIR Microscope Spectrometer
  72: [
    "10.1016/j.envres.2026.124396",
    "10.1002/solr.202400910",
    // "10.xxxx/yyyy"
  ],

  // 73: Nanosizer / Dynamic Light Scattering (DLS)
  73: [
    "10.1016/j.isci.2026.115893",
    "10.1016/j.afres.2025.101353",
    "10.1016/j.psep.2025.01.006",
    "10.1016/j.carbon.2024.119705",
    // "10.xxxx/yyyy"
  ],

  // 74: Microparticle Size Analyzer (Laser Diffraction)
  74: [
    "10.1016/j.wasman.2024.08.033",
    // "10.xxxx/yyyy"
  ],

  // 75: Fluorometer (DNA/RNA Quantification)
  75: [
    // "10.xxxx/yyyy"
  ],

  // 76: Optical Contact Angle Analyzer (OCA)
  76: [
    // "10.xxxx/yyyy"
  ],

  // 77: Tensiometer
  77: [
    // "10.xxxx/yyyy"
  ],

  // 78: Simultaneous Thermal Analyzer (STA)
  78: [
    "10.1016/j.grets.2026.100370",
    "10.1016/j.recm.2025.100148",
    "10.1016/j.cscee.2025.101217",
    "10.1016/j.recm.2024.10.002",
    "10.1016/j.clema.2024.100280",
    "10.1016/j.clema.2024.100254",
    // "10.xxxx/yyyy"
  ],

  // 79: Differential Scanning Calorimeter (DSC)
  79: [
    "10.1016/j.recm.2025.100126",
    "10.1016/j.carpta.2025.100763",
    "10.1016/j.clema.2024.100280",
    "10.1038/s41598-024-70276-y",
    // "10.xxxx/yyyy"
  ],

  // 80: Automated Simultaneous Thermal Analyzer
  80: [
    "10.1016/j.grets.2026.100370",
    "10.1002/solr.202400910",
    // "10.xxxx/yyyy"
  ],

  // 81: Water Purification System (Type I/II/III)
  81: [
    // "10.xxxx/yyyy"
  ],

  // 82: Nanoscale X-ray Computed Tomograph (Nano-CT)
  82: [
    "10.1371/journal.pone.0349259",
    "10.1038/s41598-025-06485-w",
    "10.1038/s41598-025-06485-w",
    // "10.xxxx/yyyy"
  ],

  // 83: X-ray Diffractometer (XRD)
  83: [
    "10.1021/acsomega.6c02494",
    "10.1016/j.applthermaleng.2026.131083",
    "10.1016/j.fuproc.2026.108482",
    "10.1016/j.mtadv.2026.100832",
    "10.37188/lam.2026.073",
    "10.1016/j.grets.2026.100370",
    "10.1016/j.rineng.2026.110377",
    "10.1016/j.jece.2026.121211",
    "10.1002/smsc.202500451",
    "10.1016/j.materresbull.2025.113711",
    "10.1016/j.recm.2025.100126",
    "10.1021/acsaem.5c02806",
    "10.1016/j.recm.2025.100148",
    "10.1016/j.carpta.2025.100763",
    "10.1016/j.cscee.2025.101217",
    "10.1021/acsomega.5c03627",
    "10.1038/s41598-025-99439-1",
    "10.1002/solr.202400910",
    "10.1016/j.recm.2024.10.002",
    "10.1016/j.psep.2025.01.006",
    "10.1016/j.apsusc.2024.161591",
    "10.1021/acsphotonics.4c01469",
    "10.1016/j.carbon.2024.119705",
    "10.21203/rs.3.rs-5505585/v1",
    "10.1016/j.clema.2024.100280",
    "10.1016/j.heliyon.2024.e37808",
    "10.1016/j.wasman.2024.08.033",
    "10.1039/d4ra04585h",
    "10.1016/j.clema.2024.100254",
    "10.1038/s41598-024-70503-6",
    "10.1039/d4tc02062f",
    // "10.xxxx/yyyy"
  ],

  // 84: Benchtop X-ray Diffractometer
  84: [
    "10.1039/d5ra06278k",
    // "10.xxxx/yyyy"
  ],

  // 85: Wavelength Dispersive X-ray Fluorescence (WDXRF)
  85: [
    // "10.xxxx/yyyy"
  ],

  // 86: X-ray Fluorescence Microscope (Micro-XRF)
  86: [
    "10.1016/j.hazadv.2026.101357",
    "10.1016/j.jece.2026.121211",
    "10.1080/03650340.2025.2518266",
    "10.1016/j.wasman.2024.08.033",
    // "10.xxxx/yyyy"
  ],

  // 87: High Performance Computing (HPC) Facility
  87: [
    "10.1016/j.compbiomed.2025.111313",
    // "10.xxxx/yyyy"
  ],

};
