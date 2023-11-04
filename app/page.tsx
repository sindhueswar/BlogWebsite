import { getAllPosts } from "../lib/api";
import PostPreview from "../components/PostPreview";
import PostHero from "../components/PostHero";
export default function Home() {
  const posts = getAllPosts(["title", "date", "excerpt", "coverImage", "slug"]);
  const recentPosts = posts.slice(0, 2);

  return (
    <div className="max-w-5xl container mx-auto px-5">
      <main>
        <div className="space-y-4">
          <h1 className="text-center text-5xl">Blog</h1>
          <p className="text-center text-xl">
           Sdfxgchvjmb Hesxdrcftvg Gghnvb ghjh de.
          </p>
        </div>

        <div className="h-12"></div>
        <PostHero />

        <div className="h-16"></div>

        <p className="text-3xl mb-6">Recent Posts</p>
        <div className="grid md:grid-cols-2 grid-cols-1 mx-auto md:gap-32 gap-8">
          {recentPosts.map((post) => (
            <div key={post.title}>
              <PostPreview post={post} />
            </div>
          ))}
        </div>
        <div className="h-16"></div>
      </main>
    </div>
  );
}
