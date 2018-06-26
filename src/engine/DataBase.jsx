import React, {PureComponent} from 'react';

export default class DataBase {
    static getData(request,callbackFunction, catchFunction){
        fetch(request)
            .then((response) =>
                response.json())
            .then((result) => {callbackFunction(result)}
            )
            .catch(() => {
                catchFunction();
            });
    }
}