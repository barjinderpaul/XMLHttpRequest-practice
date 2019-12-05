document.addEventListener('DOMContentLoaded', (event) => {
    
    document.getElementById('get-breed').addEventListener('click',(event) => {
        let dogContentDiv = document.getElementById('dog-content');
        let breed = document.getElementById('breed-input').value
        
        let xhr = new XMLHttpRequest();
        xhr.open('GET','https://dog.ceo/api/breed/'+breed+'/images/random');
        xhr.responseType = 'json'
        xhr.send()
    
        xhr.onload = () => {
            if(xhr.response.status !== 'success'){ 
                alert(`${xhr.response.status}: ${xhr.response.code}, ${xhr.response.message}`);
                return;
            }
            
            let imgElement = document.createElement('img');
            imgElement.setAttribute('src',xhr.response.message)
            imgElement.classList.add('dog-image');
            dogContentDiv.appendChild(imgElement)
    
        }
        
    
    })

});

