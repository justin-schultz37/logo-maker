const fs = require('fs');

function generateSVG(userInput) {
    // Implement SVG generation logic here based on userInput
    // You can use a library like 'svg.js' or manually create the SVG string

    const svgContent = `<svg width="300" height="200">
    <!-- Your SVG content based on user input -->
  </svg>`;

    // Save the SVG content to a file named 'logo.svg'
    fs.writeFileSync('logo.svg', svgContent);

    console.log('Generated logo.svg');
}

module.exports = generateSVG;