export default {
    name: 'rental',
    title: 'Rental',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
        validation: (Rule: any) => Rule.required(),
      },
      {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: { source: 'title' },
        validation: (Rule: any) => Rule.required(),
      },
      {
        name: 'location',
        title: 'Location',
        type: 'string',
      },
      {
        name: 'address',
        title: 'Full Address',
        type: 'string',
      },
      {
        name: 'coordinates',
        title: 'Coordinates',
        type: 'object',
        fields: [
          { name: 'lat', title: 'Latitude', type: 'number' },
          { name: 'lng', title: 'Longitude', type: 'number' },
        ],
      },
      {
        name: 'propertyType',
        title: 'Property Type',
        type: 'string',
        options: {
          list: ['Villa', 'Apartment', 'House', 'Other'],
        },
      },
      {
        name: 'bedrooms',
        title: 'Bedrooms',
        type: 'number',
      },
      {
        name: 'bathrooms',
        title: 'Bathrooms',
        type: 'number',
      },
      {
        name: 'areaM2',
        title: 'Area (m²)',
        type: 'number',
      },
      {
        name: 'priceMonthly',
        title: 'Price (monthly €)',
        type: 'number',
      },
      {
        name: 'description',
        title: 'Description',
        type: 'text',
      },
      {
        name: 'images',
        title: 'Images',
        type: 'array',
        of: [{ type: 'image' }],
      },
      {
        name: 'directBookable',
        title: 'Direct Bookable (your own listings)',
        type: 'boolean',
        initialValue: false,
      },
      {
        name: 'icalUrl',
        title: 'iCal URL for Availability',
        type: 'string',
      },
    ],
    preview: {
      select: {
        title: 'title',
        media: 'images.0',
      },
      prepare(selection: any) {
        const {title, media} = selection;
        return {
          title,
          media,
        };
      },
    },
  }