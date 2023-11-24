let prepod = document.querySelector('.teacher');

let teacher = {

    surname: 'Лузина',
    name: 'Алёна',
    patronymic: 'Алексеевна',
    ocupation: 'Студент',
    degree: 'Среднее специальное',
    category: 'Высшая',
    education: 'ПКК "Оникс"',
    discipline: 'Информатика',
    note: 'Примечание',
}

prepod.innerHTML = `
    <h2>${teacher.surname} ${teacher.name} ${teacher.patronymic}</h2>
    <p><i>Должность:</i> ${teacher.ocupation}<p>
    <p><i>Уровень образования:</i> ${teacher.degree}<p>
    <p><i>Категория:</i> ${teacher.category}<p>
    <p><i>Образование:</i> ${teacher.education}<p>
    <p><i>Дисциплина:</i> ${teacher.discipline}<p>
    <p><i>Примечание:</i> ${teacher.note}<p>

`