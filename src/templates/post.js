import React from "react";
import Helmet from "react-helmet";
import { Link, graphql } from "gatsby";
import styles from "./post.module.css";
import Layout from "../components/Layout"

const Post = props => {
  const postNode = props.data.markdownRemark;
  const post = postNode.frontmatter;

  return (
    <Layout>
      <article className={styles.blogPost}>
        <Helmet title={`${post.title} | Gatsby Starter - Minimal Blog`} />
        <Link to="/">
          Gatsby Starter - Minimal Blog | Get back to the overview
        </Link>
        <h1 className={styles.title}>{post.title}</h1>
        <h4 className={styles.date}>{post.date}</h4>
        <div
          className={styles.content}
          dangerouslySetInnerHTML={{ __html: postNode.html }}
        />
      </article>
    </Layout>
  );
};

export default Post;

/* eslint no-undef: off */
export const postQuery = graphql`
  query postBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "DD.MM.YYYY")
      }
    }
  }
`;
