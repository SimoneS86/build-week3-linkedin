export const ADD_PROFILE = "ADD_PROFILE";

export const getProfileAction = (prop) => {
  return async (dispatch) => {
    const endpoint = "https://striveschool-api.herokuapp.com/api/profile/" + prop;
    const fetchOpt = {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDNkMTMyMDIyYTZhYjAwMTQxYTg1NjciLCJpYXQiOjE2ODE3MjQxOTIsImV4cCI6MTY4MjkzMzc5Mn0.x8dPST_iOah2_5aT7ZuitZWbm0q-dOuBjsrQ8N4_VJI",
      },
    };
    try {
      const resp = await fetch(endpoint, fetchOpt);
      if (resp.ok) {
        const dataProfile = await resp.json();
        dispatch({ type: ADD_PROFILE, payload: dataProfile });
      } else {
        alert("Errore qualcosa è andato storto");
      }
    } catch (error) {
      console.log(error);
    }
  };
};