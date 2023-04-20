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
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDNkMDFjMTE4NmE4NzAwMTQzODY3YzciLCJpYXQiOjE2ODE3MTk3NDUsImV4cCI6MTY4MjkyOTM0NX0.1Tn5npc1g9BA27ycQpbJRwnJsC-4qnA5lcoubLF6Br0",
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
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDNkMDFjMTE4NmE4NzAwMTQzODY3YzciLCJpYXQiOjE2ODE3MTk3NDUsImV4cCI6MTY4MjkyOTM0NX0.1Tn5npc1g9BA27ycQpbJRwnJsC-4qnA5lcoubLF6Br0",
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
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDNkMDFjMTE4NmE4NzAwMTQzODY3YzciLCJpYXQiOjE2ODE3MTk3NDUsImV4cCI6MTY4MjkyOTM0NX0.1Tn5npc1g9BA27ycQpbJRwnJsC-4qnA5lcoubLF6Br0",
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
  return async dispatch => {
    try {
      let resp = await fetch(url, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDNkMDFjMTE4NmE4NzAwMTQzODY3YzciLCJpYXQiOjE2ODE3MTk3NDUsImV4cCI6MTY4MjkyOTM0NX0.1Tn5npc1g9BA27ycQpbJRwnJsC-4qnA5lcoubLF6Br0",
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