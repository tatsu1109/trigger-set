import { useState } from "react";
import Graph from './Graph';
// import PropTypes from 'prop-types';

export default function GraphForm({ defaultData }) {
    const [data, setData] = useState(defaultData)
    const [display, setDisplay] = useState("Form")


    return (
        <div>
            <button onClick={() => display === "Form" ? setDisplay("Graph") : setDisplay("Form")}>{display}</button>
                { display === "Form" ?
            <div display="true">
                <form>
                    <label htmlFor="a">A</label>
                    <input id="a"
                        value={data.A}
                        onChange={event => setData({ ...data, A: event.target.value })}
                    />
                    <label htmlFor="b">B</label>
                    <input id="b"
                        value={data.B}
                        onChange={event => setData({ ...data, B: event.target.value })}
                    />
                </form>
            </div> 
            :
            <div display="false">
                <Graph data={convertDataForGraph(data)} />
            </div>
            }
        </div>
  );
}

const convertDataForGraph = data => {
    return [
        { subject: "A", value: data.A },
        { subject: "B", value: data.B },
        { subject: "fullMark", value: data.fullMark },
    ]
}

// Task.propTypes = {
//   /** Composition of the task */
//   task: PropTypes.shape({
//     /** Id of the task */
//     id: PropTypes.string.isRequired,
//     /** Title of the task */
//     title: PropTypes.string.isRequired,
//     /** Current state of the task */
//     state: PropTypes.string.isRequired,
//   }),
//   /** Event to change the task to archived */
//   onArchiveTask: PropTypes.func,
//   /** Event to change the task to pinned */
//   onPinTask: PropTypes.func,
// };