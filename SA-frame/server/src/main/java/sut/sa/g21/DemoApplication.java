package sut.sa.g21;
import org.springframework.boot.ApplicationRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import sut.sa.g21.entity.Classification;
import sut.sa.g21.entity.Country;
import sut.sa.g21.entity.Product;
import sut.sa.g21.entity.Type;
import sut.sa.g21.repository.ClassificationRepository;
import sut.sa.g21.repository.CountryRepository;
import sut.sa.g21.repository.ProductRepository;
import sut.sa.g21.repository.TypeRepository;

@SpringBootApplication
public class DemoApplication {

	public static void main(String[] args) {
		SpringApplication.run(DemoApplication.class, args);
	}
	@Bean
    ApplicationRunner init(ProductRepository productRepository, TypeRepository typeRepository, CountryRepository countryRepository, ClassificationRepository classificationRepository) {
		return args -> {
			countryRepository.save(new Country("thai"));
			countryRepository.save(new  Country("Eng"));
			countryRepository.save(new  Country("china"));
			countryRepository.findAll().forEach(System.out::println);

			classificationRepository.save(new Classification("เครื่องเขียน"));
			classificationRepository.save(new Classification("เครื่องใช้ครัวเรือน"));
			classificationRepository.save(new Classification("เครื่องใช้ไฟฟ้า"));
			classificationRepository.findAll().forEach(System.out::println);

			typeRepository.save(new Type("สินค้าทั่วไป"));
			typeRepository.save(new Type("สินค้ามาใหม่"));
			typeRepository.save(new Type("สินค้าขายดี"));
			typeRepository.findAll().forEach(System.out::println);

			
			productRepository.save(new Product("ปากกา","เขียนเร็วมาก",20,"www.asdasdas.com",1,1,2));
			productRepository.save(new Product("หม้อหุงข้าว","หุงข้าวสนุกมาก",150,"www.weterh.com",2,2,1));
			productRepository.findAll().forEach(System.out::println);	
		};
		
	}
}
