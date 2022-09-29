  $(function(){
    // 点击注册
    $('#go2Reg').on('click',function(){
      $('.login-wrap').hide()
      $('.reg-wrap').show()
    })
    // 点击登录
    $('#go2Login').on('click',function(){
      $('.login-wrap').show()
      $('.reg-wrap').hide()
    })

    // 从 layui 中获取 form对象 
    let form = layui.form
    // 通过form.verify()函数自定义校验规则
    form.verify({
      // 自定义一个pwd 的密码校验
      pwd: [
        /^[\S]{6,12}$/
        ,'密码必须6到12位，且不能出现空格'
      ],
      repwd: function(value){
        // 通过形参拿到的是确认密码框中的内容
        // 还需要拿到密码框中的内容
        // 然后进行一次等于的判断
        // 如果判断失败 则return一个消息提示框
        let pwd = $('.reg-wrap [name=password]').val()
        if(pwd !== value){
          return '两次密码不一致'
        }
       } 
    })


  //监听注册表单的事件
  $('#form_reg').on('submit',function(e){
    e.preventDefalut()
    $.post('http://big-event-vue-api-t.itheima.net/api/reg'),
    {username: $('#form_reg')}
  })


  })