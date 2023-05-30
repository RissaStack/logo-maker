//Parent class
class Shapes {
    constructor() {
        this.color = '';
        this.text = '';
        this.textColor = '';
    }
    setProperties(userColor, userText, userTextColor) {
        this.color = userColor;
        this.text = userText;
        this.textColor = userTextColor;
    }
}

class Square extends Shapes {
    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"> <rect x="90" y="40" width="120" height="120" fill="${this.color}" /> <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text> </svg>`;
    }
}

class Triangle extends Shapes {
    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"> <polygon points="150, 18 244, 182 56, 182" fill="${this.color}" /> <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text> </svg>`;
    }
}

class Circle extends Shapes {
    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"> <circle cx="150" cy="100" r="80" fill="${this.color}" /> <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text> </svg>`;
    }
}

class Heart extends Shapes {
    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"> <circle cx="50" cy="25 r="20 fill="${this.color}" /> <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text> </svg>`;
    }
}

module.exports = { Square, Triangle, Circle, Heart };
