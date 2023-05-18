import { Image, Text, Link } from 'react-bricks/frontend'

const ProductItem = () => (
  <div className="mb-7 w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow hover:shadow-lg dark:bg-gray-800 dark:border-gray-700">
    <Link href="#" className="flex justify-center h-48">
      <Image propName="productPic" alt="" imageClassName="p-8 rounded-t-lg" />
    </Link>
    <div className="px-5 pb-5">
      <Link href="#">
        <Text
          propName="productName"
          placeholder="Add Name..."
          renderBlock={(props) => (
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
              {props.children}
            </h5>
          )}
        />
      </Link>

      <div className="mt-2 flex">
        <div className="grow">
          <Text
            propName="productPrice"
            placeholder="$100"
            renderBlock={(props) => (
              <div className="grow text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                {props.children}
              </div>
            )}
          />
        </div>
        <button
          type="button"
          className="flex-none lg:border hover:border-black  focus:ring-4 focus:ring-black font-medium rounded-lg text-sm px-3 py-1 text-center  text-white bg-black dark:bg-white hover:dark:bg-gray-300 dark:text-black"
        >
          Order
        </button>
      </div>
    </div>
  </div>
)

ProductItem.schema = {
  name: 'product-item',
  label: 'Product',
  hideFromAddMenu: true,
  playgroundLinkLabel: 'View source code on Github',
  playgroundLinkUrl: '',

  getDefaultProps: () => ({
    productPic: '',
    productName: 'Product Name',
    productPrice: '$500',
  }),
}

export default ProductItem
