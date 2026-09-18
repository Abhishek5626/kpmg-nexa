import { apiClient } from "./client";

export const dashboardApi = {
  getDashboard: () => apiClient.get("/dashboard"),
  askInsight: (question) => apiClient.post("/insights/query", { question })
};