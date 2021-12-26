const Ы = {};

const _элемент = (селекторЭлемента) => {
  const элементы = [];
  if (typeof селекторЭлемента === 'string') {
    выбранныеЭлементы = document.querySelectorAll(селекторЭлемента);
    выбранныеЭлементы.forEach((элемент) => { элементы.push(элемент) });
  } else {
    элементы.push(селекторЭлемента);
  }

  const применитьКоВсемЭлементам = (функция, массив) => {
    массив.forEach((элемент) => { функция(элемент); });
  }

  const Славянка = {
    добавитьКласс: (имяКласса) => {
      const добавитьКлассКЭлементу = (элемент) => {
        элемент.classList.add(имяКласса);
      }
      применитьКоВсемЭлементам(добавитьКлассКЭлементу, элементы);
      return Славянка;
    },
    удалитьКласс: (имяКласса) => {
      const добавитьКлассКЭлементу = (элемент) => {
        элемент.classList.remove(имяКласса);
      }
      применитьКоВсемЭлементам(добавитьКлассКЭлементу, элементы);
      return Славянка;
    },
    переключитьКласс: (имяКласса) => {
      const добавитьКлассКЭлементу = (элемент) => {
        элемент.classList.toggle(имяКласса);
      }
      применитьКоВсемЭлементам(добавитьКлассКЭлементу, элементы);
      return Славянка;
    },
    создать: {
      элемент: ({ айди, тип, класс, содержимое, стиль, ссылка }) => {
        const типЭлемента = таблицаСоответствийЭлементов[тип] ? таблицаСоответствийЭлементов[тип] : тип;
        const новыйЭлемент = document.createElement(типЭлемента);
        if (содержимое) {
          новыйЭлемент.innerHTML = содержимое;
        }
        if (айди) {
          новыйЭлемент.id = айди;
        }
        if (класс) {
          новыйЭлемент.className = класс;
        }
        применитьКоВсемЭлементам((элемент) => { элемент.append(новыйЭлемент) }, элементы);
        if (стиль) {
          Ы.элемент(новыйЭлемент).стиль(стиль);
        }
        if (ссылка) {
          новыйЭлемент.href = ссылка;
        }
        return Ы.элемент(новыйЭлемент);
      },
      добавитьДобавлениеТэгов: () => {
        for (const типЭлемента in таблицаСоответствийЭлементов) {
          Славянка.создать[типЭлемента] = (параметрыЭлемента) => {
            return Ы.элемент(селекторЭлемента).создать.элемент({ ...параметрыЭлемента, тип: типЭлемента })
          }
        }
      },
    },
    стиль: (входящиеСтили, стильОднойСтроки) => {
      const найтиИмяСвойстваСтиля = (свойствоСтиляНаРусском) => {
        const найденноеСвойство = таблицаСоответствийСвойствСтилей[свойствоСтиляНаРусском];
        return найденноеСвойство ? найденноеСвойство : свойствоСтиляНаРусском;
      }

      const применитьСтилиКЭлементу = (элемент) => {
        const применитьСтиль = (ключСтиля, значение) => {
          элемент.style[найтиИмяСвойстваСтиля(ключСтиля)] = значение;
        }
        if (typeof входящиеСтили === 'string') {
          применитьСтиль(входящиеСтили, стильОднойСтроки);
          return Славянка;
        }

        for (let ключСтиля in входящиеСтили) {
          применитьСтиль(ключСтиля, входящиеСтили[ключСтиля]);
        }
      }
      применитьКоВсемЭлементам(применитьСтилиКЭлементу, элементы);
      return Славянка;
    },
    событие: (типСобытия, действие) => {
      const тип = (таблицаДействий[типСобытия]) ? таблицаДействий[типСобытия] : типСобытия;
      const функцияПоДействиюНадЭлементом = (элемент) => {
        элемент.addEventListener(тип, действие);
      }
      применитьКоВсемЭлементам(функцияПоКликуЭлемента, элементы);
      return Славянка;
    },
    нажатие: (функцияПоКлику) => {
      const функцияПоКликуЭлемента = (элемент) => {
        элемент.addEventListener('click', функцияПоКлику);
      }
      применитьКоВсемЭлементам(функцияПоКликуЭлемента, элементы);
      return Славянка;
    },
    переключениеПоказа: (значениеВидимостиПоУмолчанию = 'block') => {
      let текущееЗначениеВидимости = window.getComputedStyle(элемент).display;
      let значениеВидимости = текущееЗначениеВидимости !== 'none' ? текущееЗначениеВидимости : значениеВидимостиПоУмолчанию;
      const переключениеПоказаЭлемента = (элемент) => {
        if (текущееЗначениеВидимости === 'none') {
          Ы.элемент(элемент).стиль('способПоказа', 'none');
        } else {
          Ы.элемент(элемент).стиль('способПоказа', значениеВидимости);
        }
      }
      применитьКоВсемЭлементам(переключениеПоказаЭлемента, элементы);
      return Славянка;
    }
  }

  Славянка.создать.добавитьДобавлениеТэгов();
  return Славянка;
}

