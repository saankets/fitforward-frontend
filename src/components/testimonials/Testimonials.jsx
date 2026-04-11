import React from "react";
import "./testimonials.css";

const Testimonials = () => {
  const testimonialsData = [
    {
      id: 1,
      name: "Aarav Mehta",
      position: "Customer",
      message:
        "I’ve transformed my fitness journey with this website! The courses are detailed, and the community support is incredible. Highly recommend!",
      image:
        "https://thumbs.dreamstime.com/b/indian-man-young-good-looking-people-smiling-standing-isolated-white-background-31400054.jpg",
    },
    {
      id: 2,
      name: "Priya Singh",
      position: "Customer",
      message:
        "This platform exceeded my expectations! The variety of courses allowed me to find exactly what I needed. The instructors are so motivating!",
      image:
        "https://t4.ftcdn.net/jpg/04/98/81/37/360_F_498813770_KCXWSWs0zYkC3O8gGr7axxVcYeuEB766.jpg",
    },
    {
      id: 3,
      name: "Rohan Gupta",
      position: "Customer",
      message:
        "I love the flexibility of learning online! The workouts are well-structured, and I’ve seen great results in just a few weeks. Truly inspiring!",
      image:
        "https://media.istockphoto.com/id/1136413215/photo/young-man-at-street-market.jpg?s=612x612&w=0&k=20&c=obnaR5III0jRxHKd4ZPl3LRC2pI792KbHYR2eBzKKe8=",
    },
    {
      id: 4,
      name: "Sneha Sharma",
      position: "Customer",
      message:
        "The fitness courses here are a game-changer! I gained confidence and knowledge. The live sessions with trainers are particularly helpful!",
      image:
        "https://static.vecteezy.com/system/resources/thumbnails/037/750/159/small/ai-generated-beautiful-indian-woman-in-saree-smiling-at-camera-at-home-free-photo.jpg",
    },
  ];
  return (
    <section className="testimonials">
      <h2>What our customers say</h2>
      <div className="testmonials-cards">
        {testimonialsData.map((e) => (
          <div className="testimonial-card" key={e.id}>
            <div className="student-image">
              <img src={e.image} alt="" />
            </div>
            <p className="message">{e.message}</p>
            <div className="info">
              <p className="name">{e.name}</p>
              <p className="position">{e.position}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
