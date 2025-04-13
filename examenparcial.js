//sistema de libreria en consola, prueba parcial II 

let catalogo = []

function GenerarMenu(){
    console.log(`
        Bienvenido al Menu principal
        1. Agregar Libro
        2. Mostrar el catálogo
        3. Buscar libro por título
        4. Eliminar libro
        5. Ver las estadísticas
        6. Ordenar los Libros
        7. Editar los libros
        8. Salir
    `)
}


function agregarUnlibro(){
    let titulo = prompt("Coloca el Título:")
    let autor = prompt("coloca el nombre del autor")
    let precio = ParseFloat(prompt("coloca el precion del libro"))
    let año = ParseInt(prompt("coloca el año de su estreno:"))

    catalogo.push({titulo, autor, precio, año})
    console.log("El libro ha sido agregado exitosamente")
}


function MostrarelCatalogo(){
    if(catalogo.lenght === 0){
        console.log("El catálogo se encuentra vacío")
        return
    }
}

catalogo.forEach((libro, i) => {
    console.log(`${i + 1}. ${libro.titulo} - ${libro.autor} - $${libro.precio} - ${libro.anio}`)
  })


function buscarLibro(){
    let titulo = prompt("ingrese el titulo del libro: ").toLowerCase()
    let libro = catalogo.find(libro => libro.titulo.toLowerCase() === titulo)
if (libro){
    console.log((`${i + 1} ${libro.titulo}, ${libro.autor}, ${libro.precio}, ${libro.año}`))
}
else{
    console.log("no existe registro del libro")
    }
}


function eliminarLibro(){
    let titulo = prompt("ingrese el titulo del libro que desea eliminar: ").toLowerCase
    let index = catalogo.findIndex(l => l.titulo.toLowerCase() === titulo)
if (index !== -1){
    catalogo.splice(index, 1)
    console.log("El libro se ha eliminado correctamente")
}
else{
    console.log("No existe registro sobre el libro")
    }   
}


function estadisticas(){
    if (catalogo.lenght === 0){
        console.log("el catalogo está vacio")
    }
}

const total = catalogo.length
const promedio = catalogo.reduce((acc, l) => acc + l.precio, 0) / total
const masAntiguo = catalogo.reduce((a, b) => a.anio < b.anio ? a : b)
const masCaro = catalogo.reduce((a, b) => a.precio > b.precio ? a : b)

console.log(`Estadísticas:
    Total de libros: ${total}
    Precio promedio: ${promedio.toFixed(2)}
    Libro más antiguo: ${masAntiguo.titulo}, (${masAntiguo.anio})
    Libro más caro: ${masCaro.titulo}, (${masCaro.precio})
    `)


function ordenarlosLibros(){
    console.log(`ordenar por:
        1. precio ascendente:
        2. precio descentente:
        3. año de publicación: 
    `)
const opcion = prompt("opcion: ")
        switch (opcion){
            case 1:
                catalogo.sort((a, b) => a.precio, b.precio)
        break
            case 2:
                catalogo.sort((a, b) => b.precio, a.precio)
        break
            case 3:
                catalogo.sort((a, b) => a.año, b.año)
        break
            default:
                console.log("ERROR, opcion invalidad")
        }
}


function editarunLibro(){
    let titulo = prompt("ingrese el titulo del libro que desea editar: ").toLowerCase
    let libro = catalogo.find(libro => libro.titulo.toLowerCase() === titulo)
    if(!libro){
        console.log("No existe registro del libro")
        return
    }
}


const nuevoTitulo = prompt(`Nuevo título (${libro.titulo}): `) || libro.titulo
const nuevoAutor = prompt(`Nuevo autor (${libro.autor}): `) || libro.autor
const nuevoPrecio = prompt(`Nuevo precio (${libro.precio}): `)
const nuevoAño= prompt(`Nuevo año (${libro.anio}): `)

libro.titulo = nuevoTitulo
  libro.autor = nuevoAutor
  libro.precio = nuevoPrecio ? parseFloat(nuevoPrecio) : libro.precio
  libro.año = nuevoAño ? parseInt(nuevoAño) : libro.año

  console.log("El libro se actualizo correctamente")


function iniciarApp(){
    let salir = false
    while (!salir){
        mostrarMenu()
    const opcion = prompt("Por favor, seleccione una opción:")
    switch ("opcion"){
        case 1:
            agregarUnlibro()
    break
        case 2:
            MostrarelCatalogo()
    break   
        case 3:
            buscarLibro()
    break
        case 4:
            eliminarLibro()
    break
        case 5:
            estadisticas()
    break
        case 6:
            ordenarlosLibros()
    break
        case 7:
            editarunLibro()
    break
        case 8:
            salir = true
        console.log("Muchas gracias por preferirnos")
    break
        default:
        console.log("ERROR, debe ingresar una opción válida")
    }
  }
}

iniciarApp() 