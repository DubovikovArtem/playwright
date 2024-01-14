import { test } from '@playwright/test';
import axios, { Axios } from 'axios';
import { wrapper } from 'axios-cookiejar-support';
import { CookieJar } from 'tough-cookie';

test.describe(async () => {
    let client: Axios;
    let userId: string;
    let token: string;

    test.beforeAll(async () => {
        const jar = new CookieJar();
        client = wrapper(axios.create({
            baseURL: 'https://demoqa.com/',
            validateStatus: function (status) {
                return status >= 200 && status < 300
            },
            jar
        }));
        const loginData = await client.post('Account/v1/Login', {
            userName: "testUserArtemQwerty",
            password: "Qwe12345!"
        });
        userId = loginData.data.userId;
        token = loginData.data.token;
        console.log('token -------________--------________', token)
        console.log(loginData.status);
        console.log(loginData.data);
        console.log(loginData.headers);
        client.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    });

    test.skip('add book by API', async ({ }) => {
        const response = await client.post('/BookStore/v1/Books', {
            "userId": userId,
            "collectionOfIsbns": [
                {
                    "isbn": "9781449325862"
                }
            ]
        })
        console.log(response);
    });


    test.only('delete book by API', async ({ }) => {
        const response = await client.delete('/BookStore/v1/Book', {
            data: {
                "isbn": "9781449325862",
                "userId":userId
            }
        })
        console.log(response);
    });
});