const express = require('express');
// 追加ここから
const getTukkomi = require('./get-random-tukkomi');
// /追加ここまで

const tukkomiRoboRouter = express.Router();

tukkomiRoboRouter.get('/', (req, res) => {
  const { phrase } = req.query;
  //
  // TODO
  //
  // if phrase が空っぽだったらエラーメッセージを送ろう。

  // 追加ここから
  // ランダムメッセージを取得する
  const tukkomiMessage = getTukkomi();
  if (phrase === '')  {
    res.send('入力してな'); 
  // else phrase にツッコミを追加して送ろう。 (HINT: get-random-tukkomi.js が役に立つかも）
  } else { 
    res.send(phrase + '...って、' + tukkomiMessage);
  }
  // /追加ここまで
});

module.exports = tukkomiRoboRouter;
