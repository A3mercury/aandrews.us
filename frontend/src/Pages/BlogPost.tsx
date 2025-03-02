import { JSX, useEffect, useState } from "react";
import { useParams } from "react-router";
import Header from "../Components/Header";
import { PostType } from "../Interfaces/interfaces";
import moment from "moment";

export default function BlogPost() {
    let params = useParams();
    const [post, setPost] = useState<PostType>();

    useEffect(() => {
        fetch("http://localhost:8080/api/blog-post/"+params.title)
            .then((res) => res.json())
            .then((res) => {
                setPost(res.data);
            })
    }, []);

    function parseTextWithLinks(text: string): (string | JSX.Element)[] {
        const linkReg = /\[(.*?)\]\((.*?)\)/g;
        const elements: (string | JSX.Element)[] = [];
        let lastIndex = 0;
        let match;

        while ((match = linkReg.exec(text)) !== null) {
            if (match.index > lastIndex) {
                elements.push(text.slice(lastIndex, match.index));
            }

            elements.push(
                <a
                    key={match.index} 
                    href={match[2]} 
                    target="_blank"
                    className="text-[10pt]/8 font-serif text-blue-400 underline"
                >
                    {match[1]}
                </a>
            );

            lastIndex = linkReg.lastIndex;
        }

        if (lastIndex < text.length) {
            elements.push(text.slice(lastIndex));
        }

        return elements;
    }

    return (
        <div>
            <Header />

            <div className="mx-auto max-w-4xl px-6 py-8 lg:px-8">
                <h1 className="text-4xl font-bold">
                    {post?.title}
                </h1>
                <p className="text-gray-400 text-[9pt]">{moment(post?.published_at).format('ll')} • 6 min</p>

                {post?.content.map(part => {
                    if (part?.key === "h1") {
                        return <h1 className="text-4xl font-medium py-2">{part?.value}</h1>
                    }
                    if (part?.key === "h2") {
                        return <h2 className="text-3xl font-medium py-2">{part?.value}</h2>
                    }
                    if (part?.key === "h3") {
                        return <h3 className="text-2xl font-medium py-2">{part?.value}</h3>
                    }
                    if (part?.key === "h4") {
                        return <h4 className="text-xl font-medium py-2">{part?.value}</h4>
                    }
                    if (part?.key === "h5") {
                        return <h5 className="text-lg font-medium py-2">{part?.value}</h5>
                    }
                    if (part?.key === "h6") {
                        return <h6 className="text-md font-medium py-2">{part?.value}</h6>
                    }
                    if (part?.key === "p") {
                        return <p className="text-[10pt]/8 py-2 font-serif">
                            {parseTextWithLinks(part?.value)}
                        </p>
                    }
                    if (part?.key === "a") {
                        return <a href={part?.href} className="text-[10pt]/8 font-serif text-blue-400 underline">{part?.value}</a>
                    }
                    if (part?.key === "img") {
                        return <img src="https://www.w3schools.com/html/pic_trulli.jpg" alt={part?.alt} width={part?.width} height={part?.height} />
                    }
                })}
                
            </div>
        </div>
    );
}
