interface NewCardprops{
    img: string; 
    title: string ;
    description: string;
}

export const NewCard = ({ img, title, description }: NewCardprops) => {

    return (
        <section>
            <img src={ img } alt="" />
            
        </section>
    )
}

/*

let numero = 54;
numero = 567; CORRECTO
numero = 765; CORRECTO

const numero2 = 69;
numero2 = 87; INCORRECTO

string -> "Esto es un texto de prueba para la cadena de texto"
          "/route/public/images/banner.png"
          'https://www.google.com'
          423 <> '423'

number -> 435 
          647756
          84324
          54.75
    
    4 + 2 = 6
    12 - 4 = 8
    54 + '2' = '542'
    'Vanessa' + ' Agudelo Zuluga' = 'Vanessa Agudelo Zuluaga'
    '+57 ' + '301 697 23 11' = "+57 301 697 23 11"

boolean -> true o false


const sumarDosNumeros = ( numero1: number )

const carrito = {
    cuantosProductosTengo: 0
}

Agregar Carrito -> EJECUTAR -> sumarElProductoAlCarrito(1)



*/
























/*

// CODIGO:

const sumarElProductoAlCarrito = ( numero: number ) => {
    let carrito = 0;
    carrito = carrito + numero;
}

// CARRO -> 1

*/