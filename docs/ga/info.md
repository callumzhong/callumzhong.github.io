---
sidebar_position: 1
title: GA4 教學
---

> 本教學僅列出筆者所知道的使用方式

## 前言

教學開始前，請注意瀏覽器外掛程式可阻擋 GA 獲取資料：

- [Chrome adblock](https://chrome.google.com/webstore/detail/adblock-%E2%80%94-best-ad-blocker/gighmmpiobklfepjocnamgkkbiglidom)
- [uBlock Origin](https://chrome.google.com/webstore/detail/ublock-origin/cjpalhdlnbpafiamejdnhcphjbkeiagm?hl=zh-TW)

使用 Google Analytics 時，可以用以下網址檢查是否有作用

[點我可以檢驗網站是否有運行 Google Analytics ](https://tagassistant.google.com/)

## 分析行銷廣告活動

UTM 的全名是 Urchin Tracking Module ，是 Google Analytics 提供給分析人員可以自訂寫入的連結標記。簡單來說，UTM 讓原網址後面會產生一段參數，凡是點擊這段 UTM 網址的流量都會記錄下流量的來源與流量在網站中的行爲，方便我們在 GA 中檢視分析，常用來評估行銷活動的成效。

> 使用以下網址建立 UTM
> https://ga-dev-tools.google/ga4/campaign-url-builder/

參數

- utm_source：用來辨識為您的資源帶來流量的廣告客戶、網站和出版物等等，例如 Google、newsletter4、billboard
- utm_medium：行銷媒介，例如單次點擊出價、橫幅、電子郵件
- utm_campaign：產品、標語、促銷代碼，例如 spring_sale
- utm_term：付費關鍵字。
- utm_content：用來區分廣告素材。舉例來說，要是同一封電子郵件中包含兩個行動號召文字連結，只要使用 utm_content 並為這兩個連結分別設定不同的值，就能判斷哪個版本的行動號召文字效果較好。

範例：

行銷人員負責當月夏季 EDM 電子報且假設電子報受到點擊並導回 https://example.com 可領取折扣 $50 消費點請分析行銷成效。

設定如下：
https://example.com?utm_source=summer-mailer&utm_medium=email&utm_campaign=summer-sale

utm_source: 設定 `summer-mailer` 夏季郵件
utm_medium: 設定 `email`
utm_campaign: 設定 `summer-sale` 夏季特賣

![](https://i.imgur.com/7sexVge.png)
![](https://i.imgur.com/8W60f5X.png)
![](https://i.imgur.com/hr7GWiO.png)

上面 3 個截圖分別不同類型 source , medium , campaign
都可以看到我們設定的參數。

延伸範例：
依會員資格不同消費點可以領到 50 , 100 , 150

設定如下：
https://example.com?utm_source=summer_mailer&utm_medium=email&utm_campaign=summer-sale&utm_content=50
https://example.com?utm_source=summer_mailer&utm_medium=email&utm_campaign=summer-sale&utm_content=100
https://example.com?utm_source=summer_mailer&utm_medium=email&utm_campaign=summer-sale&utm_content=150

![](https://i.imgur.com/dDsplh8.png)

我們利用 content 參數去區分相同 URL 相同廣吿，但細節不同的狀態。
目前教學上有截圖的流量都是即時報表的數據。

另外以 [官方資料](https://support.google.com/analytics/answer/7084038?hl=zh-Hant#zippy=%2C%E6%9C%AC%E6%96%87%E5%85%A7%E5%AE%B9) 以全部報表來說資料更新間隔最慢 48 小時

## 注意事項

[事件命名規則](https://support.google.com/analytics/answer/13316687?hl=zh-Hant&ref_topic=13367860&sjid=13904462657011106471-AP)

> 一旦使用了保留的前置字元或名稱，Analytics (分析) 將會顯示錯誤訊息。

[事件收集限制](https://support.google.com/analytics/answer/9267744?hl=zh-Hant&ref_topic=13367860&sjid=13904462657011106471-AP)

> Google Analytics (分析) 不會記錄超出限制的事件、事件參數以及使用者屬性

[自動收集的事件](https://support.google.com/analytics/answer/9234069?hl=zh-Hant&ref_topic=13367566&sjid=13904462657011106471-AP)

> 使用者與您的應用程式和/或網站進行基本互動時，就會觸發系統自動收集的事件 (如下表中事件名稱下方所示)。

[加強型事件評估](https://support.google.com/analytics/answer/9216061?hl=zh-Hant&ref_topic=13367566&sjid=13904462657011106471-AP)

> 加強型評估可讓您在 Google Analytics (分析) 介面中啟用選項 (事件)，評估使用者與您內容的互動情況。您不需要修改任何程式碼，只要為網站資料串流啟用相關選項，Google Analytics (分析) 代碼就會立即開始傳送事件

[建議事件](https://support.google.com/analytics/answer/9267735?hl=zh-Hant&ref_topic=13367566&sjid=13904462657011106471-AP)

> 開發人員請注意在網站或行動應用程式中加入這些事件，有助您評估額外功能和行為，並產生更實用的報表。這類事件需要搭配其他相關背景資訊進行評估才會有意義，因此不會自動傳送。
