class Form
{
    constructor()
    {

    }
    display()
        {
            //html stuff, creating elements and writing text
            var title = createElement('h2')
            title.html("Car Racing Game")
            title.position(130,0)

            //making default username, button, and greeting after game start
            var input = createInput('username')
            var button = createButton('Play')
            var greeting = createElement('h3')
            
            input.position(130,160)
            button.position(250,200)
            
            button.mousePressed(function (){
                input.hide()
                button.hide()

                //player name stored here
                var name = input.value()

                //adding player
                playerCount++

                //updates
                player.update(name)
                player.updateCount(playerCount)

                //writing greeting
                greeting.html("Hello "+ name)
                greeting.position(130,160)
                
            })
        }
    
}