import { createAsyncThunk } from "@reduxjs/toolkit";
import ApiServices from "../_services/ApiService";
import { IArticle } from "../_types/actionType";

export const fetchArticles = createAsyncThunk<IArticle[], void>(
  "articles/fetchArticles",
  async (args, { getState }) => {
    // Check if data is already in the Redux store
    const { articles } = (getState() as any).articles;
    if (articles?.length) {
      return articles;
    }

    const response = await ApiServices.get("/assignment/articles");
    return response as IArticle[];
  }
);

export const fetchArticleDetails = createAsyncThunk(
  "articles/fetchArticleDetails",
  async (articleId: string) => {
    const response = await ApiServices.get(`/assignment/articles/${articleId}`);
    return response as IArticle;
  }
);
