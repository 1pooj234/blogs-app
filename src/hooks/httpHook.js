import { useReducer, useCallback } from "react";

const httpReducer = (state, action) => {
  if (action.type === "LOADING") {
    return {
      data: null,
      status: "pending",
      error: null,
    };
  }
  if (action.type === "SUCCESS") {
    return {
      data: action.responseData,
      status: "completed",
      error: null,
    };
  }
  if (action.type === "ERROR") {
    return {
      data: null,
      status: "completed",
      error: action.error,
    };
  }
  return state;
};

const HttpHook = (requestFunc, loading = true) => {
  const [httpState, dispatch] = useReducer(httpReducer, {
    status: loading === true ? "pending" : false,
    data: null,
    error: null,
  });
  const sendRequest = useCallback(
    async (requestData) => {
      dispatch({ type: "LOADING" });
      try {
        const responseData = await requestFunc(requestData);
        dispatch({ type: "SUCCESS", responseData });
      } catch (error) {
        dispatch({ type: "ERROR", error });
      }
    },
    [requestFunc]
  );
  return { sendRequest, ...httpState };
};
export default HttpHook;
