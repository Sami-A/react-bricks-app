# React Bricks app with Next.js and Tailwind CSS

Similar to TinaCMS **blocks** React Bricks also has **bricks** to reuse prebuilt components. However, the way we live edit the components are completely different.

In React Bricks all you need to do is wrap your fields in a visual editing components namely:
 
 - **`Image:`** this component helps to upload image or put a placeholder picture.
 - **`Text:`** to live edit text content.
 - **`Repeater:`** to display a list. You can set `min` & `max` list items.

 > All visual editing components can have default data.
 > You can choose which part if the UI you wanted to edit by not wrapping it with the visual editing components.

## How I integrate my components 
On Each custom components I created a schema that defines its properties and allows React Bricks to recognize it. Then added **props** to the schema and put it on the visual editing components so that it can edit it's content.

For the **ProductList** and **Testimonials** components, I have created nested blocks called **ProductItems** and **TestimonialItem**. These blocks serve as templates for the Repeater component, which can display multiple items of the same type. The Repeater component can identify the blocks because I have specified a **repeaterItems** property in the schema of the ProductList and Testimonials components. In this property, I have set the **itemType** field to the name of the corresponding block.


> The components can be found in a folder called **react-bricks/bricks**.
> All data are store on the React Bricks cloud.

Because the pages are created dynamically, I have set up a **slug** page. This page will serve as a template for the pages that are generated through the editing platform. The slug will determine the URL of each page.

> In order to access the React Bricks cloud services, I have signed up for an account that provided me with an API_KEY. I have used this key in my app to connect it with the cloud.

### How did I reuse the components
If you want to use it in the **editor**, you need to add it to the config file that is located in the **react-bricks/config.ts** folder. This file contains the configuration options for the React Bricks editor, such as the available components, the page types, and the API key.

Here is the code where I added my custom components as **Bricks**:

```sh
{
    themeName: 'Custom Theme 1',
    categories: [
      {
        categoryName: 'Components',
        bricks: [Hero,ProductList,ProductItem,Testimonials,TestimonialItem,ContactUs], // Custom Bricks
      },      
    ],
  },
```
When you go to the editor file you can find it under a category named **Components**.


The last step is to go to the admin panel and log in. There you will find the **Editor Tab**, where you can create a new page and use your **bricks**(custom components) to build it. You can also live edit the content and appearance of your bricks. If you want to test your bricks without creating a page, you can go to the **Playground Tab** and experiment with them. You can check their props, change their values, and see how they look and behave.


