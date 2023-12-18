document.addEventListener('DOMContentLoaded', function() {
    const rows = document.querySelectorAll('.table tbody tr');
    rows.forEach(row => {
       const columns = row.getElementsByTagName('td');
       console.log(columns[5]);
       if(columns[5].textContent == 'completed'){
          let removeButtons = columns[6].querySelectorAll(".btn-warning,.btn-danger");
          removeButtons[0].classList.add('d-none');
          removeButtons[1].classList.add('d-none'); 
       }
    });
 });
 
 viewButton = document.querySelectorAll('.view-ticket');
viewButton.forEach(function(button){
   button.addEventListener('click', function(){
    let row = this.parentElement.parentElement;
    let columns = row.getElementsByTagName('td');
    let hoyoNo = row.getElementsByTagName('th')

    console.log(`HOYO no: ${hoyoNo[0].textContent}`);
    console.log(`Quality: ${columns[0].textContent}`);

   });
});
