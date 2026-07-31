/**
 * AmpEdge BOM & Quotation System
 * State and Logic Controller
 */

// Application State
let state = {
    clientName: "Sun Construction",
    projectName: "G+4 Residential Apartment",
    projectAddress: "Howrah, West Bengal",
    quotationNumber: "AE/QT/2026/089",
    quotationDate: "2026-07-31",
    flatCount: 16,
    
    // Core Rates configuration
    rates: {
        wiringBaseline: 250,      // Rate per point for baseline wiring
        wiringRecommended: 250,   // Rate per point for recommended wiring
        applianceAC: 350,         // AC installation rate
        applianceGeyser: 350,     // Geyser installation rate
        applianceFridge: 350,     // Refrigerator setup rate
        applianceDB: 350,         // Main distribution board installation rate
        commercialShop: 250,      // Commercial shops point wiring rate
        conduitPipe: 6,           // Heavy duty conduit rate per Sq.Ft
        cableWiring: 17           // Sub-main cable wiring rate per Rft
    },
    
    // Point Allocations (Quantity per Unit)
    baselinePoints: [],
    recommendedPoints: [],
    
    // Part B custom items (Quantities across all units / sites)
    appliances: [
        { id: "applianceAC", name: "Air Conditioner (AC) Power Point Installation", desc: "AC power points (Includes MCB isolator & power socket setup)", unit: "Point", confirmedQty: 32, rateKey: "applianceAC" },
        { id: "applianceGeyser", name: "Geyser / Water Heater Point Installation", desc: "Geyser power point setups (16A heavy power circuit)", unit: "Point", confirmedQty: 16, rateKey: "applianceGeyser" },
        { id: "applianceFridge", name: "Refrigerator Power Point Setup", desc: "Refrigerator power point setups (Dedicated kitchen line)", unit: "Point", confirmedQty: 16, rateKey: "applianceFridge" },
        { id: "applianceDB", name: "Main Distribution Board (DB) Installation", desc: "DB setups (Busbar, MCB dressing, labeling)", unit: "Board", confirmedQty: 16, rateKey: "applianceDB" },
        { id: "commercialShop", name: "Ground Floor Commercial Shops & Common Area", desc: "Point wiring for shops and common parking area illumination", unit: "Point", confirmedQty: 40, rateKey: "commercialShop" },
        { id: "conduitPipe", name: "Heavy Duty PVC Conduit Pipe Installation", desc: "Wall chasing, rigid PVC pipe embedding & ceiling routing", unit: "Sq.Ft", confirmedQty: 0, isSiteMeasured: true, rateKey: "conduitPipe" },
        { id: "cableWiring", name: "Main Sub-Main Line Cable Wiring", desc: "Feeder cable pulling from main panel to apartment DBs", unit: "Rft", confirmedQty: 0, isSiteMeasured: true, rateKey: "cableWiring" }
    ]
};

