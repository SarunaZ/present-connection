import {useEffect, useState} from 'react';
import { Helmet } from "react-helmet-async";
import { getData } from '../../App/utils';
import Box from '../../Components/Box';
import Loader from '../../Components/Loader';

interface RestData {
  userId: number,
  id: number,
  title: string,
  body: string
}

const ListPage = () => {
  const [ listData, setListData ] = useState<RestData[] | undefined>(undefined);

  useEffect(() => {
    getData('https://jsonplaceholder.typicode.com/posts')
    .then((listDataRes: RestData[]) => {
      setListData([ ...listDataRes])
    });
  }, []);

  return (
    <>
      <Helmet title={'List page | Present Connection'} />
      <main className="ListPageMain">
        <h2 className="ListPageTitle">List</h2>
        <section className="ListPageDataWrapper">
          <div className="ListPageData">
            {!listData && <Loader />}
            {listData?.map(item => <Box key={item?.id} itemData={item} isReadMore />)}
          </div>
        </section>
      </main>
    </>
  );
}

export default ListPage;