
function ClickObject(ObjectActiveName, i, j)
{
    if (ObjectActiveName === "Books")
    {
        if(document.querySelectorAll(".bookshelf")[i].querySelectorAll(".book")[j].getElementsByClassName("back")[0].classList.contains("active"))
        {
            PlaySound("CloseBookSound");
            if(sessionStorage.getItem(ObjectActiveName+i+j))
            {
                sessionStorage.removeItem(ObjectActiveName+i+j);
            }
            sessionStorage.setItem(ObjectActiveName+i+j,0);
        }
        else
        {
            PlaySound("OpenBookSound");
            if(sessionStorage.getItem(ObjectActiveName+i+j))
            {
                sessionStorage.removeItem(ObjectActiveName+i+j);
            }
            sessionStorage.setItem(ObjectActiveName+i+j,1);
        }
    }
    else if (ObjectActiveName === "ButtonSound")
    {
        PlaySound("ButtonSound");
    }
    else if(sessionStorage.getItem(ObjectActiveName) == 0)
    {
        sessionStorage.removeItem(ObjectActiveName);
        sessionStorage.setItem(ObjectActiveName,1);
    }
    else if (sessionStorage.getItem(ObjectActiveName) == 1)
    {
        PlaySound("ButtonSound");
        sessionStorage.removeItem(ObjectActiveName);
        sessionStorage.setItem(ObjectActiveName,0);
    }
}

function startTime() {
    UpdateTimer = setInterval( update, 100); // .1 second
    ImageTimer = setInterval( updateImage, 1000); // 1 second
  }
  
  


function stopTime() {
    clearInterval(UpdateTimer);
    clearInterval(ImageTimer);
}
function PlaySound(SoundName)
{
    var Sound = document.getElementById(SoundName);
    Sound.play();
}

function RestartGame()
{
    if(document.querySelector(".Grid-Container-Test"))
    {
        for(let i = 0; i < document.querySelector("#Deck-20thCen").querySelectorAll(".front").length;++i)
        {
            document.querySelector("#Deck-20thCen").querySelectorAll(".front")[i].classList.remove("active");
        }
        for(let i = 0; i < document.querySelector("#Deck-21stCen").querySelectorAll(".front").length;++i)
        {
            document.querySelector("#Deck-21stCen").querySelectorAll(".front")[i].classList.remove("active");
        }
        for(let i = 0; i < document.querySelector("#Sort-Deck").querySelectorAll(".front").length;++i)
        {
            if(Temp = document.querySelector("#Sort-Deck").querySelectorAll(".front")[i].classList.contains("active"))
            {
                document.querySelector("#Sort-Deck").querySelectorAll(".front")[i].classList.remove("active");
            }
            document.querySelector("#Sort-Deck").querySelectorAll(".front")[i].classList.add("active");
        }
        if(Temp = document.querySelector("#Correct").getElementsByClassName("active"))
        {
            Temp = document.querySelector("#Correct").classList.remove("active")
        }
        if(Temp = document.querySelector("#Wrong").getElementsByClassName("active"))
        {
            Temp = document.querySelector("#Wrong").classList.remove("active")
        }
        document.querySelector(".Deck-Title.Row2.Column1").textContent = "Sort the Books";
    }
}

