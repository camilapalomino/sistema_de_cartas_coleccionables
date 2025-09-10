class Carta {
    public nombre: string;
    private ataque: number;
    private defensa: number;
    public readonly id: number;
    protected rareza: string;

constructor(nombre: string, ataque: number, defensa: number, id: number){
    this.nombre = nombre;
    this.ataque = ataque;
    this.defensa = defensa;
    this.id = id;
}

//metodos

public mostrarInfo(): string{
    return `Carta: $(this.nombre) defensa: $(this.defensa)`; 
}
public 
}

