const $form = document.querySelector('#form')
$form.addEventListener('submit', handleSubmit)

async function handleSubmit(event) {
    event.preventDefault()
    const form = new FormData(this)
    const response = await fetch(this.action, {
        method: this.method,
        body: form,
        headers: {
            'Accept': 'application/json'
        }
    })
    if(response.ok){
        this.reset()
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Gracias por contactarnos, nos comunicaremos pronto!',
            showConfirmButton: false,
            timer: 5500
        })
    }
}