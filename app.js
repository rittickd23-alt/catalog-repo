/**
 * AmpEdge BOM & Quotation System — Full Wizard Logic
 * Research-backed comprehensive electrical point data for Indian installations
 */

// ====== COMPREHENSIVE ELECTRICAL POINTS DATA (Researched) ======
const CATALOG = {
    house: {
        label: "Independent House",
        icon: "fa-house-chimney",
        defaultUnits: 1,
        items: [
            // Main Panel & Safety
            { name: "Main Meter Box Installation & Service Inlet", unit: "Set", rate: 1500 },
            { name: "Main Distribution Board (DB) Assembly & Dressing", unit: "Board", rate: 2500 },
            { name: "MCB (Miniature Circuit Breaker) Installation per circuit", unit: "Nos", rate: 150 },
            { name: "RCCB (Residual Current Circuit Breaker) Installation", unit: "Nos", rate: 350 },
            { name: "Copper Plate Chemical Earthing Pit (IS 3043)", unit: "Pit", rate: 3500 },
            { name: "GI Pipe Earthing (IS 3043 compliant)", unit: "Pit", rate: 2500 },
            // Living Room
            { name: "Living Room – Ceiling Light Point", unit: "Point", rate: 250 },
            { name: "Living Room – Wall Light / Profile Light Point", unit: "Point", rate: 250 },
            { name: "Living Room – Ceiling Fan Point", unit: "Point", rate: 250 },
            { name: "Living Room – 5A Socket Outlet (TV/Set-top/Router)", unit: "Point", rate: 200 },
            { name: "Living Room – AC Power Point (16A dedicated circuit)", unit: "Point", rate: 350 },
            { name: "Living Room – Decorative Chandelier / Hanging Lamp", unit: "Point", rate: 300 },
            // Bedrooms
            { name: "Bedroom – Ceiling Light Point", unit: "Point", rate: 250 },
            { name: "Bedroom – Night Lamp / Foot Light Point", unit: "Point", rate: 200 },
            { name: "Bedroom – Ceiling Fan Point", unit: "Point", rate: 250 },
            { name: "Bedroom – Bedside 5A Charging Socket", unit: "Point", rate: 200 },
            { name: "Bedroom – AC Power Point (16A dedicated circuit)", unit: "Point", rate: 350 },
            { name: "Bedroom – TV / Internet Outlet Point", unit: "Point", rate: 200 },
            { name: "Bedroom – Modular Switch Board (6/8 Module)", unit: "Board", rate: 350 },
            // Kitchen
            { name: "Kitchen – Ceiling Light Point", unit: "Point", rate: 250 },
            { name: "Kitchen – Exhaust Fan / Chimney Point", unit: "Point", rate: 300 },
            { name: "Kitchen – Refrigerator Dedicated Socket (16A)", unit: "Point", rate: 300 },
            { name: "Kitchen – Microwave / OTG Power Socket", unit: "Point", rate: 300 },
            { name: "Kitchen – Mixer / Grinder Socket (5A)", unit: "Point", rate: 200 },
            { name: "Kitchen – Water Purifier / RO Point", unit: "Point", rate: 200 },
            { name: "Kitchen – Dishwasher Power Point", unit: "Point", rate: 300 },
            // Toilet / Bathroom
            { name: "Toilet – Light Point (Mirror/Ceiling)", unit: "Point", rate: 250 },
            { name: "Toilet – Exhaust Fan Point", unit: "Point", rate: 250 },
            { name: "Toilet – Geyser / Water Heater Point (16A)", unit: "Point", rate: 350 },
            { name: "Toilet – Shaver Socket / 5A outlet", unit: "Point", rate: 200 },
            // Utility / Balcony / External
            { name: "Washing Area – Washing Machine Point (16A)", unit: "Point", rate: 350 },
            { name: "Balcony – Weatherproof Light Point", unit: "Point", rate: 250 },
            { name: "Staircase – 2-Way Switch Light System", unit: "Point", rate: 350 },
            { name: "Main Entrance – Doorbell Point", unit: "Point", rate: 150 },
            { name: "Main Entrance – Porch / Gate Light Point", unit: "Point", rate: 250 },
            { name: "Exterior – Boundary Wall Floodlight Point", unit: "Point", rate: 300 },
            { name: "Exterior – CCTV Camera Power Point", unit: "Point", rate: 250 },
            // Heavy Wiring
            { name: "Inverter / UPS Bypass & Changeover Setup", unit: "Set", rate: 1500 },
            { name: "Borewell / Water Pump Motor Point (1.5 HP)", unit: "Point", rate: 500 },
            { name: "Roof Terrace – Waterproof Lighting Point", unit: "Point", rate: 300 },
            { name: "Lightning Arrester (Copper Rod) Installation", unit: "Set", rate: 2000 },
            { name: "Heavy Duty PVC Conduit Pipe Laying", unit: "Sq.Ft", rate: 6 },
            { name: "Main Sub-Main Line Cable Wiring", unit: "Rft", rate: 17 },
        ]
    },
    flat1bhk: {
        label: "Flat – 1BHK",
        icon: "fa-building",
        defaultUnits: 12,
        items: [
            { name: "Main Meter Connection & Single Phase Earthing Link", unit: "Set", rate: 800 },
            { name: "Distribution Board (4-Way SP MCB) Installation", unit: "Board", rate: 1200 },
            { name: "MCB Installation per circuit", unit: "Nos", rate: 150 },
            { name: "RCCB Installation (30mA)", unit: "Nos", rate: 350 },
            { name: "Bedroom – Ceiling Light Point", unit: "Point", rate: 250 },
            { name: "Bedroom – Ceiling Fan Point", unit: "Point", rate: 250 },
            { name: "Bedroom – AC Power Point (16A)", unit: "Point", rate: 350 },
            { name: "Bedroom – Bedside 5A Socket Point", unit: "Point", rate: 200 },
            { name: "Bedroom – Night Lamp / Reading Light Point", unit: "Point", rate: 200 },
            { name: "Bedroom – TV / Internet Outlet", unit: "Point", rate: 200 },
            { name: "Living Room – Ceiling Light Point", unit: "Point", rate: 250 },
            { name: "Living Room – Ceiling Fan Point", unit: "Point", rate: 250 },
            { name: "Living Room – TV Unit Socket (5A)", unit: "Point", rate: 200 },
            { name: "Living Room – Wi-Fi Router Power Point", unit: "Point", rate: 200 },
            { name: "Toilet – Light Point", unit: "Point", rate: 250 },
            { name: "Toilet – Exhaust Fan Point", unit: "Point", rate: 250 },
            { name: "Toilet – Geyser Power Point (16A)", unit: "Point", rate: 350 },
            { name: "Kitchen – Ceiling Light Point", unit: "Point", rate: 250 },
            { name: "Kitchen – Exhaust Fan / Chimney Point", unit: "Point", rate: 300 },
            { name: "Kitchen – Refrigerator Socket (16A)", unit: "Point", rate: 300 },
            { name: "Kitchen – Microwave / Mixer Socket", unit: "Point", rate: 250 },
            { name: "Kitchen – Water Purifier / RO Point", unit: "Point", rate: 200 },
            { name: "Entrance – Calling Bell Point", unit: "Point", rate: 150 },
            { name: "Entrance – Door Light Point", unit: "Point", rate: 200 },
            { name: "Balcony – Utility Light Point", unit: "Point", rate: 200 },
            { name: "Washing Area – Washing Machine Point (16A)", unit: "Point", rate: 350 },
            { name: "Inverter / UPS Bypass Line", unit: "Point", rate: 300 },
        ]
    },
    flat2bhk: {
        label: "Flat – 2BHK",
        icon: "fa-building",
        defaultUnits: 16,
        items: [
            { name: "Main Meter Connection & Earthing Link", unit: "Set", rate: 800 },
            { name: "Distribution Board (8-Way DP MCB) Installation", unit: "Board", rate: 1500 },
            { name: "MCB Installation per circuit", unit: "Nos", rate: 150 },
            { name: "RCCB Installation (30mA Sensitivity)", unit: "Nos", rate: 350 },
            // Bedroom 1
            { name: "Bedroom 1 – Ceiling Light Points", unit: "Point", rate: 250 },
            { name: "Bedroom 1 – Ceiling Fan Point", unit: "Point", rate: 250 },
            { name: "Bedroom 1 – Switch Board (Modular 6-Module)", unit: "Board", rate: 300 },
            { name: "Bedroom 1 – Night Lamp / Foot Light", unit: "Point", rate: 200 },
            { name: "Bedroom 1 – AC Power Point (16A)", unit: "Point", rate: 350 },
            { name: "Bedroom 1 – Bedside 5A Charging Socket", unit: "Point", rate: 200 },
            { name: "Bedroom 1 – TV / Internet Outlet", unit: "Point", rate: 200 },
            // Bedroom 2
            { name: "Bedroom 2 – Ceiling Light Points", unit: "Point", rate: 250 },
            { name: "Bedroom 2 – Ceiling Fan Point", unit: "Point", rate: 250 },
            { name: "Bedroom 2 – Night Lamp / Foot Light", unit: "Point", rate: 200 },
            { name: "Bedroom 2 – AC Power Point (16A)", unit: "Point", rate: 350 },
            { name: "Bedroom 2 – Bedside 5A Socket", unit: "Point", rate: 200 },
            // Living Room
            { name: "Living Room – Ceiling Light Points", unit: "Point", rate: 250 },
            { name: "Living Room – Profile / Wall Light Point", unit: "Point", rate: 250 },
            { name: "Living Room – Ceiling Fan Point", unit: "Point", rate: 250 },
            { name: "Living Room – TV Unit Socket (5A)", unit: "Point", rate: 200 },
            { name: "Living Room – Set-top Box / Router Point", unit: "Point", rate: 200 },
            { name: "Living Room – Night / Hanging Lamp Point", unit: "Point", rate: 250 },
            // Toilets
            { name: "Toilet 1 – Light Point", unit: "Point", rate: 250 },
            { name: "Toilet 1 – Exhaust Fan Point", unit: "Point", rate: 250 },
            { name: "Toilet 1 – Geyser Power Point (16A)", unit: "Point", rate: 350 },
            { name: "Toilet 2 – Light & Exhaust Fan Points", unit: "Point", rate: 250 },
            // Kitchen
            { name: "Kitchen – Ceiling Light Point", unit: "Point", rate: 250 },
            { name: "Kitchen – Ceiling Fan Point", unit: "Point", rate: 250 },
            { name: "Kitchen – Exhaust Fan / Chimney Point", unit: "Point", rate: 300 },
            { name: "Kitchen – Refrigerator Socket (16A)", unit: "Point", rate: 300 },
            { name: "Kitchen – Microwave / Mixer Socket", unit: "Point", rate: 250 },
            { name: "Kitchen – Water Purifier / RO Point", unit: "Point", rate: 200 },
            { name: "Kitchen – Plug / General Utility Socket", unit: "Point", rate: 200 },
            // Others
            { name: "Washing Area – Light Point", unit: "Point", rate: 200 },
            { name: "Washing Area – Washing Machine Point (16A)", unit: "Point", rate: 350 },
            { name: "Balcony (BR1) – Weatherproof Light Point", unit: "Point", rate: 250 },
            { name: "Balcony (BR2) – Weatherproof Light Point", unit: "Point", rate: 250 },
            { name: "Balcony (Kitchen) – Light Point", unit: "Point", rate: 200 },
            { name: "Main Entrance – Doorbell Point", unit: "Point", rate: 150 },
            { name: "Main Entrance – Porch Accent Light", unit: "Point", rate: 250 },
            { name: "Common Area – Inverter / UPS Line Setup", unit: "Point", rate: 350 },
            { name: "DB Area – Stabilizer / AC Isolator Point", unit: "Point", rate: 300 },
            { name: "Study Area – Reading Lamp Point", unit: "Point", rate: 200 },
        ]
    },
    flat3bhk: {
        label: "Flat – 3BHK",
        icon: "fa-building",
        defaultUnits: 8,
        items: [
            { name: "Main Meter Connection & 3-Phase Earthing Link", unit: "Set", rate: 1200 },
            { name: "Distribution Board (12-Way TP MCB) Installation", unit: "Board", rate: 2000 },
            { name: "MCB Installation per circuit", unit: "Nos", rate: 150 },
            { name: "RCCB Installation (30mA 4-Pole)", unit: "Nos", rate: 500 },
            // Master Bedroom
            { name: "Master Bedroom – Ceiling Light Points", unit: "Point", rate: 250 },
            { name: "Master Bedroom – Ceiling Fan Points", unit: "Point", rate: 250 },
            { name: "Master Bedroom – AC Power Point (16A)", unit: "Point", rate: 350 },
            { name: "Master Bedroom – Night Lamp / Foot Light", unit: "Point", rate: 200 },
            { name: "Master Bedroom – Bedside USB Multi-Socket", unit: "Point", rate: 250 },
            { name: "Master Bedroom – TV / Internet Outlet", unit: "Point", rate: 200 },
            { name: "Master Bedroom – Reading Light Points", unit: "Point", rate: 200 },
            // BR2
            { name: "Bedroom 2 – Ceiling Light Points", unit: "Point", rate: 250 },
            { name: "Bedroom 2 – Ceiling Fan Point", unit: "Point", rate: 250 },
            { name: "Bedroom 2 – AC Power Point (16A)", unit: "Point", rate: 350 },
            { name: "Bedroom 2 – Bedside Charging Socket", unit: "Point", rate: 200 },
            // BR3
            { name: "Bedroom 3 – Ceiling Light Points", unit: "Point", rate: 250 },
            { name: "Bedroom 3 – Ceiling Fan Point", unit: "Point", rate: 250 },
            { name: "Bedroom 3 – AC Power Point (16A)", unit: "Point", rate: 350 },
            // Living / Dining
            { name: "Living/Dining – Chandelier / Ceiling Spot Points", unit: "Point", rate: 300 },
            { name: "Living/Dining – Downlight / Spotlight Points", unit: "Point", rate: 250 },
            { name: "Living/Dining – Ceiling Fan Points", unit: "Point", rate: 250 },
            { name: "Living/Dining – TV/Internet/AV Cabinet Outlet", unit: "Point", rate: 200 },
            { name: "Living – Extra Media / Entertainment Sockets", unit: "Point", rate: 200 },
            // Toilets
            { name: "Toilet 1 – Light, Exhaust & Geyser Points", unit: "Point", rate: 250 },
            { name: "Toilet 2 – Light, Exhaust & Geyser Points", unit: "Point", rate: 250 },
            { name: "Toilet 3 – Light & Exhaust Fan Points", unit: "Point", rate: 250 },
            // Kitchen
            { name: "Kitchen – Ceiling Light & Under-Counter Light", unit: "Point", rate: 250 },
            { name: "Kitchen – Chimney / Exhaust Fan Point", unit: "Point", rate: 300 },
            { name: "Kitchen – Refrigerator Socket (16A)", unit: "Point", rate: 300 },
            { name: "Kitchen – Microwave / OTG Socket", unit: "Point", rate: 300 },
            { name: "Kitchen – Water Purifier / RO Point", unit: "Point", rate: 200 },
            { name: "Kitchen – Dishwasher Power Point", unit: "Point", rate: 300 },
            { name: "Kitchen – Mixer / Grinder Socket", unit: "Point", rate: 200 },
            // Others
            { name: "Balconies (All) – Exterior Light Points", unit: "Point", rate: 250 },
            { name: "Main Entrance – Video Doorbell Setup", unit: "Point", rate: 350 },
            { name: "Main Entrance – Foot Light / Porch Lamp", unit: "Point", rate: 250 },
            { name: "Washing Balcony – Washing Machine Point (16A)", unit: "Point", rate: 350 },
            { name: "DB Space – 3-Phase Stabilizer & Isolator", unit: "Point", rate: 400 },
            { name: "Common Area – UPS / Inverter System Point", unit: "Point", rate: 400 },
        ]
    },
    flat4bhk: {
        label: "Flat – 4BHK",
        icon: "fa-building-columns",
        defaultUnits: 6,
        items: [
            { name: "Main Meter Connection & Heavy Dual Earthing Link", unit: "Set", rate: 1500 },
            { name: "Distribution Board (16-Way TP MCB) Installation", unit: "Board", rate: 2500 },
            { name: "MCB Installation per circuit", unit: "Nos", rate: 150 },
            { name: "RCCB Installation (30mA 4-Pole)", unit: "Nos", rate: 500 },
            { name: "ELCB (Earth Leakage CB) Installation", unit: "Nos", rate: 450 },
            // MBR
            { name: "Master Bedroom – Downlights & Wall Lights", unit: "Point", rate: 280 },
            { name: "Master Bedroom – Fan Points", unit: "Point", rate: 250 },
            { name: "Master Bedroom – AC Power Point (16A)", unit: "Point", rate: 350 },
            { name: "Master Bedroom – Footlight/Night Light", unit: "Point", rate: 200 },
            { name: "Master Bedroom – Bedside Double Power Outlets", unit: "Point", rate: 250 },
            { name: "Master Bedroom – TV / AV Outlet", unit: "Point", rate: 200 },
            // BR2-4
            { name: "Bedroom 2 – Light, Fan & AC Points", unit: "Point", rate: 250 },
            { name: "Bedroom 3 – Light, Fan & AC Points", unit: "Point", rate: 250 },
            { name: "Bedroom 4 – Light, Fan & AC Points", unit: "Point", rate: 250 },
            { name: "Bedrooms – Bedside Sockets (Each)", unit: "Point", rate: 200 },
            // Living / Dining
            { name: "Living Room – Spotlight / Cove Light Circuits", unit: "Point", rate: 300 },
            { name: "Living Room – Ceiling Fans", unit: "Point", rate: 250 },
            { name: "Living – TV Screen/AV Receiver Sockets", unit: "Point", rate: 200 },
            { name: "Dining Hall – Chandelier & Wall Sconces", unit: "Point", rate: 300 },
            { name: "Dining Hall – Fan & Dining Table Point", unit: "Point", rate: 250 },
            // Kitchen
            { name: "Kitchen – Work Counter & Cabinet Lights", unit: "Point", rate: 250 },
            { name: "Kitchen – Fridge, Purifier & Chimney Points", unit: "Point", rate: 300 },
            { name: "Kitchen – Microwave, Dishwasher & Oven Sockets", unit: "Point", rate: 300 },
            // Toilets
            { name: "Toilets (All 4) – Light, Exhaust & Geyser Points (each)", unit: "Point", rate: 250 },
            // Special rooms
            { name: "Pooja Room – Spotlight & Ambient Light", unit: "Point", rate: 250 },
            { name: "Servant Quarter – Light, Fan & Bell Points", unit: "Point", rate: 250 },
            // Others
            { name: "Balconies – Decorative Ceiling Lights (each)", unit: "Point", rate: 250 },
            { name: "Main Entrance – Smart Lock & Bell Points", unit: "Point", rate: 350 },
            { name: "Common Area – Dual Inverter Backup Loops", unit: "Point", rate: 500 },
            { name: "DB Closet – Phase Corrector & Isolators", unit: "Point", rate: 400 },
            { name: "Washing Area – Washing Machine Point (16A)", unit: "Point", rate: 350 },
        ]
    },
    apartment: {
        label: "Apartment Building",
        icon: "fa-city",
        defaultUnits: 16,
        items: [
            { name: "Main LT Panel Connection & Service Inlet", unit: "Set", rate: 5000 },
            { name: "Main Distribution Board (per flat)", unit: "Board", rate: 1500 },
            { name: "MCB per circuit (average 8 per flat)", unit: "Nos", rate: 150 },
            { name: "RCCB per flat (30mA)", unit: "Nos", rate: 350 },
            { name: "Chemical Earthing Pit (Building Common)", unit: "Pit", rate: 3500 },
            // Per Flat Standard Points
            { name: "Flat – All Room Light Points (avg 12 per flat)", unit: "Point", rate: 250 },
            { name: "Flat – All Room Fan Points (avg 6 per flat)", unit: "Point", rate: 250 },
            { name: "Flat – AC Power Points (avg 2 per flat)", unit: "Point", rate: 350 },
            { name: "Flat – Socket & Plug Points (avg 10 per flat)", unit: "Point", rate: 200 },
            { name: "Flat – Kitchen Dedicated Lines (Fridge/Chimney/RO)", unit: "Point", rate: 300 },
            { name: "Flat – Geyser / Water Heater Points", unit: "Point", rate: 350 },
            { name: "Flat – Washing Machine Point", unit: "Point", rate: 350 },
            { name: "Flat – Doorbell & Entrance Light", unit: "Point", rate: 200 },
            { name: "Flat – Inverter / UPS Line", unit: "Point", rate: 350 },
            // Common Area
            { name: "Common Area – Staircase Lighting (2-Way)", unit: "Point", rate: 350 },
            { name: "Common Area – Corridor / Lobby Lights", unit: "Point", rate: 250 },
            { name: "Common Area – Parking Area Illumination", unit: "Point", rate: 250 },
            { name: "Common Area – Lift Power Connection", unit: "Set", rate: 3000 },
            { name: "Common Area – Water Pump Motor Points", unit: "Point", rate: 500 },
            { name: "Common Area – CCTV Camera Points (per camera)", unit: "Point", rate: 250 },
            { name: "Common Area – Fire Alarm Bell Points", unit: "Point", rate: 300 },
            // Heavy
            { name: "Ground Floor Commercial Shops Wiring", unit: "Point", rate: 250 },
            { name: "Heavy Duty PVC Conduit Pipe Laying", unit: "Sq.Ft", rate: 6 },
            { name: "Main Sub-Main Line Cable Wiring", unit: "Rft", rate: 17 },
        ]
    },
    office: {
        label: "Commercial Office",
        icon: "fa-briefcase",
        defaultUnits: 1,
        items: [
            { name: "Commercial 3-Phase Meter Box & Service Inlet", unit: "Set", rate: 3000 },
            { name: "Main Distribution Panel (12-Way TP) Installation", unit: "Board", rate: 3000 },
            { name: "Sub-Distribution Board (per zone)", unit: "Board", rate: 1500 },
            { name: "MCB Installation per circuit", unit: "Nos", rate: 150 },
            { name: "RCCB / ELCB Installation", unit: "Nos", rate: 400 },
            { name: "Copper Plate Chemical Earthing Pit", unit: "Pit", rate: 3500 },
            // Workstation Area
            { name: "Workstation – Dual 5A Socket Outlet (per desk)", unit: "Point", rate: 200 },
            { name: "Workstation – UPS Line Socket (per desk)", unit: "Point", rate: 250 },
            { name: "Workstation – CAT6 LAN Data Point (per desk)", unit: "Point", rate: 350 },
            { name: "Workstation – Telephone Point", unit: "Point", rate: 200 },
            // Cabin
            { name: "Manager Cabin – Light Points", unit: "Point", rate: 250 },
            { name: "Manager Cabin – Fan / AC Point", unit: "Point", rate: 300 },
            { name: "Manager Cabin – Multi-socket Outlet", unit: "Point", rate: 200 },
            // Ceiling
            { name: "Ceiling – LED 2x2 Panel Light (600x600mm)", unit: "Point", rate: 300 },
            { name: "Ceiling – Recessed Downlight Point", unit: "Point", rate: 250 },
            { name: "Office Floor – Ceiling Fan / Exhaust Fan Wiring", unit: "Point", rate: 250 },
            // Conference
            { name: "Conference Room – HDMI / Projector Ceiling Outlet", unit: "Point", rate: 500 },
            { name: "Conference Room – Pop-up Floor / Table Sockets", unit: "Point", rate: 400 },
            { name: "Conference Room – Dimmable Light Circuits", unit: "Point", rate: 350 },
            // Server
            { name: "Server Room – Dedicated 16A Rack Power Outlet", unit: "Point", rate: 500 },
            { name: "Server Room – Precision AC Dedicated Point", unit: "Point", rate: 500 },
            { name: "Server Room – UPS Input/Output Panel Setup", unit: "Set", rate: 2000 },
            // Pantry
            { name: "Pantry – Microwave / Coffee Machine Socket (16A)", unit: "Point", rate: 300 },
            { name: "Pantry – Refrigerator / Water Cooler Socket", unit: "Point", rate: 300 },
            { name: "Pantry – General Utility Socket", unit: "Point", rate: 200 },
            // Reception
            { name: "Reception – Desk Power + Network Points", unit: "Point", rate: 300 },
            { name: "Reception – Digital Signage Display Point", unit: "Point", rate: 300 },
            { name: "Reception – Decorative / Ambient Lighting", unit: "Point", rate: 250 },
            // Security
            { name: "CCTV – Dome Camera Ceiling Points (per camera)", unit: "Point", rate: 250 },
            { name: "Security – Access Control / Biometric Point", unit: "Point", rate: 350 },
            { name: "Emergency – Exit Signage Illuminated Points", unit: "Point", rate: 300 },
            { name: "Fire Alarm – Detector & Alarm Bell Points", unit: "Point", rate: 350 },
            // Heavy
            { name: "Heavy Duty PVC Conduit / Cable Tray Installation", unit: "Sq.Ft", rate: 8 },
            { name: "Main Sub-Main Cable Wiring", unit: "Rft", rate: 20 },
        ]
    },
    industrial: {
        label: "Industrial / Factory",
        icon: "fa-industry",
        defaultUnits: 1,
        items: [
            { name: "Industrial Sub-station Busbar Chamber Jointing", unit: "Set", rate: 15000 },
            { name: "Main LT Panel Board Installation & Grounding", unit: "Board", rate: 8000 },
            { name: "Sub-Distribution Board (per zone)", unit: "Board", rate: 3000 },
            { name: "MCCB (Molded Case Circuit Breaker) Installation", unit: "Nos", rate: 800 },
            { name: "MCB Installation per circuit", unit: "Nos", rate: 150 },
            { name: "RCCB / ELCB Installation (Leakage Protection)", unit: "Nos", rate: 500 },
            { name: "Heavy Chemical Earthing Pit (IS 3043)", unit: "Pit", rate: 5000 },
            { name: "GI Strip Earthing (Factory Perimeter)", unit: "Rft", rate: 25 },
            // Shop Floor
            { name: "Shop Floor – 3-Phase Industrial Socket (32A)", unit: "Point", rate: 500 },
            { name: "Shop Floor – 3-Phase Industrial Socket (63A)", unit: "Point", rate: 800 },
            { name: "Shop Floor – High-Bay LED Light (150W/200W)", unit: "Point", rate: 400 },
            { name: "Shop Floor – Task / Workbench Lighting Point", unit: "Point", rate: 250 },
            // Machinery
            { name: "Machinery Row – Motor Isolator Switch Wiring", unit: "Point", rate: 600 },
            { name: "Machinery – Star-Delta Starter Panel Wiring", unit: "Set", rate: 2500 },
            { name: "Machinery – DOL Starter Panel Wiring", unit: "Set", rate: 1500 },
            { name: "Crane / Hoist Power Supply Wiring", unit: "Point", rate: 1000 },
            // Office / Admin
            { name: "Office Cabin – Light, Fan & Socket Points", unit: "Point", rate: 250 },
            { name: "Office – AC Power Point (16A)", unit: "Point", rate: 350 },
            { name: "Store Room – Light & Socket Points", unit: "Point", rate: 200 },
            // Safety
            { name: "Industrial Exhaust Blower Fan Wiring", unit: "Point", rate: 500 },
            { name: "Emergency Strobe / Beacon Lights", unit: "Point", rate: 400 },
            { name: "Fire Alarm Panel & Detector Points", unit: "Point", rate: 400 },
            // Backup
            { name: "Generator AMF Control Panel Setup", unit: "Set", rate: 5000 },
            { name: "DG Set Power Cable Termination", unit: "Set", rate: 3000 },
            // Exterior
            { name: "Perimeter – High-Power Floodlights", unit: "Point", rate: 500 },
            { name: "Gate – Security Cabin Power & CCTV Points", unit: "Point", rate: 350 },
            // Heavy Wiring
            { name: "Cable Tray / Trunking Installation", unit: "Rft", rate: 30 },
            { name: "Armoured Cable Laying (Outdoor/Underground)", unit: "Rft", rate: 45 },
            { name: "Heavy Duty PVC Conduit Laying", unit: "Sq.Ft", rate: 8 },
        ]
    }
};

