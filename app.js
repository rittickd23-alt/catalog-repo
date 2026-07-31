/**
 * AMPEdge Solution — BOM & Quotation System
 * Dynamic PDF generation matching screenshot design exactly
 * Pages auto-expand based on content
 */

// ====== CATALOG DATA ======
// Each category has baseline items (promoter standard) and recommended items (AMPEdge value-add)
const CATALOG = {
    house: {
        label: "Independent House",
        icon: "fa-house-chimney",
        defaultUnits: 1,
        baseline: [
            { name: "Bedroom 1 – Light Point", rate: 250, unit: "Point" },
            { name: "Bedroom 1 – Fan Point", rate: 250, unit: "Point" },
            { name: "Bedroom 1 – Switch Point", rate: 200, unit: "Point" },
            { name: "Bedroom 1 – Night Lamp / Foot Light", rate: 200, unit: "Point" },
            { name: "Bedroom 1 – AC Power Point", rate: 350, unit: "Point" },
            { name: "Bedroom 2 – Light Point", rate: 250, unit: "Point" },
            { name: "Bedroom 2 – Fan Point", rate: 250, unit: "Point" },
            { name: "Bedroom 2 – Switch Point", rate: 200, unit: "Point" },
            { name: "Bedroom 2 – Night Lamp / Foot Light", rate: 200, unit: "Point" },
            { name: "Bedroom 2 – AC Power Point", rate: 350, unit: "Point" },
            { name: "Living Room – Light Point 1", rate: 250, unit: "Point" },
            { name: "Living Room – Light Point 2", rate: 250, unit: "Point" },
            { name: "Living Room – Fan Point", rate: 250, unit: "Point" },
            { name: "Living Room – TV Point Socket", rate: 200, unit: "Point" },
            { name: "Living Room – Night / Hanging Lamp", rate: 250, unit: "Point" },
            { name: "Toilet – Light Point", rate: 250, unit: "Point" },
            { name: "Toilet – Exhaust Fan Point", rate: 250, unit: "Point" },
            { name: "Toilet – Geyser Power Point", rate: 350, unit: "Point" },
            { name: "Kitchen/Dining – Light Point", rate: 250, unit: "Point" },
            { name: "Kitchen/Dining – Fan Point", rate: 250, unit: "Point" },
            { name: "Kitchen/Dining – Common Switch", rate: 200, unit: "Point" },
            { name: "Kitchen/Dining – Plug / Socket Point", rate: 200, unit: "Point" },
            { name: "Kitchen/Dining – Fridge Point", rate: 300, unit: "Point" },
            { name: "Washing Chamber – Light Point", rate: 200, unit: "Point" },
            { name: "Washing Chamber – Washing Machine Point", rate: 350, unit: "Point" },
            { name: "Staircase – 2-Way Light Point", rate: 350, unit: "Point" },
            { name: "Main Entrance – Doorbell Point", rate: 150, unit: "Point" },
            { name: "Main Entrance – Porch Light Point", rate: 250, unit: "Point" },
        ],
        recommended: [
            { name: "Balcony (BR1) – Light Point", rate: 250, unit: "Point" },
            { name: "Balcony (BR2) – Light Point", rate: 250, unit: "Point" },
            { name: "Balcony (Kitchen/Dining) – Light Point", rate: 250, unit: "Point" },
            { name: "BR1 – Extra 5A Socket (Bedside)", rate: 200, unit: "Point" },
            { name: "BR2 – Extra 5A Socket (Bedside)", rate: 200, unit: "Point" },
            { name: "Living – Extra Socket (Set-top box/Ent.)", rate: 200, unit: "Point" },
            { name: "Kitchen – Exhaust Fan / Chimney Point", rate: 300, unit: "Point" },
            { name: "Kitchen – Microwave / Mixer Point", rate: 250, unit: "Point" },
            { name: "Kitchen – Water Purifier / RO Point", rate: 200, unit: "Point" },
            { name: "Main Entrance – Porch / Gate Light", rate: 250, unit: "Point" },
            { name: "Common Area – Inverter / UPS Point", rate: 350, unit: "Point" },
            { name: "Common Area – Spare / Provision Point", rate: 200, unit: "Point" },
            { name: "DB Area – Stabilizer / AC Isolator", rate: 300, unit: "Point" },
            { name: "BR1 – Reading / Study Lamp Point", rate: 200, unit: "Point" },
            { name: "BR2 – Reading / Study Lamp Point", rate: 200, unit: "Point" },
            { name: "Exterior – CCTV Camera Point", rate: 250, unit: "Point" },
            { name: "Exterior – Boundary Wall Floodlight", rate: 300, unit: "Point" },
            { name: "Borewell / Water Pump Motor Point", rate: 500, unit: "Point" },
        ],
        boqExtras: [
            { name: "Main Meter Box Installation & Service Inlet", rate: 1500, unit: "Set" },
            { name: "Main Distribution Board (DB) Assembly & Dressing", rate: 2500, unit: "Board" },
            { name: "MCB (Miniature Circuit Breaker) Installation", rate: 150, unit: "Nos" },
            { name: "RCCB (30mA) Installation", rate: 350, unit: "Nos" },
            { name: "Copper Plate Chemical Earthing Pit (IS 3043)", rate: 3500, unit: "Pit" },
            { name: "GI Pipe Earthing (IS 3043 compliant)", rate: 2500, unit: "Pit" },
            { name: "Heavy Duty PVC Conduit Pipe Laying", rate: 6, unit: "Sq.Ft" },
            { name: "Main Sub-Main Line Cable Wiring", rate: 17, unit: "Rft" },
            { name: "Inverter / UPS Bypass & Changeover Setup", rate: 1500, unit: "Set" },
            { name: "Lightning Arrester (Copper Rod)", rate: 2000, unit: "Set" },
        ],
        rationale: "Independent houses require dedicated circuits for heavy appliances (AC, geyser, pump), separate earthing pits, and inverter bypass lines. The recommended scope adds balcony lighting, bedside charging, kitchen appliance circuits, CCTV, and boundary floodlights to ensure complete coverage and future readiness."
    },
    flat1bhk: {
        label: "Flat – 1BHK",
        icon: "fa-building",
        defaultUnits: 12,
        baseline: [
            { name: "Bedroom – Light Point", rate: 250, unit: "Point" },
            { name: "Bedroom – Fan Point", rate: 250, unit: "Point" },
            { name: "Bedroom – Switch Point", rate: 200, unit: "Point" },
            { name: "Bedroom – Night Lamp / Foot Light", rate: 200, unit: "Point" },
            { name: "Bedroom – AC Power Point", rate: 350, unit: "Point" },
            { name: "Living Room – Light Point", rate: 250, unit: "Point" },
            { name: "Living Room – Fan Point", rate: 250, unit: "Point" },
            { name: "Living Room – TV Point Socket", rate: 200, unit: "Point" },
            { name: "Toilet – Light Point", rate: 250, unit: "Point" },
            { name: "Toilet – Exhaust Fan Point", rate: 250, unit: "Point" },
            { name: "Toilet – Geyser Power Point", rate: 350, unit: "Point" },
            { name: "Kitchen – Light Point", rate: 250, unit: "Point" },
            { name: "Kitchen – Fan Point", rate: 250, unit: "Point" },
            { name: "Kitchen – Common Switch", rate: 200, unit: "Point" },
            { name: "Kitchen – Plug / Socket Point", rate: 200, unit: "Point" },
            { name: "Kitchen – Fridge Point", rate: 300, unit: "Point" },
            { name: "Washing Area – Light Point", rate: 200, unit: "Point" },
            { name: "Washing Area – Washing Machine Point", rate: 350, unit: "Point" },
        ],
        recommended: [
            { name: "Balcony – Light Point", rate: 250, unit: "Point" },
            { name: "Bedroom – Extra 5A Socket (Bedside)", rate: 200, unit: "Point" },
            { name: "Living – Extra Socket (Set-top box/Ent.)", rate: 200, unit: "Point" },
            { name: "Kitchen – Exhaust Fan / Chimney Point", rate: 300, unit: "Point" },
            { name: "Kitchen – Microwave / Mixer Point", rate: 250, unit: "Point" },
            { name: "Kitchen – Water Purifier / RO Point", rate: 200, unit: "Point" },
            { name: "Main Entrance – Doorbell Point", rate: 150, unit: "Point" },
            { name: "Main Entrance – Porch Light Point", rate: 200, unit: "Point" },
            { name: "Common Area – Inverter / UPS Point", rate: 350, unit: "Point" },
            { name: "Common Area – Spare / Provision Point", rate: 200, unit: "Point" },
            { name: "DB Area – Stabilizer / AC Isolator", rate: 300, unit: "Point" },
        ],
        boqExtras: [
            { name: "Main Meter Connection & Earthing Link", rate: 800, unit: "Set" },
            { name: "Distribution Board (4-Way SP MCB)", rate: 1200, unit: "Board" },
            { name: "MCB Installation per circuit", rate: 150, unit: "Nos" },
            { name: "RCCB Installation (30mA)", rate: 350, unit: "Nos" },
            { name: "Heavy Duty PVC Conduit Pipe Laying", rate: 6, unit: "Sq.Ft" },
            { name: "Main Sub-Main Line Cable Wiring", rate: 17, unit: "Rft" },
        ],
        rationale: "Modern 1BHK flats need dedicated circuits for kitchen appliances (chimney, microwave), bedside charging, inverter routing, and balcony lighting for safety. The recommended scope adds these essential points plus a stabilizer provision."
    },
    flat2bhk: {
        label: "Flat – 2BHK",
        icon: "fa-building",
        defaultUnits: 16,
        baseline: [
            { name: "Bedroom 1 – Light Point", rate: 250, unit: "Point" },
            { name: "Bedroom 1 – Fan Point", rate: 250, unit: "Point" },
            { name: "Bedroom 1 – Switch Point", rate: 200, unit: "Point" },
            { name: "Bedroom 1 – Night Lamp / Foot Light", rate: 200, unit: "Point" },
            { name: "Bedroom 1 – AC Power Point", rate: 350, unit: "Point" },
            { name: "Bedroom 2 – Light Point", rate: 250, unit: "Point" },
            { name: "Bedroom 2 – Fan Point", rate: 250, unit: "Point" },
            { name: "Bedroom 2 – Switch Point", rate: 200, unit: "Point" },
            { name: "Bedroom 2 – Night Lamp / Foot Light", rate: 200, unit: "Point" },
            { name: "Bedroom 2 – AC Power Point", rate: 350, unit: "Point" },
            { name: "Living Room – Light Point 1", rate: 250, unit: "Point" },
            { name: "Living Room – Light Point 2", rate: 250, unit: "Point" },
            { name: "Living Room – Fan Point", rate: 250, unit: "Point" },
            { name: "Living Room – TV Point Socket", rate: 200, unit: "Point" },
            { name: "Living Room – Night / Hanging Lamp", rate: 250, unit: "Point" },
            { name: "Toilet – Light Point", rate: 250, unit: "Point" },
            { name: "Toilet – Exhaust Fan Point", rate: 250, unit: "Point" },
            { name: "Toilet – Geyser Power Point", rate: 350, unit: "Point" },
            { name: "Kitchen/Dining – Light Point", rate: 250, unit: "Point" },
            { name: "Kitchen/Dining – Fan Point", rate: 250, unit: "Point" },
            { name: "Kitchen/Dining – Common Switch", rate: 200, unit: "Point" },
            { name: "Kitchen/Dining – Plug / Socket Point", rate: 200, unit: "Point" },
            { name: "Kitchen/Dining – Fridge Point", rate: 300, unit: "Point" },
            { name: "Washing Chamber – Light Point", rate: 200, unit: "Point" },
            { name: "Washing Chamber – Washing Machine Point", rate: 350, unit: "Point" },
        ],
        recommended: [
            { name: "Balcony (BR1) – Light Point", rate: 250, unit: "Point" },
            { name: "Balcony (BR2) – Light Point", rate: 250, unit: "Point" },
            { name: "Balcony (Kitchen/Dining) – Light Point", rate: 250, unit: "Point" },
            { name: "BR1 – Extra 5A Socket (Bedside)", rate: 200, unit: "Point" },
            { name: "BR2 – Extra 5A Socket (Bedside)", rate: 200, unit: "Point" },
            { name: "Living – Extra Socket (Set-top box/Ent.)", rate: 200, unit: "Point" },
            { name: "Kitchen – Exhaust Fan / Chimney Point", rate: 300, unit: "Point" },
            { name: "Kitchen – Microwave / Mixer Point", rate: 250, unit: "Point" },
            { name: "Main Entrance – Doorbell Point", rate: 150, unit: "Point" },
            { name: "Main Entrance / Porch – Light Point", rate: 250, unit: "Point" },
            { name: "Common Area – Inverter / UPS Point", rate: 350, unit: "Point" },
            { name: "Common Area – Spare / Provision Point", rate: 200, unit: "Point" },
            { name: "DB Area – Stabilizer / AC Isolator", rate: 300, unit: "Point" },
            { name: "BR1 – Reading / Study Lamp Point", rate: 200, unit: "Point" },
            { name: "BR2 – Reading / Study Lamp Point", rate: 200, unit: "Point" },
        ],
        boqExtras: [
            { name: "Main Meter Connection & Earthing Link", rate: 800, unit: "Set" },
            { name: "Distribution Board (8-Way DP MCB)", rate: 1500, unit: "Board" },
            { name: "MCB Installation per circuit", rate: 150, unit: "Nos" },
            { name: "RCCB Installation (30mA)", rate: 350, unit: "Nos" },
            { name: "Heavy Duty PVC Conduit Pipe Laying", rate: 6, unit: "Sq.Ft" },
            { name: "Main Sub-Main Line Cable Wiring", rate: 17, unit: "Rft" },
        ],
        rationale: "Modern 2BHK apartments require dedicated circuits for balcony lighting, bedside device charging, kitchen appliances (chimneys/microwaves), and back-up inverter routing. Providing 40 points per flat prevents post-handover wall chasing, ensures balanced phase distribution, and significantly elevates property value for buyers."
    },
    flat3bhk: {
        label: "Flat – 3BHK",
        icon: "fa-building",
        defaultUnits: 8,
        baseline: [
            { name: "Master Bedroom – Light Point 1", rate: 250, unit: "Point" },
            { name: "Master Bedroom – Light Point 2", rate: 250, unit: "Point" },
            { name: "Master Bedroom – Fan Point", rate: 250, unit: "Point" },
            { name: "Master Bedroom – Night Lamp", rate: 200, unit: "Point" },
            { name: "Master Bedroom – AC Power Point", rate: 350, unit: "Point" },
            { name: "Master Bedroom – TV Point", rate: 200, unit: "Point" },
            { name: "Bedroom 2 – Light Point", rate: 250, unit: "Point" },
            { name: "Bedroom 2 – Fan Point", rate: 250, unit: "Point" },
            { name: "Bedroom 2 – Night Lamp", rate: 200, unit: "Point" },
            { name: "Bedroom 2 – AC Power Point", rate: 350, unit: "Point" },
            { name: "Bedroom 3 – Light Point", rate: 250, unit: "Point" },
            { name: "Bedroom 3 – Fan Point", rate: 250, unit: "Point" },
            { name: "Bedroom 3 – AC Power Point", rate: 350, unit: "Point" },
            { name: "Living Room – Light Point 1", rate: 250, unit: "Point" },
            { name: "Living Room – Light Point 2", rate: 250, unit: "Point" },
            { name: "Living Room – Fan Point", rate: 250, unit: "Point" },
            { name: "Living Room – TV / AV Socket", rate: 200, unit: "Point" },
            { name: "Dining – Light Point", rate: 250, unit: "Point" },
            { name: "Dining – Fan Point", rate: 250, unit: "Point" },
            { name: "Toilet 1 – Light & Exhaust", rate: 250, unit: "Point" },
            { name: "Toilet 1 – Geyser Point", rate: 350, unit: "Point" },
            { name: "Toilet 2 – Light & Exhaust", rate: 250, unit: "Point" },
            { name: "Toilet 2 – Geyser Point", rate: 350, unit: "Point" },
            { name: "Kitchen – Light Point", rate: 250, unit: "Point" },
            { name: "Kitchen – Fan Point", rate: 250, unit: "Point" },
            { name: "Kitchen – Fridge Point", rate: 300, unit: "Point" },
            { name: "Kitchen – Socket / Plug Point", rate: 200, unit: "Point" },
            { name: "Washing Area – Light Point", rate: 200, unit: "Point" },
            { name: "Washing Area – Machine Point", rate: 350, unit: "Point" },
        ],
        recommended: [
            { name: "Balcony (MBR) – Light Point", rate: 250, unit: "Point" },
            { name: "Balcony (BR2) – Light Point", rate: 250, unit: "Point" },
            { name: "Balcony (Kitchen) – Light Point", rate: 250, unit: "Point" },
            { name: "MBR – Bedside USB Socket", rate: 250, unit: "Point" },
            { name: "MBR – Reading Light Point", rate: 200, unit: "Point" },
            { name: "BR2 – Bedside Socket", rate: 200, unit: "Point" },
            { name: "BR3 – Bedside Socket", rate: 200, unit: "Point" },
            { name: "Living – Extra Entertainment Socket", rate: 200, unit: "Point" },
            { name: "Kitchen – Chimney / Exhaust Point", rate: 300, unit: "Point" },
            { name: "Kitchen – Microwave / OTG Socket", rate: 300, unit: "Point" },
            { name: "Kitchen – Water Purifier / RO Point", rate: 200, unit: "Point" },
            { name: "Kitchen – Dishwasher Power Point", rate: 300, unit: "Point" },
            { name: "Main Entrance – Video Doorbell", rate: 350, unit: "Point" },
            { name: "Main Entrance – Porch Lamp", rate: 250, unit: "Point" },
            { name: "Toilet 3 – Light & Exhaust", rate: 250, unit: "Point" },
            { name: "Common – UPS / Inverter Point", rate: 400, unit: "Point" },
            { name: "DB – Stabilizer & Isolator", rate: 400, unit: "Point" },
            { name: "Spare Provision Points", rate: 200, unit: "Point" },
        ],
        boqExtras: [
            { name: "Main Meter Connection & 3-Phase Earthing", rate: 1200, unit: "Set" },
            { name: "Distribution Board (12-Way TP MCB)", rate: 2000, unit: "Board" },
            { name: "MCB Installation per circuit", rate: 150, unit: "Nos" },
            { name: "RCCB Installation (30mA 4-Pole)", rate: 500, unit: "Nos" },
            { name: "Heavy Duty PVC Conduit Pipe Laying", rate: 6, unit: "Sq.Ft" },
            { name: "Main Sub-Main Line Cable Wiring", rate: 17, unit: "Rft" },
        ],
        rationale: "3BHK premium flats require dedicated circuits for multiple ACs, geyser lines, kitchen appliance hub (chimney, microwave, dishwasher, RO), video doorbell, and inverter routing. Recommended scope ensures future-proof wiring and eliminates post-handover complaints."
    },
    flat4bhk: {
        label: "Flat – 4BHK",
        icon: "fa-building-columns",
        defaultUnits: 6,
        baseline: [
            { name: "Master Bedroom – Light Points (×2)", rate: 280, unit: "Point" },
            { name: "Master Bedroom – Fan Point", rate: 250, unit: "Point" },
            { name: "Master Bedroom – Night Lamp", rate: 200, unit: "Point" },
            { name: "Master Bedroom – AC Power Point", rate: 350, unit: "Point" },
            { name: "Master Bedroom – TV Point", rate: 200, unit: "Point" },
            { name: "Bedroom 2 – Light, Fan, AC Points", rate: 250, unit: "Point" },
            { name: "Bedroom 3 – Light, Fan, AC Points", rate: 250, unit: "Point" },
            { name: "Bedroom 4 – Light, Fan, AC Points", rate: 250, unit: "Point" },
            { name: "Living Room – Spotlight / Cove Circuits", rate: 300, unit: "Point" },
            { name: "Living Room – Fan Point", rate: 250, unit: "Point" },
            { name: "Living Room – TV/AV Sockets", rate: 200, unit: "Point" },
            { name: "Dining Hall – Chandelier Point", rate: 300, unit: "Point" },
            { name: "Dining Hall – Fan Point", rate: 250, unit: "Point" },
            { name: "Kitchen – Counter & Cabinet Lights", rate: 250, unit: "Point" },
            { name: "Kitchen – Fridge, Chimney, Purifier", rate: 300, unit: "Point" },
            { name: "Kitchen – Microwave, Dishwasher", rate: 300, unit: "Point" },
            { name: "Toilets (All 4) – Light & Exhaust", rate: 250, unit: "Point" },
            { name: "Toilets (All 4) – Geyser Points", rate: 350, unit: "Point" },
            { name: "Washing Area – Machine Point", rate: 350, unit: "Point" },
        ],
        recommended: [
            { name: "MBR – Bedside Double Power Outlets", rate: 250, unit: "Point" },
            { name: "Bedrooms – Bedside Sockets (each)", rate: 200, unit: "Point" },
            { name: "Balconies – Decorative Lights (each)", rate: 250, unit: "Point" },
            { name: "Pooja Room – Spotlight & Ambient", rate: 250, unit: "Point" },
            { name: "Servant Quarter – Light, Fan, Bell", rate: 250, unit: "Point" },
            { name: "Main Entrance – Smart Lock & Bell", rate: 350, unit: "Point" },
            { name: "Common – Dual Inverter Backup", rate: 500, unit: "Point" },
            { name: "DB Closet – Phase Corrector & Isolators", rate: 400, unit: "Point" },
            { name: "Living – Wall Sconce Points", rate: 250, unit: "Point" },
            { name: "Study Room – Desk Lamp Point", rate: 200, unit: "Point" },
            { name: "CCTV – Camera Points (each)", rate: 250, unit: "Point" },
        ],
        boqExtras: [
            { name: "Main Meter Connection & Heavy Dual Earthing", rate: 1500, unit: "Set" },
            { name: "Distribution Board (16-Way TP MCB)", rate: 2500, unit: "Board" },
            { name: "MCB Installation per circuit", rate: 150, unit: "Nos" },
            { name: "RCCB Installation (30mA 4-Pole)", rate: 500, unit: "Nos" },
            { name: "ELCB (Earth Leakage CB)", rate: 450, unit: "Nos" },
            { name: "Heavy Duty PVC Conduit Pipe Laying", rate: 6, unit: "Sq.Ft" },
            { name: "Main Sub-Main Line Cable Wiring", rate: 17, unit: "Rft" },
        ],
        rationale: "4BHK luxury flats demand extensive wiring for pooja room, servant quarter, smart lock, CCTV, dual inverter backup, and phase correctors. Premium finishes require concealed conduit planning at design stage."
    },
    apartment: {
        label: "Apartment Building",
        icon: "fa-city",
        defaultUnits: 16,
        baseline: [
            { name: "Per Flat – Room Light Points (avg 12)", rate: 250, unit: "Point" },
            { name: "Per Flat – Room Fan Points (avg 6)", rate: 250, unit: "Point" },
            { name: "Per Flat – AC Power Points (avg 2)", rate: 350, unit: "Point" },
            { name: "Per Flat – Socket Points (avg 10)", rate: 200, unit: "Point" },
            { name: "Per Flat – Kitchen Dedicated Lines", rate: 300, unit: "Point" },
            { name: "Per Flat – Geyser Points", rate: 350, unit: "Point" },
            { name: "Per Flat – Washing Machine Point", rate: 350, unit: "Point" },
            { name: "Per Flat – Doorbell & Entrance Light", rate: 200, unit: "Point" },
        ],
        recommended: [
            { name: "Per Flat – Inverter / UPS Line", rate: 350, unit: "Point" },
            { name: "Common – Staircase 2-Way Lighting", rate: 350, unit: "Point" },
            { name: "Common – Corridor / Lobby Lights", rate: 250, unit: "Point" },
            { name: "Common – Parking Area Illumination", rate: 250, unit: "Point" },
            { name: "Common – Lift Power Connection", rate: 3000, unit: "Set" },
            { name: "Common – Water Pump Motor Points", rate: 500, unit: "Point" },
            { name: "Common – CCTV Camera Points (each)", rate: 250, unit: "Point" },
            { name: "Common – Fire Alarm Bell Points", rate: 300, unit: "Point" },
            { name: "Ground Floor – Commercial Shop Wiring", rate: 250, unit: "Point" },
        ],
        boqExtras: [
            { name: "Main LT Panel Connection & Service Inlet", rate: 5000, unit: "Set" },
            { name: "Main Distribution Board (per flat)", rate: 1500, unit: "Board" },
            { name: "MCB per circuit (avg 8 per flat)", rate: 150, unit: "Nos" },
            { name: "RCCB per flat (30mA)", rate: 350, unit: "Nos" },
            { name: "Chemical Earthing Pit (Building Common)", rate: 3500, unit: "Pit" },
            { name: "Heavy Duty PVC Conduit Pipe Laying", rate: 6, unit: "Sq.Ft" },
            { name: "Main Sub-Main Line Cable Wiring", rate: 17, unit: "Rft" },
        ],
        rationale: "Apartment buildings need per-flat wiring multiplied by total units, plus common area infrastructure including staircase 2-way lighting, lift connections, water pump wiring, CCTV, and fire alarm systems."
    },
    office: {
        label: "Commercial Office",
        icon: "fa-briefcase",
        defaultUnits: 1,
        baseline: [
            { name: "Workstation – Dual 5A Socket (per desk)", rate: 200, unit: "Point" },
            { name: "Workstation – UPS Line Socket (per desk)", rate: 250, unit: "Point" },
            { name: "Ceiling – LED 2x2 Panel Light (600x600mm)", rate: 300, unit: "Point" },
            { name: "Ceiling – Recessed Downlight Point", rate: 250, unit: "Point" },
            { name: "Office Floor – Ceiling Fan / Exhaust Wiring", rate: 250, unit: "Point" },
            { name: "Manager Cabin – Light Points", rate: 250, unit: "Point" },
            { name: "Manager Cabin – Fan / AC Point", rate: 300, unit: "Point" },
            { name: "Manager Cabin – Multi-socket Outlet", rate: 200, unit: "Point" },
            { name: "Pantry – Microwave / Coffee Socket (16A)", rate: 300, unit: "Point" },
            { name: "Pantry – Refrigerator / Cooler Socket", rate: 300, unit: "Point" },
            { name: "Pantry – General Utility Socket", rate: 200, unit: "Point" },
        ],
        recommended: [
            { name: "Workstation – CAT6 LAN Data Point", rate: 350, unit: "Point" },
            { name: "Workstation – Telephone Point", rate: 200, unit: "Point" },
            { name: "Conference – HDMI / Projector Outlet", rate: 500, unit: "Point" },
            { name: "Conference – Pop-up Table Sockets", rate: 400, unit: "Point" },
            { name: "Conference – Dimmable Light Circuits", rate: 350, unit: "Point" },
            { name: "Server Room – 16A Rack Power Outlet", rate: 500, unit: "Point" },
            { name: "Server Room – Precision AC Point", rate: 500, unit: "Point" },
            { name: "Server Room – UPS Panel Setup", rate: 2000, unit: "Set" },
            { name: "Reception – Desk Power + Network", rate: 300, unit: "Point" },
            { name: "Reception – Digital Signage Display", rate: 300, unit: "Point" },
            { name: "Reception – Decorative Lighting", rate: 250, unit: "Point" },
            { name: "CCTV – Dome Camera Points (each)", rate: 250, unit: "Point" },
            { name: "Security – Access Control / Biometric", rate: 350, unit: "Point" },
            { name: "Emergency – Exit Signage Points", rate: 300, unit: "Point" },
            { name: "Fire Alarm – Detector & Bell Points", rate: 350, unit: "Point" },
        ],
        boqExtras: [
            { name: "Commercial 3-Phase Meter Box & Service Inlet", rate: 3000, unit: "Set" },
            { name: "Main Distribution Panel (12-Way TP)", rate: 3000, unit: "Board" },
            { name: "Sub-Distribution Board (per zone)", rate: 1500, unit: "Board" },
            { name: "MCB Installation per circuit", rate: 150, unit: "Nos" },
            { name: "RCCB / ELCB Installation", rate: 400, unit: "Nos" },
            { name: "Copper Plate Chemical Earthing Pit", rate: 3500, unit: "Pit" },
            { name: "Heavy Duty Cable Tray Installation", rate: 8, unit: "Sq.Ft" },
            { name: "Main Sub-Main Cable Wiring", rate: 20, unit: "Rft" },
        ],
        rationale: "Commercial offices require separate UPS circuits for workstations, CAT6 data wiring, server room precision AC, conference room AV infrastructure, and comprehensive fire safety with access control systems."
    },
    industrial: {
        label: "Industrial / Factory",
        icon: "fa-industry",
        defaultUnits: 1,
        baseline: [
            { name: "Shop Floor – 3-Phase Socket (32A)", rate: 500, unit: "Point" },
            { name: "Shop Floor – 3-Phase Socket (63A)", rate: 800, unit: "Point" },
            { name: "Shop Floor – High-Bay LED (150W/200W)", rate: 400, unit: "Point" },
            { name: "Shop Floor – Task / Workbench Lighting", rate: 250, unit: "Point" },
            { name: "Machinery – Motor Isolator Switch", rate: 600, unit: "Point" },
            { name: "Machinery – Star-Delta Starter Panel", rate: 2500, unit: "Set" },
            { name: "Machinery – DOL Starter Panel", rate: 1500, unit: "Set" },
            { name: "Office Cabin – Light, Fan & Socket", rate: 250, unit: "Point" },
            { name: "Office – AC Power Point (16A)", rate: 350, unit: "Point" },
            { name: "Store Room – Light & Socket Points", rate: 200, unit: "Point" },
        ],
        recommended: [
            { name: "Crane / Hoist Power Supply Wiring", rate: 1000, unit: "Point" },
            { name: "Industrial Exhaust Blower Wiring", rate: 500, unit: "Point" },
            { name: "Emergency Strobe / Beacon Lights", rate: 400, unit: "Point" },
            { name: "Fire Alarm Panel & Detector Points", rate: 400, unit: "Point" },
            { name: "Generator AMF Control Panel Setup", rate: 5000, unit: "Set" },
            { name: "DG Set Power Cable Termination", rate: 3000, unit: "Set" },
            { name: "Perimeter – High-Power Floodlights", rate: 500, unit: "Point" },
            { name: "Gate – Security Cabin Power & CCTV", rate: 350, unit: "Point" },
        ],
        boqExtras: [
            { name: "Industrial Sub-station Busbar Jointing", rate: 15000, unit: "Set" },
            { name: "Main LT Panel Board Installation", rate: 8000, unit: "Board" },
            { name: "Sub-Distribution Board (per zone)", rate: 3000, unit: "Board" },
            { name: "MCCB (Molded Case CB) Installation", rate: 800, unit: "Nos" },
            { name: "MCB Installation per circuit", rate: 150, unit: "Nos" },
            { name: "RCCB / ELCB Installation", rate: 500, unit: "Nos" },
            { name: "Heavy Chemical Earthing Pit (IS 3043)", rate: 5000, unit: "Pit" },
            { name: "GI Strip Earthing (Factory Perimeter)", rate: 25, unit: "Rft" },
            { name: "Cable Tray / Trunking Installation", rate: 30, unit: "Rft" },
            { name: "Armoured Cable Laying (Underground)", rate: 45, unit: "Rft" },
            { name: "Heavy Duty PVC Conduit Laying", rate: 8, unit: "Sq.Ft" },
        ],
        rationale: "Industrial facilities require heavy 3-phase power distribution, dedicated motor starters, safety interlocks, emergency beacon systems, generator auto-changeover panels, and comprehensive perimeter security lighting."
    }
};

