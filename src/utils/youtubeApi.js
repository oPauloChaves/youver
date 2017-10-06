const API_URL = "https://www.googleapis.com/youtube/v3/search"

export default function searchYouTube({
  key,
  q = "",
  type = "video",
  maxResults = 10,
  part = "snippet",
}) {
  let queryString = [
    `type=${type}`,
    `q=${q}`,
    `part=${part}`,
    `maxResults=${maxResults}`,
    `key=${key}`,
  ].join("&")

  return fetch(`${API_URL}/?${queryString}`, {method: "GET"}).then(response =>
    response.json(),
  )
}
