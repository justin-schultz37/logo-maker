// Function to generate SVG content based on provided data and shape
module.exports = function generateSVG(data, shape) {
  return `
      <svg version="1.1"
      width="300" height="200"
      xmlns="http://www.w3.org/2000/svg">

      ${shape.render(data)} <!-- Render the shape based on data -->

      <text x="150" y="125" font-size="60" text-anchor="middle" fill="${data.textColor}">${data.characters}</text>

      </svg>`;
};
