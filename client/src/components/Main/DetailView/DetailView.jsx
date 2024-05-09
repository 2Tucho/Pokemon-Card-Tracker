import { useContext } from "react";
import { SearchDataContext } from "../../../context/SearchDataContext";

const DetailView = () => {
  const searchedData = useContext(SearchDataContext);

  return <section className="detail-view">
    
  </section>;
};

export default DetailView;
