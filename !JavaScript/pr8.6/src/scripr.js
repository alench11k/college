let prepod = document.querySelector('.teacher');

let teacher = {

    surname: 'Лузина',
    name: 'Алёна',
    patronymic: 'Алексеевна',
    ocupation: 'Студент',
    degree: ['Среднее специальное'],
    category: 'Высшая',
    education: 'ПКК "Оникс"',
    discipline: ['Информатика', 'Организация сетевых технологий'],
    note: 'Примечание',
}

    let disciplineColors = ['#FF0000','#00CED1'];

prepod.innerHTML = `
    <h2>${teacher.surname} ${teacher.name} ${teacher.patronymic}</h2>
    <p><i>Должность:</i> ${teacher.ocupation}<p>
    <p><i>Уровень образования:</i> ${teacher.degree}<p>
    <p><i>Категория:</i> ${teacher.category}<p>
    <p><i>Образование:</i> ${teacher.education}<p>
    <p><i>Дисциплина:</i>
    <ul>
        ${teacher.discipline.map((item, index) => `<li style="color:${disciplineColors[index]}"> ${item} </li>`).join('')}
    </ul> <p>
    <p><i>Примечание:</i> ${teacher.note}<p>

`