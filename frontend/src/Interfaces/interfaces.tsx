export interface PostType {
    unique_url: string;
    published_at: string;
    title: string;
    content: ContentType[];
}

interface ContentType {
    key: string;
    value: string;
    href?: string;
    src?: string;
    alt?: string;
    width?: number;
    height?: number;
}
