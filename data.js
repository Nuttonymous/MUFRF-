// ===== รูปภาพเครื่องมือ (INSTRUMENT IMAGES) =====
// =====================================================================
// วิธีใส่รูปเครื่องมือใหม่ (แพทเทิร์นเดียวกับที่ใช้ในหน้า personnel.html และ activities.html):
//   1) เตรียมไฟล์รูปภาพ (.jpg .jpeg .png .webp)
//   2) นำไฟล์รูปไปวางไว้ในโฟลเดอร์ "images/" (ระดับเดียวกับไฟล์ index.html นี้)
//      แนะนำให้สร้างโฟลเดอร์ย่อย เช่น "images/equipment/" เพื่อความเป็นระเบียบ ก็ทำได้เช่นกัน
//   3) เพิ่ม/แก้ไขบรรทัดด้านล่างนี้ โดยฝั่งซ้าย (key) ต้อง "พิมพ์ตรงกับชื่อเครื่องมือ (instrument)
//      ในตัวแปร serviceData ทุกตัวอักษร" ฝั่งขวา (value) คือ path ไปยังไฟล์รูปที่วางไว้
//
//   ตัวอย่าง: เครื่องมือชื่อ "Flow cytometer" มีไฟล์รูปชื่อ flow-cytometer.jpg
//   ก็ให้เพิ่มบรรทัด:   "Flow cytometer": "images/flow-cytometer.jpg",
//
//   หมายเหตุ: ถ้าเครื่องมือไหนยังไม่มีรูป (ไม่ได้ใส่ไว้ใน map นี้) ระบบจะแสดงกรอบว่างแทน
//   โดยอัตโนมัติ ไม่ต้องกังวลว่าเว็บจะพัง
// =====================================================================
const instrumentImages = {
  "Analytical balance": "images/balance.png",
  "Atomic force microscope : AFM": "images/afm.png",
  "Auto fine coater": "images/coater.png",
  "Autoclave": "images/autoclave.png",
  "Automated liquid handling": "images/epmotion.png",
  "Automated western blot": "images/jess.png",
  "Biomolecular imager": "images/typhoon.png",
  "Bioreactor": "images/bioreactor.png",
  "Blender": "images/blender.png",
  "Centifuge": "images/centrifuge.png",
  "Circular dichroism spectrometer : CD": "images/cd.png",
  "Concentrator": "images/speedvac.png",
  "Critical point drier": "images/coater.png",
  "Cryo-TEM": "images/cryo-tem.png",
  "Cryostat": "images/cryostat.png",
  "DART-MS": "images/dart.png",
  "DeltaVision microscope": "images/deltavision.png",
  "Differential scanning calorimeter : DSC": "images/dsc.png",
  "Ductless fume hood": "",
  "ELISpot": "images/elispot.png",
  "FPLC": "images/fplc.png",
  "Flame atomic absorption spectrometer : FAAS": "images/faas.png",
  "Flash chromatograph": "images/flash.png",
  "Flow cytometer": "images/flow.png",
  "Fluorometer": "images/fluorometer.png",
  "Fourier-transform infrared : FTIR": "images/ftir.png",
  "Fragment analyzer": "images/fragment.png",
  "Freeze dryer": "images/freezedryer.png",
  "Freezer": "images/-80.png",
  "GC": "images/gc.png",
  "GC-MS": "images/gc-ms.png",
  "GC-TQ": "images/gc-tq.png",
  "Gel documentation": "images/gel doc.png",
  "Glow discharge machine": "",
  "Graphite furnace atomic absorption spectrometer : GFAAS": "images/gfaas.png",
  "Grinder": "",
  "HPLC": "images/hplc.png",
  "Heat block": "",
  "Homoginizer": "",
  "Hot air oven": "",
  "Hot plate stirrer": "",
  "Image analyzer": "images/image-analyzer.png",
  "Incubator": "images/incubator.png",
  "Inductively couple plasma mass spectrometer : ICP-MS": "images/icpms.png",
  "Inverted microscope": "images/inverted-microscope.png",
  "LC-MS-QTOF": "images/lcmsqtof.png",
  "LC-MS-TQ": "images/lcmsqtrap.png",
  "Laser microdissection microscope : LMD": "images/laser-dis-microscope.png",
  "MALDI-TOF MS": "images/maldi.png",
  "Matrix sprayer": "",
  "Microplate reader": "images/microplate-reader.png",
  "Mini see-saw rocker": "",
  "Mixer": "",
  "Muffle furnace": "",
  "Nanodrop": "images/nanodrop.png",
  "Nanoscale X-ray computed tomograph : Nano-CT": "images/nanoct.png",
  "Nuclear magnetic resonance spectrometer : NMR": "images/nmr.png",
  "Optical contact angle : OCA": "images/oca.png",
  "Optical microscope": "images/optical-microscope.png",
  "Optical sectioning microscope": "images/optical-sectioning-microscope.png",
  "PCR machine": "images/pcr.png",
  "Particle analyzer": "images/ld.png",
  "Pellet press machine": "",
  "Positive pressure manifold": "",
  "Raman microscope": "images/raman.png",
  "Rotary evaporator": "images/rotaryevap.png",
  "Scanning electron microscope : SEM": "images/sem.png",
  "Sequencer": "images/sequencer.png",
  "Simultaneous thermal analyzer : STA": "images/sta.png",
  "Sonicator": "images/sonicator.png",
  "Special test 1": "",
  "Special test 2": "",
  "Special test 3": "",
  "Special test 4": "",
  "Special test 5": "",
  "Special test 6": "",
  "Special test 7": "",
  "Special test 8": "",
  "Spectrofluorometer": "images/spectrofluorometer.png",
  "Stereo microscope": "images/lf-stereomicroscope.png",
  "Surface plasmon resonance": "images/biacore.png",
  "Tensiometer": "images/tensiometer.png",
  "Type III (RO water)": "",
  "Type l (LC-MS grade, resistivity 18.2 M??cm)": "",
  "Type l (Resistivity 18.2 M??cm)": "",
  "Type ll (Resistivity > 5 M??cm)": "",
  "UHPLC": "images/hplc-water.png",
  "UPLC": "images/uplc.png",
  "Water bath": "",
  "X-ray diffractometer : XRD": "images/xrd.png",
  "X-ray fluorescence : XRF": "images/microxrf.png",
  "pH Meter": "",
};




