// Base class for shapes
class Shape {
    // Constructor to initialize the fill color
    constructor(fillColor) {
        this.fillColor = fillColor;
    }

    // Method to set the fill color
    setColor(fillColor) {
        this.fillColor = fillColor;
    }

    // Abstract method to be implemented by subclasses
    render() {
        throw new Error('Render method must be implemented by the subclass.');
    }
}

// Triangle class, extends Shape
class Triangle extends Shape {
    // Implementation of the render method for a triangle
    render() {
        return `<polygon points="150, 1 290, 182 20, 182" fill="${this.fillColor}" />`;
    }
}

// Circle class, extends Shape
class Circle extends Shape {
    // Implementation of the render method for a circle
    render() {
        return `<circle cx="150" cy="100" r="80" fill="${this.fillColor}" />`;
    }
}

// Square class, extends Shape
class Square extends Shape {
    // Implementation of the render method for a square
    render() {
        return `<rect x="75" y="35" width="150" height="150" fill="${this.fillColor}" />`;
    }
}

// Factory function to create instances of shapes with a specified color
function Shapes(data) {
    const triangle = new Triangle(data.shapecolor);
    const circle = new Circle(data.shapecolor);
    const square = new Square(data.shapecolor);

    return { triangle, circle, square };
}

// Exporting the Shapes factory function and shape classes
module.exports = { Shapes, Triangle, Circle, Square };

