import axios from 'axios';
import flatstore from 'flatstore';

flatstore.set('loading', false);


export function get(url, datastate, options={}){
    flatstore.set('loading', true);
    try{
        axios.get(url, options).then(function(response){flatstore.set(datastate, response.data); flatstore.set('loading', false);});
    }catch(err){
        console.log(err);
    }
}

export function post(url, postdata, datastate, options={}){
    flatstore.set('loading', true);
    try{
        axios.get(url, postdata, options).then(function(response){flatstore.set(datastate, response.data);flatstore.set('loading', false);});
    }catch(err){
        console.log(err);
    }
}
