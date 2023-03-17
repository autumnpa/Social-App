// Create some user data to display with the stories bar under the header
// Array with username and an image for a story circle placeholder
export const users = [
  {
    user: 'peppy',
    // ADD IMAGE URL HERE
    image:
      'data:image/jpeg;base64,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',
  },
  {
    user: 'julian',
    // ADD IMAGE URL HERE
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSXnC-2khZM9XKroF61w6xUY1dPXq8ocvyPg&usqp=CAU',
  },
  {
    user: 'isabelle',
    // ADD IMAGE URL HERE
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzhxoqBk3GxSuVZwniShTNKN_XLznjWlhUnw&usqp=CAU',
  },
  {
    user: 'flora',
    // ADD IMAGE URL HERE
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGosLzHOGOsCI7dVMYv_xmJmqjcSwyDehsVw&usqp=CAU',
  },
  {
    user: 'alfonso',
    // ADD IMAGE URL HERE
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFn4uHne59boYLCPX6_3J8QJqEhbZ65miZVk_YW7QdhtyZdt4yOxpBRfIUezznyAuNjNc&usqp=CAU',
  },
];