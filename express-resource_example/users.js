// GET, /users, index, Lists users
exports.index = function(req, res) {
  res.send('index of users');
};

// GET, /users/new, new, The form to create a new user
// curl -v -X GET http://localhost:3000/users/new
exports.new = function(req, res) {
  res.send('form for new user');
};

// POST, /users, create, Processes new user form submission
// curl -X POST http://localhost:3000/users
exports.create = function(req, res) {
  res.send('handle form for new user');
};

// GET, /user/:id, show, Shows user with ID :id
exports.show = function(req, res) {
  res.send('show user ' + req.params.user);
};

// GET, /user/:id/edit, edit, Form to edit user with ID :id
exports.edit = function(req, res) {
  res.send('form to edit user ' + req.params.user);
};

// PUT, /users/:id, update, Processes user edit form submission
// curl -X PUT http://localhost:3000/users/7
exports.update = function(req, res) {
  res.send('handle form to edit user ' + req.params.user);
};

// DELETE, /users/:id, destroy, Deletes user with ID :id
exports.destroy = function(req, res) {
  res.send('delete user ' + req.params.user);
};

