class Player
{
    contructor()
        {
            
        }

        getCount()
        {
            //going to player count node
            var playerCountRef = database.ref("playerCount")

            //getting value rom database, updates here
            playerCountRef.on("value", function (data){
                playerCount = data.val()
            })
        }
    update(name)
    {
        //goes to player number
        database.ref("player"+playerCount).set({
            //updates name
            name: name
        })

    }

    updateCount(count)
    {
        //goes to main node
        database.ref("/").update({

            //updates count with argument
            playerCount: count
        })
    }
}
