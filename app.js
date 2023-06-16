const express = require('express')
const { getLeaderBoard, sendScore } = require('./controllers/leaderBoard-controller')
const leaderBoardRouter = require("./routes/leaderboard-router");
const app = express()
app.use(express.json())

// endpoints
app.get("/api", (req, res) => {
    res.send({msg: "api is working"})
})

app.use("/api", leaderBoardRouter)


// error handlers  
app.use((err, req, res, next) => {
    //   console.log(err)
      if (err.status && err.msg) {
          res.status(err.status).send({ msg: err.msg });
      } else {
          next(err)
      }
  });
  
  
  app.use((err, req, res, next) => {
      res.status(500).send({msg: 'Server error!'})
  })
  

module.exports = app
