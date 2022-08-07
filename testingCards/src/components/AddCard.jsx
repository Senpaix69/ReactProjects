import React, { useState, useEffect } from "react";
import Card from "./Card";
import { nanoid } from "nanoid";

const AddCard = () => {
  const [cards, setCards] = useState(() => {
    const localData = JSON.parse(localStorage.getItem("cards"));
    return localData?.length
      ? localData
      : [
          {
            key: nanoid(),
            title: "Welcome Mount Fuji",
            startDate: "12-02-2022",
            endDate: "23-05-2022",
            desc: "My journey to mount fuji was so good",
          },
        ];
  });

  useEffect(() => {
    localStorage.setItem("cards", JSON.stringify(cards));
  }, [cards]);

  const [formData, setFormData] = useState({
    title: "",
    startDate: "",
    endDate: "",
    desc: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevForm) => {
      return {
        ...prevForm,
        [name]: value,
      };
    });
  };

  const addCard = () => {
    if (
      formData.title.trim().length > 0 &&
      formData.endDate.trim().length > 0 &&
      formData.startDate.trim().length > 0 &&
      formData.desc.trim().length > 0
    ) {
      const newCard = {
        key: nanoid(),
        title: formData.title,
        startDate: formData.startDate,
        endDate: formData.endDate,
        desc: formData.desc,
      };
      const newCards = [...cards, newCard];
      setCards(newCards);
      formData.key = null;
    } else {
      alert("Emtpy Cards can't be added");
    }
  };

  const deleteCard = (key) => {
    if (key !== cards[0].key) {
      console.log("Delete");
      const newCards = cards.filter((card) => card.key !== key);
      setCards(newCards);
    } else {
      alert("Can't delete default card");
    }
  };

  return (
    <>
      <div className="back">
        <div className="Card">
          <input
            className="input--title"
            placeholder="Enter Title"
            name="title"
            value={formData.title}
            onChange={handleChange}
          ></input>
          <div className="date">
            <input
              placeholder="startDate"
              className="input--Startdate"
              name="startDate"
              onChange={handleChange}
              value={formData.startDate}
            ></input>
            <input
              placeholder="endDate"
              className="input--EndDate"
              name="endDate"
              onChange={handleChange}
              value={formData.end}
            ></input>
          </div>
          <textarea
            placeholder="Enter Descriptions"
            className="input--Card--Desc"
            name="desc"
            onChange={handleChange}
            value={formData.desc}
          ></textarea>
          <button onClick={addCard}>add card</button>
        </div>
      </div>
      {cards.map((card) => (
        <Card
          key={card.key}
          id={card.key}
          title={card.title}
          startDate={card.startDate}
          endDate={card.endDate}
          desc={card.desc}
          handleDelete={deleteCard}
        />
      ))}
    </>
  );
};

export default AddCard;
