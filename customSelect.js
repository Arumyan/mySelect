function CustomSelect(elem, selectedField) {

	this.elem = document.querySelector(elem);
	this.selectedField = document.querySelector(selectedField);
	this.isOpen = false;
	var myselect = this;

	// функция toggle для select
	this.toggle = function () {
		if (this.isOpen)
			myselect.close()
		else myselect.open();
	};

	// функция открытия select
	this.open = function () {
		this.elem.classList.add('open');
		document.addEventListener('click', myselect.onDocumentClick);
		this.isOpen = true;
	}

	// функция закрытия select
	this.close = function () {
		myselect.elem.classList.remove('open');
		document.removeEventListener('click', myselect.onDocumentClick);
		this.isOpen = false;
	}

	// закрыть селект, если клик вне его
	this.onDocumentClick = function (event) {
		if (!myselect.elem.contains(event.target))
			myselect.close();
	}

	// обработка события при клике на select
	this.elem.addEventListener('click', function (event) {
		if (event.target == myselect.selectedField) {
			myselect.toggle();
		} else if (event.target.tagName == 'LI') {
			myselect.setValue(event.target.innerHTML, event.target.dataset.value);
			myselect.close();
		}
	})

	// установка выбранного поля и значения атрибута
	this.setValue = function (title, value) {
		this.selectedField.innerHTML = title;
		this.selectedField.setAttribute('data-val', value);
	}
}