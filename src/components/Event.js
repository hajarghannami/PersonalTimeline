import "../styles.css";

const Event = (props) => {
  return (
    <div className="container right">
      <div className="content">
        <h2>{props.event.year}</h2>
        <h3>{props.event.title}</h3>
        <p>{props.event.description}</p>
        <img src={props.event.image} />
      </div>
    </div>
  );
};

export default Event;
