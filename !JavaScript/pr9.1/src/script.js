const header = document.createElement('header');
header.className = 'header text-center';
document.body.appendChild(header);

let h1 = document.createElement('h1');
h1.appendChild(document.createTextNode('Практика 9'));
header.appendChild(h1);

const main = document.createElement('main');
main.className = 'content';
document.body.appendChild(main);

let h2 = document.createElement('h2');
h2.appendChild(document.createTextNode('Lorem ipsum'));
main.appendChild(h2);

let h3 = document.createElement('h3');
h3.appendChild(document.createTextNode('Dolor sit amet'));
main.appendChild(h3);

let p = document.createElement('p');
p.appendChild(document.createTextNode('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eleifend sem a ligula sagittis, ac finibus mauris aliquet. '));
main.appendChild(p);

let h4 = document.createElement('h3');
h4.appendChild(document.createTextNode('Aliquam eleifend'));
main.appendChild(h4);

let p2 = document.createElement('p');
p2.appendChild(document.createTextNode('Aliquam eleifend consequat purus, a tincidunt odio vehicula eget. Sed sollicitudin, urna vitae elementum iaculis, leo tellus tristique tortor, quis condimentum justo sem sit amet sem. Fusce mattis metus metus, sed egestas tellus faucibus quis.'));
main.appendChild(p2);

let h5 = document.createElement('h3');
h5.appendChild(document.createTextNode('Nunc a ante feugiat'));
main.appendChild(h5);

let p3 = document.createElement('p');
p3.appendChild(document.createTextNode('Nunc a ante feugiat, hendrerit nunc sed, tristique ipsum. In hac habitasse platea dictumst. Etiam dapibus mattis nulla a consequat. Phasellus nec nunc et dui condimentum tristique.'));
main.appendChild(p3);

let h6 = document.createElement('h3');
h6.appendChild(document.createTextNode('Ut consequat auctor enim et dictum'));
main.appendChild(h6);

let p4 = document.createElement('p');
p4.appendChild(document.createTextNode('Ut consequat auctor enim et dictum. Maecenas venenatis et diam porta egestas. Suspendisse id erat lorem. Aenean consequat magna vitae eleifend accumsan. Suspendisse rhoncus pulvinar interdum. Aliquam vitae diam sed massa fermentum elementum.'));
main.appendChild(p4);

let h7 = document.createElement('h3');
h7.appendChild(document.createTextNode('Sed ultricies mauris quam'));
main.appendChild(h7);

let p5 = document.createElement('p');
p5.appendChild(document.createTextNode('Sed ultricies mauris quam, vel feugiat leo iaculis vitae. Donec nulla ex, maximus ac dapibus posuere, sagittis at nisi.'));
main.appendChild(p5);

const footer = document.createElement('footer');
main.className = 'footer';
document.body.appendChild(footer);

let span = document.createElement('span');
span.appendChild(document.createTextNode('Практику выполнила Фадеева А. И.'));
footer.appendChild(span);

let br = document.createElement('br');
footer.appendChild(br);

let span1 = document.createElement('span');
span1.appendChild(document.createTextNode('ГБПОУ "Пермский краевой колледж "ОНИКС"'));
footer.appendChild(span1);




