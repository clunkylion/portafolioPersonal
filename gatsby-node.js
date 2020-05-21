const path = require('path');

exports.createPages = async ({graphql,actions})=>{

    const result = await graphql(`
        {
            allSkillsJson {
            edges {
                node {
                slug
                }
            }
            }
        }
    `);
    result.data.allSkillsJson.edges.forEach(element =>{
        const {node} = element;
        actions.createPage({
            path: node.slug,
            component: path.resolve('./src/pages/template/about.js'),
            context:{
                slug: node.slug
            }
        });
    });
}