// ====== STATE ======
let currentCategory = null;
let baselineItems = [];
let recommendedItems = [];
let boqItems = [];

// ====== NAVIGATION ======
function goToStep(n) {
    document.querySelectorAll('.step').forEach(s => s.classList.remove('active'));
    document.getElementById(`step-${n}`).classList.add('active');
}

// ====== STEP 1 ======
function selectCategory(key) {
    currentCategory = key;
    const cat = CATALOG[key];
    document.getElementById('badge-text').textContent = cat.label;
    document.getElementById('inp-units').value = cat.defaultUnits;
    const today = new Date();
    document.getElementById('inp-date').value = today.toISOString().split('T')[0];

    baselineItems = cat.baseline.map(i => ({ ...i, qty: 1 }));
    recommendedItems = cat.recommended.map(i => ({ ...i, qty: 1 }));
    boqItems = cat.boqExtras.map(i => ({ ...i, qty: 0 }));

    renderBaseline();
    renderRecommended();
    renderBOQ();
    goToStep(2);
}

// ====== STEP 2: TABLES ======
function renderBaseline() {
    const tbody = document.getElementById('baseline-tbody');
    tbody.innerHTML = '';
    baselineItems.forEach((item, idx) => {
        const tr = document.createElement('tr');
        tr.innerHTML = `<td class="text-center" style="color:var(--text-muted)">${idx+1}.</td><td>${item.name}</td><td><input type="number" value="${item.qty}" min="0" data-list="baseline" data-idx="${idx}" onchange="updateQty(this)"></td>`;
        tbody.appendChild(tr);
    });
    updateSubtotal('baseline');
}
function renderRecommended() {
    const tbody = document.getElementById('recommended-tbody');
    tbody.innerHTML = '';
    recommendedItems.forEach((item, idx) => {
        const tr = document.createElement('tr');
        tr.innerHTML = `<td class="text-center" style="color:var(--text-muted)">${idx+1}.</td><td>${item.name}</td><td><input type="number" value="${item.qty}" min="0" data-list="recommended" data-idx="${idx}" onchange="updateQty(this)"></td>`;
        tbody.appendChild(tr);
    });
    updateSubtotal('recommended');
}
function renderBOQ() {
    const tbody = document.getElementById('boq-tbody');
    tbody.innerHTML = '';
    const allPointItems = [...baselineItems, ...recommendedItems];
    const units = parseInt(document.getElementById('inp-units').value) || 1;

    // First: all point items from baseline + recommended
    allPointItems.forEach((item, idx) => {
        const totalQty = item.qty * units;
        const amount = totalQty * item.rate;
        const tr = document.createElement('tr');
        tr.innerHTML = `<td class="text-center" style="color:#94a3b8">${idx+1}</td><td>${item.name}</td><td class="text-center">${item.unit}</td><td><input type="number" class="rate-input" value="${item.rate}" min="0" data-boqsrc="point" data-idx="${idx}" onchange="updateBOQRate(this)"></td><td class="text-center font-bold">${totalQty}</td><td class="amount-cell">${amount > 0 ? fmtC(amount) : '—'}</td>`;
        tbody.appendChild(tr);
    });

    // Then: extra BOQ items
    boqItems.forEach((item, idx) => {
        const totalQty = item.qty * units;
        const amount = totalQty * item.rate;
        const tr = document.createElement('tr');
        tr.innerHTML = `<td class="text-center" style="color:#94a3b8">${allPointItems.length+idx+1}</td><td>${item.name}</td><td class="text-center">${item.unit}</td><td><input type="number" class="rate-input" value="${item.rate}" min="0" data-boqsrc="extra" data-idx="${idx}" onchange="updateBOQRate(this)"></td><td><input type="number" value="${item.qty}" min="0" data-list="boq" data-idx="${idx}" onchange="updateQty(this)" style="width:60px"></td><td class="amount-cell">${amount > 0 ? fmtC(amount) : '—'}</td>`;
        tbody.appendChild(tr);
    });
    updateGrandTotal();
}

