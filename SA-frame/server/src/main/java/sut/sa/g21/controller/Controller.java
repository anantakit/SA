package sut.sa.g21.controller;
import java.util.Collection;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import sut.sa.g21.entity.Classification;
import sut.sa.g21.entity.Country;
import sut.sa.g21.entity.Product;
import sut.sa.g21.entity.Type;
import sut.sa.g21.repository.ClassificationRepository;
import sut.sa.g21.repository.CountryRepository;
import sut.sa.g21.repository.ProductRepository;
import sut.sa.g21.repository.TypeRepository;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class Controller{
    @Autowired private ClassificationRepository classificationRepository;
    @Autowired private ProductRepository productRepository;
    @Autowired private CountryRepository countryRepository;
    @Autowired private TypeRepository typeRepository;

    // --------------- Classification ------------------

    @GetMapping("/Classification")
    public Collection<Classification> classification(){
        return classificationRepository.findAll();
    }
    @GetMapping("/Classification/{classID}")
    public Optional<Classification> takeinClassificationByid(@PathVariable Long classID ){
        return classificationRepository.findById(classID);
    }
    // ---------------  Product ---------------

    @GetMapping("/Product")
    public Collection<Product> product(){
        return productRepository.findAll();
    }
    
    @GetMapping("/Product/{productID}")
    public Optional<Product> takeinProductByid(@PathVariable Long productID ){
        return productRepository.findById(productID);
    }

     // --------------- Country --------------

     @GetMapping("/Country")
     public Collection<Country> Country(){
         return countryRepository.findAll();
     }
     @GetMapping("/Country/{countryID}")
     public Optional<Country> takeinCountryByid(@PathVariable Long countryID ){
         return countryRepository.findById(countryID);
     }

    // --------------- Type --------------
    @GetMapping("/Type")
    public Collection<Type> Type(){
        return typeRepository.findAll();
    }

    @GetMapping("/Type/{typeID}")
    public Optional<Type> takeinTypeByid(@PathVariable Long typeID ){
        return typeRepository.findById(typeID);
    }
}
