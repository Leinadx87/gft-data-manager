export const MOCK_RESP_BGADP = {
    "data": {
        "contracts": [
            {
                "id": "Uvn6wi1Rh6AzcFeTTzNWvEpJhUNB4r0Ns_cD5uZLbsHx3FsR4INbww",
                "number": "00740730000110748617",
                "numberType": {
                    "id": "CCC",
                    "name": "CCC"
                },
                "status": {
                    "id": "ACTIVE",
                    "name": "CUENTA ACTIVA"
                },
                "alias": "Cuenta de Nómina",
                "singnedAuthorization": {
                    "id": "SIMPLE",
                    "name": "Cuenta Simple"
                },
                "product": {
                    "id": "CH",
                    "name": "Cuenta de Cheques"
                },
                "productType": "ACCOUNTS",
                "subProductType": {
                    "id": "0318",
                    "name": "CENTRALIZADORA DEBIT"
                },
                "detail": {
                    "level": "04",
                    "indicators": [
                        {
                            "id": "IS_PAYROLL_ACCOUNT",
                            "name": "Indica si la cuenta es de nómina",
                            "isActive": false
                        },
                        {
                            "id": "IS_PRINCIPAL_ACCOUNT",
                            "name": "Indica si la cuenta es eje",
                            "isActive": true
                        },
                        {
                            "id": "HAS_POCKETS",
                            "name": "Indica si la cuenta tiene pockets",
                            "isActive": false
                        }
                    ],
                    "specificAmounts": [
                        {
                            "id": "CURRENT_BALANCE",
                            "name": "Saldo actual",
                            "amounts": [
                                {
                                    "amount": 546.26,
                                    "currency": "MXN"
                                }
                            ]
                        },
                        {
                            "id": "PENDING_DEPOSIT_BALANCE",
                            "name": "Saldo buen cobro",
                            "amounts": [
                                {
                                    "amount": 0,
                                    "currency": "MXN"
                                }
                            ]
                        }
                    ]
                }
            },
            {
                "id": "Uvn6wi1Rh6BQBqkndWlsIwT8TSNtLqy1dIQIwnO-5H3TxoN9SPQ6pg",
                "number": "00740010000178671249",
                "numberType": {
                    "id": "CCC",
                    "name": "CCC"
                },
                "status": {
                    "id": "ACTIVE",
                    "name": "CUENTA ACTIVA"
                },
                "alias": "Cuenta Común",
                "singnedAuthorization": {
                    "id": "SIMPLE",
                    "name": "Cuenta Simple"
                },
                "product": {
                    "id": "CH",
                    "name": "Cuenta de Cheques"
                },
                "productType": "ACCOUNTS",
                "subProductType": {
                    "id": "0209",
                    "name": "MAESTRA PYME BANCOME"
                },
                "detail": {
                    "level": "04",
                    "indicators": [
                        {
                            "id": "IS_PAYROLL_ACCOUNT",
                            "name": "Indica si la cuenta es de nómina",
                            "isActive": false
                        },
                        {
                            "id": "IS_PRINCIPAL_ACCOUNT",
                            "name": "Indica si la cuenta es eje",
                            "isActive": false
                        },
                        {
                            "id": "HAS_POCKETS",
                            "name": "Indica si la cuenta tiene pockets",
                            "isActive": false
                        }
                    ],
                    "specificAmounts": [
                        {
                            "id": "CURRENT_BALANCE",
                            "name": "Saldo actual",
                            "amounts": [
                                {
                                    "amount": 86257.48,
                                    "currency": "MXN"
                                }
                            ]
                        },
                        {
                            "id": "PENDING_DEPOSIT_BALANCE",
                            "name": "Saldo buen cobro",
                            "amounts": [
                                {
                                    "amount": 0,
                                    "currency": "MXN"
                                }
                            ]
                        }
                    ]
                }
            },
            {
                "id": "cXsxekW15zLtg7npkHykkSslkkAw5wSpZmFvSltxUE8",
                "number": "4152313306609160",
                "numberType": {
                    "id": "PAN",
                    "name": "PAN"
                },
                "status": {
                    "id": "BLOCKED",
                    "name": "VIGENTE"
                },
                "relatedContracts": [
                    {
                        "id": "TGBWJTV0NTJJZJ5WNS81ERYEEH880VQTS316NRMFH2RCPCZC6J40BZZSEE8ABRA4MMG4AQ4HY5WZM",
                        "contractId": "00740680000465850053"
                    }
                ],
                "product": {
                    "id": "VD",
                    "name": "DEBITO BBVA"
                },
                "productType": "CARDS",
                "subProductType": {
                    "id": "DEBIT_CARD",
                    "name": "TARJETA DE DEBITO"
                },
                "detail": {
                    "images": [
                        {
                            "id": "FRONT_CARD",
                            "name": "Front face of the card",
                            "url": "https://i.postimg.cc/crM5TPF4/card-debit.png"
                        }
                    ],
                    "physicalSupport": {
                        "id": "NORMAL_PLASTIC",
                        "name": "CONVENCIONAL"
                    },
                    "expirationDate": "2024-06-30",
                    "activations": [
                        {
                            "id": "ON_OFF",
                            "name": "Indica si la tarjeta esta encendida o apagada",
                            "isActive": true
                        }
                    ],
                    "rewards": [
                        {
                            "id": "BANCOMER_POINTS",
                            "name": "Puntos Bancomer",
                            "nonMonetaryValue": 0
                        }
                    ],
                    "indicators": [
                        {
                            "id": "ASSOCIABLE_TO_NFC",
                            "name": "Indica si la tarjeta cuenta con NFC",
                            "isActive": false
                        },
                        {
                            "id": "ASSOCIABLE_TO_STICKER_CARDS",
                            "name": "Indica si la tarjeta cuenta con sticker asociado",
                            "isActive": false
                        },
                        {
                            "id": "ASSOCIABLE_TO_VIRTUAL_CARDS",
                            "name": "Indica si la tarjeta cuenta con una tarjeta virtual asociada",
                            "isActive": true
                        },
                        {
                            "id": "BLOCKABLE",
                            "name": "Indica si la tarjeta puede ser bloqueada",
                            "isActive": true
                        },
                        {
                            "id": "BLOCKABLE_NIP",
                            "name": "Indica si la tarjeta puede modificar el nip de forma online por una aplicación",
                            "isActive": false
                        },
                        {
                            "id": "SECURITY_DATA_READ",
                            "name": "Indica si los datos de seguridad de la tarjeta pueden ser leídos",
                            "isActive": false
                        },
                        {
                            "id": "DINAMIC_CVV",
                            "name": "Indica si el CVV2 es dinámico",
                            "isActive": true
                        }
                    ],
                    "agreementContract": "00740680000465850053",
                    "specificAmounts": [
                        {
                            "id": "CURRENT_BALANCE",
                            "name": "Saldo actual",
                            "amounts": [
                                {
                                    "amount": 1755,
                                    "currency": "MXN"
                                }
                            ]
                        },
                        {
                            "id": "PENDING_CHARGE_BALANCE",
                            "name": "Saldo en tránsito",
                            "amounts": [
                                {
                                    "amount": 0,
                                    "currency": "MXN"
                                }
                            ]
                        },
                        {
                            "id": "AVAILABLE_BALANCE",
                            "name": "Saldo disponible",
                            "amounts": [
                                {
                                    "amount": 0,
                                    "currency": "MXN"
                                }
                            ]
                        }
                    ]
                },
                "userAccessControl": [
                    {
                        "canOperate": false
                    }
                ]
            },
            {
                "id": "xU8bhwT-iwOtVWniFchNFTmGIkETHruXYZ_wKgwk1nw",
                "number": "4555130527601005",
                "numberType": {
                    "id": "PAN",
                    "name": "PAN"
                },
                "status": {
                    "id": "OPERATIVE",
                    "name": "VIGENTE"
                },
                "alias": "tarjeta 15jul",
                "relatedContracts": [
                    {
                        "id": "6W8VBZH8J8SAPV2JA5R7JBMFGKQFHFQ2HV0T5VZRGJE43V3M6QVG",
                        "contractId": "007404675590028789"
                    }
                ],
                "product": {
                    "id": "CV",
                    "name": "NEGOCIOS BBVA"
                },
                "productType": "CARDS",
                "subProductType": {
                    "id": "CREDIT_CARD",
                    "name": "TARJETA DE CREDITO"
                },
                "detail": {
                    "images": [
                        {
                            "id": "FRONT_CARD",
                            "name": "Front face of the card",
                            "url": "https://i.postimg.cc/JsrYFKF3/card-credit.png"
                        }
                    ],
                    "physicalSupport": {
                        "id": "NORMAL_PLASTIC",
                        "name": "CONVENCIONAL"
                    },
                    "expirationDate": "2019-09-30",
                    "activations": [
                        {
                            "id": "ON_OFF",
                            "name": "Indica si la tarjeta esta encendida o apagada",
                            "isActive": true
                        }
                    ],
                    "rewards": [
                        {
                            "id": "BANCOMER_POINTS",
                            "name": "Puntos Bancomer",
                            "nonMonetaryValue": 0
                        }
                    ],
                    "indicators": [
                        {
                            "id": "ASSOCIABLE_TO_NFC",
                            "name": "Indica si la tarjeta cuenta con NFC",
                            "isActive": false
                        },
                        {
                            "id": "ASSOCIABLE_TO_STICKER_CARDS",
                            "name": "Indica si la tarjeta cuenta con sticker asociado",
                            "isActive": false
                        },
                        {
                            "id": "ASSOCIABLE_TO_VIRTUAL_CARDS",
                            "name": "Indica si la tarjeta cuenta con una tarjeta virtual asociada",
                            "isActive": false
                        },
                        {
                            "id": "BLOCKABLE",
                            "name": "Indica si la tarjeta puede ser bloqueada",
                            "isActive": false
                        },
                        {
                            "id": "BLOCKABLE_NIP",
                            "name": "Indica si la tarjeta puede modificar el nip de forma online por una aplicación",
                            "isActive": false
                        },
                        {
                            "id": "SECURITY_DATA_READ",
                            "name": "Indica si los datos de seguridad de la tarjeta pueden ser leídos",
                            "isActive": false
                        },
                        {
                            "id": "DINAMIC_CVV",
                            "name": "Indica si el CVV2 es dinámico",
                            "isActive": false
                        }
                    ],
                    "agreementContract": "007404675590028789",
                    "specificAmounts": [
                        {
                            "id": "CURRENT_BALANCE",
                            "name": "Saldo actual",
                            "amounts": [
                                {
                                    "amount": 588.78,
                                    "currency": "MXN"
                                }
                            ]
                        },
                        {
                            "id": "PENDING_CHARGE_BALANCE",
                            "name": "Saldo en tránsito",
                            "amounts": [
                                {
                                    "amount": 0,
                                    "currency": "MXN"
                                }
                            ]
                        },
                        {
                            "id": "AVAILABLE_BALANCE",
                            "name": "Saldo disponible",
                            "amounts": [
                                {
                                    "amount": 249411.32,
                                    "currency": "MXN"
                                }
                            ]
                        }
                    ]
                }
            },
            {
                "id": "xU8bhwT-iwMPgRrK2qhTUOlhGIXQoXbUPXjocZcK3RM",
                "number": "4555130558908188",
                "numberType": {
                    "id": "PAN",
                    "name": "PAN"
                },
                "status": {
                    "id": "OPERATIVE",
                    "name": "VIGENTE"
                },
                "alias": "tarjeta 15jul 1",
                "relatedContracts": [
                    {
                        "id": "7ZHHAZZ2M3J4GA9JTY2XWNCFXSR3ZEM03B2JV1NMM3VRBMWSH2JG",
                        "contractId": "007459805590187941"
                    }
                ],
                "product": {
                    "id": "CV",
                    "name": "NEGOCIOS BBVA"
                },
                "productType": "CARDS",
                "subProductType": {
                    "id": "CREDIT_CARD",
                    "name": "TARJETA DE CREDITO"
                },
                "detail": {
                    "images": [
                        {
                            "id": "FRONT_CARD",
                            "name": "Front face of the card",
                            "url": "https://i.postimg.cc/JsrYFKF3/card-credit.png"
                        }
                    ],
                    "physicalSupport": {
                        "id": "NORMAL_PLASTIC",
                        "name": "CONVENCIONAL"
                    },
                    "expirationDate": "2019-09-30",
                    "activations": [
                        {
                            "id": "ON_OFF",
                            "name": "Indica si la tarjeta esta encendida o apagada",
                            "isActive": true
                        }
                    ],
                    "rewards": [
                        {
                            "id": "BANCOMER_POINTS",
                            "name": "Puntos Bancomer",
                            "nonMonetaryValue": 0
                        }
                    ],
                    "indicators": [
                        {
                            "id": "ASSOCIABLE_TO_NFC",
                            "name": "Indica si la tarjeta cuenta con NFC",
                            "isActive": false
                        },
                        {
                            "id": "ASSOCIABLE_TO_STICKER_CARDS",
                            "name": "Indica si la tarjeta cuenta con sticker asociado",
                            "isActive": false
                        },
                        {
                            "id": "ASSOCIABLE_TO_VIRTUAL_CARDS",
                            "name": "Indica si la tarjeta cuenta con una tarjeta virtual asociada",
                            "isActive": false
                        },
                        {
                            "id": "BLOCKABLE",
                            "name": "Indica si la tarjeta puede ser bloqueada",
                            "isActive": false
                        },
                        {
                            "id": "BLOCKABLE_NIP",
                            "name": "Indica si la tarjeta puede modificar el nip de forma online por una aplicación",
                            "isActive": false
                        },
                        {
                            "id": "SECURITY_DATA_READ",
                            "name": "Indica si los datos de seguridad de la tarjeta pueden ser leídos",
                            "isActive": false
                        },
                        {
                            "id": "DINAMIC_CVV",
                            "name": "Indica si el CVV2 es dinámico",
                            "isActive": false
                        }
                    ],
                    "agreementContract": "007459805590187941",
                    "specificAmounts": [
                        {
                            "id": "CURRENT_BALANCE",
                            "name": "Saldo actual",
                            "amounts": [
                                {
                                    "amount": 21696.48,
                                    "currency": "MXN"
                                }
                            ]
                        },
                        {
                            "id": "PENDING_CHARGE_BALANCE",
                            "name": "Saldo en tránsito",
                            "amounts": [
                                {
                                    "amount": 0,
                                    "currency": "MXN"
                                }
                            ]
                        },
                        {
                            "id": "AVAILABLE_BALANCE",
                            "name": "Saldo disponible",
                            "amounts": [
                                {
                                    "amount": 27803.62,
                                    "currency": "MXN"
                                }
                            ]
                        }
                    ]
                }
            },
            {
                "id": "Uvn6wi1Rh6AIxDkK9COyf3AA2lkDM8LWwEMYdizFBELbPZfMAloEiA",
                "number": "00740010001367903243",
                "numberType": {
                    "id": "CCC",
                    "name": "CCC"
                },
                "status": {
                    "id": "ACTIVE",
                    "name": "Inversión Activa"
                },
                "alias": "Pagaré PPO",
                "relatedContracts": [
                    {
                        "id": "X8X0XX4YYZ5TFW49K1VDW1YQR8",
                        "contractId": "0178632944"
                    }
                ],
                "product": {
                    "id": "IN",
                    "name": "Inversión"
                },
                "productType": "DEPOSITS",
                "detail": {
                    "specificAmounts": [
                        {
                            "id": "CURRENT_BALANCE",
                            "name": "Saldo actual",
                            "amounts": [
                                {
                                    "amount": 560000,
                                    "currency": "MXN"
                                }
                            ]
                        }
                    ]
                }
            },
            {
                "id": "Uvn6wi1Rh6BIH2zGYDIQkY3tTmR1vx0WNU7ydTeg_N8oA4D5PCxPPg",
                "number": "00740010001367921624",
                "numberType": {
                    "id": "CCC",
                    "name": "CCC"
                },
                "status": {
                    "id": "ACTIVE",
                    "name": "Inversión Activa"
                },
                "alias": "Pagaré 2000 PPF",
                "relatedContracts": [
                    {
                        "id": "YEPRWQKFADE76X8J94CC1N4MG8",
                        "contractId": "0178630976"
                    }
                ],
                "product": {
                    "id": "IN",
                    "name": "Inversión"
                },
                "productType": "DEPOSITS",
                "detail": {
                    "specificAmounts": [
                        {
                            "id": "CURRENT_BALANCE",
                            "name": "Saldo actual",
                            "amounts": [
                                {
                                    "amount": 178000,
                                    "currency": "MXN"
                                }
                            ]
                        }
                    ]
                }
            },
            {
                "id": "Uvn6wi1Rh6DNmf7S4hf6UGlCxdq5AzFrvhxU4euSe3_ZzMkCnpTVjw",
                "number": "00740010001368067627",
                "numberType": {
                    "id": "CCC",
                    "name": "CCC"
                },
                "status": {
                    "id": "ACTIVE",
                    "name": "Inversión Activa"
                },
                "alias": "Pagaré a largo plazo",
                "relatedContracts": [
                    {
                        "id": "V812X2942RYK390QQT2N7NS8FC",
                        "contractId": "0178744920"
                    }
                ],
                "product": {
                    "id": "IN",
                    "name": "Inversión"
                },
                "productType": "DEPOSITS",
                "detail": {
                    "specificAmounts": [
                        {
                            "id": "CURRENT_BALANCE",
                            "name": "Saldo actual",
                            "amounts": [
                                {
                                    "amount": 240000,
                                    "currency": "MXN"
                                }
                            ]
                        }
                    ]
                }
            },
            {
                "id": "Uvn6wi1Rh6AHebFf8FWQxJ1aQFEyVFUamJSvE6EtrsznjBflHgwiSg",
                "number": "00740010001369174508",
                "numberType": {
                    "id": "CCC",
                    "name": "CCC"
                },
                "status": {
                    "id": "ACTIVE",
                    "name": "Inversión Activa"
                },
                "alias": "Pagaré Activa",
                "relatedContracts": [
                    {
                        "id": "C3JAPBQVQWR1201MXZWN2CGWJ8",
                        "contractId": "0136564070"
                    }
                ],
                "product": {
                    "id": "IN",
                    "name": "Inversión"
                },
                "productType": "DEPOSITS",
                "detail": {
                    "specificAmounts": [
                        {
                            "id": "CURRENT_BALANCE",
                            "name": "Saldo actual",
                            "amounts": [
                                {
                                    "amount": 79000,
                                    "currency": "MXN"
                                }
                            ]
                        }
                    ]
                }
            },
            {
                "id": "Uvn6wi1Rh6CAHcUG5gAy_UwaWjndA9KnqNmIuv8TjEIzlXAGr93mlg",
                "number": "00740010001369246266",
                "numberType": {
                    "id": "CCC",
                    "name": "CCC"
                },
                "status": {
                    "id": "ACTIVE",
                    "name": "Inversión Activa"
                },
                "alias": "Pagaré Variable",
                "relatedContracts": [
                    {
                        "id": "D86WS87SJGFQRZ2Z4VMATWH2WR",
                        "contractId": "0136559239"
                    }
                ],
                "product": {
                    "id": "IN",
                    "name": "Inversión"
                },
                "productType": "DEPOSITS",
                "detail": {
                    "specificAmounts": [
                        {
                            "id": "CURRENT_BALANCE",
                            "name": "Saldo actual",
                            "amounts": [
                                {
                                    "amount": 225000,
                                    "currency": "MXN"
                                }
                            ]
                        }
                    ]
                }
            },
            {
                "id": "Uvn6wi1Rh6CAHcUG5gAy_UZHs-a5oL1X9tFlf21uWnxAYYaTHTWIqQ",
                "number": "00740010001369246274",
                "numberType": {
                    "id": "CCC",
                    "name": "CCC"
                },
                "status": {
                    "id": "ACTIVE",
                    "name": "Inversión Activa"
                },
                "alias": "Pagaré plan 4000",
                "relatedContracts": [
                    {
                        "id": "D86WS87SJGFQRZ2Z4VMATWH2WR",
                        "contractId": "0136559239"
                    }
                ],
                "product": {
                    "id": "IN",
                    "name": "Inversión"
                },
                "productType": "DEPOSITS",
                "detail": {
                    "specificAmounts": [
                        {
                            "id": "CURRENT_BALANCE",
                            "name": "Saldo actual",
                            "amounts": [
                                {
                                    "amount": 6000,
                                    "currency": "MXN"
                                }
                            ]
                        }
                    ]
                }
            },
            {
                "id": "Uvn6wi1Rh6CAHcUG5gAy_YQau5ulIplsmWDGwueeqLg_dFfSTsXZLA",
                "number": "00740010001369246290",
                "numberType": {
                    "id": "CCC",
                    "name": "CCC"
                },
                "status": {
                    "id": "ACTIVE",
                    "name": "Inversión Activa"
                },
                "alias": "Deposito",
                "relatedContracts": [
                    {
                        "id": "D86WS87SJGFQRZ2Z4VMATWH2WR",
                        "contractId": "0136559239"
                    }
                ],
                "product": {
                    "id": "IN",
                    "name": "Inversión"
                },
                "productType": "DEPOSITS",
                "detail": {
                    "specificAmounts": [
                        {
                            "id": "CURRENT_BALANCE",
                            "name": "Saldo actual",
                            "amounts": [
                                {
                                    "amount": 12500,
                                    "currency": "MXN"
                                }
                            ]
                        }
                    ]
                }
            },
            {
                "id": "SvmQuPpDEraAlT-wDylM51sSLeJjWfjBQpbxgn6prx2rD4WPsbVS0A",
                "number": "00740467000149694439",
                "numberType": {
                    "id": "CCC",
                    "name": "CCC"
                },
                "status": {
                    "id": "ACTIVE",
                    "name": "CUENTA ACTIVA"
                },
                "alias": "Cuenta Negocio",
                "singnedAuthorization": {
                    "id": "SIMPLE",
                    "name": "Cuenta Simple"
                },
                "product": {
                    "id": "CH",
                    "name": "Cuenta de Cheques"
                },
                "productType": "ACCOUNTS",
                "subProductType": {
                    "id": "0318",
                    "name": "CENTRALIZADORA DEBIT"
                },
                "detail": {
                    "level": "04",
                    "indicators": [
                        {
                            "id": "IS_PAYROLL_ACCOUNT",
                            "name": "Indica si la cuenta es de nómina",
                            "isActive": false
                        },
                        {
                            "id": "IS_PRINCIPAL_ACCOUNT",
                            "name": "Indica si la cuenta es eje",
                            "isActive": false
                        },
                        {
                            "id": "HAS_POCKETS",
                            "name": "Indica si la cuenta tiene pockets",
                            "isActive": false
                        }
                    ],
                    "specificAmounts": [
                        {
                            "id": "CURRENT_BALANCE",
                            "name": "Saldo actual",
                            "amounts": [
                                {
                                    "amount": 441486.92,
                                    "currency": "MXN"
                                }
                            ]
                        },
                        {
                            "id": "PENDING_DEPOSIT_BALANCE",
                            "name": "Saldo buen cobro",
                            "amounts": [
                                {
                                    "amount": 15271.86,
                                    "currency": "MXN"
                                }
                            ]
                        }
                    ]
                }
            },
            {
                "id": "Td-tykaA8AprnaX73JxrYeF63zRyhpvWeiRo1pFBp0iD2UUCSGdNvw",
                "number": "00740680000465850053",
                "numberType": {
                    "id": "CCC",
                    "name": "CCC"
                },
                "status": {
                    "id": "ACTIVE",
                    "name": "CUENTA ACTIVA"
                },
                "alias": "Cuenta de Pagos",
                "singnedAuthorization": {
                    "id": "SIMPLE",
                    "name": "Cuenta Simple"
                },
                "product": {
                    "id": "CH",
                    "name": "Cuenta de Cheques"
                },
                "productType": "ACCOUNTS",
                "subProductType": {
                    "id": "0102",
                    "name": "MEMBRESIA BP"
                },
                "detail": {
                    "level": "04",
                    "indicators": [
                        {
                            "id": "IS_PAYROLL_ACCOUNT",
                            "name": "Indica si la cuenta es de nómina",
                            "isActive": false
                        },
                        {
                            "id": "IS_PRINCIPAL_ACCOUNT",
                            "name": "Indica si la cuenta es eje",
                            "isActive": false
                        },
                        {
                            "id": "HAS_POCKETS",
                            "name": "Indica si la cuenta tiene pockets",
                            "isActive": false
                        }
                    ],
                    "specificAmounts": [
                        {
                            "id": "CURRENT_BALANCE",
                            "name": "Saldo actual",
                            "amounts": [
                                {
                                    "amount": 72855,
                                    "currency": "MXN"
                                }
                            ]
                        },
                        {
                            "id": "PENDING_DEPOSIT_BALANCE",
                            "name": "Saldo buen cobro",
                            "amounts": [
                                {
                                    "amount": 0,
                                    "currency": "MXN"
                                }
                            ]
                        }
                    ]
                }
            },
            {
                "id": "Td-tykaA8Ap4L9pOKFhyxYa6cnUUrXyad18x8hVFdFw7RQzIsed5kw",
                "number": "00740680001369254471",
                "numberType": {
                    "id": "CCC",
                    "name": "CCC"
                },
                "status": {
                    "id": "ACTIVE",
                    "name": "Inversión Activa"
                },
                "alias": "IN4471",
                "relatedContracts": [
                    {
                        "id": "FFK0ZNBKZSPKY5N7JSNZ2G33HC",
                        "contractId": "1100198628"
                    }
                ],
                "product": {
                    "id": "IN",
                    "name": "Inversión"
                },
                "productType": "DEPOSITS",
                "detail": {
                    "specificAmounts": [
                        {
                            "id": "CURRENT_BALANCE",
                            "name": "Saldo actual",
                            "amounts": [
                                {
                                    "amount": 89000,
                                    "currency": "MXN"
                                }
                            ]
                        }
                    ]
                }
            },
            {
                "id": "gtmRf9_JDKXqQqH8ToE1TCdsbkJl4xTpZQ1oey_2jE9ethQOOyI_xgaa",
                "number": "00743616000178583854",
                "numberType": {
                    "id": "CCC",
                    "name": "CCC"
                },
                "status": {
                    "id": "ACTIVE",
                    "name": "CUENTA ACTIVA"
                },
                "alias": "Cuenta de Cheques",
                "singnedAuthorization": {
                    "id": "SIMPLE",
                    "name": "Cuenta Simple"
                },
                "product": {
                    "id": "CH",
                    "name": "Cuenta de Cheques"
                },
                "productType": "ACCOUNTS",
                "subProductType": {
                    "id": "0211",
                    "name": "VERSATIL NEGOCIOS EM"
                },
                "detail": {
                    "level": "04",
                    "indicators": [
                        {
                            "id": "IS_PAYROLL_ACCOUNT",
                            "name": "Indica si la cuenta es de nómina",
                            "isActive": false
                        },
                        {
                            "id": "IS_PRINCIPAL_ACCOUNT",
                            "name": "Indica si la cuenta es eje",
                            "isActive": false
                        },
                        {
                            "id": "HAS_POCKETS",
                            "name": "Indica si la cuenta tiene pockets",
                            "isActive": false
                        }
                    ],
                    "specificAmounts": [
                        {
                            "id": "CURRENT_BALANCE",
                            "name": "Saldo actual",
                            "amounts": [
                                {
                                    "amount": 1002.38,
                                    "currency": "MXN"
                                }
                            ]
                        },
                        {
                            "id": "PENDING_DEPOSIT_BALANCE",
                            "name": "Saldo buen cobro",
                            "amounts": [
                                {
                                    "amount": 0,
                                    "currency": "MXN"
                                }
                            ]
                        }
                    ]
                }
            },
            {
                "id": "gtmRf9_JDKXqQqH8ToE1TCdsbkJl4xTpZQ1oey_2jE9ethQOOyI_xga",
                "number": "00743616000178583854",
                "numberType": {
                    "id": "CCC",
                    "name": "CCC"
                },
                "status": {
                    "id": "ACTIVE",
                    "name": "CUENTA ACTIVA"
                },
                "alias": "Cuenta de Cheques",
                "singnedAuthorization": {
                    "id": "SIMPLE",
                    "name": "Cuenta Simple"
                },
                "product": {
                    "id": "CH",
                    "name": "Cuenta de Cheques"
                },
                "productType": "ACCOUNTS",
                "subProductType": {
                    "id": "0211",
                    "name": "VERSATIL NEGOCIOS EM"
                },
                "detail": {
                    "level": "04",
                    "indicators": [
                        {
                            "id": "IS_PAYROLL_ACCOUNT",
                            "name": "Indica si la cuenta es de nómina",
                            "isActive": false
                        },
                        {
                            "id": "IS_PRINCIPAL_ACCOUNT",
                            "name": "Indica si la cuenta es eje",
                            "isActive": false
                        },
                        {
                            "id": "HAS_POCKETS",
                            "name": "Indica si la cuenta tiene pockets",
                            "isActive": false
                        }
                    ],
                    "specificAmounts": [
                        {
                            "id": "CURRENT_BALANCE",
                            "name": "Saldo actual",
                            "amounts": [
                                {
                                    "amount": 63336.38,
                                    "currency": "MXN"
                                }
                            ]
                        },
                        {
                            "id": "PENDING_DEPOSIT_BALANCE",
                            "name": "Saldo buen cobro",
                            "amounts": [
                                {
                                    "amount": 0,
                                    "currency": "MXN"
                                }
                            ]
                        }
                    ]
                }
            },
            {
                "id": "gtmRf9_JDKXqQqH8ToE1TCdsbkJl4xTpZQ1oey_2jE9ethQOOyI_xg",
                "number": "00743616000178583854",
                "numberType": {
                    "id": "CCC",
                    "name": "CCC"
                },
                "status": {
                    "id": "ACTIVE",
                    "name": "CUENTA ACTIVA"
                },
                "alias": "Cuenta de Cheques",
                "singnedAuthorization": {
                    "id": "SIMPLE",
                    "name": "Cuenta Simple"
                },
                "product": {
                    "id": "CH",
                    "name": "Cuenta de Cheques"
                },
                "productType": "ACCOUNTS",
                "subProductType": {
                    "id": "0211",
                    "name": "VERSATIL NEGOCIOS EM"
                },
                "detail": {
                    "level": "04",
                    "indicators": [
                        {
                            "id": "IS_PAYROLL_ACCOUNT",
                            "name": "Indica si la cuenta es de nómina",
                            "isActive": false
                        },
                        {
                            "id": "IS_PRINCIPAL_ACCOUNT",
                            "name": "Indica si la cuenta es eje",
                            "isActive": false
                        },
                        {
                            "id": "HAS_POCKETS",
                            "name": "Indica si la cuenta tiene pockets",
                            "isActive": false
                        }
                    ],
                    "specificAmounts": [
                        {
                            "id": "CURRENT_BALANCE",
                            "name": "Saldo actual",
                            "amounts": [
                                {
                                    "amount": 13188.38,
                                    "currency": "MXN"
                                }
                            ]
                        },
                        {
                            "id": "PENDING_DEPOSIT_BALANCE",
                            "name": "Saldo buen cobro",
                            "amounts": [
                                {
                                    "amount": 0,
                                    "currency": "MXN"
                                }
                            ]
                        }
                    ]
                }
            }
        ],
        "family": [
            {
                "id": "ACCOUNTS",
                "name": "Cuentas",
                "balances": [
                    {
                        "id": "TOTAL_CURRENT_AMOUNT",
                        "name": "Monto total actual",
                        "amountBalances": [
                            {
                                "amount": 1009141334.04,
                                "currency": "MXN"
                            }
                        ]
                    }
                ]
            }
        ]
    }
}