Ы.элемент = _элемент;

const таблицаСоответствийЭлементов = {
  'блок': 'div',
  'строка': 'span',
  'абзац': 'p',
  'заголовок1': 'h1',
  'заголовок2': 'h2',
  'заголовок3': 'h3',
  'заголовок4': 'h4',
  'заголовок5': 'h5',
  'заголовок6': 'h6',
  'шапка': 'header',
  'подвал': 'footer',
  'маркированныйСписок': 'ul',
  'нумерованныйСписок': 'ol',
  'пунктСписка': 'li',
  'ссылка': 'a',
  'таблица': 'table',
  'строкаТаблицы': 'tr',
  'ячейкаТаблицы': 'td',
}

const таблицаСоответствийСвойствСтилей = {
  'элементВычислениеРазмеров': 'boxSizing',
  'элементТень': 'boxShadow',
  'размерШрифта': 'fontSize',
  'чисто': 'clear',
  'областьВидимости': 'clip',
  'содержимое': 'content',
  'курсор': 'cursor',
  'направлениеТекста': 'direction',
  'юникодБиди': 'unicodeBidi',
  'способПоказа': 'display',
  'выравнивание': 'float',
  'прозрачность': 'opacity',
  'позиция': 'position',
  'кавычки': 'quotes',
  'изменениеРазмера': 'resize',
  'размерТабуляции': 'tabSize',
  'трансформация': 'transform',
  'трансформацияТочка': 'transform',
  'вертикальноеВыравнивание': 'verticalAlign',
  'видимость': 'visibility',
  'пробелы': 'whiteSpace',
  'разрывСлов': 'breakWord',
  'интервалМеждуСловами': 'wordSpacing',
  'переносДлинныхСлов': 'wordWrap',
  'направлениеТекста': 'writtingMode',

  // печать страницы
  'числоСтрокДляПечатиМин': 'orphans',
  'разрывСтраницыПосле': 'pageBreakerAfter',
  'разрывСтраницыДо': 'pageBreakerBefore',
  'разрывСтраницыВнутри': 'pageBreakerInside',
  'строкНаСледующейМин': 'widows',
  // прокрутка
  'прокрутка': 'overflow',
  'прокруткаВертикально': 'overflowY',
  'прокруткаГоризонтально': 'overflowX',

  // колонки
  'колонкиКоличество': 'columnCount',
  'колонкиРасстояние': 'columnGap',
  'колонкиЛиния': 'columnRule',
  'колонкиШирина': 'columnWidth',
  'колонки': 'columns',

  // отступы
  'внешнийОтступ': 'margin',
  'внешнийОтступСнизу': 'marginBottom',
  'внешнийОтступСлева': 'marginLeft',
  'внешнийОтступСправа': 'marginRight',
  'внешнийОтступСверху': 'marginTop',

  'внутреннийОтступ': 'padding',
  'внутреннийОтступСверху': 'paddingTop',
  'внутреннийОтступСнизу': 'paddingBottom',
  'внутреннийОтступСлева': 'paddingLeft',
  'внутреннийОтступСправа': 'paddingRight',

  // переход
  'переход': 'transition',
  'переходОжидание': 'transitionDelay',
  'переходВремя': 'transitionDuration',
  'переходСвойство': 'transitionProperty',
  'переходФункцияОтВремени': 'transitionTimingFunction',

  // размеры и позиционирование
  'низ': 'bottom',
  'верх': 'top',
  'лево': 'left',
  'право': 'right',
  'ширина': 'width',
  'высота': 'height',
  'высотаМакс': 'maxHeight',
  'ширинаМакс': 'maxWidth',
  'ширинаМин': 'minWidth',
  'высотаМин': 'minHeight',

  // рамка
  'внешняяГраница': 'outline',
  'внешняяГраницаЦвет': 'outlineColor',
  'внешняяГраницаРасстояние': 'outlineOffset',
  'внешняяГраницаСтиль': 'outlineStyle',
  'внешняяГраницаШирина': 'outlineWidth',
  'рамка': 'border',

  'рамкаСнизу': 'borderBottom',
  'рамкаСнизуЦвет': 'borderBottomColor',
  'рамкаСнизуЛевоеЗакругление': 'borderBottomLeftRadius',
  'рамкаСнизуПравоеЗакругление': 'borderBottomRightRadius',
  'рамкаСнизуСтиль': 'borderBottomStyle',
  'рамкаСнизуШирина': 'borderBottomWidth',

  'рамкаЯчеек': 'borderCollapse',
  'рамкаЦвет': 'borderColor',
  'рамкаИзображение': 'borderImage',

  'рамкаСлева': 'borderLeft',
  'рамкаСлеваЦвет': 'borderLeftColor',
  'рамкаСлеваСтиль': 'borderLeftStyle',
  'рамкаСлеваШирина': 'borderBLeftWidth',

  'закругление': 'border-radius',

  'рамкаСправа': 'borderRight',
  'рамкаСправаЦвет': 'borderRightColor',
  'рамкаСправаСтиль': 'borderRightStyle',
  'рамкаСправаШирина': 'borderRightWidth',

  'рамкаОтступ': 'borderSpacing',
  'рамкаСтиль': 'borderStyle',

  'рамкаСверху': 'borderTop',
  'рамкаСверхуЦвет': 'borderTopColor',
  'рамкаСверхуЛевоеЗакругление': 'borderTopLeftRadius',
  'рамкаСверхуПравоеЗакругление': 'borderTopRightRadius',
  'рамкаСверхуСтиль': 'borderTopStyle',
  'рамкаСверхуШирина': 'borderTopWidth',

  'рамкаШирина': 'borderWitdh',

  // списки
  'списокСтиль': 'listStyle',
  'списокИзображение': 'listStyleImage',
  'списокПозиция': 'listStylePosition',
  'списокТип': 'listStyleType',

  //счетчик
  'счетчикПрирост': 'counterIncrement',
  'счетчикСборс': 'counterReset',

  // фон
  'фон': 'background',
  'фонЦвет': 'backgroundColor',
  'фонПозиция': 'backgroundAttachment',
  'фонСклейка': 'backgroundClip',
  'фонИзображение': 'backgroundImage',
  'цветФона': 'backgroundColor',
  'фонПозиционирование': 'backgroundOrigin',
  'фонПозиция': 'backgroundPosition',
  'фонПовторение': 'backgroundRepeat',
  'фонРазмер': 'backgroundSize',

  // шрифт
  'цвет': 'color',
  'шрифт': 'font',
  'шрифтЦвет': 'fontColor',
  'шрифтРазмер': 'fontSize',
  'шрифтНачертание': 'fontStretch',
  'шрифтСтиль': 'fontStyle',
  'шрифтВариант': 'fontSize',
  'шрифтЖирность': 'fontWeight',
  'интервалМеждуСимволами': 'letterSpacing',
  'межстрочныйИнтервал': 'lineHeight',

  // текст
  'текстВыравнивание': 'textAlign',
  'текстВыравниваниеПоследней': 'textAlignLast',
  'текстОформление': 'textDecoration',
  'текстОформлениеЦвет': 'textDecoration',
  'текстОформлениеЛиния': 'textDecorationLine',
  'текстОформлениеСтиль': 'textDecorationStyle',
  'текстПервыйОтступ': 'textIndent',
  'текстВидимость': 'textOverflow',
  'текстьТень': 'textShadow',
  'текстТрансофрмация': 'textTransform',

  // таблицы
  'позицияЗаголовка': 'captionSide',
  'пустыеЯчейки': 'emptyCells',
  'вычислениеШириныЯчеек': 'tableLayout',
  'позицияЗаголовка': 'captionSide',
}

