import { Header } from "../components/header"
import { Footer } from "../components/footer";
import { useEffect, useState } from "react";
 
 
interface Post{
    id: number;
    title: string;
    body: string;
    userId: number;
}
export const Blog = () => {
    const [posts, setPosts] = useState<Post[]>([]);
 
 
    useEffect(() => {
        const fetchPosts = async () => {
            try{
            const response = await fetch("https://jsonplaceholder.typicode.com/posts");
            const data: Post[] = await response.json();
           
            setPosts(data);
 
        }
        catch(error){
            console.error("Error fetching posts:", error);
        }
        };
           fetchPosts();
        }, []);
       
    return(
      <div>
        <Header />
        <Footer />
      </div>          
    );
};