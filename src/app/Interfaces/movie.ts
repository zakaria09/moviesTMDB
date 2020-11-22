// movie interface with must used properties
export interface Movie {
  id: number,
  title: string,
  poster_path: string,
  isFavourite: boolean,
  vote_average: number,
  overview: string,
  release_date
}