// ฟังก์ชันสลับไปแสดงกรอบว่าง เมื่อโหลดรูปไม่สำเร็จ (เรียกจาก onerror ของ <img>)
// ⚠️ ใช้ฟังก์ชันแบบนี้เสมอ ห้ามฝัง HTML/SVG ที่มีเครื่องหมาย " ลงในแอตทริบิวต์ onerror="..." ตรงๆ
// เพราะจะไปชนกับเครื่องหมาย " ที่ล้อมรอบ onerror เอง ทำให้ HTML พังตั้งแต่ตอนแปลงหน้าเว็บ
function showInstrumentFallback(imgEl) {
  imgEl.outerHTML = '<div class="instrument-img-placeholder"></div>';
}
const serviceData = [
  // ────────────────── Bioscience instrument ──────────────────
  { group: "Bioscience instrument", instrument: "Automated western blot", code: "BS01-1A", mode: "Automated western blot - chemiluminescence  (Instrument use)", unit: "run", mahidol: 500, gov: 650, priv: 1000 },
  { group: "Bioscience instrument", instrument: "Automated western blot", code: "BS01-2A", mode: "Automated western blot - fluorescence (Instrument use)", unit: "run", mahidol: 650, gov: 850, priv: 1300 },
  { group: "Bioscience instrument", instrument: "Biomolecular imager", code: "BS02-1A", mode: "Biomolecular imager (Instrument use)", unit: "hour", mahidol: 200, gov: 250, priv: 400 },
  { group: "Bioscience instrument", instrument: "Biomolecular imager", code: "BS02-1B", mode: "Biomolecular imager (Program analysis)", unit: "hour", mahidol: 50, gov: 75, priv: 100 },
  { group: "Bioscience instrument", instrument: "Bioreactor", code: "BS03-1A", mode: "Bioreactor (Instrument use)", unit: "day", mahidol: 2000, gov: 2500, priv: 4000 },
  { group: "Bioscience instrument", instrument: "ELISpot", code: "BS04-1A", mode: "ELISpot (Instrument use)", unit: "hour", mahidol: 400, gov: 500, priv: 800 },
  { group: "Bioscience instrument", instrument: "ELISpot", code: "BS04-1B", mode: "ELISpot (Program analysis)", unit: "hour", mahidol: 200, gov: 250, priv: 400 },
  { group: "Bioscience instrument", instrument: "Flow cytometer", code: "BS05-1A", mode: "Flow cytometer - analyzer (Instrument use)", unit: "hour", mahidol: 1000, gov: 1250, priv: 2000 },
  { group: "Bioscience instrument", instrument: "Flow cytometer", code: "BS05-2A", mode: "Flow cytometer - cell sorter (Instrument use)", unit: "hour", mahidol: 1200, gov: 1500, priv: 2400 },
  { group: "Bioscience instrument", instrument: "Flow cytometer", code: "BS05-1B", mode: "Flow cytometer - analyzer (Program analysis)", unit: "hour", mahidol: 200, gov: 250, priv: 400 },
  { group: "Bioscience instrument", instrument: "Fragment analyzer", code: "BS06-1A", mode: "Fragment analyzer (Instrument use)", unit: "hour", mahidol: 450, gov: 600, priv: 900 },
  { group: "Bioscience instrument", instrument: "Gel documentation", code: "BS07-1A", mode: "Gel documentation (Instrument use)", unit: "hour", mahidol: 50, gov: 75, priv: 100 },
  { group: "Bioscience instrument", instrument: "Image analyzer", code: "BS08-1A", mode: "Image analyzer (Instrument use)", unit: "hour", mahidol: 250, gov: 350, priv: 500 },
  { group: "Bioscience instrument", instrument: "Incubator", code: "BS09-1A", mode: "CO2 incubator (Instrument use)", unit: "hour", mahidol: 30, gov: 40, priv: 60 },
  { group: "Bioscience instrument", instrument: "Incubator", code: "BS09-2A", mode: "Cooling incubator (Instrument use)", unit: "hour", mahidol: 30, gov: 40, priv: 60 },
  { group: "Bioscience instrument", instrument: "Incubator", code: "BS09-3A", mode: "Heating incubator (Instrument use)", unit: "hour", mahidol: 30, gov: 40, priv: 60 },
  { group: "Bioscience instrument", instrument: "Incubator", code: "BS09-4A", mode: "Shaking incubator (Instrument use)", unit: "hour", mahidol: 30, gov: 40, priv: 60 },
  { group: "Bioscience instrument", instrument: "Microplate reader", code: "BS10-1A", mode: "Microplate reader - absorbance (Instrument use)", unit: "hour", mahidol: 100, gov: 150, priv: 200 },
  { group: "Bioscience instrument", instrument: "Microplate reader", code: "BS10-2A", mode: "Microplate reader - alpha screen (Instrument use)", unit: "hour", mahidol: 150, gov: 200, priv: 300 },
  { group: "Bioscience instrument", instrument: "Microplate reader", code: "BS10-3A", mode: "Microplate reader - chemiluminescence (Instrument use)", unit: "hour", mahidol: 150, gov: 200, priv: 300 },
  { group: "Bioscience instrument", instrument: "Microplate reader", code: "BS10-4A", mode: "Microplate reader - fluorescence (Instrument use)", unit: "hour", mahidol: 150, gov: 200, priv: 300 },
  { group: "Bioscience instrument", instrument: "Microplate reader", code: "BS10-5A", mode: "Microplate reader - fluorescence polarization  (Instrument use)", unit: "hour", mahidol: 150, gov: 200, priv: 300 },
  { group: "Bioscience instrument", instrument: "Microplate reader", code: "BS10-6A", mode: "Microplate reader - time resolved fluorescence  (Instrument use)", unit: "hour", mahidol: 150, gov: 200, priv: 300 },
  { group: "Bioscience instrument", instrument: "Microplate reader", code: "BS10-7A", mode: "Microplate reader - time resolved FRET  (Instrument use)", unit: "hour", mahidol: 150, gov: 200, priv: 300 },
  { group: "Bioscience instrument", instrument: "MALDI-TOF MS", code: "BS11-1A", mode: "MALDI-TOF MS (Instrument use)", unit: "hour", mahidol: 1250, gov: 1600, priv: 2500 },
  { group: "Bioscience instrument", instrument: "MALDI-TOF MS", code: "BS11-2A", mode: "MALDI-TOF MS - genotyping analysis (Instrument use)", unit: "hour", mahidol: 900, gov: 1150, priv: 1800 },
  { group: "Bioscience instrument", instrument: "MALDI-TOF MS", code: "BS11-3A", mode: "MALDI-TOF MS - MALDI-imaging (Instrument use)", unit: "hour", mahidol: 2200, gov: 2750, priv: 4400 },
  { group: "Bioscience instrument", instrument: "MALDI-TOF MS", code: "BS11-1B", mode: "MALDI-TOF MS (Program analysis)", unit: "hour", mahidol: 550, gov: 700, priv: 1100 },
  { group: "Bioscience instrument", instrument: "MALDI-TOF MS", code: "BS11-2B", mode: "MALDI-TOF MS - genotyping analysis (Program analysis)", unit: "hour", mahidol: 450, gov: 600, priv: 900 },
  { group: "Bioscience instrument", instrument: "MALDI-TOF MS", code: "BS11-1D", mode: "MALDI-TOF MS - biotyper (Test)", unit: "sample", mahidol: 500, gov: 650, priv: 1000 },
  { group: "Bioscience instrument", instrument: "MALDI-TOF MS", code: "BS11-2D", mode: "MALDI-TOF MS - protein molecular weight measurement (Test)", unit: "sample", mahidol: 1000, gov: 1250, priv: 2000 },
  { group: "Bioscience instrument", instrument: "MALDI-TOF MS", code: "BS11-3D", mode: "MALDI-TOF MS - polymer (Test)", unit: "sample", mahidol: 1300, gov: 1650, priv: 2600 },
  { group: "Bioscience instrument", instrument: "PCR machine", code: "BS12-1A", mode: "PCR machine (Instrument use)", unit: "hour", mahidol: 100, gov: 150, priv: 200 },
  { group: "Bioscience instrument", instrument: "PCR machine", code: "BS12-2A", mode: "Real-time PCR machine (Instrument use)", unit: "hour", mahidol: 300, gov: 400, priv: 600 },
  { group: "Bioscience instrument", instrument: "Sequencer", code: "BS13-1A", mode: "Benchtop sequencer (Instrument use)", unit: "hour", mahidol: 200, gov: 250, priv: 400 },
  { group: "Bioscience instrument", instrument: "Sequencer", code: "BS13-2A", mode: "Production-scale sequencer (Instrument use)", unit: "hour", mahidol: 300, gov: 400, priv: 600 },
  { group: "Bioscience instrument", instrument: "Sequencer", code: "BS13-1C", mode: "Benchtop sequencer (Test and analysis)", unit: "hour", mahidol: 300, gov: 400, priv: 600 },
  { group: "Bioscience instrument", instrument: "Sequencer", code: "BS13-2C", mode: "Production-scale sequencer (Test and analysis)", unit: "hour", mahidol: 450, gov: 600, priv: 900 },
  { group: "Bioscience instrument", instrument: "Sequencer", code: "BS13-3C", mode: "Bioinformatics service (Test and analysis)", unit: "hour", mahidol: 1000, gov: 1250, priv: 2000 },
  { group: "Bioscience instrument", instrument: "Sequencer", code: "BS13-1D", mode: "Benchtop sequencer - DNA library preparation  (Test, 8-24 Samples)", unit: "sample", mahidol: 1600, gov: 2000, priv: 3200 },
  { group: "Bioscience instrument", instrument: "Sequencer", code: "BS13-2D", mode: "Benchtop sequencer - PCR amplicon preparation  (Test, 8-96 Samples)", unit: "sample", mahidol: 550, gov: 700, priv: 1100 },
  { group: "Bioscience instrument", instrument: "Sequencer", code: "BS13-3D", mode: "Production-scale sequencer - RNA library preparation (Test, 8-16 Samples)", unit: "sample", mahidol: 1600, gov: 2000, priv: 3200 },
  { group: "Bioscience instrument", instrument: "Sequencer", code: "BS13-4D", mode: "Production-scale sequencer - whole genome library preparation (Test, 8-24 Samples)", unit: "sample", mahidol: 1600, gov: 2000, priv: 3200 },
  { group: "Bioscience instrument", instrument: "Surface plasmon resonance", code: "BS14-1A", mode: "Surface plasmon resonance (Instrument use)", unit: "hour", mahidol: 350, gov: 450, priv: 700 },

  // ────────────────── Chromatograph ──────────────────
  { group: "Chromatograph", instrument: "DART-MS", code: "CG01-1A", mode: "DART-MS (Instrument use)", unit: "hour", mahidol: 700, gov: 900, priv: 1400 },
  { group: "Chromatograph", instrument: "DART-MS", code: "CG01-1D", mode: "DART-MS (Test)", unit: "sample", mahidol: 800, gov: 1000, priv: 1600 },
  { group: "Chromatograph", instrument: "FPLC", code: "CG02-1A", mode: "FPLC (Instrument use)", unit: "hour", mahidol: 120, gov: 150, priv: 250 },
  { group: "Chromatograph", instrument: "FPLC", code: "CG02-2A", mode: "FPLC - preparative (Instrument use)", unit: "hour", mahidol: 300, gov: 400, priv: 600 },
  { group: "Chromatograph", instrument: "Flash chromatograph", code: "CG03-1A", mode: "Flash chromatograph (Instrument use)", unit: "hour", mahidol: 500, gov: 650, priv: 1000 },
  { group: "Chromatograph", instrument: "Flash chromatograph", code: "CG03-2A", mode: "Flash chromatograph (Instrument use with user column)", unit: "hour", mahidol: 450, gov: 600, priv: 900 },
  { group: "Chromatograph", instrument: "GC", code: "CG04-1A", mode: "GC (Instrument use)", unit: "hour", mahidol: 250, gov: 350, priv: 500 },
  { group: "Chromatograph", instrument: "GC", code: "CG04-2A", mode: "GC (Instrument use with user column)", unit: "hour", mahidol: 225, gov: 300, priv: 450 },
  { group: "Chromatograph", instrument: "GC", code: "CG04-1B", mode: "GC (Program analysis)", unit: "hour", mahidol: 100, gov: 150, priv: 200 },
  { group: "Chromatograph", instrument: "GC", code: "CG04-1C", mode: "GC (Test and analysis)", unit: "sample", mahidol: 450, gov: 600, priv: 900 },
  { group: "Chromatograph", instrument: "GC", code: "CG04-2C", mode: "GC (Test and analysis with user column)", unit: "sample", mahidol: 400, gov: 550, priv: 800 },
  { group: "Chromatograph", instrument: "GC-MS", code: "CG05-1A", mode: "GC-MS (Instrument use)", unit: "hour", mahidol: 350, gov: 500, priv: 700 },
  { group: "Chromatograph", instrument: "GC-MS", code: "CG05-2A", mode: "GC-MS (Instrument use with user column)", unit: "hour", mahidol: 300, gov: 400, priv: 600 },
  { group: "Chromatograph", instrument: "GC-MS", code: "CG05-1B", mode: "GC-MS (Program analysis)", unit: "hour", mahidol: 150, gov: 200, priv: 300 },
  { group: "Chromatograph", instrument: "GC-MS", code: "CG05-1C", mode: "GC-MS - quantitative (Test and analysis)", unit: "sample", mahidol: 750, gov: 950, priv: 1500 },
  { group: "Chromatograph", instrument: "GC-MS", code: "CG05-2C", mode: "GC-MS - quantitative (Test and analysis with user column)", unit: "sample", mahidol: 700, gov: 850, priv: 1350 },
  { group: "Chromatograph", instrument: "GC-MS", code: "CG05-3C", mode: "GC-MS - quantitative head space/SPME (Test and analysis)", unit: "sample", mahidol: 1200, gov: 1500, priv: 2400 },
  { group: "Chromatograph", instrument: "GC-MS", code: "CG05-4C", mode: "GC-MS - quantitative head space/SPME  (Test and analysis with user column)", unit: "sample", mahidol: 1100, gov: 1350, priv: 2200 },
  { group: "Chromatograph", instrument: "GC-MS", code: "CG05-1D", mode: "GC-MS - head space/SPME profile (Test)", unit: "sample", mahidol: 800, gov: 1000, priv: 1600 },
  { group: "Chromatograph", instrument: "GC-MS", code: "CG05-2D", mode: "GC-MS - head space/SPME profile (Test with user column)", unit: "sample", mahidol: 700, gov: 900, priv: 1400 },
  { group: "Chromatograph", instrument: "GC-MS", code: "CG05-3D", mode: "GC-MS - profile (Test)", unit: "sample", mahidol: 500, gov: 650, priv: 1000 },
  { group: "Chromatograph", instrument: "GC-MS", code: "CG05-4D", mode: "GC-MS - profile (Test with user column)", unit: "sample", mahidol: 450, gov: 600, priv: 900 },
  { group: "Chromatograph", instrument: "GC-TQ", code: "CG06-1A", mode: "GC-TQ (Instrument use)", unit: "hour", mahidol: 550, gov: 700, priv: 1100 },
  { group: "Chromatograph", instrument: "GC-TQ", code: "CG06-2A", mode: "GC-TQ (Instrument use with user column)", unit: "hour", mahidol: 500, gov: 650, priv: 1000 },
  { group: "Chromatograph", instrument: "GC-TQ", code: "CG06-1B", mode: "GC-TQ (Program analysis)", unit: "hour", mahidol: 300, gov: 400, priv: 600 },
  { group: "Chromatograph", instrument: "GC-TQ", code: "CG06-1C", mode: "GC-TQ - quantitative (Test and analysis)", unit: "sample", mahidol: 1250, gov: 1600, priv: 2500 },
  { group: "Chromatograph", instrument: "GC-TQ", code: "CG06-2C", mode: "GC-TQ - quantitative  (Test and analysis with user column)", unit: "sample", mahidol: 1100, gov: 1400, priv: 2200 },
  { group: "Chromatograph", instrument: "GC-TQ", code: "CG06-3C", mode: "GC-TQ - quantitative head space/SPME (Test and analysis)", unit: "sample", mahidol: 1650, gov: 2100, priv: 3300 },
  { group: "Chromatograph", instrument: "GC-TQ", code: "CG06-4C", mode: "GC-TQ - quantitative head space/SPME  (Test and analysis with user column)", unit: "sample", mahidol: 1500, gov: 1900, priv: 3000 },
  { group: "Chromatograph", instrument: "HPLC", code: "CG07-1A", mode: "HPLC - 2 channels UV detector (Instrument use)", unit: "hour", mahidol: 200, gov: 250, priv: 400 },
  { group: "Chromatograph", instrument: "HPLC", code: "CG07-2A", mode: "HPLC - 2 channels UV detector (Instrument use with user column)", unit: "hour", mahidol: 180, gov: 225, priv: 350 },
  { group: "Chromatograph", instrument: "HPLC", code: "CG07-3A", mode: "HPLC - 4 channels UV detector (Instrument use)", unit: "hour", mahidol: 250, gov: 350, priv: 500 },
  { group: "Chromatograph", instrument: "HPLC", code: "CG07-4A", mode: "HPLC - 4 channels UV detector (Instrument use with user column)", unit: "hour", mahidol: 225, gov: 320, priv: 450 },
  { group: "Chromatograph", instrument: "HPLC", code: "CG07-5A", mode: "HPLC - ELS detector (Instrument use)", unit: "hour", mahidol: 300, gov: 400, priv: 600 },
  { group: "Chromatograph", instrument: "HPLC", code: "CG07-6A", mode: "HPLC - ELS detector (Instrument use with user column)", unit: "hour", mahidol: 270, gov: 350, priv: 550 },
  { group: "Chromatograph", instrument: "HPLC", code: "CG07-7A", mode: "HPLC - fluorescence detector (Instrument use)", unit: "hour", mahidol: 200, gov: 250, priv: 400 },
  { group: "Chromatograph", instrument: "HPLC", code: "CG07-8A", mode: "HPLC - fluorescence detector (Instrument use with user column)", unit: "hour", mahidol: 180, gov: 225, priv: 350 },
  { group: "Chromatograph", instrument: "HPLC", code: "CG07-9A", mode: "HPLC - RI detector (Instrument use)", unit: "hour", mahidol: 200, gov: 250, priv: 400 },
  { group: "Chromatograph", instrument: "HPLC", code: "CG07-10A", mode: "HPLC - RI detector (Instrument use with user column)", unit: "hour", mahidol: 180, gov: 225, priv: 350 },
  { group: "Chromatograph", instrument: "LC-MS-QTOF", code: "CG08-1D", mode: "LC-MS-QTOF - HRMS (Test)", unit: "sample", mahidol: 400, gov: 500, priv: 800 },
  { group: "Chromatograph", instrument: "LC-MS-QTOF", code: "CG08-2D", mode: "LC-MS-QTOF - metabolite profiling (Test)", unit: "sample", mahidol: 3200, gov: 4000, priv: 6400 },
  { group: "Chromatograph", instrument: "LC-MS-QTOF", code: "CG08-3D", mode: "LC-MS-QTOF - method development (Test)", unit: "hour", mahidol: 1200, gov: 1500, priv: 2400 },
  { group: "Chromatograph", instrument: "LC-MS-QTOF", code: "CG08-4D", mode: "LC-MS-QTOF - protein identification (Test)", unit: "sample", mahidol: 1400, gov: 1750, priv: 2800 },
  { group: "Chromatograph", instrument: "LC-MS-QTOF", code: "CG08-5D", mode: "LC-MS-QTOF - tryptic digestion (Test)", unit: "sample", mahidol: 600, gov: 750, priv: 1200 },
  { group: "Chromatograph", instrument: "LC-MS-TQ", code: "CG09-1D", mode: "LC-MS-TQ - method development (Test)", unit: "hour", mahidol: 1200, gov: 1500, priv: 2400 },
  { group: "Chromatograph", instrument: "LC-MS-TQ", code: "CG09-2D", mode: "LC-MS-TQ - small molecules quantitation  (Test, 1-10 compounds)", unit: "sample", mahidol: 1600, gov: 2000, priv: 3200 },
  { group: "Chromatograph", instrument: "LC-MS-TQ", code: "CG09-3D", mode: "LC-MS-TQ - small molecules quantitation  (Test, 11-20 compounds)", unit: "sample", mahidol: 3200, gov: 4000, priv: 6400 },
  { group: "Chromatograph", instrument: "UHPLC", code: "CG10-1A", mode: "UHPLC - ELS detector (Instrument use)", unit: "hour", mahidol: 300, gov: 400, priv: 600 },
  { group: "Chromatograph", instrument: "UHPLC", code: "CG10-2A", mode: "UHPLC - ELS detector  (Instrument use with user column)", unit: "hour", mahidol: 270, gov: 350, priv: 550 },
  { group: "Chromatograph", instrument: "UHPLC", code: "CG10-3A", mode: "UHPLC - fraction manager (Instrument use)", unit: "hour", mahidol: 200, gov: 250, priv: 400 },
  { group: "Chromatograph", instrument: "UHPLC", code: "CG10-4A", mode: "UHPLC - PDA detector (Instrument use)", unit: "hour", mahidol: 250, gov: 350, priv: 500 },
  { group: "Chromatograph", instrument: "UHPLC", code: "CG10-5A", mode: "UHPLC - PDA detector  (Instrument use with user column)", unit: "hour", mahidol: 225, gov: 300, priv: 450 },
  { group: "Chromatograph", instrument: "UPLC", code: "CG11-1A", mode: "UPLC (Instrument use)", unit: "hour", mahidol: 250, gov: 350, priv: 500 },
  { group: "Chromatograph", instrument: "UPLC", code: "CG11-2A", mode: "UPLC (Instrument use with user column)", unit: "hour", mahidol: 225, gov: 300, priv: 450 },

  // ────────────────── Freezer ──────────────────
  { group: "Freezer", instrument: "Freezer", code: "FZ01-1A", mode: "Freezer -20 C (Shelf/day)", unit: "day", mahidol: 100, gov: 150, priv: 200 },
  { group: "Freezer", instrument: "Freezer", code: "FZ01-2A", mode: "Freezer -20 C (Shelf/month)", unit: "month", mahidol: 120, gov: 150, priv: 250 },
  { group: "Freezer", instrument: "Freezer", code: "FZ01-3A", mode: "Freezer -40 C (Rack/day)", unit: "day", mahidol: 120, gov: 150, priv: 250 },
  { group: "Freezer", instrument: "Freezer", code: "FZ01-4A", mode: "Freezer -40 C (Rack/month)", unit: "month", mahidol: 150, gov: 200, priv: 300 },
  { group: "Freezer", instrument: "Freezer", code: "FZ01-5A", mode: "Freezer -80 C (Rack/day)", unit: "day", mahidol: 150, gov: 200, priv: 300 },
  { group: "Freezer", instrument: "Freezer", code: "FZ01-6A", mode: "Freezer -80 C (Rack/month)", unit: "month", mahidol: 350, gov: 450, priv: 700 },

  // ────────────────── Microscope ──────────────────
  { group: "Microscope", instrument: "Atomic force microscope : AFM", code: "MC01-1A", mode: "AFM (Instrument use)", unit: "hour", mahidol: 500, gov: 650, priv: 1000 },
  { group: "Microscope", instrument: "Atomic force microscope : AFM", code: "MC01-2A", mode: "AFM-RAMAN (Instrument use)", unit: "hour", mahidol: 600, gov: 750, priv: 1200 },
  { group: "Microscope", instrument: "Atomic force microscope : AFM", code: "MC01-1B", mode: "AFM (Program analysis)", unit: "hour", mahidol: 250, gov: 350, priv: 500 },
  { group: "Microscope", instrument: "Atomic force microscope : AFM", code: "MC01-2B", mode: "AFM-RAMAN (Program analysis)", unit: "hour", mahidol: 300, gov: 400, priv: 600 },
  { group: "Microscope", instrument: "Cryo-TEM", code: "MC02-1A", mode: "Cryo-TEM - ambient operation (Instrument use)", unit: "hour", mahidol: 1800, gov: 2250, priv: 3600 },
  { group: "Microscope", instrument: "Cryo-TEM", code: "MC02-2A", mode: "Cryo-TEM - cryogenic operation (Instrument use)", unit: "hour", mahidol: 2000, gov: 2500, priv: 4000 },
  { group: "Microscope", instrument: "Cryo-TEM", code: "MC02-1B", mode: "Cryo-TEM (Program analysis)", unit: "hour", mahidol: 1000, gov: 1250, priv: 2000 },
  { group: "Microscope", instrument: "Cryo-TEM", code: "MC02-1C", mode: "Cryo-TEM - 3D reconstruction (Test and analysis)", unit: "hour", mahidol: 1000, gov: 1250, priv: 2000 },
  { group: "Microscope", instrument: "DeltaVision microscope", code: "MC03-1A", mode: "DeltaVision microscope (Instrument use)", unit: "hour", mahidol: 250, gov: 350, priv: 500 },
  { group: "Microscope", instrument: "Inverted microscope", code: "MC04-1A", mode: "Inverted microscope - bright field (Instrument use)", unit: "hour", mahidol: 100, gov: 150, priv: 200 },
  { group: "Microscope", instrument: "Inverted microscope", code: "MC04-2A", mode: "Inverted microscope - fluorescence (Instrument use)", unit: "hour", mahidol: 150, gov: 200, priv: 300 },
  { group: "Microscope", instrument: "Inverted microscope", code: "MC04-3A", mode: "High-resolution inverted microscope - bright field  (Instrument use)", unit: "hour", mahidol: 150, gov: 200, priv: 300 },
  { group: "Microscope", instrument: "Inverted microscope", code: "MC04-4A", mode: "High-resolution inverted microscope - fluorescence  (Instrument use)", unit: "hour", mahidol: 200, gov: 250, priv: 400 },
  { group: "Microscope", instrument: "Laser microdissection microscope : LMD", code: "MC05-1A", mode: "LMD - bright field (Instrument use)", unit: "hour", mahidol: 250, gov: 350, priv: 500 },
  { group: "Microscope", instrument: "Laser microdissection microscope : LMD", code: "MC05-2A", mode: "LMD - fluorescence (Instrument use)", unit: "hour", mahidol: 300, gov: 400, priv: 600 },
  { group: "Microscope", instrument: "Laser microdissection microscope : LMD", code: "MC05-3A", mode: "LMD - laser microdissection (Instrument use)", unit: "hour", mahidol: 350, gov: 450, priv: 700 },
  { group: "Microscope", instrument: "Optical microscope", code: "MC06-1A", mode: "Optical microscope (Instrument use)", unit: "hour", mahidol: 10, gov: 15, priv: 20 },
  { group: "Microscope", instrument: "Optical sectioning microscope", code: "MC07-1A", mode: "Optical sectioning microscope (Instrument use)", unit: "hour", mahidol: 250, gov: 350, priv: 500 },
  { group: "Microscope", instrument: "Stereo microscope", code: "MC08-1A", mode: "Stereo microscope - bright field (Instrument use)", unit: "hour", mahidol: 100, gov: 150, priv: 200 },
  { group: "Microscope", instrument: "Stereo microscope", code: "MC08-2A", mode: "Stereo microscope - fluorescence (Instrument use)", unit: "hour", mahidol: 150, gov: 200, priv: 300 },
  { group: "Microscope", instrument: "Scanning electron microscope : SEM", code: "MC09-1A", mode: "FESEM - EDS (Instrument use)", unit: "sample", mahidol: 400, gov: 500, priv: 800 },
  { group: "Microscope", instrument: "Scanning electron microscope : SEM", code: "MC09-2A", mode: "FESEM - imaging (Instrument use)", unit: "hour", mahidol: 1200, gov: 1500, priv: 2400 },
  { group: "Microscope", instrument: "Scanning electron microscope : SEM", code: "MC09-3A", mode: "SEM - EDS (Instrument use)", unit: "sample", mahidol: 400, gov: 500, priv: 800 },
  { group: "Microscope", instrument: "Scanning electron microscope : SEM", code: "MC09-4A", mode: "SEM - imaging (Instrument use)", unit: "hour", mahidol: 550, gov: 700, priv: 1100 },
  { group: "Microscope", instrument: "Scanning electron microscope : SEM", code: "MC09-1D", mode: "FESEM - EDS (Test)", unit: "sample", mahidol: 1200, gov: 1500, priv: 2400 },
  { group: "Microscope", instrument: "Scanning electron microscope : SEM", code: "MC09-2D", mode: "FESEM - imaging (Test)", unit: "hour", mahidol: 2200, gov: 2750, priv: 4400 },
  { group: "Microscope", instrument: "Scanning electron microscope : SEM", code: "MC09-3D", mode: "SEM - EDS (Test)", unit: "sample", mahidol: 1200, gov: 1500, priv: 2400 },
  { group: "Microscope", instrument: "Scanning electron microscope : SEM", code: "MC09-4D", mode: "SEM - imaging (Test)", unit: "hour", mahidol: 1600, gov: 2000, priv: 3200 },

  // ────────────────── Sample preparation ──────────────────
  { group: "Sample preparation", instrument: "Analytical balance", code: "SP01-1A", mode: "Analytical balance 2 digits (Instrument use)", unit: "hour", mahidol: 20, gov: 30, priv: 40 },
  { group: "Sample preparation", instrument: "Analytical balance", code: "SP01-2A", mode: "Analytical balance 4 digits (Instrument use)", unit: "hour", mahidol: 30, gov: 40, priv: 60 },
  { group: "Sample preparation", instrument: "Analytical balance", code: "SP01-3A", mode: "Analytical balance 6 digits (Instrument use)", unit: "hour", mahidol: 50, gov: 75, priv: 100 },
  { group: "Sample preparation", instrument: "Auto fine coater", code: "SP02-1A", mode: "Auto fine coater (Instrument use)", unit: "run", mahidol: 350, gov: 450, priv: 700 },
  { group: "Sample preparation", instrument: "Autoclave", code: "SP03-1A", mode: "Autoclave - 50 litre (Instrument use)", unit: "run", mahidol: 200, gov: 250, priv: 400 },
  { group: "Sample preparation", instrument: "Autoclave", code: "SP03-2A", mode: "Autoclave - 110 litre (Instrument use)", unit: "run", mahidol: 250, gov: 350, priv: 500 },
  { group: "Sample preparation", instrument: "Automated liquid handling", code: "SP04-1A", mode: "Automated liquid handling (Instrument use)", unit: "hour", mahidol: 300, gov: 400, priv: 600 },
  { group: "Sample preparation", instrument: "Automated liquid handling", code: "SP05-1A", mode: "Automated vitrification machine (Instrument use)", unit: "hour", mahidol: 100, gov: 150, priv: 200 },
  { group: "Sample preparation", instrument: "Blender", code: "SP06-1A", mode: "Blender (Instrument use)", unit: "hour", mahidol: 50, gov: 75, priv: 100 },
  { group: "Sample preparation", instrument: "Centifuge", code: "SP07-1A", mode: "Benchtop centrifuge (Instrument use)", unit: "hour", mahidol: 50, gov: 75, priv: 100 },
  { group: "Sample preparation", instrument: "Centifuge", code: "SP07-2A", mode: "High speed centrifuge (Instrument use)", unit: "hour", mahidol: 120, gov: 150, priv: 250 },
  { group: "Sample preparation", instrument: "Centifuge", code: "SP07-3A", mode: "Super speed centrifuge (Instrument use)", unit: "hour", mahidol: 140, gov: 175, priv: 280 },
  { group: "Sample preparation", instrument: "Centifuge", code: "SP07-4A", mode: "Ultra speed centrifuge (Instrument use)", unit: "hour", mahidol: 150, gov: 200, priv: 300 },
  { group: "Sample preparation", instrument: "Concentrator", code: "SP08-1A", mode: "Cooling concentrator (Instrument use)", unit: "hour", mahidol: 50, gov: 75, priv: 100 },
  { group: "Sample preparation", instrument: "Concentrator", code: "SP08-2A", mode: "Nitrogen concentrator (Instrument use)", unit: "hour", mahidol: 100, gov: 150, priv: 200 },
  { group: "Sample preparation", instrument: "Concentrator", code: "SP08-3A", mode: "Speed vacuum concentrator (Instrument use)", unit: "hour", mahidol: 50, gov: 75, priv: 100 },
  { group: "Sample preparation", instrument: "Concentrator", code: "SP08-4A", mode: "Cross-flow concentrator (Instrument use)", unit: "hour", mahidol: 250, gov: 350, priv: 500 },
  { group: "Sample preparation", instrument: "Critical point drier", code: "SP09-1A", mode: "Critical point drier (Instrument use)", unit: "run", mahidol: 350, gov: 450, priv: 700 },
  { group: "Sample preparation", instrument: "Cryostat", code: "SP10-1A", mode: "Cryostat (Instrument use)", unit: "hour", mahidol: 50, gov: 75, priv: 100 },
  { group: "Sample preparation", instrument: "Ductless fume hood", code: "SP11-1A", mode: "Ductless fume hood (Instrument use)", unit: "hour", mahidol: 20, gov: 30, priv: 40 },
  { group: "Sample preparation", instrument: "Freeze dryer", code: "SP12-1D", mode: "Benchtop shell freezer (Test)", unit: "hour", mahidol: 100, gov: 150, priv: 200 },
  { group: "Sample preparation", instrument: "Freeze dryer", code: "SP12-2D", mode: "Freeze dryer (Test)", unit: "hour", mahidol: 50, gov: 75, priv: 100 },
  { group: "Sample preparation", instrument: "Glow discharge machine", code: "SP13-1A", mode: "Glow discharge machine", unit: "run", mahidol: 100, gov: 150, priv: 200 },
  { group: "Sample preparation", instrument: "Grinder", code: "SP14-1A", mode: "Cryogenic grinder (Instrument use)", unit: "hour", mahidol: 100, gov: 150, priv: 200 },
  { group: "Sample preparation", instrument: "Grinder", code: "SP14-2A", mode: "Grinding machine (Instrument use)", unit: "sample", mahidol: 50, gov: 75, priv: 100 },
  { group: "Sample preparation", instrument: "Heat block", code: "SP15-1A", mode: "Heat block (Instrument use)", unit: "hour", mahidol: 20, gov: 30, priv: 40 },
  { group: "Sample preparation", instrument: "Sonicator", code: "SP16-1A", mode: "Sonicator bath (Instrument use)", unit: "hour", mahidol: 20, gov: 30, priv: 40 },
  { group: "Sample preparation", instrument: "Sonicator", code: "SP16-2A", mode: "Ultrasonicator probe (Instrument use)", unit: "hour", mahidol: 50, gov: 75, priv: 100 },
  { group: "Sample preparation", instrument: "Homoginizer", code: "SP17-1A", mode: "Homoginizer (Instrument use)", unit: "hour", mahidol: 50, gov: 75, priv: 100 },
  { group: "Sample preparation", instrument: "Hot air oven", code: "SP18-1A", mode: "Hot air oven (Instrument use)", unit: "hour", mahidol: 20, gov: 30, priv: 40 },
  { group: "Sample preparation", instrument: "Hot plate stirrer", code: "SP19-1A", mode: "Hot plate stirrer (Instrument use)", unit: "hour", mahidol: 20, gov: 30, priv: 40 },
  { group: "Sample preparation", instrument: "Matrix sprayer", code: "SP20-1A", mode: "Matrix sprayer (Instrument use)", unit: "hour", mahidol: 250, gov: 350, priv: 500 },
  { group: "Sample preparation", instrument: "Mini see-saw rocker", code: "SP21-1A", mode: "Mini see-saw rocker (Instrument use)", unit: "hour", mahidol: 30, gov: 40, priv: 60 },
  { group: "Sample preparation", instrument: "Mixer", code: "SP22-1A", mode: "QuEChERS vortex mixer (Instrument use)", unit: "hour", mahidol: 30, gov: 40, priv: 60 },
  { group: "Sample preparation", instrument: "Mixer", code: "SP22-2A", mode: "Thermomixer (Instrument use)", unit: "hour", mahidol: 20, gov: 30, priv: 40 },
  { group: "Sample preparation", instrument: "Mixer", code: "SP22-3A", mode: "Vortex mixer (Instrument use)", unit: "hour", mahidol: 20, gov: 30, priv: 40 },
  { group: "Sample preparation", instrument: "Muffle furnace", code: "SP23-1A", mode: "Muffle furnace (Instrument use)", unit: "hour", mahidol: 50, gov: 75, priv: 100 },
  { group: "Sample preparation", instrument: "Pellet press machine", code: "SP24-1A", mode: "Hydraulic pellet press machine (Instrument use)", unit: "hour", mahidol: 10, gov: 15, priv: 20 },
  { group: "Sample preparation", instrument: "Pellet press machine", code: "SP24-2A", mode: "Pellet press machine (Instrument use)", unit: "sample", mahidol: 50, gov: 75, priv: 100 },
  { group: "Sample preparation", instrument: "pH Meter", code: "SP25-1A", mode: "pH Meter (Instrument use)", unit: "hour", mahidol: 20, gov: 30, priv: 40 },
  { group: "Sample preparation", instrument: "Positive pressure manifold", code: "SP26-1A", mode: "Positive pressure manifold (Instrument use)", unit: "hour", mahidol: 50, gov: 75, priv: 100 },
  { group: "Sample preparation", instrument: "Rotary evaporator", code: "SP27-1A", mode: "Rotary evaporator (Instrument use)", unit: "hour", mahidol: 50, gov: 75, priv: 100 },
  { group: "Sample preparation", instrument: "Water bath", code: "SP28-1A", mode: "Water bath (Instrument use)", unit: "hour", mahidol: 30, gov: 40, priv: 60 },

  // ────────────────── Spectrometer ──────────────────
  { group: "Spectrometer", instrument: "Circular dichroism spectrometer : CD", code: "SM01-1A", mode: "CD (Instrument use)", unit: "hour", mahidol: 350, gov: 450, priv: 700 },
  { group: "Spectrometer", instrument: "Circular dichroism spectrometer : CD", code: "SM01-1B", mode: "CD (Program analysis)", unit: "hour", mahidol: 200, gov: 250, priv: 400 },
  { group: "Spectrometer", instrument: "Circular dichroism spectrometer : CD", code: "SM01-1D", mode: "CD - spectra measurement (Test)", unit: "sample", mahidol: 550, gov: 700, priv: 1100 },
  { group: "Spectrometer", instrument: "Circular dichroism spectrometer : CD", code: "SM01-2D", mode: "CD - variable temperature and interval measurement (Test)", unit: "hour", mahidol: 550, gov: 700, priv: 1100 },
  { group: "Spectrometer", instrument: "Fluorometer", code: "SM02-1A", mode: "Fluorometer (Instrument use)", unit: "hour", mahidol: 50, gov: 75, priv: 100 },
  { group: "Spectrometer", instrument: "Fourier-transform infrared : FTIR", code: "SM03-1A", mode: "FTIR microscope (Instrument use)", unit: "hour", mahidol: 300, gov: 400, priv: 600 },
  { group: "Spectrometer", instrument: "Fourier-transform infrared : FTIR", code: "SM03-2A", mode: "FTIR spectrometer - ATR (Instrument use)", unit: "hour", mahidol: 150, gov: 200, priv: 300 },
  { group: "Spectrometer", instrument: "Fourier-transform infrared : FTIR", code: "SM03-3A", mode: "FTIR spectrometer - DRIFTS (Instrument use)", unit: "hour", mahidol: 300, gov: 400, priv: 600 },
  { group: "Spectrometer", instrument: "Fourier-transform infrared : FTIR", code: "SM03-4A", mode: "FTIR spectrometer - DRIFTS  (Instrument use with user IR transparent material)", unit: "hour", mahidol: 150, gov: 200, priv: 300 },
  { group: "Spectrometer", instrument: "Fourier-transform infrared : FTIR", code: "SM03-5A", mode: "FTIR spectrometer - transmission (Instrument use)", unit: "hour", mahidol: 300, gov: 400, priv: 600 },
  { group: "Spectrometer", instrument: "Fourier-transform infrared : FTIR", code: "SM03-6A", mode: "FTIR spectrometer - transmission (Instrument use with user IR transparent material)", unit: "hour", mahidol: 150, gov: 250, priv: 450 },
  { group: "Spectrometer", instrument: "Fourier-transform infrared : FTIR", code: "SM03-1B", mode: "FTIR microscope (Program analysis)", unit: "hour", mahidol: 150, gov: 200, priv: 300 },
  { group: "Spectrometer", instrument: "Fourier-transform infrared : FTIR", code: "SM03-2B", mode: "FTIR spectrometer (Program analysis)", unit: "hour", mahidol: 75, gov: 100, priv: 150 },
  { group: "Spectrometer", instrument: "Fourier-transform infrared : FTIR", code: "SM03-1C", mode: "FTIR microscope (Test and analysis)", unit: "sample", mahidol: 825, gov: 1050, priv: 1650 },
  { group: "Spectrometer", instrument: "Fourier-transform infrared : FTIR", code: "SM03-2C", mode: "FTIR spectrometer (Test and analysis)", unit: "sample", mahidol: 450, gov: 600, priv: 900 },
  { group: "Spectrometer", instrument: "Fourier-transform infrared : FTIR", code: "SM03-1D", mode: "FTIR microscope (Test)", unit: "sample", mahidol: 550, gov: 700, priv: 1100 },
  { group: "Spectrometer", instrument: "Fourier-transform infrared : FTIR", code: "SM03-2D", mode: "FTIR spectrometer (Test)", unit: "sample", mahidol: 300, gov: 400, priv: 600 },
  { group: "Spectrometer", instrument: "Flame atomic absorption spectrometer : FAAS", code: "SM04-1A", mode: "FAAS - C2H2/Air (Instrument use)", unit: "hour", mahidol: 250, gov: 350, priv: 500 },
  { group: "Spectrometer", instrument: "Flame atomic absorption spectrometer : FAAS", code: "SM04-2A", mode: "FAAS - C2H2/N2O (Instrument use)", unit: "hour", mahidol: 500, gov: 650, priv: 1000 },
  { group: "Spectrometer", instrument: "Flame atomic absorption spectrometer : FAAS", code: "SM04-1D", mode: "FAAS - calibration curve under C2H2/Air (Test)", unit: "element/run", mahidol: 150, gov: 200, priv: 300 },
  { group: "Spectrometer", instrument: "Flame atomic absorption spectrometer : FAAS", code: "SM04-2D", mode: "FAAS - calibration curve under C2H2/N2O (Test)", unit: "element/run", mahidol: 300, gov: 400, priv: 600 },
  { group: "Spectrometer", instrument: "Flame atomic absorption spectrometer : FAAS", code: "SM04-3D", mode: "FAAS - Al (Test)", unit: "sample", mahidol: 200, gov: 250, priv: 400 },
  { group: "Spectrometer", instrument: "Flame atomic absorption spectrometer : FAAS", code: "SM04-4D", mode: "FAAS - Ag (Test)", unit: "sample", mahidol: 75, gov: 100, priv: 150 },
  { group: "Spectrometer", instrument: "Flame atomic absorption spectrometer : FAAS", code: "SM04-5D", mode: "FAAS - Au (Test)", unit: "sample", mahidol: 75, gov: 100, priv: 150 },
  { group: "Spectrometer", instrument: "Flame atomic absorption spectrometer : FAAS", code: "SM04-6D", mode: "FAAS - Ca (Test)", unit: "sample", mahidol: 75, gov: 100, priv: 150 },
  { group: "Spectrometer", instrument: "Flame atomic absorption spectrometer : FAAS", code: "SM04-7D", mode: "FAAS - Cd (Test)", unit: "sample", mahidol: 75, gov: 100, priv: 150 },
  { group: "Spectrometer", instrument: "Flame atomic absorption spectrometer : FAAS", code: "SM04-8D", mode: "FAAS - Cr (Test)", unit: "sample", mahidol: 75, gov: 100, priv: 150 },
  { group: "Spectrometer", instrument: "Flame atomic absorption spectrometer : FAAS", code: "SM04-9D", mode: "FAAS - Cu (Test)", unit: "sample", mahidol: 75, gov: 100, priv: 150 },
  { group: "Spectrometer", instrument: "Flame atomic absorption spectrometer : FAAS", code: "SM04-10D", mode: "FAAS - Fe (Test)", unit: "sample", mahidol: 75, gov: 100, priv: 150 },
  { group: "Spectrometer", instrument: "Flame atomic absorption spectrometer : FAAS", code: "SM04-11D", mode: "FAAS - K (Test)", unit: "sample", mahidol: 75, gov: 100, priv: 150 },
  { group: "Spectrometer", instrument: "Flame atomic absorption spectrometer : FAAS", code: "SM04-12D", mode: "FAAS - Mg (Test)", unit: "sample", mahidol: 75, gov: 100, priv: 150 },
  { group: "Spectrometer", instrument: "Flame atomic absorption spectrometer : FAAS", code: "SM04-13D", mode: "FAAS - Mn (Test)", unit: "sample", mahidol: 75, gov: 100, priv: 150 },
  { group: "Spectrometer", instrument: "Flame atomic absorption spectrometer : FAAS", code: "SM04-14D", mode: "FAAS - Na (Test)", unit: "sample", mahidol: 75, gov: 100, priv: 150 },
  { group: "Spectrometer", instrument: "Flame atomic absorption spectrometer : FAAS", code: "SM04-15D", mode: "FAAS - Ni (Test)", unit: "sample", mahidol: 75, gov: 100, priv: 150 },
  { group: "Spectrometer", instrument: "Flame atomic absorption spectrometer : FAAS", code: "SM04-16D", mode: "FAAS - Pb (Test)", unit: "sample", mahidol: 75, gov: 100, priv: 150 },
  { group: "Spectrometer", instrument: "Flame atomic absorption spectrometer : FAAS", code: "SM04-17D", mode: "FAAS - Si (Test)", unit: "sample", mahidol: 200, gov: 250, priv: 400 },
  { group: "Spectrometer", instrument: "Flame atomic absorption spectrometer : FAAS", code: "SM04-18D", mode: "FAAS - Ti (Test)", unit: "sample", mahidol: 200, gov: 250, priv: 400 },
  { group: "Spectrometer", instrument: "Flame atomic absorption spectrometer : FAAS", code: "SM04-19D", mode: "FAAS - Zn (Test)", unit: "sample", mahidol: 75, gov: 100, priv: 150 },
  { group: "Spectrometer", instrument: "Graphite furnace atomic absorption spectrometer : GFAAS", code: "SM05-1A", mode: "GFAAS (Instrument use)", unit: "hour", mahidol: 500, gov: 650, priv: 1000 },
  { group: "Spectrometer", instrument: "Graphite furnace atomic absorption spectrometer : GFAAS", code: "SM05-1D", mode: "GFAAS - calibration curve (Test)", unit: "element/run", mahidol: 200, gov: 250, priv: 400 },
  { group: "Spectrometer", instrument: "Graphite furnace atomic absorption spectrometer : GFAAS", code: "SM05-2D", mode: "GFAAS - Ag (Test)", unit: "sample", mahidol: 200, gov: 250, priv: 400 },
  { group: "Spectrometer", instrument: "Graphite furnace atomic absorption spectrometer : GFAAS", code: "SM05-3D", mode: "GFAAS - Al (Test)", unit: "sample", mahidol: 200, gov: 250, priv: 400 },
  { group: "Spectrometer", instrument: "Graphite furnace atomic absorption spectrometer : GFAAS", code: "SM05-4D", mode: "GFAAS - As (Test)", unit: "sample", mahidol: 200, gov: 250, priv: 400 },
  { group: "Spectrometer", instrument: "Graphite furnace atomic absorption spectrometer : GFAAS", code: "SM05-5D", mode: "GFAAS - Au (Test)", unit: "sample", mahidol: 200, gov: 250, priv: 400 },
  { group: "Spectrometer", instrument: "Graphite furnace atomic absorption spectrometer : GFAAS", code: "SM05-6D", mode: "GFAAS - Ca (Test)", unit: "sample", mahidol: 200, gov: 250, priv: 400 },
  { group: "Spectrometer", instrument: "Graphite furnace atomic absorption spectrometer : GFAAS", code: "SM05-7D", mode: "GFAAS - Cd (Test)", unit: "sample", mahidol: 200, gov: 250, priv: 400 },
  { group: "Spectrometer", instrument: "Graphite furnace atomic absorption spectrometer : GFAAS", code: "SM05-8D", mode: "GFAAS - Cr (Test)", unit: "sample", mahidol: 200, gov: 250, priv: 400 },
  { group: "Spectrometer", instrument: "Graphite furnace atomic absorption spectrometer : GFAAS", code: "SM05-9D", mode: "GFAAS - Cu (Test)", unit: "sample", mahidol: 200, gov: 250, priv: 400 },
  { group: "Spectrometer", instrument: "Graphite furnace atomic absorption spectrometer : GFAAS", code: "SM05-10D", mode: "GFAAS - Fe (Test)", unit: "sample", mahidol: 200, gov: 250, priv: 400 },
  { group: "Spectrometer", instrument: "Graphite furnace atomic absorption spectrometer : GFAAS", code: "SM05-11D", mode: "GFAAS - K (Test)", unit: "sample", mahidol: 200, gov: 250, priv: 400 },
  { group: "Spectrometer", instrument: "Graphite furnace atomic absorption spectrometer : GFAAS", code: "SM05-12D", mode: "GFAAS - Mg (Test)", unit: "sample", mahidol: 200, gov: 250, priv: 400 },
  { group: "Spectrometer", instrument: "Graphite furnace atomic absorption spectrometer : GFAAS", code: "SM05-13D", mode: "GFAAS - Mn (Test)", unit: "sample", mahidol: 200, gov: 250, priv: 400 },
  { group: "Spectrometer", instrument: "Graphite furnace atomic absorption spectrometer : GFAAS", code: "SM05-14D", mode: "GFAAS - Na (Test)", unit: "sample", mahidol: 200, gov: 250, priv: 400 },
  { group: "Spectrometer", instrument: "Graphite furnace atomic absorption spectrometer : GFAAS", code: "SM05-15D", mode: "GFAAS - Ni (Test)", unit: "sample", mahidol: 200, gov: 250, priv: 400 },
  { group: "Spectrometer", instrument: "Graphite furnace atomic absorption spectrometer : GFAAS", code: "SM05-16D", mode: "GFAAS - Pb (Test)", unit: "sample", mahidol: 200, gov: 250, priv: 400 },
  { group: "Spectrometer", instrument: "Graphite furnace atomic absorption spectrometer : GFAAS", code: "SM05-17D", mode: "GFAAS - Si (Test)", unit: "sample", mahidol: 200, gov: 250, priv: 400 },
  { group: "Spectrometer", instrument: "Graphite furnace atomic absorption spectrometer : GFAAS", code: "SM05-18D", mode: "GFAAS - Ti (Test)", unit: "sample", mahidol: 200, gov: 250, priv: 400 },
  { group: "Spectrometer", instrument: "Graphite furnace atomic absorption spectrometer : GFAAS", code: "SM05-19D", mode: "GFAAS - Zn (Test)", unit: "sample", mahidol: 200, gov: 250, priv: 400 },
  { group: "Spectrometer", instrument: "Inductively couple plasma mass spectrometer : ICP-MS", code: "SM06-1A", mode: "ICP-MS - particle size, isotope (Instrument use)", unit: "hour", mahidol: 700, gov: 900, priv: 1400 },
  { group: "Spectrometer", instrument: "Inductively couple plasma mass spectrometer : ICP-MS", code: "SM06-2A", mode: "ICP-MS - quantitative analysis, qualitative analysis  (Instrument use, 1-10 elements)", unit: "hour", mahidol: 750, gov: 950, priv: 1500 },
  { group: "Spectrometer", instrument: "Inductively couple plasma mass spectrometer : ICP-MS", code: "SM06-3A", mode: "ICP-MS - quantitative analysis, qualitative analysis  (Instrument use, 11-20 elements)", unit: "hour", mahidol: 950, gov: 1200, priv: 1900 },
  { group: "Spectrometer", instrument: "Inductively couple plasma mass spectrometer : ICP-MS", code: "SM06-4A", mode: "ICP-MS - quantitative analysis, qualitative analysis (Instrument use, 21-30 elements)", unit: "hour", mahidol: 1150, gov: 1450, priv: 2300 },
  { group: "Spectrometer", instrument: "Inductively couple plasma mass spectrometer : ICP-MS", code: "SM06-1D", mode: "ICP-MS - calibration curve (Test)", unit: "run", mahidol: 300, gov: 400, priv: 600 },
  { group: "Spectrometer", instrument: "Inductively couple plasma mass spectrometer : ICP-MS", code: "SM06-2D", mode: "ICP-MS - microwave digestion (Test)", unit: "sample", mahidol: 400, gov: 500, priv: 800 },
  { group: "Spectrometer", instrument: "Inductively couple plasma mass spectrometer : ICP-MS", code: "SM06-3D", mode: "ICP-MS - quantitative analysis, qualitative analysis (Test, 1-10 elements)", unit: "sample", mahidol: 1000, gov: 1250, priv: 2000 },
  { group: "Spectrometer", instrument: "Inductively couple plasma mass spectrometer : ICP-MS", code: "SM06-4D", mode: "ICP-MS - quantitative analysis, qualitative analysis  (Test, 11-20 elements)", unit: "sample", mahidol: 1200, gov: 1500, priv: 2400 },
  { group: "Spectrometer", instrument: "Inductively couple plasma mass spectrometer : ICP-MS", code: "SM06-5D", mode: "ICP-MS - quantitative analysis, qualitative analysis (Test, 21-30 elements)", unit: "sample", mahidol: 1400, gov: 1750, priv: 2800 },
  { group: "Spectrometer", instrument: "Particle analyzer", code: "SM07-1A", mode: "Micro-Sizer (Instrument use)", unit: "hour", mahidol: 200, gov: 250, priv: 400 },
  { group: "Spectrometer", instrument: "Particle analyzer", code: "SM07-2A", mode: "Nano-Sizer - particle size measurement (Instrument use)", unit: "hour", mahidol: 150, gov: 200, priv: 300 },
  { group: "Spectrometer", instrument: "Particle analyzer", code: "SM07-3A", mode: "Nano-Sizer - zeta potential measurement (Instrument use)", unit: "hour", mahidol: 350, gov: 450, priv: 700 },
  { group: "Spectrometer", instrument: "Particle analyzer", code: "SM07-1B", mode: "Micro-Sizer (Program analysis)", unit: "hour", mahidol: 100, gov: 150, priv: 200 },
  { group: "Spectrometer", instrument: "Particle analyzer", code: "SM07-2B", mode: "Nano-Sizer - particle size measurement  (Program analysis)", unit: "hour", mahidol: 75, gov: 100, priv: 150 },
  { group: "Spectrometer", instrument: "Particle analyzer", code: "SM07-3B", mode: "Nano-Sizer - zeta potential measurement (Program analysis)", unit: "hour", mahidol: 200, gov: 250, priv: 400 },
  { group: "Spectrometer", instrument: "Particle analyzer", code: "SM07-1D", mode: "Micro-Sizer (Test)", unit: "sample", mahidol: 550, gov: 700, priv: 1100 },
  { group: "Spectrometer", instrument: "Particle analyzer", code: "SM07-2D", mode: "Nano-Sizer - particle size measurement (Test)", unit: "sample", mahidol: 500, gov: 650, priv: 1000 },
  { group: "Spectrometer", instrument: "Particle analyzer", code: "SM07-3D", mode: "Nano-Sizer - zeta potential measurement (Test)", unit: "sample", mahidol: 650, gov: 850, priv: 1300 },
  { group: "Spectrometer", instrument: "Nanodrop", code: "SM08-1A", mode: "Nanodrop (Instrument use)", unit: "hour", mahidol: 50, gov: 75, priv: 100 },
  { group: "Spectrometer", instrument: "Nuclear magnetic resonance spectrometer : NMR", code: "SM09-1A", mode: "NMR (Instrument use)", unit: "hour", mahidol: 1000, gov: 1250, priv: 2000 },
  { group: "Spectrometer", instrument: "Nuclear magnetic resonance spectrometer : NMR", code: "SM09-1B", mode: "NMR (Program analysis)", unit: "hour", mahidol: 300, gov: 400, priv: 600 },
  { group: "Spectrometer", instrument: "Nuclear magnetic resonance spectrometer : NMR", code: "SM09-1D", mode: "NMR - 2D (Test)", unit: "sample", mahidol: 1200, gov: 1500, priv: 2400 },
  { group: "Spectrometer", instrument: "Nuclear magnetic resonance spectrometer : NMR", code: "SM09-2D", mode: "NMR - 1H (Test)", unit: "sample", mahidol: 350, gov: 450, priv: 700 },
  { group: "Spectrometer", instrument: "Nuclear magnetic resonance spectrometer : NMR", code: "SM09-3D", mode: "NMR - 13C, DEPT45, DEPT90, DEPT135 (Test)", unit: "sample", mahidol: 900, gov: 1150, priv: 1800 },
  { group: "Spectrometer", instrument: "Nuclear magnetic resonance spectrometer : NMR", code: "SM09-4D", mode: "NMR - Acetone-d6 preparation (Test)", unit: "sample", mahidol: 400, gov: 500, priv: 800 },
  { group: "Spectrometer", instrument: "Nuclear magnetic resonance spectrometer : NMR", code: "SM09-5D", mode: "NMR - CDCl3 preparation (Test)", unit: "sample", mahidol: 100, gov: 150, priv: 200 },
  { group: "Spectrometer", instrument: "Nuclear magnetic resonance spectrometer : NMR", code: "SM09-6D", mode: "NMR - CD3OD-d4 preparation (Test)", unit: "sample", mahidol: 700, gov: 900, priv: 1400 },
  { group: "Spectrometer", instrument: "Nuclear magnetic resonance spectrometer : NMR", code: "SM09-7D", mode: "NMR - DMSO-d6 preparation (Test)", unit: "sample", mahidol: 350, gov: 450, priv: 700 },
  { group: "Spectrometer", instrument: "Nuclear magnetic resonance spectrometer : NMR", code: "SM09-8D", mode: "NMR - D2O preparation (Test)", unit: "sample", mahidol: 250, gov: 350, priv: 500 },
  { group: "Spectrometer", instrument: "Raman microscope", code: "SM10-1A", mode: "Raman microscope - single spectrum, mapping  (Instrument use)", unit: "hour", mahidol: 300, gov: 400, priv: 600 },
  { group: "Spectrometer", instrument: "Raman microscope", code: "SM10-2A", mode: "Raman microscope - temperature control (Instrument use)", unit: "hour", mahidol: 550, gov: 700, priv: 1100 },
  { group: "Spectrometer", instrument: "Raman microscope", code: "SM10-1D", mode: "Raman microscope - single spectrum, mapping (Test)", unit: "hour", mahidol: 450, gov: 600, priv: 900 },
  { group: "Spectrometer", instrument: "Raman microscope", code: "SM10-2D", mode: "Raman microscope - temperature control (Test)", unit: "hour", mahidol: 850, gov: 1100, priv: 1700 },
  { group: "Spectrometer", instrument: "Spectrofluorometer", code: "SM11-1A", mode: "Spectrofluorometer (Instrument use)", unit: "hour", mahidol: 75, gov: 100, priv: 150 },

  // ────────────────── Surface analysis instrument ──────────────────
  { group: "Surface analysis instrument", instrument: "Optical contact angle : OCA", code: "SF01-1A", mode: "OCA (Instrument use)", unit: "hour", mahidol: 100, gov: 150, priv: 200 },
  { group: "Surface analysis instrument", instrument: "Optical contact angle : OCA", code: "SF01-1B", mode: "OCA (Program analysis)", unit: "hour", mahidol: 50, gov: 75, priv: 100 },
  { group: "Surface analysis instrument", instrument: "Optical contact angle : OCA", code: "SF01-1C", mode: "OCA (Test and analysis)", unit: "sample", mahidol: 400, gov: 500, priv: 800 },
  { group: "Surface analysis instrument", instrument: "Optical contact angle : OCA", code: "SF01-1D", mode: "OCA (Test)", unit: "sample", mahidol: 300, gov: 400, priv: 600 },
  { group: "Surface analysis instrument", instrument: "Tensiometer", code: "SF02-1A", mode: "Tensiometer (Instrument use)", unit: "hour", mahidol: 100, gov: 150, priv: 200 },
  { group: "Surface analysis instrument", instrument: "Tensiometer", code: "SF02-1B", mode: "Tensiometer (Program analysis)", unit: "hour", mahidol: 50, gov: 75, priv: 100 },
  { group: "Surface analysis instrument", instrument: "Tensiometer", code: "SF02-1C", mode: "Tensiometer (Test and analysis)", unit: "sample", mahidol: 400, gov: 500, priv: 800 },
  { group: "Surface analysis instrument", instrument: "Tensiometer", code: "SF02-1D", mode: "Tensiometer (Test)", unit: "sample", mahidol: 300, gov: 400, priv: 600 },

  // ────────────────── Thermal analysis instrument ──────────────────
  { group: "Thermal analysis instrument", instrument: "Simultaneous thermal analyzer : STA", code: "TM01-1A", mode: "Automated-STA (Instrument use)", unit: "hour", mahidol: 350, gov: 450, priv: 700 },
  { group: "Thermal analysis instrument", instrument: "Simultaneous thermal analyzer : STA", code: "TM01-2A", mode: "STA (Instrument use)", unit: "hour", mahidol: 300, gov: 400, priv: 600 },
  { group: "Thermal analysis instrument", instrument: "Simultaneous thermal analyzer : STA", code: "TM01-1B", mode: "Automated-STA (Program analysis)", unit: "hour", mahidol: 200, gov: 250, priv: 400 },
  { group: "Thermal analysis instrument", instrument: "Simultaneous thermal analyzer : STA", code: "TM01-2B", mode: "STA (Program analysis)", unit: "hour", mahidol: 150, gov: 200, priv: 300 },
  { group: "Thermal analysis instrument", instrument: "Simultaneous thermal analyzer : STA", code: "TM01-1C", mode: "Automated-STA (Test and analysis)", unit: "hour", mahidol: 500, gov: 650, priv: 1000 },
  { group: "Thermal analysis instrument", instrument: "Simultaneous thermal analyzer : STA", code: "TM01-2C", mode: "STA (Test and analysis)", unit: "hour", mahidol: 450, gov: 600, priv: 900 },
  { group: "Thermal analysis instrument", instrument: "Differential scanning calorimeter : DSC", code: "TM02-1A", mode: "DSC - medium pressure sample (Instrument use)", unit: "hour", mahidol: 1250, gov: 1350, priv: 1500 },
  { group: "Thermal analysis instrument", instrument: "Differential scanning calorimeter : DSC", code: "TM02-2A", mode: "DSC - medium pressure sample (Instrument use with user crucible)", unit: "hour", mahidol: 250, gov: 350, priv: 500 },
  { group: "Thermal analysis instrument", instrument: "Differential scanning calorimeter : DSC", code: "TM02-3A", mode: "DSC - standard sample (Instrument use)", unit: "hour", mahidol: 500, gov: 650, priv: 1000 },
  { group: "Thermal analysis instrument", instrument: "Differential scanning calorimeter : DSC", code: "TM02-4A", mode: "DSC - standard sample (Instrument use with user crucible)", unit: "hour", mahidol: 250, gov: 350, priv: 500 },
  { group: "Thermal analysis instrument", instrument: "Differential scanning calorimeter : DSC", code: "TM02-1B", mode: "DSC (Program analysis)", unit: "hour", mahidol: 150, gov: 200, priv: 300 },
  { group: "Thermal analysis instrument", instrument: "Differential scanning calorimeter : DSC", code: "TM02-1C", mode: "DSC - high pressure sample (Test and analysis)", unit: "hour", mahidol: 1400, gov: 1750, priv: 2800 },
  { group: "Thermal analysis instrument", instrument: "Differential scanning calorimeter : DSC", code: "TM02-2C", mode: "DSC - high pressure sample  (Test and analysis with user crucible)", unit: "hour", mahidol: 400, gov: 600, priv: 1050 },
  { group: "Thermal analysis instrument", instrument: "Differential scanning calorimeter : DSC", code: "TM02-3C", mode: "DSC - standard sample (Test and analysis)", unit: "hour", mahidol: 650, gov: 850, priv: 1300 },
  { group: "Thermal analysis instrument", instrument: "Differential scanning calorimeter : DSC", code: "TM02-4C", mode: "DSC - standard sample (Test and analysis with user crucible)", unit: "hour", mahidol: 400, gov: 600, priv: 1050 },

  // ────────────────── Water purification system ──────────────────
  { group: "Water purification system", instrument: "Type l (LC-MS grade, resistivity 18.2 M??cm)", code: "WP01-1D", mode: "Type l (LC-MS grade, resistivity 18.2 M??cm)", unit: "litre", mahidol: 150, gov: 200, priv: 300 },
  { group: "Water purification system", instrument: "Type l (Resistivity 18.2 M??cm)", code: "WP01-2D", mode: "Type l (Resistivity 18.2 M??cm)", unit: "litre", mahidol: 60, gov: 80, priv: 120 },
  { group: "Water purification system", instrument: "Type ll (Resistivity > 5 M??cm)", code: "WP01-3D", mode: "Type ll (Resistivity > 5 M??cm)", unit: "litre", mahidol: 30, gov: 40, priv: 60 },
  { group: "Water purification system", instrument: "Type III (RO water)", code: "WP01-4D", mode: "Type III (RO water)", unit: "litre", mahidol: 5, gov: 10, priv: 15 },

  // ────────────────── X-ray-based instrument ──────────────────
  { group: "X-ray-based instrument", instrument: "Nanoscale X-ray computed tomograph : Nano-CT", code: "XR01-1A", mode: "Nano-CT (Instrument use)", unit: "hour", mahidol: 2350, gov: 2900, priv: 4700 },
  { group: "X-ray-based instrument", instrument: "Nanoscale X-ray computed tomograph : Nano-CT", code: "XR01-1B", mode: "Nano-CT (Program analysis)", unit: "hour", mahidol: 600, gov: 750, priv: 1200 },
  { group: "X-ray-based instrument", instrument: "X-ray diffractometer : XRD", code: "XR02-1A", mode: "Benchtop-XRD - phase identification, phase analysis  (Instrument use)", unit: "hour", mahidol: 200, gov: 250, priv: 400 },
  { group: "X-ray-based instrument", instrument: "X-ray diffractometer : XRD", code: "XR02-2A", mode: "XRD - phase identification, phase analysis (Instrument use)", unit: "hour", mahidol: 600, gov: 750, priv: 1200 },
  { group: "X-ray-based instrument", instrument: "X-ray diffractometer : XRD", code: "XR02-3A", mode: "XRD - temperature control, X-ray reflectivity,  grazing incidence diffraction, texture and pole figures  (Instrument use)", unit: "hour", mahidol: 1200, gov: 1500, priv: 2400 },
  { group: "X-ray-based instrument", instrument: "X-ray diffractometer : XRD", code: "XR02-1B", mode: "Benchtop-XRD (Program analysis)", unit: "hour", mahidol: 100, gov: 150, priv: 200 },
  { group: "X-ray-based instrument", instrument: "X-ray diffractometer : XRD", code: "XR02-1C", mode: "Benchtop-XRD - phase identification, phase analysis  (Test and analysis)", unit: "hour", mahidol: 450, gov: 600, priv: 900 },
  { group: "X-ray-based instrument", instrument: "X-ray diffractometer : XRD", code: "XR02-2C", mode: "XRD - phase identification, phase analysis  (Test and analysis)", unit: "hour", mahidol: 1350, gov: 1750, priv: 2700 },
  { group: "X-ray-based instrument", instrument: "X-ray diffractometer : XRD", code: "XR02-1D", mode: "Benchtop-XRD - phase identification, phase analysis (Test)", unit: "hour", mahidol: 300, gov: 400, priv: 600 },
  { group: "X-ray-based instrument", instrument: "X-ray diffractometer : XRD", code: "XR02-2D", mode: "XRD - phase identification, phase analysis (Test)", unit: "hour", mahidol: 900, gov: 1150, priv: 1800 },
  { group: "X-ray-based instrument", instrument: "X-ray diffractometer : XRD", code: "XR02-3D", mode: "XRD - temperature control, X-ray reflectivity,  grazing incidence diffraction, texture and pole figures (Test)", unit: "hour", mahidol: 1800, gov: 2250, priv: 3600 },
  { group: "X-ray-based instrument", instrument: "X-ray fluorescence : XRF", code: "XR04-1A", mode: "Micro-XRF - point measurement, mapping (Instrument use)", unit: "hour", mahidol: 450, gov: 600, priv: 900 },
  { group: "X-ray-based instrument", instrument: "X-ray fluorescence : XRF", code: "XR04-2A", mode: "WDXRF (Instrument use)", unit: "sample", mahidol: 300, gov: 400, priv: 600 },
  { group: "X-ray-based instrument", instrument: "X-ray fluorescence : XRF", code: "XR04-1B", mode: "Micro-XRF (Program analysis)", unit: "hour", mahidol: 250, gov: 300, priv: 500 },
  { group: "X-ray-based instrument", instrument: "X-ray fluorescence : XRF", code: "XR04-2B", mode: "WDXRF (Program analysis)", unit: "hour", mahidol: 200, gov: 250, priv: 400 },
  { group: "X-ray-based instrument", instrument: "X-ray fluorescence : XRF", code: "XR04-1D", mode: "Micro-XRF - point measurement, mapping (Test)", unit: "hour", mahidol: 700, gov: 900, priv: 1400 },
  { group: "X-ray-based instrument", instrument: "X-ray fluorescence : XRF", code: "XR04-2D", mode: "WDXRF (Test)", unit: "sample", mahidol: 600, gov: 750, priv: 1200 },

  // ────────────────── Special tests ──────────────────
  { group: "Special tests", instrument: "Special test 1", code: "ST01-D", mode: "Special test 1", unit: "sample", mahidol: 100, gov: 150, priv: 200 },
  { group: "Special tests", instrument: "Special test 2", code: "ST02-D", mode: "Special test 2", unit: "sample", mahidol: 200, gov: 250, priv: 400 },
  { group: "Special tests", instrument: "Special test 3", code: "ST03-D", mode: "Special test 3", unit: "sample", mahidol: 500, gov: 650, priv: 1000 },
  { group: "Special tests", instrument: "Special test 4", code: "ST04-D", mode: "Special test 4", unit: "sample", mahidol: 1000, gov: 1250, priv: 2000 },
  { group: "Special tests", instrument: "Special test 5", code: "ST05-D", mode: "Special test 5", unit: "sample", mahidol: 2000, gov: 2500, priv: 4000 },
  { group: "Special tests", instrument: "Special test 6", code: "ST06-D", mode: "Special test 6", unit: "sample", mahidol: 3000, gov: 4000, priv: 6000 },
  { group: "Special tests", instrument: "Special test 7", code: "ST07-D", mode: "Special test 7", unit: "sample", mahidol: 5000, gov: 7000, priv: 10000 },
  { group: "Special tests", instrument: "Special test 8", code: "ST08-D", mode: "Special test 8", unit: "sample", mahidol: 10000, gov: 12500, priv: 20000 },

];


