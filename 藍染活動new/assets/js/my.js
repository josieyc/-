function chat(){
    cn=$('#cname').val();
    ce=$('#cemail').val();
    ct=$('#ctext').val();
    if(ce.indexOf('@')>0){
        data=cn+'&&'+ce+'&&'+ct;
        s=localStorage.s;
        if(cn!=""&&ce!=""){
            if(s==null){
                s=data;
            }else{
                s=s+"||"+data;
            };
        };
        $('#cname').val("");
        $('#cemail').val("");
        $('#ctext').val("");
        alert('資料已送入後台及客戶服務紀錄');
        localStorage.s=s;
        report();
    };
};

report();

function report(){
    ck=localStorage.s;
    if(ck!=null){
        $('#chat_to').html("");
        a=ck.split('||');
        $('#chat_c').html(a.length);
        $('#chat_to').append('<ul>');
        for(i=0;i<a.length;i++){
            b=a[i].split("&&");
            if(a[i]!=""){
                $('#chat_to').append('<li class="chat-box"><b class="chat-tit"><span>'+
                b[0].substr(0,2)+'*'+'/'+
                b[1].substr(0,5)+'*********'+'</span></b><box>'+'/'+
                b[2]+'</box></li>');
            };
        };
        var e=document.getElementById('chat_to');
        e.scrollTop=e.scrollHeight;
        $('#chat_to').append('</ul>');
        $('.chat-box').last().addClass('animate__animated animate__rubberBand').bind('animationend',function(){
            $(this).removeClass('animate__animated animate__rubberBand');
        });
    };
};
