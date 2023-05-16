import http from "../http-common";

class QuizDataService {
  getAll() {
    return http.get("/qui");
  }

  get(id) {
    return http.get(`/qui/${id}`);
  }

  create(data) {
    return http.post("/qui", data);
  }

  update(id, data) {
    return http.put(`/qui/${id}`, data);
  }

  delete(id) {
    return http.delete(`/qui/${id}`);
  }

  deleteAll() {
    return http.delete(`/qui`);
  }

  findByTitle(title) {
    return http.get(`/qui?title=${title}`);
  }
}
export default new QuizDataService();
