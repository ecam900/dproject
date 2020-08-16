import Prismic from 'prismic-javascript';
import { RichText } from 'prismic-reactjs';
import { client } from '../prismic-configuration';

export default function Home(props) {
  return (
    <>
      <h1 style={{ color: 'coral' }}>
        {RichText.asText(props.home.data.homepage_header)}
      </h1>
      <div>
        <h1 style={{ color: 'teal' }}>Here are my posts:</h1>
        <ul>
          {props.posts.results.map((post) => (
            <li key={post.uid} style={{ color: 'purple' }}>
              {RichText.render(post.data.post_title)}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const home = await client.getSingle('homepage');
  const posts = await client.query(
    Prismic.Predicates.at('document.type', 'posts')
  );
  return {
    props: {
      home,
      posts,
    },
  };
}