// Preset Templates
const PRESETS = {
    flat2bhk: {
        baseline: [
            { name: "Main Meter Box Connection & Earthing Link", qty: 1 },
            { name: "Bedroom 1 - Light Point", qty: 2 },
            { name: "Bedroom 1 - Fan Point", qty: 1 },
            { name: "Bedroom 1 - Switch Point / Bedside Smart Link", qty: 1 },
            { name: "Bedroom 1 - Night Lamp / Foot Light", qty: 1 },
            { name: "Bedroom 1 - AC Power Point", qty: 1 },
            { name: "Bedroom 2 - Light Point", qty: 2 },
            { name: "Bedroom 2 - Fan Point", qty: 1 },
            { name: "Bedroom 2 - Switch Point / Bedside Smart Link", qty: 1 },
            { name: "Bedroom 2 - Night Lamp / Foot Light", qty: 1 },
            { name: "Bedroom 2 - AC Power Point", qty: 1 },
            { name: "Living Room - Ceiling Light Points", qty: 2 },
            { name: "Living Room - Wall Fan Point", qty: 1 },
            { name: "Living Room - TV Point & Socket", qty: 1 },
            { name: "Living Room - Night / Profile Light", qty: 1 },
            { name: "Toilet 1 - Light & Mirror Light Point", qty: 2 },
            { name: "Toilet 1 - Exhaust Fan Point", qty: 1 },
            { name: "Toilet 1 - Geyser Power Point", qty: 1 },
            { name: "Kitchen/Dining - Ceiling Light Point", qty: 1 },
            { name: "Kitchen/Dining - Fan Point", qty: 1 },
            { name: "Kitchen/Dining - Common Switch Panel", qty: 1 },
            { name: "Kitchen/Dining - Utility Plug / Socket", qty: 1 },
            { name: "Kitchen/Dining - Refrigerator Point", qty: 1 },
            { name: "Washing Area - Light Point", qty: 1 },
            { name: "Washing Area - Washing Machine Point", qty: 1 }
        ],
        recommended: [
            { name: "Balcony (BR1) - Light Point", qty: 1 },
            { name: "Balcony (BR2) - Light Point", qty: 1 },
            { name: "Balcony (Kitchen/Dining) - Light Point", qty: 1 },
            { name: "BR1 - Extra 5A Socket (Bedside Charging)", qty: 1 },
            { name: "BR2 - Extra 5A Socket (Bedside Charging)", qty: 1 },
            { name: "Living - Extra Utility Socket (STB/Router)", qty: 1 },
            { name: "Kitchen - Exhaust Fan / Chimney Point", qty: 1 },
            { name: "Kitchen - Microwave / Mixer Point", qty: 1 },
            { name: "Main Entrance - Doorbell Point", qty: 1 },
            { name: "Main Entrance / Porch - Accent Light Point", qty: 1 },
            { name: "Common Area - Inverter / UPS Line Setup", qty: 1 },
            { name: "Common Area - Spare / Provision Box Point", qty: 1 },
            { name: "DB Area - Stabilizer / AC Isolator", qty: 1 },
            { name: "BR1 - Reading / Study Lamp Point", qty: 1 },
            { name: "BR2 - Reading / Study Lamp Point", qty: 1 }
        ],
        appliances: [
            { id: "applianceAC", confirmedQty: 32 },
            { id: "applianceGeyser", confirmedQty: 16 },
            { id: "applianceFridge", confirmedQty: 16 },
            { id: "applianceDB", confirmedQty: 16 },
            { id: "commercialShop", confirmedQty: 40 },
            { id: "conduitPipe", confirmedQty: 0, isSiteMeasured: true },
            { id: "cableWiring", confirmedQty: 0, isSiteMeasured: true }
        ],
        flatCount: 16
    },
    flat1bhk: {
        baseline: [
            { name: "Main Meter Box Connection & Earthing Link", qty: 1 },
            { name: "Bedroom - Light Points", qty: 2 },
            { name: "Bedroom - Fan Point", qty: 1 },
            { name: "Bedroom - AC Power Point", qty: 1 },
            { name: "Bedroom - Bedside Socket Point", qty: 1 },
            { name: "Living Room - Light Points", qty: 2 },
            { name: "Living Room - Fan Point", qty: 1 },
            { name: "Living Room - TV Point & Socket", qty: 1 },
            { name: "Living Room - Night Lamp Point", qty: 1 },
            { name: "Toilet - Light Point", qty: 1 },
            { name: "Toilet - Exhaust Fan Point", qty: 1 },
            { name: "Toilet - Geyser Power Point", qty: 1 },
            { name: "Kitchen - Light Point", qty: 1 },
            { name: "Kitchen - Fridge Point", qty: 1 },
            { name: "Kitchen - Microwave Point", qty: 1 },
            { name: "Kitchen - Utility Socket Point", qty: 1 },
            { name: "Main Entrance - Calling Bell & Light", qty: 2 }
        ],
        recommended: [
            { name: "Balcony - Weatherproof Light Point", qty: 1 },
            { name: "Bedroom - Bedside USB Socket", qty: 1 },
            { name: "Living - Wi-Fi Router Power Point", qty: 1 },
            { name: "Kitchen - Water Purifier Point", qty: 1 },
            { name: "Common Area - Inverter Bypass Line", qty: 1 },
            { name: "Washing Area - Washing Machine Point", qty: 1 }
        ],
        appliances: [
            { id: "applianceAC", confirmedQty: 12 },
            { id: "applianceGeyser", confirmedQty: 12 },
            { id: "applianceFridge", confirmedQty: 12 },
            { id: "applianceDB", confirmedQty: 12 },
            { id: "commercialShop", confirmedQty: 0 },
            { id: "conduitPipe", confirmedQty: 0, isSiteMeasured: true },
            { id: "cableWiring", confirmedQty: 0, isSiteMeasured: true }
        ],
        flatCount: 12
    },
    flat3bhk: {
        baseline: [
            { name: "Main Meter Box Connection & 3-Phase Earthing Link", qty: 1 },
            { name: "Master Bedroom - Light Points", qty: 3 },
            { name: "Master Bedroom - Fan Point", qty: 2 },
            { name: "Master Bedroom - AC Power Point", qty: 1 },
            { name: "Master Bedroom - Night Lamp / Foot Light", qty: 1 },
            { name: "Bedroom 2 - Light Points", qty: 2 },
            { name: "Bedroom 2 - Fan Point", qty: 1 },
            { name: "Bedroom 2 - AC Power Point", qty: 1 },
            { name: "Bedroom 3 - Light Points", qty: 2 },
            { name: "Bedroom 3 - Fan Point", qty: 1 },
            { name: "Bedroom 3 - AC Power Point", qty: 1 },
            { name: "Living Room - Ceiling Chandelier Point", qty: 1 },
            { name: "Living Room - Downlight / Spotlight Points", qty: 4 },
            { name: "Living/Dining - Fan Points", qty: 2 },
            { name: "Living/Dining - TV/Internet Outlet Box", qty: 1 },
            { name: "Toilet 1 - Light, Exhaust & Geyser Points", qty: 3 },
            { name: "Toilet 2 - Light, Exhaust & Geyser Points", qty: 3 },
            { name: "Toilet 3 - Light & Exhaust Fan Points", qty: 2 },
            { name: "Kitchen - Ceiling Lights & Chimney Point", qty: 2 },
            { name: "Kitchen - Fridge & Water Filter Points", qty: 2 },
            { name: "Kitchen - Microwave / Mixer Sockets", qty: 2 },
            { name: "Washing Balcony - Washing Machine Power Point", qty: 1 }
        ],
        recommended: [
            { name: "Balconies (All) - Exterior Lights", qty: 3 },
            { name: "Master BR - Bedside Multi-Sockets (USB)", qty: 2 },
            { name: "BR 2 & 3 - Bedside Charging Sockets", qty: 2 },
            { name: "Living Room - Extra Media Cabinet Sockets", qty: 2 },
            { name: "Main Entrance - Video Doorbell Setup", qty: 1 },
            { name: "Main Entrance - Foot Light / Porch Lamp", qty: 1 },
            { name: "DB Space - 3-Phase Stabilizer & Isolator", qty: 1 },
            { name: "Common Area - UPS / Inverter System Point", qty: 1 },
            { name: "Master BR - Reading Light Points", qty: 2 }
        ],
        appliances: [
            { id: "applianceAC", confirmedQty: 24 },
            { id: "applianceGeyser", confirmedQty: 16 },
            { id: "applianceFridge", confirmedQty: 8 },
            { id: "applianceDB", confirmedQty: 8 },
            { id: "commercialShop", confirmedQty: 20 },
            { id: "conduitPipe", confirmedQty: 0, isSiteMeasured: true },
            { id: "cableWiring", confirmedQty: 0, isSiteMeasured: true }
        ],
        flatCount: 8
    },
    flat4bhk: {
        baseline: [
            { name: "Main Meter Box Connection & Heavy Dual Earthing Link", qty: 1 },
            { name: "Master Bedroom - Downlights & Wall Lights", qty: 4 },
            { name: "Master Bedroom - Fan Points", qty: 2 },
            { name: "Master Bedroom - AC Power Point", qty: 1 },
            { name: "Master Bedroom - Footlight/Night Light", qty: 1 },
            { name: "Bedroom 2 - Light Points & Fan Points", qty: 3 },
            { name: "Bedroom 2 - AC Power Point", qty: 1 },
            { name: "Bedroom 3 - Light Points & Fan Points", qty: 3 },
            { name: "Bedroom 3 - AC Power Point", qty: 1 },
            { name: "Bedroom 4 - Light Points & Fan Points", qty: 3 },
            { name: "Bedroom 4 - AC Power Point", qty: 1 },
            { name: "Living / Family Room - Spotlight Circuits", qty: 6 },
            { name: "Living / Family Room - Ceiling Fans", qty: 2 },
            { name: "Dining Hall - Chandelier & Wall Sconces", qty: 3 },
            { name: "Dining Hall - Fan & Dining Table Point", qty: 2 },
            { name: "Kitchen - Work Counter & Cabinet Lights", qty: 3 },
            { name: "Kitchen - Fridge, Purifier & Chimney Points", qty: 3 },
            { name: "Toilets (All 4) - Light, Exhaust & Geyser Points", qty: 12 },
            { name: "Pooja Room - Spotlight & Ambient Light", qty: 2 },
            { name: "Servant Quarter - Light, Fan & Bell Points", qty: 3 }
        ],
        recommended: [
            { name: "Balconies - Decorative Ceiling Lights", qty: 4 },
            { name: "Master BR - Bedside Double Power Outlets", qty: 2 },
            { name: "Other Bedrooms - Bedside Sockets", qty: 3 },
            { name: "Living - TV Screen/AV Receiver Sockets", qty: 4 },
            { name: "Kitchen - Microwave, Dishwasher & Oven Sockets", qty: 3 },
            { name: "Main Entrance - Smart Lock & Bell Points", qty: 2 },
            { name: "Common Area - Dual Inverter Backup Loops", qty: 2 },
            { name: "DB Closet - Phase Corrector & ELCB Units", qty: 1 }
        ],
        appliances: [
            { id: "applianceAC", confirmedQty: 24 },
            { id: "applianceGeyser", confirmedQty: 24 },
            { id: "applianceFridge", confirmedQty: 6 },
            { id: "applianceDB", confirmedQty: 6 },
            { id: "commercialShop", confirmedQty: 0 },
            { id: "conduitPipe", confirmedQty: 0, isSiteMeasured: true },
            { id: "cableWiring", confirmedQty: 0, isSiteMeasured: true }
        ],
        flatCount: 6
    },
    house: {
        baseline: [
            { name: "Main LT Overhead Line Connection & Service Bracket", qty: 1 },
            { name: "Ground Floor - Main 3-Phase Panel Board Assembly", qty: 1 },
            { name: "Ground Floor - Living/Dining Lights & Fans", qty: 8 },
            { name: "Ground Floor - Master Bedroom Point Wiring", qty: 6 },
            { name: "Ground Floor - Modular Kitchen Point Wiring", qty: 8 },
            { name: "First Floor - Staircase 2-Way Light Systems", qty: 2 },
            { name: "First Floor - Bedrooms (Qty: 2) Point Wiring", qty: 10 },
            { name: "First Floor - Common Lobby Lights & Fans", qty: 5 },
            { name: "Toilets (Qty: 3) - Exhaust & Geyser Point Loops", qty: 9 },
            { name: "Pump Room - 1.5 HP Borewell Motor Point Setup", qty: 1 },
            { name: "Safety System - Copper Plate Chemical Earthing Pit", qty: 2 }
        ],
        recommended: [
            { name: "Exterior - Boundary Wall & Gate Floodlights", qty: 4 },
            { name: "Security - Exterior CCTV Camera Power Points", qty: 4 },
            { name: "Roof Terrace - Waterproof Lighting Points", qty: 2 },
            { name: "Power Backup - Generator / Inverter Changeover Setup", qty: 1 },
            { name: "Safety - Roof Copper Lightning Arrester System", qty: 1 },
            { name: "Utility - Solar Water Heater Thermostat Point", qty: 1 }
        ],
        appliances: [
            { id: "applianceAC", confirmedQty: 4 },
            { id: "applianceGeyser", confirmedQty: 3 },
            { id: "applianceFridge", confirmedQty: 2 },
            { id: "applianceDB", confirmedQty: 2 },
            { id: "commercialShop", confirmedQty: 0 },
            { id: "conduitPipe", confirmedQty: 1100 },
            { id: "cableWiring", confirmedQty: 350 }
        ],
        flatCount: 1
    },
    office: {
        baseline: [
            { name: "Commercial Electric Meter Box & Service Inlet", qty: 1 },
            { name: "Main Office Sub-Distribution Panel (4-Way DB)", qty: 1 },
            { name: "Workstations - Quad Dual-Socket Outlets (5A)", qty: 16 },
            { name: "Ceiling - LED 2x2 Panel Lights (600x600mm)", qty: 12 },
            { name: "Ceiling - Cabin Wall Fan Wiring", qty: 6 },
            { name: "Conference Room - HDMI / Projector Ceiling Outlet", qty: 1 },
            { name: "Server Room - Dedicated 16A Server Rack Power Outlet", qty: 2 },
            { name: "Pantry - Coffee Machine & Fridge Point Sockets", qty: 2 },
            { name: "Earthing System - Copper Wire Main Grounding Hub", qty: 1 }
        ],
        recommended: [
            { name: "Networking - CAT6 LAN Cabling Outlet Points", qty: 16 },
            { name: "Security - Access Control biometric lock system point", qty: 1 },
            { name: "CCTV - Dome Camera Ceiling Points", qty: 6 },
            { name: "Power Backup - Online UPS Input/Output panel setup", qty: 1 },
            { name: "Emergency - Exit Signage Illuminated Points", qty: 2 }
        ],
        appliances: [
            { id: "applianceAC", confirmedQty: 6 },
            { id: "applianceGeyser", confirmedQty: 1 },
            { id: "applianceFridge", confirmedQty: 1 },
            { id: "applianceDB", confirmedQty: 2 },
            { id: "commercialShop", confirmedQty: 0 },
            { id: "conduitPipe", confirmedQty: 1800 },
            { id: "cableWiring", confirmedQty: 450 }
        ],
        flatCount: 1
    },
    industrial: {
        baseline: [
            { name: "Industrial Sub-station Busbar Chamber Jointing", qty: 1 },
            { name: "Main LT Panel Board Installation & Grounding", qty: 1 },
            { name: "Shop Floor - 3-Phase Industrial Sockets (32A/63A)", qty: 6 },
            { name: "Shop Floor - High-Bay LED Lights (150W/200W)", qty: 8 },
            { name: "Machinery Row - Motor Isolator Switch Wirings", qty: 6 },
            { name: "Office Cabin - Utility Sockets & Lighting Points", qty: 6 },
            { name: "Safety System - Heavy Chemical Earthing Pits", qty: 3 },
            { name: "Main DB - Overload & Short Circuit ELCB Assembly", qty: 1 }
        ],
        recommended: [
            { name: "Ventilation - Industrial Exhaust Blower Fan Wiring", qty: 4 },
            { name: "Safety - Industrial Emergency Strobe Lights", qty: 4 },
            { name: "Backup - Generator Control Panel AMF Card Setup", qty: 1 },
            { name: "Exterior - High-Power Perimeter Floodlights", qty: 4 }
        ],
        appliances: [
            { id: "applianceAC", confirmedQty: 4 },
            { id: "applianceGeyser", confirmedQty: 1 },
            { id: "applianceFridge", confirmedQty: 1 },
            { id: "applianceDB", confirmedQty: 3 },
            { id: "commercialShop", confirmedQty: 0 },
            { id: "conduitPipe", confirmedQty: 3500 },
            { id: "cableWiring", confirmedQty: 850 }
        ],
        flatCount: 1
    }
};

