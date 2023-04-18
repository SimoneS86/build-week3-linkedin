export const ADD_PROFILE = "ADD_PROFILE";

export const getProfileAction = prop => {
  return async dispatch => {
    const endpoint = "https://striveschool-api.herokuapp.com/api/profile/" + prop.prop;
    const fetchOpt = {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDNlYjVhNWZjYTEyOTAwMTQ0MGMxMzkiLCJpYXQiOjE2ODE4MzEzMzMsImV4cCI6MTY4MzA0MDkzM30.pvZfvfFjc_HrXl2dCYImrEJra1UTSglnrOIwLpsuPnk",
      },
    };
    console.log(endpoint);
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
