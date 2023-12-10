function configureListeners() {
    let images = document.querySelectorAll('img');// select img elements  


     for (var i = 0; i < images.length; i++) {        
        images[i].addEventListener('mouseover', addOpacity);
        images[i].addEventListener('mouseout', removeOpacity);
        images[i].addEventListener('mouseover', getProductInfo);// iterate over images and add mouseover event listeners      
    } 
}

function addOpacity(event) {
    event.target.classList.add('dim');// add appropriate CSS class
    getProductInfo(event.target.id);     
}

function removeOpacity(event) {
    event.target.classList.remove('dim')//remove appropriate CSS class

    let element = document.getElementById('color-price');
        element.textContent = '';
        
    let color = document.getElementById('color-name');
        color.textContent = ''; 

    event.preventDefault();    
}

function getProductInfo(paintColor) {
    let price;
    let colorName;  
    
    switch (paintColor) {
        case 'pn1':           
        colorName = 'Lime Green';   
        price = '14.99';
        updatePrice(colorName, price)
        // set variables for price and color name and invoke a function to update the price     
            break;           
        case 'pn2':
        colorName = 'Medium Brown';    
        price = '11.14';
        updatePrice(colorName, price)
        // set variables for price and color name and invoke a function to update the price    
            break;            
        case 'pn3':
        colorName = 'Royal Blue';    
        price = '22.99';
        updatePrice(colorName, price)            
        // set variables for price and color name and invoke a function to update the price  
            break;   
        case 'pn4':
        colorName = 'Solid Black';    
        price = '4.99';
        updatePrice(colorName, price)            
        // set variables for price and color name and invoke a function to update the price  
            break;   
        case 'pn5':
         colorName = 'Solid Cyan';    
        price = '8.22';
        updatePrice(colorName, price)           
        // set variables for price and color name and invoke a function to update the price       
            break;   
        case 'pn6':
        colorName = 'Solid Purple';    
        price = '11.99';
        updatePrice(colorName, price)            
        // set variables for price and color name and invoke a function to update the price        
            break;   
        case 'pn7':
        colorName = 'Solid Red';    
        price = '13.42';
        updatePrice(colorName, price)            
        // set variables for price and color name and invoke a function to update the price 
            break;   
        case 'pn8':
        colorName = 'Solid White';    
        price = '21.98';
        updatePrice(colorName, price)            
        // set variables for price and color name and invoke a function to update the price   
            break;   
        case 'pn9':
         colorName = 'Solid Yellow';    
        price = '14.99';
        updatePrice(colorName, price)           
        // set variables for price and color name and invoke a function to update the price 
            break;   
          default:              
    }

    function updatePrice(colorName, price)
    {       
        let colorPrice = document.getElementById('color-price');// select element with corresponding id
        colorPrice.textContent = price;// display price
        
        let color = document.getElementById('color-name');// select element with corresponding id
        color.textContent = colorName;//display color name
    }
    
}
