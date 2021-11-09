import {useEffect, useState} from 'react';
import { Helmet } from "react-helmet-async";
import { getData } from '../../App/utils';
import Box from '../../Components/Box';
import Loader from '../../Components/Loader';
import { RestData } from "./types";

const ListPage = () => {
  const [ listData, setListData ] = useState<RestData[] | undefined>(undefined);
  const [listError, setListError] = useState<string | undefined>(undefined);

  useEffect(() => {
    getData('https://jsonplaceholder.typicode.com/posts')
    .then((listDataRes: RestData[]) => {
      setListData([ ...listDataRes])
    })
    .catch(() => setListError('Something went wrong, please try again later'))
  }, []);

  return (
    <>
      <Helmet title={'List page | Present Connection'} />
      <main className="ListPageMain">
        <h2 className="ListPageTitle">List</h2>
        <section className="ListPageDataWrapper">
          <div className="ListPageData">
            {!listData && !listError && <Loader />}
            {!listData && listError && (
              <div className="ListPageData__error">{listError}</div>
            )}
            {listData?.map(item => <Box key={item?.id} itemData={item} isReadMore />)}
          </div>
        </section>
      </main>
    </>
  );
}

export default ListPage;