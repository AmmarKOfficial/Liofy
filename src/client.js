import {createClient} from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
    projectId: 'ro78egwa',
    dataset: 'production',
    useCdn: true, // set to `false` to bypass the edge cache
    apiVersion: '2023-05-03', // use current date (YYYY-MM-DD) to target the latest API version
    token: 'skjcqMLXMl2VrPBE6g0GB9m2KwOupNpmKHGUzzjtbFJCWwxRP7nCnF7loAmQnuTI82ubZtW2hUAUn6rO3Cs5P9rB5xcg1bkvbSKoWZBXzkPRFlGgt5IetgDpQJmRLbThbXEhk6aOyTNe7Cu5AKUml4wm4L0JrSHZ1EprtUFEubdf9nGUfeMd' // Only if you want to update content with the client
  })


  const builder = imageUrlBuilder(client)

  export function urlFor(source) {
    return builder.image(source)
  }