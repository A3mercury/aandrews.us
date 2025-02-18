import { 
    type RouteConfig, 
    index,
    route,
    prefix
} from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),

    ...prefix("blogs", [
        index('routes/blogs.tsx'),
        route(':title', 'routes/blog-post.tsx'),
    ])

] satisfies RouteConfig;
