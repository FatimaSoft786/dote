import React from "react";
import Cover from "../images/book_cover.png";

const Ebooks = () => {
  return (
    <div className=" w-full h-aut0">
      <div className=" w-full h-auto flex flex-col items-center justify-center">
        <h1 className=" w-1/2 text-center text-black text-6xl font-extrabold items-center">
          Dote E-Books
        </h1>
        <p className="text-black text-lg w-1/2 text-center">
          Build your knowledge and help your childcare center succeed with these
          in-depth guides.
        </p>

        <div className=" w-1/2 h-14 border-white bg-white shadow-md shadow-rose-300  border rounded-lg mt-5">
          <div className="flex items-center h-full">
            <input
              type="text"
              placeholder="Search for any book"
              className="w-full h-full border rounded-lg border-white focus:outline-none focus:ring-0 leading-none pl-2"
            />
            <button className="bg-primary text-white rounded-lg hover:bg-primary w-1/3 h-full py-0 mb-3">
              Search
            </button>
          </div>
        </div>
      </div>

      <div className=" grid grid-cols-3 mx-40 my-10">
        <div className="rounded-2xl border flex flex-col items-center justify-center py-5 mx-10">
          <img className=" w-40 h-40 mt-5" src={Cover} alt="award" />

          <p className=" font-bold text-black text-lg mt-2r px-2 text-center">
            The Parent Communication Toolkit: How to Wow Families This School
            Year with Dote
          </p>

          <p className=" font-regular text-base mx-5 text-center">
            Using anecdotal records is one way to document observations of
            children in your classroom. Anecdotal records must be factual and
            ...
          </p>

          <button className=" w-3/4 bg-transparent text-primary">
            Get this book
          </button>
        </div>

        <div className=" rounded-lg border flex flex-col items-center justify-center py-5 mx-10">
          <img className=" w-40 h-40 mt-5" src={Cover} alt="award" />

          <p className=" font-bold text-black text-lg mt-2 text-center"> Using anecdotal records is one way to document observations of
            children in your classroom. Anecdotal records must be factual and
            ...</p>

          <p className=" font-regular text-base mx-5 text-center">
          Using anecdotal records is one way to document observations of
            children in your classroom. Anecdotal records must be factual and
            ...
          </p>

          <button className=" w-3/4 bg-transparent text-primary">
            Get this book
          </button>
        </div>

        <div className=" rounded-lg border flex flex-col items-center justify-center py-5 mx-10">
          <img className=" w-40 h-40 mt-5" src={Cover} alt="award" />

          <p className=" font-bold text-black text-lg mt-2 text-center">
          Using anecdotal records is one way to document observations of
            children in your classroom. Anecdotal records must be factual and
            ...
          </p>

          <p className=" font-regular text-base mx-5 text-center">
          Using anecdotal records is one way to document observations of
            children in your classroom. Anecdotal records must be factual and
            ...
          </p>

          <button className=" w-3/4 bg-transparent text-primary">
            Get this book
          </button>
        </div>


        <div className=" rounded-lg border flex flex-col items-center justify-center py-5 mx-10 mt-5">
          <img className=" w-40 h-40 mt-5" src={Cover} alt="award" />

          <p className=" font-bold text-black text-lg mt-2">
            No training required
          </p>

          <p className=" font-regular text-base mx-5 text-center">
          Using anecdotal records is one way to document observations of
            children in your classroom. Anecdotal records must be factual and
            ...
          </p>

          <button className=" w-3/4 bg-transparent text-primary">
            Get this book
          </button>
        </div>


        <div className=" rounded-lg border flex flex-col items-center justify-center py-5 mx-10 mt-5">
          <img className=" w-40 h-40 mt-5" src={Cover} alt="award" />

          <p className=" font-bold text-black text-lg mt-2">
            No training required
          </p>

          <p className=" font-regular text-base mx-5 text-center">
          Using anecdotal records is one way to document observations of
            children in your classroom. Anecdotal records must be factual and
            ...
          </p>

          <button className=" w-3/4 bg-transparent text-primary">
            Get this book
          </button>
        </div>


        <div className=" rounded-lg border flex flex-col items-center justify-center py-5 mx-10 mt-5">
          <img className=" w-40 h-40 mt-5" src={Cover} alt="award" />

          <p className=" font-bold text-black text-lg mt-2">
            No training required
          </p>

          <p className=" font-regular text-base mx-5 text-center">
            Get set up in minutes. No training required. Powerful, yet simple
            and easy to use.
          </p>

          <button className=" w-3/4 bg-transparent text-primary">
            Get this book
          </button>
        </div>


      </div>
    </div>
  );
};

export default Ebooks;