// Initialize Application
window.addEventListener('DOMContentLoaded', () => {
    // Load default preset
    loadTemplatePreset('flat2bhk');
    
    // Bind global text inputs
    setupInputBindings();
    
    // Initialize date inputs to current date
    const dateInput = document.getElementById('quotation-date');
    if (dateInput) {
        const today = new Date();
        const yyyy = today.getFullYear();
        let mm = today.getMonth() + 1;
        let dd = today.getDate();
        if (dd < 10) dd = '0' + dd;
        if (mm < 10) mm = '0' + mm;
        dateInput.value = `${yyyy}-${mm}-${dd}`;
        state.quotationDate = dateInput.value;
    }
    
    updateAll();
});

// Setup metadata live sync
function setupInputBindings() {
    const bindings = {
        'client-name': { key: 'clientName', label: 'lbl-client-name', labelSig: 'lbl-sig-client' },
        'project-name': { key: 'projectName', label: 'lbl-project-name' },
        'project-address': { key: 'projectAddress', label: 'lbl-project-address' },
        'quotation-number': { key: 'quotationNumber', label: 'lbl-quote-no' },
        'flat-count': { key: 'flatCount', label: 'lbl-flat-count', isNum: true }
    };
    
    for (const [id, config] of Object.entries(bindings)) {
        const element = document.getElementById(id);
        if (element) {
            element.addEventListener('input', (e) => {
                let value = e.target.value;
                if (config.isNum) {
                    value = parseInt(value) || 1;
                }
                state[config.key] = value;
                
                // Update labels
                const label = document.getElementById(config.label);
                if (label) {
                    label.textContent = config.isNum ? `${value} Units` : value;
                }
                if (config.labelSig) {
                    const labelSig = document.getElementById(config.labelSig);
                    if (labelSig) labelSig.textContent = value;
                }
                
                // Trigger live updates for calculations if flat count changes
                if (config.isNum) {
                    updateAll();
                }
            });
        }
    }
    
    // Handle Date binding separately
    const dateInput = document.getElementById('quotation-date');
    if (dateInput) {
        dateInput.addEventListener('change', (e) => {
            state.quotationDate = e.target.value;
            updateDateLabels();
        });
    }
}

