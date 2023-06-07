import axios from "axios";
import styles from '../styles/Blog.module.css';
import Link from "next/link";


export const metadata = {
    title: 'Blogs Page | Next JS Blog App',
    description: 'Blog web application developed using Next JS with Static generation.',
    creator: 'Mageshkannan Annathurai',
    siteName:'Next JS Blog App',
    openGraph: {
      title: 'Blogs Page | Next JS Blog App',
    description: 'Blog web application developed using Next JS with Static generation.',
    type: 'website',
    }
  }


export default async function Blogs() {


    const response = await axios.get('https://dummyjson.com/posts?limit=150');
  const data = await response.data;
    const posts = data.posts;
    


    return (
        <main className={styles.main}>
            <Link href='/' className="link" style={{position:'absolute',top:'10px',left:'10px',fontSize:'20px',color:'#fd5'}} >🏠 Home</Link>
            <h1 className={styles.pageHeading}> All Blogs </h1>
            {
                posts.map((post) => (
                    <Link key={post.id} href={{
                        pathname: `/blog/${post.id}`,
                    }} className="link" >
                        <article className={styles.blog}  >
                            <h2>{post.title}</h2>
                            <section className={styles.tags} >
                                <h4>Tags:</h4>
                            {post.tags.map((tag) => (
                                    <p key={post.id} >{tag}</p>
                                    ))}
                            </section>
                            <Link href={`/blog/${post.id}`} className={styles.viewPost}  >View Post</Link>
                        </article>
                    </Link>
                ))
            }
        </main>
    )
}