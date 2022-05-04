import http from "k6/http"

export let options = {
    stages: [
        {target: 10, duration: '1s'},
        {target: 20, duration: '1s'},
        {target: 30, duration: '1s'},
    ]
}


export default function (){
    http.get("http://localhost:8080/")
}