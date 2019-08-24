'use strict';
const e = React.createElement

class MyProjects extends React.Component {
  state = {
    projectList: [
      {pageOne: "page1", pageTwo: "page2", pageThree: "page3", pageFour: "page4" }
    ]
  }

  render() {
    return e('div', {},
      e('h1', {id: 'show'}, 'hohohohohoho'),
      e('h1', {id: 'nosho'}, 'hahahahahah'),
      e('button', {type: 'submit', className: 'selector', id: 'site1'}, '')
    )
  }
}

const runClick = (event) => {
  page
  console.log(event.target)
}

function shelf() {
  if( document.getElementById("site1").classList.contains('site1')){
    document.getElementById("site1").classList.add('shelf-op1')
    document.getElementById("shelf-select").classList.remove('shelf-op0')
  } else {
    document.getElementById("shelf-select").classList.add('shelf-op0')
    document.getElementById("shelf-select").classList.remove('shelf-op1')
  }
}

document.addEventListener('DOMContentLoaded', function(){
  const myPages = document.querySelector('#my_pages')
  ReactDOM.render(e(MyProjects), myPages)
  
  const select = document.querySelector('.selector')
  select.addEventListener('click', runClick)
})



