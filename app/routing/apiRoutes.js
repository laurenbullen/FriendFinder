var friends = require("../data/friends")

module.exports = function(app){
    app.get("/api/friends", function(req, res){
        res.json(friends)
    });
    app.post("/api/friends", function(req, res){
        var bestFriend = {
            name:"",
            photo: "",
            scoreDiff: Infinity
        };
        var userData = req.body;
        var userScores = userData.scores;
        var totalDiff;

        for (let i = 0; i < friends.length; i++) {
            var currentFriend = friends[i];
            totalDiff = 0
            for (let j = 0; j < currentFriend.scores.length; j++) {
                var currentFriendScore = currentFriend.scores[j];
                var currentUser = userScores[j];
                totalDiff += Math.abs(parseInt(currentUser) - parseInt(currentFriendScore))
                
            }
            if(totalDiff <= bestFriend.scoreDiff){
                bestFriend.name = currentFriend.name;
                bestFriend.photo = currentFriend.photo;
                bestFriend.scoreDiff = totalDiff
            }
        }
        friends.push(userData);
        res.json(bestFriend)

    })
}