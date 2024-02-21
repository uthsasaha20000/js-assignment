function checkName(name)
{
 arr=['a', 'y', 'i' , 'e', 'o' , 'u', 'w']
 if(typeof(name)=="string")
 {
  len=name.length-1;
  last_word=name[len];
  for(let i=0;i<arr.length;i++)
  {
    if(last_word==arr[i].toUpperCase()||last_word==arr[i])
    {
        return "Good Name";
    }
  }
  return "Bad Name";
}
else{
    return "invalid"
}
}