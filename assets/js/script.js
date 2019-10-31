var password = document.getElementById('password');//récupère l'id dans le HTML
var confirm = document.getElementById('confirmPassword');//récupère l'id dans le HTML
var button = document.querySelector('button');//récupère l'id dans le HTML

button.onclick =function(){//crée une fonction en cliquant sur le bouton
  if(password.value != confirm.value){
     password.style.border = 'solid red';
     confirm.style.border = 'solid red';
  }
  //crée une condition pour mettre les bordures rouges si la valeur des input est différent de l'autre
  else{
    password.style.border ='solid green';
    confirm.style.border = 'solid green';
  }//si la condition n'est pas rempli met les bordure en vert
}
