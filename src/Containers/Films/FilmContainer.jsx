import { connect } from "react-redux";
import { FilmDetail } from "../../Components/FilmDetails";
import { getFilm } from "../../store/film/actions";
import { withRouter } from "react-router-dom";

const mapStateToProps = state => {
  const { filmData, loading, error } = state.film;
  return {
    filmData,
    loading,
    error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getFilm: id => dispatch(getFilm(id))
  };
};

export const FilmContainer = withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(FilmDetail)
);
