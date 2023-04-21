export const ADD_PROFILE = "ADD_PROFILE";
export const ADD_EXPERIENCES = "ADD_EXPERIENCES";
export const ADD_POSTS = "ADD_POSTS";
export const GET_JOBS = "GET_JOBS";
<<<<<<< HEAD

=======
export const REMOVE_FROM_EXPERIENCES = "REMOVE_FROM_EXPERIENCES";

export const removeFromExperiencesAction = index => {return async dispatch => {
  const endpoint = 'https://striveschool-api.herokuapp.com/api/profile/643d01c1186a8700143867c7/experiences/' + index
  const fetchOpt = {
    method: "DELETE",
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDNkMDFjMTE4NmE4NzAwMTQzODY3YzciLCJpYXQiOjE2ODE3MTk3NDUsImV4cCI6MTY4MjkyOTM0NX0.1Tn5npc1g9BA27ycQpbJRwnJsC-4qnA5lcoubLF6Br0",
    },
  };
  console.log(endpoint);
  try {
    const resp = await fetch(endpoint, fetchOpt);
    if (resp.ok) {
      const experiences = await resp.json();
      dispatch({ type: REMOVE_FROM_EXPERIENCES, payload: experiences });
    } else {
      alert("Errore qualcosa è andato storto");
    }
  } catch (error) {
    console.log(error);
  }
};
};

>>>>>>> origin/Salvatore
export const getProfileAction = userId => {
  return async dispatch => {
    const endpoint = userId
      ? "https://striveschool-api.herokuapp.com/api/profile/" + userId
      : "https://striveschool-api.herokuapp.com/api/profile/me";
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
    const endpoint = 'https://striveschool-api.herokuapp.com/api/profile/' + prop.prop + '/experiences' 
      
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
<<<<<<< HEAD
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDNlYjVhNWZjYTEyOTAwMTQ0MGMxMzkiLCJpYXQiOjE2ODE4MzEzMzMsImV4cCI6MTY4MzA0MDkzM30.pvZfvfFjc_HrXl2dCYImrEJra1UTSglnrOIwLpsuPnk",
=======
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDNkMDFjMTE4NmE4NzAwMTQzODY3YzciLCJpYXQiOjE2ODE3MTk3NDUsImV4cCI6MTY4MjkyOTM0NX0.1Tn5npc1g9BA27ycQpbJRwnJsC-4qnA5lcoubLF6Br0",
>>>>>>> origin/Salvatore
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
<<<<<<< HEAD
};
=======
};
>>>>>>> origin/Salvatore
