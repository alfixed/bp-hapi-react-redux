// ACTION TYPES
export const COURSES_TYPES = {
  // FETCH LIST
  FETCH_COURSES_SAGA: 'FETCH_COURSES_SAGA',
  FETCH_COURSES_START: 'FETCH_COURSES_START',
  FETCH_COURSES_SUCCESS: 'FETCH_COURSES_SUCCESS',
  FETCH_COURSES_ERROR: 'FETCH_COURSES_ERROR',

  // CREATE ITEM
  CREATE_COURSE_SAGA: 'CREATE_COURSE_SAGA',
  CREATE_COURSE_START: 'CREATE_COURSE_START',
  CREATE_COURSE_SUCCESS: 'CREATE_COURSE_SUCCESS',
  CREATE_COURSE_ERROR: 'CREATE_COURSE_ERROR',

  // FETCH ITEM
  FETCH_COURSE_SAGA: 'FETCH_COURSE_SAGA',
  FETCH_COURSE_START: 'FETCH_COURSE_START',
  FETCH_COURSE_SUCCESS: 'FETCH_COURSE_SUCCESS',
  FETCH_COURSE_ERROR: 'FETCH_COURSE_ERROR',

  // UPDATE ITEM
  UPDATE_COURSE_SAGA: 'UPDATE_COURSE_SAGA',
  UPDATE_COURSE_START: 'UPDATE_COURSE_START',
  UPDATE_COURSE_SUCCESS: 'UPDATE_COURSE_SUCCESS',
  UPDATE_COURSE_ERROR: 'UPDATE_COURSE_ERROR',

  // DELETE ITEM
  DELETE_COURSE_SAGA: 'DELETE_COURSE_SAGA',
  DELETE_COURSE_START: 'DELETE_COURSE_START',
  DELETE_COURSE_SUCCESS: 'DELETE_COURSE_SUCCESS',
  DELETE_COURSE_ERROR: 'DELETE_COURSE_ERROR'
};

// ACTION CREATORS
// Postfix AC stands for Action Creator
export function fetchCoursesSagaAC() {
  return {
    type: COURSES_TYPES.FETCH_COURSES_SAGA
  };
}

export function fetchCoursesSuccessAC(courses) {
  return {
    type: COURSES_TYPES.FETCH_COURSES_SUCCESS,
    payload: {
      courses
    }
  };
}

export function createCourseAC(data){
  return {
    type: COURSES_TYPES.CREATE_COURSE_SAGA,
    payload: data
  }
}

export function createCourseSuccessAC(course) {
  return {
    type: COURSES_TYPES.CREATE_COURSE_SUCCESS,
    payload: course
  }
}