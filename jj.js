// let a=12;

// function abcd()
// {
//     a = 13;
//     console.log(a);
// }

// function defg()
// {
//     let a=14;
//     abcd();
// }

// defg();

// function abcd()
// {
//     let c=0;
//     return function()
//     {
//         c++;
//         console.log(c);
//     }
// }


// let fnc=abcd();
// fnc();

// console.log(fnc.a);

// let fnc2=abcd();
// fnc2();

// console.log(fnc2 + "hello");

// function createCounter() {
//     let count = 0; // private variable
//     let count1=0;
//     return {
//         increment() {
            
//             count1++;
//             count++;
//             console.log(count);
//         },
//         decrement() {
//             count--;
//             console.log(count);
//         },
//         getCount() {
//             return count;
//         },
//         getCount1() {
//             return count1;
//         }
//     };
// }


// const counter = createCounter();
// counter.increment(); // 1
// counter.increment(); // 2
// console.log(counter.getCount()); // 2
// console.log(counter.getCount1()); //2
// console.log(counter.count); // undefined (private)

function createToaster(config)
{
    return function(str)
    {
        let div=document.createElement("div");
        div.textContent=str;
        div.className = 
        "inline-block  px-6 py-3 rounded shadow-lg pointer-events-none transition-opacity duration-300"
        
        if(config.positionX!== "left"|| config.positionY!=="top")
            {
                document.querySelector(".parent").classList.add("fixed");
                document.querySelector(".parent").className += ` ${config.positionX === "left" ? "left-5" : "right-5"} ${config.positionY === "top" ? "top-5" : "bottom-5"}`;
                }
        document.querySelector(".parent").appendChild(div);
        setTimeout(()=> {
            document.querySelector(".parent").removeChild(div);

        }, config.duration * 1000);
    };
}

let Toaster=createToaster({
    positionX:"left",
    positionY:"bottom",
    theme: "dark",
    duration: 3,
});
Toaster("Downloaded");
setTimeout(() => {
    Toaster("Downloaded already");
},2000)

