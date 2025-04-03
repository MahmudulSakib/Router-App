import { Link, useRouteError } from "react-router";

const CareersError = () => {
  const error = useRouteError();

  return (
    <div className="careers-error">
      <h2>Error</h2>
      <p>{error.message}</p>
      <Link to="/">Return to Home</Link>
    </div>
  );
};

export default CareersError;