// Update Issued date and Validity date labels
function updateDateLabels() {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const date = new Date(state.quotationDate);
    
    // Format issue date
    const formattedIssue = date.toLocaleDateString('en-US', options);
    document.getElementById('lbl-quote-date').textContent = formattedIssue;
    
    // Validity date (+30 Days)
    const validityDate = new Date(date);
    validityDate.setDate(validityDate.getDate() + 30);
    const formattedValidity = validityDate.toLocaleDateString('en-US', options);
    document.getElementById('lbl-validity-date').textContent = formattedValidity;
}

// Load Template Preset
function loadTemplatePreset(presetKey) {
    const preset = PRESETS[presetKey];
    if (!preset) return;
    
    state.flatCount = preset.flatCount;
    document.getElementById('flat-count').value = preset.flatCount;
    document.getElementById('lbl-flat-count').textContent = `${preset.flatCount} Units`;
    
    // Load point configurations
    state.baselinePoints = JSON.parse(JSON.stringify(preset.baseline));
    state.recommendedPoints = JSON.parse(JSON.stringify(preset.recommended));
    
    // Sync quantities of Part B Custom items
    state.appliances.forEach(app => {
        const itemPreset = preset.appliances.find(p => p.id === app.id);
        if (itemPreset) {
            app.confirmedQty = itemPreset.confirmedQty;
            app.isSiteMeasured = !!itemPreset.isSiteMeasured;
        }
    });
    
    renderInputs();
    updateAll();
}