// ===== GROUP CONFIG =====
const groupConfig = {
  "Bioscience instrument": { key: "bioscience", icon: "🧬", label: "Bioscience Instrument" },
  "Chromatograph": { key: "chromatograph", icon: "🧪", label: "Chromatograph" },
  "Freezer": { key: "freezer", icon: "❄️", label: "Freezer" },
  "Microscope": { key: "microscope", icon: "🔬", label: "Microscope" },
  "Sample preparation": { key: "sample-prep", icon: "⚗️", label: "Sample Preparation" },
  "Spectrometer": { key: "spectrometer", icon: "📊", label: "Spectrometer" },
  "Surface analysis instrument": { key: "surface", icon: "🔍", label: "Surface Analysis" },
  "Thermal analysis instrument": { key: "thermal", icon: "🌡️", label: "Thermal Analysis" },
  "Water purification system": { key: "water", icon: "💧", label: "Water Purification" },
  "X-ray-based instrument": { key: "xray", icon: "☢️", label: "X-ray Instrument" },
  "Special tests": { key: "special", icon: "⭐", label: "Special Tests" },
};

// ===== BRANCH CONFIG =====
// วิธีตั้งค่าสาขา (Branch):
// หากต้องการเพิ่มสาขาใหม่ ให้ใส่รหัสย่อ (เช่น "phayathai") เป็น key และกำหนดชื่อ (name) และสี (color)
// จากนั้นใน equipmentData เครื่องมือตัวไหนอยู่สาขาใด ให้เพิ่ม property `branch: "รหัสสาขา"` เข้าไป
// เช่น `branch: "phayathai"` (ถ้าไม่ใส่ ระบบจะถือว่าเป็นสาขาเริ่มต้น "salaya" โดยอัตโนมัติ)
const branchConfig = {
  "salaya": { name: "MU-FRF", color: "#2563eb" },
  "muka": { name: "MUKA", color: "#059669" },
  "musc": { name: "MUSC", color: "#db2777" },
};

