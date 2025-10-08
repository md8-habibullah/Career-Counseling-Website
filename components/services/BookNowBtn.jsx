"use client";

import React from "react";

const BookNowBtn = ({ text, name, counselor }) => {
  return (
    <div>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <button
        className="btn btn-primary mt-4 hover:scale-105 transition-transform duration-300"
        onClick={() => document.getElementById("my_modal_2").showModal()}
      >
        {text || "Book Now"}
      </button>
      <dialog id="my_modal_2" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Booked successfully</h3>
          <p className="py-4">
            You are successfully booked -- <strong>{name}</strong> by{" "}
            <i>{counselor}</i>
          </p>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
};

export default BookNowBtn;
