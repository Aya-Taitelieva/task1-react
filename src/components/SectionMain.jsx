import React from "react";
import Section from "../components/Section";
import { users } from "./users";

const SectionMain = () => {
  return (
    <div>
      {users.map((item) => (
        <Section key={item.id} user={item} />
      ))}
    </div>
  );
};

export default SectionMain;
