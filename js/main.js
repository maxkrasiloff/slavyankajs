const телоДокумента = 'body';
const да = true;
const нет = false;

window.onload = function() {
  отрисоватьШапку();
  отрисоватьОсновнойКонтент();
  отрисоватьПодвал();
}


const отрисоватьШапку = () => {
  const добавитьПунктМеню = (меню, пунктМеню) => {
    const созданныйПунктМеню = меню.создать.пунктСписка({...пунктМеню, класс: 'пунктМеню'});
    const стилиПунктаМеню = {
      внутреннийОтступ: '0.5rem 1rem',
    }
    созданныйПунктМеню.стиль(стилиПунктаМеню);
  }
  const шапкаОбертка = Ы.элемент(телоДокумента).создать.блок({класс: 'шапкаОбертка'});
  const шапка = шапкаОбертка.создать.шапка({класс: 'шапка'});
  const логотип = шапка.создать.блок({класс: 'логотип', содержимое: 'Славянка'});
  const меню = шапка.создать.маркированныйСписок({класс: 'менюСайта'});
  добавитьПунктМеню(меню, {содержимое: '<a href="#установка">Установка</a>'});
  добавитьПунктМеню(меню, {содержимое: '<a href="#документация">Документация</a>'});
  добавитьПунктМеню(меню, {содержимое: '<a href="#заключение">Заключение</a>'});
  добавитьПунктМеню(меню, {содержимое: '<a href="#полезныеСсылки">Полезные ссылки</a>'});
}

const отрисоватьПодвал = () => {
  const подвалОбертка = Ы.элемент(телоДокумента).создать.блок({класс: 'подвалОбертка'});
  const подвал = подвалОбертка.создать.подвал({ класс: 'подвал' });
  const логотип = подвал.создать.блок({класс: 'логотип', содержимое: 'Славянка'});
  const пунктыМеню = [
    {
      ссылка: 'https://vk.com/max_krasiloff',
      текст: 'мой профиль',
      классИконки: 'вкИконка иконкаМенюподвал',
    },
    {
      ссылка: 'https://www.linkedin.com/in/maxkrasiloff/',
      текст: 'мой профиль',
      классИконки: 'линекдИнИконка иконкаМенюподвал',
    },
    {
      ссылка: 'https://github.com/maxkrasiloff',
      текст: 'мой github',
      классИконки: 'браузерИконка иконкаМенюподвал',
    },
  ];

  создатьМеню({ пунктыМеню, родитель: подвал, класс: 'менюПодвал'});
}

const создатьМеню = ({ пунктыМеню, родитель, класс, айди }) => {
  const добавитьПунктМеню = (меню, пунктМеню) => {
    const созданныйПунктМеню = меню.создать.пунктСписка({...пунктМеню, класс: 'пунктМеню'});
    const стилиПунктаМеню = {
      внутреннийОтступ: '0.5rem 1rem',
    }
    созданныйПунктМеню.стиль(стилиПунктаМеню);
  }
  const меню = родитель.создать.маркированныйСписок({ класс, айди });
  пунктыМеню.forEach((элемент, индекс, массив) => {
    добавитьПунктМеню(меню, {содержимое: `<div class="${элемент.классИконки}"></div><a href="${элемент.ссылка}">${элемент.текст}</a>`})
  })
}

const отрисоватьОсновнойКонтент = () => {
  const главныйКонтентОбертка = Ы.элемент(телоДокумента).создать.блок({класс: 'контентОбертка'});
  const контент = главныйКонтентОбертка.создать.блок({класс: 'контент'});

  const первыйЗаголовок = {текст: 'Славянка - ДжаваСкрипт по-русски', сСылкой: да, айдиСсылки: 'welcome'};
  const первыйБлок = { 
    содержимое: `Библиотека SlavyankaJS не просто расширяет базовые возможности по работе с 
    DOM-элементами, но так же обеспечивает работу с ними на русском языке!<br /> 
    <div class="редакторКода">
    const шапкаОбертка = Ы.элемент(телоДокумента).создать.блок({класс: 'шапкаОбертка'});<br /> 
    const шапка = шапкаОбертка.создать.шапка({класс: 'шапка'});<br /> 
    const логотип = шапка.создать.блок({класс: 'логотип', содержимое: 'Славянка'});<br /> 
    </div>
    `
  }
  первыйБлок.содержимое = форматированиеКода(первыйБлок.содержимое);
  добавитьБлок(первыйЗаголовок, первыйБлок, контент )
  const второйЗаголовок = {текст: 'Установка', сСылкой: да, айдиСсылки: 'установка'};
  const второйБлок = {
    содержимое: `Установка библиотеки <b>SlavyankaJs</b> весьма простая задача. Для этого необходимо следовать следующей инструкции:
      <ol>
        <li>Скачать библиотеку <a href="./js/slavyanka.js">по ссылке</a></li>
        <li>Добавить в папку с вашим проектом</li>
        <li>Подключить ее к вашему проекту:</li>
      </ol>
      <textarea class="редакторКода" id="редакторКода2"><script src="/js/slavyanka.js"></script></textarea>
      <button id="копироватьВбуферОбменаБлок2">копировать</button>
    `
  }
  добавитьБлок(второйЗаголовок, второйБлок, контент )
  Ы.элемент('#копироватьВбуферОбменаБлок2').нажатие(() => {
    const копируемыйТекст = document.querySelector('#редакторКода2');
    копируемыйТекст.select();
    document.execCommand('copy');
  })

  отрисоватьДокументацию(контент);
}

