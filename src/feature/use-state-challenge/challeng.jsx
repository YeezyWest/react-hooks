import React, { useState } from "react";
import { data } from "../../data/data";

export function Challenge() {
  const [people, setPeople] = useState(data);
  return (
    <div>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id}>
            <h4>{name}</h4>
          </div>
        );
      })}
    </div>
  );
}
