class Instrument{
    constructor(power, status){
    this.power = power;
    this.getStatus = function(){
      let status = prompt("instrument is on/off");
          if(status === "on") {
              console.log(`switch on. Power is ${power}W`)
          }
          else {
              console.log('switch off')
          }
      }
  }
}
  
  class Lamp extends Instrument{
    constructor(brand, lightColor) {
        super(200, "on");
      this.brand = brand;
      this.lightColor = lightColor
  }
}
  
  
  class Computer extends Instrument{
    constructor(brand, cost) {
        super(500, "off");
      this.brand = brand;
      this.cost = cost
  }
}

  
  const myLamp = new Lamp("xiaomi", "blue")
  const myComputer = new Computer("gigabyte", "expensive")
  
  console.log(myLamp)
  myLamp.getStatus()
  
  console.log(myComputer)
  myComputer.getStatus()