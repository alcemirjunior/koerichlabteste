package alcemirjunior.github.klab.products;

import alcemirjunior.github.klab.products.exceptions.DatabaseException;
import alcemirjunior.github.klab.products.exceptions.ResourceNotFoundException;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import javax.persistence.EntityNotFoundException;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public record ProductService(ProductRepository productRepository) {

    public List<ProductDTO> findAll() {
        return productRepository.findAll().stream().map(ProductDTO::new).collect(Collectors.toList());
    }

    public Page<ProductDTO> findAllPaged(PageRequest pageRequest) {
        return productRepository.findAll(pageRequest).map(ProductDTO::new);
    }

    public ProductDTO findById(Long id) {
        Optional<Product> obj = productRepository.findById(id);
        Product entity = obj.orElseThrow(() -> new ResourceNotFoundException(String.format("Entity not found [ ID : %d ]", id)));
        return new ProductDTO(entity);
    }

    public ProductDTO insert(ProductDTO dto) {
        Product product = Product.builder()
                .name(dto.name())
                .quantity(dto.quantity())
                .defect(dto.defect())
                .value(dto.value())
                .imageUrl(dto.imageUrl())
                .build();
        product = productRepository.save(product);
        return new ProductDTO(product);
    }

    public ProductDTO update(Long id, ProductDTO dto) {
        try {
            Product entity = productRepository.getReferenceById(id);
            entity.setName(dto.name());
            entity.setQuantity(dto.quantity());
            entity.setDefect(dto.defect());
            entity.setValue(dto.value());
            entity.setImageUrl(dto.imageUrl());
            entity = productRepository.save(entity);
            return new ProductDTO(entity);
        } catch (EntityNotFoundException e) {
            throw new ResourceNotFoundException(String.format("Entity not found [ ID : %d ]", id));
        }

    }

    public void delete(Long id) {
        try {
            productRepository.deleteById(id);
        } catch (EmptyResultDataAccessException e) {
            throw new ResourceNotFoundException(String.format("Entity not found [ ID : %d ]", id));
        } catch (DataIntegrityViolationException e) {
            throw new DatabaseException("Integrity violation");
        }
    }

}
