export const BASE_URL = 'https://api.hexie.ru';

export const ORDERS_URL = '/orders';
export const CLIENTS_URL = '/clients';

export const LOGIN_URL = '/login';
export const LOGOUT_URL = '/logout';

export const USER_URL = '/users/me'; // эндпоинт получения данных о пользователе.


export const ESC_CODE = 'Escape';

export const statusNames = {
    "IN": "Входящее",
    "NEED-INFO": "Требуется уточнение",
    "IN_KTO": "У конструкторов",
    "DRAW_SENT": "Отправили чертеж",
    "GOFFER": "Дали предложение",
    "BILLED": "Выставлен счет",
    "PAID": "Оплачен",
    "DELAY-MONTH": "Отложен на-месяц",
    "DELAY-HYEAR": "Отложен на-пол-года",
    "DENY": "Отказ"
};

export const ROUTES = {
    main: '/',
    login: '/login',
    register: '/register',
    //forgotPassword: '/forgot-password',
    //resetPassword: '/reset-password',
    profile: '/profile',
    //profileOrders: '/profile/orders',
    //profileOrderItem: '/profile/orders/:id',
    //ingredient: '/ingredients/:id',
    //feed: '/feed',
    //feedOrderItem: '/feed/:id'
}