// Render dynamic configuration fields in sidebar
function renderInputs() {
    // 1. Render Promoter Baseline Points list
    const baselineContainer = document.getElementById('baseline-points-container');
    baselineContainer.innerHTML = '';
    state.baselinePoints.forEach((point, index) => {
        const row = document.createElement('div');
        row.className = 'point-config-row';
        row.innerHTML = `
            <label title="${point.name}">${index + 1}. ${point.name}</label>
            <input type="number" value="${point.qty}" min="0" onchange="updatePointQty('baseline', ${index}, this.value)">
        `;
        baselineContainer.appendChild(row);
    });

    // 2. Render AmpEdge Recommended Points list
    const recommendedContainer = document.getElementById('recommended-points-container');
    recommendedContainer.innerHTML = '';
    state.recommendedPoints.forEach((point, index) => {
        const row = document.createElement('div');
        row.className = 'point-config-row';
        row.innerHTML = `
            <label title="${point.name}">${index + 1}. ${point.name}</label>
            <input type="number" value="${point.qty}" min="0" onchange="updatePointQty('recommended', ${index}, this.value)">
        `;
        recommendedContainer.appendChild(row);
    });

    // 3. Render Appliance/Custom inputs
    const appliancesContainer = document.getElementById('appliances-container');
    appliancesContainer.innerHTML = '';
    state.appliances.forEach((app) => {
        const card = document.createElement('div');
        card.className = 'appliance-config-card';
        card.innerHTML = `
            <div class="appliance-card-info">
                <span class="appliance-name">${app.name}</span>
                <span class="appliance-desc">${app.desc}</span>
            </div>
            <input type="text" value="${app.isSiteMeasured && app.confirmedQty === 0 ? 'Site Meas.' : app.confirmedQty}" 
                placeholder="Qty" onchange="updateApplianceQty('${app.id}', this.value)">
        `;
        appliancesContainer.appendChild(card);
    });

    // 4. Render Unit Rates panel
    const ratesContainer = document.getElementById('rates-container');
    ratesContainer.innerHTML = '';
    const rateLabels = {
        wiringBaseline: "Baseline Wiring / Pt",
        wiringRecommended: "Recommended Wiring / Pt",
        applianceAC: "AC Point Install / Pt",
        applianceGeyser: "Geyser Point Setup / Pt",
        applianceFridge: "Fridge Point Setup / Pt",
        applianceDB: "Distribution Board Setup / DB",
        commercialShop: "Commercial / Common Pt",
        conduitPipe: "PVC Conduit Install / Sq.Ft",
        cableWiring: "Sub-Main Cable / Rft"
    };
    
    for (const [key, value] of Object.entries(state.rates)) {
        const row = document.createElement('div');
        row.className = 'rate-config-row';
        row.innerHTML = `
            <label>${rateLabels[key] || key}</label>
            <input type="number" value="${value}" min="0" onchange="updateRate('${key}', this.value)">
        `;
        ratesContainer.appendChild(row);
    }
}

