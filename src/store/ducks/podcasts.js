import { createReducer, createActions } from "reduxsauce";
import Immutable from "seamless-immutable";

/**
 * Action Types and Creatores
 */

const { Types, Creators } = createActions({
  loadRequest: null,
  loadSuccess: ["data"],
  loadFailure: null
});
/**
 * Com o reduxsauce é possivel automatizar a geração dos types e dos creators
 * da forma que esta escrito a cima ficariamos com:
 *
 * Types = {'LOAD_REQUEST', 'LOAD_SUCCESS', 'LOAD_FAILURE'}
 *
 * Creators = {
 *  loadRequest: () =>({type: 'LOAD_REQUEST}),
 *  loadSuccess: (data) => ({type: 'LOAD_SUCCESS', data })
 *  loadFailure: () => ({type:'LOAD_FAILURE'})
 * }
 */
export const PodcastsTypes = Types;

//Export ActionsCreatrs with default
export default Creators;

/**
 * Initial State
 */
export const DEFAULT_STATE = Immutable({
  data: []
});

/**
 * Reducers
 */
export const reducer = createReducer(DEFAULT_STATE, {
  [Types.LOAD_SUCCESS]: (state, { data }) => state.merge({ data })
});
