import{readdirSync,readFileSync,mkdirSync,writeFileSync}from'node:fs'
const I=process.env.MAKEFUN_INPUT_DIR||'/input',O=process.env.MAKEFUN_OUTPUT_DIR||'/output',S='01146:;?0000000099999995999599909990000000000000044000000000000058000000000000004414'
for(const d of readdirSync(I).sort()){
const u=I+'/'+d,w=O+'/'+d,P=readFileSync(u+'/program.bin'),N=readFileSync(u+'/input.bin'),n=P.length,D=new Int32Array(256),C=new Int32Array(64),M=new Int32Array(256),o=new Uint8Array(65536)
let s=0,c=0,p=0,q=0,t=0,l=0,g=0
const B=f=>()=>{const r=f(D[s-2],D[s-1]);if(r===null)return 4;s-=2;D[s++]=r}
const J=()=>P.readInt16LE(q-2)
const H=[()=>0,()=>{D[s++]=P.readInt8(q-1)},()=>{D[s++]=P.readInt32LE(q-4)},()=>{s--},()=>{D[s]=D[s-1];s++},()=>{[D[s-1],D[s-2]]=[D[s-2],D[s-1]]},()=>{D[s]=D[s-2];s++},()=>{[D[s-3],D[s-2],D[s-1]]=[D[s-2],D[s-1],D[s-3]]},,,,,,,,,B((a,b)=>a+b|0),B((a,b)=>a-b|0),B((a,b)=>Math.imul(a,b)),B((a,b)=>b?a==-2147483648&&b==-1?a:a/b|0:null),B((a,b)=>b?b==-1?0:a%b|0:null),B((a,b)=>b?(a>>>0)/(b>>>0)|0:null),B((a,b)=>b?(a>>>0)%(b>>>0)|0:null),()=>{D[s-1]=-D[s-1]|0},B((a,b)=>a&b),B((a,b)=>a|b),B((a,b)=>a^b),()=>{D[s-1]=~D[s-1]},B((a,b)=>a<<(b&31)),B((a,b)=>a>>(b&31)),B((a,b)=>a>>>(b&31)|0),,B((a,b)=>a==b?1:0),B((a,b)=>a<b?1:0),B((a,b)=>(a>>>0)<(b>>>0)?1:0),,,,,,,,,,,,,,()=>{p=q+J()},()=>{if(D[--s]==0)p=q+J()},()=>{if(D[--s]!=0)p=q+J()},()=>{if(c==64)return 7;C[c++]=q;p=P[q-2]|P[q-1]<<8},()=>{if(c==0)return 8;p=C[--c]},,,,,,,,,,,,()=>{const a=D[s-1];if(a<0||a>255)return 6;D[s-1]=M[a]},()=>{const a=D[s-1];if(a<0||a>255)return 6;M[a]=D[s-2];s-=2},,,,,,,,,,,,,,,()=>{const y=Buffer.from(''+D[s-1]);if(l+y.length>65536)return 11;s--;o.set(y,l);l+=y.length},()=>{if(l>65535)return 11;o[l++]=D[--s]&255},()=>{D[s++]=g<N.length?N[g++]:-1},()=>D[--s]&255]
let e=-1
while(e<0){
if(t==1e6){e=10;break}
if(p<0||p>=n){e=9;break}
const k=P[p],h=H[k]
if(!h){e=5;break}
const m=[0,1,4][k]||(k>47&&k<52?2:0)
if(p+m>=n){e=9;break}
t++
const v=S.charCodeAt(k)&15,a=v>>2,b=v&3
if(s<a||s-a+b>256){e=s<a?2:3;break}
p=q=p+1+m
const r=h()
e=r??e
}
mkdirSync(w,{recursive:true})
writeFileSync(w+'/stdout.bin',o.subarray(0,l))
writeFileSync(w+'/exit.txt',e+'\n')
}
