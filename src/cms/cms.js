import CMS from 'netlify-cms-app';
import { graphql, useStaticQuery } from 'gatsby';

const data = useStaticQuery(graphql`
  query {
    allDirectory(
      filter: {
        relativeDirectory: { eq: "posts/editions" }
      }
    ) {
      edges {
        node {
          name
        }
      }
    }
  }
  `);

window.CMS_MANUAL_INIT = true;
const today = new Date()
const shortName = today.toLocaleString('en-US', {month: 'short'});
const allMonths = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
var rem_months = new Set()
data["data"]["edges"].forEach(function(element) {
    var folder = element["node"]["name"]
    if(folder[0]=='2')
        rem_months.add(folder)
})
var cur_month_hit = false;
const cur_year = today.getFullYear()
allMonths.forEach(function(element) {
    if(element == shortName)
        cur_month_hit = true;
    if(cur_month_hit)
    rem_months.add(`${cur_year}_${element}`)
})
var ed_collections = [];
rem_months.forEach((edition)=>{
    ed_collections.push(
        {
            name: edition,
            label: edition,
            folder: edition,
            media_folder: 'images',
            create: true,
            slug: '{{slug}}',
            fields: [
            { name: 'title', label: 'Title' },
            { name: 'category', label: 'Category' },
            { name: 'date', label: 'Date', widget: 'datetime' },
            { name: 'desc', label: 'Description', widget: 'text' },
            { name: 'thumbnail', label: 'Thumbnail', widget: 'image', required: false },
            { name: 'authors', label: 'Authors' },
            { name: 'starred', label: 'Starred', widget: 'boolean', default: false },
            { name: 'abio', label: 'Author Bio', widget: 'text' },
            { name: 'alt', label: 'Alt Text', widget: 'text', required: false },
            { name: 'body', label: 'Body', widget: 'markdown' },
            ]
        }
    )
})

CMS.init({
  config: {
    load_config_file: false,

    // IF TESTING
    // backend: {
    //   name: 'git-gateway',
    // },
    // local_backend: true,

    // IF PROD
    backend: {
      name: 'github',
      repo: 'NobleMathews/udaan_editions',
      branch: 'main'
    },

    media_folder: 'images',
    collections: ed_collections,
  },
});