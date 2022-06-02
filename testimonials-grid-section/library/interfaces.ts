export interface PostInterface {
  imageUrl?: string,
  username?: string,
  achievement?: string,
  postTitle?: string,
  postMessage?: string,
  isLight?: boolean,
  backgroundColor?: string
}

export interface DataApiInterface {
  dataApi: PostInterface[]
}