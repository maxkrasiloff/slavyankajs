const _адрес = {
  получитьТекущий: (получитьПараметры = false) => {
    if (получитьПараметры) {
      const { href, protocol, host, hostname, port, pathname, search, hash, username, password, origin } = document.location;
      return {
        ссылка: href,
        протокол: protocol,
        хост: host,
        имяХоста: hostname,
        порт: port,
        путь: pathname,
        поисковаяСтрока: search,
        крошка: hash,
        имяПользователя: username,
        пароль: password,
        origin,
      }
    }
    return document.location.href;
  }
}

Ы.адрес = _адрес