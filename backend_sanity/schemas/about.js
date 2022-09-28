export default {
  name: "about",
  title: "About",
  type: "document",
  fields: [
    {
      name: "aboutImg",
      title: "About Image",
      type: "image",
    },
    {
      name: "accordion",
      title: "Accordion",
      type: "array",
      of: [
        {
          name: "accordionObject",
          title: "Accordion",
          type: "object",
          fields: [
            {
              name: "title",
              title: "Title",
              type: "string",
            },
            {
              name: "content",
              title: "Content",
              type: "string",
            },
          ],
        },
        {
          name: "accordionLink",
          title: "Accordion Link",
          type: "object",
          fields: [
            {
              name: "titleLink",
              title: "Title Link",
              type: "string",
            },
            {
              name: "text",
              title: "Text",
              type: "string",
            },
            {
              name: "pdfFile",
              title: "FILE",
              type: "file",
            },
            {
              name: "urlText",
              title: "URL Text",
              type: "string",
            },
          ],
        },
      ],
    },
  ],
};
