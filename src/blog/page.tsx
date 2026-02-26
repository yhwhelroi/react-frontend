import { useEffect, useState } from "react";
import { Footer } from "../components/footer";
import { Header } from "../components/header";

interface Post {
  id: number;
  authorName: string;
  title: string;
  content: string;
  authorId: number;
  createdAt: string;
}

export const Blog = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(
            "http://localhost:3000/api/post"
        //   "https://jsonplaceholder.typicode.com/posts"
        );
        const data = await response.json();

        const data: Post[] = result.data;
        console.log("Response", data);
        setPosts(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching posts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

return (
  <div>
    <Header />
        <div>
            
        <h1>Blog Posts</h1>

            {posts.map((post, index) => {
                return (
                <div key={index}>
                    <h2>{post.title}</h2>
                    <p>{post.content}</p>
                    <p>Author: {post.authorName}</p>
                </div>
                );
            })}
        </div>

    <Footer />
  </div>
)};