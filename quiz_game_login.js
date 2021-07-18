function login(){
    var name_of_player1= document.getElementById("player1_input").value;
    var name_of_player2= document.getElementById("player2_input").value;
    localStorage.setItem("name1", name_of_player1 );
    localStorage.setItem("name2",name_of_player2 );
    window.location= "game_page.html";
}