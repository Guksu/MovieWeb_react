import axios from "axios";
//axios는 api의 공통적인부분을 반복해서 코딩하지 않게 도와준다.

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: "22cf32d3eba721fd6f6b45618c7e52a5",
    language: "en-US",
  },
});

// "/tv/popular"는 절대경로로 baseURL이 /tv/popular가된다.
// 아래의 코드는 상대경로

export const moviesApi = {
  nowPlaying: () => api.get("movie/now_playing"),
  upcoming: () => api.get("movie/upcoming"),
  popular: () => api.get("movie/popular"),
  movieDetail: (id) =>
    api.get(`movie/${id}`, {
      params: {
        append_to_response: "videos",
      },
    }),
  search: (term) =>
    api.get("search/movie", {
      params: {
        query: encodeURIComponent(term),
      },
    }),
};

export const tvApi = {
  topRated: () => api.get("tv/top_rated"),
  popular: () => api.get("tv/popular"),
  airingToday: () => api.get("tv/airing_today"),
  showDetail: (id) =>
    api.get(`tv/${id}`, {
      params: {
        append_to_response: "videos",
      },
    }),
  search: (term) =>
    api.get("search/tv", {
      params: {
        query: encodeURIComponent(term),
      },
    }),
};

export default api;
