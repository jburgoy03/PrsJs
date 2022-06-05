
const parseUrl = (url) => {
    // url example: http://localhost:5238/user-detail.html?id=1
    let urlParts = url.split("?");
    let parms = urlParts[1];
    parms = parms.split("&");
    let json = {};
    for(let p of parms) {
        let kv = p.split("=");
        json[kv[0]] = kv[1];
    }
    console.log(json);
    return json;

}