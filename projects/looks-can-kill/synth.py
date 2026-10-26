# 120 BPM, 20초, F단조. 화면과 같은 시각표(초)를 쓴다.
import numpy as np, wave
SR=48000; DUR=20.0; N=int(SR*DUR); B=0.5
L=np.zeros(N); R=np.zeros(N)
rng=np.random.default_rng(7)
def put(sig,t,g=1.0,pan=0.0):
    i=int(t*SR); n=min(len(sig),N-i)
    if n<=0: return
    L[i:i+n]+=sig[:n]*g*(1-max(pan,0)); R[i:i+n]+=sig[:n]*g*(1+min(pan,0))
def env(n,a=0.002,d=0.2):
    t=np.arange(n)/SR; return np.minimum(t/a,1)*np.exp(-t/d)
def lp(x,k):  # 1극 저역통과
    y=np.zeros_like(x); s=0
    for i in range(len(x)): s+=k*(x[i]-s); y[i]=s
    return y
def kick(g=1):
    n=int(.45*SR); t=np.arange(n)/SR; f=45+120*np.exp(-t*30); ph=2*np.pi*np.cumsum(f)/SR
    return np.tanh(2*np.sin(ph)*np.exp(-t*6))*g
def snare():
    n=int(.3*SR); t=np.arange(n)/SR; nz=rng.standard_normal(n)
    return (0.6*nz*np.exp(-t*18)+0.4*np.sin(2*np.pi*190*t)*np.exp(-t*25))
def hat(o=False):
    n=int((.12 if o else .04)*SR); nz=rng.standard_normal(n); nz=nz-lp(nz,.3)
    return nz*env(n,.0005,.05 if o else .012)
def clack():  # 슬레이트
    n=int(.12*SR); t=np.arange(n)/SR; nz=rng.standard_normal(n); nz=nz-lp(nz,.15)
    return (nz*np.exp(-t*60)+np.sin(2*np.pi*1800*t)*np.exp(-t*80))*1.2
def tick():
    n=int(.02*SR); t=np.arange(n)/SR; return np.sin(2*np.pi*3200*t)*np.exp(-t*300)
def zap(f0=3200,f1=220,d=.18):  # 시선 광선
    n=int(d*SR); t=np.arange(n)/SR; f=f1+(f0-f1)*np.exp(-t*25); ph=2*np.pi*np.cumsum(f)/SR
    nz=rng.standard_normal(n); return (0.7*np.sign(np.sin(ph))*0.5+0.5*np.sin(ph)+0.15*nz)*env(n,.001,d/3)
def swish(d=.35,up=False):
    n=int(d*SR); nz=rng.standard_normal(n); t=np.arange(n)/SR
    k=np.linspace(.02,.4,n) if up else np.linspace(.4,.02,n); y=np.zeros(n); s=0
    for i in range(n): s+=k[i]*(nz[i]-s); y[i]=s
    return y*np.sin(np.pi*t/d)**2*1.5
def sub(f,d,g=1):
    n=int(d*SR); t=np.arange(n)/SR; return np.tanh(1.5*np.sin(2*np.pi*f*t))*np.minimum(t/.005,1)*np.exp(-t/(d*.8))*g
def stab(fs,d=.25):
    n=int(d*SR); t=np.arange(n)/SR; y=sum(np.sign(np.sin(2*np.pi*f*t))*0.5+ ((2*(t*f*1.003%1)-1)*0.5) for f in fs)
    return lp(y,.12)*env(n,.003,d/2.5)/len(fs)
def impact(d=1.2):
    n=int(d*SR); t=np.arange(n)/SR; f=60*np.exp(-t*2)+28; ph=2*np.pi*np.cumsum(f)/SR
    nz=lp(rng.standard_normal(n),.05); return np.tanh(2.5*np.sin(ph))*np.exp(-t*3)+nz*np.exp(-t*6)*2
def shimmer(d=.4):
    n=int(d*SR); t=np.arange(n)/SR; return sum(np.sin(2*np.pi*f*t) for f in [2093,2637,3136,4186])*np.exp(-t*7)*np.minimum(t/.01,1)/4
F1,Db,Eb,C1=43.65,34.65,38.89,32.70
Fm=[349.2,415.3,523.3]; Dbm=[277.2,349.2,415.3]
# S0 0–1
pad_n=int(1.0*SR); tt=np.arange(pad_n)/SR
put(sum(np.sin(2*np.pi*f*tt) for f in [87.3,130.8])*np.minimum(tt/.3,1)*0.15,0)
put(shimmer(.5),.08,.5); put(zap(),.76,.6,.3); put(swish(.4),.9,.5)
# S1 1–4: 하이햇 8분, 타자, 슬레이트, ACTION, 베기, CUT
for k in range(2,8): put(hat(),k*B,.25); put(hat(),k*B+.25,.15)
for t0,txt in [(1.15,'01'),(1.55,'01'),(1.95,'GIRL HERO')]:
    for i,c in enumerate(txt):
        if c!=' ': put(tick(),t0+i/30,.35,.2)
