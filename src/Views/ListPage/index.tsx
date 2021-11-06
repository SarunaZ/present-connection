import React, {useEffect, useState} from 'react';
import { Helmet } from "react-helmet-async";

interface RestData {
  userId: number,
  id: number,
  title: string,
  body: string
}

const ListPage = () => {
  const [ listData, setListData ] = useState<RestData[] | undefined>(undefined);

  const getData = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    return await response.json();
  }

  useEffect(() => {
    getData().then((listDataRes: RestData[]) => {
      setListData([ ...listDataRes])
    });
  }, []);

  return (
    <>
      <Helmet title={'List page'} />
      <main>
        <section className="ListPageDataWrapper">
          <h1>List Data</h1>
          <div className="ListPageData">
            {listData?.map(item => {
              return (
                <div className="ListPageBox" key={item.id}>
                  <div className="ListPageBox__title">Title: {item.title}</div>
                  <div className="ListPageBox__body">Content: {item.body}</div>
                </div>
              )
            })}
          </div>
        </section>
      </main>
    </>
  );
}

export default ListPage;