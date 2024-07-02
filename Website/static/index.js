function deleteNote(noteId) {
    fetch('/delete-note', { //takes passed noteId and sends a post request to the /delete-note endpoint (see views.py)
        method: 'POST',
        body: JSON.stringify({ noteId: noteId})
    }).then((_res) => { //then after it gets a response (_res)
        window.location.href = "/"; //reloads window back to the home page so refresh basically
    })
}