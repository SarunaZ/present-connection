import React, {useEffect, useState} from 'react';

interface List {
  userId: number,
  id: number,
  title: string,
  body: string
}

const DetailsPage = () => {
  const [ listData, setListData ] = useState<List[] | null>(null);

  const getData = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    return await response.json();
  }

  useEffect(() => {
    getData().then((listDataRes: List[]) => {
      setListData([ ...listDataRes])
    });
  }, []);

  console.log(listData)
  return (
    <ul>
      {listData?.map(item => {
        return (
          <>
            <li key={item.id}>{item.title}</li>
            <li key={item.id}>{item.body}</li>
          </>
        )
      })}
    </ul>
  );
}

export default DetailsPage;