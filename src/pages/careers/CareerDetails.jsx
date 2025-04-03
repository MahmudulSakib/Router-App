import { useLoaderData, useParams } from "react-router";

const careerDetailsLoader = async ({ params }) => {
  const { id } = params;

  const res = await fetch("http://localhost:8080/careers/" + id);

  if (!res.ok) {
    throw Error("Could not find that Career!");
  }

  return res.json();
};

const CareerDetails = () => {
  //   const { id } = useParams;
  const career = useLoaderData();

  return (
    <div className="career-details">
      <h2>Career Details for {career.title}</h2>
      <p>Starting Salaray: {career.salary}</p>
      <p>Location: {career.location}</p>
      <div className="details">
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta sed
          sunt ipsam quam assumenda quasi ipsa facilis laborum rerum voluptatem!
        </p>
      </div>
    </div>
  );
};

export default CareerDetails;
export { careerDetailsLoader };
