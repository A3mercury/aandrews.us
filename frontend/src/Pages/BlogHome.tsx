import { useEffect, useState } from "react";
import Header from "../Components/Header";
import PostDateTitle from "../Components/PostDateTitle";
import moment from "moment";
import { PostType } from "../Interfaces/interfaces";

export default function BlogHome() {
    const [posts, setPosts] = useState<PostType[]>([]);

    useEffect(() => {
        fetch("http://localhost:8080/api/blog-posts")
            .then((res) => res.json())
            .then((res) => {
                setPosts(res.data);
            })
    }, []);

    return (
        <>
            <Header />

            <div className="mx-auto flex max-w-4xl px-6 py-16 lg:px-8">
                <h1 className="text-5xl">Blog Posts</h1>
            </div>

            <div className="mx-auto max-w-4xl px-6 py-8 lg:px-8">

                {posts.map(post => {
                    return (
                        <PostDateTitle 
                            key={post.unique_url} 
                            date={!post.published_at ? '' : moment(post.published_at).format('ll')} 
                            title={post.title} 
                            url={post.unique_url} 
                        />
                    );
                })}
            </div>
        </>
    );
}