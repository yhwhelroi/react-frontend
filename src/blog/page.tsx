const apiUrl = import.meta.env.VITE_BACKEND_URL;
import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { useEffect, useState } from "react";

interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

export default function Blog() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [message, setMessage] = useState<string>("");

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);

        const response = await fetch(`${apiUrl}/api/posts`);
        const data: Post[] = await response.json();

        setPosts(data);
        setMessage("Data successfully fetched");
      } catch (error) {
        console.error("Error fetching posts:", error);
        setMessage("Failed to fetch data");
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div>
      <Header />

      <h1>Blog Posts</h1>

      {loading && <p>Loading posts...</p>}

      {!loading && message && <p>{message}</p>}

      {!loading &&
        posts.map((post) => (
          <div key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </div>
        ))}

      <Footer />
    </div>
  );
}