export const MOCK_ACOUNTS_FILTER = [
    {
        "currency": "MXN",
        "products": [
            {
                "alias": "Cuenta de Nómina",
                "balance": 546.26,
                "id": "Uvn6wi1Rh6AzcFeTTzNWvEpJhUNB4r0Ns_cD5uZLbsHx3FsR4INbww",
                "printedNumber": "00740730000110748617"
            },
            {
                "alias": "Cuenta Común",
                "balance": 86257.48,
                "id": "Uvn6wi1Rh6BQBqkndWlsIwT8TSNtLqy1dIQIwnO-5H3TxoN9SPQ6pg",
                "printedNumber": "00740010000178671249"
            },
            {
                "alias": "",
                "balance": 1755,
                "id": "cXsxekW15zLtg7npkHykkSslkkAw5wSpZmFvSltxUE8",
                "printedNumber": "4152313306609160"
            },
            {
                "alias": "tarjeta 15jul",
                "balance": 588.78,
                "id": "xU8bhwT-iwOtVWniFchNFTmGIkETHruXYZ_wKgwk1nw",
                "printedNumber": "4555130527601005"
            },
            {
                "alias": "tarjeta 15jul 1",
                "balance": 21696.48,
                "id": "xU8bhwT-iwMPgRrK2qhTUOlhGIXQoXbUPXjocZcK3RM",
                "printedNumber": "4555130558908188"
            },
            {
                "alias": "Pagaré PPO",
                "balance": 560000,
                "id": "Uvn6wi1Rh6AIxDkK9COyf3AA2lkDM8LWwEMYdizFBELbPZfMAloEiA",
                "printedNumber": "00740010001367903243"
            },
            {
                "alias": "Pagaré 2000 PPF",
                "balance": 178000,
                "id": "Uvn6wi1Rh6BIH2zGYDIQkY3tTmR1vx0WNU7ydTeg_N8oA4D5PCxPPg",
                "printedNumber": "00740010001367921624"
            },
            {
                "alias": "Pagaré a largo plazo",
                "balance": 240000,
                "id": "Uvn6wi1Rh6DNmf7S4hf6UGlCxdq5AzFrvhxU4euSe3_ZzMkCnpTVjw",
                "printedNumber": "00740010001368067627"
            },
            {
                "alias": "Pagaré Activa",
                "balance": 79000,
                "id": "Uvn6wi1Rh6AHebFf8FWQxJ1aQFEyVFUamJSvE6EtrsznjBflHgwiSg",
                "printedNumber": "00740010001369174508"
            },
            {
                "alias": "Pagaré Variable",
                "balance": 225000,
                "id": "Uvn6wi1Rh6CAHcUG5gAy_UwaWjndA9KnqNmIuv8TjEIzlXAGr93mlg",
                "printedNumber": "00740010001369246266"
            },
            {
                "alias": "Pagaré plan 4000",
                "balance": 6000,
                "id": "Uvn6wi1Rh6CAHcUG5gAy_UZHs-a5oL1X9tFlf21uWnxAYYaTHTWIqQ",
                "printedNumber": "00740010001369246274"
            },
            {
                "alias": "Deposito",
                "balance": 12500,
                "id": "Uvn6wi1Rh6CAHcUG5gAy_YQau5ulIplsmWDGwueeqLg_dFfSTsXZLA",
                "printedNumber": "00740010001369246290"
            },
            {
                "alias": "Cuenta Negocio",
                "balance": 441486.92,
                "id": "SvmQuPpDEraAlT-wDylM51sSLeJjWfjBQpbxgn6prx2rD4WPsbVS0A",
                "printedNumber": "00740467000149694439"
            },
            {
                "alias": "Cuenta de Pagos",
                "balance": 72855,
                "id": "Td-tykaA8AprnaX73JxrYeF63zRyhpvWeiRo1pFBp0iD2UUCSGdNvw",
                "printedNumber": "00740680000465850053"
            },
            {
                "alias": "IN4471",
                "balance": 89000,
                "id": "Td-tykaA8Ap4L9pOKFhyxYa6cnUUrXyad18x8hVFdFw7RQzIsed5kw",
                "printedNumber": "00740680001369254471"
            },
            {
                "alias": "Cuenta de Cheques",
                "balance": 1002.38,
                "id": "gtmRf9_JDKXqQqH8ToE1TCdsbkJl4xTpZQ1oey_2jE9ethQOOyI_xgaa",
                "printedNumber": "00743616000178583854"
            },
            {
                "alias": "Cuenta de Cheques",
                "balance": 63336.38,
                "id": "gtmRf9_JDKXqQqH8ToE1TCdsbkJl4xTpZQ1oey_2jE9ethQOOyI_xga",
                "printedNumber": "00743616000178583854"
            },
            {
                "alias": "Cuenta de Cheques",
                "balance": 13188.38,
                "id": "gtmRf9_JDKXqQqH8ToE1TCdsbkJl4xTpZQ1oey_2jE9ethQOOyI_xg",
                "printedNumber": "00743616000178583854"
            }
        ]
    }
]