const таблицаДействий = {
  'нажатие': 'click',
  'наведениеМыши': 'mouseover',
  'отведениеМыши': 'mouseout',
  'двойнойКлик': 'dblclick',
  'зажатиеМыши': 'mousedown',
  'отпусканиеМыши': 'mouseup',
  'контекстноеМеню': 'contextmenu',
  'перемещениеМыши': 'mousemove',
  'двойноеНажатие': 'dblclick',
}

const _конструкторКонстанты = () => {
  const константы = {};
  return (ключ, значение) => {
    if (значение === undefined) {
      return константы[ключ];
    }
    if (typeof константы[ключ] === 'undefined') {
      константы[ключ] = значение;
    } else {
      return new Error('Нельзя переопределять константу')
    }
  }
}

Ы.константа = _конструкторКонстанты();;

const _конструкторПеременной = () => {
  const переменные = {};
  return (ключ, значение) => {
    if (значение === undefined) {
      return переменные[ключ];
    }
    if (typeof переменные[ключ] === 'undefined') {
      переменные[ключ] = значение;
    }
  }
}

Ы.переменная = _конструкторПеременной();


const _получить = (объктДляПоиска, путьДоСвойства, значениеПоУмолчанию) => {
  if (путьДоСвойства.length === 0) {
    return объктДляПоиска;
  }
  const разобранныйПуть = путьДоСвойства.split('.');
  let искомыйМетод = объктДляПоиска;
  let прерватьЦикл = false;
  разобранныйПуть.forEach((ключ, индекс) => {
    if (!прерватьЦикл && typeof искомыйМетод[ключ] !== 'undefined') {
      искомыйМетод = искомыйМетод[ключ];
    } else {
      искомыйМетод = значениеПоУмолчанию;
    }
  });
  return искомыйМетод;
};

