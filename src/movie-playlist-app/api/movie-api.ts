import { Movie } from "../data-models/models"

export async function getSearchResults(
  query: string,
  page: number
): Promise<Movie[]> {
  const apiResponse = await fetch(
    `http://www.omdbapi.com/?apikey=85f6b945&s=${query}&type=movie&page=${page}`
  )
  const responseBody = await apiResponse.json()
  return responseBody["Search"] ?? []
}
