import React, { useState } from "react";
import Affairs from "./Affairs";

// types
export type AffairPriorityType = "low" | "middle" | "high";

export type AffairType = {
  _id: number;
  name: string;
  priority: AffairPriorityType;
};

export type AffairsType = Array<AffairType>;

export type FilterType = "all" | AffairPriorityType;

// constants
const defaultAffairs: AffairsType = [
  { _id: 1, name: "React", priority: "high" },
  { _id: 2, name: "anime", priority: "low" },
  { _id: 3, name: "games", priority: "low" },
  { _id: 4, name: "work", priority: "high" },
  { _id: 5, name: "html & css", priority: "middle" },
];

// pure helper functions
export const filterAffairs = (a: AffairsType, f: FilterType) =>
  f === "all" ? a : a.filter((a) => a.priority === f);

export const deleteAffair = (
  a: AffairsType,
  i: number
): AffairsType => a.filter((a) => a._id !== i);

// Component
function HW2() {
  const [affairs, setAffairs] =
    useState<AffairsType>(defaultAffairs); // need to fix any
  const [filter, setFilter] = useState<FilterType>("all");

  const filteredAffairs = filterAffairs(affairs, filter);

  const deleteAffairCallback = (_id: number) =>
    setAffairs(deleteAffair(affairs, _id));

  return (
    <div className="homework">
      <h2 className="section_title">Homework 2</h2>
      <Affairs
        data={filteredAffairs}
        setFilter={setFilter}
        deleteAffairCallback={deleteAffairCallback}
      />
      <hr />
    </div>
  );
}

export default HW2;
