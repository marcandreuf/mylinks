import { z, defineCollection } from "astro:content";

const TypeLink = z.object({
    type: z.literal("link"),
    addDate: z.number().int().positive(),
    title: z.string(),
    icon: z.string().optional(),
    url: z.string().url()
});

const TypeFolder = z.lazy(() =>
    z.object({
        type: z.literal("folder"),
        addDate: z.number().int().positive(),
        lastModified: z.number().int().positive(),
        title: z.string(),
        children: z.array(z.union([TypeFolder, TypeLink])).optional(),
    }));

const mainSchema = defineCollection({
    type: 'data',
    schema: z.array(z.union([TypeFolder, TypeLink]))
})

export const collections = {
    'links': mainSchema, TypeFolder, TypeLink

};
