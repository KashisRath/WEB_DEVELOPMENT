function savetoDb(data, success, failure) {
    let internetSpeed = Math.floor(Math.random() * 10) + 1;
    if (internetSpeed > 4) {
        success();
    }
    else {
        failure();
    }
}

savetoDb("apna college", () => {
    console.log("success : your data is saved ");
    savetoDb("hello world", () => { console.log("success : your data2 is saved "); }, () => {
        console.log("failed : your data2 is not saved ");
    })
  },
  ()=>{
    console.log("failed : your data is not saved ");
  }
)