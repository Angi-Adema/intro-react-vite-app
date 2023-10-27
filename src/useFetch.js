import { useEffect, useReducer } from "react"; // useReducer replaces useState.

const ACTIONS = {
  FETCH_START: "FETCH_START",
  FETCH_SUCCESS: "FETCH_SUCCESS",
  FETCH_ERROR: "FETCH_ERROR",
};

function reducer(state, { type, payload }) {
  switch (type) {
    case ACTIONS.FETCH_START:
      return {
        // By default the data is undefined since it is not being called here along with isError and isLoading. This is our new state value and the return overrides all the existing state. We do this because we want to reset everything just as we did in the useEffect.
        isError: false,
        isLoading: true,
      };
    case ACTIONS.FETCH_SUCCESS:
      return {
        data: payload.data,
        isLoading: false,
        isError: false,
      };
    case ACTIONS.FETCH_ERROR:
      return {
        isLoading: false,
        isError: true,
      };
    default:
      // throw Error("Might have typo somewhere!")  We can put this in here instead of the returning the state.
      return state;
  }
}

export function useFetch(url, options = {}) {
  const [state, dispatch] = useReducer(reducer, {
    isError: false,
    isLoading: true,
  });

  // The lines below are our state related code, since we are using useReducer we can eliminate all the state related code.
  //   const [data, setData] = useState(); // This is undefined so we do not need to pass this into the useReducer in the line above.
  //   const [isError, setIsError] = useState(false);
  //   const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // This section of code is taken care of above in the reducer function
    // setData(undefined)
    // setIsError(false)
    // setIsLoading(true)
    dispatch({ type: ACTIONS.FETCH_START });

    const controller = new AbortController();

    fetch(url, { signal: controller.signal, ...options })
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        }
        return Promise.reject(res);
      })
      .then((data) => {
        dispatch({ type: ACTIONS.FETCH_SUCCESS, payload: { data } });
      })
      .catch((e) => {
        if (e.name === "AbortError") return;

        dispatch({ type: ACTIONS.FETCH_ERROR }); // Not actually storing our error anywhere so we can remove the payload: { error: e }.
      });

    // The .finally() is not needed any more since it is taken care of inside of the reducer function.
    //   .finally(() => {
    //     if (controller.signal.aborted) return;
    //     setIsLoading(false);
    //   });

    return () => {
      controller.abort();
    };
  }, [url]);

  return state;
}
