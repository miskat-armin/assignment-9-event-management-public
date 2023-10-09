import { Avatar, Card } from "flowbite-react";
import React from "react";

const reviews = [
  {
    id: 1,
    name: "Sarah Smith",
    image: "https://example.com/sarah.jpg",
    review: "I recently used this website to organize a gaming event, and I couldn't be happier with the results. The team behind it is incredibly professional and made the entire process seamless.",
  },
  {
    id: 2,
    name: "Mike Johnson",
    image: "https://example.com/mike.jpg",
    review: "I've attended multiple tech conferences organized by this website, and each one has been a fantastic experience. The speakers, workshops, and overall organization are top-notch.",
  },
  {
    id: 3,
    name: "Emily Rogers",
    image: "https://example.com/emily.jpg",
    review: "As a streamer, I rely on events like these to connect with my audience. This website has consistently delivered engaging gaming events that help me grow my channel. Kudos to the team!",
  },
  {
    id: 4,
    name: "David Chen",
    image: "https://example.com/david.jpg",
    review: "I had the pleasure of working with this website to host a tech product launch event. Their attention to detail and commitment to success were impressive. I highly recommend them.",
  },
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
