function removeElement(nums, val) {
  //
  return nums.filter((num) => {
    return num !== val;
  });
}

console.log(removeElement([3, 2, 2, 3], 3));
