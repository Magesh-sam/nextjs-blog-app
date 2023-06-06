import axios from "axios"
import Image from "next/image";
import styles from '../../styles/BlogDetail.module.css'
import Link from "next/link";
export async function generateMetadata({params}) {
    const response = await axios.get(`https://dummyjson.com/posts/${params.id}`);
    const data = await response.data;
    console.log(params.id)
    return {
        title: data.title,
        description: data.body,
        openGraph: {
            title: data.title,
            description: data.body
        }
    };
}
export default async function BlogDetail({ params }) {
    const response = await axios.get(`https://dummyjson.com/posts/${params.id}`);
    const data = await response.data;

    return (
        <>

            <main className={styles.main} >
                <nav className={styles.nav}>
                    <Link href='/' className="link"  >🏠 Home</Link>
                    <Link href='/blog' className="link"  >📝 Blogs</Link>
                </nav>
          <Image src='/homeBlog.jpg' alt='Home Page Image' priority width={1920} height={400} style={{maxWidth:'100vw',objectFit:'cover'}}/>

                <article className={styles.article} style={{position:'relative'}} >

                    <h1>{data.title} - { data.reactions} Likes</h1>
                    <section className={styles.tags} > <h3>Tags:</h3> {data.tags.map((tag) => <p key={data} >{tag}</p>)}</section>
                    <Image src='/blogCover.jpg' alt='Blog Cover' priority width={300} height={250} />
                    <p>{data.body}</p>
                </article>
            </main>
        </>
    )
}