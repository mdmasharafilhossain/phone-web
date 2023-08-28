const LoadPhone = async (searchPhone) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchPhone}`);
     const data = await res.json();
     const phones = data.data;
     
     displayPhones(phones);

}

const displayPhones = phones => {
    // console.log(phones);
    const PhoneContainer = document.getElementById('phone-container')
// for empty
PhoneContainer.textContent = '';
//  
const ShowAllContainer = document.getElementById('Show-All-Container');
if(phones.length > 12){
    ShowAllContainer.classList.remove('hidden');
}
else{
    ShowAllContainer.classList.add('hidden');
}



    //   Display only 12 phones
    
    phones = phones.slice(0,12);

    phones.forEach(phone => {
        console.log(phone);

        //Creating div
        const PhoneCard = document.createElement('div');
        PhoneCard.classList = `card p-4  bg-gray-100 shadow-xl`;
        PhoneCard.innerHTML = `
        <figure><img src="${phone.image}" alt="Shoes" /></figure>
        <div class="card-body">
          <h2 class="card-title">${phone.phone_name
          }</h2>
          <p>${phone.slug}</p>
          <div class="card-actions justify-end">
            <button class="btn btn-primary">Buy Now</button>
          </div>
        </div>
        
        
        
        `;
        PhoneContainer.appendChild(PhoneCard);
    
    });
    toggleSpinner(false);
}

const HandleSerach = () =>{
    toggleSpinner(true);
    const SearchField = document.getElementById('search-bar');
    const SearchText = SearchField.value;
    console.log(SearchText);
    LoadPhone(SearchText);
}

const toggleSpinner =(isLoading) =>{
 const LoadingSpinner = document.getElementById('loading-spinner');
if(isLoading){
    LoadingSpinner.classList.remove('hidden');
}
else{
    LoadingSpinner.classList.add('hidden');
    
}

}

//  LoadPhone();