# WestlabGCTCGUI

(re)write JSON file from web browser.

* File operation, Front end, web server
* Node.js, Express, Docker  
* [La-Poプロジェクト](https://github.com/matzTada/La-Po)を適宜参照すること（特にExpress, JSまわり）

## To Do

* フロントエンドのcontactとかmenuとか細かいところの編集
* OK~~使い方とシステム図をまとめる~~
* OK~~Dockerの設定~~
	* OK~~大枠ができた~~
	* OK~~portとフォルダを外部から指定できるようにする~~
* OK~~このアプリ自体のconfigファイルを作る~~shell scriptにしました
* OK~~ファイルリスト表示→リストにボタンを付与→ボタンを押したらファイル読み込みを行う~~
* OK~~updatetimeの更新~~
* OK~~時刻も追加する？~~

## How To

### 共通

* 同じディレクトリ内なら「いくらでも」「動的に」JSONファイル追加できる

### with Docker
* 本番はこっちを使う
* application起動(docker imageのbuildとdocker containerのrun) 
```
cd WestlabGCTCGUI/docker
bash launchContainer.sh
```
* 設定変更(portとjsonファイルの場所)
	* ```WestlabGCTCGUI/docker/launchContainer.sh```を書き換えてください.
	* ```GUI_PORT``` : gui用のport
	* ```JSON_DIR``` : 各アプリケーションの設定が書かれたJSONファイルが入っているディレクトリの変更

### without Docker
* frontendのテストをするならこちらが便利．
* application起動(express applicationの起動)
```
cd GCTC_GUI/
bash start.sh
```
* 設定変更(portとjsonファイルの場所)
	* ```WestlabGCTCGUI/GCTC_GUI/start.sh```を書き換えてください(```#change here if you start express app without Docker```)と書いてあるところを変える．
	* ```PORT``` : gui用のport
	* ```JSON_FILE_DIR``` : 各アプリケーションの設定が書かれたJSONファイルが入っているディレクトリの変更

## System diagram when using Docker

<img src="https://raw.githubusercontent.com/matzTada/WestlabGCTCGUI/master/resources/system.png" alt="" width=100%>

## 戯言
* 今後のことを考えると，websocketを使った方がいいかもしれない([Expressでの実装例](https://team-lab.github.io/skillup-nodejs/3/1.html))
	* 例えば，サーバ側でパラメータが書き換えられたときとか，処理が終わったときとか．
* ファイル名を```POST```とかで指定して送らせるのは鬼のように危ないな．```..```とか使えば実質どこでも行けちゃうわけだし．```read```も危ないが，writeは相当やばい
	* 読み込み，書き込み含め，パスを固定
	* ```apikey```みたいなのを作る？
* ~~DOM操作をもう少し，ちゃんとやろう~~結局同じ行数になりそうな感じだからちょっと保留
