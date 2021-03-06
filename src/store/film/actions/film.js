import {
  getFilmData,
} from '../../../services';

import {
  fetchFilmBegin,
  fetchFilmSuccess,
  fetchFilmFailure,
} from './actionTypes';

export const getFilm = filmId => (dispatch) => {
  dispatch(fetchFilmBegin());
  getFilmData(filmId)
    .then(({ data }) => {
      dispatch(fetchFilmSuccess(data));
    })
    .catch((error) => {
      dispatch(fetchFilmFailure(error));
    });
};
