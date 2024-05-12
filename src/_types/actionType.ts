export interface IArticle {
  id: string;
  title: string;
  summary: string;
  fullText?: string;
}

export interface IArticleState {
  articles: IArticle[];
  selectedArticle: IArticle | null;
  loadingList: boolean;
  loadingDetails: boolean;
  error: string | null;
}
