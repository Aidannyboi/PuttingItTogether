import { useState } from "react";

const Information = (props) => {
    const {firstName, lastName, age, hairColor} = props;
    const [personAge, setPersonAge] = useState(age);

    return(
        <div>
            <h1>{firstName}, {lastName}</h1>
            <h3>Hair color: {hairColor}</h3>
            <h5>Age: {personAge}</h5>
            <button onClick={() => setPersonAge(personAge + 1)}> Birthday Button for {firstName} {lastName}</button>
        </div>
    )


}

export default Information;