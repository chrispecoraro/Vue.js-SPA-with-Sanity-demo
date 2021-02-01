export default {
    name: 'album',
    type: 'document',
    title: 'Album',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Title'
        },
        {
            name: 'artist',
            type: 'reference',
            to: {type: 'artist'}
        },
        {
            name: 'cover',
            type: 'image',
            title: 'Cover'
        },
       {
            name: 'releaseYear',
            type: 'string',
            title: 'Release Year'
        }
    ]
}
