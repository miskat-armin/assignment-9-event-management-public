import React from "react";
import BlogCard from "../component/card/blogCard";
const demoBlogData = [
  {
    id: 1,
    title: "The Latest Gaming Trends",
    image: "./images/blog/1.jpg",
    date: "October 15, 2023",
    content:
      "Explore the current trends shaping the gaming industry. From innovative technologies to emerging game genres, discover what's hot in gaming.",
  },
  {
    id: 2,
    title: "Tech Innovations of 2023",
    image: "./images/blog/2.jpg",
    date: "September 28, 2023",
    content:
      "Delve into the latest technological breakthroughs of 2023. Uncover the advancements that are reshaping the way we live and interact with technology.",
  },
  {
    id: 3,
    title: "The Future of VR Gaming",
    image: "./images/blog/3.jpg",
    date: "August 20, 2023",
    content:
      "Venture into the immersive world of Virtual Reality gaming. Learn about the latest developments and what the future holds for this exciting gaming frontier.",
  },
  {
    id: 4,
    title: "Top Gaming Keyboards of 2023",
    image: "./images/blog/4.jpg",
    date: "July 12, 2023",
    content:
      "Find the perfect keyboard for your gaming setup. Explore the top gaming keyboards of 2023, each offering unique features to enhance your gaming experience.",
  },
  {
    id: 5,
    title: "AI and the Future of Tech",
    image: "./images/blog/5.jpg",
    date: "June 5, 2023",
    content:
      "Dive into the intersection of Artificial Intelligence and technology. Explore how AI is shaping the future of various industries and influencing technological advancements.",
  },
  {
    id: 6,
    title: "The Rise of Mobile Gaming",
    image: "./images/blog/6.jpeg",
    date: "April 18, 2023",
    content:
      "Witness the ascent of mobile gaming. From casual games to high-end mobile titles, discover the factors contributing to the popularity of gaming on mobile devices.",
  },
  {
    id: 7,
    title: "Tech Trends in 2022",
    image: "./images/blog/7.jpeg",
    date: "December 22, 2022",
    content:
      "Reflect on the technological landscape of 2022. Explore the trends that defined the year and get insights into the innovations that captivated the tech world.",
  },
  {
    id: 8,
    title: "The Impact of 5G on Gaming",
    image: "./images/blog/8.jpeg",
    date: "August 10, 2022",
    content:
      "Uncover the transformative impact of 5G on the gaming experience. From reduced latency to enhanced multiplayer capabilities, explore how 5G is revolutionizing the gaming industry.",
  },
  {
    id: 9,
    title: "E3 Expo 2021 Highlights",
    image: "./images/blog/9.jpeg",
    date: "June 15, 2021",
    content:
      "Relive the excitement of E3 2021. Explore the key highlights, announcements, and gaming revelations that took center stage at this renowned gaming expo.",
  },
  {
    id: 10,
    title: "Cybersecurity in 2020",
    image: "./images/blog/10.jpeg",
    date: "November 5, 2020",
    content:
      "Navigate the cybersecurity landscape of 2020. Learn about the challenges, threats, and advancements in cybersecurity that shaped the digital security landscape.",
  },
  {
    id: 11,
    title: "The Evolution of Console Gaming",
    image: "./images/blog/11.jpeg",
    date: "September 15, 2020",
    content:
      "Trace the evolution of console gaming through the years. From classic consoles to the latest gaming systems, explore the milestones that defined the world of console gaming.",
  },
  {
    id: 12,
    title: "The Rise of Mobile Apps",
    image: "./images/blog/12.jpeg",
    date: "July 8, 2020",
    content:
      "Witness the ascent of mobile applications. Explore how mobile apps have become an integral part of our daily lives, shaping the way we communicate, work, and entertain ourselves.",
  },
];

const BlogPage = () => {
  return (
    <div className="container mx-auto min-h-screen my-10 flex flex-col justify-center">
      <h1 className="text-3xl md:text-5xl  font-extrabold mb-4">Tech and Gaming Blog</h1>
        <div className="flex flex-row flex-wrap justify-center xl:justify-normal gap-4">
          {demoBlogData.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
    </div>
  );
};

export default BlogPage;
