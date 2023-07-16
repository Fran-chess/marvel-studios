import React from "react";
import { Figure } from "./Figure";

const Main = () => {
  return (
    <div className=" bg-zinc-50 dark:bg-zinc-950">
      <section >
        <article className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
         <Figure />
        </article>
      </section>
    </div>
  );
};

export default Main;
