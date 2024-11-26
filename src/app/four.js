import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Four = (props) => {
  const { name, data, label, description } = props;
  return (
    <div className="flex flex-col items-center justify-center p-2 text-xs gap-2 ">
      <div className="bg-white rounded-full p-3 m-1">
        <FontAwesomeIcon icon={data} />
      </div>
      <div className="flex flex-col items-center justify-center text-slate-50 ">
        <h6>
          <b>{label}</b>
        </h6>
        <p className="flex flex-col items-center justify-center">
          {description}
        </p>
      </div>
    </div>
  );
};
export default Four;
