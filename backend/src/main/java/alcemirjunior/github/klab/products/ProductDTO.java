package alcemirjunior.github.klab.products;

import lombok.Builder;

import java.math.BigDecimal;

@Builder
public record ProductDTO(
        Long id,
        String name,
        Integer quantity,
        Integer defect,
        BigDecimal value,
        String imageUrl
) {

    ProductDTO(Product product) {
        this(
                product.getId(),
                product.getName(),
                product.getQuantity(),
                product.getDefect(),
                product.getValue(),
                product.getImageUrl()
        );
    }

}