const отрисоватьДокументацию = (родитель) => {
  const айдиБлокаДокументации = 'блокДокументации';
  const заголовок = {
    текст: 'Документация',
    сСылкой: да,
    айдиСсылки: 'документация',
    тэгЗаголовка: 'заголовок1',
  }

  const контентБлока = {
    содержимое: '',
    айди: айдиБлокаДокументации,
    
  }
  добавитьБлок(заголовок, контентБлока, родитель );
  Ы.справка(false, true).forEach((элементСправки) => {
    Ы.элемент('#' + айдиБлокаДокументации).создать.блок({
      содержимое: элементСправки,
      класс: 'блокСправки'
    });
  });
  
  // добавитьПунктДокументации({
  //   заголовок: 'Главная функция',
  //   код: 'Ы.элемент(string: селектор || элемент)',
  //   документация: `Главная функция-обертка. В качестве аргумента принимает либо CSS-селектор, либо элемент. 
  //   Возвращает объект методов, с которым можно взаимодействовать дальше`,
  // });
  // добавитьПунктДокументации({
  //   заголовок: '.добавитьКласс()',
  //   код: '.добавитьКласс(string: имяКласса)',
  //   документация: `Метод главной функции. Добавляет CSS-класс.
  //   <br />Возвращает объект-обертку, что позволяет вызывать дополнительные методы`,
  // });
  // добавитьПунктДокументации({
  //   заголовок: '.удалитьКласс()',
  //   код: '.удалитьКласс(string: имяКласса)',
  //   документация: `Метод главной функции. Удаляет CSS-класс.
  //   <br />Возвращает объект-обертку, что позволяет вызывать дополнительные методы`,
  // });
  // добавитьПунктДокументации({
  //   заголовок: '.переключитьКласс()',
  //   код: '.переключитьКласс(string: имяКласса)',
  //   документация: `Метод главной функции. Удаляет CSS-класс, если он найден, иначе добавляет.
  //   <br />Возвращает объект-обертку, что позволяет вызывать дополнительные методы`,
  // });

  // Ы.элемент(`#${айдиБлокаДокументации}`).создать.заголовок2({содержимое: 'Создание элементов'});
  // добавитьПунктДокументации({
  //   заголовок: '.создать',
  //   код: '.создать',
  //   документация: `Свойство главной функции.
  //   <br />Возврашает набор методов для создания элементов.`,
  // });
  // добавитьПунктДокументации({
  //   заголовок: 'создать.элемент()',
  //   код: '.элемент({ содержимое: string, класс: string, типЭлемента: string, стиль: объектСтилей, ссылка: строка, айди: строка })',
  //   документация: `Метод свойства создать. Создает элемент внутри родительского блока.
  //   <br />В качестве аргументов принимает объект со следующими свойствами:
  //   <ul>
  //     <li><b>содержимое</b> - внутренний HTML нового элемента, по умолчанию пустой</li>
  //     <li><b>класс</b> - класс элемента в виде строки</li>
  //     <li><b>тип элемента</b> - тип создаваемого элемента в виде строки, описанные в документации ниже, либо стандартные для HTML</li>
  //     <li><b>стиль</b> - стили элемента в виде объекта стилей. Подробнее про объект стилей можно почитать ниже</li>
  //     <li><b>ссылка</b> - аналог свойства href в виде строки</li>
  //     <li><b>айди</b> - аналог свойства href в виде строки</li>
  //   </ul>
  //   Возврашает обертку вокруг нового элемента.`,
  // });
  // for (ключ in таблицаСоответствийЭлементов) {
  //   добавитьПунктДокументации({
  //     заголовок: `создать.${ключ}()`,
  //     код: `.${ключ}({ содержимое: string, класс: string, стиль: объектСтилей, ссылка: строка, айди: строка })`,
  //     документация: `Метод свойства создать. Создает <code>&#60;${таблицаСоответствийЭлементов[ключ]}&#62;</code> внутри родительского блока.
  //     <br />В качестве аргументов принимает объект со свойствами, аналогичными создать.элемент() кроме типЭлемента
  //     <br />Возврашает обертку вокруг нового элемента.`,
  //   });
  // }

  // Ы.элемент(`#${айдиБлокаДокументации}`).создать.заголовок2({содержимое: 'Взаимодействие с элементами'});
  // добавитьПунктДокументации({
  //   заголовок: `нажатие()`,
  //   код: `.нажатие(функцияПриНажатии)`,
  //   документация: `Метод главной функции. Добавляет обработчик по клику для элемента.
  //   <br />В качестве аргумента принимает функцию, которая срабатывает при нажатии по элементу
  //   <br />Возврашает обертку вокруг элемента.`,
  // });
  // добавитьПунктДокументации({
  //   заголовок: `переключениеПоказа()`,
  //   код: `.переключениеПоказа(значениеДляНевидимогоЭлемента)`,
  //   документация: `Метод главной функции. Скрывает элемент, если <code>способПоказа: none</code>, иначе делает его видимым. 
  //   <br />В качестве аргумента принимает значение для невидимого элемента, по умолчанию имеет значение 'block'
  //   <br />Возврашает обертку вокруг элемента.`,
  // });

  // Ы.элемент(`#${айдиБлокаДокументации}`).создать.заголовок2({содержимое: 'Изменение стилей'});
  // добавитьПунктДокументации({
  //   заголовок: '.стиль()',
  //   код: '.стиль(объектСтилей)',
  //   документация: `Метод главной функции. Добавляет стили ко всем выбранным элементам.
  //   <br />В качестве аргумента принимает объект стилей, пример:
  //   <br />
  //   <code>
  //       {<br />
  //         способПоказа: 'flex',<br />
  //         цвет: '#333',<br />
  //       }<br />
  //     </code>
  //   <br />В качестве свойств принимает свойста из таблицы свойств стилей, либо стандартные свойства CSS.
  //   <br />Возвращает объект-обертку, что позволяет вызывать дополнительные методы`,
  // });

  // Ы.элемент(`#${айдиБлокаДокументации}`).создать.заголовок2({содержимое: 'Таблица свойств стилей'});
  // const таблицаСвойствСтилей = Ы.элемент(`#${айдиБлокаДокументации}`).создать.таблица({ класс: 'таблицаСвойствСтилей' });
  // for (ключ in таблицаСоответствийСвойствСтилей) {
  //   const названиеСвойства = таблицаСоответствийСвойствСтилей[ключ].replace( /([A-Z])/g, " $1" ).split(' ').join('-').toLowerCase();
  //   const кодБлока = `
  //     <td style="width: 33%"><b>${ключ}</b></td>
  //     <td style="width: 66%">Аналог свойства <b>${названиеСвойства}</b>, подробнее в <a href="http://htmlbook.ru/css/${названиеСвойства}">htmlbook.ru</a> или <a href="https://developer.mozilla.org/ru/docs/Web/CSS/${названиеСвойства}">developer.mozilla.org</a></td>
  //   `;
  //   таблицаСвойствСтилей.создать.строкаТаблицы({содержимое: кодБлока});
  // }
}

