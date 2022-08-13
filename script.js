const source = document.getElementById('sources');
const pipe= document.getElementById('pipe');
const p_name = document.getElementById('p_name');
const files = document.getElementById('files');
const gcs = document.getElementById('gcs');
const time=document.getElementById('time')

document.addEventListener('submit',function(event){
  event.preventDefault();
  validate();
})

function validate(){
  //pipe
  const pipe_val = pipe.value;
  var ret=spVal(pipe_val)
  if(ret)
    error(pipe,'cannot have special characters')
  var ret2=start(pipe_val)
  if(ret2)
  error(pipe,'cannot start with - or _ or +')
  var ret3=ChkLen(pipe_val)
  if(ret3)
  error(pipe,'Cannot be null')


  //p_name
  const p_name_val = p_name.value;
  ret=spVal(p_name_val)
  if(ret)
    error(p_name,'cannot have special characters')
  ret2=start(p_name_val)
  if(ret2)
  error(p_name,'cannot start with - or _ or +')
   ret3=ChkLen(p_name_val)
  if(ret3)
  error(p_name,'Cannot be null')

  //files
  const files_val = files.value;
  ret=spVal(files_val)
  if(ret)
    error(files,'cannot have special characters')
  ret2=start(files_val)
  if(ret2)
  error(files,'cannot start with - or _ or +')
  ret3=ChkLen(files_val)
  if(ret3)
  error(files,'Cannot be null')

  //GCS
  const gcs_val = gcs.value;
  ret=spVal(gcs_val)
  if(ret)
    error(gcs,'cannot have special characters')
  ret2=start(gcs_val)
  if(ret2)
  error(gcs,'cannot start with - or _ or +')
  ret3=ChkLen(gcs_val)
  if(ret3)
  error(gcs,'Cannot be null')

  //time
  const time_val = time.value;
  ret=spVal(time_val)
  if(ret)
    error(time,'cannot have special characters')
  ret2=start(time_val)
  if(ret2)
  error(time,'cannot start with - or _ or +')
  ret3=ChkLen(time_val)
  if(ret3)
  error(time,'Cannot be null')
  }


function spVal(val){
  let flag=0;
  for(let i in val){
    if(('a'<val[i]&& val[i]<'z') || ('A'<val[i] && val[i]<'Z'))
    continue;
    else{
      flag=1;
      break;
    }
  }
    if(flag)
    return 1;
    else
    return 0;

}

function start(val){
  if (val[0] === '-' || val[0] === '_' || val[0] === '+')
  return 1;
  else
  return 0;
}

function error(input,message){
  input.classList.add('error')
  var parent = input.parentElement;
  var small = parent.querySelector('small')
  small.classList.remove('hide')
  small.innerText = message
}

function ChkLen(val){
  if(val.length === 0)
  return 1;
  else
  return 0;
}
