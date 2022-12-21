import imagen from '../../public/img/nosotros.jpg'
import styles from '~/styles/nosotros.css'

export function meta(){
    return({
      title:'GuitarLa - Sobre Nosotros',
      descripcion:'Venta de guitarras, blog de musica'

    })
}

export function links(){
  return[
    {
      rel:'stylesheet',
      href:styles
    },
    {
      rel:'preload',
      href:imagen,
      as:'image'
    }
  ]
}

function  Nosotros(){
  return (
    <main className="contenedor nosotros">
      <h2 className="heading">Nosotros</h2>
      <div className="contenido">
        <img src={imagen} alt="imagen sobre nosotros" />
        <div>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis dolorem minus blanditiis ullam accusamus vero, deleniti distinctio repellat id animi?Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem iure voluptates neque commodi blanditiis est modi labore optio, dolorum unde.</p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis dolorem minus blanditiis ullam accusamus vero, deleniti distinctio repellat id animi?Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem iure voluptates neque commodi blanditiis est modi labore optio, dolorum unde.</p>
        </div>

      </div>
    </main>
  )
}

export default Nosotros
