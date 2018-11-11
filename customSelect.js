function CustomSelect(elem) {

    this.elem = elem;
    this.isOpen = false;
    var myselect = this;

    this.toggle = function() {
      if (this.isOpen) myselect.close()
        else myselect.open();
    };

    this.open = function() {
      this.elem.classList.add('open');
      document.addEventListener('click', myselect.onDocumentClick);
      this.isOpen = true;
    }

    this.close = function() {
      myselect.elem.classList.remove('open');
      document.removeEventListener('click', myselect.onDocumentClick);
      this.isOpen = false;
    }

    // закрыть селект, если клик вне его
    this.onDocumentClick = function(event) {
      if (!myselect.elem.contains(event.target)) myselect.close();
    }


    this.elem.addEventListener('click', function (event) {
      if (event.target.className == 'title') {
        myselect.toggle();
      } else if (event.target.tagName == 'LI') {
        myselect.setValue(event.target.innerHTML, event.target.dataset.value);
        myselect.close();
      }
    })

    this.setValue = function(title, value) {
      this.elem.querySelector('.title').innerHTML = title;
    }
  }

    // закрыть селект, если клик вне его
    /* function onDocumentClick(event) {
      if (!this.elem.contains(event.target)) myselect.close();
    } */

    // ------------------------

    /* function setValue(title, value) {
      this.elem.querySelector('.title').innerHTML = title;

      var widgetEvent = new CustomEvent('select', {
        bubbles: true,
        detail: {
          title: title,
          value: value
        }
      });

      myselect.elem.dispatchEvent(widgetEvent);

    } */
