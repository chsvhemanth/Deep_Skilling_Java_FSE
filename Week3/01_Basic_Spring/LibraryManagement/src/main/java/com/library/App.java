package com.library;
import com.library.service.BookService;
import com.library.repository.BookRepository;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
/**
 * Hello world!
 *
 */

public class App {
    public static void main(String[] args) {
		ApplicationContext context = new ClassPathXmlApplicationContext("applicationContext.xml");
        BookService bookService = (BookService) context.getBean("bookService");
        bookService.addBook("The Great Gatsby");
        BookRepository bookRepository = (BookRepository) context.getBean("bookRepository");
        bookRepository.save("The Great Gatsby");
    }
}