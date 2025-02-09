async function uploadImage() {
    const fileInput = document.getElementById('imageUpload');
    const file = fileInput.files[0];
    if (!file) {
        alert('Please upload an image first.');
        return;
    }

    const formData = new FormData();
    formData.append('image', file);

    const response = await fetch('/api/upload-image', {
        method: 'POST',
        body: formData,
    });

    const data = await response.json();
    document.getElementById('textOutput').value = data.identifier;
}

async function retrieveImage() {
    const textInput = document.getElementById('textInput').value;
    if (!textInput) {
        alert('Please paste the unique identifier first.');
        return;
    }

    const response = await fetch('/api/retrieve-image', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ identifier: textInput }),
    });

    const data = await response.json();
    if (data.error) {
        alert(data.error);
        return;
    }

    const imageOutput = document.getElementById('imageOutput');
    imageOutput.innerHTML = `<img src="/uploads/${data.image}" alt="Retrieved Image">`;
}
