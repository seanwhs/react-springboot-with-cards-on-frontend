package tutorial.backend;

import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;
import tutorial.backend.model.Tutorial;
import tutorial.backend.model.Tutor;
import tutorial.backend.repository.TutorRespository;
import tutorial.backend.repository.TutorialRepository;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Component
public class TestDataLoader implements CommandLineRunner {

    private final TutorialRepository tutorialRepository;
    private final TutorRespository tutorRepository;

    public TestDataLoader(TutorialRepository tutorialRepository, TutorRespository tutorRepository) {
        this.tutorialRepository = tutorialRepository;
        this.tutorRepository = tutorRepository;
    }

    @Override
    public void run(String... args) throws Exception {
        loadTestData();
    }

    private void loadTestData() {
        List<Tutorial> emptyTutorialList = new ArrayList<>();

        Tutor tutor1 = new Tutor("John", "Doe", "Ph.D.", emptyTutorialList);
        Tutor tutor2 = new Tutor("Jane", "Smith", "M.Sc.", emptyTutorialList);
        Tutor tutor3 = new Tutor("Alice", "Johnson", "B.Sc.", emptyTutorialList);

        List<Tutor> tutors = Arrays.asList(tutor1, tutor2, tutor3);
        tutorRepository.saveAll(tutors);

        Tutorial tutorial1 = new Tutorial("Spring Boot Tutorial", "Introduction to Spring Boot", true, tutor1);
        Tutorial tutorial2 = new Tutorial("RESTful API with Spring Boot", "Building RESTful APIs with Spring Boot",
                true, tutor2);
        Tutorial tutorial3 = new Tutorial("Spring Security", "Securing your Spring Boot application", false, tutor3);

        List<Tutorial> tutorials = Arrays.asList(tutorial1, tutorial2, tutorial3);
        tutorialRepository.saveAll(tutorials);
    }
}