function CalculateChoice(Choice)
{
    // Find Current Book
    var CurrentBook = 10;
    for(let i = document.querySelector("#Sort-Deck").querySelectorAll(".front").length-1; i > -1 ;--i)
    {
        if(document.querySelector("#Sort-Deck").querySelectorAll(".front")[i].classList.contains("active") )
        {
            CurrentBook = i;
            i = 0;
        }
    }
    if(CurrentBook != 10)
    {
        // Check if correct choice
        var Decision;
        if((CurrentBook === 0 || CurrentBook === 2 || CurrentBook === 5 || CurrentBook === 7) && Choice === 1 ) 
        {
            Decision = 1;
        }
        else if((CurrentBook === 1 || CurrentBook === 3 || CurrentBook === 4 || CurrentBook === 6) && Choice === 2 ) 
        {
            Decision = 1;
        }
        else
        {
            Decision = 0;
        }
        //Reset Correct and Wrong
        if(document.querySelector("#Correct").classList.contains("active"))
        {
            document.querySelector("#Correct").classList.remove("active");
        }
        if(document.querySelector("#Wrong").classList.contains("active"))
        {
            document.querySelector("#Wrong").classList.remove("active");
        }
        // Update Game
        if(Decision === 0)
        {
            document.querySelector("#Wrong").classList.add("active");
        }
        else if(Decision === 1)
        {
            document.querySelector("#Correct").classList.add("active");
            document.querySelector("#Sort-Deck").querySelectorAll(".front")[CurrentBook].classList.remove("active");
            if(Choice === 1)
            {
                if(CurrentBook == 0){
                    document.querySelector("#Deck-20thCen").querySelectorAll(".front")[3].classList.add("active");
                    document.querySelector(".Deck-Title.Row2.Column1").textContent = "Congrats, Good Job ٩(◕‿◕｡)۶";
                }
                else if(CurrentBook == 2){
                    document.querySelector("#Deck-20thCen").querySelectorAll(".front")[2].classList.add("active");
                }
                else if(CurrentBook == 5){
                    document.querySelector("#Deck-20thCen").querySelectorAll(".front")[1].classList.add("active");
                }
                else if(CurrentBook == 7){
                    document.querySelector("#Deck-20thCen").querySelectorAll(".front")[0].classList.add("active");
                }
            }
            else if(Choice === 2)
            {
                if(CurrentBook == 1){
                    document.querySelector("#Deck-21stCen").querySelectorAll(".front")[3].classList.add("active");
                }
                else if(CurrentBook == 3){
                    document.querySelector("#Deck-21stCen").querySelectorAll(".front")[2].classList.add("active");
                }
                else if(CurrentBook == 4){
                    document.querySelector("#Deck-21stCen").querySelectorAll(".front")[1].classList.add("active");
                }
                else if(CurrentBook == 6){
                    document.querySelector("#Deck-21stCen").querySelectorAll(".front")[0].classList.add("active");
                }
            }
        }
    }
}
  
function init() 
{
    sessionStorage.setItem("MenuActive",1);

    //Event Listeners 
    for(let i = 0; i < document.querySelectorAll(".bookshelf").length; ++i)
    {
        for(let j = 0; j < document.querySelectorAll(".bookshelf")[i].querySelectorAll(".book").length; ++j)
        {
            Temp = document.querySelectorAll(".bookshelf")[i].querySelectorAll(".book")[j];
            Temp.addEventListener('click', 
            function(){
                ClickObject("Books", i , j );
            });
        }
    }
    for(let j = 0; j < document.querySelectorAll("a").length; ++j)
    {
        Temp = document.querySelectorAll("a")[j];
        Temp.addEventListener('click', 
        function(){
            ClickObject("ButtonSound");
        });
    }
    if(Temp=document.getElementById("Logo3"))
    {
        Temp.addEventListener('click', 
        function(){
            ClickObject("MenuActive");
            ClickObject("ButtonSound")
        });
    }
    if(Temp=document.getElementById("closemenu"))
    {
        Temp.addEventListener('click', 
        function(){
            ClickObject("MenuActive");
        });
    }
    if(Temp=document.getElementById("Logo1"))
    {
        Temp.addEventListener('click', 
        function GoToIndex(){
            window.location = "index.html";
            ClickObject("Links")
        });
    }
    if(Temp=document.getElementById("Restart"))
    {
        Temp.addEventListener('click', 
        function(){
            RestartGame();
            PlaySound("ButtonSound");
        });
    }
    if(Temp=document.getElementById("LeftSide"))
    {
        Temp.addEventListener('click', 
        function(){
            CalculateChoice(1);
            PlaySound("ButtonSound");
        });
    }
    if(Temp=document.getElementById("RightSide"))
    {
        Temp.addEventListener('click', 
        function(){
            CalculateChoice(2);
            PlaySound("ButtonSound");
        });
    }
    RestartGame();
    startTime();
}

