export const settings = {
  columnCreatorText: 'Add new column',
  cardCreatorText: 'Add new card',
  creator: {
    buttonOK: 'OK',
    buttonCancel: 'Cancel',
    defaultText: 'Add new item',
  },
  defaultListDescription: '<p>I can do all the things!!!</p>',
  defaultColumnIcon: 'list-alt',
};

export const pageContents = {
  title: 'My first React app',
  subtitle: 'A simple to-do app, with lists, columns and cards',
};

export const listData = {
  title: 'Things to do <sup>soon!</sup>',
  description: 'Interesting things I want to check out!',
  image: 'http://uploads.kodilla.com/bootcamp/fer/11.react/space.png',
  columns: [
    {
      key: 0,
      title: 'Books',
      icon: 'book',
      cards: [
        {
          key: 0,
          title: 'The Brothers Karamazov',
        },
        {
          key: 1,
          title: 'Introduction to React',
        },
        
      ],
    },
    {
      key: 1,
      title: 'Journeys',
      icon: 'tree',
      cards: [
        {
          key: 0,
          title: 'Tibet',
        },
        {
          key: 1,
          title: 'Amazon Rainforest',
        },

      ],
    },
    {
      key: 2,
      title: 'Events',
      icon: 'film',
      cards: [
        {
          key: 0,
          title: 'Cooking course',
        },
        {
          key: 1,
          title: 'Pearl Jam concert',
        },
      ],
    },
  ],
};
