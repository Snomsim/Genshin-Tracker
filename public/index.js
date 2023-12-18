function changeModalHeaderColor(status){
    let modalHeader = document.getElementById('modal-header');
    modalHeader.classList.remove('bg-warning','bg-success','bg-success','bg-danger');

    switch (status) {
        case 'Ongoing':
            modalHeader.classList.add('bg-warning ');
        break;
    
        case 'On Queue':
            modalHeader.classList.add('bg-secondary ');
        break;   
    
        case 'Completed':
            modalHeader.classList.add('bg-success ');
         break;  
    
        default:
            modalHeader.classList.add('bg-danger ');
        break;     
     };
}


// main
document.addEventListener('DOMContentLoaded', function() {
    const rows = document.querySelectorAll('.table tbody tr');
    rows.forEach(row => {
       const columns = row.getElementsByTagName('td');
       console.log(columns[5]);
       if(columns[5].textContent == 'Completed'){
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
    let hoyoNo = row.getElementsByTagName('th');

    console.log(`HOYO no: ${hoyoNo[0].textContent}`);
    console.log(`Quality: ${columns[0].textContent}`);
    console.log(`Character: ${columns[1].textContent}`);
    console.log(`Vision: ${columns[2].textContent}`);
    console.log(`Region: ${columns[3].textContent}`);
    console.log(`Weapon: ${columns[4].textContent}`);
    console.log(`Status: ${columns[5].textContent}`);

    let modalTitle  = document.getElementById('modal-ticket-no');
    let starlevel = document.getElementById('starlevel');
    let character = document.getElementById('character');
    let vision = document.getElementById('vision');
    let region = document.getElementById('region');
    let weapon = document.getElementById('weapon');
    let status = document.getElementById('status');
    modalTitle.textContent = hoyoNo[0].textContent;
    changeModalHeaderColor(columns[5].textContent);
     starlevel.value = columns[0].textContent;
     character.value = columns[1].textContent;
     vision.value = columns[2].textContent;
     region.value = columns[3].textContent;
     weapon.value = columns[4].textContent;
     status.value = columns[5].textContent;

     
     

   });
});

