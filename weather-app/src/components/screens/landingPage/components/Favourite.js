import { useSelector } from "react-redux";
import FavouriteInfo from "./FavouriteInfo";
import BlurSkeleton from "../../../common/BlurSkeleton";

const Favourite = () => {
  const favourite = useSelector((state) => state.favourite);
  const isLoading = useSelector((state) => state.loading);

  return (
    <div className="favourite">
      <div className="favourite-head">
        <span>Favourite</span>
      </div>
      <div className="favourite-main">
        {favourite.map((data, index) => {
          return isLoading ? (
            <BlurSkeleton
              key={index}
              className="favourite-main-item-common borRa10px"
            />
          ) : (
            <FavouriteInfo key={index} data={data} />
          );
        })}
      </div>
    </div>
  );
};

export default Favourite;
