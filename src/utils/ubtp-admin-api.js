import { BASE_URL, LOGIN_URL, LOGOUT_URL, USER_URL } from "./constants";

function checkResponseIsOk(res) {
    console.log(res);
    if(res.ok || res.status === 502) {
        return res.json()
    } else {
        return Promise.reject(`Ошибка: ${res.status}`);
    }
}

export function loginRequest(org, userName, password) {
    return fetch(`${BASE_URL}${LOGIN_URL}`, {
      method: 'POST',
      credentials: 'include',
      body: JSON.stringify({
        org: org,
        username: userName,
        password: password
      }),
      headers: {
        // Добавляем необходимые заголовки
        "Authorization": "Bearer 234",
        'Content-Type': 'application/json',
      },
    }).then((res)=> {
        return checkResponseIsOk(res);
    })
}

export function logoutRequest() {
    return fetch(`${BASE_URL}${LOGOUT_URL}`, {
        method: 'POST',
        credentials: 'include',
        headers: {
            "Authorization": "Bearer 234",
            'Content-Type': 'application/json',
        },
    }).then((res)=> {
        return checkResponseIsOk(res);
    })
}

export const getUserInfoRequest = () => {
    return fetch(`${BASE_URL}${USER_URL}`, {
        method: 'GET',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
            "Authorization": "Bearer 234",
        }
    }).then((res)=> {
        return checkResponseIsOk(res);
    });
}


/* СХЕМА */

export const getSchemesAdminRequest = () => {
    return fetch(`${BASE_URL}/admin/schemes`)
        .then((res)=> {
            return checkResponseIsOk(res);
        })
}
export const getSpecificationByIdSchemeRequest = (idScheme) => {
    return fetch(`${BASE_URL}/admin/specifications/${idScheme}`, {
        method: 'GET',
        credentials: 'include',
        headers: {
            "Authorization": "Bearer 234",
            'Content-Type': 'application/json;charset=utf-8',
        },
        }).then((res)=> {
            return checkResponseIsOk(res);
        })
} 

export const postSchemeRequest = (svgText, type, comment) => {
    const body = JSON.stringify({
        svgText,
        type,
        comment
    });
    return fetch(`${BASE_URL}/admin/schemes`, {
        method: 'POST',
        credentials: 'include',
        body: body,
        headers: {
            "Authorization": "Bearer 234",
            'Content-Type': 'application/json',
        },
        }).then((res)=> {
            return checkResponseIsOk(res);
        })
}

/* СПЕЦИФИКАЦИЯ */
export const addSpecificattionRowRequest = (idScheme, idSort, nameTemplate, quantity/*, itemCategoryId*/) => {
    return fetch(`${BASE_URL}/admin/specifications`, {
        method: 'POST',
        credentials: 'include',
        body: JSON.stringify({
            idScheme,
            idSort, 
            nameTemplate, 
            quantity, 
            //itemCategoryId 
        }),
        headers: {
            // Добавляем необходимые заголовки
            "Authorization": "Bearer 234",
            'Content-Type': 'application/json',
        },
        }).then((res)=> {
            return checkResponseIsOk(res);
        })
}



export const filesUploadRequest = (orderId, formData) => {
    return fetch(`${BASE_URL}/orders/${orderId}/files`, {
        method: 'POST',
        body: formData, 
        credentials: 'include',
        headers: {
          "Authorization": "Bearer 234",
        }
    }).then((res)=> {
        return checkResponseIsOk(res);
    })
}