const добавитьПунктДокументации = ({ заголовок, код, документация }) => {
  const добавляемыйЗаголовок = {
    текст: заголовок,
    тэгЗаголовка: 'абзац',
    стиль: {
      шрифтРазмер: '1.4rem',
      шрифтЖирность: 'bold',
    }
  };

  let содержимоеБлока = '';
  содержимоеБлока += '<div class="кодДокументацияОбертка"><div class="кодДокументация">' + код + '</div></div>';
  содержимоеБлока += '<div class="описаниеДокументацияОбертка"><div class="описаниеДокументация">' + документация + '</div></div>';

  const блокКонтента = {
    содержимое: содержимоеБлока,
    стиль: {
      способПоказа: 'flex',
      рамкаСнизу: '1px solid #ccc'
    }
  }
  добавитьБлок(добавляемыйЗаголовок, блокКонтента, Ы.элемент('#блокДокументации') );

}

const форматированиеКода = (код) => {
  return код.
  replace(/'(.*[А-я])'( |,|}|\))/g, "<span style=\"color: #77ff88\">'$1'</span>$2").
  replace( /const (.*[А-я]) /g, '<span style="color: #ff7733;">$&</span>').
  replace( /const/g, '<span style="color: #ffcc66;">const</span>').
  replace(/{|}/g, "<span style=\"color: #ccff66\">$&</span>").
  replace(/\(|\)/g, "<span style=\"color: #66ffcc\">$&</span>").
  replace(/ = | + |\./g, "<span style=\"color: #ff99cc\">$&</span>")
}


const добавитьБлок = (заголовок, содержимое, родитель) => {
  const созданныйЗаголовок = создатьЗаголовок({...заголовок, родитель});
  const созданныйБлок = создатьКонтентБлока({...содержимое, родитель})
}

const создатьЗаголовок = ({ текст, тэгЗаголовка = 'заголовок2', сСылкой = нет, ссылка = '', класс = '', родитель, айдиСсылки, классСсылки, стиль }) => {
  let родительЗаголовка = родитель;
  if (сСылкой) {
    родительЗаголовка = родитель.создать.ссылка({ ссылка, айди: айдиСсылки, класс: классСсылки });
  }
  return родительЗаголовка.создать[тэгЗаголовка]({ содержимое: текст, класс, стиль })
}

const создатьКонтентБлока = ({содержимое, родитель, класс, стиль, айди}) => {
  return родитель.создать.блок({содержимое, класс, стиль, айди});
}
