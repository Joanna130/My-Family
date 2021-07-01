var images = 
    ["raj.jfif","celi.jfif","vicky.jfif","sheel.jfif","jo.jfif","tia.jfif"];

var names = ["Maria Prakash Chettiar", "Margret Celina Chettiar", "Anthony Chettiar", "Sheetal Chettiar", "Joanna Chettiar", "Tianna Chettiar"];

var i = 0;
function update()
{
    i++;
    var numbers_of_family_member_in_array = 5
    if(i > numbers_of_family_member_in_array )
  {
      i = 0;
  }
    var updatedImage = images[i];
    var updatedName = names[i]; 
    document.getElementById("family_member_img").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
}
