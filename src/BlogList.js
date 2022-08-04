import { Button } from "@chakra-ui/react";

const BlogList = ({ blogs, title, handleDelete }) => {

    return (
        <div className="blog-list">
            <h2>{title}</h2>
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                    <Button onClick={() => handleDelete(blog.id)}>Delete</Button>
                    <br />
                </div>
            ))}
        </div>
    );
}

export default BlogList;