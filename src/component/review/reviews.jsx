import { Avatar, Card } from "flowbite-react";
import React from "react";

const reviews = [
  {
    id: 1,
    name: "John Doe",
    image: "https://example.com/profile1.jpg",
    review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 2,
    name: "John Doe",
    image: "https://example.com/profile1.jpg",
    review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  // Add more reviews here
];

const CustomerReviews = () => {
  return (
    <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
      {reviews.map((review, idx) => (
        <Card
          key={idx}
          className="bg-white shadow-md hover:shadow-lg rounded-lg max-w-sm"
        >
          <Avatar placeholderInitials="Profile" rounded size={"xl"}/>
          <h3 className="text-xl font-semibold">{review.name}</h3>
          <p className="text-gray-600">{review.review}</p>
        </Card>
      ))}
    </div>
  );
};

export default CustomerReviews;
