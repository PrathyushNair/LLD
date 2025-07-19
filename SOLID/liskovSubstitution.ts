class Vehicle {
  constructor() {}
  getEngineType() {}
  getDataFromWheelSensors() {}
  getDieselSensorData() {}
}
class Bike extends Vehicle {
  constructor() {
    super();
  }
  getDataFromWheelSensors(): void {
      
  }
  getEngineType(): void {
      
  }
  getDieselSensorData(): void {
      throw new Error('Not a diesel vehicle')
  }
}
class Truck extends Vehicle {
  constructor() {
    super();
  }
  getDataFromWheelSensors(): void {
      
  }
  getEngineType(): void {
      
  }
  getDieselSensorData(): void {
  }
}

//Here getDieselSensorData is not eligible for bike but it still will carry that method since it extends the Vehicle class. This is violation of 
//Liskov substitution which states "derived classes can be substituted for their base class without altering the behavior of the program".
//To fix this i can simple create interfaces for bike and truck and remove the inheritace.

interface TruckDetails{
    getDataFromWheelSensors():void
    getEngineType():void
    getDieselSensorData():void
}
interface BikeDetails{
    getDataFromWheelSensors():void
    getEngineType():void
}

class BikeInfoProvider implements BikeDetails  {
    constructor() {
    }
    getDataFromWheelSensors(): void {
        
    }
    getEngineType(): void {
        
    }
  }
class TruckInfoProvider implements TruckDetails {
    constructor() {
    }
    getDataFromWheelSensors(): void {
        
    }
    getEngineType(): void {
        
    }
    getDieselSensorData(): void {
    }
  }