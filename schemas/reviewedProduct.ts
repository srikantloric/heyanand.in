export default {
    title: "Reviewed Product",
    name: "reviewedproduct",
    type: "document",
    fields: [
        {
            title: "Title",
            name: "title",
            type:"string"
        },
        {
            title: "Link",
            name: "link",
            type:"string"
        },
        {
            title: "Product Image",
            name: "productimage",
            type: "image",
            options: {
                hotspot: true,
              },
        }
    ]
}