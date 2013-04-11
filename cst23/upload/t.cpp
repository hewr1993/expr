#include<cstdio>
#include<algorithm>
#define For(i,n) for(int i=1;i<=n;i++)
#define FOR(i,a,b) for(int i=a;i<=b;i++)
using namespace std;
const int N=3010,M=1000010;
const double eps=1e-8;
int n,m,sz=1,id,xx,yy,fx,fy,u,v,w,en[N],fa[N],
    a[M],b[M],pre[M],e[M],g[M],c[M],go[M],be[M];
long long ans=0;
bool vis[M];
struct P
{
    double x,y;
}p[N],o;
void Ins(int u,int v)
{
    pre[++sz]=en[u];en[u]=sz;
    e[sz]=u;g[sz]=v;
}
int sgn(double x)
{
    if (x<-eps) return -1; else return (x>eps);
}
double det(P a,P b,P c)
{
    return (b.x-a.x)*(c.y-a.y)-(b.y-a.y)*(c.x-a.x);
}
int getfa(int x)
{
    if (!fa[x]) return x;
    return fa[x]=getfa(fa[x]);
}
bool cmp2(int x,int y)
{
    return (c[x]<c[y]);
}
bool cmp(int x,int y)
{
    P a=p[g[x]],b=p[g[y]];
    int da=sgn(a.y-o.y),db=sgn(b.y-o.y);
    if (da==0) if (a.x>o.x) da=1;
    if (db==0) if (b.x>o.x) db=1;
    if (da!=db) return da>db;
    return det(o,a,b)>0;
    
}
void Solve(int x)
{
    int tot=0;  
    for(int i=en[x];i;i=pre[i])
        a[++tot]=i;
    o=p[x];
    sort(a+1,a+tot+1,cmp);
    a[0]=a[tot];
    For(i,tot) go[a[i-1]^1]=a[i];
}
void Travel(int x)
{
    id++;
    for(;!vis[x];x=go[x])
    {
        be[x]=id;
        vis[x]=1;
    }
}
int main()
{
    scanf("%d%d",&n,&m);
    For(i,n) scanf("%d%d",&xx,&yy),p[i].x=xx,p[i].y=yy;
    For(i,m) 
    {
        scanf("%d%d%d%d",&u,&v,&xx,&c[i]);
        Ins(u,v);
        Ins(v,u);
    }
    For(i,n) Solve(i);
    FOR(i,2,sz) if (!vis[i]) Travel(i);
    For(i,m)    
        a[i]=be[i+i],b[i]=be[i+i+1],be[i]=i;
    sort(be+1,be+m,cmp2);
    For(i,m)
        if (c[w=be[i]])
        {
            fx=getfa(a[w]);
            fy=getfa(b[w]);
            if (fx!=fy)
            {
                fa[fx]=fy;
                ans+=c[w];
                id--;
                if (!id) break;
            }
        }
    printf("%I64d\n",ans);
    return 0;
}