function updateQty(el) {
    const list = el.dataset.list;
    const idx = parseInt(el.dataset.idx);
    const val = parseFloat(el.value) || 0;
    if (list === 'baseline') { baselineItems[idx].qty = val; updateSubtotal('baseline'); }
    else if (list === 'recommended') { recommendedItems[idx].qty = val; updateSubtotal('recommended'); }
    else if (list === 'boq') { boqItems[idx].qty = val; }
    renderBOQ();
}
function updateBOQRate(el) {
    const src = el.dataset.boqsrc;
    const idx = parseInt(el.dataset.idx);
    const val = parseFloat(el.value) || 0;
    if (src === 'point') {
        const allPoints = [...baselineItems, ...recommendedItems];
        allPoints[idx].rate = val;
    } else {
        boqItems[idx].rate = val;
    }
    renderBOQ();
}
function updateSubtotal(type) {
    const items = type === 'baseline' ? baselineItems : recommendedItems;
    const total = items.reduce((s, i) => s + i.qty, 0);
    document.getElementById(`${type}-subtotal`).textContent = total;
}
function updateGrandTotal() {
    const units = parseInt(document.getElementById('inp-units').value) || 1;
    let total = 0;
    [...baselineItems, ...recommendedItems].forEach(i => { total += i.qty * units * i.rate; });
    boqItems.forEach(i => { total += i.qty * units * i.rate; });
    document.getElementById('boq-grand-total').textContent = fmtC(total);
}

