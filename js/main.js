const телоДокумента = 'body';
const да = true;
const нет = false;

window.onload = function () {
  window.onhashchange = () => переключениеКонтентаПоХэш(Ы.адрес.получитьТекущий(да).крошка);
  отрисоватьШапку();
  отрисоватьОсновнойКонтент();
  переключениеКонтентаПоХэш(Ы.адрес.получитьТекущий(да).крошка);
  отрисоватьПодвал();
}

const переключениеКонтентаПоХэш = (текущийХэш) => {
  const хэш = decodeURIComponent(текущийХэш).slice(1);
  отрисоватьКонтент(хэш);
}

const отрисоватьШапку = () => {
  const добавитьПунктМеню = (меню, пунктМеню) => {
    const созданныйПунктМеню = меню.создать.пунктСписка({ ...пунктМеню, класс: 'пунктМеню' });
    const стилиПунктаМеню = {
      внутреннийОтступ: '0.5rem 1rem',
    }
    созданныйПунктМеню.стиль(стилиПунктаМеню);
  }
  const шапкаОбертка = Ы.элемент(телоДокумента).создать.блок({ класс: 'шапкаОбертка' });
  const шапка = шапкаОбертка.создать.шапка({ класс: 'шапка' });
  const логотип = шапка.создать.блок({ класс: 'логотип', содержимое: 'SlavyankaJS' });
  шапка.создать.блок({ содержимое: '<div></div><div></div><div></div>', класс: 'кнопкаМеню' }).событие('нажатие', () => {
    меню.переключениеПоказа('flex');
  });
  const пунктыМеню = [
    {
      ссылка: '#введение',
      текст: 'Введение',
    },
    {
      ссылка: '#установка',
      текст: 'Установка',
    },
    {
      ссылка: '#документация',
      текст: 'Документация',
    },
    {
      ссылка: '#полезныеСсылки',
      текст: 'Полезные ссылки',
    },
    {
      ссылка: '#оПроекте',
      текст: 'О проекте',
    },
  ];
  const меню = создатьМеню({ пунктыМеню, родитель: шапка, класс: 'менюСайта' });
  Ы.элемент(телоДокумента).создать.блок({
    содержимое: `<div>Данная библиотека - эксперимент. Автор прекрасно понимает, что нарушает несколько паттернов разработки, например пищет код не на английском. Поэтому <b>крайне не рекомендуется использовать данную библиотеку в реальных проектах</b></div>
  `, класс: 'предупреждение верхнееПредупреждение'
  })
}

const отрисоватьПодвал = () => {
  const подвалОбертка = Ы.элемент(телоДокумента).создать.блок({ класс: 'подвалОбертка' });
  const подвал = подвалОбертка.создать.подвал({ класс: 'подвал' });
  const логотип = подвал.создать.блок({ класс: 'логотип', содержимое: 'SlavyankaJS' });
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

  создатьМеню({ пунктыМеню, родитель: подвал, класс: 'менюПодвал' });
}

const создатьМеню = ({ пунктыМеню, родитель, класс, айди }) => {
  const добавитьПунктМеню = (меню, пунктМеню) => {
    const созданныйПунктМеню = меню.создать.пунктСписка({ ...пунктМеню, класс: 'пунктМеню' });
    const стилиПунктаМеню = {
      внутреннийОтступ: '0.5rem 1rem',
    }
    созданныйПунктМеню.стиль(стилиПунктаМеню);
  }
  const меню = родитель.создать.маркированныйСписок({ класс, айди });
  пунктыМеню.forEach((элемент, индекс, массив) => {
    добавитьПунктМеню(меню, { содержимое: `<div class="${элемент.классИконки}"></div><a href="${элемент.ссылка}">${элемент.текст}</a>` })
  })
  return меню;
}

