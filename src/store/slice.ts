import { createSlice } from "@reduxjs/toolkit";
import { fetchArticles, fetchArticleDetails } from "./action";
import { IArticleState } from "../_types/actionType";

const initialState: IArticleState = {
  articles: [],
  selectedArticle: null,
  status: "idle",
  error: null,
};

const articleSlice = createSlice({
  name: "articles",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticles.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchArticles.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.articles = action.payload;
      })
      .addCase(fetchArticles.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Failed to fetch articles";
      })
      .addCase(fetchArticleDetails.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchArticleDetails.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.selectedArticle = action.payload;
      })
      .addCase(fetchArticleDetails.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Failed to fetch article details";
      });
  },
});

export default articleSlice.reducer;
