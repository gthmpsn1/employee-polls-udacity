import {
    _getUsers,
    _getQuestions,
    _saveVote,
    _createPoll
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

  export function createPoll (info) {
    return _createPoll(info)
  }