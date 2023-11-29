class Pokemon{
    constructor(HP,ataque,defensa){
        this.HP = HP;
        this.ataque = ataque;
        this.defensa = defensa;
        this.movimiento = "";
        this.nivel = 1;
        this.tipo = "";
    }
    fight(){
        if (this.movimiento == ""){
            console.log("No se especifica movimiento")
        }
        else {
            console.log("flying")
        }
    }
    canFly(){
        if(!this.tipo){
            console.log("Tipo no especificado")
        }
        else return this.tipo.includes("flying")
    }
}

class Charizard extends Pokemon{
        constructor(HP, ataque, defensa, movimiento){
        super(HP,ataque,defensa)
        this.movimiento = movimiento
        this.tipo = "flying"
    }

    fight(){
        if(this.movimiento){
            console.log(`Charizard esta usando el movimiento: ${this.movimiento}`)
            return this.movimiento
        }
        else throw new Error("Movimiento no especificado")
    }
}

p = new Pokemon(10,10,10)
p.fight()
p.canFly()
p.tipo = "flying"
p.movimiento = "Air"
p.fight()
p.canFly()