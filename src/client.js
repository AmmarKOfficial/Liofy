import {createClient} from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
    projectId: import.meta.env.VITE_PROJECT_ID,
    dataset: 'production',
    useCdn: true, // set to `false` to bypass the edge cache
    apiVersion: import.meta.env.VITE_API_VERSION, // use current date (YYYY-MM-DD) to target the latest API version
    token: import.meta.env.VITE_REACT_APP_SANITY_TOKEN // Only if you want to update content with the client
  })


  const builder = imageUrlBuilder(client)

  export function urlFor(source) {
    return builder.image(source)
  }