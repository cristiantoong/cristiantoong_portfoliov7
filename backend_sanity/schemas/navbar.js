export default {
  name: "navbar",
  title: "Navbar",
  type: "document",
  fields: [
    {
      name: "logo",
      title: "Logo",
      type: "image",
    },
    {
      name: "menus",
      title: "Menus",
      type: "array",
      of: [
        {
          name: "urlObject",
          title: "URL",
          type: "object",
          fields: [
            {
              name: "title",
              title: "Title",
              type: "string",
            },
            {
              name: "url",
              title: "URL",
              type: "string",
            },
          ],
        },
      ],
    },
  ],
};
