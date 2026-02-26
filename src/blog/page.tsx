const apiUrl = import.meta.env.VITE_BACKEND_URL;
import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { useEffect, useState } from "react";

 
interface Post{
    id: number;
    title: string;
    body: string;
    userId: number;
}
export default function Blog() {
    const [posts, setPosts] = useState<Post[]>([]);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await fetch(`${apiUrl}/api/posts`);
                const data: Post[] = await response.json();
                setPosts(data);
            } catch (error) {
                console.error("Error fetching posts:", error);
            }
        };

        fetchPosts();
    }, []);

    return (
  <div>
    <Header />

    <h1>Blog Posts</h1>

    {posts.map((post) => (
      <div key={post.id}>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
      </div>
    ))}

    <Footer />
  </div>
);
}