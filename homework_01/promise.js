(function () {
    async function getData() {
        return fetch("https://randomuser.me/api/");
    }
    async function convertData() {

        let data = await getData();
        return data.json();
    }
    async function map() {
        let data = await convertData();
        return data.results.map(function (element) {
            return { 'name': element.name, 'location': element.location };
        });
    }

    document.getElementById("btnP").onclick = function (e) {
        getData()
            .then(data => data.json())
            .then(data =>
                data.results.map(function (element) {
                    return { 'name': element.name, 'location': element.location };
                })
            )
            .then(data => console.log(data))
            .catch(err => console.log(err));
    };

    document.getElementById("btnA").onclick = async function () {
        let data = await map();
        console.log(data);
    }

    document.getElementById("btnO").onclick=function(){
        const {from}=rxjs;
        const{map,flatMap,mergeAll}=rxjs.operators;
       const data$= from(fetch("https://randomuser.me/api/"));
       data$.pipe(
        flatMap(el=> el.json()),
        map(ele=>ele.results.map(element=>({name:element.name,  location:element.location})))
       ).subscribe(vl=>console.log(vl));
        
    }


})();