  function addColumn() {
    const div = document.createElement('div');

    // div.className = 'row';

    div.innerHTML = `
      <input class="add-input" placeholder=" Category"> </input>  
      <input class="input-small" placeholder=" Position"> </input> 
      <input class="input-small" placeholder=" Sort"> </input>
    `;
    console.log('HERE', div);
    document.getElementById('criterion').appendChild(div);
  };