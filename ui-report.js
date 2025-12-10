// generate-ui-report.js
const fs = require('fs');
const path = require('path');
const report = require('multiple-cucumber-html-reporter');

const jsonDir = path.join(__dirname, 'run-artifacts', 'cucumber-json');

// 1) Normalize all cucumber JSON files so step.text is always an array
function normalizeJsonFiles() {
  if (!fs.existsSync(jsonDir)) {
    console.error(`JSON directory not found: ${jsonDir}`);
    process.exit(1);
  }

  const files = fs.readdirSync(jsonDir).filter(f => f.endsWith('.json'));

  files.forEach(file => {
    const fullPath = path.join(jsonDir, file);
    const raw = fs.readFileSync(fullPath, 'utf8');

    let data;
    try {
      data = JSON.parse(raw);
    } catch (e) {
      console.warn(`Skipping invalid JSON file: ${file}`);
      return;
    }

    // The reporter output is usually an array of features
    const features = Array.isArray(data) ? data : [data];

    features.forEach(feature => {
      if (!feature.elements) return;

      feature.elements.forEach(scenario => {
        if (!scenario.steps) return;

        scenario.steps.forEach(step => {
          if (step && step.text && typeof step.text === 'string') {
            // Wrap plain string into array so step.text.join('<br>') is valid
            step.text = [step.text];
          }
        });
      });
    });

    fs.writeFileSync(fullPath, JSON.stringify(features, null, 2), 'utf8');
  });
}

// 2) Generate the HTML report
function generateReport() {
  report.generate({
    jsonDir,
    reportPath: path.join(__dirname, 'run-artifacts', 'reports', 'ui-html'),
    reportName: 'AAA Life UI Test Report',
    openReportInBrowser: true,
    disableLog: false,
    displayDuration: true,
    metadata: {
      browser: {
        name: 'Edge',
        version: 'latest'
      },
      platform: {
        name: 'Windows',
        version: '11'
      }
    }
  });
}

normalizeJsonFiles();
generateReport();