// ====== STEP 3: GENERATE PDF (Dynamic Pages) ======
function generateQuotation() {
    const activeBaseline = baselineItems.filter(i => i.qty > 0);
    const activeRecommended = recommendedItems.filter(i => i.qty > 0);
    const activeBOQ = boqItems.filter(i => i.qty > 0);
    if (activeBaseline.length === 0 && activeRecommended.length === 0) {
        alert('Please enter quantity for at least one point item.');
        return;
    }

    const client = document.getElementById('inp-client').value || 'Client';
    const project = document.getElementById('inp-project').value || 'Project';
    const address = document.getElementById('inp-address').value || '—';
    const quoteno = document.getElementById('inp-quoteno').value || '—';
    const dateVal = document.getElementById('inp-date').value;
    const units = parseInt(document.getElementById('inp-units').value) || 1;
    const cat = CATALOG[currentCategory];
    const dateObj = new Date(dateVal);
    const fmtDate = dateObj.toLocaleDateString('en-US', { year:'numeric', month:'long', day:'numeric' });
    const validDate = new Date(dateObj); validDate.setDate(validDate.getDate()+30);
    const fmtValid = validDate.toLocaleDateString('en-US', { year:'numeric', month:'long', day:'numeric' });

    const baselineTotal = activeBaseline.reduce((s,i) => s+i.qty, 0);
    const recommendedTotal = activeRecommended.reduce((s,i) => s+i.qty, 0);

    // Calculate grand total
    let grandTotal = 0;
    [...activeBaseline, ...activeRecommended].forEach(i => grandTotal += i.qty * units * i.rate);
    activeBOQ.forEach(i => grandTotal += i.qty * units * i.rate);

    const doc = document.getElementById('pdf-document');
    doc.innerHTML = '';
    let pageNum = 0;
    const pages = [];

    function makeHeader() {
        return `<div class="pdf-header"><div class="pdf-header-left"><img src="logo.png" class="pdf-logo" alt="AMPEdge"><div><div class="pdf-company-name">AMPEdge Solution</div><div class="pdf-company-tag">Powering the Edge of Tomorrow.</div></div></div><div class="pdf-doc-badge">COMMERCIAL PROPOSAL</div></div>`;
    }
    function makeFooter(pn, total) {
        return `<div class="pdf-footer"><span>AMPEdge Solution | Powering the Edge of Tomorrow.</span><span>Page ${pn} of ${total}</span></div>`;
    }

    // === PAGE 1: COVER ===
    pageNum++;
    const p1 = `<div class="pdf-page page-cover">${makeHeader()}
        <div class="cover-body">
            <div class="cover-title-block">
                <h2>ELECTRICAL WIRING LABOUR<br>SERVICE & BOQ PROPOSAL</h2>
                <p>Detailed point allocation schedule, commercial assessment and Terms of Agreement</p>
            </div>
            <div class="cover-meta-grid">
                <div class="cover-meta-card"><span class="cover-meta-label">PREPARED FOR</span><span class="cover-meta-value hl">${client}</span></div>
                <div class="cover-meta-card"><span class="cover-meta-label">PROJECT NAME</span><span class="cover-meta-value">${project}</span></div>
                <div class="cover-meta-card"><span class="cover-meta-label">SITE ADDRESS</span><span class="cover-meta-value">${address}</span></div>
                <div class="cover-meta-card"><span class="cover-meta-label">QUOTATION NO.</span><span class="cover-meta-value mono">${quoteno}</span></div>
                <div class="cover-meta-card"><span class="cover-meta-label">DATE OF ISSUE</span><span class="cover-meta-value">${fmtDate}</span></div>
                <div class="cover-meta-card"><span class="cover-meta-label">CATEGORY</span><span class="cover-meta-value">${cat.label} (${units} Unit${units>1?'s':''})</span></div>
            </div>
            <div class="cover-summary">
                <h3>1. Executive Summary</h3>
                <p>AMPEdge Solution is pleased to submit this proposal for the complete electrical point wiring and installation labour for the <strong>${project}</strong> project. Our proposed model ensures strict compliance with IS 732, IS 3043, and National Electrical Code guidelines, high quality workmanship, and transparent billing.</p>
            </div>
        </div>
        __FOOTER__</div>`;
    pages.push(p1);

    // === PAGE 2+: POINT ALLOCATION SCHEDULE (Two-Column, Screenshot Style) ===
    // Build the schedule content, then split into pages if too long
    let scheduleHTML = `<div class="schedule-section-title">2. DETAILED ${cat.label.toUpperCase()} ELECTRICAL POINT ALLOCATION SCHEDULE (PER ${units > 1 ? cat.label.toUpperCase().replace('FLAT – ','') : 'UNIT'})</div>`;
    scheduleHTML += `<div class="schedule-two-col">`;

    // LEFT: Baseline
    scheduleHTML += `<div class="schedule-col">`;
    scheduleHTML += `<div class="schedule-col-header baseline"><i class="fa-solid fa-square-check"></i> PROMOTER BASELINE SCOPE (${baselineTotal} POINTS)</div>`;
    scheduleHTML += `<table class="schedule-table"><thead><tr><th></th><th>LOCATION & POINT TYPE</th><th>QTY</th></tr></thead><tbody>`;
    activeBaseline.forEach((item, idx) => {
        scheduleHTML += `<tr><td>${idx+1}.</td><td>${item.name}</td><td>${item.qty}</td></tr>`;
    });
    scheduleHTML += `<tr class="schedule-subtotal"><td></td><td style="text-align:right">Subtotal Baseline Points / ${units > 1 ? cat.label.split('–')[0].trim() : 'Unit'}</td><td>${baselineTotal}</td></tr>`;
    scheduleHTML += `</tbody></table></div>`;

    // RIGHT: Recommended
    scheduleHTML += `<div class="schedule-col">`;
    scheduleHTML += `<div class="schedule-col-header recommended"><i class="fa-solid fa-star"></i> AMPEDGE RECOMMENDED SCOPE (${recommendedTotal} POINTS)</div>`;
    scheduleHTML += `<table class="schedule-table"><thead><tr><th></th><th>LOCATION & SAFETY / VALUE-ADD ITEM</th><th>QTY</th></tr></thead><tbody>`;
    activeRecommended.forEach((item, idx) => {
        scheduleHTML += `<tr><td>${idx+1}.</td><td>${item.name}</td><td>${item.qty}</td></tr>`;
    });
    scheduleHTML += `<tr class="schedule-subtotal"><td></td><td style="text-align:right">Subtotal Recommended Points / ${units > 1 ? cat.label.split('–')[0].trim() : 'Unit'}</td><td>${recommendedTotal}</td></tr>`;
    scheduleHTML += `</tbody></table></div>`;
    scheduleHTML += `</div>`;

    // Rationale
    scheduleHTML += `<div class="schedule-rationale"><i class="fa-solid fa-triangle-exclamation"></i> <strong>Technical Rationale for Recommended Points:</strong> ${cat.rationale}</div>`;

    pageNum++;
    const p2 = `<div class="pdf-page">${makeHeader()}${scheduleHTML}__FOOTER__</div>`;
    pages.push(p2);

    // === PAGE 3+: BOQ TABLE (Dynamic — auto-paginate) ===
    const allActivePoints = [...activeBaseline, ...activeRecommended];
    const allBOQLines = [];
    let sectionA_total = 0;
    allActivePoints.forEach((item, idx) => {
        const tq = item.qty * units;
        const amt = tq * item.rate;
        sectionA_total += amt;
        allBOQLines.push({ idx: idx+1, name: item.name, unit: item.unit, rate: item.rate, qty: tq, qtyLabel: units > 1 ? `${item.qty}×${units}` : `${tq}`, amount: amt, section: 'A' });
    });
    let sectionB_total = 0;
    activeBOQ.forEach((item, idx) => {
        const tq = item.qty * units;
        const amt = tq * item.rate;
        sectionB_total += amt;
        allBOQLines.push({ idx: allActivePoints.length + idx + 1, name: item.name, unit: item.unit, rate: item.rate, qty: tq, qtyLabel: units > 1 ? `${item.qty}×${units}` : `${tq}`, amount: amt, section: 'B' });
    });

    // Split BOQ into chunks of ~30 rows per page
    const ROWS_PER_PAGE = 30;
    const boqChunks = [];
    for (let i = 0; i < allBOQLines.length; i += ROWS_PER_PAGE) {
        boqChunks.push(allBOQLines.slice(i, i + ROWS_PER_PAGE));
    }

    boqChunks.forEach((chunk, ci) => {
        pageNum++;
        let boqHTML = '';
        if (ci === 0) {
            boqHTML += `<div class="boq-section-title">3. DETAILED BILL OF QUANTITIES (BOQ) & COMMERCIAL SCHEDULE</div>`;
        } else {
            boqHTML += `<div class="boq-section-title">3. BOQ (Continued)</div>`;
        }
        boqHTML += `<table class="boq-table"><thead><tr><th style="width:35px">ITEM</th><th>DESCRIPTION OF WORK</th><th class="text-center" style="width:60px">UNIT</th><th class="text-right" style="width:75px">RATE (₹)</th><th class="text-center" style="width:75px">QTY</th><th class="text-right" style="width:100px">AMOUNT (₹)</th></tr></thead><tbody>`;
        chunk.forEach(line => {
            boqHTML += `<tr><td class="text-center font-bold">${line.idx}</td><td>${line.name}</td><td class="text-center">${line.unit}</td><td class="text-right">₹${line.rate.toLocaleString('en-IN')}</td><td class="text-center font-bold">${line.qtyLabel}</td><td class="text-right font-mono font-bold">${fmtC(line.amount)}</td></tr>`;
        });
        boqHTML += `</tbody></table>`;

        // On last BOQ page, add grand total banner
        if (ci === boqChunks.length - 1) {
            if (sectionA_total > 0) {
                boqHTML += `<div style="text-align:right;font-size:.7rem;color:#0369a1;font-weight:700;margin-top:8px;">Part A – Point Labour Subtotal: ${fmtC(sectionA_total)}</div>`;
            }
            if (sectionB_total > 0) {
                boqHTML += `<div style="text-align:right;font-size:.7rem;color:#0369a1;font-weight:700;margin-top:4px;">Part B – Infrastructure Subtotal: ${fmtC(sectionB_total)}</div>`;
            }
            boqHTML += `<div class="boq-grand-banner"><span>GRAND TOTAL CONFIRMED LABOUR COST:</span><span class="boq-grand-value">${fmtC(grandTotal)}</span></div>`;
        }

        const pg = `<div class="pdf-page">${makeHeader()}${boqHTML}__FOOTER__</div>`;
        pages.push(pg);
    });

    // === LAST PAGE: TERMS & SIGNATURES ===
    pageNum++;
    const ms1 = fmtC(grandTotal * 0.30);
    const ms2 = fmtC(grandTotal * 0.40);
    const ms3 = fmtC(grandTotal * 0.30);

    const termsPage = `<div class="pdf-page">${makeHeader()}
        <div class="boq-section-title">4. COMMERCIAL TERMS, INCLUSIONS & PAYMENT SCHEDULE</div>
        <div class="terms-grid">
            <div class="terms-card">
                <h3><i class="fa-solid fa-list-ul"></i> SCOPE CONDITIONS & STANDARD INCLUSIONS</h3>
                <ul>
                    <li><strong>Labour Charges Only:</strong> Quoted pricing covers complete installation labour. Materials to be supplied by client or quoted separately.</li>
                    <li><strong>Free CAD Layout Consultation:</strong> Electrical drawing & layout consultation provided <strong>FREE OF COST</strong> upon project award.</li>
                    <li><strong>BOQ & Load Design:</strong> Detailed BOQ preparation and phase-balancing circuit design included.</li>
                    <li><strong>Testing & Commissioning:</strong> Megger insulation testing, continuity testing, and system commissioning included.</li>
                    <li><strong>DB Labeling:</strong> Circuit identification ferrule numbering and DB dressing included.</li>
                    <li><strong>Standards Compliance:</strong> Work complies with IS 732, IS 3043, and National Electrical Code.</li>
                    <li><strong>Workmanship Warranty:</strong> 12-Month comprehensive warranty on installation workmanship.</li>
                    <li><strong>Statutory Taxes:</strong> GST extra as applicable.</li>
                </ul>
            </div>
            <div class="terms-card">
                <h3><i class="fa-solid fa-receipt"></i> PAYMENT SCHEDULE & VALIDITY</h3>
                <table class="payment-table">
                    <thead><tr><th>Milestone</th><th class="text-right">%</th><th class="text-right">Amount</th></tr></thead>
                    <tbody>
                        <tr><td><strong>1. Advance Mobilization</strong><br><small>30% of contract</small></td><td class="text-right">30%</td><td class="text-right font-mono">${ms1}</td></tr>
                        <tr><td><strong>2. Running Progress</strong><br><small>Piping & wire pulling</small></td><td class="text-right">40%</td><td class="text-right font-mono">${ms2}</td></tr>
                        <tr><td><strong>3. Testing & Handover</strong><br><small>Final testing & DB</small></td><td class="text-right">30%</td><td class="text-right font-mono">${ms3}</td></tr>
                    </tbody>
                </table>
                <div class="validity-box"><strong>Proposal Validity:</strong> 30 Days from issue (Valid until ${fmtValid}).</div>
            </div>
        </div>

        <div class="sig-section-title">5. ACCEPTANCE & WORK ORDER AUTHORIZATION</div>
        <div class="sig-grid">
            <div class="sig-card">
                <h4>PREPARED & ISSUED BY</h4>
                <p class="sig-company">AMPEdge Solution</p>
                <p class="sig-dept">Electrical Contracting & Engineering Division</p>
                <div class="sig-stamp">[ Digitally Signed & Approved ]</div>
                <div class="sig-line"></div>
                <p class="sig-detail"><strong>Authorized Signatory</strong><br>Senior Quantity Surveyor & Proposal Head<br>AMPEdge Solution, Howrah</p>
            </div>
            <div class="sig-card">
                <h4>ACCEPTED & CONFIRMED BY</h4>
                <p class="sig-company">${client}</p>
                <p class="sig-dept">Client Approval & Work Order Stamp</p>
                <div class="sig-stamp empty"></div>
                <div class="sig-line"></div>
                <p class="sig-detail"><strong>Authorized Client Signature & Company Seal</strong><br>Designation: ___________________________<br>Date of Acceptance: __________________________</p>
            </div>
        </div>
    __FOOTER__</div>`;
    pages.push(termsPage);

    // Now set total page count and render all
    const totalPages = pages.length;
    pages.forEach((html, idx) => {
        const finalHTML = html.replace('__FOOTER__', makeFooter(idx + 1, totalPages));
        doc.insertAdjacentHTML('beforeend', finalHTML);
    });

    goToStep(3);
}

