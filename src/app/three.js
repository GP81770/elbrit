import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Three = (props) => {
  const { name, data, label, description } = props;
  return (
    <div className="flex gap-2">
      <div className="bg-cyan-950 rounded-full p-3 m-1">
        <FontAwesomeIcon icon={data} color="white" />
      </div>
      <div>
        <h6>
          <b>{label}</b>
        </h6>
        <p>{description}</p>
      </div>
    </div>
  );
};
export default Three;
