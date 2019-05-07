import { connect } from "react-redux";
import { Films } from "../../Components/Films";
import { getFilms } from "../../store/films/actions";

const mapStateToProps = state => {
  const { searchResult } = state.search;
  return {
    filmsList: searchResult
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getFilms: params => dispatch(getFilms(params))
  };
};

export const SearchContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Films);
