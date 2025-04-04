import { useLoaderData, Link } from "react-router";

const careersLoader = async () => {
  const res = await fetch("http://localhost:8080/careers");
  if (!res.ok) {
    throw Error("Could not fetch the list of careers");
  }
  return res.json();
};

const Careers = () => {
  const careers = useLoaderData();

  return (
    <div className="careers">
      {careers.map((career) => {
        return (
          <Link to={career.id.toString()} key={career.id}>
            <p>{career.title}</p>
            <p>Based in {career.location}</p>
          </Link>
        );
      })}
    </div>
  );
};

export default Careers;
export { careersLoader };
