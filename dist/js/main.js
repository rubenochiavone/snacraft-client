var max_avatar_index,initial_av_index,avatar_ctx,avatar_canvas,SNAKE_SIZE=6,ITEMS=10,current_avatar_index=0,avatars=[];function debug(a,b,c,d){ctx.drawImage(a,b,c,d,d)}function createAvatars(){initial_av_index=TILES.length,current_avatar_index=initial_av_index;for(var a=item_size/8,b=item_size+a,c=item_size+a,d=item_size/8,e=2*d,f=0;f<colors.length;f++){canvas=document.createElement("canvas"),canvas.height=item_size,canvas.width=item_size,dctx=canvas.getContext("2d"),dctx.fillStyle=grid_color,dctx.fillRect(0,0,item_size,item_size),dctx.fillStyle=TILES[0].item,dctx.fillRect(0,0,item_size_1,item_size_1),x=-d,y=-d,b=item_size_1+e,c=item_size_1+e;var g=document.createElement("canvas");g.height=item_size,g.width=item_size;var k=g.getContext("2d");if("rect"==colors[f][2])drawCircle(k,d,colors[f][3],colors[f][4],colors[f][5],!1);else if("bow"==colors[f][2]){drawCircle(k,d,colors[f][3],colors[f][4],colors[f][4],!1);var l=d/2,m=3*d,n=e,o=c-4*d;k.fillStyle=colors[f][5];for(var p=0;3>p;p++)k.fillRect(n,o,d,d),n+=l,o-=2*l;for(var p=0;3>p;p++)k.fillRect(n,o,d,d),n+=2*l,o-=l;k.strokeStyle=colors[f][6],k.beginPath(),k.moveTo(e+l,c-m),k.lineTo(b-m,e),k.stroke(),dctx.drawImage(g,x,y,b,c)}dctx.drawImage(g,x,y,b,c),TILES[initial_av_index+f]={item:canvas,off:!1,image:!0},"Zombie"===colors[f][0]?(ZOMBIE_INDEX=TILES.length-1,ZOMBIE_SHIRT=ZOMBIE_INDEX+1,ZOMBIE_PANT=ZOMBIE_SHIRT+1):"Skeleton"===colors[f][0]?(SKELETON_INDEX=TILES.length-1,SKELETON_BOW=SKELETON_INDEX+1):4==f&&(max_avatar_index=TILES.length)}}function drawAvatar(a){var b=33/8,c=TILES[a];head_canvas="#FFFFFF"==colors[a-initial_av_index][1]?head_white:head_black,x=b;var d=smallScreen?0:1,e=smallScreen?6:7;for(i=0;i<e;i++)i>d&&(avatar_ctx.drawImage(c.item,x,2*b,33,33),i==e-1&&avatar_ctx.drawImage(head_canvas.right,x,2*b,33,33)),x+=33}function changeAvatar(a){"fa fa-arrow-right"===a.currentTarget.className?(current_avatar_index++,current_avatar_index===max_avatar_index&&(current_avatar_index=initial_av_index)):(current_avatar_index--,current_avatar_index===initial_av_index-1&&(current_avatar_index=max_avatar_index-1)),drawAvatar(current_avatar_index)}function initAvatarChooser(){avatar_canvas=document.getElementById("avatar"),avatar_ctx=avatar_canvas.getContext("2d");var a=.2*33;smallScreen&&(ITEMS-=2);var b=(smallScreen?ITEMS-1:ITEMS)*33+2*a;avatar_canvas.height=33+2*a,avatar_canvas.width=b,avatar_ctx.fillStyle=TILES[0].item,avatar_ctx.fillRect(0,0,avatar_canvas.width,avatar_canvas.height),avatar_ctx.strokeStyle=grid_color,avatar_ctx.beginPath(),avatar_ctx.moveTo(0,a),avatar_ctx.lineTo(avatar_canvas.width,a),avatar_ctx.stroke(),avatar_ctx.beginPath(),avatar_ctx.moveTo(0,a+33),avatar_ctx.lineTo(avatar_canvas.width,a+33),avatar_ctx.stroke(),x=a;var c=smallScreen?9:10;for(i=0;i<c;i++)avatar_ctx.beginPath(),avatar_ctx.moveTo(x,0),avatar_ctx.lineTo(x,avatar_canvas.height),avatar_ctx.stroke(),x+=33;createAvatars(),drawAvatar(current_avatar_index),document.querySelector(".fa-arrow-left").addEventListener("click",changeAvatar),document.querySelector(".fa-arrow-right").addEventListener("click",changeAvatar)}var ZOMBIE_INDEX,ZOMBIE_SHIRT,ZOMBIE_PANT,SKELETON_INDEX,SKELETON_BOW,socket,nickname,id,leaderboard,my_snake,snakes_count,head_black,head_white,position,score,speed,i_start,i_end,horizontal_items,vertical_items,focus_offset_i,focus_offset_j,sounds,ctx,ctx2,width,height,i,j,leaderBoardTable,tBodyElem,snakeRanking,KEY_UP=87,KEY_DOWN=83,KEY_LEFT=65,KEY_RIGHT=68,KEY_UP_1=38,KEY_DOWN_1=40,KEY_LEFT_1=37,KEY_RIGHT_1=39,DIRECTION_DOWN=0,DIRECTION_RIGHT=1,DIRECTION_LEFT=2,DIRECTION_UP=3,SMALL_SCREEN=650,RANKING_SIZE=8,smallScreen=!1,FOCUS_OFFSET_PERCENTAGE=.2,TILE_MOVE_SPEED=5,NAMES_HEIGHT=12,matrix=[],current_matrix=[],matrix_mobs=[],players_list={},connected=!1,lines=0,columns=0,center_i=0,center_j=0,head_i=0,head_j=0,data=null,eyes_color="#000000",offset_i_left=0,offset_j_left=0,offset_i_right=0,offset_j_right=0,j_start=0,j_end=0,grid_color="#6d953e",colors=[["Diamond","#000000","rect","#006064","#00BCD4","#B2EBF2"],["Purple","#FFFFFF","rect","#4A148C","#8E24AA","#E1BEE7"],["Wood","#FFFFFF","rect","#322114","#8d6b3c","#9d7942"],["Indigo","#FFFFFF","rect","#1A237E","#303F9F","#9FA8DA"],["Teal","#000000","rect","#009688","#4DB6AC","#00897B"],["Zombie","#000000","rect","#1e2c13","#385a27","#567943"],["ZombieShirt","#000000","rect","#007876","#007e7b","#007e7b"],["ZombiePant","#000000","rect","#3a3189","#463aa5","#463aa5"],["Skeleton","#000000","rect","#686868","#939393","#939393"],["SkeletonBow","#000000","bow","#686868","#939393","#896727","#444444"]],TILES=[{item:"#80af49",off:!1},{item:"#686868",off:!0},{item:"#6e6e6e",off:!0},{item:"#747474",off:!0},{item:"#7e7e7e",off:!0},{item:"#8e8e8e",off:!0},{item:"#2b1608",off:!0},{item:"#3b2711",off:!0},{item:"#593d2a",off:!0},{item:"#715036",off:!0},{item:"#76553a",off:!0},{item:"#346a2c",off:!0},{item:"#4b8435",off:!0},{item:"#508935",off:!0},{item:"#548c35",off:!0},{item:"#7da658",off:!0},{item:"CHICKEN",off:!1},{item:"PIG",off:!1},{item:"COW",off:!1},{item:"XP1",off:!1},{item:"XP2",off:!1},{item:"XP3",off:!1},{item:"XP4",off:!1},{item:"MOVE_SPEED",off:!1}],DESIRED_HORIZONTAL_ITEMS=55,item_size=26,item_size_1=item_size-2;function randomInt(a,b){return Math.floor(Math.random()*(b-a+1)+a)}function drawGrid(a){var b,c=0,d=!0,e=(smallScreen?3:5)*item_size,f=(vertical_items-6)*item_size,g=["#323232","#373737","#3a3a3a","#3f3f3f","#474747"],k=["#1a3516","#183114","#223d18","#274018","#3e532c"],l=["#150b04","#1d1308","#2c1e15","#38281b","#3b2a1d"];for(i=0;i<vertical_items+1;i++){for(b=0,j=0;j<horizontal_items+1;j++){if(c>=f)d?(ctx.fillStyle=k[randomInt(0,4)],ctx.fillRect(b,c,item_size,item_size)):(ctx.fillStyle=l[randomInt(0,4)],ctx.fillRect(b,c,item_size,item_size));else if(c<=e)ctx.fillStyle=g[randomInt(0,4)],ctx.fillRect(b,c,item_size,item_size);else if(a)break;else ctx.fillStyle=TILES[0].item,ctx.fillRect(b,c,item_size_1,item_size_1);b+=item_size}c>=f&&(d=!1),c+=item_size}}function resetCurrentMatrix(){var a,b,c=-item_size;for(current_matrix=[],i=0;i<vertical_items;i++){for(a=[],b=-item_size,j=0;j<horizontal_items;j++)a.push({i:-1,x:b,y:c,off:!0}),b+=item_size;c+=item_size,current_matrix.push(a)}}function initMatrix(a){var b,d=a.split(",");lines=parseInt(d[1]),columns=parseInt(d[2]),matrix_mobs=[],matrix=[];var e,f=3;for(i=0;i<lines;i++){for(e=[],b=[],j=0;j<columns;j++)e.push(parseInt(d[f])),b.push(0),f++;matrix_mobs[i]=b,matrix[i]=e}}function connect(a){socket=new WebSocket("ws://"+a),socket.binaryType="arraybuffer",socket.addEventListener("open",function(){connected=!0,ctx2.clearRect(0,0,width,height);var a=document.getElementById("connect");a.disabled=!1,a.style.cursor="pointer",startGame(),nickname=document.getElementById("nickname").value,nickname?10<nickname.length&&(nickname=nickname.substr(0,10)):nickname="snake-"+parseInt(1e5*Math.random()).toString(),socket.send(nickname+","+current_avatar_index),document.getElementById("snake-nickname").innerHTML=nickname}),socket.addEventListener("close",function(){closeGame()}),socket.addEventListener("error",function(){closeGame()}),socket.addEventListener("message",onMessage)}function startGame(){document.getElementById("game-container").style.display="block",document.getElementById("game-stats").style.display="block",document.getElementById("keyboard").style.display="block",document.getElementById("connect-form").style.display="none",document.getElementById("navbar").style.display="none",document.getElementById("footer").style.display="none",document.getElementById("beta").style.display="none";var a=document.getElementById("ads");a&&(a.style.display="none"),document.getElementById("social-buttons").style.display="none",leaderBoardTable=document.getElementById("leader-board-table"),tBodyElem=document.createElement("tbody"),leaderBoardTable.innerHTML="",leaderBoardTable.appendChild(tBodyElem),snakeRanking=document.getElementById("snake-ranking"),"undefined"!=typeof app&&app.hideAds(),startSound()}function closeGame(){socket=null,connected=!1,document.getElementById("connect").disabled=!1,document.getElementById("game-stats").style.display="none",smallScreen&&(document.getElementById("keyboard").style.display="none"),document.getElementById("connect-form").style.display="block",document.getElementById("navbar").style.display="block",document.getElementById("footer").style.display="block",document.getElementById("beta").style.display="block";var a=document.getElementById("ads");a&&(a.style.display="block"),document.getElementById("social-buttons").style.display="block","undefined"!=typeof app&&app.showAds(),stopSound()}function onMessage(a){if(a.data instanceof ArrayBuffer)switch(data=new Uint8Array(a.data),data[0]){case 1:id=data[1],color=data[2],head_i=data[3],head_j=data[4],center_i=head_i,center_j=head_j,my_snake={id:id,name:nickname,i:head_i,j:head_j,direction:DIRECTION_UP,color:color,eyes:"#FFFFFF"==colors[color-initial_av_index][1]?1:0},initPlayer(my_snake),players_list[id]=my_snake;break;case 2:drawMobs(data),drawMobsAtMap(),drawStats();break;case 7:initPlayersList(data);break;case 8:snake=players_list[data[1]],snake&&(ctx2.clearRect(snake.name_x,snake.name_y,snake.name_w,NAMES_HEIGHT),players_list[data[1]]=void 0);break;case 9:break;case 10:playSound(data[1]);break;case 11:speed=data[1];}else if("string"==typeof a.data)switch(data=a.data,data.charCodeAt(0)){case 0:initMatrix(data);break;case 4:socket.close(),drawGameover();}}function drawMobs(a){snakes_count=a[1];var b,c,d,e,f,g;for(j=2,leaderboard=[],i=0;i<snakes_count;i++){if(cur_id=a[j++],i<RANKING_SIZE&&leaderboard.push(cur_id),cur_snake=players_list[cur_id],color=a[j++],!cur_snake){cur_snake={};var m=color-initial_av_index;cur_snake.id=cur_id,cur_snake.eyes="#FFFFFF"==colors[m][1]?1:0,cur_snake.name="",cur_snake.i=0,cur_snake.j=0,players_list[cur_id]=cur_snake}switch(cur_snake.color=color,f=a[j++],g=a[j++],cur_snake.size=f<<8|255&g,b=a[j++],c=a[j++],cur_snake.i<b?(cur_snake.head=cur_snake.eyes?head_white.down:head_black.down,cur_snake.direction=DIRECTION_DOWN):cur_snake.i>b?(cur_snake.head=cur_snake.eyes?head_white.up:head_black.up,cur_snake.direction=DIRECTION_UP):cur_snake.j<c?(cur_snake.head=cur_snake.eyes?head_white.right:head_black.right,cur_snake.direction=DIRECTION_RIGHT):cur_snake.j>c&&(cur_snake.head=cur_snake.eyes?head_white.left:head_black.left,cur_snake.direction=DIRECTION_LEFT),cur_snake.i=b,cur_snake.j=c,cur_id==id&&(my_snake=cur_snake,my_snake.position=i+1),matrix_mobs[cur_snake.i][cur_snake.j]=-cur_id,color){case ZOMBIE_INDEX:for(matrix_mobs[a[j++]][a[j++]]=ZOMBIE_SHIRT,matrix_mobs[a[j++]][a[j++]]=ZOMBIE_SHIRT,half=parseInt(cur_snake.size/2)+3,d=3;d<half;d++)matrix_mobs[a[j++]][a[j++]]=ZOMBIE_PANT;for(e=half;e<cur_snake.size;e++)matrix_mobs[a[j++]][a[j++]]=ZOMBIE_INDEX;break;case SKELETON_INDEX:for(matrix_mobs[a[j++]][a[j++]]=SKELETON_INDEX,matrix_mobs[a[j++]][a[j++]]=SKELETON_BOW,d=3;d<cur_snake.size;d++)matrix_mobs[a[j++]][a[j++]]=SKELETON_INDEX;break;default:for(d=1;d<cur_snake.size;d++)matrix_mobs[a[j++]][a[j++]]=cur_snake.color;}}for(i=j;i<a.length;i++)matrix_mobs[a[i]][a[++i]]=a[++i];head_i=my_snake.i,head_j=my_snake.j,head_i-center_i<-focus_offset_i?center_i--:head_i-center_i>focus_offset_i&&center_i++,head_j-center_j<-focus_offset_j?center_j--:head_j-center_j>focus_offset_j&&center_j++}function drawItemAtCanvas(a,b){a&&(a.image?ctx.drawImage(a.item,b.x,b.y,item_size,item_size):(previous=TILES[b.i],(!previous||previous.image||previous.off)&&(ctx.fillStyle=grid_color,ctx.fillRect(b.x,b.y,item_size,item_size)),ctx.fillStyle=a.item,a.off?ctx.fillRect(b.x,b.y,item_size,item_size):ctx.fillRect(b.x,b.y,item_size_1,item_size_1)))}function drawMobsAtMap(){i_start=center_i-offset_i_left,i_end=center_i+offset_i_right,0>i_start?(i_start=0,i_end=vertical_items):i_end>=lines&&(i_end=lines,i_start=lines-vertical_items),j_start=center_j-offset_j_left,j_end=center_j+offset_j_right,0>j_start?(j_start=0,j_end=horizontal_items):j_end>=columns&&(j_end=columns,j_start=columns-horizontal_items);var a,b;for(i=i_start,_i=0;i<i_end;i++,_i++)for(j=j_start,_j=0;j<j_end;j++,_j++)current=current_matrix[_i][_j],0>matrix_mobs[i][j]?(b=players_list[-matrix_mobs[i][j]],b&&(a=TILES[b.color],drawItemAtCanvas(a,current),ctx.drawImage(b.head,current.x,current.y,item_size,item_size),ctx2.clearRect(b.name_x,b.name_y,b.name_w,b.name_h),b.name_x=current.x+item_size,b.name_y=current.y-item_size,ctx2.fillText(b.name,b.name_x,b.name_y),current.i=-b.color)):0==matrix_mobs[i][j]?matrix[i][j]!=current.i&&(a=TILES[matrix[i][j]],drawItemAtCanvas(a,current),current.i=matrix[i][j]):(matrix_mobs[i][j]!=current.i&&(a=TILES[matrix_mobs[i][j]],drawItemAtCanvas(a,current),current.i=matrix_mobs[i][j]),matrix_mobs[i][j]=0)}function initPlayer(a){measure=ctx2.measureText(a.name),a.name_h=14,a.name_w=measure.width+2,a.name_x=0,a.name_y=0,a.size=0}function initPlayersList(a){var b,c,d,e,f;for(i=1;i<a.length;){for(c=a[i],i++,e=a[i],b="",j=0;j<e;j++)i++,b+=String.fromCharCode(a[i]);i++,f=a[i],d={name:b,i:0,j:0,color:f,eyes:"#FFFFFF"==colors[f-initial_av_index][1]?1:0},initPlayer(d),players_list[c]=d,i++}}function drawStats(){score=my_snake.size,document.getElementById("snake-size").innerHTML=score,document.getElementById("snake-speed").innerHTML=speed,position=my_snake.position,snakeRanking.innerHTML=position+"/"+snakes_count,tBodyElem.innerHTML="";var a;for(i=0;i<leaderboard.length;i++)if(a=players_list[leaderboard[i]],a){var b=document.createElement("tr");b.innerHTML="<td><strong> #"+(i+1)+"</strong></td><td>"+a.name+"</td>",tBodyElem.appendChild(b)}}function drawGameover(){var a=document.getElementById("score");a.style.visibility="visible",a.innerHTML="Score: "+score+" ("+position+"/"+snakes_count+")",document.getElementById("connect-form-gameover").style.visibility="visible",drawGrid(!0)}function keyPressed(a){if(!connected)13==a.keyCode&&document.getElementById("connect").click();else switch(a.keyCode){case KEY_UP:case KEY_UP_1:socket.send("1,0");break;case KEY_DOWN:case KEY_DOWN_1:socket.send("1,1");break;case KEY_LEFT:case KEY_LEFT_1:socket.send("1,2");break;case KEY_RIGHT:case KEY_RIGHT_1:socket.send("1,3");}}function virtualKeyPressed(){socket.send("1,"+this.getAttribute("key"))}function setCookie(a,b,c){var d="";if(c){var e=new Date;e.setTime(e.getTime()+1e3*(60*(60*(24*c)))),d="; expires="+e.toUTCString()}document.cookie=a+"="+(b||"")+d+"; path=/"}function getCookie(a){for(var b,d=a+"=",e=document.cookie.split(";"),f=0;f<e.length;f++){for(b=e[f];" "==b.charAt(0);)b=b.substring(1,b.length);if(0==b.indexOf(d))return b.substring(d.length,b.length)}return null}function eraseCookie(a){document.cookie=a+"=; Max-Age=-99999999;"}function findGetParameter(a){for(var b=[],c=location.search.substr(1).split("&"),d=0;d<c.length;d++)if(b=c[d].split("="),b[0]===a)return decodeURIComponent(b[1]);return""}function initTiles(){var a,b,c,d;for(i=0;i<TILES.length;i++)if("#"!=TILES[i].item.charAt(0)){TILES[i].image=!0,a=document.createElement("canvas"),a.height=item_size,a.width=item_size,b=a.getContext("2d"),b.fillStyle=grid_color,b.fillRect(0,0,item_size,item_size),b.fillStyle=TILES[0].item,b.fillRect(0,0,item_size_1,item_size_1);var e=item_size_1/8,f=2*e,g=3*e,j=5*e,k=6*e,l=7*e,m=item_size_1/10,n=2*m,o=3*m,p=4*m,q=5*m,r=6*m,t=7*m,u=8*m,v=parseInt(m+m/2);switch(TILES[i].item){case"CHICKEN":var z=item_size_1/10,s=8*z,A=2*z;b.fillStyle="#e8e8e8",y=z,b.fillRect(z,y,s,z),b.fillStyle="#FFFFFF",y+=z,b.fillRect(z,y,s,A),b.fillStyle="#000000",b.fillRect(z,y,A,A),b.fillRect(3*A+z,y,A,A),b.fillStyle="#c19343",y+=A,b.fillRect(z,y,s,A),b.fillStyle="#967234",y+=A,b.fillRect(z,y,s,A),b.fillStyle="#FFFFFF",y+=A,b.fillRect(z,y,s,z),b.fillStyle="#FF0000",b.fillRect(A+A,y,A+z,A);break;case"PIG":b.fillStyle="#f0acab",b.fillRect(m,v,u,t),b.fillStyle="#d58181",b.fillRect(n,v,m,n),b.fillStyle="#000000",b.fillRect(m,p,n,n),b.fillRect(t,p,n,n),b.fillStyle="#FFFFFF",b.fillRect(o,p,m,n),b.fillRect(r,p,m,n),b.fillStyle="#965151",b.fillRect(p,t,m,m),b.fillRect(r,t,m,m);break;case"COW":b.fillStyle="#573800",b.fillRect(m,v,u,t),b.fillStyle="#e7e7e7",b.fillRect(p,v,n,n),b.fillRect(p,v,o,m),b.fillRect(p,v,m,o),b.fillStyle="#FFFFFF",b.fillRect(m,p,n,n),b.fillRect(t,p,n,n),b.fillStyle="#000000",b.fillRect(m,q,m,m),b.fillRect(u,q,m,m),b.fillStyle="#FFFFFF",b.fillRect(p,r,n,m),b.fillRect(n,t,q+m/2,n),b.fillStyle="#000000",b.fillRect(o,t,m,m),b.fillRect(r,t,m,m),b.fillStyle="#a5a5a5",b.fillRect(o,u,p,m);break;case"MOVE_SPEED":b.fillStyle="#616161",b.fillRect(f,e,f,l),b.fillRect(j,e,f,l),b.fillRect(e,k,g,f),b.fillRect(j,k,g,f);break;case"XP1":c=i,drawCircle(b,e,"#9e9e00","#bfbf00","#fefe00",!0);break;case"XP2":d=i,drawCircle(b,e,"#126e00","#1fbf00","#2afe00",!0);break;case"XP3":x=.1*item_size_1,y=.1*item_size_1,w=.8*item_size_1,h=.8*item_size_1,b.drawImage(TILES[c].item,x,y,w,h),b.fillStyle=TILES[0].item,b.fillRect(0,h,item_size_1,e),b.fillRect(w,0,e,item_size_1);break;case"XP4":x=.1*item_size_1,y=.1*item_size_1,w=.8*item_size_1,h=.8*item_size_1,b.drawImage(TILES[d].item,x,y,w,h),b.fillStyle=TILES[0].item,b.fillRect(0,h,item_size_1,e),b.fillRect(w,0,e,item_size_1);}TILES[i].item=a}else TILES[i].image=!1;head_black=createHead("#000000"),head_white=createHead("#FFFFFF")}function createHead(a){var b=item_size_1/5,c=3*b,d={},e=document.createElement("canvas");e.height=item_size,e.width=item_size;var f=e.getContext("2d");return f.fillStyle=a,f.fillRect(b,b,b,b),f.fillRect(c,b,b,b),d.up=e,e=document.createElement("canvas"),e.height=item_size,e.width=item_size,f=e.getContext("2d"),f.fillStyle=a,f.fillRect(b,c,b,b),f.fillRect(c,c,b,b),d.down=e,e=document.createElement("canvas"),e.height=item_size,e.width=item_size,f=e.getContext("2d"),f.fillStyle=a,f.fillRect(b,b,b,b),f.fillRect(b,c,b,b),d.left=e,e=document.createElement("canvas"),e.height=item_size,e.width=item_size,f=e.getContext("2d"),f.fillStyle=a,f.fillRect(c,b,b,b),f.fillRect(c,c,b,b),d.right=e,d}function drawCircle(a,b,c,d,e,f,g){g===void 0&&(g=0);var i=2*b,j=3*b,k=4*b,l=5*b,m=6*b,n=b/2;b+=g,a.fillStyle=c,a.fillRect(b,b,m,m),a.fillStyle=d,a.fillRect(i,i,k,k),a.fillStyle=e,a.fillRect(j,j,i,i),f&&(a.fillStyle=TILES[0].item,a.fillRect(0,0,i+n,b+n),a.fillRect(0,0,i,i),a.fillRect(0,0,b+n,i+n),a.fillRect(m+n,0,b+n,i+n),a.fillRect(m,0,i,i),a.fillRect(l+n,0,i+n,b+n),a.fillRect(0,l+n,b+n,i+n),a.fillRect(0,m,i,i),a.fillRect(0,m+n,i+n,b+n),a.fillRect(m+n,l+n,b+n,i+n),a.fillRect(m,m,i,i),a.fillRect(l+n,m+n,i+n,b+n))}document.addEventListener("DOMContentLoaded",function(){smallScreen=window.innerWidth<SMALL_SCREEN,smallScreen&&(RANKING_SIZE=4);for(var a=document.getElementById("canvas"),b=document.getElementById("canvas2"),c=document.querySelectorAll("#keyboard .key"),d=0;d<c.length;d++)c[d].addEventListener("click",virtualKeyPressed);if(width=a.width=b.width=window.innerWidth,height=a.height=b.height=window.innerHeight,horizontal_items=DESIRED_HORIZONTAL_ITEMS,item_size=parseInt(width/(horizontal_items-3)),26>item_size){for(;0!=item_size%8;)item_size++;horizontal_items=parseInt(width/item_size)+1+2}item_size_1=item_size-2,vertical_items=parseInt(height/item_size)+1+2,offset_i_left=parseInt(vertical_items/2),offset_j_left=parseInt(horizontal_items/2),offset_i_right=vertical_items-offset_i_left,offset_j_right=horizontal_items-offset_j_left,focus_offset_i=parseInt(vertical_items*FOCUS_OFFSET_PERCENTAGE),focus_offset_j=parseInt(horizontal_items*FOCUS_OFFSET_PERCENTAGE),ctx=a.getContext("2d"),ctx.fillStyle=grid_color,ctx.fillRect(0,0,width,height),drawGrid(!1),initTiles(),ctx2=b.getContext("2d"),ctx2.textAlign="left",ctx2.textBaseline="top",ctx2.font="bold 12px Arial",ctx2.fillStyle="#FFFFFF",document.getElementById("nickname").value=getCookie("nickname");var e=document.getElementById("server");if("true"===findGetParameter("debug")){var f=document.createElement("option");f.value="localhost:8080",f.text=f.value,e.appendChild(f),f=document.createElement("option"),f.value="secret-reaches-61045.herokuapp.com",f.text="Secret Reaches",e.appendChild(f),f=document.createElement("option"),f.value="fast-island-17183.herokuapp.com",f.text="Fast Island",e.appendChild(f)}getServerList(document.getElementById("server")),"snacraft-app"==navigator.userAgent||"1"===findGetParameter("n")?document.getElementById("ads").remove():(adsbygoogle=window.adsbygoogle||[]).push({});var g=getCookie("server");if(g)for(var k,l=e.options,m=0;k=l[m];m++)if(k.value==g){e.selectedIndex=m;break}document.getElementById("connect").onclick=function(a){if(a.target.disabled=!0,a.target.style.cursor="wait",!connected){resetCurrentMatrix();var b=document.getElementById("server").value,c=document.getElementById("nickname").value;setCookie("nickname",c,5),setCookie("server",b,5),connect(b)}},initAvatarChooser(),initSounds(),window.addEventListener("keydown",keyPressed,!1)}),function(){"use strict";if(navigator.userAgent.match(/IEMobile\/10\.0/)){var a=document.createElement("style");a.appendChild(document.createTextNode("@-ms-viewport{width:auto!important}")),document.querySelector("head").appendChild(a)}}();function getServerList(a){var b=new XMLHttpRequest;b.onreadystatechange=function(){var b=[];if(4==this.readyState&&200==this.status){for(var c=JSON.parse(this.responseText),d=null,e=0;e<c.length;e++)if(d=c[e],d&&d.title&&d.url){b.push(d);var f=document.createElement("option");f.innerHTML=d.title,f.setAttribute("value",d.url),f.setAttribute("id",d.url),a.appendChild(f)}d=null,c=null,getPlayersCount(b)}},b.onerror=function(){console.log("Error requesting server state")},b.open("GET","api/servers",!0),b.send()}function getPlayersCount(a){for(var b=0;b<a.length;b++){var c=a[b],d=new WebSocket("ws://"+c.url);d.binaryType="arraybuffer",d.onmessage=function(a){if(a.data instanceof ArrayBuffer){var b=new Uint8Array(a.data);if(b&&2==b.length&&9==b[0]&&b[1]){var c=b[1],d=a.srcElement.url.substring(5,a.srcElement.url.length-1),e=document.getElementById(d);e.innerHTML=e.innerHTML+" - "+c+"/255 "}}a.srcElement.close()}}}var walking_sound,MOBS_VOLUME=.3,AMBIENCE_VOLUME=.7;Array.prototype.choice=function(){return this[Math.floor(Math.random()*this.length)]};function initSounds(){walking_sound=new Audio("snd/sound.ogg");var a=[new Audio("snd/xp.ogg")];a[0].volume=MOBS_VOLUME;var b=new Audio("snd/gallop1.ogg");b.volume=MOBS_VOLUME+.4;var c=new Audio("snd/chickenhurt.ogg");c.volume=MOBS_VOLUME;var d=new Audio("snd/chicken.ogg");d.volume=3*MOBS_VOLUME;var e=new Audio("snd/pigdeath.mp3");e.volume=MOBS_VOLUME;var f=new Audio("snd/pig.mp3");f.volume=3*MOBS_VOLUME;var g=new Audio("snd/cowhurt.ogg");g.volume=MOBS_VOLUME;var i=new Audio("snd/cow.ogg");i.volume=1,sounds={16:[c,d],17:[e,f],18:[g,i],19:a,20:a,21:a,22:a,23:[b]},walking_sound.volume=AMBIENCE_VOLUME,walking_sound.loop=!0}function startSound(){walking_sound.play()}function stopSound(){var a=new Audio("snd/dead.ogg");a.volume=MOBS_VOLUME;var b=new Audio("snd/hurt.ogg");b.volume=MOBS_VOLUME,[a,b].choice().play(),walking_sound.pause()}function playSound(a){a&&(sound=sounds[a],sound&&sound.choice().play())}