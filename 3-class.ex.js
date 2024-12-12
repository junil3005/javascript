// prototype 객체 지향 구분

class Shape {
    // static 
    static create(x,y) { return new Shape(x, y)}

    name = "Shape"; 

    // 생성자
    constructor(x, y) {
        this.name = "Shape";
        this.move(x, y); 
    }

    //  메서드 
    move(x, y ) {
        this.x = x;
        this.y = y;
    }

    area() {
        return 0;
    }
}

const s = new Shape(10, 20);
console.log(s, s.area());

class Circle extends Shape {
    constructor(x, y, radius) {
        super(x, y); // 부모 생성자 호출
        this.radius = radius;
    }
    area() {
        if (this.radis ===0) {
            return super.area();
        }
        return this.radius ** 2 * Math.PI;
    }
}

const c = new Circle(10, 20, 30);
console.log(c, c.area());