$(function(){
  $('#tt').on('click',function(){
    $.post('http://big-event-vue-api-t.itheima.net/api/reg'),
    function(res){
      console.log(res)
    }
  })
})