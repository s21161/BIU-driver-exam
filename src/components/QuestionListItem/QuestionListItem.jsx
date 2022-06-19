import React from "react";

import { useNavigate } from "react-router-dom";

import "./QuestionListItem.css";

import { QuestionContext } from "../../contexts/QuestionsContext/QuestionContext";

import Button from "../Button/Button";

export default function QuestionListItem({ id, content }) {
  let navigate = useNavigate();

  const { questionDispath } = React.useContext(QuestionContext);

  return (
    <li className="questions-list-item">
      <span className="questions-list-item--content">
        {id}: {content}
      </span>
      <Button
        label="Usuń Pytanie"
        className="questions-list-item--delete-question"
        onClick={() => questionDispath({ type: "DELETE_QUESTION", id: id })}
      />
      <Button
        label="Edytuj"
        className="questions-list-item--delete-question"
        onClick={() => navigate(`/edit/question/${id}`)}
      />
    </li>
  );
}
