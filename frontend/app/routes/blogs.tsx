import PostDateTitle from "~/components/post-date-title";
import Header from "../components/header"

export default function Blogs() {
    return (
        <>
            <Header />
            
            <div className="mx-auto flex max-w-4xl px-6 py-16 lg:px-8">
                <h1 className="text-5xl">Blog Posts</h1>
            </div>

            <div className="mx-auto max-w-4xl px-6 py-8 lg:px-8">
                {/* items */}
                <PostDateTitle 
                    date="Feb. 14, 2025" 
                    title="Some Title for a Blog Post Entry" 
                    url="some-title-for-a-blog-post-entry"
                    id={1}
                />
                <PostDateTitle 
                    date="Feb. 02, 2025" 
                    title="Beginning of the End" 
                    url="beginning-of-the-end"
                    id={2}
                />
                <PostDateTitle 
                    date="Jan. 18, 2025" 
                    title="Ai Systems you Probably Should Care About" 
                    url="ai-systems-you-probably-should-care-about"
                    id={3}
                />
                <PostDateTitle 
                    date="Jan. 18, 2025" 
                    title="What if one is really long and annoying, what happens then?" 
                    url="what-if-one-is-really-long-and-annoying-what-happens-then"
                    id={4}
                />
            </div>
        </>
    );
}