// ====== APPLICATION STATE ======
let currentCategory = null;
let configItems = []; // { name, unit, rate, qty }

// ====== STEP NAVIGATION ======
function goToStep(n) {
    document.querySelectorAll('.step').forEach(s => s.classList.remove('active'));
    document.getElementById(`step-${n}`).classList.add('active');
}

// ====== STEP 1: SELECT CATEGORY ======
function selectCategory(key) {
    currentCategory = key;
    const cat = CATALOG[key];
    
    // Set badge
    document.getElementById('badge-text').textContent = cat.label;
    document.getElementById('inp-units').value = cat.defaultUnits;
    
    // Set date
    const today = new Date();
    const dd = String(today.getDate()).padStart(2,'0');
    const mm = String(today.getMonth()+1).padStart(2,'0');
    document.getElementById('inp-date').value = `${today.getFullYear()}-${mm}-${dd}`;
    
    // Clone items into configItems with default qty=0
    configItems = cat.items.map(item => ({
        name: item.name,
        unit: item.unit,
        rate: item.rate,
        qty: 0
    }));
    
    renderPointsTable();
    goToStep(2);
}

// ====== STEP 2: RENDER POINTS TABLE ======
function renderPointsTable() {
    const tbody = document.getElementById('points-tbody');
    tbody.innerHTML = '';
    
    configItems.forEach((item, idx) => {
        const tr = document.createElement('tr');
        const amount = item.qty * item.rate;
        tr.innerHTML = `
            <td class="text-center" style="color:var(--text-muted)">${idx + 1}</td>
            <td>${item.name}</td>
            <td class="text-center">${item.unit}</td>
            <td><input type="number" class="rate-input" value="${item.rate}" min="0" data-idx="${idx}" data-field="rate" onchange="updateConfigItem(this)"></td>
            <td><input type="number" value="${item.qty}" min="0" data-idx="${idx}" data-field="qty" onchange="updateConfigItem(this)"></td>
            <td class="amount-cell" id="amt-${idx}">${amount > 0 ? formatCurrency(amount) : '—'}</td>
        `;
        tbody.appendChild(tr);
    });
    
    recalcTotal();
}

