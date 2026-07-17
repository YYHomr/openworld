"use client";

import { useEffect, useRef } from "react";

type Point = { lat:number; lon:number; land:boolean };
type Pair = [number,number];

const continents: Pair[][] = [
  [[-168,71],[-150,70],[-138,60],[-125,55],[-123,46],[-113,33],[-103,25],[-90,19],[-82,24],[-80,31],[-67,45],[-54,50],[-60,59],[-74,63],[-84,72],[-110,74],[-140,72]],
  [[-82,13],[-72,11],[-60,8],[-51,2],[-48,-12],[-38,-23],[-52,-35],[-61,-52],[-70,-55],[-75,-40],[-80,-20],[-82,0]],
  [[-73,60],[-52,59],[-20,69],[-22,81],[-45,84],[-65,77]],
  [[-11,36],[-9,44],[-2,52],[8,58],[20,71],[38,70],[42,58],[31,47],[25,39],[14,35],[3,36]],
  [[-18,36],[2,37],[16,33],[32,31],[43,12],[51,3],[43,-12],[35,-25],[25,-35],[12,-35],[2,-27],[-8,-8],[-16,12]],
  [[35,55],[48,69],[75,75],[105,72],[140,61],[170,67],[178,54],[157,43],[145,34],[128,27],[121,17],[106,8],[92,9],[80,24],[69,27],[58,40],[45,42]],
  [[42,31],[57,26],[56,16],[51,12],[45,16],[36,29]],
  [[68,25],[79,30],[89,23],[82,8],[75,7]],
  [[96,20],[108,22],[120,17],[128,8],[119,0],[105,2]],
  [[112,-11],[130,-12],[145,-18],[154,-28],[146,-39],[130,-43],[115,-34]],
  [[130,33],[142,45],[146,43],[139,31]],
  [[166,-34],[178,-38],[174,-47],[166,-46]]
];

function inside(lon:number,lat:number,poly:Pair[]){let hit=false;for(let i=0,j=poly.length-1;i<poly.length;j=i++){const [xi,yi]=poly[i], [xj,yj]=poly[j];const cross=(yi>lat)!==(yj>lat)&&lon<(xj-xi)*(lat-yi)/(yj-yi)+xi;if(cross)hit=!hit}return hit}
function isLand(lon:number,lat:number){return continents.some(poly=>inside(lon,lat,poly))}

const points:Point[]=[];
for(let lat=-84;lat<=84;lat+=2.05){const step=2.05/Math.max(.28,Math.cos(lat*Math.PI/180));for(let lon=-180;lon<180;lon+=step)points.push({lat,lon,land:isLand(lon,lat)})}

export default function DotGlobe(){
  const ref=useRef<HTMLCanvasElement>(null);
  useEffect(()=>{
    const canvas=ref.current;if(!canvas)return;const ctx=canvas.getContext("2d");if(!ctx)return;
    let frame=0,observer:ResizeObserver,angle=-18,last=0,running=true;
    const resize=()=>{const box=canvas.getBoundingClientRect(),dpr=Math.min(devicePixelRatio||1,2);canvas.width=Math.round(box.width*dpr);canvas.height=Math.round(box.height*dpr);ctx.setTransform(dpr,0,0,dpr,0,0)};
    const draw=(time=0)=>{if(!running)return;const w=canvas.clientWidth,h=canvas.clientHeight,cx=w/2,cy=h/2,r=Math.min(w,h)*.475;ctx.clearRect(0,0,w,h);
      ctx.beginPath();ctx.arc(cx,cy,r,0,Math.PI*2);ctx.fillStyle="#e9e2d1";ctx.fill();
      const spin=angle*Math.PI/180,tilt=-9*Math.PI/180;
      for(const p of points){const lat=p.lat*Math.PI/180,lon=p.lon*Math.PI/180+spin;let x=Math.cos(lat)*Math.sin(lon),y=Math.sin(lat),z=Math.cos(lat)*Math.cos(lon);const yy=y*Math.cos(tilt)-z*Math.sin(tilt),zz=y*Math.sin(tilt)+z*Math.cos(tilt);y=yy;z=zz;if(z<=.015)continue;const edge=Math.pow(z,.42),px=cx+x*r,py=cy-y*r,size=(p.land?1.35:1.12)*(.58+.62*z);ctx.globalAlpha=.32+.68*edge;ctx.beginPath();ctx.arc(px,py,p.land?size+0.58:size,0,Math.PI*2);ctx.fillStyle="#11110f";ctx.fill();if(p.land){ctx.beginPath();ctx.arc(px,py,size*.72,0,Math.PI*2);ctx.fillStyle="#fffdf6";ctx.fill()}}
      ctx.globalAlpha=1;const shade=ctx.createRadialGradient(cx-r*.35,cy-r*.38,r*.08,cx,cy,r*1.05);shade.addColorStop(0,"rgba(255,255,255,.16)");shade.addColorStop(.67,"rgba(255,255,255,0)");shade.addColorStop(1,"rgba(0,0,0,.24)");ctx.beginPath();ctx.arc(cx,cy,r,0,Math.PI*2);ctx.fillStyle=shade;ctx.fill();
      if(!matchMedia("(prefers-reduced-motion: reduce)").matches&&time-last>28){angle+=.045;last=time}frame=requestAnimationFrame(draw)};
    observer=new ResizeObserver(resize);observer.observe(canvas);resize();frame=requestAnimationFrame(draw);return()=>{running=false;cancelAnimationFrame(frame);observer.disconnect()}
  },[]);
  return <canvas ref={ref} className="dot-globe-canvas" aria-label="Rotating dotted globe with black ocean dots and white continent dots"/>;
}
