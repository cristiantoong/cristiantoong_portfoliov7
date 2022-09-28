export default {
  name: "footer",
  title: "Footer",
  type: "document",
  fields: [
    {
      name: "logo",
      title: "Logo",
      type: "image",
    },
    {
      name: "footerSocials",
      title: "Footer Socials",
      type: "array",
      of: [
        {
          name: "footerSocialObject",
          title: "foo",
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
