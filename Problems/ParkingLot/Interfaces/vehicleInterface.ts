
export interface CarInterFace{
    type:string
    lisenceNumber:string
    getLisenceNumber:()=>string
    getVehicleDetails:()=>{lisenceNumber:string,vehicleType:string}
}
export interface BikeInterFace{
    type:string
    lisenceNumber:string
    getLisenceNumber:()=>string
    getVehicleDetails:()=>{lisenceNumber:string,vehicleType:string}
}
export interface TruckInterFace{
    type:string
    lisenceNumber:string
    getLisenceNumber:()=>string
    getVehicleDetails:()=>{lisenceNumber:string,vehicleType:string}
}