function updateConfigItem(el) {
    const idx = parseInt(el.dataset.idx);
    const field = el.dataset.field;
    configItems[idx][field] = parseFloat(el.value) || 0;
    
    const amount = configItems[idx].qty * configItems[idx].rate;
    document.getElementById(`amt-${idx}`).textContent = amount > 0 ? formatCurrency(amount) : '—';
    recalcTotal();
}

function recalcTotal() {
    let total = 0;
    configItems.forEach(item => { total += item.qty * item.rate; });
    document.getElementById('config-total').textContent = formatCurrency(total);
}

// ====== STEP 3: GENERATE QUOTATION & PDF PREVIEW ======
function generateQuotation() {
    const units = parseInt(document.getElementById('inp-units').value) || 1;
    const client = document.getElementById('inp-client').value || 'Client';
    const project = document.getElementById('inp-project').value || 'Project';
    const address = document.getElementById('inp-address').value || '—';
    const quoteno = document.getElementById('inp-quoteno').value || '—';
    const dateVal = document.getElementById('inp-date').value;
    
    // Only include items with qty > 0
    const activeItems = configItems.filter(i => i.qty > 0);
    
    if (activeItems.length === 0) {
        alert('Please enter quantity for at least one item before generating the quotation.');
        return;
    }
    
    // Fill Cover Page
    document.getElementById('pdf-client').textContent = client;
    document.getElementById('pdf-project').textContent = project;
    document.getElementById('pdf-address').textContent = address;
    document.getElementById('pdf-quoteno').textContent = quoteno;
    document.getElementById('pdf-sig-client').textContent = client;
    document.getElementById('pdf-units').textContent = `${units} Unit${units > 1 ? 's' : ''}`;
    
    const dateObj = new Date(dateVal);
    const opts = { year:'numeric', month:'long', day:'numeric' };
    document.getElementById('pdf-date').textContent = dateObj.toLocaleDateString('en-US', opts);
    const validityDate = new Date(dateObj);
    validityDate.setDate(validityDate.getDate() + 30);
    document.getElementById('pdf-validity').textContent = validityDate.toLocaleDateString('en-US', opts);
    
    // Fill BOQ Table
    const boqTbody = document.getElementById('pdf-boq-tbody');
    boqTbody.innerHTML = '';
    
    let grandTotal = 0;
    
    activeItems.forEach((item, idx) => {
        const totalQty = item.qty * units;
        const amount = totalQty * item.rate;
        grandTotal += amount;
        
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td class="text-center font-bold">${idx + 1}</td>
            <td>${item.name}</td>
            <td class="text-center">${item.unit}</td>
            <td class="text-right">₹${item.rate.toLocaleString('en-IN')}</td>
            <td class="text-center font-bold">${totalQty}${units > 1 ? ` (${item.qty}×${units})` : ''}</td>
            <td class="text-right font-mono font-bold">${formatCurrency(amount)}</td>
        `;
        boqTbody.appendChild(tr);
    });
    
    // Grand total
    document.getElementById('pdf-grand-total').textContent = formatCurrency(grandTotal);
    
    // Payment milestones
    document.getElementById('pdf-ms1').textContent = formatCurrency(grandTotal * 0.30);
    document.getElementById('pdf-ms2').textContent = formatCurrency(grandTotal * 0.40);
    document.getElementById('pdf-ms3').textContent = formatCurrency(grandTotal * 0.30);
    
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
        filename: `AmpEdge_Quotation_${client.replace(/\s+/g,'_')}.pdf`,
        image: { type:'jpeg', quality:0.98 },
        html2canvas: { scale:2, useCORS:true, letterRendering:true },
        jsPDF: { unit:'mm', format:'a4', orientation:'portrait' }
    }).from(el).save().then(() => {
        btn.innerHTML = orig;
        btn.disabled = false;
    }).catch(err => {
        console.error(err);
        btn.innerHTML = orig;
        btn.disabled = false;
        alert("PDF generation failed. Try Ctrl+P and select 'Save as PDF'.");
    });
}

// ====== HELPERS ======
function formatCurrency(v) {
    return '₹' + v.toLocaleString('en-IN', { maximumFractionDigits:2, minimumFractionDigits:2 });
}

// Keyboard shortcut: Enter to generate
document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && document.getElementById('step-2').classList.contains('active')) {
        // Only if not in an input field
        if (e.target.tagName !== 'INPUT') {
            generateQuotation();
        }
    }
});
