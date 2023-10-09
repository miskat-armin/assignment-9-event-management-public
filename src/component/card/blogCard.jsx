import PropTypes from "prop-types";

const BlogCard = ({ blog }) => {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-lg">
      <img
        src={blog.image}
        alt={blog.title}
        className="w-full h-52 object-cover"
      />
      <div className="px-6 py-4">
        <h2 className="text-xl font-semibold mb-2">{blog.title}</h2>
        <p className="text-gray-600 text-sm mb-2">{blog.date}</p>
        <p className="text-gray-700 text-base">{blog.content}</p>
      </div>
    </div>
  );
};

BlogCard.propTypes = {
  blog: PropTypes.shape({
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  }).isRequired,
};

export default BlogCard;
