const storeForm = document.getElementById('store-form');
const storeId = document.getElementById('store-id');
const storeAddress = document.getElementById('store-address');

storeForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    if(storeId.value === '' || storeAddress.value === ''){
        alert('fill all the fields');
    }

    let store = {
        storeId: storeId.value,
        address: storeAddress.value
    };

    try{
        let response = await fetch('/api/v1/stores', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(store)
        });
    
        if(response.status === 400){
            throw Error('Store already exists!')
        }

        alert('Store Added!');
        window.location.href = '/index.html'
        
    } catch(err) {
        alert(err);
        return
    }
    
})