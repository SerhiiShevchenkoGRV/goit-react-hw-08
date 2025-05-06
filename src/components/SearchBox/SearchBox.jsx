import { useDispatch, useSelector } from "react-redux";

import clsx from "clsx";
import s from "./SearchBox.module.css";
import { selectNameFilter } from "../../redux/filters/selectors";
import { changeFilter } from "../../redux/filters/slice";

export default function SearchBox() {
  const nameFilter = useSelector(selectNameFilter);
  const dispatch = useDispatch();
  const handleChange = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <div>
      <p>Find contacts by name</p>
      <input
        type="text"
        className={clsx(s.srchInpt)}
        value={nameFilter}
        onChange={handleChange}
      />
    </div>
  );
}
