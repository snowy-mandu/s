import sys,glob,os
from PIL import Image,ImageDraw
d,out=sys.argv[1],sys.argv[2]; cols=int(sys.argv[3]) if len(sys.argv)>3 else 4; tw=int(sys.argv[4]) if len(sys.argv)>4 else 640
fs=sorted(glob.glob(d+'/*.jpg')); th=tw*9//16; rows=(len(fs)+cols-1)//cols
S=Image.new('RGB',(cols*tw,rows*(th+22)),(40,40,40)); dr=ImageDraw.Draw(S)
for i,f in enumerate(fs):
  im=Image.open(f).resize((tw,th)); x=(i%cols)*tw; y=(i//cols)*(th+22); S.paste(im,(x,y+22))
  n=os.path.basename(f); fr=int(n[1:5]) if n[0]=='f' else 0; dr.text((x+6,y+5),f'{n}  t={fr/30:.2f}s',fill=(255,255,0))
S.save(out,quality=88)
