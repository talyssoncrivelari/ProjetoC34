class IronBall {
    constructor(x, y, r) {
        let options = {
            isStatic : false,
            restitution : 0.00001,
        }
        this.x = x;
        this.y = y;
        this.r = r,
        this.body = Bodies.circle(x, y, r, options);
        World.add(world, this.body);
    }

    display() {
        push();
        fill("BLACK");
        ellipseMode(RADIUS);
        ellipse(this.x, this.y, this.r);
        pop();
    }
}