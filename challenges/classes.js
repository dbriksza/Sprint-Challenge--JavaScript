// 1. Copy and paste your prototype in here and refactor into class syntax.
class CuboidMakerClass{
    constructor(attr){
        this.newLength = attr.length,
        this.newWidth = attr.width,
        this.newHeight = attr.height
    }
    volume(){
        return this.newLength * this.newWidth * this.newHeight;
    }
    surfaceArea(){
        return 2 * (this.newLength * this.newWidth + this.newLength * this.newHeight + this.newWidth * this.newHeight);
    }
}
const cuboidClass = new CuboidMakerClass({
    length: 4,
    width: 5,
    height: 5
  })
// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboidClass.volume()); // 100
console.log(cuboidClass.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.
class CubeMaker extends CuboidMakerClass{
    constructor(attr){
        super(attr);
    }
    cubeVolume(){
        return Math.pow(this.newHeight, 3);
    }
    cubeSA(){
        return Math.pow(this.newHeight, 2) * 6;
    }
}

const cube = new CubeMaker({
    height: 5
  })

console.log(cube.cubeVolume());
console.log(cube.cubeSA());