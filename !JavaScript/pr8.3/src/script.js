let prepod = document.querySelector('.teacher');

let surname = 'Лузина';
let name = 'Алёна';
let patronymic = 'Алексеевна';
let ocupation = 'Студент';
let degree = 'Среднее специальное';
let category = 'Высшая';
let education = 'ПКК "Оникс"';
let discipline = 'Информатика';
let note = 'Примечание';


prepod.innerHTML =  
    `
    Фамилия:                        ${surname}      <br>
    Имя:                            ${name}         <br>           
    Отчество:                       ${patronymic}   <br>
    Должность:                      ${ocupation}    <br>
    Уровень образования:            ${degree}       <br>
    Категория:                      ${category}     <br>
    Образование:                    ${education}    <br>
    Преподаваемая дисциплина:       ${discipline}   <br>
    Примечание:                     ${note}         <br>

`;
