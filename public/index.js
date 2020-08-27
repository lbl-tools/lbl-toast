const btn0 = document.getElementById("btn0")
btn0.addEventListener("click", () => {
  Toast.clear()
})

const btn1 = document.getElementById("btn1")
btn1.addEventListener("click", () => {
  Toast.text("你好啊")
})

const btn2 = document.getElementById("btn2")
btn2.addEventListener("click", () => {
  Toast.info("请输入姓名", {
    duration: 0,
  })
})

const btn3 = document.getElementById("btn3")
btn3.addEventListener("click", () => {
  Toast.success("操作成功")
})

const btn4 = document.getElementById("btn4")
btn4.addEventListener("click", () => {
  Toast.error("操作失败")
})

const btn5 = document.getElementById("btn5")
btn5.addEventListener("click", () => {
  Toast.warning("请输入姓名")
})

const btn6 = document.getElementById("btn6")
btn6.addEventListener("click", () => {
  Toast.loading()
})

let time

const btn7 = document.getElementById("btn7")
btn7.addEventListener("click", () => {
  clearInterval(time)
  const loading = Toast.loading({
    text: "加载中",
  })

  let count = 3

  time = setInterval(() => {
    loading.setText("倒计时：" + count)
    count--
    if (count === -1) {
      Toast.success("操作成功")
      clearInterval(time)
    }
  }, 1000)
})