export const MOCK_ACOUNTS_NO_ALIAS = [
    {
        "currency": "MXN",
        "products": [
            {
                "alias": "Cuenta de Nómina",
                "balance": 546.26,
                "id": "Uvn6wi1Rh6AzcFeTTzNWvEpJhUNB4r0Ns_cD5uZLbsHx3FsR4INbww",
                "printedNumber": "00740730000110748617"
            },
            {
                "alias": "Cuenta Común",
                "balance": 86257.48,
                "id": "Uvn6wi1Rh6BQBqkndWlsIwT8TSNtLqy1dIQIwnO-5H3TxoN9SPQ6pg",
                "printedNumber": "00740010000178671249"
            },
            {
                "balance": 1755,
                "id": "cXsxekW15zLtg7npkHykkSslkkAw5wSpZmFvSltxUE8",
                "printedNumber": "4152313306609160"
            },
            {
                "alias": "tarjeta 15jul",
                "balance": 588.78,
                "id": "xU8bhwT-iwOtVWniFchNFTmGIkETHruXYZ_wKgwk1nw",
                "printedNumber": "4555130527601005"
            },
            {
                "alias": "tarjeta 15jul 1",
                "balance": 21696.48,
                "id": "xU8bhwT-iwMPgRrK2qhTUOlhGIXQoXbUPXjocZcK3RM",
                "printedNumber": "4555130558908188"
            },
            {
                "alias": "Pagaré PPO",
                "balance": 560000,
                "id": "Uvn6wi1Rh6AIxDkK9COyf3AA2lkDM8LWwEMYdizFBELbPZfMAloEiA",
                "printedNumber": "00740010001367903243"
            },
            {
                "alias": "Pagaré 2000 PPF",
                "balance": 178000,
                "id": "Uvn6wi1Rh6BIH2zGYDIQkY3tTmR1vx0WNU7ydTeg_N8oA4D5PCxPPg",
                "printedNumber": "00740010001367921624"
            },
            {
                "alias": "Pagaré a largo plazo",
                "balance": 240000,
                "id": "Uvn6wi1Rh6DNmf7S4hf6UGlCxdq5AzFrvhxU4euSe3_ZzMkCnpTVjw",
                "printedNumber": "00740010001368067627"
            },
            {
                "alias": "Pagaré Activa",
                "balance": 79000,
                "id": "Uvn6wi1Rh6AHebFf8FWQxJ1aQFEyVFUamJSvE6EtrsznjBflHgwiSg",
                "printedNumber": "00740010001369174508"
            },
            {
                "alias": "Pagaré Variable",
                "balance": 225000,
                "id": "Uvn6wi1Rh6CAHcUG5gAy_UwaWjndA9KnqNmIuv8TjEIzlXAGr93mlg",
                "printedNumber": "00740010001369246266"
            },
            {
                "alias": "Pagaré plan 4000",
                "balance": 6000,
                "id": "Uvn6wi1Rh6CAHcUG5gAy_UZHs-a5oL1X9tFlf21uWnxAYYaTHTWIqQ",
                "printedNumber": "00740010001369246274"
            },
            {
                "alias": "Deposito",
                "balance": 12500,
                "id": "Uvn6wi1Rh6CAHcUG5gAy_YQau5ulIplsmWDGwueeqLg_dFfSTsXZLA",
                "printedNumber": "00740010001369246290"
            },
            {
                "alias": "Cuenta Negocio",
                "balance": 441486.92,
                "id": "SvmQuPpDEraAlT-wDylM51sSLeJjWfjBQpbxgn6prx2rD4WPsbVS0A",
                "printedNumber": "00740467000149694439"
            },
            {
                "alias": "Cuenta de Pagos",
                "balance": 72855,
                "id": "Td-tykaA8AprnaX73JxrYeF63zRyhpvWeiRo1pFBp0iD2UUCSGdNvw",
                "printedNumber": "00740680000465850053"
            },
            {
                "alias": "IN4471",
                "balance": 89000,
                "id": "Td-tykaA8Ap4L9pOKFhyxYa6cnUUrXyad18x8hVFdFw7RQzIsed5kw",
                "printedNumber": "00740680001369254471"
            },
            {
                "alias": "Cuenta de Cheques",
                "balance": 1002.38,
                "id": "gtmRf9_JDKXqQqH8ToE1TCdsbkJl4xTpZQ1oey_2jE9ethQOOyI_xgaa",
                "printedNumber": "00743616000178583854"
            },
            {
                "alias": "Cuenta de Cheques",
                "balance": 63336.38,
                "id": "gtmRf9_JDKXqQqH8ToE1TCdsbkJl4xTpZQ1oey_2jE9ethQOOyI_xga",
                "printedNumber": "00743616000178583854"
            },
            {
                "alias": "Cuenta de Cheques",
                "balance": 13188.38,
                "id": "gtmRf9_JDKXqQqH8ToE1TCdsbkJl4xTpZQ1oey_2jE9ethQOOyI_xg",
                "printedNumber": "00743616000178583854"
            }
        ]
    }
]