export const ADD_PROFILE = "ADD_PROFILE";
export const ADD_EXPERIENCES = "ADD_EXPERIENCES";
export const ADD_POSTS = "ADD_POSTS";
export const GET_JOBS = "GET_JOBS";

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

export const getExperiencesAction = prop => {
  return async dispatch => {
    const endpoint = `https://striveschool-api.herokuapp.com/api/profile/` + prop.prop + `/experiences`;
    const fetchOpt = {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDNlYjVhNWZjYTEyOTAwMTQ0MGMxMzkiLCJpYXQiOjE2ODE4MzEzMzMsImV4cCI6MTY4MzA0MDkzM30.pvZfvfFjc_HrXl2dCYImrEJra1UTSglnrOIwLpsuPnk",
      },
    };

    try {
      const resp = await fetch(endpoint, fetchOpt);
      if (resp.ok) {
        const dataExperiences = await resp.json();
        console.log(dataExperiences);
        dispatch({ type: ADD_EXPERIENCES, payload: dataExperiences });
      } else {
        alert("Errore qualcosa è andato storto");
      }
    } catch (error) {
      console.log(error);
    }
  };
};
export const getPostsAction = () => {
  return async dispatch => {
    const endpoint = `https://striveschool-api.herokuapp.com/api/posts/`;
    const fetchOpt = {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDNlYjVhNWZjYTEyOTAwMTQ0MGMxMzkiLCJpYXQiOjE2ODE4MzEzMzMsImV4cCI6MTY4MzA0MDkzM30.pvZfvfFjc_HrXl2dCYImrEJra1UTSglnrOIwLpsuPnk",
      },
    };

    try {
      const resp = await fetch(endpoint, fetchOpt);
      if (resp.ok) {
        const dataPosts = await resp.json();
        console.log(dataPosts);
        dispatch({ type: ADD_POSTS, payload: dataPosts });
      } else {
        alert("Errore qualcosa è andato storto");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const getJobsAction = () => {
  const url = "https://strive-benchmark.herokuapp.com/api/jobs";
  const token = process.env.REACT_APP_API_KEY;
  return async dispatch => {
    try {
      let resp = await fetch(url, {
        headers: {
          Authorization: token,
        },
      });
      if (resp.ok) {
        let data = await resp.json();

        dispatch({ type: GET_JOBS, payload: data.data });
      }
    } catch (error) {
      console.log(error);
    }
  };
};
