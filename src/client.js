import sanityClient from "@sanity/client";
export default sanityClient({
  projectId: 'rp06p8eb', // find this at manage.sanity.io or in your sanity.json
  dataset: "production", // this is from those question during 'sanity init'
  token: import.meta.env.VITE_SANITY_TOKEN,
  useCdn: true,
  apiVersion: '2021-08-31',
  ignoreBrowserTokenWarning: true,
});
