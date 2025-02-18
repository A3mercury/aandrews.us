import type { FC } from "react";

interface DateTitleProps {
    date: string,
    title: string,
    url: string,
    id: number,
}

const PostDateTitle: FC<DateTitleProps> = ({
    date, 
    title, 
    url, 
    id,
}) => {
    // Do a call to the API to get the data from the post using the id/title

    return (
        <div className="flex justify-start py-2">
            <p className="w-1/4 md:w-1/6 font-light text-gray-400">{date}</p>
            <a href={`/blogs/${url}`} className="w-3/4 md:w-5/6 font-semibold underline">{title}</a>
        </div>
    );
}

export default PostDateTitle;