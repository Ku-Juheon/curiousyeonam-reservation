let spaceList1 = $('input[name="spaceType"][class="radio1"]').is(':checked');

let spaceList2 = $('input[name="spaceType"][class="radio2"]').is(':checked');

const spaceType = document.querySelector('.spaceType');

const spaceText1 = document.querySelector('.spaceType .text1');
const spaceText2 = document.querySelector('.spaceType .text2');

spaceType.addEventListener('click', function () {
  spaceList1 = $('input[name="spaceType"][class="radio1"]').is(':checked');
  spaceList2 = $('input[name="spaceType"][class="radio2"]').is(':checked');
  if (spaceList1) {
    spaceText1.classList.add('check');
    spaceText2.classList.remove('check');
  } else if (spaceList2) {
    spaceText2.classList.add('check');
    spaceText1.classList.remove('check');
  }
});
