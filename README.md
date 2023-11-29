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

## Rails avanzado

Tenemos el siguiente codigo:

```ruby
class MoviesController < ApplicationController
  def index
    @movies = Movie.all
  end
  def show
    id = params[:id] # retrieve movie ID from URI route
    @movie = Movie.find(id) # look up movie by unique ID
    # will render render app/views/movies/show.html.haml by default
  end
  def new
    @movie = Movie.new
  end 
  def create
    if (@movie = Movie.create(movie_params))
      redirect_to movies_path, :notice => "#{@movie.title} created."
    else
      flash[:alert] = "Movie #{@movie.title} could not be created: " +
        @movie.errors.full_messages.join(",")
      render 'new'
    end
  end
  def edit
    @movie = Movie.find params[:id]
  end
  def update
    @movie = Movie.find params[:id]
    if (@movie.update_attributes(movie_params))
      redirect_to movie_path(@movie), :notice => "#{@movie.title} updated."
    else
      flash[:alert] = "#{@movie.title} could not be updated: " +
        @movie.errors.full_messages.join(",")
      render 'edit'
    end
  end
  def destroy
    @movie = Movie.find(params[:id])
    @movie.destroy
    redirect_to movies_path, :notice => "#{@movie.title} deleted."
  end
  private
  def movie_params
    params.require(:movie)
    params[:movie].permit(:title,:rating,:release_date)
  end
end

```

Piden modificar el metodo `edit` y `update` para críticas.

```ruby
def edit
    @movie = Movie.find params[:id]
  end
  def update
    @movie = Movie.find params[:id]
    if (@movie.update_attributes(movie_params))
      redirect_to movie_path(@movie), :notice => "#{@movie.title} updated."
    else
      flash[:alert] = "#{@movie.title} could not be updated: " +
        @movie.errors.full_messages.join(",")
      render 'edit'
    end
  end
```

El metodo `edit` se mantiene, lo que se modifica es el metodo `update`:
```ruby
    def update
    @movie = Movie.find params[:id]
    if (@movie.update_attributes(movie_params))
      redirect_to movie_path(@movie), :notice => "#{@movie.title} updated."
    else
      flash[:alert] = "#{@movie.title} could not be updated: " +
        @movie.errors.full_messages.join(",")
      render 'edit'
    end
  end
```

## Parte 4
### Pregunta 1

Creacion de un constructor en JavaScript para `User`:
```js
class User{
    constructor(name,password) {
        this.name = name;
        this.password = password;
    }
    checkPassword(possible_password) {
        if (this.password == possible_password) {
            console.log("Password correcto")
        }
    }
}
```