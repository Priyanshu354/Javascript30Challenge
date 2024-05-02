const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');

let lastChecked;

function handleCheck(e) {
  // Check if they had the shift key down
  // AND check that they are checking it
  let inBetween = false;
  if (e.shiftKey && this.checked) {
    // go ahead and do what we please
    // loop over every single checkbox
    checkboxes.forEach(checkbox => {
      console.log(checkbox);
      if (checkbox === this || checkbox === lastChecked) {
        inBetween = !inBetween;
        console.log('Starting to check them in between!');
      }

      if (inBetween) {
        checkbox.checked = true;
      }
    });
  }

  lastChecked = this;
}

checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));



// const checkBoxes = document.querySelectorAll('.item');
// let checkedBoxes = [];

// function check() {
//     checkedBoxes = Array.from(checkBoxes).filter(checkBox => checkBox.firstElementChild.checked);
//     if (checkedBoxes.length === 2) {
//         let startIndex = Array.from(checkBoxes).indexOf(checkedBoxes[0]);
//         let endIndex = Array.from(checkBoxes).indexOf(checkedBoxes[1]);
//         if (startIndex < endIndex) {
//             for (let i = startIndex + 1; i < endIndex; i++) {
//                 checkBoxes[i].firstElementChild.checked = true;
//             }
//         } else {
//             for (let i = endIndex + 1; i < startIndex; i++) {
//                 checkBoxes[i].firstElementChild.checked = true;
//             }
//         }
//     }
// }

// checkBoxes.forEach(checkBox => {
//     checkBox.addEventListener('click', check);
// });
