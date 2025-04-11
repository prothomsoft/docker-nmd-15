export default function Testimonials() {
  const testimonials = [
    {
      name: "John Doe",
      feedback:
        "The photos from our wedding were absolutely stunning! Highly recommend.",
      image: "/image1.jpg", // Using /image1.jpg
    },
    {
      name: "Jane Smith",
      feedback:
        "Amazing experience! The portraits turned out better than I could have imagined.",
      image: "/image1.jpg", // Using /image1.jpg
    },
    {
      name: "Emily Johnson",
      feedback:
        "Captured every moment perfectly. Will definitely book again for future events.",
      image: "/image1.jpg", // Using /image1.jpg
    },
  ];

  return (
    <div className="flex flex-col items-center space-y-8">
      {testimonials.map((testimonial, index) => (
        <div
          key={index}
          className="bg-white shadow-lg rounded-lg p-6 max-w-lg text-center"
        >
          <div className="flex flex-col items-center">
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-16 h-16 rounded-full mb-4 object-cover"
            />
            <p className="text-lg italic">&quot;{testimonial.feedback}&quot;</p>
            <h3 className="mt-4 text-xl font-semibold">{testimonial.name}</h3>
          </div>
        </div>
      ))}
    </div>
  );
}