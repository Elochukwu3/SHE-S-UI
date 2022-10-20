import React from "react";
import { faker } from "@faker-js/faker";

const imgSize = {
  width: "11rem",
  height: "10rem",
  borderRadius: ".9rem",
  ObjectFit: "cover",
};
export default function () {
  return (
    <>
      <h1 style={{ textAlign: "center", color: "#fff", paddingBottom: "1rem" }}>
        Colllections
      </h1>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
          gap: ".1rem",
        }}
        className="women"
      >
        <div>
          <img src={faker.image.fashion()} alt={"randomEmail"} style={imgSize} />
          <p>
            {faker.hacker.noun()}
            {faker.helpers.mustache()}
          </p>
        </div>
        <div>
          <img src={faker.image.technics()} alt={"rando"} style={imgSize} />
          <p>{faker.commerce.department()}</p>
        </div>
        <div>
          <img src={faker.image.nightlife()} alt={"rando"} style={imgSize} />
          <p>{faker.name.lastName()} John</p>
        </div>
        <div>
          <img src={faker.image.people()} alt={"rando"} style={imgSize} />
          <p>
            {faker.name.lastName()} {faker.hacker.noun()}
          </p>
        </div>
        <div>
          <img src={faker.image.nightlife()} alt={"rando"} style={imgSize} />
          <p>
            {faker.name.lastName()} {faker.hacker.noun()}
          </p>
        </div>
        <div>
          <img src={faker.image.business()} alt={"rando"} style={imgSize} />
          <p>
            {faker.name.lastName()} {faker.hacker.noun()}
          </p>
        </div>
      </div>
      ;
    </>
  );
}
