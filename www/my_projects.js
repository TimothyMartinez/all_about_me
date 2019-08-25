'use strict';

const e = React.createElement

class MyProjects extends React.Component {
  state = {
    projectList: []
  }

  render() {
    return e('div', {id: 'config-container'},
      e('div', {id: 'site-one', className: 'nosho'}, ''),
      e('div', {id: 'site-two', className: 'show'}, ''),
      e('div', {id: 'site-three', className: 'nosho'}, ''),
      e('div', {id: "button-container"}, 
        e('button', {type: 'submit', className: 'selector site1'}, ''),
        e('button', {type: 'submit', className: 'selector site2'}, ''),
        e('button', {type: 'submit', className: 'selector site3'}, ''),
      )
    )
  }
}

function runClick(event) {
  console.log(event.target.classList)
  if(event.target.classList.contains('site1')) {
    document.getElementsByClassName("show")[0].classList.add('nosho')
    document.getElementsByClassName("show")[0].classList.remove('show')
    document.getElementById("site-one").classList.add('show')
    document.getElementById("site-one").classList.remove('nosho')
  } else if (event.target.classList.contains('site2')) {
    document.getElementsByClassName("show")[0].classList.add('nosho')
    document.getElementsByClassName("show")[0].classList.remove('show')
    document.getElementById("site-two").classList.add('show')
    document.getElementById("site-two").classList.remove('nosho')
  } else if(event.target.classList.contains('site3')) {
    document.getElementsByClassName("show")[0].classList.add('nosho')
    document.getElementsByClassName("show")[0].classList.remove('show')
    document.getElementById("site-three").classList.add('show')
    document.getElementById("site-three").classList.remove('nosho')
  }
}

document.addEventListener('DOMContentLoaded', function(){
  const myPages = document.querySelector('#my_pages')
  ReactDOM.render(e(MyProjects), myPages)
  
  document.addEventListener('click', runClick)
})



