import { Text, Repeater } from 'react-bricks/frontend'

const Testimonials = () => (
  <div className="flex justify-center">
    <div className="px-2 md:px-8 flex flex-col items-center w-full md:max-w-[90%] lg:max-w-[80%] xl:max-w-[70%]">
      <div className="mb-7 xs:px-8">
        <Text
          propName="headerTitle"
          placeholder="Add Header Title"
          renderBlock={(props) => (
            <h2 className="my-4 text-4xl font-extrabold dark:text-white">
              {props.children}
            </h2>
          )}
        />
        <div className="grid lg:grid-cols-2 border border-gray-200 rounded-lg shadow-sm dark:border-gray-700">
          <Repeater propName="testimonials" />
        </div>
      </div>
    </div>
  </div>
)

Testimonials.schema = {
  name: 'Testimonials',
  label: 'Testimonials',
  category: 'mycomponents',
  tags: ['testimonials'],
  playgroundLinkLabel: 'View source code on Github',
  playgroundLinkUrl: '',
  previewImageUrl: `/bricks-preview-images/Testimonials.png`,

  getDefaultProps: () => ({
    headerTitle: 'Testimonials',
    testimonials: [
      {
        title: 'Very easy this was to order',
        description:
          '" I love this watch! It\'s stylish, durable, and easy to use. And the best part is, I got it for a great price. Thanks for the amazing deal!"',
        name: 'Bonnie Green',
        position: 'Teacher at MIT',
        profilePic: {
          src: 'https://www.gravatar.com/avatar/00000000000000000000000000000000?d=robohash&f=y',
        },
      },
      {
        title: 'Solid foundation for any style',
        description:
          '"This watch is a steal! It looks expensive, but it was very affordable. It has all the features I need, and it keeps perfect time. I\'m so happy with my purchase!"',
        name: 'Roberta Casas',
        position: 'CEO at Dropbox',
        profilePic: {
          src: 'https://www.gravatar.com/avatar/00000000000000000000000000000000?d=retro&f=y',
        },
      },
      {
        title: 'Mindblowing watch',
        description:
          '"Aesthetically, the well designed watch is beautiful and will undoubtedly level up in any place."',
        name: 'Jese Leos',
        position: 'Content Creator at YouTube',
        profilePic: '',
      },
      {
        title: 'Efficient with class',
        description:
          '"This watch is fantastic! It\'s modern, sophisticated, and accurate. It has a smooth movement, a bright backlight, and a sturdy case. It was a great buy, and I highly recommend it!"',
        name: 'Joseph McFall',
        position: 'CTO at Google',
        profilePic: '',
      },
    ],
  }),
  repeaterItems: [
    {
      name: 'testimonials',
      itemType: 'testimonial-item',
      itemLabel: 'Testimonial',
      min: 3,
      max: 9,
    },
  ],
}

export default Testimonials
