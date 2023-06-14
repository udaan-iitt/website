/**
 * @typedef {Object} Links
 * @prop {string} github Your github repository
 */

/**
 * @typedef {Object} MetaConfig
 * @prop {string} title Your website title
 * @prop {string} description Your website description
 * @prop {string} author Maybe your name
 * @prop {string} siteUrl Your website URL
 * @prop {string} lang Your website Language
 * @prop {string} utterances Github repository to store comments
 * @prop {Links} links
 * @prop {string} favicon Favicon Path
 */

/** @type {MetaConfig} */
const metaConfig = {
  title: 'Udaan IITT',
  description: `Student-Run Newsletter IIT Tirupati`,
  author: 'Noble Saji Mathews',
  siteUrl: 'https://udaaniitt.in/',
  lang: 'en',
  utterances: 'NobleMathews/background',
  links: {
    submissions: 'https://forms.gle/XA1TfRGVNBUBJLiv9',
  },
  icon: 'src/images/icon.png',
}

// eslint-disable-next-line no-undef
module.exports = metaConfig
