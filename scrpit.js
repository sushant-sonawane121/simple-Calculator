let num = "";

let show = (e) => {
  if (e.target.value === "AC") {
    num = "";
  } else if (e.target.value === "X") {
    num = num.slice(0, -1);
  } else {
    num = num + e.target.value;
  }
  document.getElementById("area").innerHTML = num;
};

let ans = () => {
  let area = document.getElementById("area");

  try {
    num = eval(num);
    area.innerHTML = num;
  } catch (error) {
    console.log(error);
  }
};
