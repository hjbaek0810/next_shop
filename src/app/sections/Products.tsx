import Card from '@components/Card';

export type ProductsPropsType = {
  name: string;
  originalPrice: number;
  discountRate?: number;
  src: string;
  redirectTo: string;
};

const Products = ({ products }: { products: Array<ProductsPropsType> }) => {
  return (
    <Card>
      {products.map(item => (
        <Card.Item key={item.name}>
          <Card.Image src={item.src} redirectTo={item.redirectTo} />
          <Card.Name>{item.name}</Card.Name>
          <Card.Price
            originalPrice={item.originalPrice}
            discountRate={item.discountRate}
          />
        </Card.Item>
      ))}
    </Card>
  );
};

export default Products;
