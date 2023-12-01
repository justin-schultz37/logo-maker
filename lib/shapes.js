class Shape {
    constructor(fillColor) {
        this.fillColor = fillColor;
    }

    setColor(fillColor) {
        this.fillColor = fillColor;
    }

    render() {
        throw new Error('Render method must be implemented by the subclass.');
    }
}

class Triangle extends Shape {
    render() {
        return `<polygon points="150, 1 290, 182 20, 182" fill="${this.fillColor}" />`;
    }
}

class Circle extends Shape {
    render() {
        return `<circle cx="150" cy="100" r="80" fill="${this.fillColor}" />`;
    }
}

class Square extends Shape {
    render() {
        return `<rect x="75" y="35" width="150" height="150" fill="${this.fillColor}" />`;
    }
}

function Shapes(data) {
    const triangle = new Triangle(data.shapecolor);
    const circle = new Circle(data.shapecolor);
    const square = new Square(data.shapecolor);

    return { triangle, circle, square };
}


module.exports = { Shapes, Triangle, Circle, Square };
