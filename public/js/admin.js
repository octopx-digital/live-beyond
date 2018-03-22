import login from './modules/login';

(() => {
  var buttons = document.querySelectorAll('button');

  function getRows(e) {
    let tbl = e.currentTarget.getAttribute('name');
    let url = `admin/${tbl}`;

    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        let addSection = document.querySelector('#item-add');
        let wrapper = document.querySelector('#item-wrapper');
        let add = `<a data-table="${tbl}" href="/admin/add${tbl}">New</a>`;
        addSection.innerHTML = add;
        while(wrapper.firstChild) {
          wrapper.removeChild(wrapper.firstChild);
        }
        data.data.forEach((row) => {
          let item = `<li>${Object.keys(row)[1]}: ${row[Object.keys(row)[1]]}<a data-table="${tbl}" href="/admin/edit${tbl}/${row.id}">Edit</a><a class="delete-btn" data-table="${tbl}" data-delete="${row.id}" href="#">Delete</a></li>`;
          wrapper.innerHTML += item;
        });
        wrapper.querySelectorAll('.delete-btn').forEach((button) => {
          button.addEventListener('click', deleteItem, false);
        });
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  function addItem() {
    let section = document.querySelector('section').id;
    let url = `/admin/${section}`;

    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        let form = document.querySelector('form');
        data.fields.forEach((field) => {
          if(field.name != 'id') {
            let item;
            let required = '';
            if(field.flags >= 4097) {
              required = 'required';
            }
            // check if it is a text field
            // if it is not, add a input element
            if(field.type != '252') {
              item = `<label for="${field.name}">${field.name}</label><input type="text" name="${field.name}" value="" ${required}><br>`;
            }
            // if it is a text field, add a textarea element
            else {
              item = `<label for="${field.name}">${field.name}</label><textarea name="${field.name}" ${required}></textarea><br>`;
            }
            form.innerHTML += item;
          }
        });
        let submit = `<input type="submit" value="Save">`;
        form.innerHTML += submit;
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  function editItem(id) {
    let section = document.querySelector('section').id;
    let url = `/admin/${section}/${id}`;

    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        let form = document.querySelector('form');
        data.fields.forEach((field) => {
          if(field.name != 'id') {
            let item;
            let value = '';
            let required='';
            if(data.data[0][field.name]) {
              value = data.data[0][field.name];
            }
            if(field.flags >= 4097) {
              required = 'required';
            }
            // check if it is a text field
            // if it is not, add a input element
            if(field.type != '252') {
              item = `<label for="${field.name}">${field.name}</label><input type="text" name="${field.name}" value="${value}" ${required}><br>`;
            }
            // if it is a text field, add a textarea element
            else {
              item = `<label for="${field.name}">${field.name}</label><textarea name="${field.name}" ${required}>${value}</textarea><br>`;
            }
            form.innerHTML += item;
          }
        });
        let submit = `<input type="submit" value="Save">`;
        form.innerHTML += submit;
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  function deleteItem(e) {
    e.preventDefault();
    let id = e.currentTarget.dataset.delete;
    let section = e.currentTarget.dataset.table;

    let url = `/${section}/delete/${id}`;

    fetch(url, {
      method: 'delete'
    })
      .then((resp) => resp.json())
      .then((data) => {
        //if success, redirect to admin page
        window.location.replace("/admin");
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  buttons.forEach((button) => {
    let tbl = button.getAttribute('name');
    button.addEventListener('click', getRows, false);
  });

  if(document.querySelector('#submit')){
    let submit = document.querySelector('#submit');
    submit.addEventListener('click', login.registerUser , false);
  }

})();