const отрисоватьОсновнойКонтент = (страница) => {
  const главныйКонтентОбертка = Ы.элемент(телоДокумента).создать.блок({ класс: 'контентОбертка' });
  const контент = главныйКонтентОбертка.создать.блок({ класс: 'контент' });

  Ы.элемент('#копироватьВбуферОбменаБлок2').нажатие(() => {
    const копируемыйТекст = document.querySelector('#редакторКода2');
    копируемыйТекст.select();
    document.execCommand('copy');
  })
}

const отрисоватьЛендинг = (родитель) => {
  const первыйЗаголовок = { текст: 'SlavyankaJS - ДжаваСкрипт по-русски', сСылкой: да, айдиСсылки: 'welcome' };
  const первыйБлок = {
    содержимое: `
    Библиотека SlavyankaJS не просто расширяет базовые возможности по работе с 
    DOM-элементами, но так же обеспечивает работу с ними на русском языке.<br /> 
    <div class="редакторКода">
    const шапкаОбертка = Ы.элемент(телоДокумента).создать.блок({класс: 'шапкаОбертка'});<br /> 
    const шапка = шапкаОбертка.создать.шапка({класс: 'шапка'});<br /> 
    const логотип = шапка.создать.блок({класс: 'логотип', содержимое: 'Славянка'});<br /> 
    </div>
    `
  }
  первыйБлок.содержимое = форматированиеКода(первыйБлок.содержимое);
  const первыйБлокОбертка = контент.создать.блок({ класс: 'слайд' });
  const фонСлайда = контент.создать.блок({ класс: 'фонСлайда', });
  добавитьБлок(первыйЗаголовок, первыйБлок, первыйБлокОбертка);
}

const отрисоватьУстановку = (родитель) => {
  const второйЗаголовок = { текст: 'Установка', сСылкой: да, айдиСсылки: 'установка' };
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
  добавитьБлок(второйЗаголовок, второйБлок, родитель);
}

const отрисоватьПолезныеСсылки = (родитель) => {
  const второйЗаголовок = { текст: 'Полезные ссылки' };
  const второйБлок = {
    содержимое: `Ссылки которые могут быть вам интересны, а могут и не быть
      <ol>
        <li>Мой <a href="https://github.com/maxkrasiloff">гитхаб</a></li>
        <li>Мой <a href="https://www.linkedin.com/in/maxkrasiloff/">линекедин</a></li>
      </ol>
      
    `
  }
  добавитьБлок(второйЗаголовок, второйБлок, родитель);
}

const отрисоватьОПроекте = (родитель) => {
  const второйЗаголовок = { текст: 'О проекте', тэгЗаголовка: 'заголовок1' };
  const второйБлок = {
    содержимое: `Библиотека <b>SlavyankaJS</b> была написана мной по нескольким причинам:
      <ul>
        <li>Было интересно написать свой аналог Jquery и lodash полностью на русском.</li>
        <li>Доказать, что библиотека JQuery в современных реалиях практически лишена смысла.</li>
        <li>Мне было скучно и мой мозг немного устал от разработки на React</li>
      </ul>
      <h2>Дальнейшее развитие</h2>
      По моим скромным убеждениям проект готов на 90%. Так как практическое использование этой библиотеки практически лишено смысла, то и дальнейшего развития она не требует.
      Но явно нуждается в доработке. На данный момент я не до конца решил, как реализовать работу с модулями расширений, как переизобрести массивы и ряд еще мелких пожеланий.
      Так же чешутся руки, изобрести свой велосипед компонентов, например создание форм, кнопок, чтобы интерфейс рисовался как можно проще.<br />
      <a href="https://github.com/maxkrasiloff/slavyankajs">Ссылка на гитхаб проекта</a>
      `
  }
  добавитьБлок(второйЗаголовок, второйБлок, родитель);
}
const конструкторОтрисовкиКонтента = (старыйАдрес = '') => {
  return (адрес) => {
    if (старыйАдрес == адрес) {
      return;
    }
    if (адрес.indexOf('документация') >= 0 && старыйАдрес.indexOf('документация') >= 0) {
      return;
    }
    старыйАдрес = адрес;
    контент = Ы.элемент('.контент');
    контент.очистить();
    контент.удалитьКласс('наВсюСтраницу');

    if (адрес.indexOf('документация') >= 0) {
      контент.добавитьКласс('наВсюСтраницу');
      отрисоватьДокументацию(контент);
      return;
    }
    switch (адрес) {
      case 'документация':
        отрисоватьДокументацию(контент);
        break;
      case 'установка':
        отрисоватьУстановку(контент);
        break;
      case 'оПроекте':
        отрисоватьОПроекте(контент);
        break;
      case 'полезныеСсылки':
        отрисоватьПолезныеСсылки(контент);
        break;
      default:
        отрисоватьЛендинг(контент);
        break;
    }
  }
  return отрисоватьКонтент;
}

