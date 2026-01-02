 let enterData = document.getElementById("input_todo");
    let list_item = document.getElementById("list");
    let addbtn = document.getElementById("addbtn")

    addbtn.addEventListener("click", function () {
      addtask()

    })

    function addtask() {
      if (enterData.value === '') {
        alert('please enter the word')
      }
      else {
        let li = document.createElement('li')
        li.innerHTML = enterData.value
        list_item.appendChild(li)
        let span = document.createElement('span')
        span.innerHTML='\u00d7';
        li.appendChild(span)
        
      }
        enterData.value="";
        saveData();
    }


    list_item.addEventListener("click",function(e){
       const li=e.target.closest('li')
       const span=e.target.closest('span')
      if (span) {
        li.remove();
        saveData();
        return;
    }

    
    if (li) {
        li.classList.toggle("checked");
        saveData();
    }
  },false)


  function saveData()
  {localStorage.setItem("data",list_item.innerHTML )

  }

  function showData()
  {list_item.innerHTML=localStorage.getItem("data");

  }
  showData()