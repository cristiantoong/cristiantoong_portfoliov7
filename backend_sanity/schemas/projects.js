export default {
  name: "projects",
  title: "Projects",
  type: "document",
  fields: [
    {
      name: "cardImg",
      title: "Card Image",
      type: "image",
    },
    {
      name: "overlayMockImg",
      title: "Overlay Card Image",
      type: "image",
    },
    {
      name: "overlayInfoTitle",
      title: "Overlay Info Title",
      type: "string",
    },
    {
      name: "skillset",
      title: "Skill Set",
      type: "array",
      of: [
        {
          name: "skillsetObject",
          title: "Skill Sets Object",
          type: "object",
          fields: [
            {
              name: "skill",
              title: "Skill",
              type: "string",
            },
          ],
        },
      ],
    },
    {
      name: "buttons",
      title: "Buttons",
      type: "array",
      of: [
        {
          name: "buttonObject",
          title: "Button Object",
          type: "object",
          fields: [
            {
              name: "btnLink",
              title: "Button Link",
              type: "url",
            },
            {
              name: "btnLabel",
              title: "Button Label",
              type: "string",
            },
          ],
        },
      ],
    },
  ],
};
