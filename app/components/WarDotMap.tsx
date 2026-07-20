"use client";

import {useEffect,useRef} from "react";

type Pair=[number,number];
type Level="red"|"orange"|"yellow"|"gray";
type Region={level:Exclude<Level,"gray">;boxes:[number,number,number,number][]};

const continents:Pair[][]=[
 [[-168,71],[-150,70],[-138,60],[-125,55],[-123,46],[-113,33],[-103,25],[-90,19],[-82,24],[-80,31],[-67,45],[-54,50],[-60,59],[-74,63],[-84,72],[-110,74],[-140,72]],
 [[-82,13],[-72,11],[-60,8],[-51,2],[-48,-12],[-38,-23],[-52,-35],[-61,-52],[-70,-55],[-75,-40],[-80,-20],[-82,0]],
 [[-73,60],[-52,59],[-20,69],[-22,81],[-45,84],[-65,77]],
 [[-11,36],[-9,44],[-2,52],[8,58],[20,71],[38,70],[42,58],[31,47],[25,39],[14,35],[3,36]],
 [[-18,36],[2,37],[16,33],[32,31],[43,12],[51,3],[43,-12],[35,-25],[25,-35],[12,-35],[2,-27],[-8,-8],[-16,12]],
 [[35,55],[48,69],[75,75],[105,72],[140,61],[170,67],[178,54],[157,43],[145,34],[128,27],[121,17],[106,8],[92,9],[80,24],[69,27],[58,40],[45,42]],
 [[42,31],[57,26],[56,16],[51,12],[45,16],[36,29]],[[68,25],[79,30],[89,23],[82,8],[75,7]],
 [[96,20],[108,22],[120,17],[128,8],[119,0],[105,2]],[[112,-11],[130,-12],[145,-18],[154,-28],[146,-39],[130,-43],[115,-34]],
 [[130,33],[142,45],[146,43],[139,31]],[[166,-34],[178,-38],[174,-47],[166,-46]]
];

const regions:Region[]=[
 {level:"red",boxes:[[-125,-66,24,50],[44,64,25,40],[34.1,35.9,29,33.7],[35,36.8,33,34.8],[42,54,12,19]]},
 {level:"orange",boxes:[[35,39.5,29,33.6],[38,49,29,37.6],[34,56,16,32],[46,49,28,30.3],[50,57,22,27.7]]},
 {level:"yellow",boxes:[[52,60,16,27],[35.5,42.5,32,37.6],[26,45,36,42.5],[25,36,22,31.6],[60,77,23,37]]}
];
const palette={red:"#d73d2f",orange:"#ed7b2d",yellow:"#e5bd32",gray:"#8b8982"};

function inside(lon:number,lat:number,poly:Pair[]){let hit=false;for(let i=0,j=poly.length-1;i<poly.length;j=i++){const [xi,yi]=poly[i],[xj,yj]=poly[j];if((yi>lat)!==(yj>lat)&&lon<(xj-xi)*(lat-yi)/(yj-yi)+xi)hit=!hit}return hit}
function land(lon:number,lat:number){return continents.some(p=>inside(lon,lat,p))}
function level(lon:number,lat:number):Level{for(const group of regions)for(const [x1,x2,y1,y2] of group.boxes)if(lon>=x1&&lon<=x2&&lat>=y1&&lat<=y2)return group.level;return "gray"}

export default function WarDotMap(){
 const ref=useRef<HTMLCanvasElement>(null);
 useEffect(()=>{const canvas=ref.current,ctx=canvas?.getContext("2d");if(!canvas||!ctx)return;let observer:ResizeObserver;
  const draw=()=>{const rect=canvas.getBoundingClientRect(),dpr=Math.min(devicePixelRatio||1,2);canvas.width=Math.round(rect.width*dpr);canvas.height=Math.round(rect.height*dpr);ctx.setTransform(dpr,0,0,dpr,0,0);const w=rect.width,h=rect.height;ctx.clearRect(0,0,w,h);
   for(let lat=-57;lat<=78;lat+=2.25)for(let lon=-178;lon<=178;lon+=2.25){if(!land(lon,lat))continue;const x=(lon+180)/360*w,y=(82-lat)/144*h;const l=level(lon,lat);ctx.globalAlpha=l==="gray"?.52:.98;ctx.beginPath();ctx.arc(x,y,l==="gray"?1.35:2.1,0,Math.PI*2);ctx.fillStyle=palette[l];ctx.fill()}
   ctx.globalAlpha=1;};
  observer=new ResizeObserver(draw);observer.observe(canvas);draw();return()=>observer.disconnect();
 },[]);
 return <canvas ref={ref} className="war-dot-map" aria-label="Dotted world map showing editorial conflict exposure levels"/>;
}
