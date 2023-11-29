# Practica calificada 4
## Parte 2
Implementacion de la clase `Pokemon`:

```js
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
        throw new Error("No se especifica movimiento")
    }
    canFly(){
        if(!this.tipo){
            throw new Error("Tipo no especificado")
        }
        else return this.tipo.includes("flying")
    }
}
```

Implementacion de la clase `Charizard` heredada de `Pokemon`.

```js
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
```
## Parte 3(principio de inversion)

Tenemos el siguiente fragmento de codigo:

```ruby
class CurrentDay
    def initialize
        @date = Date.today
        @schedule = MonthlySchedule.new(@date.year,@date.month)
    end
    def work_hours
        @schedule.work_hours_for(@date)
    end
    def workday?
        !@schedule.holidays.include?(@date)
    end
end
```

**¿Cuál es el problema con este enfoque dado, cuando quieres probar el metodo workday?.**

Un problema que tiene el metodo `workday` es `holidays`, no se definio ese metodo, por lo que marcaría un error.
