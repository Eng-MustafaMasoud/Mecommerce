import { defineField,defineType } from "sanity";

export default defineType(
    {
        type:"document",
        name:"banner",
        title:"Banner",
    fields:[
        defineField(
            {
                name:"title",
                title:"Banner title",
                type:"string",
            }
        ),
        defineField({
            name:"image",
            title:"Image",
            type:"image",
            description:"Banner image",
            validation:(rule)=> rule.required(),
            options:{
                hotspot:true,
            },preview:{
                select:{
                    imageUrls:"asset.url",
                    title:"caption"
                }
            }
        })
    ],
    preview:{
        select:{
            title:"title",
            media:"image"
        }
    }
    }
)