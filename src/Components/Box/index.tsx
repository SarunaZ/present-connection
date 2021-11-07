import { Link } from 'react-router-dom';
import { ROUTE_ROOT } from '../../App/constants';
import { RestData } from "../../Views/ListPage/types";
import Loader from '../Loader';

interface Props {
  itemData: RestData | null;
  isReadMore?: boolean;
  isLoading?: boolean;
  isBack?: boolean;
}

const Box = (
  { 
    itemData, 
    isLoading,
    isBack, 
    isReadMore = false 
  }: Props) => (
  <>
    <div className="Box">
      {isLoading && <Loader />}
      {!isLoading && (
        <>
          <h3 className="Box__title">{itemData?.title}</h3>
          <p className="Box__body">{itemData?.body}</p>
          {isReadMore && <Link className="Box__read-more" to={`/details/${itemData?.id}`}>Read more</Link>}
          {isBack && <Link className="Box__read-more" to={ROUTE_ROOT}>Back to list</Link>}
        </>
      )}
    </div>
  </>
);

export default Box;