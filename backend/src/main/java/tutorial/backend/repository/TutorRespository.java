//TutorRespository.java
package tutorial.backend.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import tutorial.backend.model.Tutor;

public interface TutorRespository extends JpaRepository<Tutor, Long> {

}
