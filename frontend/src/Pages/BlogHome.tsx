import Header from "../Components/Header";
import PostDateTitle from "../Components/PostDateTitle";

export default function BlogHome() {
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
                />
                <PostDateTitle 
                    date="Feb. 02, 2025" 
                    title="Beginning of the End" 
                    url="beginning-of-the-end"
                />
                <PostDateTitle 
                    date="Jan. 18, 2025" 
                    title="Ai Systems you Probably Should Care About" 
                    url="ai-systems-you-probably-should-care-about"
                />
                <PostDateTitle 
                    date="Jan. 18, 2025" 
                    title="What if one is really long and annoying, what happens then?" 
                    url="what-if-one-is-really-long-and-annoying-what-happens-then"
                />
            </div>
        </>
    );
}