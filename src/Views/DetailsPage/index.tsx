import React, {useEffect, useState} from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import { getData } from '../../App/utils';
import Box from "../../Components/Box";
import { RestData } from "../ListPage/types";

interface RouteParams {
  id: string;
}

const DetailsPage = () => {
  const [ data, setData ] = useState<RestData | null>(null);
  const params = useParams<RouteParams>();

  useEffect(() => {
    getData(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
    .then((listDataRes: RestData) => {
      setData(listDataRes)
    });
  // eslint-disable-next-line 
  }, []);

  return (
    <>
    <Helmet title={`${data?.title} | Present Connection`} />
    <div className="DetailsPageWrapper">
      <section>
        <h2>Details</h2>
        <Box itemData={data} isBack isLoading={!data}/>
      </section>
    </div>
    </>
);
}

export default DetailsPage;