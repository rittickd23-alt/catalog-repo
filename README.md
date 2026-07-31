# AmpEdge BOM & Quotation System

An interactive, premium, offline-first web application designed for **AmpEdge Solutions** to generate, estimate, and export electrical service point-based quotations.

## Features
1. **Interactive Configurator Dashboard**: Dynamic form inputs for Client Name, Project Title, Address, Date, Quotation Number, and unit multipliers.
2. **Detailed Presets**: Toggle between standard and premium electrical configurations designed specifically for:
   - **Standard Flat (1BHK)**
   - **Standard Flat (2BHK)**
   - **Premium Flat (3BHK)**
   - **Luxury Flat (4BHK)**
   - **Independent House (Multi-floor)**
   - **Commercial Office Space**
   - **Industrial Factory / Workshop**
3. **Researched Electrical Scope Items**: Lists items like Main Meter Box, MCB, RCCB, Earthing systems, specialized AC/Geyser/Fridge points, exhaust fans, and general room points.
4. **Editable Unit Rates Manager**: Customize pricing dynamically (wiring cost per point, appliance installation rates, conduit piping per Sq.Ft, cable wiring per Rft).
5. **A4 Premium Layout Preview**: A real-time, 4-page print preview that matches corporate branding, tables, subtotals, conditions, payment milestone schedules, and sign-off sections.
6. **Double Export Options**:
   - **Download PDF**: One-click high-resolution PDF download utilizing `html2pdf.js`.
   - **Print Document**: Direct browser layout printing (Ctrl+P) with optimized CSS styles.
7. **Offline-First Capabilities**: Zero backend dependencies. Can be double-clicked to open directly via `index.html` in any web browser, completely offline.

## File Structure
- [index.html](file:///C:/Users/RITTICK%20DAS/.gemini/antigravity/scratch/catalog-repo/index.html) - Application structures and PDF layouts
- [style.css](file:///C:/Users/RITTICK%20DAS/.gemini/antigravity/scratch/catalog-repo/style.css) - Premium dashboard layout and `@media print` rules
- [app.js](file:///C:/Users/RITTICK%20DAS/.gemini/antigravity/scratch/catalog-repo/app.js) - Calculation logic and interactive states

## How to Run Offline
1. Double-click [index.html](file:///C:/Users/RITTICK%20DAS/.gemini/antigravity/scratch/catalog-repo/index.html) on any computer.
2. Fill out the point values and details.
3. Click **Download PDF** or press **Ctrl+P** (and choose "Save as PDF" / "Print") to generate your document.
