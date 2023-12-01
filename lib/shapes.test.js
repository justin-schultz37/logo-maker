const { Shapes } = require('../lib/shapes.js');

// Test case for checking if setColor is correct for triangle
test('checking to see if setColor is correct for triangle.', () => {
    // Create Shapes instance with shapecolor set to "blue"
    const shapes = new Shapes({ shapecolor: "blue" });
    // Check if the rendered output matches the expected SVG code
    expect(shapes.triangle.render()).toEqual('<polygon points="150, 1 290, 182 20, 182" fill="blue" />');
});

// Test case for checking if setColor is correct for circle
test('checking to see if setColor is correct for circle.', () => {
    // Create Shapes instance with shapecolor set to "green"
    const shapes = new Shapes({ shapecolor: "green" });
    // Check if the rendered output matches the expected SVG code
    expect(shapes.circle.render()).toEqual('<circle cx="150" cy="100" r="80" fill="green" />');
});

// Test case for checking if setColor is correct for square
test('checking to see if setColor is correct for square.', () => {
    // Create Shapes instance with shapecolor set to "red"
    const shapes = new Shapes({ shapecolor: "red" });
    // Check if the rendered output matches the expected SVG code
    expect(shapes.square.render()).toEqual('<rect x="75" y="35" width="150" height="150" fill="red" />');
});
