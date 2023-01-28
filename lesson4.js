function Instrument(power, status){
    this.power = power,
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
  
  function Lamp(brand, lightColor) {
      this.brand = brand,
      this.lightColor = lightColor
  }
  Lamp.prototype = new Instrument(200, "on");
  
  function Computer(brand, cost) {
      this.brand = brand,
      this.cost = cost
  }
  Computer.prototype = new Instrument(500, "off");
  
  const myLamp = new Lamp("xiaomi", "blue")
  const myComputer = new Computer("gigabyte", "expensive")
  
  console.log(myLamp)
  myLamp.getStatus()
  
  console.log(myComputer)
  myComputer.getStatus()