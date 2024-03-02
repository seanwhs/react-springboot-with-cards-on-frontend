//Tutor.java
package tutorial.backend.model;
import java.util.List;
import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Table(name = "tbl_tutor")
public class Tutor {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String firstName;
    private String lastName;
    private String credential;
    
    @JsonBackReference
    @OneToMany(mappedBy = "tutor")
    private List<Tutorial> tutorial;

    public Tutor(String firstName, String lastName, String credential, List<Tutorial> tutorial) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.credential = credential;
        this.tutorial = tutorial;
    }
    
    

}
