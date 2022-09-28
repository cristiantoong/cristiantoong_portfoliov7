export default {
  name: "hero",
  title: "Hero",
  type: "document",
  fields: [
    {
      name: "heroImg",
      title: "Hero Image",
      type: "image",
    },
    {
      name: "primary",
      title: "Primary",
      type: "string",
    },
    {
      name: "secondary",
      title: "Secondary",
      type: "string",
    },
    {
      name: "tertiary",
      title: "Tertiary",
      type: "string",
    },
    {
      name: "ctaBtnLink",
      title: "CTA Button Link",
      type: "string",
    },
    {
      name: "ctaBtn",
      title: "CTA Button",
      type: "string",
    },
    {
      name: "heroSocials",
      title: "Hero Socials",
      type: "array",
      of: [
        {
          name: "urlObject",
          title: "URL",
          type: "object",
          fields: [
            {
              title: "URL",
              name: "urlField",
              type: "url",
            },
            {
              title: "Social Image",
              name: "socialImage",
              type: "image",
            },
          ],
        },
      ],
    },
  ],
};
