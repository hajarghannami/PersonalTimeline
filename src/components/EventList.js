import eventData from "../eventData";
import Event from "./Event";
import "../styles.css";

const EventList = () => {
  const theEvents = eventData.map((oneEvent) => (
    <Event key={oneEvent.id} event={oneEvent} />
  ));

  return <div className="timeline">{theEvents}</div>;
};

export default EventList;