// State Updaters
function updatePointQty(type, index, value) {
    const qty = parseInt(value) || 0;
    if (type === 'baseline') {
        state.baselinePoints[index].qty = qty;
    } else {
        state.recommendedPoints[index].qty = qty;
    }
    updateAll();
}

// Update Appliance Quantity
function updateApplianceQty(id, value) {
    const app = state.appliances.find(a => a.id === id);
    if (!app) return;
    
    if (value.toLowerCase().includes('site') || value === '' || value === '0') {
        app.confirmedQty = 0;
        app.isSiteMeasured = true;
    } else {
        app.confirmedQty = parseFloat(value) || 0;
        app.isSiteMeasured = false;
    }
    updateAll();
}

function updateRate(key, value) {
    state.rates[key] = parseFloat(value) || 0;
    updateAll();
}

function resetPoints() {
    const template = document.getElementById('scope-type').value;
    loadTemplatePreset(template);
}

// Master Calculator & DOM Printer
function updateAll() {
    updateDateLabels();
    
    // 1. Calculate Per Unit point totals
    const totalBaselinePointsPerFlat = state.baselinePoints.reduce((acc, curr) => acc + curr.qty, 0);
    const totalRecommendedPointsPerFlat = state.recommendedPoints.reduce((acc, curr) => acc + curr.qty, 0);
    
    // Update Page 2 Table view
    renderPreviewTable('table-baseline', state.baselinePoints);
    renderPreviewTable('table-recommended', state.recommendedPoints);
    
    document.getElementById('total-baseline-header').textContent = totalBaselinePointsPerFlat;
    document.getElementById('lbl-subtotal-baseline').textContent = totalBaselinePointsPerFlat;
    document.getElementById('total-recommended-header').textContent = totalRecommendedPointsPerFlat;
    document.getElementById('lbl-subtotal-recommended').textContent = totalRecommendedPointsPerFlat;
    
    // 2. Perform Part A calculations (Multiplied by Flat Count)
    const flatCount = state.flatCount;
    document.querySelectorAll('.flat-count-text').forEach(el => el.textContent = flatCount);
    
    const partA1TotalPoints = flatCount * totalBaselinePointsPerFlat;
    const partA2TotalPoints = flatCount * totalRecommendedPointsPerFlat;
    const partATotalPointsCombined = partA1TotalPoints + partA2TotalPoints;
    
    const partA1Amount = partA1TotalPoints * state.rates.wiringBaseline;
    const partA2Amount = partA2TotalPoints * state.rates.wiringRecommended;
    const partASubtotal = partA1Amount + partA2Amount;
    
    // Weighted rate
    const weightedRate = partATotalPointsCombined > 0 ? (partASubtotal / partATotalPointsCombined) : state.rates.wiringBaseline;
    
    // Set Part A DOM elements
    document.getElementById('boq-calc-1').textContent = `${flatCount} Units × ${totalBaselinePointsPerFlat} Pts`;
    document.getElementById('boq-pts-1').textContent = `${partA1TotalPoints} Points`;
    document.getElementById('boq-rate-1').textContent = `₹${state.rates.wiringBaseline}`;
    document.getElementById('boq-amt-1').textContent = formatCurrency(partA1Amount);
    
    document.getElementById('boq-calc-2').textContent = `${flatCount} Units × ${totalRecommendedPointsPerFlat} Pts`;
    document.getElementById('boq-pts-2').textContent = `${partA2TotalPoints} Points`;
    document.getElementById('boq-rate-2').textContent = `₹${state.rates.wiringRecommended}`;
    document.getElementById('boq-amt-2').textContent = formatCurrency(partA2Amount);
    
    document.getElementById('total-points-combined').textContent = partATotalPointsCombined;
    document.getElementById('boq-total-points').textContent = `${partATotalPointsCombined} Points`;
    document.getElementById('boq-weighted-rate').textContent = `₹${Math.round(weightedRate)}`;
    document.getElementById('boq-subtotal-a').textContent = formatCurrency(partASubtotal);
    
    // 3. Perform Part B calculations (Custom appliance list)
    const boqPartBBody = document.getElementById('boq-part-b-body');
    boqPartBBody.innerHTML = '';
    
    let partBSubtotal = 0;
    
    state.appliances.forEach((app, idx) => {
        const rate = state.rates[app.rateKey] || 0;
        let qtyDisplay = '';
        let amount = 0;
        let amountDisplay = '';
        
        if (app.isSiteMeasured && app.confirmedQty === 0) {
            qtyDisplay = `<span class="qty-badge site-measured">[ Site Meas. ]</span>`;
            amountDisplay = `<span class="text-muted italic">As per actuals</span>`;
        } else {
            qtyDisplay = `<span class="qty-badge">${app.confirmedQty} ${app.unit}s</span>`;
            amount = app.confirmedQty * rate;
            partBSubtotal += amount;
            amountDisplay = formatCurrency(amount);
        }
        
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td class="text-center font-bold">2.${idx + 1}</td>
            <td>
                <span class="font-bold">${app.name}</span><br>
                <span class="text-muted text-xs">${app.desc}</span>
            </td>
            <td class="text-center font-bold">${app.unit}</td>
            <td class="text-right">₹${rate}</td>
            <td class="text-center">${qtyDisplay}</td>
            <td class="text-right font-mono font-bold">${amountDisplay}</td>
        `;
        boqPartBBody.appendChild(tr);
    });
    
    // Append Part B subtotal row
    const subtotalBTr = document.createElement('tr');
    subtotalBTr.className = 'subtotal-row-highlight';
    subtotalBTr.innerHTML = `
        <td colspan="4" class="text-right font-bold uppercase">Subtotal Appliances, DB & Custom:</td>
        <td class="text-center font-bold">-</td>
        <td class="text-right font-mono font-bold">${formatCurrency(partBSubtotal)}</td>
    `;
    boqPartBBody.appendChild(subtotalBTr);
    
    // 4. Grand Total & Milestones
    const grandTotal = partASubtotal + partBSubtotal;
    document.getElementById('lbl-grand-total').textContent = formatCurrency(grandTotal);
    
    const mobilizationMilestone = grandTotal * 0.30;
    const progressMilestone = grandTotal * 0.40;
    const handoverMilestone = grandTotal * 0.30;
    
    document.getElementById('payment-ms-1').textContent = formatCurrency(mobilizationMilestone);
    document.getElementById('payment-ms-2').textContent = formatCurrency(progressMilestone);
    document.getElementById('payment-ms-3').textContent = formatCurrency(handoverMilestone);
}

// Render dynamic tables helper
function renderPreviewTable(tableId, data) {
    const tbody = document.querySelector(`#${tableId} tbody`);
    tbody.innerHTML = '';
    
    data.forEach((item, index) => {
        if (item.qty > 0) {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td>${index + 1}. ${item.name}</td>
                <td class="text-center font-bold">${item.qty}</td>
            `;
            tbody.appendChild(tr);
        }
    });
    
    // Add placeholder if empty
    if (tbody.children.length === 0) {
        tbody.innerHTML = `<tr><td colspan="2" class="text-center text-muted italic">No points configured in this scope</td></tr>`;
    }
}

// Helper: currency formatter
function formatCurrency(val) {
    return '₹' + val.toLocaleString('en-IN', {
        maximumFractionDigits: 2,
        minimumFractionDigits: 2
    });
}

// Accordion toggle helper
function toggleAccordion(id) {
    const element = document.getElementById(id);
    const arrow = element.previousElementSibling.querySelector('.arrow');
    
    if (element.classList.contains('open')) {
        element.classList.remove('open');
        if (arrow) arrow.style.transform = 'rotate(0deg)';
    } else {
        element.classList.add('open');
        if (arrow) arrow.style.transform = 'rotate(180deg)';
    }
}

// Tab switcher helper
function switchTab(tabId) {
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.tab-panel').forEach(panel => panel.classList.remove('active'));
    
    // Find target tab trigger
    const targetBtn = Array.from(document.querySelectorAll('.tab-btn')).find(btn => btn.getAttribute('onclick').includes(tabId));
    if (targetBtn) targetBtn.classList.add('active');
    
    const panel = document.getElementById(`tab-${tabId}`);
    if (panel) panel.classList.add('active');
}

// Theme toggler
function toggleTheme() {
    document.body.classList.toggle('light-theme');
}

// PDF Exporter using html2pdf
function downloadPDF() {
    const element = document.getElementById('quotation-document');
    
    // Options for high quality A4 PDF rendering
    const opt = {
        margin:       0,
        filename:     `AmpEdge_Quotation_${state.clientName.replace(/\s+/g, '_')}.pdf`,
        image:        { type: 'jpeg', quality: 0.98 },
        html2canvas:  { scale: 2, useCORS: true, letterRendering: true },
        jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };
    
    const button = document.querySelector('.btn-primary');
    const originalText = button.innerHTML;
    button.innerHTML = `<i class="fa-solid fa-circle-notch fa-spin"></i> Generating...`;
    button.disabled = true;
    
    html2pdf().set(opt).from(element).save().then(() => {
        button.innerHTML = originalText;
        button.disabled = false;
    }).catch(err => {
        console.error(err);
        button.innerHTML = originalText;
        button.disabled = false;
        alert("Failed to render PDF automatically. You can also print the document via your browser (Ctrl+P) and select 'Save as PDF'.");
    });
}
