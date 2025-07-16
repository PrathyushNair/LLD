import { Singleton } from "./singleTon";

const first=new Singleton()
first.increament()
console.log(first.getCount())
first.increament()
console.log(first.getCount())

const singleTonInstance1=new Singleton()
const singleTonInstance2=new Singleton()
console.log(singleTonInstance1==singleTonInstance2)
