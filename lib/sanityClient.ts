

import { createClient, groq } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
const apiVersion ='2024-01-14';
const token = process.env.SANITY_API_TOKEN;

export const Client = createClient({
  projectId,
  dataset,
  apiVersion,
  token,
  useCdn: false,
});

const builder = imageUrlBuilder(Client);

export const urlFor = (source: any) => {
  return builder.image(source);
};
export const productQuery = groq`*[_type == 'product']{
  ...
} | order(_createdAt desc)`;

export const products = async () => {
  const productData = await Client.fetch(productQuery);
  return productData;
};
