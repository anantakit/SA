package sut.sa.g21.entity;
import javax.persistence.*;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import lombok.*;

@Entity
@Getter @Setter
@Table(name = "TypeProduct")
public class Type{
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private @NonNull long typeId;
    private @NonNull String typeName;
    
    protected Type(){}
    public Type(String typeName){
        this.typeName = typeName;
    }
    public Type(long typeId){
        this.typeId = typeId;
    }   
}