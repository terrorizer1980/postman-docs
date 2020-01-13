// import React, { Component } from 'react';
import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';


// class LastUpdate extends Component {
//   constructor(props) {
//     super(props);

//     console.log('////////props', props);
//     this.state = {
//       author: '',
//       date: '',
//     };
//     console.log('////////state', this.state);
//   }
  // componentDidMount(name, date) {
  //   // set last update as state onto every page
  //   this.setState({
  //     name,
  //     date,
  //   });
  // }
  // const LastUpdate = ({ name, date }) => (

//   render() {
//     const { author, date } = this.state;

//     return (
//       <p>
//       Updated on:
//         {date}
//       By:
//         {author}
//       </p>
//     );
//   }
// }

const LastUpdate = ({ author, date }) => {
  console.log('author', author);
  console.log('date', date);
  const result = useStaticQuery(graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          fields {
            slug
            author
            date
          }
        }
      }
    }
  }
`);
console.log('result', result);
  // const name = result.allMarkdownRemark.edges.node.fields.author;

  return (
    <p>
      Updated on:
      {date}
      By:
      {author}
    </p>
  );
};

// const LastUpdate = () => {
//   const date = useStaticQuery(graphql`
//   query {
//     allMarkdownRemark {
//       edges {
//         node {
//           fields {
//             date
//             author
//           }
//         }
//       }
//     }
//   }`);
//   const author = useStaticQuery(graphql`
//   query {
//     markdownRemark {
//       fields {
//         author
//       }
//     }
//   }`);
//   return (
//     <p>
//      Updated on:
//      {date}
//      By:
//      {author}
//    </p>
//   );
// }

export default LastUpdate;
