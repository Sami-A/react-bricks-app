import { Image, Text } from 'react-bricks/frontend'

const ContactUs = () => (
  <div className="flex justify-center">
    <div className="px-2 md:px-8 flex flex-col justify-center items-center w-full md:max-w-[90%] lg:max-w-[80%] xl:max-w-[70%]">
      <div className="mb-7">
        <Text
          renderBlock={(props) => (
            <h2 className="my-4 text-4xl font-extrabold dark:text-white">
              {props.children}
            </h2>
          )}
          placeholder="Add Header Title"
          propName="headerTitle"
        />

        <div className="grid grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg lg:grid-cols-2 md:px-12 lg:px-16 xl:px-32 bg-gray-50 shadow dark:bg-gray-800 dark:text-gray-100">
          <div className="flex flex-col justify-between">
            <div className="space-y-2">
              <Text
                renderBlock={(props) => (
                  <h2 className="text-4xl font-bold leading-tight lg:text-5xl">
                    {props.children}
                  </h2>
                )}
                placeholder="Add title"
                propName="title"
              />

              <Text
                renderBlock={(props) => (
                  <div className="dark:text-gray-400">{props.children}</div>
                )}
                placeholder="Add sub-title"
                propName="subTitle"
              />
            </div>
            <Image alt="" propName="image" imageClassName="p-6 h-52 md:h-64" />
          </div>
          <form className="space-y-6 ng-untouched ng-pristine ng-valid">
            <div>
              <Text
                renderBlock={(props) => (
                  <label className="text-sm">{props.children}</label>
                )}
                placeholder="Add label"
                propName="fullNameLable"
              />
              <input
                id="name"
                type="text"
                placeholder=""
                className="w-full p-3 rounded dark:bg-gray-800 border border-gray-200
                dark:border-gray-700"
              />
            </div>
            <div>
              <Text
                renderBlock={(props) => (
                  <label className="text-sm">{props.children}</label>
                )}
                placeholder="Add label"
                propName="emailLable"
              />
              <input
                id="email"
                type="email"
                className="w-full p-3 rounded dark:bg-gray-800 border border-gray-200
        dark:border-gray-700"
              />
            </div>
            <div>
              <Text
                renderBlock={(props) => (
                  <label className="text-sm">{props.children}</label>
                )}
                placeholder="Add label"
                propName="messageLable"
              />
              <textarea
                id="message"
                rows={3}
                className="w-full p-3 rounded dark:bg-gray-800 border border-gray-200
        dark:border-gray-700"
              ></textarea>
            </div>

            <Text
              renderBlock={(props) => (
                <button
                  type="button"
                  className="w-full lg:border hover:border-black  focus:ring-4 focus:ring-black font-medium rounded-lg text-sm px-4 py-2 text-center text-white bg-black dark:bg-white hover:dark:bg-gray-300 dark:text-black"
                >
                  {props.children}
                </button>
              )}
              placeholder="Add label"
              propName="button"
            />
          </form>
        </div>
      </div>
    </div>
  </div>
)

ContactUs.schema = {
  name: 'ContactUs',
  label: 'Custom Contact Us',
  previewImageUrl: `/bricks-preview-images/ContactUs.png`,
  category: 'mycomponents',
  getDefaultProps: () => ({
    headerTitle: 'Contact Us',
    title: 'Lets talk!',
    subTitle: 'Fill in the form to start a conversation.',
    image: '',
    fullNameLable: 'Full Name',
    emailLable: 'Email',
    messageLable: 'Message',
    button: 'Send Message',
  }),
}

export default ContactUs