// ===== DOMAIN TAG LABELS =====
const domainTagLabels = {
  molecular_bio: "Molecular Biology",
  cell_bio: "Cell Biology",
  immunology: "Immunology",
  genomics: "Genomics",
  proteomics: "Proteomics",
  analytical_chem: "Analytical Chemistry",
  pharma: "Pharmaceutical",
  materials: "Materials Science",
  environment: "Environmental Science",
  food_sci: "Food Science",
  nano: "Nanotechnology",
  medicine: "Medicine",
  microbiology: "Microbiology",
  computing: "High-Performance Computing",
};

// ===== EQUIPMENT GROUP CONFIG =====
const equipmentGroupConfig = {
  1: { code: "BS", name: "Bioscience Instrument", nameTh: "เครื่องมือวิทยาศาสตร์ชีวภาพ", icon: "🧬" },
  2: { code: "CG", name: "Chromatograph", nameTh: "โครมาโตกราฟ", icon: "🧪" },
  3: { code: "FZ", name: "Freezer", nameTh: "ตู้แช่แข็ง", icon: "❄️" },
  4: { code: "MC", name: "Microscope", nameTh: "กล้องจุลทรรศน์", icon: "🔬" },
  5: { code: "SP", name: "Sample Preparation", nameTh: "การเตรียมตัวอย่าง", icon: "⚗️" },
  6: { code: "SM", name: "Spectrometer", nameTh: "สเปกโตรมิเตอร์", icon: "📊" },
  7: { code: "SF", name: "Surface Analysis", nameTh: "วิเคราะห์พื้นผิว", icon: "🔍" },
  8: { code: "TM", name: "Thermal Analysis", nameTh: "วิเคราะห์ความร้อน", icon: "🌡️" },
  9: { code: "WP", name: "Water Purification", nameTh: "ระบบน้ำบริสุทธิ์", icon: "💧" },
  10: { code: "XR", name: "X-ray Instrument", nameTh: "เครื่องมือรังสีเอกซ์", icon: "☢️" },
  11: { code: "HPC", name: "High Performance Computing", nameTh: "การคำนวณประสิทธิภาพสูง", icon: "🖥️" },
};

