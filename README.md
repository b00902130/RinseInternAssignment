# Rinse Assignment Todo List

### Usage

top的textfield可以新增代辦事項，輸入後會顯示於下列區域：
Todo區和Finished區，而deleted的item不會顯示出來。

放在Todo區的item，可以藉由click pin icon來標註為完成，點完便會跑進Finished區。
而Todo區和Finished區的右邊皆有兩個icon，可點按刪除(delete)和修改(edit)。

新增兩個button，一個用alert查看local storage，另一個清空所有資料。
-----------------------------------------------------------

### Local Storage

放在local strage的資料分類為

* localStorage.todoItems
* localStorage.finishedItems
* localStorage.deletedItems

todoItems會存放所有曾經加入過的項目，而finishedItems會存放目前狀態是finished的items，而deletdItems存放目前已經被刪除的項目。

所以可以藉由localStorage.deletedItems來查詢已經被刪除在頁面上看不到的項目。


### Author

written by Wilson Huang Ji
