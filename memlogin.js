const express = require("express");
const moment = require("moment-timezone");
const db = require("../modules/db_connect"); //處理檔案上傳，建立上傳檔案
const upload = require("../modules/upload-imgs");
const router = express.Router();


  router.post("/memberRegister", (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const mobile = req.body.mobile;
    const password = req.body.password;
    const birthday = req.body.birthday;
  
    db.query(
      "INSERT INTO membership(name,email,mobile,password,birthday) VALUES (?,?,?,?,?)",
      [name, email, mobile, password, birthday],
      (err, result) => {
        console.log(err);
      }
    );
  });



const getMemberData = async (req) => {
  const email = req.body.email;
  const password = req.body.password;
  // 取得Vr_album資料
  let rev = [];
  // 宣告rev變數
  const sql = `SELECT * FROM membership where email=? and password=?`;
  // 取得vr_album的所有資料
  [rev] = await db.query(sql, [email, password]);
  // 將資料庫內的資料放入剛剛宣告的rev變數回傳陣列
  console.log('rev',rev);
  if (rev.length == 0) {
    return { message: "error" };
  }else{
    return {
      rev,
    };
  }
};

// 以下為限制網域下之使用者才可看到資料
router.post("/memlogin", async (req, res) => {
  res.json(await getMemberData(req, res));
  // 回傳檔案已json格式顯示
});

router.get("/test", async (req, res) => {
  res.json("eddie");
});

module.exports = router;