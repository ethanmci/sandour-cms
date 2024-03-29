import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'song',
  title: 'Song',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      title: 'releaseType',
      name: 'releaseType',
      type: 'string'
    }),
    defineField({
      name: 'releaseDate',
      title: 'Release Date',
      type: 'date'
    }),
    defineField({
      name: 'cover',
      title: 'Cover',
      type: 'image',
      options: {
        hotspot: true
      }
    }),
    defineField({
      name: 'links',
      title: 'Links',
      type: 'array',
      of: [{type: 'url'}]
    }),
  ],
})
