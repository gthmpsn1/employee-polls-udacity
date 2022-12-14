let users = {
  sarahedo: {
    id: "sarahedo",
    password: "password123",
    name: "Sarah Edo",
    avatarURL: "https://cdn-icons-png.flaticon.com/512/194/194938.png",
    answers: {
      "8xf0y6ziyjabvozdd253nd": "optionOne",
      "6ni6ok3ym7mf1p33lnez": "optionOne",
      am8ehyc8byjqgar0jgpub9: "optionTwo",
      loxhs1bqm25b708cmbf3g: "optionTwo",
    },
    questions: ["8xf0y6ziyjabvozdd253nd", "am8ehyc8byjqgar0jgpub9"],
  },
  tylermcginnis: {
    id: "tylermcginnis",
    password: "abc321",
    name: "Tyler McGinnis",
    avatarURL:
      "https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-Vector-PNG-Clipart.png",
    answers: {
      vthrdm985a262al8qx3do: "optionOne",
      xj352vofupe1dqz9emx13r: "optionTwo",
    },
    questions: ["loxhs1bqm25b708cmbf3g", "vthrdm985a262al8qx3do"],
  },
  mtsamis: {
    id: "mtsamis",
    password: "xyz123",
    name: "Mike Tsamis",
    avatarURL: "https://cdn-icons-png.flaticon.com/512/236/236832.png",
    answers: {
      xj352vofupe1dqz9emx13r: "optionOne",
      vthrdm985a262al8qx3do: "optionTwo",
      "6ni6ok3ym7mf1p33lnez": "optionOne",
    },
    questions: ["6ni6ok3ym7mf1p33lnez", "xj352vofupe1dqz9emx13r"],
  },
  zoshikanlu: {
    id: "zoshikanlu",
    password: "pass246",
    name: "Zenobia Oshikanlu",
    avatarURL:
      "https://www.pngall.com/wp-content/uploads/12/Avatar-Profile.png",
    answers: {
      xj352vofupe1dqz9emx13r: "optionOne",
    },
    questions: [],
  },
};

let questions = {
  "8xf0y6ziyjabvozdd253nd": {
    id: "8xf0y6ziyjabvozdd253nd",
    author: "sarahedo",
    timestamp: 1660123364121,
    optionOne: {
      votes: ["sarahedo"],
      text: "Build our new application with Javascript",
    },
    optionTwo: {
      votes: [],
      text: "Build our new application with Typescript",
    },
  },
  "6ni6ok3ym7mf1p33lnez": {
    id: "6ni6ok3ym7mf1p33lnez",
    author: "mtsamis",
    timestamp: 1468479767190,
    optionOne: {
      votes: [],
      text: "hire more frontend developers",
    },
    optionTwo: {
      votes: ["mtsamis", "sarahedo"],
      text: "hire more backend developers",
    },
  },
  am8ehyc8byjqgar0jgpub9: {
    id: "am8ehyc8byjqgar0jgpub9",
    author: "sarahedo",
    timestamp: 1488579767190,
    optionOne: {
      votes: [],
      text: "conduct a release retrospective 1 week after a release",
    },
    optionTwo: {
      votes: ["sarahedo"],
      text: "conduct release retrospectives quarterly",
    },
  },
  loxhs1bqm25b708cmbf3g: {
    id: "loxhs1bqm25b708cmbf3g",
    author: "tylermcginnis",
    timestamp: 1649441940000,
    optionOne: {
      votes: [],
      text: "have code reviews conducted by peers",
    },
    optionTwo: {
      votes: ["sarahedo"],
      text: "have code reviews conducted by managers",
    },
  },
  vthrdm985a262al8qx3do: {
    id: "vthrdm985a262al8qx3do",
    author: "tylermcginnis",
    timestamp: 1660123364121,
    optionOne: {
      votes: ["tylermcginnis"],
      text: "take a course on ReactJS",
    },
    optionTwo: {
      votes: ["mtsamis"],
      text: "take a course on unit testing with Jest",
    },
  },
  xj352vofupe1dqz9emx13r: {
    id: "xj352vofupe1dqz9emx13r",
    author: "mtsamis",
    timestamp: 1653502740000,
    optionOne: {
      votes: ["mtsamis", "zoshikanlu"],
      text: "deploy to production once every two weeks",
    },
    optionTwo: {
      votes: ["tylermcginnis"],
      text: "deploy to production once every month",
    },
  },
};

function generateQuestionID() {
  return (
    Math.random().toString(36).substring(2, 15) +
    Math.random().toString(36).substring(2, 15)
  );
}

export function _getUsers() {
  return new Promise((resolve) => {
    setTimeout(() => resolve({ ...users }), 1000);
  });
}

export function _getQuestions() {
  return new Promise((resolve) => {
    setTimeout(() => resolve({ ...questions }), 1000);
  });
}

const formatVote = ({vote, authedUser, qID}) => {
  let qToUpdate = questions[qID];
  let uToUpdate = users[authedUser];
  if (vote === 1) {
    qToUpdate.optionOne.votes = [...qToUpdate.optionOne.votes, authedUser]
    uToUpdate.answers = {...uToUpdate.answers, [qID]: "optionOne"}
  } else {
    qToUpdate.optionTwo.votes = [...qToUpdate.optionTwo.votes, authedUser]
    uToUpdate.answers = {...uToUpdate.answers, [qID]: "optionTwo"}
  }
  return {qToUpdate, uToUpdate};
}

export function _saveVote(info) {
  if (!info.vote || !info.authedUser || !info.qID) {
    return console.error("Invalid vote info. Try again.");
  }
  try {
    const {qToUpdate, uToUpdate} = formatVote(info);
    users = {...users, [info.authedUser]: uToUpdate}
    questions = {...questions, [info.qID]: qToUpdate}
    return (questions);
  } catch (error) {
    console.error(error);
  }
}

const formatPoll = ({ textArea1, textArea2, user }) => {
  return {
    id: generateQuestionID(),
    timestamp: Date.now(),
    author: user,
    optionOne: {
      votes: [],
      text: textArea1,
    },
    optionTwo: {
      votes: [],
      text: textArea2,
    },
  };
}

export async function _createPoll(info) {
  if (!info.user || !info.textArea1 || !info.textArea2) {
    return console.error("Invalid input. Try again.");
  }
  try {
    const newPoll = formatPoll(info);
    questions = {
      ...questions,
      [newPoll.id]: newPoll,
    };

    users[info.user].questions = [...users[info.user].questions, newPoll.id];
    return questions;
  } catch (error) {
    console.error(error);
  }
}