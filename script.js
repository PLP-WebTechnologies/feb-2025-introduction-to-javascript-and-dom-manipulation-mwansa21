function changeContent() {
    const description = document.getElementById('description');
    description.textContent = 'The text has been updated!';
    description.style.color = 'green';
    description.style.fontWeight = 'bold';
  }
  
  function addElement() {
    const container = document.getElementById('container');
    if (!document.getElementById('new-item')) {
      const newItem = document.createElement('p');
      newItem.id = 'new-item';
      newItem.textContent = 'I am a new element added to the DOM!';
      newItem.style.color = 'blue';
      container.appendChild(newItem);
    }
  }
  
  function removeElement() {
    const item = document.getElementById('new-item');
    if (item) {
      item.remove();
    }
  }
  