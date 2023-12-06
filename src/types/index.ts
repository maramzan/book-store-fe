export interface Post {
  created_at: string;
  id: string;
  likes_count: number;
  replies_count: number;
  text: string;
  userImage: string;
  user: {
    id: string;
    company_name: string;
    first_name: string;
    last_name: string;
    profile_image_url: string;
  };
}
export interface Book {
  id: string;
  title: string;
  writer: string;
  imageUrl: string;
  price: number;
  tags: string[];
}