function update()
{
    //Logic Code
    if(sessionStorage.getItem("MenuActive") == 0)
    {
        document.getElementById("Burger-Menu").classList.add("active");
        document.getElementById("wrapper").classList.add("active");
    }
    else if (sessionStorage.getItem("MenuActive") == 1)
    {
        document.getElementById("Burger-Menu").classList.remove("active");
        document.getElementById("wrapper").classList.remove("active");
    }
    for(let i = 0; i < document.querySelectorAll(".bookshelf").length; ++i)
    {
        for(let j = 0; j < document.querySelectorAll(".bookshelf")[i].querySelectorAll(".book").length; ++j)
        {
            if(sessionStorage.getItem("Books"+i+j) == 1)
            {
                document.querySelectorAll(".bookshelf")[i].querySelectorAll(".book")[j].getElementsByClassName("back")[0].classList.add("active");
                document.querySelectorAll(".bookshelf")[i].querySelectorAll(".book")[j].getElementsByClassName("page6")[0].classList.add("active");
                document.querySelectorAll(".bookshelf")[i].querySelectorAll(".book")[j].getElementsByClassName("page5")[0].classList.add("active");
                document.querySelectorAll(".bookshelf")[i].querySelectorAll(".book")[j].getElementsByClassName("page4")[0].classList.add("active");
                document.querySelectorAll(".bookshelf")[i].querySelectorAll(".book")[j].getElementsByClassName("page3")[0].classList.add("active");
                document.querySelectorAll(".bookshelf")[i].querySelectorAll(".book")[j].getElementsByClassName("page2")[0].classList.add("active");
                document.querySelectorAll(".bookshelf")[i].querySelectorAll(".book")[j].getElementsByClassName("page1")[0].classList.add("active");
                document.querySelectorAll(".bookshelf")[i].querySelectorAll(".book")[j].getElementsByClassName("front")[0].classList.add("active");
                document.querySelectorAll(".bookshelf")[i].querySelectorAll(".book")[j].getElementsByClassName("booktitle")[0].classList.add("active");
            }
            else
            {
                document.querySelectorAll(".bookshelf")[i].querySelectorAll(".book")[j].getElementsByClassName("back")[0].classList.remove("active");
                document.querySelectorAll(".bookshelf")[i].querySelectorAll(".book")[j].getElementsByClassName("page6")[0].classList.remove("active");
                document.querySelectorAll(".bookshelf")[i].querySelectorAll(".book")[j].getElementsByClassName("page5")[0].classList.remove("active");
                document.querySelectorAll(".bookshelf")[i].querySelectorAll(".book")[j].getElementsByClassName("page4")[0].classList.remove("active");
                document.querySelectorAll(".bookshelf")[i].querySelectorAll(".book")[j].getElementsByClassName("page3")[0].classList.remove("active");
                document.querySelectorAll(".bookshelf")[i].querySelectorAll(".book")[j].getElementsByClassName("page2")[0].classList.remove("active");
                document.querySelectorAll(".bookshelf")[i].querySelectorAll(".book")[j].getElementsByClassName("page1")[0].classList.remove("active");
                document.querySelectorAll(".bookshelf")[i].querySelectorAll(".book")[j].getElementsByClassName("front")[0].classList.remove("active");
                document.querySelectorAll(".bookshelf")[i].querySelectorAll(".book")[j].getElementsByClassName("booktitle")[0].classList.remove("active");
            }
        }
    }
    
}

function updateImage()
{
    for(let i = 0; i < document.querySelectorAll(".Image1").length; ++i)
    {
        Temp = document.querySelectorAll(".Image1")[i];
        if(Temp.classList.contains("active"))
        {
            Temp.classList.remove("active");
        }
        else 
        {
            Temp.classList.add("active");
        }
    }
    for(let i = 0; i < document.querySelectorAll(".Image2").length; ++i)
    {
        Temp = document.querySelectorAll(".Image2")[i];
        if(Temp.classList.contains("active"))
        {
            Temp.classList.remove("active");
        }
        else 
        {
            Temp.classList.add("active");
        }
    }
}

function exit(){
    sessionStorage.removeItem("MenuActive",1);
}

document.addEventListener('DOMContentLoaded', init);