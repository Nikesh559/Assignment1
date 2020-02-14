let search=[];
let text="";
let data;
$.getJSON("https://www.omdbapi.com/?s=harry+potter&apikey=e0620bd4",function(data){
    console.log(data);
    search = [...data.Search];
    for(let i=0;i<search.length;i++){
        text+="<li>"+`<center><img src=${search[i].Poster}></center>`+ `<p><b>Title</b> : ${search[i].Title}</p>`+`<button onclick="detail(${i})">Show detail</button>`+`<p class="show"></p>`+"</li>";
    }
    document.getElementById("list").innerHTML=text;
});

function detail(val) {
    let str = document.getElementsByClassName("show");
    let text;
    text="<p><b>Year : </b>"+ `${search[val].Year}`+ "</p>"+"<p><b>IMDBID : </b>"+ `${search[val].imdbID}`+ "</p>"+"<p><b>Link : </b>"+ `<a href=${search[val].Poster}>${search[val].Poster}</a>`+ "</p>"+"<p><b>Type : </b>"+ `${search[val].Type}`+ "</p>";
    str[val].innerHTML=text;
}
function upload(){
    let x = document.getElementsByTagName("input");
    let len = search.length;
    search.push({
        Poster:""+x[1].value,
        Title:""+x[0].value,
        Type:""+x[4].value,
        imdbID:""+x[3].value,
        Year:""+x[2].value
    });
    console.log();
    text+="<li>"+`<center><img src=${x[1].value}></center>`+ `<p><b>Title</b> : ${x[0].value}</p>`+`<button onclick="detail(${search.length-1})">Show detail</button>`+`<p class="show"></p>`+"</li>";
    document.getElementById("list").innerHTML=text;
}
let def="";
    new Vue({
        el:"#add",
        data:{
            'message':'',
             'link':'',
            'Year':'',
            'imdb':'',
            'type':'',
            source:def
        },
        methods:{
            GetImage(e){
                console.log("Hello");
                let s =document.getElementById("demo");
                def=e.target.value;
                s.src=def;
                source=def;
                console.log(s.src);
            }
        }
    });
