// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  baseURL: 'http://kub1.7gis.ru:30003/',
  statuses: ['DEPRECATED', 'CASUAL', 'STABLE'],
  FirmwareDictionary: {
    GET: {
      422: 'Некорректные данные',
      500: 'Ошибка на сервере',
    },
    POST: {
      422: 'Некорректная прошивка',
      500: 'Ошибка на сервере',
      SUCCESS: 'Прошивка успешно добавлена',
    },
    PUT: {
      202: 'Будет обновлено',
      422: 'Некорректная прошивка/прошивки не существует',
      500: 'Ошибка на сервере',
      SUCCESS: 'Прошивка успешно обновлена',
    },
    DELETE: {
      202: 'Удаление будет выполнено',
      422: 'Прошивка не найдена',
      500: 'Ошибка на сервере',
    },
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
