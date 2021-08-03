const addButton= document.getElementById('add');

const updateLSData=()=>{
    const textAreaData = document.querySelectorAll('textArea')
    const notes = [];

    textAreaData.forEach((note)=>{
return notes.push(note.value);
    })
    localStorage.setItem('notes',JSON.stringify(notes));
}
const addNewNote = (text = '') => {
    const note = document.createElement('div') //for creating div inside html dynamically
    note.classList.add('note'); //for adding class inside div

    const htmlData = `
    <div class ="operation">
    <button class="edit"><i class="fas fa-edit"></i></button>
    <button class="delete"><i class = "fas fa-trash-alt"></i> </button>
    </div>
    <div class="main"> </div>
    <textarea class=""></textarea>`;

note.insertAdjacentHTML('afterbegin',htmlData);

// getting the references
const editButton = note.querySelector('.edit')
const delButton = note.querySelector('.delete')
const mainDiv = note.querySelector('.main')
const textArea = note.querySelector('textArea')

// deleting the node 
delButton.addEventListener('click',()=>{
    note.remove()
    updateLSData();
})
// toggle using edit icon 
textArea.value=text;
mainDiv.innerHTML = text;

editButton.addEventListener('click',()=>{
    mainDiv.classList.toggle('hidden')
    textArea.classList.toggle('hidden')
})

textArea.addEventListener('change',(event)=>{
const value = event.target.value;
mainDiv.innerHTML = text;
updateLSData();

})

document.body.appendChild(note)
};
// gettingdata from local storage 
const notes = JSON.parse(localStorage.getItem('notes'))
if(notes){ notes.forEach((notes)=>addNewNote())};


addButton.addEventListener('click', () => addNewNote() );