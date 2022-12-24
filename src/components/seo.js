import React from 'react';
import useSiteMetadata from 'Hooks/useSiteMetadata';
import defaultOpenGraphImage from 'Images/og-default.png';
import { getSrc } from "gatsby-plugin-image"

const SEO = ({ description = '', meta = [], image = null, title }) => {
  const site = useSiteMetadata();
  const metaDescription = description || site.siteMetadata.description;
  let ogImageUrl = defaultOpenGraphImage
  if (image != null)
    ogImageUrl = getSrc(image.file);
  
  return (
    <>
    <title>{`${title} | ${site.siteMetadata.title}`}</title>
    <meta
      name= 'google-site-verification'
      content= 'sb8JV2H8vhofu-BCxVrlbKsADhBmnfSHCiseZOzulug'
  />
  <meta
      name= 'description'
      content= {metaDescription}
  />
  <meta
      prroperty= 'og:title'
      content= {title}
  />
  <meta
      prroperty= 'og:description'
      content= {metaDescription}
  />
  <meta
      prroperty= 'og:type'
      content= 'website'
  />
  <meta
      name= 'twitter:card'
      content= 'summary'
  />
  <meta
      name= 'twitter:creator'
      content= {site.siteMetadata.author}
  />
  <meta
      name= 'twitter:title'
      content= {title}
  />
  <meta
      name= 'twitter:description'
      content= {metaDescription}
  />
  <meta
      prroperty= 'image'
      content= {ogImageUrl}
  />
  <meta
      prroperty= 'og:image'
      content= {ogImageUrl}
  />
  <meta
      prroperty= 'twitter:image'
      content= {ogImageUrl}
  />
      <script src="https://kit.fontawesome.com/35817f7795.js" crossOrigin="anonymous"></script>
    </>
  );
};

export default SEO;
