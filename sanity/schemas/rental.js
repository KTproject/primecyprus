import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'rental',
  title: 'Rental',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
    }),
    defineField({
      name: 'pricePerMonth',
      title: 'Price per month',
      type: 'number',
      validation: (Rule) => Rule.min(0),
    }),
    defineField({
      name: 'bedrooms',
      title: 'Bedrooms',
      type: 'number',
      validation: (Rule) => Rule.min(0).integer(),
    }),
    defineField({
      name: 'bathrooms',
      title: 'Bathrooms',
      type: 'number',
      validation: (Rule) => Rule.min(0).integer(),
    }),
    defineField({
      name: 'sqm',
      title: 'Area (m²)',
      type: 'number',
      validation: (Rule) => Rule.min(0),
    }),
    defineField({
      name: 'availableFrom',
      title: 'Available from',
      type: 'date',
    }),
    defineField({
      name: 'minimumStay',
      title: 'Minimum stay',
      type: 'string',
      description: 'e.g. "1 month", "3 months", "6 months"',
    }),
    defineField({
      name: 'furnished',
      title: 'Furnished',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 5,
    }),
    defineField({
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true,
          },
        },
      ],
    }),
    defineField({
      name: 'featured',
      title: 'Featured',
      type: 'boolean',
      initialValue: false,
    }),
  ],
  preview: {
    select: { title: 'title', location: 'location', pricePerMonth: 'pricePerMonth' },
    prepare({ title, location, pricePerMonth }) {
      const sub = [location, pricePerMonth != null ? `€${pricePerMonth}/mo` : null].filter(Boolean).join(' · ')
      return {
        title: title || 'Untitled rental',
        subtitle: sub || undefined,
      }
    },
  },
})