// ====== PDF DOWNLOAD ======
function downloadPDF() {
    const el = document.getElementById('pdf-document');
    const btn = document.getElementById('download-btn');
    const orig = btn.innerHTML;
    btn.innerHTML = '<i class="fa-solid fa-circle-notch fa-spin"></i> Generating...';
    btn.disabled = true;
    const client = document.getElementById('inp-client').value || 'Client';

    html2pdf().set({
        margin: 0,
        filename: `AMPEdge_Quotation_${client.replace(/\s+/g,'_')}.pdf`,
        image: { type:'jpeg', quality:0.98 },
        html2canvas: { scale:2, useCORS:true, letterRendering:true },
        jsPDF: { unit:'mm', format:'a4', orientation:'portrait' },
        pagebreak: { mode: ['css', 'legacy'], avoid: '.boq-table tr' }
    }).from(el).save().then(() => {
        btn.innerHTML = orig; btn.disabled = false;
    }).catch(err => {
        console.error(err);
        btn.innerHTML = orig; btn.disabled = false;
        alert("PDF generation failed. Try Ctrl+P → 'Save as PDF'.");
    });
}

// ====== HELPERS ======
function fmtC(v) { return '₹' + v.toLocaleString('en-IN', { maximumFractionDigits:2, minimumFractionDigits:2 }); }

document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && document.getElementById('step-2').classList.contains('active') && e.target.tagName !== 'INPUT') {
        generateQuotation();
    }
});

// Auto-refresh BOQ when units change
document.addEventListener('DOMContentLoaded', () => {
    const unitsInput = document.getElementById('inp-units');
    if (unitsInput) {
        unitsInput.addEventListener('change', () => { if (currentCategory) renderBOQ(); });
    }
});