put(clack(),2.5,1.0); put(kick(),2.5,.6)
put(kick(),3.0,.9); put(stab(Fm,.3),3.0,.5)
put(zap(2600,180,.2),3.38,.6,-.3); put(swish(.3),3.5,.5); put(stab(Fm,.2),3.6,.4)
put(swish(.3,True),3.72,.5)
# S2 4–8: 4박 킥, 글자 착지, 눈 뜸, 시선 2번, ROUND/FIGHT, K.O.
for k in range(8,16): put(kick(),k*B,.9); put(hat(),k*B+.25,.25); put(sub([F1,F1,Db,Eb][(k//2)%4],.45,.35),k*B)
for i,t0 in enumerate([4.0,4.25,4.5,4.75,5.0]): put(stab([Fm[i%3]*0.5],.15),t0,.5)
put(shimmer(),5.2,.6); put(zap(),5.5,.45,-.6); put(zap(),5.75,.45,.6)
put(stab(Dbm,.4),6.0,.5); put(snare(),6.0,.5); put(stab(Fm,.3),6.5,.6); put(snare(),6.5,.6)
put(zap(3600,300,.15),6.58,.6,.4); put(hat(True),6.68,.5)
put(impact(1.0),7.0,.9); put(stab(Fm,.6),7.0,.5)
put(zap(2600,200,.2),7.78,.55); put(swish(.3),7.9,.5)
# S3 8–11.6: 하프타임, 칸 버스트, 여섯 시선, 섬광, CAN, 라이저
for k in range(16,23):
    if k%2==0: put(kick(),k*B,.8)
    if k%2==1: put(snare(),k*B,.45)
    put(hat(),k*B,.2); put(hat(),k*B+.25,.12)
    put(sub([Db,Db,Eb,C1][(k-16)//2%4],.48,.35),k*B)
for i in range(6): put(clack()*.4,8.0+i*.05,.5,(i%3-1)*.5)
for i in range(6): put(tick(),8.35+i*.04,.3)
for i in range(6): put(zap(3000+i*200,250,.2),9.2+i*.012,.25,(i%3-1)*.6)
put(shimmer(.8),9.36,.8); put(impact(.8),9.45,.6)
put(stab(Fm,.5),10.0,.5)
n=int(1.6*SR); t=np.arange(n)/SR; f=200*2**(t*2.2); ph=2*np.pi*np.cumsum(f)/SR
put((np.sin(ph)*0.3+swish(1.6,True)*0.6)*np.minimum(t/1.6,1)**2,10.0,.7)
# 11.6–12.0 완전한 정지: 아무 소리도 넣지 않는다 (아래에서 무음 처리)
# S4 12–16: 드롭
for k in range(24,32):
    put(kick(1.1),k*B,1.0)
    if k%2==1: put(snare(),k*B,.75)
    for j in range(4): put(hat(j==2),k*B+j*.125,.18 if j%2 else .25)
    put(sub([F1,F1,Db,Eb][(k-24)//2%4]*1,.48,.6),k*B)
    if k%2==0: put(stab([f*0.5 for f in (Fm if k<28 else Dbm)],.2),k*B+.25,.35)
put(impact(1.4),12.0,1.0); put(stab(Fm,.5),12.0,.6)
for t0 in [12.5,13.0,13.5]: put(zap(4000,200,.15),t0-.07,.5,(t0-13)*1.2); put(clack()*.6,t0,.5)
put(impact(.9),14.0,.8); put(swish(.5),15.5,.5)
# S5 16–20: 조리개, 로고, 응시, 섬광, 감는 눈
put(swish(.5,True),15.6,.4); put(impact(.8),16.0,.6)
for k in range(32,36): put(kick(),k*B,.7); put(hat(),k*B+.25,.2)
n=int(2.5*SR); tt=np.arange(n)/SR; padv=sum(np.sin(2*np.pi*f*tt)+.3*np.sin(4*np.pi*f*tt) for f in [174.6,207.7,261.6,349.2])/4
put(padv*np.minimum(tt/.2,1)*np.exp(-tt/1.2),16.0,.35)
put(shimmer(),16.7,.5); put(zap(),17.0,.4,-.6); put(zap(),17.25,.4,.6); put(stab(Fm,.3),17.5,.45)
put(swish(.3,True),18.0,.4); put(zap(1800,60,.4),18.25,.6); put(impact(1.5),18.5,1.0)
n=int(1.4*SR); tt=np.arange(n)/SR; put(sum(np.sin(2*np.pi*f*tt) for f in [87.3,130.8])*np.exp(-tt*2.2)*0.2,18.6)
put(tick(),19.6,.3)
mix=np.stack([L,R],1)
mix[int(11.6*SR):int(12.0*SR)]=0
fade=int(.05*SR); mix[int(11.6*SR)-fade:int(11.6*SR)]*=np.linspace(1,0,fade)[:,None]
mix[-int(.3*SR):]*=np.linspace(1,0,int(.3*SR))[:,None]
mix/=np.abs(mix).max()*1.05
w=wave.open('score.wav','wb'); w.setnchannels(2); w.setsampwidth(2); w.setframerate(SR)
w.writeframes((mix*32767).astype('<i2').tobytes()); w.close()