Ы.получить = _получить;
// @todo нуждается в рефакторинге
const _таблицаМетодовФорматирования = {
  змеиноеФорматирование: {
    функция: _генераторФункцииФорматирования(' ', '_'),
  },
  кебабФорматирование: {
    функция: _генераторФункцииФорматирования(' ', '-'),
  },
  верблюжьеФорматирование: {
    функция: (строка, реверс) => {
      let изначальныйРазделитель = ' ';
      let итоговыйРазделитель = '';
      if (реверс) {
        изначальныйРазделитель = '';
        итоговыйРазделитель = ' ';
        return строка.replace(/([A-Z]|[А-Я])/g, " " + "$1").trim().toLowerCase();
      }
      измененнаяСтрокаВвидеМассива = строка.split(' ').map((слово, индекс) => {
        if (индекс === 0) {
          return слово[0].toLowerCase() + слово.slice(1);
        }
        return слово[0].toUpperCase() + слово.slice(1); 
      })
      return измененнаяСтрокаВвидеМассива.join('');
    }
  },
  паскальФорматирование: {
    функция: (строка, реверс) => паскальФорматирование(строка, реверс),
  }
}

function паскальФорматирование(строка, реверс) {
  if (!реверс) {
    const строкаВерблюжьегоСтиля =  _таблицаМетодовФорматирования.верблюжьеФорматирование.функция(строка, false);
    return строкаВерблюжьегоСтиля[0].toUpperCase() + строкаВерблюжьегоСтиля.slice(1); 
  }
  else {
    return _таблицаМетодовФорматирования.верблюжьеФорматирование.функция(строка, true)
  }
}

function _генераторФункцииФорматирования(изначальныйРазделительПоУмолчанию, итоговыйРазделительПоУмолчанию) {
  return (строка, реверс) => {
    let изначальныйРазделитель = изначальныйРазделительПоУмолчанию;
    let итоговыйРазделитель = итоговыйРазделительПоУмолчанию;
    if (реверс) {
      изначальныйРазделитель = итоговыйРазделитель;
      итоговыйРазделитель = изначальныйРазделительПоУмолчанию;
    }
    let измененнаяСтрока = строка.replace(/([A-Z]|[А-Я])/g, изначальныйРазделитель + "$1").split(изначальныйРазделитель).join(итоговыйРазделитель).toLowerCase();
    if (измененнаяСтрока[0] === итоговыйРазделитель) {
      измененнаяСтрокаВидеМассива = измененнаяСтрока.split('');
      измененнаяСтрокаВидеМассива.splice(0, 1);
      измененнаяСтрока = измененнаяСтрокаВидеМассива.join('');
    }
    if (измененнаяСтрока[измененнаяСтрока.length] === итоговыйРазделитель) {
      измененнаяСтрокаВидеМассива = измененнаяСтрока.split('');
      измененнаяСтрокаВидеМассива.splice(измененнаяСтрока.length - 1, 1);
      измененнаяСтрока = измененнаяСтрокаВидеМассива.join('');
    }
    измененнаяСтрока = измененнаяСтрока.replace(итоговыйРазделитель + итоговыйРазделитель, итоговыйРазделитель);
    return измененнаяСтрока;
  }

}

const иницаилизироватьМетодыФорматирования = () => {
  const методыФорматирования = {};
  for (метод in _таблицаМетодовФорматирования) {
    методыФорматирования[метод] = _таблицаМетодовФорматирования[метод].функция;
  }
  return методыФорматирования
}

Ы.формат = иницаилизироватьМетодыФорматирования();