import _ from "lodash";
import jsonplaceholder from "../apis/jsonplaceholder";

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  await dispatch(fetchPosts());
  // mapping, extracting ids and the the unique ones
  const userIds = _.uniq(_.map(getState().posts, "userId"));
  userIds.forEach((id) => dispatch(fetchUser(id)));
};

export const fetchPosts = () => async (dispatch) => {
  const response = await jsonplaceholder.get("/posts");
  dispatch({ type: "FETCH_POSTS", payload: response.data });
};
// original function, makes one call per id per post, 10x for id 1, 10x for 2 and so on...
// export const fetchUser = (id) => async (dispatch) => {
//   const response = await jsonplaceholder.get(`/users/${id}`);
//   dispatch({ type: "FETCH_USER", payload: response.data });
// };

/** then optimized by 2 ways:
 * 1) Memoizing with Lodash and 2)fetchPostsAndUsers
 */

///*** 1) Memoizing with Lodash */
// export const fetchUser = (id) => (dispatch) => {
//   _fetchUser(id, dispatch);
// };

// the underscore signifies that is private and
// only must be modified if the developer knows exactly why it is made for

// const _fetchUser = _.memoize(async (id, dispatch) => {
//   const response = await jsonplaceholder.get(`/users/${id}`);
//   dispatch({ type: "FETCH_USER", payload: response.data });
// });

/** The downside of this approach is that _fetchUser will be called just once with a given id
 * for the whole application. And what if we have another functionality that requires a similar
 * execution?
 */
/// end of 1)

// 2)fetchPostsAndUsers

export const fetchUser = (id) => async (dispatch) => {
  const response = await jsonplaceholder.get(`/users/${id}`);
  dispatch({ type: "FETCH_USER", payload: response.data });
};

/// end of 2)
