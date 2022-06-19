import React from "react";

import "./QuestionsList.css";

import { QuestionContext } from "../../contexts/QuestionsContext/QuestionContext";
import { EditContext } from "../../contexts/EditContext/EditContext";

import usePagination from "../../hooks/usePagination";

import Pagination from "../Pagination/Pagination";
import Button from "../Button/Button";
import QuestionListItem from "../QuestionListItem/QuestionListItem";

export default function QuestionsList() {
  const { questionState } = React.useContext(QuestionContext);
  const { editState, editDispatch } = React.useContext(EditContext);

  const [firstPageItem, lastPageItem] = usePagination(
    editState.itemsPerPage,
    editState.currentPage
  );

  const handleNumOfPages = React.useCallback(() => {
    editDispatch({ type: "HANDLE_NUM_OF_PAGES", items: questionState.length });
  }, [editDispatch, questionState.length]);

  React.useEffect(() => {
    handleNumOfPages();
  }, [handleNumOfPages]);

  return (
    <section className="questions-list">
      <article className="questions-list__header-button-wrapper">
        <h2 className="questions-list__header">Baza pytań</h2>
        <Button
          label="Dodaj Pytanie"
          className="questions-list__add-question"
        />
      </article>
      {questionState.length !== 0 ? (
        <ul className="questions-list__list">
          {questionState
            .map(({ id, content }) => (
              <QuestionListItem
                key={`${id}-${content}`}
                id={id}
                content={content}
              />
            ))
            .slice(firstPageItem, lastPageItem)}
        </ul>
      ) : (
        <p>Brak Pytań</p>
      )}
      {questionState.length > editState.itemsPerPage &&
        questionState.length !== 0 && (
          <Pagination
            currentPage={editState.currentPage}
            numOfPages={editState.numOfPages}
            onPrev={() => editDispatch({ type: "PREV_PAGE" })}
            onNext={() => editDispatch({ type: "NEXT_PAGE" })}
          />
        )}
    </section>
  );
}
