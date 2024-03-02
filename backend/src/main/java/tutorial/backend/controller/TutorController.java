//TutorController.java
package tutorial.backend.controller;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import tutorial.backend.model.Tutor;
import tutorial.backend.repository.TutorRespository;
import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api")
public class TutorController {

    private final TutorRespository tutorRepository;

    public TutorController(TutorRespository tutorRepository) {
        this.tutorRepository = tutorRepository;
    }

    @GetMapping("/tutors")
    public ResponseEntity<List<Tutor>> getAllTutors() {
        List<Tutor> tutors = tutorRepository.findAll();
        return new ResponseEntity<>(tutors, HttpStatus.OK);
    }

    @GetMapping("/tutors/{id}")
    public ResponseEntity<Tutor> getTutorById(@PathVariable Long id) {
        Optional<Tutor> tutorOptional = tutorRepository.findById(id);
        return tutorOptional.map(tutor -> new ResponseEntity<>(tutor, HttpStatus.OK))
                             .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @PostMapping("/tutors")
    public ResponseEntity<Tutor> createTutor(@RequestBody Tutor tutor) {
        Tutor savedTutor = tutorRepository.save(tutor);
        return new ResponseEntity<>(savedTutor, HttpStatus.CREATED);
    }

    @PutMapping("/tutors/{id}")
    public ResponseEntity<Tutor> updateTutor(@PathVariable Long id, @RequestBody Tutor tutor) {
        if (!tutorRepository.existsById(id)) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        tutor.setId(id);
        Tutor updatedTutor = tutorRepository.save(tutor);
        return new ResponseEntity<>(updatedTutor, HttpStatus.OK);
    }

    @DeleteMapping("/tutors/{id}")
    public ResponseEntity<HttpStatus> deleteTutor(@PathVariable Long id) {
        if (!tutorRepository.existsById(id)) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        tutorRepository.deleteById(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