const отрисоватьКонтент = конструкторОтрисовкиКонтента();

const отрисоватьПунктыМенюДокументации = (родитель, пунктыМеню) => {
  родитель.очистить();
  пунктыМеню.forEach((ключ) => {
    родитель.создать.ссылка({ содержимое: ключ, класс: 'пунктМенюДокументации', ссылка: `#документация/${ключ}` })
  });
}

const отрисоватьДокументацию = (родитель) => {

  родитель.создать.блок({ содержимое: '<div class="менюДокументации"></div><div class="содержимоеДокументации"></div>', класс: 'блокДокументации' });
  ключиСправки = получитьВсеКлючиСправки();
  const менюДокументации = Ы.элемент('.менюДокументации');
  const полеПоиска = менюДокументации.создать.полеВвода({ заглушка: 'Найти...' });
  const содержимоеМенюДокументации = Ы.элемент('.менюДокументации').создать.блок({ класс: 'содержимоеМенюДокументации' });
  полеПоиска.событие('отпусканиеКлавиши', (event) => {
    отрисоватьПунктыМенюДокументации(
      содержимоеМенюДокументации,
      ключиСправки.filter((ключ) => ключ.indexOf(полеПоиска.значение()) >= 0)
    );
  });
  отрисоватьПунктыМенюДокументации(содержимоеМенюДокументации, ключиСправки);
  const содержимоеДокументации = Ы.элемент('.содержимоеДокументации');
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
  добавитьБлок(заголовок, контентБлока, содержимоеДокументации);
  Ы.справка(false, true).forEach((элементСправки) => {
    Ы.элемент('#' + айдиБлокаДокументации).создать.блок({
      содержимое: элементСправки,
      класс: 'блокСправки'
    });
  });
}

const форматированиеКода = (код) => {
  return код.
    replace(/'(.*[А-я])'( |,|}|\))/g, "<span style=\"color: #77ff88\">'$1'</span>$2").
    replace(/const (.*[А-я]) /g, '<span style="color: #ff7733;">$&</span>').
    replace(/const/g, '<span style="color: #ffcc66;">const</span>').
    replace(/{|}/g, "<span style=\"color: #ccff66\">$&</span>").
    replace(/\(|\)/g, "<span style=\"color: #66ffcc\">$&</span>").
    replace(/ = | + |\./g, "<span style=\"color: #ff99cc\">$&</span>")
}


const добавитьБлок = (заголовок, содержимое, родитель) => {
  создатьЗаголовок({ ...заголовок, родитель });
  создатьКонтентБлока({ ...содержимое, родитель })
}

const создатьЗаголовок = ({ текст, тэгЗаголовка = 'заголовок2', сСылкой = нет, ссылка = '', класс = '', родитель, айдиСсылки, классСсылки, стиль }) => {
  let родительЗаголовка = родитель;
  if (сСылкой) {
    родительЗаголовка = родитель.создать.ссылка({ ссылка, айди: айдиСсылки, класс: классСсылки });
  }
  return родительЗаголовка.создать[тэгЗаголовка]({ содержимое: текст, класс, стиль })
}

const создатьКонтентБлока = ({ содержимое, родитель, класс, стиль, айди }) => {
  return родитель.создать.блок({ содержимое, класс, стиль, айди });
}
