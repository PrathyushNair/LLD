import { Car } from "./car";
import { Bike } from "./bike";
import { Truck } from "./truck";
import { VehicleEnum } from "./enums/vehicleEnums";
interface VehicleFactoryInterface {
  getVehicle: (type: string, lisenceNumber: string) => Car | Bike | Truck;
}
export class VehicleFactory implements VehicleFactoryInterface {
  constructor() {}
  getVehicle(type: string, lisenceNumber: string) {
    switch (type) {
      case VehicleEnum.CAR:
        return new Car(lisenceNumber);
      case VehicleEnum.BIKE:
        return new Bike(lisenceNumber);
      case VehicleEnum.TRUCK:
        return new Truck(lisenceNumber);
      default:
        return new Car(lisenceNumber);
    }
  }
}
