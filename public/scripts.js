const PhotosUpload = {
    input: "",
    preview: document.querySelector('#photos-preview'),
    uploadLimit: 5,
    files: [],
    handleFileInput(event) {
        const { files: fileList } = event.target
        PhotosUpload.input = event.target

        if(PhotosUpload.hasLimit(event)) return

        Array.from(fileList).forEach(file => {

            PhotosUpload.files.push(file)

            const reader = new FileReader()

            reader.onload = () => {
                const image = new Image()
                image.src = String(reader.result)

                const div = PhotosUpload.getContainer(image)
                PhotosUpload.preview.appendChild(div)
            }

            reader.readAsDataURL(file)
        })
        
    },
    getContainer(image) {
        const div = document.createElement('div')
        div.classList.add('photo')

        div.appendChild(image)

        return div

    },
    hasLimit(event) {
        const { uploadLimit, input, preview } = PhotosUpload
        const { files: fileList } = input

        if( fileList.length > uploadLimit ) {
            alert(`Envie no máximo ${uploadLimit} imagens`)
            event.preventDefault()
            return true
        }
    }
}


// const showHides = document.querySelectorAll('.show-hide')
// const botoes = document.querySelectorAll('.botao')


// function esconder(index) {
//     botoes[index].addEventListener('click', function(){
//         if (showHides[index].classList.contains('hide')) {
//             showHides[index].classList.remove('hide')
//             botoes[index].innerHTML = `ESCONDER`
//         } else {
//             showHides[index].classList.add('hide')
//             botoes[index].innerHTML = `MOSTRAR`
//         }       

//     })
// }

// for (i = 0; i <= 2; i++) {
//     esconder(i)
// }

