import { Image, types, Text } from 'react-bricks/frontend'

export interface TestimonialItemProps {
  withprofilePic?: boolean
}

const TestimonialItem: types.Brick<TestimonialItemProps> = ({
  withprofilePic,
}) => (
  <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200  md:border-r dark:bg-gray-800 dark:border-gray-700">
    <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
      <Text
        propName="title"
        placeholder="Title..."
        renderBlock={(props) => (
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            {props.children}
          </h3>
        )}
      />
      <Text
        propName="description"
        placeholder="Title..."
        renderBlock={(props) => <p className="my-4">{props.children}</p>}
      />
    </blockquote>
    <figcaption className="flex items-center justify-center space-x-3">
      {withprofilePic && (
        <Image
          propName="profilePic"
          alt=""
          aspectRatio={1}
          imageClassName="rounded-full w-9 h-9"
        />
      )}
      <div className="space-y-0.5 font-medium dark:text-white text-left">
        <Text
          propName="name"
          placeholder="Name..."
          renderBlock={(props) => <div>{props.children}</div>}
        />
        <Text
          propName="position"
          placeholder="Position..."
          renderBlock={(props) => (
            <div className="text-sm text-gray-500 dark:text-gray-400">
              {props.children}
            </div>
          )}
        />
      </div>
    </figcaption>
  </figure>
)

TestimonialItem.schema = {
  name: 'testimonial-item',
  label: 'Testimonial',
  hideFromAddMenu: true,
  playgroundLinkLabel: 'View source code on Github',
  playgroundLinkUrl: '',

  getDefaultProps: () => ({
    title: 'Testimonial title',
    description: 'Long testimonial testimonial ',
    name: "Testifier's name",
    position: "Testifier's position",
    profilePic: '',
    image: '',
    withprofilePic: true,
  }),
  sideEditProps: [
    {
      name: 'withprofilePic',
      label: 'With Profile Picture',
      type: types.SideEditPropType.Boolean,
    },
  ],
}

export default TestimonialItem
