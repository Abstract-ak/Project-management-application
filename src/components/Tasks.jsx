import React from "react";
import NewTask from "./NewTask";

export default function Tasks() {
  return (
    <section>
      <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
      <NewTask />
      <p className="text-slate-800 my-4">
        This Project does not contain any Tasks
      </p>
      <ul></ul>
    </section>
  );
}
