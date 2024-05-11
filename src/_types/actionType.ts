export interface IArticle {
  id: string;
  title: string;
  summary: string;
  fullText?: string;
}

export interface IArticleState {
  articles: IArticle[];
  selectedArticle: IArticle | null;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}
