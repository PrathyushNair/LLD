
class Registery{
    private classMap=new Map
    private classToRegister:any
    private classKey:string
    constructor(classKey:string,classToRegister:any){
        this.classToRegister=classToRegister
        this.classKey=classKey
    }
    register(){
        if(!this.classMap.get(this.classKey)){
            this.classMap.set(this.classKey,this.classToRegister)
        }
    }
    create(key:string){
        const yourClass=this.classMap.get(key)
        return yourClass? new yourClass() :undefined
    }
}