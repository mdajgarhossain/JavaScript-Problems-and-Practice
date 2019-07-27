// Problem-23: Area Of Circle

const circle = {
    radius: 2,
    get area() {
        const result = Math.PI * (this.radius ** 2);
        return result.toFixed(2);
    }
};

console.log(circle.area);