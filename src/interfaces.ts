
export interface Credentials {
  user: string
  password: string
}

export interface Article {
  name: string
  price: string
  description: string
}

export interface DataContext {
  articles: Article[],
  setArticles: (_value: Article[]) => void
}

export interface Employee {
  birthday: number
  id: number
  last_name: string
  name: string
}

export interface FileInputData {
  fileName: string
  data: any
}
