import React, { SyntheticEvent } from 'react';

const NewRecordPage = () => {
  const submitRecord = (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();

  }

  return (
    <form className="NewRecordForm" onSubmit={submitRecord}>
      <label className="NewRecordForm__label" htmlFor='recordTitle'>Label</label>
      <input className="NewRecordForm__input" type="text" name='recordTitle'/>
      <textarea className="NewRecordForm__text" />
    </form>
  );
}

export default NewRecordPage;