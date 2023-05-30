const { Triangle, Circle, Square, Heart } = require('./shapes');

//test for triangle
test('should render html code for a blue triangle element', () => {
    const t = new Triangle();
    t.setProperties('blue', 'lrt', 'yellow');
    const triangle = t.render();
    const renderString =
        '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"> <polygon points="150, 18 244, 182 56, 182" fill="blue" /> <text x="150" y="125" font-size="60" text-anchor="middle" fill="yellow">lrt</text> </svg>';
    expect(triangle).toBe(renderString);
});

//test for square
test('should render html code for a blue square element', () => {
    const s = new Square();
    s.setProperties('blue', 'lrt', 'yellow');
    const square = s.render();
    const renderString =
        '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"> <rect x="90" y="40" width="120" height="120" fill="${this.color}" /> <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text> </svg>';
    expect(square).toBe(renderString);
});

//test for circle
test('should render html code for a blue circle element', () => {
    const c = new Circle();
    c.setProperties('blue', 'lrt', 'yellow');
    const circle = c.render();
    const renderString =
        '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"> <circle cx="150" cy="100" r="80" fill="${this.color}" /> <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text> </svg>';
    expect(circle).toBe(renderString);
});

//test for heart
test('should render html code for a blue heart element', () => {
    const h = new Heart();
    h.setProperties('blue', 'lrt', 'yellow');
    const heart = h.render();
    const renderString =
        '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"> <circle cx="50" cy="25 r="20 fill="${this.color}" /> <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text> </svg>';
    expect(heart).toBe(renderString);
});
