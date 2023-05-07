$(function(){
  // 让其滚动
  resetui()
  $(".input_sub").on('click',function(){
    let text=$(".input_txt").val().trim()
    if(text.length<=0){
      return $(".input_txt").val('')
    }
    $(".talk_list").append(`<li class="right_word">
    <img src="img/person02.png" /> <span>${text}</span>
  </li>`)
  $(".input_txt").val('')
  resetui()
  getMag(text)
  })
  function getMag(text){
    $.ajax({
      method: 'GET',
      url:'http://www.liulongbin.top:3006/api/robot',
      data: {
        spoken:text
      },
      success: function(res){
        // console.log(res);
        if(res.message === 'success'){
          var mag=res.data.info.text
          $(".talk_list").append(`<li class="left_word">
          <img src="img/person01.png" /> <span>${mag}</span>
        </li>`)
        resetui()
        getVoice(mag)
        }
      }
    })
  }

  function getVoice(text){
    $.ajax({
      method: 'GET',
      url:'http://www.liulongbin.top:3006/api/synthesize',
      data: {
        text:text
      },
      success: function(res){
        console.log(res);
        if(res.status===200){
          $("#voice").attr('src',res.voiceUrl)
        }
      }
    })
  }

  $(".input_txt").on('keyup',function(e){
    // console.log(e.key);
    if(e.key=='Enter'){
      // console.log(1);
      $(".input_sub").click()
    }
  })
})
