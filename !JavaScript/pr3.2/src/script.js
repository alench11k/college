let a = Number(prompt("Введите первое число"));
let b = Number(prompt("Введите второе число"));
alert(`
${a}>${b}  ${a>b}
${a}<${b} ${a<b}
${a}==${b} ${a==b}
${a}!=${b} ${a!=b}
${a}>=${b} ${a>=b}
${a}<=${b} ${a<=b}
`);