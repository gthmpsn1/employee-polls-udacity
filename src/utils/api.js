import {
    _getUsers,
    _getQuestions,
    _saveVote,
  } from './_DATA.js'
  
  export function getInitialData () {
    return Promise.all([
      _getUsers(),
      _getQuestions(),
    ]).then(([users, questions]) => ({
      users,
      questions,
    }))
  }

  export function saveVote (info) {
    return _saveVote(info)
  }