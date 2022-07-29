
function ClickObject(ObjectActiveName, i, j)
{
    if(sessionStorage.getItem(ObjectActiveName) == 0)
    {
        sessionStorage.removeItem(ObjectActiveName);
        sessionStorage.setItem(ObjectActiveName,1);
    }
    else if (sessionStorage.getItem(ObjectActiveName) == 1)
    {
        sessionStorage.removeItem(ObjectActiveName);
        sessionStorage.setItem(ObjectActiveName,0);
    }
    else if (ObjectActiveName === "Books")
    {
        if(document.querySelectorAll(".bookcase")[i].querySelectorAll(".book")[j].getElementsByClassName("back")[0].classList.contains("active"))
        {
            document.querySelectorAll(".bookcase")[i].querySelectorAll(".book")[j].getElementsByClassName("back")[0].classList.remove("active");
            document.querySelectorAll(".bookcase")[i].querySelectorAll(".book")[j].getElementsByClassName("page6")[0].classList.remove("active");
            document.querySelectorAll(".bookcase")[i].querySelectorAll(".book")[j].getElementsByClassName("page5")[0].classList.remove("active");
            document.querySelectorAll(".bookcase")[i].querySelectorAll(".book")[j].getElementsByClassName("page4")[0].classList.remove("active");
            document.querySelectorAll(".bookcase")[i].querySelectorAll(".book")[j].getElementsByClassName("page3")[0].classList.remove("active");
            document.querySelectorAll(".bookcase")[i].querySelectorAll(".book")[j].getElementsByClassName("page2")[0].classList.remove("active");
            document.querySelectorAll(".bookcase")[i].querySelectorAll(".book")[j].getElementsByClassName("page1")[0].classList.remove("active");
            document.querySelectorAll(".bookcase")[i].querySelectorAll(".book")[j].getElementsByClassName("front")[0].classList.remove("active");
            document.querySelectorAll(".bookcase")[i].querySelectorAll(".book")[j].getElementsByClassName("booktitle")[0].classList.remove("active");
        }
        else
        {
            document.querySelectorAll(".bookcase")[i].querySelectorAll(".book")[j].getElementsByClassName("back")[0].classList.add("active");
            document.querySelectorAll(".bookcase")[i].querySelectorAll(".book")[j].getElementsByClassName("page6")[0].classList.add("active");
            document.querySelectorAll(".bookcase")[i].querySelectorAll(".book")[j].getElementsByClassName("page5")[0].classList.add("active");
            document.querySelectorAll(".bookcase")[i].querySelectorAll(".book")[j].getElementsByClassName("page4")[0].classList.add("active");
            document.querySelectorAll(".bookcase")[i].querySelectorAll(".book")[j].getElementsByClassName("page3")[0].classList.add("active");
            document.querySelectorAll(".bookcase")[i].querySelectorAll(".book")[j].getElementsByClassName("page2")[0].classList.add("active");
            document.querySelectorAll(".bookcase")[i].querySelectorAll(".book")[j].getElementsByClassName("page1")[0].classList.add("active");
            document.querySelectorAll(".bookcase")[i].querySelectorAll(".book")[j].getElementsByClassName("front")[0].classList.add("active");
            document.querySelectorAll(".bookcase")[i].querySelectorAll(".book")[j].getElementsByClassName("booktitle")[0].classList.add("active");
        }

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
  
function init() 
{
    sessionStorage.setItem("MenuActive",1);

    //Event Listeners   
    if(Temp=document.getElementsByClassName("book")[0])
    {
        Temp.addEventListener('click', 
        function(){
            ClickObject("BookActive");
        });
    }   
    for(let i = 0; i < document.querySelectorAll(".bookcase").length; ++i)
    {
        for(let j = 0; j < document.querySelectorAll(".bookcase")[i].querySelectorAll(".book").length; ++j)
        {
            Temp = document.querySelectorAll(".bookcase")[i].querySelectorAll(".book")[j];
            Temp.addEventListener('click', 
            function(){
                ClickObject("Books", i , j );
            });
        }
    }
    if(Temp=document.getElementById("Logo3"))
    {
        Temp.addEventListener('click', 
        function(){
            ClickObject("MenuActive");
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
        });
    }
    startTime();
}

function update()
{
    //Logic Code
    if(sessionStorage.getItem("MenuActive") == 0)
    {
        document.getElementById("menu").classList.add("active");
        document.getElementById("wrapper").classList.add("active");
    }
    else if (sessionStorage.getItem("MenuActive") == 1)
    {
        document.getElementById("menu").classList.remove("active");
        document.getElementById("wrapper").classList.remove("active");
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