// ===== EQUIPMENT DATA (from Google Sheet — Equipment tab) =====
const equipmentData = [
  { id: 1, groupId: 1, order: "1.10", nameTh: "เครื่องอ่านเพลทวัดแสง (Microplate Reader)", nameEn: "Microplate Reader", brand: "Thermo/Varioskan Flash", qty: 1, testCodes: "BS10-1A, BS10-4A", descTh: "เครื่องอ่านค่าแผ่น 96-well plate วัดได้ทั้งแสง UV/Vis และแสงเรืองแสง (Fluorescence) — เหมาะใช้วัดปริมาณโปรตีน, DNA, ผลการทดลองเซลล์", descEn: "Reads fluorescence, absorbance, and luminescence in 96-well plates. UV-Vis Ex 200–1000 nm, Em 270–840 nm. Used for protein/DNA quantification, ELISA, and cell viability assays.", domainTags: ["molecular_bio", "cell_bio", "pharma", "medicine"], specs: "UV-Vis + Fluorescence; Ex 200-1000nm; Em 270-840nm" },
  { id: 2, groupId: 1, order: "1.10", nameTh: "เครื่องวิเคราะห์การดูดกลืนและเรืองแสงในไมโครเพลท", nameEn: "UV-Vis and Fluorescence Microplate Reader", brand: "Tecan/Infinite M200pro", qty: 1, testCodes: "BS10-1A, BS10-4A", descTh: "อ่านค่า Absorbance และ Fluorescence ของตัวอย่างในแผ่น 96-well พร้อมวัดได้ทั้งแบบ Top และ Bottom Reading", descEn: "Measures absorbance and fluorescence in 96-well plates with Top and Bottom reading modes. Ideal for DNA/RNA quantification, ELISA, and cell viability studies.", domainTags: ["molecular_bio", "cell_bio", "pharma"], specs: "Abs 230-1000nm; Top & Bottom reading" },
  { id: 3, groupId: 1, order: "1.10", nameTh: "เครื่องอ่านปฏิกิริยาบนไมโครเพลท (Multimode)", nameEn: "Microplate Reader (Multimode)", brand: "BMG Labtech/CLARIOstar", qty: 1, testCodes: "BS10-1A, BS10-2A, BS10-3A, BS10-4A, BS10-5A, BS10-6A, BS10-7A", descTh: "เครื่องอ่านค่า Microplate หลายโหมด ทั้ง Absorbance, Fluorescence, Luminescence, Alphascreen — รองรับงานวิจัยที่ซับซ้อนมากขึ้น", descEn: "Multi-mode plate reader supporting Absorbance, Fluorescence, Luminescence, TR-FRET, and Alphascreen. Handles complex assays including protein–protein interaction studies.", domainTags: ["molecular_bio", "cell_bio", "pharma", "medicine"], specs: "Abs 220-1100nm; Fl Ex/Em 320-740nm; Luminescence, Alphascreen" },
  { id: 4, groupId: 1, order: "1.8", nameTh: "ชุดเครื่องวิเคราะห์ภาพ (Image Analyzer)", nameEn: "Image Analyzer", brand: "Vilber/Fusion FX7", qty: 1, testCodes: "BS08-1A", descTh: "ถ่ายภาพเจล เมมเบรน และเพลท วิเคราะห์ผล Chemiluminescence, Fluorescence, PCR และ Colony Count ด้วยระบบอัตโนมัติ", descEn: "Captures gel, membrane, and plate images. Analyzes chemiluminescence, fluorescence, PCR gels, and automated colony counting with high-sensitivity CCD detector.", domainTags: ["molecular_bio", "genomics", "proteomics"], specs: "Chemiluminescence + Fluorescence + White image" },
  { id: 5, groupId: 1, order: "1.7", nameTh: "เครื่องตรวจวัดสารชีวโมเลกุลด้วยแสง (Gel documentation)", nameEn: "Gel Documentation", brand: "Thermo/iBright 1500", qty: 1, testCodes: "BS07-1A", descTh: "ถ่ายภาพเจล เมมเบรน และเพลท ด้วยหลายเทคนิค รองรับ Western blot แบบ multi-fluorescence ถึง 4 สี", descEn: "Gel documentation system for imaging gels and membranes. Supports multi-fluorescence Western blot up to 4 channels simultaneously.", domainTags: ["molecular_bio", "proteomics", "genomics"], specs: "4-colour fluorescence; chemiluminescence; white image" },
  { id: 6, groupId: 1, order: "1.5", nameTh: "เครื่องวิเคราะห์เซลล์แบบอัตโนมัติ (Flow Cytometer: Analyzer)", nameEn: "Flow Cytometer (Analyzer)", brand: "Becton Dickinson/FACSymphony A1", qty: 1, testCodes: "BS05-1A, BS05-1B", descTh: "ยิงเลเซอร์ใส่เซลล์ที่ไหลผ่าน วิเคราะห์คุณสมบัติของเซลล์ได้สูงสุด 18 พารามิเตอร์พร้อมกัน — เหมือนมีเจ้าหน้าที่ตรวจและนับเซลล์หลักล้านตัวภายในไม่กี่นาที", descEn: "Laser-based cell analyzer using 4 lasers and 18 parameters simultaneously. Counts and characterizes millions of cells per minute — immunophenotyping and rare-event detection.", domainTags: ["cell_bio", "immunology", "medicine", "molecular_bio"], specs: "4 laser (Violet/Blue/Yellow-Green/Red); 18 parameters; EV analysis" },
  { id: 7, groupId: 1, order: "1.5", nameTh: "เครื่องวิเคราะห์ปริมาณและแยกเก็บเซลล์อัตโนมัติ (Flow Cytometer: Cell Sorter)", nameEn: "Flow Cytometer (Cell Sorter)", brand: "Becton Dickinson/FACSMelody", qty: 1, testCodes: "BS05-2A", descTh: "วิเคราะห์และแยกเก็บเซลล์ตามชนิดที่ต้องการโดยอัตโนมัติ — ใช้แสงเลเซอร์ 3 แหล่ง วิเคราะห์ได้สูงสุด 9 พารามิเตอร์ ได้เซลล์บริสุทธิ์สำหรับวิจัยต่อ", descEn: "Analyzes and physically sorts cells by fluorescent labels. Collects purified subpopulations for downstream culture, genomics, or proteomics applications.", domainTags: ["cell_bio", "immunology", "medicine"], specs: "3 laser (Violet/Blue/Yellow-Green); 9 parameters; cell sorting" },
  { id: 8, groupId: 1, order: "1.12", nameTh: "เครื่องเพิ่มปริมาณดีเอ็นเอ (Thermocycler / PCR)", nameEn: "Thermocycler (PCR)", brand: "Bio-Rad/S1000 MJ", qty: 1, testCodes: "BS12-1A", descTh: "เพิ่มจำนวน DNA โดยการควบคุมอุณหภูมิแบบวนซ้ำ รองรับ 96 หลอด รองรับการทำ Temperature Gradient เพื่อปรับสภาวะการขยาย", descEn: "Amplifies DNA by cycling temperature for denaturation, annealing, and extension. Supports gradient, conventional, and real-time PCR in 96/384-well formats.", domainTags: ["molecular_bio", "genomics", "microbiology"], specs: "96-well; 0-100°C; Gradient 1-24°C" },
  { id: 9, groupId: 1, order: "1.12", nameTh: "เครื่องเพิ่มปริมาณดีเอ็นเอสภาวะจริง (Real-Time PCR)", nameEn: "Real-Time PCR (qPCR)", brand: "Thermo/QuantStudio 5", qty: 1, testCodes: "BS12-2A", descTh: "ขยาย DNA พร้อมวัดปริมาณแบบ Real-time ด้วยแสงเรืองแสง — รู้ผลทันทีระหว่างกระบวนการ ทำ Multiplex ได้ถึง 6 เป้าหมาย", descEn: "Amplifies and quantifies DNA/RNA in real-time using fluorescent dyes. Multiplex up to 6 targets simultaneously for viral detection and gene expression analysis.", domainTags: ["molecular_bio", "genomics", "medicine", "microbiology"], specs: "96-well; 6-plex; FAM/SYBR Green/VIC/NED/ROX/Cy5/Cy5.5" },
  { id: 10, groupId: 1, order: "1.13", nameTh: "เครื่องถอดรหัสพันธุกรรมความไวสูง (Next-Gen Sequencer รุ่นใหญ่)", nameEn: "Next-Generation Sequencer (Production-Scale)", brand: "Illumina/NextSeq 2000", qty: 1, testCodes: "BS13-2A, BS13-2C, BS13-3C, BS13-3D, BS13-4D", descTh: "ถอดรหัสพันธุกรรม DNA/RNA จำนวนมหาศาลพร้อมกัน ด้วยเทคโนโลยี Sequencing by Synthesis — เหมาะกับงาน Whole genome, Exome, Single-cell, Transcriptome", descEn: "Production-scale NGS platform reading billions of DNA/RNA fragments simultaneously. Supports whole-genome sequencing, RNA-seq, and single-cell omics.", domainTags: ["genomics", "molecular_bio", "medicine", "microbiology"], specs: "Small whole genome / Exome / Single-cell / Transcriptome / miRNA" },
  { id: 11, groupId: 1, order: "1.13", nameTh: "เครื่องถอดรหัสพันธุกรรม (Next-Gen Sequencer รุ่นกลาง)", nameEn: "Next-Generation Sequencer (Benchtop)", brand: "Illumina/MiSeq", qty: 1, testCodes: "BS13-1A, BS13-1C, BS13-3C, BS13-1D, BS13-2D", descTh: "ถอดรหัสพันธุกรรมขนาดกลาง เหมาะกับ Target gene sequencing, 16S metagenomics และงานที่ต้องการ Long reads — ยืดหยุ่นสำหรับห้องปฏิบัติการทั่วไป", descEn: "Benchtop sequencer for mid-scale projects — targeted gene panels, metagenomics, and small genome sequencing with fast turnaround.", domainTags: ["genomics", "microbiology", "molecular_bio"], specs: "Target gene / 16S metagenomics / Expression profiling" },
  { id: 12, groupId: 1, order: "1.6", nameTh: "เครื่องวิเคราะห์ขนาดชิ้นส่วนพันธุกรรมอัตโนมัติ (Fragment Analyzer)", nameEn: "Fragment Analyzer", brand: "Agilent/4150", qty: 1, testCodes: "BS06-1A", descTh: "วิเคราะห์ขนาดและความเข้มข้นของ DNA/RNA โดยอาศัย Gel electrophoresis แบบอัตโนมัติ — ไม่ต้องเทเจลเอง วิเคราะห์ได้รวดเร็วและแม่นยำ", descEn: "Automated gel electrophoresis for DNA/RNA quality control. Measures size and concentration of nucleic acid fragments before NGS library preparation.", domainTags: ["genomics", "molecular_bio"], specs: "Automated gel electrophoresis; Concentration + Molecular weight" },
  { id: 13, groupId: 1, order: "1.11", nameTh: "เครื่องวิเคราะห์ดีเอ็นเอด้วยเทคนิค MALDI-TOF (MassARRAY)", nameEn: "MassARRAY Genotyping System", brand: "Agena Bioscience/CPM96", qty: 1, testCodes: "BS11-2A, BS11-2B", descTh: "ตรวจวิเคราะห์ความแปรผันทางพันธุกรรม (SNP, INDEL, Translocation) ใน 1 แผ่น 96 หลุมพร้อมกัน โดยใช้เทคนิค MALDI-TOF", descEn: "Genotyping system using MALDI-TOF mass spectrometry to detect SNPs, INDELs, and CNVs with high throughput and accuracy.", domainTags: ["genomics", "medicine", "molecular_bio"], specs: "SNP/INDEL/Translocation genotyping; 96-well; 50 variants/sample" },
  { id: 14, groupId: 1, order: "1.14", nameTh: "เครื่องวิเคราะห์ความสามารถในการเกาะเกี่ยวโมเลกุล (Surface Plasmon Resonance)", nameEn: "Biomolecular Interaction Analyzer (SPR)", brand: "Cytiva/Biacore T200", qty: 1, testCodes: "BS14-1A", descTh: "วัดความแรงและความเร็วของการจับกันระหว่างโมเลกุล (Kinetics & Affinity) แบบ Real-time โดยไม่ต้องติดฉลากสาร — เหมาะสำหรับคัดเลือกยาตัวใหม่", descEn: "Label-free real-time measurement of molecular binding kinetics and affinity using Surface Plasmon Resonance. No fluorescent tags required.", domainTags: ["pharma", "proteomics", "molecular_bio"], specs: "SPR; KD/Ka/Kd; Kinetics + Affinity + Thermodynamics" },
  { id: 15, groupId: 1, order: "1.1", nameTh: "เครื่องวิเคราะห์แยกโปรตีนด้วยกระแสไฟฟ้าอัตโนมัติ (Automated Western Blot)", nameEn: "Automated Western Blot", brand: "Biotechne/JESS", qty: 1, testCodes: "BS01-1A, BS01-2A", descTh: "วิเคราะห์โปรตีนด้วยหลักการ Western blot โดยอัตโนมัติ แยกขนาดโปรตีน 20-440 kDa ลดขั้นตอนและความผิดพลาดจากการทำด้วยมือ", descEn: "Fully automated Western blot system — separates proteins 20–440 kDa and detects with antibodies. Eliminates manual gel-transfer steps.", domainTags: ["proteomics", "molecular_bio", "medicine"], specs: "20-440 kDa; Chemiluminescence + Fluorescence + Protein normalization" },
  { id: 16, groupId: 1, order: "1.4", nameTh: "เครื่องวิเคราะห์การตอบสนองภูมิคุ้มกัน (ELISpot)", nameEn: "ELISpot / FluoroSpot Analyzer", brand: "ImmunoSpot/S6 Ultimate", qty: 1, testCodes: "BS04-1A, BS04-1B", descTh: "นับเซลล์ภูมิคุ้มกันแต่ละตัวที่ปล่อยสาร Cytokine ออกมา ทั้งแบบ ELISpot และ Fluorospot (7 สี) — ประเมินการตอบสนองของภูมิคุ้มกัน", descEn: "Counts individual immune cells secreting specific cytokines (ELISpot) or multiple cytokines simultaneously (FluoroSpot up to 7 colors).", domainTags: ["immunology", "medicine", "cell_bio"], specs: "ELISpot + Fluorospot 7-colour; 4 LED (Violet/Blue/Green/Red)" },
  { id: 17, groupId: 1, order: "1.11", nameTh: "เครื่องวิเคราะห์โปรตีนและเมตาโบไลท์ด้วย MALDI-TOF/TOF", nameEn: "MALDI-TOF/TOF Mass Spectrometer", brand: "Bruker/Autoflex Speed", qty: 1, testCodes: "BS11-1A, BS11-2A, BS11-1B, BS11-1D, BS11-2D, BS11-3D", descTh: "ชั่งน้ำหนักโมเลกุลชีวภาพขนาดใหญ่ เช่น โปรตีน คาร์โบไฮเดรต ไขมัน และพอลิเมอร์ ด้วยเทคนิค MALDI-TOF/TOF — จำแนกจุลินทรีย์และวิเคราะห์โปรตีน", descEn: "MALDI-TOF/TOF mass spectrometer for rapid microbial identification, protein profiling, and intact mass measurement of large biomolecules.", domainTags: ["proteomics", "microbiology", "analytical_chem", "medicine"], specs: "MALDI-TOF/TOF; Protein/Carbohydrate/Lipid/Polymer analysis" },
  { id: 18, groupId: 1, order: "1.3", nameTh: "เครื่องปฏิกรณ์ชีวภาพสำหรับเลี้ยงเซลล์ (Bioreactor)", nameEn: "Bioreactor", brand: "Bioengineering AG/RALF 5&10", qty: 1, testCodes: "BS03-1A", descTh: "ถังเพาะเลี้ยงแบคทีเรียในระดับขยาย 5-10 ลิตร ควบคุม pH, แก๊ส, ความเร็วใบพัด, อัตราป้อนสารอัตโนมัติ — ผลิตสารชีวภาพในปริมาณมาก", descEn: "5–10-liter bioreactor for controlled microbial and cell culture. Automatically manages pH, dissolved oxygen, temperature, and agitation at semi-industrial scale.", domainTags: ["microbiology", "molecular_bio", "pharma"], specs: "Batch & Fed-batch; 5L & 10L; pH/O2/Stirrer control" },
  { id: 19, groupId: 1, order: "1.2", nameTh: "เครื่องถ่ายภาพโมเลกุลชีวภาพ (Biomolecular Imager)", nameEn: "Biomolecular Imager", brand: "GE Healthcare/Typhoon RGB", qty: 1, testCodes: "BS02-1A, BS02-1B", descTh: "สแกนตัวอย่างในเจล เมมเบรน และไมโครเพลท ด้วยความละเอียดสูง รองรับ RGB Fluorescence, Phosphor imaging และ Densitometry", descEn: "High-resolution fluorescence imaging scanner for gels, membranes, and microplates. Detects phosphor, fluorescence, and chemiluminescence signals.", domainTags: ["molecular_bio", "proteomics", "genomics"], specs: "RGB Fluorescence + Phosphor imaging + Densitometry" },
  { id: 20, groupId: 1, order: "1.9", nameTh: "ตู้บ่ม: CO2 Incubator, Cooling Incubator, Heating Incubator, Shaking Incubator", nameEn: "CO2 Incubator / Cooling Incubator / Heating Incubator / Shaking Incubator", brand: "Thermo/Forma 3121, AQUA LYTIC, MMM/Incucell, New Brunswick/Innova43", qty: 4, testCodes: "BS09-1A, BS09-2A, BS09-3A, BS09-4A", descTh: "ตู้ควบคุมสภาวะสำหรับเพาะเลี้ยงเซลล์และจุลินทรีย์ — มีทั้งแบบ CO2 Incubator (เลี้ยงเซลล์), Cooling (เก็บตัวอย่าง), Heating (อบเชื้อ) และ Shaking (เขย่าเชื้อ)", descEn: "Controlled environment incubator for cell and microbial culture. Variants include CO2, cooling, heating, and orbital shaking configurations.", domainTags: ["cell_bio", "microbiology", "molecular_bio"], specs: "CO2 incubator 184L; Cooling 0-99.9°C; Shaking 25-500rpm" },
  { id: 21, groupId: 2, order: "2.7", nameTh: "ชุดเครื่องวิเคราะห์มวลโมเลกุลของสารชนิดของเหลว (HPLC)", nameEn: "High Performance Liquid Chromatograph (HPLC)", brand: "Waters/e2695", qty: 1, testCodes: "CG07-1A, CG07-2A, CG07-3A, CG07-4A, CG07-5A, CG07-6A, CG07-7A, CG07-8A, CG07-9A, CG07-10A", descTh: "แยกและวิเคราะห์สารผสมในของเหลว วัดได้ด้วย UV-Vis, Fluorescence, ELSD, RI Detector — บอกชนิดและปริมาณสารในตัวอย่างได้", descEn: "Separates and quantifies compounds in liquid samples using UV-Vis, fluorescence, RI, and ECD detectors. Handles 120–150 samples with automated injection.", domainTags: ["analytical_chem", "pharma", "food_sci"], specs: "UV-Vis + Fluorescence + ELSD + RI; 120 samples; 20-65°C" },
  { id: 22, groupId: 2, order: "2.11", nameTh: "ชุดเครื่องแยกสารแบบโครมาโตกราฟี (UPLC)", nameEn: "Ultra Performance LC (UPLC)", brand: "Waters/Acquity UPLC", qty: 1, testCodes: "CG11-1A, CG11-2A", descTh: "เหมือน HPLC แต่ใช้แรงดันสูงกว่าและคอลัมน์เล็กกว่า ทำให้แยกสารได้เร็วขึ้นมาก และใช้สารละลายน้อยลง — เหมาะสำหรับงานที่ต้องรวดเร็ว", descEn: "High-pressure LC using sub-2-µm particles for faster separation and higher resolution than HPLC. Achieves sub-minute run times.", domainTags: ["analytical_chem", "pharma", "food_sci"], specs: "PDA detector; 96 samples; 20-90°C" },
  { id: 23, groupId: 2, order: "2.7", nameTh: "ชุดเครื่องวิเคราะห์มวลโมเลกุลของสารชนิดของเหลว (HPLC x2)", nameEn: "HPLC (Thermo Dionex Ultimate 3200/3400)", brand: "Thermo/Dionex Ultimate 3200 & 3400", qty: 2, testCodes: "CG07-3A, CG07-4A", descTh: "เครื่อง HPLC สำรองสำหรับรองรับผู้ใช้บริการ รองรับตัวอย่างได้ 150 ขวด ควบคุมอุณหภูมิคอลัมน์ได้ 5-110°C", descEn: "Backup HPLC system (Thermo Dionex Ultimate 3200/3400) for additional user capacity. Supports reverse-phase, ion-exchange, and size-exclusion modes.", domainTags: ["analytical_chem", "pharma", "food_sci"], specs: "UV-Vis; 150 samples; 5-110°C" },
  { id: 24, groupId: 2, order: "2.10", nameTh: "ชุดเครื่องแยกสารแบบโครมาโตกราฟีชนิดของเหลว (UHPLC)", nameEn: "Ultra High Performance LC (UHPLC)", brand: "Waters/ACQUITY Arc", qty: 1, testCodes: "CG10-1A, CG10-2A, CG10-3A, CG10-4A, CG10-5A", descTh: "ระบบ HPLC ประสิทธิภาพสูงพร้อม Fraction Manager เก็บส่วนที่สนใจได้ รองรับ PDA + ELSD Detector — สามารถเก็บสารบริสุทธิ์สำหรับนำไปวิเคราะห์ต่อ", descEn: "UHPLC with fraction manager for automated preparative collection. Suitable for method development and large-scale purification of target compounds.", domainTags: ["analytical_chem", "pharma", "food_sci"], specs: "PDA + ELSD + Fraction manager; 96 samples; 4-150°C" },
  { id: 25, groupId: 2, order: "2.8", nameTh: "เครื่องวิเคราะห์แยกสารและตรวจมวลโมเลกุล (LC-MS-QTOF)", nameEn: "LC-MS Triple TOF (High Resolution)", brand: "SCIEX/TripleTOF 6600+", qty: 1, testCodes: "CG08-1D, CG08-2D, CG08-3D, CG08-4D, CG08-5D", descTh: "รวม HPLC และ Mass Spectrometer ความละเอียดสูง (Q-TOF) เข้าด้วยกัน — ระบุโมเลกุลโดยชั่งน้ำหนักอย่างแม่นยำมาก เหมาะกับ Untargeted analysis", descEn: "Combines HPLC with high-resolution Q-TOF mass spectrometer. Identifies unknowns with exact mass measurement — ideal for untargeted metabolomics and proteomics.", domainTags: ["proteomics", "analytical_chem", "pharma", "molecular_bio"], specs: "High resolution Q-TOF; ESI + APCI" },
  { id: 26, groupId: 2, order: "2.9", nameTh: "เครื่องวิเคราะห์สารด้วยแรงดันสูงและตรวจมวลแบบ Triple Quadrupole (LC-MS-TQ)", nameEn: "LC-MS Triple Quadrupole (QTRAP)", brand: "SCIEX/QTRAP 6500+", qty: 1, testCodes: "CG09-1D, CG09-2D, CG09-3D", descTh: "รวม HPLC และ Mass Spectrometer ชนิด Triple Quadrupole (QQQ) — เหมาะสำหรับวัดปริมาณสารอย่างแม่นยำ (Targeted quantification) ตรวจได้ที่ความเข้มข้นต่ำมาก", descEn: "Triple quadrupole LC-MS for targeted quantification with MRM transitions. Detects pesticide residues, drugs, and biomarkers at sub-ppb sensitivity.", domainTags: ["pharma", "analytical_chem", "medicine", "environment"], specs: "Low resolution QQQ; ESI + APCI; Quantitative analysis" },
  { id: 27, groupId: 2, order: "2.3", nameTh: "เครื่องแยกสารและทำให้สารบริสุทธิ์อัตโนมัติ (Flash Chromatograph)", nameEn: "Flash Chromatograph", brand: "YAMAZEN/Smart Flash EPCLC W-Prep 2XY", qty: 1, testCodes: "CG03-1A, CG03-2A", descTh: "แยกสารผสมออกเป็นสารบริสุทธิ์อย่างรวดเร็ว ด้วย UV-Vis Detector เลือกเก็บสารที่สนใจได้ — เหมาะสำหรับแยกสารสกัดจากพืชหรือสารสังเคราะห์", descEn: "Automated flash chromatography system with UV-Vis and ELSD detection. Rapidly purifies synthetic compounds from milligrams to grams scale.", domainTags: ["analytical_chem", "pharma"], specs: "Flow 0-80mL/min; UV-Vis 200-800nm; Fraction collector" },
  { id: 28, groupId: 2, order: "2.1", nameTh: "เครื่องตรวจหาชนิดและมวลสารโดยตรงจากตัวอย่าง (DART-MS)", nameEn: "Direct Analysis in Real Time Mass Spectrometer (DART-MS)", brand: "JEOL/JMS-T100LP AccuTOF", qty: 1, testCodes: "CG01-1A, CG01-1D", descTh: "วิเคราะห์ตัวอย่างทั้งของแข็งและของเหลวโดยไม่ต้องเตรียมตัวอย่าง ใช้เวลาวิเคราะห์เพียงไม่กี่วินาที — ระบุสารได้ทันทีจากพื้นผิว", descEn: "Analyzes solid and liquid samples without preparation using DART ionization. Identifies compounds in seconds — ideal for rapid food screening.", domainTags: ["analytical_chem", "food_sci", "environment"], specs: "No sample prep; solid & liquid; High resolution TOF; DART source" },
  { id: 29, groupId: 2, order: "2.3", nameTh: "เครื่องทำให้โปรตีนบริสุทธิ์ (FPLC รุ่นเล็ก)", nameEn: "Fast Protein Liquid Chromatograph (FPLC)", brand: "AKTA/Purifier 100", qty: 1, testCodes: "CG03-1A", descTh: "แยกและทำโปรตีน DNA ให้บริสุทธิ์ด้วยแรงดันต่ำ — รักษากิจกรรมของโปรตีนได้ดี วัด Absorbance ได้ถึง 3 ความยาวคลื่นพร้อมกัน", descEn: "Low-pressure LC system for purifying proteins and nucleic acids. Maintains sample activity with 4°C cooling and supports all standard chromatography modes.", domainTags: ["proteomics", "molecular_bio", "pharma"], specs: "0.0001-10mL/min; Isocratic & Gradient; 190-700nm; 25mPa" },
  { id: 30, groupId: 2, order: "2.3", nameTh: "เครื่องทำให้โปรตีนบริสุทธิ์ (FPLC รุ่นใหญ่)", nameEn: "FPLC (Preparative-Scale)", brand: "AKTA/Avant 25", qty: 1, testCodes: "CG03-2A", descTh: "FPLC ขนาดใหญ่ มีระบบเก็บตัวอย่างควบคุมอุณหภูมิที่ 4°C ป้องกันโปรตีนเสื่อม — เหมาะสำหรับการทำโปรตีนบริสุทธิ์ขนาดกึ่งอุตสาหกรรม", descEn: "Large-scale preparative FPLC with automated fraction collection and temperature-controlled storage. Scales protein purification from mg to gram quantities.", domainTags: ["proteomics", "molecular_bio", "pharma"], specs: "Pump max 50mL/min; 4°C fraction collector; 20mPa" },
  { id: 31, groupId: 2, order: "2.4", nameTh: "เครื่องวิเคราะห์แยกมวลสารสถานะแก๊ส (GC)", nameEn: "Gas Chromatograph (GC)", brand: "Agilent/7890A", qty: 1, testCodes: "CG04-1A, CG04-2A, CG04-1B, CG04-1C, CG04-2C", descTh: "แยกสารระเหยในตัวอย่าง ด้วย FID และ ECD Detector — ตรวจสารที่ระเหยได้เช่น สารอินทรีย์, สารกำจัดแมลง, สารตัวทำละลาย", descEn: "Separates volatile compounds using FID and ECD detectors. Headspace sampler for residual solvents. Used in food, environmental, and pharmaceutical QC.", domainTags: ["analytical_chem", "food_sci", "environment"], specs: "FID + ECD; 125 sample vials; Auto injector" },
  { id: 32, groupId: 2, order: "2.5", nameTh: "เครื่องวิเคราะห์แยกมวลสารแก๊สแมสสเปกโตรมิเตอร์ (GC-MS)", nameEn: "Gas Chromatograph-Mass Spectrometer (GC-MS)", brand: "Agilent/7890A-5975C & 5977B", qty: 2, testCodes: "CG05-1A, CG05-2A, CG05-1B, CG05-1C, CG05-2C, CG05-1D, CG05-2D", descTh: "แยกสารระเหยแล้วชั่งน้ำหนักโมเลกุลระบุตัวตน — มีฐานข้อมูล NIST เพื่อจับคู่สารอัตโนมัติ ตรวจได้ถึง sub-ppb", descEn: "Combines GC with mass spectrometry for identification and quantification. NIST library matching identifies hundreds of unknown volatile compounds.", domainTags: ["analytical_chem", "food_sci", "environment", "pharma"], specs: "Split/Splitless injection; -80 to 400°C; NIST library" },
  { id: 33, groupId: 2, order: "2.6", nameTh: "เครื่องวิเคราะห์แยกมวลสารแก๊สแบบ Triple Quadrupole (GC-TQ)", nameEn: "GC-Triple Quadrupole Mass Spectrometer (GC-TQ)", brand: "Agilent/8890-7000D", qty: 1, testCodes: "CG06-1A, CG06-2A, CG06-1B, CG06-1C, CG06-2C, CG06-3C, CG06-4C", descTh: "GC-MS รุ่นพิเศษ Triple Quad รองรับการฉีดตัวอย่าง 4 รูปแบบ (Liquid/Headspace/SPME/ITEX) มีฐานข้อมูลยาฆ่าแมลง 1,000+ สาร — เหมาะตรวจสารตกค้าง", descEn: "GC coupled with triple quadrupole MS for ultra-sensitive targeted analysis with MRM. Automates 48-sample batches — compliant with food safety regulations.", domainTags: ["food_sci", "environment", "analytical_chem"], specs: "Headspace/SPME/ITEX/Liquid; MRM mode; Pesticide DB 1000+ compounds" },
  { id: 34, groupId: 3, order: "3.0", nameTh: "ตู้แช่แข็ง -80°C", nameEn: "Ultra-Low Temperature Freezer (-80°C)", brand: "Thermo Fisher Scientific/8607, 709", qty: 4, testCodes: "FZ01-1A, FZ01-2A", descTh: "ตู้แช่แข็งอุณหภูมิต่ำมาก (-50 ถึง -86°C) ความจุ 28 cu.ft — ถนอมตัวอย่างชีวภาพ เช่น เซลล์, เนื้อเยื่อ, เชื้อ, Enzyme ได้นานหลายปี", descEn: "Ultra-low temperature freezer (-50 to -86°C), 28 cu.ft capacity. Long-term storage of biological samples, enzymes, viruses, and cell lines.", domainTags: ["molecular_bio", "cell_bio", "microbiology"], specs: "4 units; -50 to -86°C; 28 cu.ft" },
  { id: 35, groupId: 3, order: "3.0", nameTh: "ตู้แช่แข็ง -40°C", nameEn: "Deep Freezer (-40°C)", brand: "Thermo Fisher Scientific/729", qty: 3, testCodes: "FZ01-3A, FZ01-4A", descTh: "ตู้แช่แข็งอุณหภูมิปานกลาง (-10 ถึง -40°C) — เก็บสารเคมีและตัวอย่างที่ไม่ต้องการอุณหภูมิต่ำมาก", descEn: "Deep freezer (-10 to -40°C) for reagents that do not require ultra-low temperatures. 13 cu.ft capacity for kits and intermediate storage.", domainTags: ["molecular_bio", "analytical_chem"], specs: "3 units; -10 to -40°C; 13 cu.ft" },
  { id: 36, groupId: 3, order: "3.0", nameTh: "ตู้แช่แข็ง -20°C", nameEn: "Standard Freezer (-20°C)", brand: "UGL2320-V/Revco", qty: 4, testCodes: "FZ01-5A, FZ01-6A", descTh: "ตู้แช่แข็งมาตรฐาน -20°C ความจุ 659 ลิตร — ใช้เก็บ Primer, Enzyme, Antibody ทั่วไป", descEn: "Standard -20°C freezer, 659-liter capacity. Stores enzymes, primers, antibodies, and general laboratory reagents for routine use.", domainTags: ["molecular_bio", "analytical_chem"], specs: "4 units; -20°C; 659 L (23.3 cu.ft)" },
  { id: 37, groupId: 4, order: "4.6", nameTh: "กล้องจุลทรรศน์แบบสองตา", nameEn: "Optical Microscope", brand: "Nikon/E200", qty: 2, testCodes: "MC06-1A", descTh: "กล้องจุลทรรศน์มาตรฐานสองตา กำลังขยาย 4x, 10x, 40x, 100x — ดูตัวอย่างเซลล์และจุลินทรีย์ทั่วไป", descEn: "Standard binocular light microscope, 4×–100× magnification. For routine observation of fixed cells, bacteria, and tissue sections.", domainTags: ["cell_bio", "microbiology"], specs: "2 units; 4x/10x/40x/100x objectives" },
  { id: 38, groupId: 4, order: "4.4", nameTh: "กล้องจุลทรรศน์ฟลูออเรสเซนต์แบบกลับหัว", nameEn: "Fluorescence Inverted Microscope", brand: "Nikon/TI-S", qty: 1, testCodes: "MC04-1A, MC04-2A", descTh: "กล้องฟลูออเรสเซนต์แบบหัวกลับ ดูตัวอย่างที่มีชีวิตในจานเลี้ยงเซลล์ได้ — ใช้ติดตามเซลล์ที่ย้อมสีเรืองแสง", descEn: "Inverted fluorescence microscope for live-cell imaging in culture dishes. Supports Z-series, time-lapse, and multi-channel fluorescence imaging.", domainTags: ["cell_bio", "molecular_bio"], specs: "4x/10x/20x/40x/100x; Fluorescence; Spring-loaded objectives" },
  { id: 39, groupId: 4, order: "4.8", nameTh: "กล้องจุลทรรศน์สเตอริโอแบบฟลูออเรสเซนต์", nameEn: "Light & Fluorescence Stereomicroscope", brand: "Olympus/SZX16+DP72", qty: 1, testCodes: "MC08-1A, MC08-2A", descTh: "กล้องสเตอริโอดูตัวอย่างสามมิติ รองรับ Fluorescence พร้อมกล้องดิจิตอล — เหมาะดูตัวอย่างชีวภาพขนาดใหญ่ขึ้น เช่น แมลง, เนื้อเยื่อ", descEn: "Stereo fluorescence microscope for 3D viewing of whole specimens. Supports macroscopic fluorescence imaging of GFP-labeled organisms and tissues.", domainTags: ["cell_bio", "microbiology"], specs: "Trinocular; 4x-400x; Fluorescence; Digital camera" },
  { id: 40, groupId: 4, order: "4.4", nameTh: "กล้องจุลทรรศน์แบบหัวกลับ", nameEn: "Inverted Microscope", brand: "Leica/DMi1", qty: 1, testCodes: "MC04-1A", descTh: "กล้องหัวกลับพื้นฐาน กำลังขยาย 10x, 20x, 40x ปรับความเข้มแสงอัตโนมัติ — ดูเซลล์ในจานเพาะเลี้ยงก่อนการทดลอง", descEn: "Basic inverted microscope, 10×–40× magnification with phase contrast. For monitoring cell cultures in plates and flasks.", domainTags: ["cell_bio"], specs: "10x/20x/40x; Bright field + Phase contrast; Auto light adjustment" },
  { id: 41, groupId: 4, order: "4.5", nameTh: "เครื่องตัดเซลล์และเนื้อเยื่อด้วยเลเซอร์ (Laser Microdissection)", nameEn: "Laser Microdissection Microscope", brand: "Leica/LMD7", qty: 1, testCodes: "MC05-1A, MC05-2A, MC05-3A", descTh: "ใช้เลเซอร์ตัดและเก็บเซลล์เฉพาะจุดจากเนื้อเยื่อภายใต้กล้อง — ได้ตัวอย่างเซลล์บริสุทธิ์ ไม่ปนเปื้อนเซลล์ข้างเคียง เหมาะงานวิจัยระดับโมเลกุล", descEn: "Laser microdissection system that cuts and collects specific cells from tissue sections without contamination. Essential for single-cell genomics and proteomics.", domainTags: ["medicine", "molecular_bio", "genomics", "cell_bio"], specs: "6.3x-150x; Bright field/Phase/DIC/Fluorescence; 4 laser sources" },
  { id: 42, groupId: 4, order: "4.4", nameTh: "กล้องจุลทรรศน์แบบหัวกลับรายละเอียดสูง", nameEn: "High-Resolution Inverted Microscope", brand: "Nikon/Eclipse Ti2E", qty: 1, testCodes: "MC04-3A, MC04-4A", descTh: "กล้องฟลูออเรสเซนต์รายละเอียดสูง รองรับ 3 ช่วงสีฟลูออเรสเซนต์ ถ่ายภาพแบบ Z-series, Time-lapse, Image stitching พร้อม Deconvolution", descEn: "High-resolution inverted fluorescence microscope with 3 fluorescence channels and motorized stage for large-area image stitching and automated counting.", domainTags: ["cell_bio", "molecular_bio", "medicine"], specs: "4x-100x; Blue/Green/Red FL; Z-series/Time-lapse/Stitching/Deconvolution" },
  { id: 43, groupId: 4, order: "4.3", nameTh: "กล้องจุลทรรศน์แบบหัวกลับความละเอียดสูง ชนิด DeltaVision", nameEn: "DeltaVision Microscope", brand: "GE Healthcare", qty: 1, testCodes: "MC03-1A", descTh: "กล้องออพติคัลสำหรับถ่ายภาพหลายมิติ สร้างภาพ 3D จากชิ้นงานติดฉลากเรืองแสง รองรับ Z-stacking — ได้ภาพ 3D ความละเอียดสูงของเซลล์มีชีวิต", descEn: "Optical sectioning microscope using structured illumination for 3D fluorescence imaging of live cells with reduced out-of-focus blur.", domainTags: ["cell_bio", "molecular_bio"], specs: "4x/20x/40x/60x/100x; Bright field/DIC/Fluorescence; Z-stack 3D" },
  { id: 44, groupId: 4, order: "4.7", nameTh: "กล้องจุลทรรศน์หัวตั้งความละเอียดสูง Optical Sectioning", nameEn: "Optical Sectioning Microscope", brand: "Zeiss/Apotome.2", qty: 1, testCodes: "MC07-1A", descTh: "กล้องฟลูออเรสเซนต์แบบ Wide-field ที่ตัดแสงรบกวน ให้ภาพคมชัดเหมือน Confocal โดยไม่ต้องใช้ Laser — สร้างภาพ 3D ด้วย Z-stack ได้", descEn: "Wide-field fluorescence microscope with ApoTome optical sectioning. Removes out-of-focus light without confocal laser requirement.", domainTags: ["cell_bio", "molecular_bio"], specs: "5x/10x/40x/63x/100x; Wide-field + Optical sectioning; Z-stack; Timelapse" },
  { id: 45, groupId: 4, order: "4.1", nameTh: "กล้องจุลทรรศน์แรงอะตอม (AFM)", nameEn: "Atomic Force Microscope (AFM)", brand: "PARK/NX20", qty: 1, testCodes: "MC01-1A, MC01-1B", descTh: "ใช้เข็มเล็กมากสัมผัสพื้นผิวตัวอย่าง วาดแผนที่ความขรุขระ ความแข็ง และคุณสมบัติอื่นในระดับนาโนเมตร — ไม่ทำลายตัวอย่าง", descEn: "Scans surface topography with a nanometer-scale probe. Measures roughness, stiffness, electrical, and magnetic properties of materials and biological cells.", domainTags: ["materials", "nano", "cell_bio"], specs: "Contact/Non-contact/Tapping mode; Electrical/Mechanical/Magnetic/Thermal properties" },
  { id: 46, groupId: 4, order: "4.1", nameTh: "กล้องจุลทรรศน์แรงอะตอม ชนิดต่อกับรามานสเปกโตรมิเตอร์ (AFM-Raman)", nameEn: "Atomic Force Microscope-Raman Spectrometer", brand: "Horiba/OmegaScope", qty: 1, testCodes: "MC01-2A, MC01-2B", descTh: "รวม AFM และ Raman spectrometer เข้าด้วยกัน ถ่ายภาพพื้นผิวและวิเคราะห์หมู่ฟังก์ชันทางเคมีในตำแหน่งเดียวกันพร้อมกัน", descEn: "Integrates AFM with Raman spectroscopy. Simultaneously maps surface topography and chemical composition at nanometer resolution.", domainTags: ["materials", "nano", "analytical_chem"], specs: "AFM + Raman; TERS mode; Phase/Frequency shift imaging" },
  { id: 47, groupId: 4, order: "4.2", nameTh: "กล้องจุลทรรศน์อิเล็กตรอนแบบส่องผ่านด้วยอุณหภูมิเย็นยิ่งยวด (Cryo-TEM)", nameEn: "Cryogenic Transmission Electron Microscope (Cryo-TEM)", brand: "Thermo Fisher Scientific/Glacios", qty: 1, testCodes: "MC02-2A, MC02-1B, MC02-1C", descTh: "แช่แข็งตัวอย่างแล้วส่องด้วยอิเล็กตรอน เห็นโครงสร้าง 3D ของโปรตีนและไวรัสระดับอะตอม — เทคโนโลยีที่ทำให้ได้รับรางวัลโนเบล 2017", descEn: "Vitrified samples imaged with electrons at near-atomic resolution. Solves 3D structures of proteins and viruses without crystallization. Nobel Prize 2017 technology.", domainTags: ["molecular_bio", "nano", "pharma", "medicine"], specs: "200kV; Single particle analysis; Cryo-ET; MicroED; Atomic resolution" },
  { id: 48, groupId: 4, order: "4.9", nameTh: "กล้องจุลทรรศน์อิเล็กตรอนแบบส่องกราด (SEM)", nameEn: "Scanning Electron Microscope (SEM)", brand: "JEOL/JSM-IT500LA", qty: 1, testCodes: "MC09-3A, MC09-4A, MC09-3D, MC09-4D", descTh: "ยิงอิเล็กตรอนบนพื้นผิว สร้างภาพ 3D ความละเอียดระดับนาโน — ดูโครงสร้างพื้นผิวของวัสดุ เซลล์ แบคทีเรีย วิเคราะห์ธาตุด้วย EDS ได้พร้อมกัน", descEn: "Focuses electron beam on surface to produce high-resolution 3D images (3 nm resolution). Coupled with EDS for elemental composition mapping.", domainTags: ["materials", "nano", "microbiology", "cell_bio"], specs: "3nm resolution at 30kV; EDS; 5x-300,000x; High & Low vacuum; 2kg sample" },
  { id: 49, groupId: 4, order: "4.9", nameTh: "กล้องจุลทรรศน์อิเล็กตรอนแบบส่องกราดชนิดฟิลด์อีมิสชั่น (FE-SEM)", nameEn: "Field Emission Scanning Electron Microscope (FE-SEM)", brand: "JEOL/JSM-7610FPLUS", qty: 1, testCodes: "MC09-1A, MC09-2A, MC09-1D, MC09-2D", descTh: "FE-SEM ให้ความละเอียดสูงกว่า SEM ทั่วไปมาก (0.8nm ที่ 15kV) กำลังขยายสูงสุด 1 ล้านเท่า — เหมาะวิจัยนาโนเทคโนโลยีและวัสดุขั้นสูง", descEn: "Field emission SEM achieving 0.8 nm resolution at 15 kV. Reaches up to 1-million-fold magnification for ultra-fine nanomaterial characterization.", domainTags: ["materials", "nano"], specs: "0.8nm at 15kV; 25x-1,000,000x; EDS; Schottky FEG" },
  { id: 50, groupId: 5, order: "5.1", nameTh: "เครื่องชั่งไฟฟ้า (Analytical Balance) 2/4/6 ตำแหน่ง", nameEn: "Analytical Balance (2/4/6 digits)", brand: "Mettler Toledo/ML3002, ML204, XPR26DR", qty: 6, testCodes: "SP01-1A, SP01-2A, SP01-3A", descTh: "เครื่องชั่งน้ำหนักแม่นยำสูง 3 ระดับ: 2 ตำแหน่ง (0.01g), 4 ตำแหน่ง (0.1mg), 6 ตำแหน่ง (0.001mg) — เตรียมสารเคมีได้ถูกต้องแม่นยำ", descEn: "Precision analytical balances at three readability levels: 0.01 g (2-digit), 0.1 mg (4-digit), and 0.01 mg (6-digit). Calibrated for accurate reagent preparation.", domainTags: ["analytical_chem", "pharma", "food_sci"], specs: "2 digits: 3200g/0.01g; 4 digits: 220g/0.1mg; 6 digits: 10g/0.001mg" },
  { id: 51, groupId: 5, order: "5.2", nameTh: "เครื่องเคลือบผิววัสดุ (Auto Fine Coater)", nameEn: "Auto Fine Coater (Sputter Coater)", brand: "JEOL/JEC-30000FC", qty: 1, testCodes: "SP02-1A", descTh: "เคลือบตัวอย่างที่ไม่นำไฟฟ้าด้วยโลหะบางๆ (เช่น Gold/Platinum) เพื่อให้นำไฟฟ้า — จำเป็นก่อนส่องด้วย SEM/FE-SEM", descEn: "Sputter-coats non-conductive samples with thin gold or platinum layer before SEM imaging. Ensures conductivity and prevents charge buildup.", domainTags: ["materials", "nano"], specs: "" },
  { id: 52, groupId: 5, order: "5.3", nameTh: "หม้อนึ่งฆ่าเชื้อ (Autoclave)", nameEn: "Autoclave", brand: "Hirayama/HVA50 & HVA110", qty: 2, testCodes: "SP03-1A, SP03-2A", descTh: "นึ่งฆ่าเชื้อด้วยไอน้ำแรงดันสูง ความจุ 50 และ 110 ลิตร — ทำให้เครื่องแก้ว, อาหารเลี้ยงเชื้อ, และอุปกรณ์ปลอดเชื้อ", descEn: "Steam autoclave sterilization at 105–135°C. Available in 50 L and 110 L capacities. Sterilizes glassware, culture media, and biological waste.", domainTags: ["microbiology", "cell_bio"], specs: "50L & 110L; 105-135°C; 1-250min" },
  { id: 53, groupId: 5, order: "5.4", nameTh: "ชุดดูดจ่ายสารละลายอัตโนมัติ (Automated Liquid Handling)", nameEn: "Automated Liquid Handling System", brand: "Eppendorf/epmotion5075", qty: 1, testCodes: "SP04-1A", descTh: "เตรียมตัวอย่างและน้ำยาอัตโนมัติด้วยหุ่นยนต์ปิเปต — ลดความผิดพลาดจากมือคน เหมาะกับ NGS library prep, Real-time PCR, Magnetic purification", descEn: "Robotic liquid handling system automating pipetting, dilution, and plate preparation. Reduces human error and handles up to 384-well plates.", domainTags: ["genomics", "molecular_bio"], specs: "Automated pipetting; NGS library/qPCR/Magnetic purification" },
  { id: 54, groupId: 5, order: "5.5", nameTh: "เครื่องทำให้ตัวอย่างแข็งอย่างรวดเร็ว (Vitrobot)", nameEn: "Automated Vitrification Machine", brand: "Thermo Scientific/Vitrobot", qty: 1, testCodes: "SP05-1A", descTh: "แช่แข็งตัวอย่างอย่างรวดเร็ว (Vitrification) เพื่อเตรียมก่อนการส่องด้วย Cryo-TEM — รักษาโครงสร้างตัวอย่างในสภาพธรรมชาติ", descEn: "Automated plunge-freezing system for cryo-EM grid preparation. Creates vitrified thin aqueous films with controlled humidity for optimal sample preservation.", domainTags: ["molecular_bio", "nano", "pharma"], specs: "Cryo-TEM sample preparation; Automated vitrification" },
  { id: 55, groupId: 5, order: "5.7", nameTh: "เครื่องปั่นเหวี่ยงหลายชนิด (Centrifuge)", nameEn: "Centrifuge (Benchtop/High Speed/Superspeed/Ultra Speed)", brand: "Eppendorf/5810R; Thermo/RC6Plus; NYNX6000; WX100", qty: 5, testCodes: "SP07-1A, SP07-2A, SP07-3A, SP07-4A", descTh: "ปั่นเหวี่ยงตัวอย่างด้วยแรง G ต่างๆ: ตั้งโต๊ะ (14,000rpm), ความเร็วสูง (22,000rpm), สูงมาก (29,000rpm), สูงสุด (100,000rpm) — แยกส่วนประกอบของเซลล์ได้ทุกระดับ", descEn: "Centrifuge series from benchtop (14,000 rpm) to ultracentrifuge (100,000 rpm, 802,000×g). Separates cells, organelles, viruses, and protein complexes by density.", domainTags: ["molecular_bio", "cell_bio", "proteomics", "microbiology"], specs: "Benchtop: 14,000rpm; High: 22,000rpm; Superspeed: 29,000rpm; Ultra: 100,000rpm" },
  { id: 56, groupId: 5, order: "5.8", nameTh: "เครื่องระเหยสาร (Concentrator)", nameEn: "Sample Concentrator (Cooling/N2/SpeedVac)", brand: "Labconco/CenTrivap; Detology/FV64; Eppendorf/Concentrator Plus", qty: 3, testCodes: "SP08-1A, SP08-2A, SP08-3A", descTh: "ระเหยของเหลวออกจากตัวอย่าง เพื่อทำให้เข้มข้นหรือแห้ง 3 ระบบ: ระบบเย็น, ไนโตรเจน, สุญญากาศ", descEn: "Sample concentrators using N2 gas blow-down, centrifugal evaporation (SpeedVac), or cooling evaporation. Concentrates and dries samples before downstream analysis.", domainTags: ["analytical_chem", "proteomics", "molecular_bio"], specs: "Cooling concentrator; N2 blowdown; SpeedVac (nucleotide/protein/liquid)" },
  { id: 57, groupId: 5, order: "5.8", nameTh: "เครื่องกรองสารละลายโปรตีน (Crossflow Concentrator)", nameEn: "Crossflow Filtration Concentrator", brand: "AKTA/Flux6", qty: 1, testCodes: "SP08-4A", descTh: "กรองและทำโปรตีนให้เข้มข้นด้วยระบบ Cross-flow filtration — รักษากิจกรรมโปรตีน เหมาะสำหรับโปรตีนขนาดใหญ่", descEn: "Cross-flow filtration system for concentrating and desalting proteins and nanoparticles. Maintains sample integrity without heat or shear stress.", domainTags: ["proteomics", "pharma"], specs: "8L tank; 1,000 mL/min max flow" },
  { id: 58, groupId: 5, order: "5.1", nameTh: "เครื่องตัดชิ้นเนื้อที่อุณหภูมิเยือกแข็ง (Cryostat)", nameEn: "Cryostat", brand: "Leica/CM1950", qty: 1, testCodes: "SP10-1A", descTh: "ตัดเนื้อเยื่อที่แช่แข็งเป็นแผ่นบางๆ (1-100 ไมครอน) — เตรียมตัวอย่างเนื้อเยื่อสำหรับย้อมสีและดูด้วยกล้องจุลทรรศน์", descEn: "Cuts frozen tissue into 1–100 µm thin sections at controlled temperatures. Essential for histology, immunofluorescence, and frozen tissue analysis.", domainTags: ["medicine", "cell_bio"], specs: "Section 1-100µm; Cryochamber 0 to -35°C" },
  { id: 59, groupId: 5, order: "5.12", nameTh: "เครื่องระเหิดแห้ง (Freeze Dryer)", nameEn: "Freeze Dryer (Lyophilizer)", brand: "Labconco/Free Zone 6 Plus", qty: 1, testCodes: "SP12-1D, SP12-2D", descTh: "ทำแห้งตัวอย่างโดยการระเหิดน้ำแข็งในสุญญากาศ — ได้ตัวอย่างแห้งที่คงสภาพทางชีวเคมีไว้ได้ดี เหมาะสำหรับโปรตีนและยา", descEn: "Freeze-dries samples by sublimating ice under vacuum. Preserves biological activity and structure of proteins, vaccines, foods, and pharmaceutical formulations.", domainTags: ["pharma", "molecular_bio"], specs: "Drum + Tray + Vial manifolds; Freeze drying" },
  { id: 60, groupId: 5, order: "5.14", nameTh: "เครื่องบดตัวอย่างที่อุณหภูมิเยือกแข็ง (Cryogenic Grinder)", nameEn: "Cryogenic Grinder (Freeze Mill)", brand: "Freeze Mill/6775", qty: 1, testCodes: "SP14-1A", descTh: "บดตัวอย่างในสภาพแช่แข็ง ป้องกันการเสื่อมของโปรตีน DNA — เหมาะสำหรับเนื้อเยื่อที่ยืดหยุ่นหรืออ่อนไหวต่อความร้อน", descEn: "Cryogenically grinds tough biological samples (bone, plant tissue, hair) at liquid nitrogen temperature. Prevents protein degradation during grinding process.", domainTags: ["molecular_bio", "genomics", "food_sci"], specs: "0.1-5g sample; Cryogenic grinding" },
  { id: 61, groupId: 5, order: "5.16", nameTh: "เครื่องกำเนิดคลื่นเสียงความถี่สูงชนิดหัวโพรบ (Sonicator Probe)", nameEn: "High Intensity Ultrasonic Processor", brand: "Sonics/VCX750", qty: 1, testCodes: "SP16-1A, SP16-2A", descTh: "ใช้คลื่นเสียง Ultrasonic ย่อยเซลล์, ลดขนาดอนุภาค, เร่งปฏิกิริยา — 250µL ถึง 250mL ใช้ได้", descEn: "High-power ultrasonic probe for cell disruption, nanoparticle dispersion, and emulsification. Handles 250 µL–250 mL with programmable pulse cycles.", domainTags: ["molecular_bio", "nano", "analytical_chem"], specs: "250µL-250mL; Amplitude/Time/Pulse/Temp control" },
  { id: 62, groupId: 5, order: "5.27", nameTh: "เครื่องกลั่นระเหยแห้งแบบหมุน (Rotary Evaporator)", nameEn: "Rotary Evaporator", brand: "Heidolph/LABORATA 4000ECO", qty: 1, testCodes: "SP27-1A", descTh: "ระเหยตัวทำละลายออกจากสารสกัดด้วยการหมุนและสุญญากาศ — เหมาะแยก Solvent จาก Plant extract, สารสังเคราะห์", descEn: "Removes solvents from extracts by rotating flask under vacuum with gentle heating. Handles 50 mL–3 L flasks for concentration and solvent recovery.", domainTags: ["analytical_chem", "pharma", "food_sci"], specs: "50mL-3L flask; up to 100°C water bath" },
  { id: 63, groupId: 6, order: "6.10", nameTh: "เครื่องวิเคราะห์หมู่ฟังก์ชันทางเคมีด้วยรามาน (Raman Microscope)", nameEn: "Raman Microscope", brand: "Horiba/XPloRA PLUS", qty: 1, testCodes: "SM10-1A, SM10-2A, SM10-1D, SM10-2D", descTh: "ยิงเลเซอร์ใส่ตัวอย่างแล้วดูแสงที่กระจัดกระจาย วิเคราะห์โครงสร้างเคมี เฟส และความเค้นของสาร — วิเคราะห์ได้โดยไม่ทำลายตัวอย่าง", descEn: "Combines Raman spectrometer with optical microscope for chemical mapping at micrometer resolution. Applied to pharmaceuticals, microplastics, and carbon materials.", domainTags: ["materials", "analytical_chem", "nano"], specs: "532nm & 785nm laser; Mapping; Solid (powder/sheet) & Liquid ≥100ppm" },
  { id: 64, groupId: 6, order: "6.11", nameTh: "เครื่องตรวจวัดปริมาณสารแบบดูดกลืนแสง (Spectrofluorometer)", nameEn: "Spectrofluorometer", brand: "JASCO/FP-6200", qty: 1, testCodes: "SM11-1A", descTh: "วัดการเรืองแสงของสารฟลูออเรสเซนต์ในตัวอย่าง — วิเคราะห์โครงสร้าง Protein folding, ระบุ Oil fingerprint, วัดความเข้มข้น Ion ในเซลล์", descEn: "Measures fluorescence excitation and emission spectra of molecular samples. Quantifies fluorescent probes, measures FRET efficiency, and studies biomolecular conformation.", domainTags: ["analytical_chem", "molecular_bio", "proteomics"], specs: "Research-grade; Protein folding/Oil ID/Ion concentration/Membrane" },
  { id: 65, groupId: 6, order: "6.8", nameTh: "เครื่องวัดปริมาณสารแบบหยดนาโน (NanoDrop Spectrophotometer)", nameEn: "NanoDrop Spectrophotometer", brand: "Thermo Fisher Scientific/NanoDrop One", qty: 1, testCodes: "SM08-1A", descTh: "วัดปริมาณ DNA, RNA, โปรตีนด้วยสารละลายเพียง 2 ไมโครลิตร — ไม่ต้องเตรียม Cuvette สะดวกรวดเร็ว", descEn: "Measures DNA, RNA, and protein concentration using only 2 µL of sample. No cuvette required — rapid result in seconds with high accuracy.", domainTags: ["molecular_bio", "genomics"], specs: "2µL drop; Nucleic acid/Protein/OD600/Kinetics; Cuvette mode" },
  { id: 66, groupId: 6, order: "6.9", nameTh: "เครื่องนิวเคลียร์แมกเนติกเรโซแนนซ์ (NMR 600 MHz)", nameEn: "Nuclear Magnetic Resonance Spectrometer (NMR)", brand: "Bruker/NMR AVANCE NEO 600MHz", qty: 1, testCodes: "SM09-1A, SM09-1B, SM09-1D, SM09-2D", descTh: "ยิงคลื่นแม่เหล็กไฟฟ้าเข้าโมเลกุล เพื่ออ่านโครงสร้าง 3D ของสาร — ข้อมูล 1D และ 2D NMR บอกตำแหน่งอะตอมทุกตัวในโมเลกุล", descEn: "600 MHz superconducting NMR spectrometer. Determines 3D molecular structure, connectivity, and dynamics of organic molecules, proteins, and metabolites.", domainTags: ["analytical_chem", "pharma", "molecular_bio"], specs: "600MHz; 1D & 2D NMR; 24-sample auto; -40 to 150°C" },
  { id: 67, groupId: 6, order: "6.4", nameTh: "เครื่องวิเคราะห์โลหะหนักแบบเปลวไฟ (FAAS)", nameEn: "Flame Atomic Absorption Spectrometer (FAAS)", brand: "PerkinElmer/Analyst200 & PinAAcle900T", qty: 2, testCodes: "SM04-1A, SM04-2A, SM04-1D", descTh: "เผาตัวอย่างในเปลวไฟ วัดการดูดกลืนแสงเพื่อหาปริมาณโลหะหนัก — วิเคราะห์ได้ระดับ ppm เหมาะตรวจสอบน้ำ ดิน อาหาร", descEn: "Flame-based atomic absorption for measuring metal concentrations. Accurate for 30+ elements at mg/L levels in water, food, and environmental samples.", domainTags: ["environment", "food_sci", "analytical_chem"], specs: "ppm range; Al/Au/Ca/Cr/Co/Cu/Fe/Mg/Mn/Pb/Zn/Se/As; 2 in 1 FAAS+GFAAS" },
  { id: 68, groupId: 6, order: "6.5", nameTh: "เครื่องวิเคราะห์โลหะหนักแบบแกรไฟต์ (GFAAS)", nameEn: "Graphite Furnace Atomic Absorption Spectrometer (GFAAS)", brand: "PerkinElmer/PinAAcle900T", qty: 1, testCodes: "SM05-1A, SM05-1D", descTh: "ใช้เตาแกรไฟต์แทนเปลวไฟ วัดโลหะหนักที่ความเข้มข้นต่ำมาก (ppb) — ตรวจสารพิษในเลือด ปัสสาวะ อาหาร", descEn: "Graphite furnace AAS for ultra-trace metal detection at µg/L levels. 100× more sensitive than flame AAS — for clinical and environmental trace metals.", domainTags: ["medicine", "environment", "food_sci"], specs: "ppb-ppm range; THGA; 2 in 1 FAAS+GFAAS" },
  { id: 69, groupId: 6, order: "6.6", nameTh: "เครื่องวิเคราะห์โลหะหนักแบบพลาสมา (ICP-MS)", nameEn: "Inductively Coupled Plasma-Mass Spectrometer (ICP-MS)", brand: "PerkinElmer/NexION2000", qty: 1, testCodes: "SM06-1A, SM06-2A, SM06-3A, SM06-4A, SM06-1D", descTh: "เผาตัวอย่างเป็นพลาสมา ชั่งมวลอะตอม ตรวจธาตุ 70+ ชนิดพร้อมกันที่ความเข้มข้น ppb — วิเคราะห์ Isotope และ Nanoparticle ได้", descEn: "Converts sample to plasma and measures atomic masses. Simultaneously detects 70+ elements at ppb–ppt levels with isotope ratio measurement capability.", domainTags: ["environment", "analytical_chem", "medicine", "nano"], specs: "ppb range; Multi-element; Isotope analysis; Nanoparticle sizing; LC-MS coupling" },
  { id: 70, groupId: 6, order: "6.1", nameTh: "เครื่องเซอร์คูลาร์ไดโครอิก (Circular Dichroism Spectrometer)", nameEn: "Circular Dichroism Spectrometer (CD)", brand: "JASCO/J815", qty: 1, testCodes: "SM01-1A, SM01-1B, SM01-1D, SM01-2D", descTh: "วัดการดูดกลืนแสงโพลาไรซ์ รู้โครงสร้างทุติยภูมิของโปรตีน (alpha helix, beta sheet) — ตรวจสอบความสมบูรณ์ของโปรตีนและยา Biosimilar", descEn: "Measures differential absorption of circularly polarized light. Determines protein secondary structure (α-helix, β-sheet) and nucleic acid conformation.", domainTags: ["proteomics", "pharma", "molecular_bio"], specs: "163-900nm; Peltier 0-100°C; Auto sampler 80-150µL" },
  { id: 71, groupId: 6, order: "6.3", nameTh: "เครื่องวิเคราะห์หมู่ฟังก์ชันด้วยอินฟราเรด (FTIR Spectrometer)", nameEn: "Fourier-Transform Infrared Spectrometer (FTIR)", brand: "Thermo Fisher Scientific/iS50", qty: 1, testCodes: "SM03-2A, SM03-3A, SM03-4A, SM03-5A, SM03-6A, SM03-2B, SM03-2C, SM03-2D", descTh: "ยิงแสงอินฟราเรดผ่านตัวอย่าง ดูหมู่ฟังก์ชันทางเคมี — ระบุชนิดสารได้เหมือน 'ลายนิ้วมือ' วิเคราะห์ได้ทั้ง Transmission, ATR, Reflection", descEn: "Identifies chemical functional groups by measuring infrared light absorption. Supports Transmission, ATR, and Reflection modes for solids, liquids, and gases.", domainTags: ["analytical_chem", "materials", "pharma", "food_sci"], specs: "7800-350 cm-1; Transmission/ATR(Diamond/Ge/ZnSe)/Reflection" },
  { id: 72, groupId: 6, order: "6.3", nameTh: "เครื่อง FTIR ชนิดติดกล้อง (FTIR Microscope Spectrometer)", nameEn: "FTIR Microscope Spectrometer", brand: "Thermo Fisher Scientific/iN10MX", qty: 1, testCodes: "SM03-1A, SM03-1B, SM03-1C, SM03-1D", descTh: "FTIR ที่ต่อกับกล้องจุลทรรศน์ วิเคราะห์สารขนาดเล็กถึง 10 ไมครอน ทำ Chemical mapping ได้ — เหมาะงาน Microplastic", descEn: "FTIR spectrometer coupled with optical microscope. Analyzes micro-samples as small as 10 µm — useful for contaminant ID and tissue chemical mapping.", domainTags: ["analytical_chem", "environment", "materials"], specs: "≥10µm sample; Transmission/ATR/Reflection; Chemical mapping; 4000-400 cm-1" },
  { id: 73, groupId: 6, order: "6.7", nameTh: "เครื่องวัดขนาดอนุภาคนาโน (Nanosizer / DLS)", nameEn: "Nanosizer / Dynamic Light Scattering (DLS)", brand: "Horiba/SZ-100V2", qty: 1, testCodes: "SM07-2A, SM07-3A, SM07-2B, SM07-3B, SM07-2D, SM07-3D", descTh: "วัดขนาดอนุภาคนาโน (0.3nm-10µm) และค่า Zeta potential โดยใช้หลักการกระเจิงแสง — ไม่ทำลายตัวอย่าง วัดอนุภาคในสารละลายได้ทันที", descEn: "Measures nanoparticle hydrodynamic size (0.3 nm–10 µm) and zeta potential by dynamic light scattering. Non-destructive, real-time measurement in solution.", domainTags: ["nano", "pharma", "analytical_chem", "materials"], specs: "DLS 0.3nm-10µm; Zeta potential; Molecular weight; 0-90°C" },
  { id: 74, groupId: 6, order: "6.7", nameTh: "เครื่องวัดขนาดอนุภาคไมโครเมตร (Microparticle Analyzer)", nameEn: "Microparticle Size Analyzer (Laser Diffraction)", brand: "Horiba/LA-350", qty: 1, testCodes: "SM07-1A, SM07-1B, SM07-1D", descTh: "วัดขนาดอนุภาคระดับ 100nm-1000µm ด้วยหลักการกระจายแสง (Laser diffraction) — ง่าย รวดเร็ว วิเคราะห์ตัวอย่างแบบเปียก", descEn: "Measures particle size distribution from 100 nm to 1000 µm using laser diffraction. Applied to powders, emulsions, and suspensions in pharmaceutical and food industries.", domainTags: ["analytical_chem", "materials", "pharma", "food_sci"], specs: "100nm-1000µm; Static light scattering (Mie); Wet sample" },
  { id: 75, groupId: 6, order: "6.2", nameTh: "เครื่องมือวัดการเรืองแสงของนิวคลีโอไทด์ (Fluorometer)", nameEn: "Fluorometer (DNA/RNA Quantification)", brand: "DeNovix/QFX", qty: 1, testCodes: "SM02-1A", descTh: "วัดปริมาณ dsDNA (0.5pg/µL-4000ng/µL) และ RNA ด้วยสีย้อมฟลูออเรสเซนต์ — แม่นยำกว่า NanoDrop สำหรับตัวอย่างเจือปน", descEn: "Fluorometric quantification of dsDNA (0.5 pg/µL–4000 ng/µL) and RNA using fluorescent dyes. More sensitive than UV absorbance for dilute samples.", domainTags: ["genomics", "molecular_bio"], specs: "dsDNA 0.5pg-4000ng/µL; RNA 250pg-1500ng/µL" },
  { id: 76, groupId: 7, order: "7.1", nameTh: "เครื่องวัดมุมสัมผัส (Optical Contact Angle)", nameEn: "Optical Contact Angle Analyzer (OCA)", brand: "Kino/SL200 KS", qty: 1, testCodes: "SF01-1A, SF01-1B, SF01-1C, SF01-1D", descTh: "หยดน้ำลงพื้นผิวแล้วถ่ายภาพ วัดมุมระหว่างหยดน้ำกับพื้นผิว บอกว่าพื้นผิวชอบน้ำหรือไม่ — วัดได้ 7 วิธี คำนวณ Surface energy ได้", descEn: "Drops water on surface and images the contact angle. Determines surface wettability and calculates surface free energy using 7 mathematical models.", domainTags: ["materials", "nano", "pharma"], specs: "0-180°; Static & Dynamic; 7 calculation methods; Surface free energy; 3D contact angle" },
  { id: 77, groupId: 7, order: "7.2", nameTh: "เครื่องวัดแรงตึงผิว (Tensiometer)", nameEn: "Tensiometer", brand: "Kino/A60", qty: 1, testCodes: "SF02-1A, SF02-1B, SF02-1C, SF02-1D", descTh: "วัดแรงตึงผิว (0-999 mN/m) ระหว่างของเหลว 2 ชนิด หรือของเหลวกับอากาศ — บอกคุณสมบัติสำคัญของสารลดแรงตึงผิว อิมัลชัน", descEn: "Measures surface and interfacial tension (0–999 mN/m) using Du Noüy ring or Wilhelmy plate methods. Evaluates surfactants and emulsion stability.", domainTags: ["materials", "pharma", "food_sci"], specs: "0-999.999 mN/m; Surface + Interfacial tension + Contact angle" },
  { id: 78, groupId: 8, order: "8.1", nameTh: "เครื่องวิเคราะห์คุณสมบัติทางความร้อน (STA)", nameEn: "Simultaneous Thermal Analyzer (STA)", brand: "NETZSCH/STA 449 F5 Jupiter", qty: 1, testCodes: "TM01-2A, TM01-2B, TM01-2C", descTh: "วัดการเปลี่ยนแปลงน้ำหนัก (TGA) และการดูด/คายพลังงาน (DSC) ของตัวอย่างพร้อมกัน เมื่อให้ความร้อน — วิเคราะห์ที่อุณหภูมิสูงถึง 1,600°C", descEn: "Simultaneously measures TGA (weight change) and DSC (heat flow) up to 1600°C. Analyzes thermal stability, decomposition, and phase transitions of materials.", domainTags: ["materials", "analytical_chem", "pharma"], specs: "RT-1600°C; TG+DTG+DTA+DSC; 0.001-50K/min; N2/O2/Air" },
  { id: 79, groupId: 8, order: "8.2", nameTh: "เครื่องวิเคราะห์การเปลี่ยนแปลงทางความร้อน (DSC)", nameEn: "Differential Scanning Calorimeter (DSC)", brand: "NETZSCH/DSC 214 Polyma", qty: 1, testCodes: "TM02-1A, TM02-2A, TM02-3A, TM02-4A, TM02-1B, TM02-1C, TM02-2C, TM02-3C, TM02-4C", descTh: "วัดการดูด/คายพลังงานของตัวอย่างเมื่อเปลี่ยนอุณหภูมิ วิเคราะห์ได้ตั้งแต่ -70°C ถึง 600°C มี Auto sampler 20 ช่อง", descEn: "Measures heat absorbed or released from -70°C to 600°C. Autosampler holds 20 samples. Determines Tm, Tg, and crystallization behavior of polymers and pharmaceuticals.", domainTags: ["materials", "pharma", "analytical_chem"], specs: "-70 to 600°C; 0.001-500K/min; 20-position auto sampler" },
  { id: 80, groupId: 8, order: "8.1", nameTh: "เครื่องวิเคราะห์ความร้อนอัตโนมัติ (Automated-STA)", nameEn: "Automated Simultaneous Thermal Analyzer", brand: "Mettler Toledo", qty: 1, testCodes: "TM01-1A, TM01-1B, TM01-1C", descTh: "STA แบบอัตโนมัติ มีแขนกลใส่ตัวอย่าง 34 ช่อง วิเคราะห์ต่อเนื่องโดยไม่ต้องใส่เองทีละตัว — เหมาะงาน High-throughput", descEn: "Automated STA with 34-position robotic autosampler for unattended overnight analysis. Delivers consistent high-throughput thermal measurements.", domainTags: ["materials", "analytical_chem"], specs: "RT-1100°C; 34-position auto; 0.02-150K/min; N2/O2/Air" },
  { id: 81, groupId: 9, order: "9.1", nameTh: "ระบบทำน้ำบริสุทธิ์ 3 ระดับ", nameEn: "Water Purification System (Type I/II/III)", brand: "Merck/Milli-Q IQ-7000; Elix-essential10; TKA/PW20", qty: 1, testCodes: "WP01-1D, WP01-2D, WP01-3D, WP01-4D", descTh: "ระบบทำน้ำบริสุทธิ์ 3 ระดับ: Type I (18.2 MΩ-cm) สำหรับ HPLC/Molecular biology, Type II (5-15 MΩ-cm) สำหรับ Buffer, Type III (RO) ทั่วไป", descEn: "Three-tier water purification: Type I (18.2 MΩ·cm ultrapure for HPLC/molecular biology), Type II (general lab use), and Type III (RO pre-treated water).", domainTags: ["molecular_bio", "analytical_chem", "microbiology"], specs: "Type I: 18.2 MΩ-cm; Type II: 5-15 MΩ-cm; Type III: RO" },
  { id: 82, groupId: 10, order: "10.1", nameTh: "เครื่องเอกซเรย์คอมพิวเตอร์ระดับนาโนเมตร (Nano-CT)", nameEn: "Nanoscale X-ray Computed Tomograph (Nano-CT)", brand: "Bruker/SkyScan2214", qty: 1, testCodes: "XR01-1A, XR01-2A", descTh: "สแกน X-ray สร้างภาพ 3D ภายในตัวอย่างโดยไม่ตัดทำลาย ความละเอียดระดับ 800nm — เห็นโครงสร้างภายในวัสดุ กระดูก หรือ Battery", descEn: "X-ray computed tomography at 800 nm resolution. Creates 3D internal images of materials non-destructively — applied to battery electrodes, bone, and composites.", domainTags: ["materials", "medicine", "nano"], specs: "800nm resolution; 160kV; Composite/Geology/Bone/Battery" },
  { id: 83, groupId: 10, order: "10.2", nameTh: "เครื่องวิเคราะห์การเลี้ยวเบนของรังสีเอ็กซ์ (XRD รุ่นใหญ่)", nameEn: "X-ray Diffractometer (XRD)", brand: "Bruker/D8 DISCOVER", qty: 1, testCodes: "XR02-2A, XR02-3A, XR02-2C, XR02-2D, XR02-3D", descTh: "ยิง X-ray ผ่านผลึก ดูรูปแบบ Diffraction ระบุชนิดและโครงสร้างผลึก — บอก Phase, ขนาดผลึก, ความเป็นผลึก มีฐาน Low/High temp (-180 ถึง 1600°C)", descEn: "Identifies crystal phases and lattice parameters by measuring X-ray diffraction patterns. Operable from -180°C to 1600°C with various sample stage attachments.", domainTags: ["materials", "analytical_chem", "pharma"], specs: "Cu & Mo anode; 2D detector; -180 to 1600°C; Phase ID/Crystal size/Lattice strain" },
  { id: 84, groupId: 10, order: "10.2", nameTh: "เครื่องวิเคราะห์การเลี้ยวเบนของรังสีเอ็กซ์ชนิดตั้งโต๊ะ (Benchtop XRD)", nameEn: "Benchtop X-ray Diffractometer", brand: "Bruker/D2 PHASER", qty: 1, testCodes: "XR02-1A, XR02-1B, XR02-1C, XR02-1D", descTh: "XRD ขนาดกะทัดรัดตั้งโต๊ะ ใช้งานง่ายกว่า — ระบุชนิดสาร Phase identification และโครงสร้างผลึกสำหรับงานทั่วไป", descEn: "Compact benchtop XRD for routine crystal phase identification. Easier operation than floor-standing XRD with comparable analytical power for standard samples.", domainTags: ["materials", "analytical_chem", "pharma"], specs: "Cu anode; Silicon strip detector; Phase ID" },
  { id: 85, groupId: 10, order: "10.3", nameTh: "เครื่องวิเคราะห์การเรืองของรังสีเอกซ์แบบกระจายความยาวคลื่น (WDXRF)", nameEn: "Wavelength Dispersive X-ray Fluorescence (WDXRF)", brand: "Bruker/S8 TIGER", qty: 1, testCodes: "XR04-2A, XR04-2B, XR04-2D", descTh: "ยิง X-ray ใส่ตัวอย่าง ดูแสงเรืองที่ปล่อยออกมา วิเคราะห์ธาตุ C ถึง U ในตัวอย่างของแข็ง/ของเหลว — ไม่ต้องเตรียมตัวอย่างมาก", descEn: "Wavelength-dispersive XRF for elemental analysis from Carbon to Uranium in solids and liquids. Sub-ppm detection with minimal sample preparation required.", domainTags: ["materials", "analytical_chem", "environment"], specs: "C to U; sub-ppm to 100%; Solid & Liquid; Rh X-ray tube" },
  { id: 86, groupId: 10, order: "10.3", nameTh: "เครื่องกล้องจุลทรรศน์ฟลูออเรสเซนต์ XRF (Micro-XRF)", nameEn: "X-ray Fluorescence Microscope (Micro-XRF)", brand: "Horiba/XGT-9000", qty: 1, testCodes: "XR04-1A, XR04-1B, XR04-1D", descTh: "XRF ที่มี Beam เล็กมาก (10-100 ไมครอน) สร้างแผนที่ 2D การกระจายธาตุบนพื้นผิว — ตรวจว่าธาตุอยู่ที่ใดในชิ้นงาน", descEn: "Micro-focused XRF beam (10–100 µm) generates 2D elemental distribution maps. Analyzes geological, biological, and archaeological samples spatially.", domainTags: ["materials", "analytical_chem", "environment"], specs: "F to Am; 10µm & 100µm beam; Elemental mapping; Co-Loc with Raman" },
  { id: 87, groupId: 11, order: "HPC", nameTh: "ระบบคอมพิวเตอร์ประมวลผลประสิทธิภาพสูง (HPC)", nameEn: "High Performance Computing (HPC) Facility", brand: "Primera", qty: 1, testCodes: "-", descTh: "กลุ่มคอมพิวเตอร์ประสิทธิภาพสูงสำหรับงานคำนวณขนาดใหญ่ที่คอมพิวเตอร์ทั่วไปทำไม่ได้ — CPU 256 cores/RAM 5TB/GPU Nvidia DGX-A100x16", descEn: "High-performance computing cluster: 256 CPU cores, 5 TB RAM, 16× NVIDIA DGX-A100 GPUs, 1 PB storage. For molecular dynamics, NGS bioinformatics, AI/ML workloads.", domainTags: ["computing", "molecular_bio", "genomics", "medicine"], specs: "Script: 256CPU/5TB RAM/DGX-A100 80GBx16/1PB; CPU: 224CPU/6TB/A100-PCIe 40GBx2" },
];

