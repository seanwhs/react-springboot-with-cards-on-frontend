//Tutorial.java
package tutorial.backend.model;
import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Table(name="tbl_tutorial")
public class Tutorial {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

	private String title;
	private String description;
	private boolean published;
    
    @JsonBackReference
    @ManyToOne
    @JoinColumn(name="tutor_id")
    private Tutor tutor;

    public Tutorial(String title, String description, boolean published, Tutor tutor) {
        this.title = title;
        this.description = description;
        this.published = published;
        this.tutor = tutor;
    }

    
}
