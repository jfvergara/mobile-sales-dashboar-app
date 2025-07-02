# Mobile Sales Dashboard App

A minimalist mobile web app that displays daily sales data and analytics from a public Google Spreadsheet. Built with vanilla JS, HTML, CSS, and Chart.js.

## Features
- Real-time chart rendering from Google Sheets
- Total monthly sales calculation
- Clean, responsive, minimalist UI
- Offline-ready (basic caching)

## Quick Start
1. Clone the repo
2. Add your Google Sheets API key and Sheet ID in `public/assets/js/sheets.js`
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the local server:
   ```bash
   npm run start
   ```
5. Open your browser and go to the address shown in the terminal (e.g., http://localhost:5000)

## Project Structure
```
public/
  index.html
  manifest.json
  assets/
    images/
      icon-48.png
      icon-512.png
    css/
      style.css
    js/
      app.js
      sheets.js
package.json
package-lock.json
README.md
LICENSE
```

## License
MIT 