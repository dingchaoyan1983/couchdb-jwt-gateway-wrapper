import Nano from 'nano';

const nano = Nano('http://192.168.0.160:5984');
const todos = nano.use('todos');
const docs = [];

todos.list().then((body) => {
  body.rows.forEach((doc) => {
    const newDoc = { text: 'fjslfjldsfjdskjfldsjflsjflsflskj', completed: true, _id: doc.id, _rev: doc.value.rev};
    docs.push(newDoc);
  });
  console.log(docs.length);
  todos.bulk({docs: docs}).then(() => {
    console.log('bulk update done');
  });
});

// function insert3000 () {
//   for(let i = 0; i< 3000; i++) {
//     todos.insert({ text: 'fjdslfjdslfsldhfdshfks' + i, completed: false });
//   }
// }

// insert3000();