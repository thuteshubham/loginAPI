// connecting with sockets.
const socket = io('http://localhost:3000');

const authToken1= "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqd3RpZCI6ImJlNDQxNCIsImlhdCI6MTU2Mzk5MzY1OTE4OCwiZXhwIjoxNTY0MDgwMDU5LCJzdWIiOiJhdXRoVG9rZW4iLCJpc3MiOiJlZENoYXQiLCJkYXRhIjp7InVzZXJJZCI6IjFjZmVmZiIsImZpcnN0TmFtZSI6IlNoeWFtIiwibGFzdE5hbWUiOiJEYWZhbGUiLCJlbWFpbCI6ImRhZmFsZXNoeWFtQHh5ei5jb20iLCJtb2JpbGVOdW1iZXIiOjY4NzY4NDY4NzY0fX0.PaYZrRsUJh-QbMVAQlH9DSZMAJG5ihabzBFzHkJI-X0"
const userId= "H1pOQGY9M"
const authToken="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqd3RpZCI6ImZhYjgzMiIsImlhdCI6MTU2NTA3NTIxNywiZXhwIjoxNjUxNDc1MjE3LCJzdWIiOiJhdXRoVG9rZW4iLCJpc3MiOiJlZENoYXQiLCJkYXRhIjp7InVzZXJJZCI6IjQ0YzQzMSIsImZpcnN0TmFtZSI6IlNodWJoYW0iLCJsYXN0TmFtZSI6IlRodXRlIiwiZW1haWwiOiJ0aHV0ZXNodWJoYW1AeHl6LmNvbSIsIm1vYmlsZU51bWJlciI6ODY0NjQ1MzQ2ODQzfX0.fjLuR2Zju9ck1w1u87K_9SWqOD0tBxwjcJMAmlAXoxc"
let chatSocket = () => {

  socket.on('verifyUser', (data) => {

    console.log("socket trying to verify user");

    socket.emit("set-user", authToken);

  });


  socket.on('auth-error',(data)=>{
    console.log(data);
    
  })

  socket.on('online', (data) => {

    console.log("you received a message")
    console.log(data)

  });




}// end chat socket function

chatSocket();
