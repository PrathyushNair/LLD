class ShapeAreaCalculator {
  shape: string;
  constructor(shape: string) {
    this.shape = shape;
  }
  calculateArea(shapeData: any) {
    if (this.shape == "Rectangle") {
      return shapeData.length * shapeData.breadth;
    }
    if (this.shape == "Circle") {
      return Math.PI * shapeData.radius ** 2;
    }
  }
}
// In the above exapmle if yow want to calculate the area of triangle you will have to modify the calculate area function
// Hence violating Open for extension but closed for modification

//Instead
class Rectangle {
  length: number;
  breadth: number;
  constructor(length: number, breadth: number) {
    this.length = length;
    this.breadth = breadth;
  }
  calculateArea() {
    return this.length * this.breadth;
  }
}
class Circle {
  radius: number;

  constructor(length: number, radius: number) {
    this.radius = radius;
  }
  calculateArea() {
    return (Math.PI*(this.radius)**2)
  }
}
