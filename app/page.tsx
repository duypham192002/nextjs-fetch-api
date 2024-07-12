// app/page.tsx
import Post from "../components/Post";

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

async function fetchBlogPosts(): Promise<BlogPost[]> {
  const res = await fetch(
    "https://api.contentstack.io/v3/content_types/blog_post/entries?locale=en-us&include_workflow=false&include_publish_details=true&include_branch=false",
    {
      method: "GET",
      headers: {
        authtoken: "blt380c30bc0ca3feae", // Thay thế với giá trị thực
        api_key: "blt871c88e2918e9cc1", // Thay thế với giá trị thực
        "Content-Type": "application/json",
        branch: "main",
      },
    }
  );

  if (!res.ok) {
    throw new Error("Network response was not ok");
  }

  const data = await res.json();
  return data.entries as BlogPost[];
}

export default async function Home() {
  const blogPosts = await fetchBlogPosts();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold">Blog Posts</h1>
      <Post blogPosts={blogPosts} />
    </main>
  );
}
