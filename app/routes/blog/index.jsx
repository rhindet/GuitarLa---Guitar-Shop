import { getPosts } from '~/models/post.server'
import { useLoaderData } from '@remix-run/react'
import ListadoPost from '~/components/listado-post'



export function meta() {
    return {
        title: 'GuitarLA - Nuestro Blog',
        descripcion: 'GuitarLA, Blog de musica y venta de guitarras'
    }
}

export async function loader() {
    const posts = await getPosts()
    return posts.data
}


function Blog() {
    const posts = useLoaderData()
    return (
        <ListadoPost
            posts={posts}
        />
    )
}

export default Blog
