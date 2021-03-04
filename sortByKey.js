//function to sort list of objects by a variable 'key'
function sort_by_key(array, key)
{
  //adapted from David Brainer on stack overflow
 return array.sort(function(a, b)
 {
  var x = a[key]; var y = b[key];
  return ((x > y) ? -1 : ((x < y) ? 1 : 0));
 });
}