import { VehicleEnum } from "./enums/vehicleEnums";
import { ParkingSpot } from "./parkingSpot";

export class ParkingLevel {
  parkingLevelNumber: string;
  parkingSlotsDistribution: Record<string, number>;
  parkingSpots: Array<ParkingSpot>;
  constructor(
    parkingLevelNumber: string,
    parkingSlotsDistribution: Record<
      VehicleEnum.BIKE | VehicleEnum.CAR | VehicleEnum.TRUCK,
      number
    >
  ) {
    this.parkingLevelNumber = parkingLevelNumber;
    this.parkingSlotsDistribution = parkingSlotsDistribution;
    this.parkingSpots = this.initialiseSpots(this.parkingSlotsDistribution);
  }
  private initialiseSpots(parkingSlotsDistribution: Record<string, number>) {
    let spots: ParkingSpot[] = [];
    const vehicleTypes = Object.values(VehicleEnum) as VehicleEnum[];
    for (let key of vehicleTypes) {
      for (let i = 0; i < parkingSlotsDistribution[key]; i++) {
        spots.push(
          new ParkingSpot(`${this.parkingLevelNumber}-${key}-${i}`, key)
        );
      }
    }
    return spots;
  }
  parkOnLevel(
    vehicleType: VehicleEnum.BIKE | VehicleEnum.CAR | VehicleEnum.TRUCK,
    lisenceNumber:string
  ) {
    let getAlSpotsForVehicle = this.parkingSpots.filter(
      (el) => el.vehicleType == vehicleType && el.parkedVehicle == null
    );
    if(getAlSpotsForVehicle.length){
       let isParked= getAlSpotsForVehicle[0].parkAVehicle(lisenceNumber,vehicleType)
       if(isParked){
        console.log(`Vehicle parked on spot ${getAlSpotsForVehicle[0].getParkingSpotId()}`)
        return getAlSpotsForVehicle[0].getParkingSpotId()
       }
       else{
        throw new Error('Vehicle could not be parked')
       }
    }
    else{
        throw new Error('Vehicle parking not available at this time')
    }
  }
  unParkOnLevel(parkingSpotId: string) {
    let spot=this.parkingSpots.filter((el)=>el.parkingSpotId==parkingSpotId)
    if(spot){
        spot[0].unParkAVehicle()
    }
    else{
        throw new Error('Error while unparking')
    }
  }
}
