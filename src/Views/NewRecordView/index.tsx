import React, { SyntheticEvent, useRef, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { getData } from '../../App/utils';
import Box from '../../Components/Box';
import Loader from '../../Components/Loader';
import { RestData } from '../ListView/types';
import { MAX_BODY_CHAR_NUMBER, MAX_INPUT_CHAR_NUMBER } from './constants';

const NewRecordPage = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [boxData, setBoxData] = useState<RestData | undefined>(undefined);
  const [formError, setFormError] = useState<string | undefined>(undefined);

  const inputTitleRef = useRef<HTMLInputElement>(null);
  const textRef = useRef<HTMLTextAreaElement>(null);

  const submitRecord = (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    setIsLoading(true);

    getData('https://jsonplaceholder.typicode.com/posts', {
      method: "post",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },  

      body: JSON.stringify({
        title: inputTitleRef.current?.value,
        body: textRef.current?.value
      })
    })
    .then(res =>{
      setBoxData(res);
    })
    .catch(() => setFormError('Something went wrong, please try again later'))
    .finally(() => setIsLoading(false));
  }

  return (
    <>
      <Helmet title={'New record page | Present Connection'} />
      <section className="NewRecordPage">
        <h2>New record</h2>
        {boxData && (
          <>
            <Box itemData={boxData} />
            <button 
              className="NewRecordForm__button" 
              onClick={() => setBoxData(undefined)}
            >
              New record +
            </button>
          </>
        )}
        {!boxData && (
          <form className="NewRecordForm" onSubmit={submitRecord}>
            <div>
              <label 
                className="NewRecordForm__label" 
                htmlFor='recordTitle'
              >
                Record title
              </label>
              <input
                maxLength={MAX_INPUT_CHAR_NUMBER}
                className="NewRecordForm__input"
                ref={inputTitleRef}
                type="text"
                name='recordTitle'
              />
            </div>
            <div>
              <label 
                className="NewRecordForm__label"
                htmlFor='recordText'
              >
                Record title
              </label>
              <textarea
                maxLength={MAX_BODY_CHAR_NUMBER}
                name="recordText"
                ref={textRef}
                className="NewRecordForm__text" 
              />
            </div>
            <button 
              type="submit"
              disabled={isLoading}
              className="NewRecordForm__button"
            >
              Submit
              {isLoading && <Loader />}
            </button>
            {formError && (
              <div className="NewRecordForm__error">{formError}</div>
            )}
          </form>
        )}
      </section>
    </>
  );
}

export default NewRecordPage;