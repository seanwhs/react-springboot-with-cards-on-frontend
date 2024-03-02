// tutor-service.js
import {http} from "./http-common";

class TutorDataService {
  getAll() {
    return http.get("/tutors");
  }

  get(id) {
    return http.get(`/tutors/${id}`);
  }

  create(data) {
    return http.post("/tutors", data);
  }

  update(id, data) {
    return http.put(`/tutors${id}`, data);
  }

  delete(id) {
    return http.delete(`/tutors/${id}`);
  }

  deleteAll() {
    return http.delete("/tutors");
  }

  findByFirstName(firstName) {
    return http.get(`?firstName=${firstName}`);
  }
}

export default new TutorDataService();
