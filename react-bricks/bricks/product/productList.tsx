import { Text, Repeater } from 'react-bricks/frontend'

const ProductList = () => (
  <div className="flex justify-center">
    <div className="px-2 md:px-8 flex flex-col items-center w-full md:max-w-[90%] lg:max-w-[80%] xl:max-w-[70%]">
      <div className="mb-7">
        <Text
          propName="headerTitle"
          placeholder="Add Header Title"
          renderBlock={(props) => (
            <h2 className="my-4 text-4xl font-extrabold dark:text-white">
              {props.children}
            </h2>
          )}
        />
        <div className="mb-32 grid gap-3 lg:mb-0 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 text-center lg:text-left">
          <Repeater propName="products" />
        </div>
      </div>
    </div>
  </div>
)

ProductList.schema = {
  name: 'ProductList',
  label: 'ProductList',
  category: 'mycomponents',
  tags: ['product list', 'products'],
  playgroundLinkLabel: 'View source code on Github',
  playgroundLinkUrl: '',
  previewImageUrl: `/bricks-preview-images/ProductList.png`,

  getDefaultProps: () => ({
    headerTitle: 'Products',
    products: [
      {
        productPic: '',
        productName: 'Apple Watch Series',
        productPrice: '$599',
      },
    ],
  }),
  repeaterItems: [
    {
      name: 'products',
      itemType: 'product-item',
      itemLabel: 'Product',
      min: 8,
      max: 10,
    },
  ],
}

export default ProductList
