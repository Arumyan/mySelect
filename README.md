# mySelect
*my version select*

### HTML markup
```
<div id="customSelect" class="customselect">
  <div class="selectedField">Выберите</div>
  <ul>
    <!-- значение хранится в свойстве data-value -->
    <li data-value="value1">Пункт 1</li>
    <li data-value="value2">Пункт 2</li>
    <li data-value="value3">Пункт 3</li>
    <li data-value="value4">Пункт 4</li>
    <li data-value="value5">Пункт 5</li>
  </ul>
</div>

```
### Initialize
```
<script src="customSelect.js"></script>
<script>

  new CustomSelect('#customSelect', '.selectedField');

</script>
```

### Demo
https://arumyan.github.io/mySelect/
