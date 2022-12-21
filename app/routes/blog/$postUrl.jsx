import { useLoaderData } from '@remix-run/react';
import { getPost } from '~/models/post.server'
import { formatearFecha } from '~/utils/helpers'



export function meta({ data }) {
  if (!data) {
    return {
      title: 'GuitarLA - Entrada No Encontrada',
      descripcion: 'Guitarras , venta de guitarras , Entrada No Encontrada'
    }
  }
  return {
    title: `GuitarLA - ${data.data[0].attributes.titulo}`,
    descripcion: `Guitarras , venta de guitarras , entrada ${data.data[0].attributes.titulo}`
  }
}



export async function loader({ params }) {

  const { postUrl } = params;
  const post = await getPost(postUrl)
  if (post.data.length === 0) {
    throw new Response('', {
      status: 404,
      statusText: ' Entrada no encontrada'
    })
  }
  return post
}

export default function Post() {

  const post = useLoaderData()
  const { titulo, contenido, imagen, publishedAt } = post?.data[0]?.attributes
  return (
    <article className=" post mt-3">

      <img src={imagen?.data?.attributes?.url} alt={`imagen blog ${titulo}`} className="imagen" />
      <div className="contenido">
        <h3>{titulo}</h3>
        <p className="fecha">{formatearFecha(publishedAt)}</p>
        <p className="texto">{contenido}</p>
      </div>
    </article>
  )
}
