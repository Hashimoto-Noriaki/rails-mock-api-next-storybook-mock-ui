import BlogPostCard from '../components/BlogPostCard';

export default {
  title: 'BlogPostCard',
  component: BlogPostCard,
};

export const Default = () => (
  <BlogPostCard
    title="Next.jsとStorybookでブログを作成"
    summary="このブログでは、Next.jsとStorybookを使ったブログアプリの作成方法について解説します。"
    date="2025-01-05"
    author="Taro"
  />
);
