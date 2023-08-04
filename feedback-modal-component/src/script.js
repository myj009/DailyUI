//Get button with class main_button and set onclick

function toggleUI () {
  let mainButton = document.querySelector('.main_button');
  mainButton.classList.toggle('hide');
  let popupCard = document.querySelector('.card');
  popupCard.classList.toggle('hide');
}

document.querySelector('.main_button').onclick = toggleUI;
document.querySelector('.cancel_button').onclick = toggleUI;

document.querySelector('.submit_button').onclick = function () {
  let ratingBoxes = document.querySelectorAll('.rating_box');  
    for (let i = 0; i < ratingBoxes.length; i++) {
      if (ratingBoxes[i].classList.contains('selected')) {
        alert('Thank you for rating us ' + (i + 1) + ' stars!');
        toggleUI();
        return;
      }
    }
    alert('Please select a rating!');
};

//Add onclick to all rating boxes
document.querySelectorAll('.rating_box').forEach(function (ratingBox) {
  ratingBox.onclick = function (e) {
    let ratingBoxes = document.querySelectorAll('.rating_box');
    for (let i = 0; i < ratingBoxes.length; i++) {
      if (ratingBoxes[i].contains(e.target)) {
        ratingBoxes[i].classList.toggle('selected');
        continue;
      }
      ratingBoxes[i].classList.remove('selected');
    }
  };
});
