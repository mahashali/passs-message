(function() {
//select the input element
 const form = document.querySelector('#message-form')
 //set up sumit button
 form.addEventListener('submit', function(e){
//prevent the form's defualt submission action
e.preventDefault()
//get user's input  from form 
const message = document.querySelector('#message')
const feedback = document.querySelector('.feedback')
const messageContent = document.querySelector('.message-content')

 if (message.value === ''){
    feedback.classList.add('show')
    setTimeout(function(){
        feedback.classList.remove('show')
    }, 2000)

    }

    else {
        //change message content and clear the message input
        messageContent.textContent = message.value
        message.value = ''
    
 }


 })
})()