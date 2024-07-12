// components/Post.tsx
import Image from "next/image";

interface Author {
  _content_type_uid: string;
  locale: string;
  uid: string;
  bio: string;
  picture: {
    is_dir: boolean;
    uid: string;
    content_type: string;
    description: string;
    file_size: string;
    filename: string;
    parent_uid: string;
    tags: string[];
    title: string;
    url: string;
  };
  tags: string[];
  title: string;
}

interface BlogPost {
  uid: string;
  locale: string;
  author: Author[];
  body: string;
  date: string;
  featured_image: {
    is_dir: boolean;
    uid: string;
    content_type: string;
    file_size: string;
    filename: string;
    parent_uid: string;
    tags: string[];
    title: string;
    url: string;
  };
  is_archived: boolean;
  related_post: any[];
  seo: {
    meta_title: string;
    meta_description: string;
    keywords: string;
    enable_search_indexing: boolean;
  };
  tags: string[];
  title: string;
  url: string;
}

interface PostProps {
  blogPosts: BlogPost[];
}

const Post = ({ blogPosts }: PostProps) => {
  return (
    <div className="">
      {blogPosts.map((post) => (
        <div key={post.uid} className="mb-8">
          <h2 className="text-2xl font-bold">{post.title}</h2>
          {post.featured_image && (
            <Image
              src={post.featured_image.url}
              alt={post.title}
              width={500}
              height={300}
            />
          )}
          {/* <div className="mt-4">
            <div dangerouslySetInnerHTML={{ __html: post.body }} />
          </div> */}
          <div className="mt-4">
            <h3 className="text-xl font-semibold">
              Author: {post.author[0]?.title}
            </h3>
            {post.author[0]?.picture && (
              <Image
                src={post.author[0].picture.url}
                alt={post.author[0].title}
                width={100}
                height={100}
              />
            )}
            <p>{post.author[0]?.bio}</p>
          </div>
          <div className="text-gray-600 mt-4">
            Published on: {new Date(post.date).toLocaleDateString()}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Post;
