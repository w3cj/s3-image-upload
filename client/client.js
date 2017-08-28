console.log('IS THIS HAPPENING??');

function uploadFile(file, signedRequestURL, url) {
  fetch(signedRequestURL, {
    method: 'PUT',
    body: file,
  }).then(() => {
    console.log(url);
  });
}

function getSignedRequest(file) {
  fetch(`/sign-s3?file-name=${file.name}&file-type=${file.type}`)
    .then(res => res.json())
    .then((result) => {
      uploadFile(file, result.signedRequest, result.url);
    });
}

function submit(event) {
  event.preventDefault();
  const files = document.getElementById('file').files;
  const file = files[0];
  if (file != null) {
    getSignedRequest(file);
  }
}

document.querySelector('form').addEventListener('submit', submit);