// ===== รูปภาพเครื่องมือสำหรับหน้า Services =====
// =====================================================================
// วิธีใส่รูป: สามารถใช้ ID ของเครื่องมือ (id), ชื่อภาษาอังกฤษ (nameEn) หรือชื่อภาษาไทย (nameTh) 
// ที่อยู่ในตัวแปร equipmentData เป็นคีย์ (key) ได้เลย
const servicesImages = {
  1: "images/varioflash.png", // Microplate Reader
  2: "images/tecan.png", // UV-Vis and Fluorescence Microplate Reader
  3: "images/microplate-reader.png", // Microplate Reader (Multimode)
  4: "images/image-analyzer.png", // Image Analyzer
  5: "images/gel doc.png", // Gel Documentation
  6: "images/flow.png", // Flow Cytometer (Analyzer)
  7: "images/flow-sorter.jpg", // Flow Cytometer (Cell Sorter)
  8: "images/pcr.png", // Thermocycler (PCR)
  9: "images/realtime-pcr.png", // Real-Time PCR (qPCR)
  10: "images/ngs-p.scale.png", // Next-Generation Sequencer (Production-Scale)
  11: "images/ngs-bt.png", // Next-Generation Sequencer (Benchtop)
  12: "images/fragment.png", // Fragment Analyzer
  13: "images/ma.png", // MassARRAY Genotyping System
  14: "images/biacore.png", // Biomolecular Interaction Analyzer (SPR)
  15: "images/jess.png", // Automated Western Blot
  16: "images/elispot.png", // ELISpot / FluoroSpot Analyzer
  17: "images/maldi.png", // MALDI-TOF/TOF Mass Spectrometer
  18: "images/bioreactor.png", // Bioreactor
  19: "images/typhoon.png", // Biomolecular Imager
  20: "images/incubator.png", // CO2 Incubator / Cooling Incubator / Heating Incubator / Shaking Incubator
  21: "images/hplc-water.png", // High Performance Liquid Chromatograph (HPLC)
  22: "images/uplc.png", // Ultra Performance LC (UPLC)
  23: "images/hplc.png", // HPLC (Thermo Dionex Ultimate 3200/3400)
  24: "images/uhplc.png", // Ultra High Performance LC (UHPLC)
  25: "images/lcmsttof.png", // LC-MS Triple TOF (High Resolution)
  26: "images/lcmsqtrap.png", // LC-MS Triple Quadrupole (QTRAP)
  27: "images/flash.png", // Flash Chromatograph
  28: "images/dart.png", // Direct Analysis in Real Time Mass Spectrometer (DART-MS)
  29: "images/purifier10.png", // Fast Protein Liquid Chromatograph (FPLC)
  30: "images/fplc.png", // FPLC (Preparative-Scale)
  31: "images/gc.png", // Gas Chromatograph (GC)
  32: "images/gc-ms.png", // Gas Chromatograph-Mass Spectrometer (GC-MS)
  33: "images/gc-tq.png", // GC-Triple Quadrupole Mass Spectrometer (GC-TQ)
  34: "images/-80.png", // Ultra-Low Temperature Freezer (-80°C)
  35: "images/-40.png", // Deep Freezer (-40°C)
  36: "images/-20.png", // Standard Freezer (-20°C)
  37: "images/optical-microscope.png", // Optical Microscope
  38: "images/flu-opt-microscope.png", // Fluorescence Inverted Microscope
  39: "images/lf-stereomicroscope.png", // Light & Fluorescence Stereomicroscope
  40: "images/inverted-microscope.png", // Inverted Microscope
  41: "images/laser-dis-microscope.png", // Laser Microdissection Microscope
  42: "images/hr-inv-microscope.png", // High-Resolution Inverted Microscope
  43: "images/deltavision.png", // DeltaVision Microscope
  44: "images/optical-sectioning-microscope.png", // Optical Sectioning Microscope
  45: "images/afm.png", // Atomic Force Microscope (AFM)
  46: "images/afm-raman.png", // Atomic Force Microscope-Raman Spectrometer
  47: "images/cryo-tem.png", // Cryogenic Transmission Electron Microscope (Cryo-TEM)
  48: "images/sem.png", // Scanning Electron Microscope (SEM)
  49: "images/fesem.png", // Field Emission Scanning Electron Microscope (FE-SEM)
  50: "images/balance.png", // Analytical Balance (2/4/6 digits)
  51: "images/coater.png", // Auto Fine Coater (Sputter Coater)
  52: "images/autoclave.png", // Autoclave
  53: "images/epmotion.png", // Automated Liquid Handling System
  54: "images/autovertri.png", // Automated Vitrification Machine
  55: "images/centrifuge.png", // Centrifuge (Benchtop/High Speed/Superspeed/Ultra Speed)
  56: "images/speedvac.png", // Sample Concentrator (Cooling/N2/SpeedVac)
  57: "images/tff.png", // Crossflow Filtration Concentrator
  58: "images/cryostat.png", // Cryostat
  59: "images/freezedryer.png", // Freeze Dryer (Lyophilizer)
  60: "images/freeze-mill.png", // Cryogenic Grinder (Freeze Mill)
  61: "images/sonicator.png", // High Intensity Ultrasonic Processor
  62: "images/rotaryevap.png", // Rotary Evaporator
  63: "images/raman.png", // Raman Microscope
  64: "images/spectrofluorometer.png", // Spectrofluorometer
  65: "images/nanodrop.png", // NanoDrop Spectrophotometer
  66: "images/nmr.png", // Nuclear Magnetic Resonance Spectrometer (NMR)
  67: "images/faas.png", // Flame Atomic Absorption Spectrometer (FAAS)
  68: "images/gfaas.png", // Graphite Furnace Atomic Absorption Spectrometer (GFAAS)
  69: "images/icpms.png", // Inductively Coupled Plasma-Mass Spectrometer (ICP-MS)
  70: "images/cd.png", // Circular Dichroism Spectrometer (CD)
  71: "images/ftir.png", // Fourier-Transform Infrared Spectrometer (FTIR)
  72: "images/ftir-microscope.png", // FTIR Microscope Spectrometer
  73: "images/dls.png", // Nanosizer / Dynamic Light Scattering (DLS)
  74: "images/ld.png", // Microparticle Size Analyzer (Laser Diffraction)
  75: "images/fluorometer.png", // Fluorometer (DNA/RNA Quantification)
  76: "images/oca.png", // Optical Contact Angle Analyzer (OCA)
  77: "images/tensiometer.png", // Tensiometer
  78: "images/sta.png", // Simultaneous Thermal Analyzer (STA)
  79: "images/dsc.png", // Differential Scanning Calorimeter (DSC)
  80: "images/auto-sta.png", // Automated Simultaneous Thermal Analyzer
  81: "images/water-purification.png", // Water Purification System (Type I/II/III)
  82: "images/nanoct.png", // Nanoscale X-ray Computed Tomograph (Nano-CT)
  83: "images/xrd.png", // X-ray Diffractometer (XRD)
  84: "images/benchtop-xrd.png", // Benchtop X-ray Diffractometer
  85: "images/wdxrf.png", // Wavelength Dispersive X-ray Fluorescence (WDXRF)
  86: "images/microxrf.png", // X-ray Fluorescence Microscope (Micro-XRF)
  87: "images/hpc.png", // High Performance Computing (HPC) Facility
};


// ทำการรวมรูปภาพหน้า Services เข้าไปใน object หลักที่ถูกเรียกใช้
Object.assign(instrumentImages, servicesImages);
