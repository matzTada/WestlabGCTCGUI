# WestlabGCTCGUI

* Node.js, Express, Docker  
* File operation
* [La-Poプロジェクト](https://github.com/matzTada/La-Po)を適宜参照すること（特にExpress, JSまわり）

## To Do

* Dockerの設定
	* OK~~大枠ができた~~
	* OK~~portとフォルダを外部から指定できるようにする~~
* contactとかmenuとか細かいところの編集
* OK~~このアプリ自体のconfigファイルを作る~~shell scriptにしました
* OK~~ファイルリスト表示→リストにボタンを付与→ボタンを押したらファイル読み込みを行う~~
* OK~~updatetimeの更新~~
* OK~~時刻も追加する？~~

## Docker

* gui用のport(```GUI_PORT```)変更と設定が書かれたJSONファイルが入っているディレクトリ(```JSON_DIR```)の変更は```WestlabGCTCGUI/docker/launchContainer.sh```を書き換えてください
* imageのビルドとコンテナの起動  
```
cd WestlabGCTCGUI/docker
bash launchContainer.sh
```

## 戯言
* 今後のことを考えると，websocketを使った方がいいかもしれない([Expressでの実装例](https://team-lab.github.io/skillup-nodejs/3/1.html))
	* 例えば，サーバ側でパラメータが書き換えられたときとか，処理が終わったときとか．
* ファイル名を```POST```とかで指定して送らせるのは鬼のように危ないな．```..```とか使えば実質どこでも行けちゃうわけだし．```read```も危ないが，writeは相当やばい
	* 読み込み，書き込み含め，パスを固定
	* ```apikey```みたいなのを作る？
* ~~DOM操作をもう少し，ちゃんとやろう~~結局同じ行数になりそうな感じだからちょっと保留