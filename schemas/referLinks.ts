export default {
  title: 'ReferLinks',
  name: 'referlinks',
  type: 'document',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
    },
    {
      title: 'Link',
      name: 'link',
      type: 'string',
    },
    {
      title: 'Timestamp',
      name: 'timestamp',
      type: 'datetime',
    },
    {
      title: 'SideImage',
      name: 'sideimage',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    
  ],
}
