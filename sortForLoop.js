var arr1=[5,8,3,6,2,1,0];

var tmp;
for(var i=0;i<arr1.length;i++)
{
    for(var j=i+1;j<arr1.length;j++)
    {
        if(arr1[i] > arr1[j])
        {
            tmp=arr1[i];
            arr1[i]=arr1[j];
            arr1[j]=tmp;
        }
    }
}
for(var i=0;i<arr1.length;i++)
{
    console.log(arr1[i])
}

//Using MAP
var map = new Map();
map.set('5-1', "Uzef");
map.set('1-1', "Mahir");
map.set('7-1', "Fiza");
map.set('4-1', "Renu");
map.set('1-1', "Pandit");
var mapAsc = new Map([...map.entries()].sort());

console.log(mapAsc)


//ForEach
var arr1=[5,8,7,2,4,1,0];
arr1.sort( function( arr1, b ) { return arr1 - b });
arr1.forEach( function( value ) { console.log( value ) }); 