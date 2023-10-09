import React from "react";
import BlogCard from "../component/card/blogCard";
const demoBlogData = [
  {
    id: 1,
    title: "The Latest Gaming Trends",
    image: "gaming-trends.jpg",
    date: "October 15, 2023",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed feugiat ante euismod, convallis lorem eget, tristique dolor. Vivamus in lectus nec justo tincidunt facilisis.",
  },
  {
    id: 2,
    title: "Tech Innovations of 2023",
    image: "tech-innovations.jpg",
    date: "September 28, 2023",
    content:
      "Praesent non erat in justo vulputate vestibulum in non orci. Etiam auctor, est vel convallis tincidunt, mi tellus interdum nibh, vel luctus purus ligula in velit.",
  },
  {
    id: 3,
    title: "The Future of VR Gaming",
    image: "vr-gaming.jpg",
    date: "August 20, 2023",
    content:
      "Vivamus tempus dui sed libero tristique, eu consectetur justo bibendum. In hac habitasse platea dictumst. Vivamus laoreet quam vel nisi convallis aliquam.",
  },
  {
    id: 4,
    title: "Top Gaming Keyboards of 2023",
    image: "gaming-keyboards.jpg",
    date: "July 12, 2023",
    content:
      "Cras consequat, leo sit amet condimentum accumsan, purus ex facilisis urna, id tincidunt nulla justo nec lectus. Vivamus at elit eu justo bibendum tristique.",
  },
  {
    id: 5,
    title: "AI and the Future of Tech",
    image: "ai-tech.jpg",
    date: "June 5, 2023",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed feugiat ante euismod, convallis lorem eget, tristique dolor. Vivamus in lectus nec justo tincidunt facilisis.",
  },
  {
    id: 6,
    title: "The Rise of Mobile Gaming",
    image: "mobile-gaming.jpg",
    date: "April 18, 2023",
    content:
      "Praesent non erat in justo vulputate vestibulum in non orci. Etiam auctor, est vel convallis tincidunt, mi tellus interdum nibh, vel luctus purus ligula in velit.",
  },
  {
    id: 7,
    title: "Tech Trends in 2022",
    image: "tech-trends-2022.jpg",
    date: "December 22, 2022",
    content:
      "Vivamus tempus dui sed libero tristique, eu consectetur justo bibendum. In hac habitasse platea dictumst. Vivamus laoreet quam vel nisi convallis aliquam.",
  },
  {
    id: 8,
    title: "The Impact of 5G on Gaming",
    image: "5g-gaming.jpg",
    date: "August 10, 2022",
    content:
      "Cras consequat, leo sit amet condimentum accumsan, purus ex facilisis urna, id tincidunt nulla justo nec lectus. Vivamus at elit eu justo bibendum tristique.",
  },
  {
    id: 9,
    title: "E3 Expo 2021 Highlights",
    image: "e3-expo-2021.jpg",
    date: "June 15, 2021",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed feugiat ante euismod, convallis lorem eget, tristique dolor. Vivamus in lectus nec justo tincidunt facilisis.",
  },
  {
    id: 10,
    title: "Cybersecurity in 2020",
    image: "cybersecurity-2020.jpg",
    date: "November 5, 2020",
    content:
      "Praesent non erat in justo vulputate vestibulum in non orci. Etiam auctor, est vel convallis tincidunt, mi tellus interdum nibh, vel luctus purus ligula in velit.",
  },
  {
    id: 11,
    title: "The Evolution of Console Gaming",
    image: "console-gaming-evolution.jpg",
    date: "September 15, 2020",
    content:
      "Vivamus tempus dui sed libero tristique, eu consectetur justo bibendum. In hac habitasse platea dictumst. Vivamus laoreet quam vel nisi convallis aliquam.",
  },
  {
    id: 12,
    title: "The Rise of Mobile Apps",
    image: "rise-of-mobile-apps.jpg",
    date: "July 8, 2020",
    content:
      "Cras consequat, leo sit amet condimentum accumsan, purus ex facilisis urna, id tincidunt nulla justo nec lectus. Vivamus at elit eu justo bibendum tristique.",
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
