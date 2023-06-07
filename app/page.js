import axios from 'axios';
import Image from 'next/image'
import Link from 'next/link';
import styles from './styles/Home.module.css'

export default async function Home() {
  const response = await axios.get('https://dummyjson.com/posts?limit=15');
  const data = await response.data;
  const posts = data.posts;



  return (
    <main >
      <h1 className={styles.pageHeading} >Next JS Blog App </h1>
          <Image src='/homeBlog.jpg' alt='Home Page Image' priority width={1920} height={400} style={{maxWidth:'100vw',objectFit:'cover'}} />
      <section className={styles.blogContainer}>
        <h2 className={styles.blogHeading} >Featured posts</h2>
        {posts.map((post) => (
          <Link key={post.id} href={{pathname: `/blog/${post.id}`,}} className='link' >
            <article  className={styles.blog}>
              <Image class={styles.blogCover} src='/blogCover.jpg' alt='Blog Cover' loading='lazy' width={300} height={250}  />
              <section className={styles.blogContent} >
                <h2>{post.title}</h2>
                <p>{post.body}</p>
              </section>
            </article>
          </Link>
        ))}
      </section>
        <Link href='/blog' className={styles.allPostsBtn} >
          View all Posts
      </Link>
    </main>
  )
}





