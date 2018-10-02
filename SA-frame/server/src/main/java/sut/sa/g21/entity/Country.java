package sut.sa.g21.entity;
import javax.persistence.*;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import lombok.*;

@Entity
@Getter @Setter
@Table(name = "Country")
public class Country{
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private @NonNull long countryId;
    private @NonNull String countryName;
    
    public Country(){}
    public Country(String name){
        this.countryName = name;
    }    
    public Country(long countryId){
        this.countryId = countryId;
    } 
}