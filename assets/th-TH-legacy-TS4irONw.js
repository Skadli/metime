System.register([],(function(e,t){"use strict";return{execute:function(){var t=e("languageName","ไทย"),o=e("checkEverySecond","ตรวจสอบทุก {0} วินาที"),a=e("retryCheckEverySecond","ลองใหม่ทุก {0} วินาที"),s=e("retriesDescription","จำนวนครั้งสูงสุดที่จะลองก่อนบริการถูกระบุว่าไม่สามารถใช้งานได้และส่งการแจ้งเตือน"),n=e("ignoreTLSError","ไม่สนใจข้อผิดพลาด TLS/SSL สำหรับเว็บไซต์ HTTPS"),r=e("upsideDownModeDescription","สลับสถานะ เช่น ถ้าบริการสามารถใช้งานได้จะถูกเปลี่ยนเป็นใช้งานไม่ได้"),i=e("maxRedirectDescription","จำนวนครั้งสูงสุดที่จะเปลี่ยนเส้นทาง, ตั้งเป็น 0 เพื่อปิดการเปลี่ยนเส้นทาง"),c=e("acceptedStatusCodesDescription","เลือกรหัสสถานะที่ถือว่าการตอบกลับสำเร็จ"),l=e("passwordNotMatchMsg","รหัสผ่านไม่ตรงกัน"),d=e("notificationDescription","การแจ้งเตือนต้องกำหนดให้มอนิเตอร์เพื่อให้สามารถใช้งานได้"),u=e("keywordDescription","ค้นหาคำสำคัญใน HTML หรือ JSON ของการตอบกลับ, คำสำคัญต้องคำนึงถึงตัวพิมพ์เล็กและตัวพิมพ์ใหญ่"),p=e("pauseDashboardHome","หยุดชั่วคราว"),m=e("deleteMonitorMsg","คุณแน่ใจหรือไม่ที่จะลบมอนิเตอร์?"),h=e("deleteNotificationMsg","คุณแน่ใจหรือไม่ที่จะลบการแจ้งเตือนสำหรับมอนิเตอร์ทั้งหมด?"),g=e("resolverserverDescription","Cloudflare เป็นเซิร์ฟเวอร์ค้นหาเริ่มต้น, คุณสามารถเปลี่ยนเซิร์ฟเวอร์ได้ตลอดเวลา"),S=e("rrtypeDescription","เลือกประเภท DNS Record ที่คุณต้องการจะมอนิเตอร์"),y=e("pauseMonitorMsg","คุณแน่ใจหรือไม่ที่จะหยุดมอนิเตอร์ชั่วคราว?"),D=e("enableDefaultNotificationDescription","การแจ้งเตือนนี้จะถูกเปิดโดยค่าเริ่มต้นสำหรับมอนิเตอร์ใหม่, คุณสามารถปิดการแจ้งเตือนสำหรับแต่ละมอนิเตอร์ได้"),T=e("clearEventsMsg","คุณแน่ใจหรือไม่ที่จะลบเหตุการณ์ทั้งหมดสำหรับมอนิเตอร์นี้?"),k=e("clearHeartbeatsMsg","คุณแน่ใจหรือไม่ที่จะลบประวัติการตรวจสอบทั้งหมดสำหรับมอนิเตอร์นี้?"),P=e("confirmClearStatisticsMsg","คุณแน่ใจหรือไม่ที่จะลบสถิติทั้งหมด?"),b=e("importHandleDescription",'เลือก "ข้ามรายการที่มีอยู่แล้ว" ถ้าคุณต้องการข้ามทุกมอนิเตอร์หรือการแจ้งเตือนที่มีชื่อซ้ำกัน, "เขียนทับ" จะลบทุกมอนิเตอร์หรือการแจ้งเตือนที่มีชื่อซ้ำกัน'),A=e("confirmImportMsg","คุณแน่ใจหรือไม่ที่จะนำเข้าข้อมูลสำรอง, กรุณาตรวจสอบว่าคุณเลือกข้อมูลที่ถูกต้อง"),v=e("twoFAVerifyLabel","โปรดกรอกกุญแจ 2FA ของคุณเพื่อยืนยัน:"),C=e("tokenValidSettingsMsg","กุญแจถูกต้อง, ตอนนี้คุณสามารถบันทึกการตั้งค่า 2FA ของคุณได้แล้ว"),M=e("confirmEnableTwoFAMsg","คุณแน่ใจหรือไม่ที่จะเปิดใช้งาน 2FA?"),w=e("confirmDisableTwoFAMsg","คุณแน่ใจหรือไม่ที่จะปิดใช้งาน 2FA?"),I=e("Settings","การตั้งค่า"),f=e("Dashboard","แผงควบคุม"),R=e("Language","ภาษา"),N=e("Appearance","หน้าตา"),L=e("Theme","หน้าตา"),U=e("General","ทั่วไป"),E=e("Version","เวอร์ชั่น"),H=e("List","รายการ"),x=e("Add","เพิ่ม"),F=e("Up","ใช้งานได้"),O=e("Down","ไม่สามารถใช้งานได้"),G=e("Pending","รอดำเนินการ"),K=e("Unknown","ไม่ทราบ"),W=e("Pause","หยุดชั่วคราว"),B=e("Name","ชื่อ"),V=e("Status","สถานะ"),z=e("DateTime","วันที่และเวลา"),j=e("Message","ข้อความ"),q=e("Resume","ดำเนินการต่อ"),J=e("Edit","แก้ไข"),Q=e("Delete","ลบ"),Z=e("Current","ปัจจุบัน"),X=e("Uptime","เวลาที่ใช้งานได้"),Y=e("days","วัน"),_=e("day","วัน"),$=e("hour","ชั่วโมง"),ee=e("Response","การตอบสนอง"),te=e("Ping","การตอบสนอง"),oe=e("Keyword","คำสำคัญ"),ae=e("URL","URL"),se=e("Hostname","ชื่อโฮสต์"),ne=e("Port","พอร์ต"),re=e("Retries","จำนวนครั้งที่จะลองใหม่"),ie=e("Advanced","ขั้นสูง"),ce=e("needPushEvery","คุณควรเรียก URL นี้ทุก {0} วินาที"),le=e("pushOptionalParams","ตัวแปรเสริม: {0}"),de=e("Save","บันทึก"),ue=e("Notifications","การแจ้งเตือน"),pe=e("Light","สว่าง"),me=e("Dark","มืด"),he=e("Auto","อัตโนมัติ"),ge=e("Normal","ปกติ"),Se=e("Bottom","ด้านล่าง"),ye=e("None","ไม่มี"),De=e("Timezone","เขตเวลา"),Te=e("Logout","ออกจากระบบ"),ke=e("Leave","ออก"),Pe=e("Confirm","ยืนยัน"),be=e("Yes","ใช่"),Ae=e("No","ไม่"),ve=e("Username","ชื่อผู้ใช้"),Ce=e("Password","รหัสผ่าน"),Me=e("Login","เข้าสู่ระบบ"),we=e("Email","อีเมล"),Ie=e("Test","ทดสอบ"),fe=e("Export","ส่งออก"),Re=e("Import","นำเข้า"),Ne=e("respTime","ระยะเวลาการตอบสนอง (ms)"),Le=e("notAvailableShort","ไม่สามารถใช้งานได้"),Ue=e("Create","สร้าง"),Ee=e("Events","เหตุการณ์"),He=e("Heartbeats","ประวัติการตรวจสอบ"),xe=e("backupDescription","คุณสามารถสำรองข้อมูลการแจ้งเตือนและมอนิเตอร์ทั้งหมดไว้ได้ในไฟล์ JSON"),Fe=e("backupDescription2","หมายเหตุ : ประวัติและข้อมูลเหตการณ์จะไม่ถูกสำรอง"),Oe=e("backupDescription3","ข้อมูลที่ละเอียดอ่อนเช่นกุญแจการแจ้งเตือนจะรวมอยู่ในไฟล์ข้อมูลสำรอง, โปรดเก็บข้อมูลสำรองอย่างปลอดภัย"),Ge=e("alertNoFile","กรุณาเลือกไฟล์ที่จะใช้งาน"),Ke=e("alertWrongFileType","กรุณาเลือกไฟล์ที่เป็น JSON"),We=e("Overwrite","เขียนทับ"),Be=e("Options","ตัวเลือก"),Ve=e("Active","ใช้งาน"),ze=e("Inactive","ไม่ใช้งาน"),je=e("Token","กุญแจ"),qe=e("Tags","แท็ก"),Je=e("color","สี"),Qe=e("Gray","เทา"),Ze=e("Red","แดง"),Xe=e("Orange","ส้ม"),Ye=e("Green","เขียว"),_e=e("Blue","น้ำเงิน"),$e=e("Indigo","ม่วง"),et=e("Purple","ม่วง"),tt=e("Pink","ชมพู"),ot=e("statusPageNothing","ไม่มีอะไรตรงนี้ !, กรุณาเพิ่มกลุ่มหรือมอนิเตอร์"),at=e("defaultNotificationName","การแจ้งเตือน {notification} ของฉัน ({number})"),st=e("here","ที่นี่"),nt=e("Required","จำเป็น"),rt=e("telegram","Telegram"),it=e("wayToGetTelegramToken","คุณสามารถรับกุญแจได้จาก {0}."),ct=e("supportTelegramChatID","รองรับ แชทส่วนตัว, แชทกลุ่ม, ไอดีแชท"),lt=e("wayToGetTelegramChatID","คุณสามารถรับ ID แชทของคุณได้โดยส่งข้อความไปยังบอทและไปที่ URL นี้เพื่อดู chat_id :"),dt=e("chatIDNotFound","ไม่พบไอดีแชท, กรุณาส่งข้อความไปที่บอท"),ut=e("webhook","Webhook"),pt=e("webhookJsonDesc","{0} ดีสำหรับเซิร์ฟเวอร์ HTTP สมัยใหม่เช่น Express.js"),mt=e("webhookFormDataDesc","{multipart} ดีสำหรับ PHP, ข้อมูล JSON จะต้องถูกประมวลผลด้วย {decodeFunction}"),ht=e("smtp","Email (SMTP)"),gt=e("secureOptionNone","None / STARTTLS (25, 587)"),St=e("secureOptionTLS","TLS (465)"),yt=e("emailCustomSubject","หัวข้อที่กำหนดเอง"),Dt=e("smtpCC","CC"),Tt=e("smtpBCC","BCC"),kt=e("discord","Discord"),Pt=e("wayToGetDiscordURL","คุณสามารถทำได้โดยการไปที่ Server Settings -> Integrations -> Create Webhook"),bt=e("teams","Microsoft Teams"),At=e("wayToGetTeamsURL","คุณสามารถเรียนรู้วิธีการสร้าง Webhook URL {0}"),vt=e("signal","Signal"),Ct=e("Recipients","ผู้รับ"),Mt=e("needSignalAPI","คุณต้องมี Signal Client ที่มี Rest API"),wt=e("wayToCheckSignalURL","คุณสามารถตรวจสอบ URL นี้เพื่อดูวิธีตั้งค่า :"),It=e("signalImportant","สำคัญ: คุณไม่สามารถผสมกลุ่มและตัวเลขในผู้รับได้!"),ft=e("gotify","Gotify"),Rt=e("Priority","ลำดับความสำคัญ"),Nt=e("slack","Slack"),Lt=e("aboutWebhooks","ข้อมูลเพิ่มเติมสำหรับ Webhooks : {0}"),Ut=e("aboutChannelName","ใส่ชื่อห้องใน {0} ในช่องชื่อห้องถ้าต้องการที่จะข้าม Webhook, เช่น: #ช่องอื่นๆ"),Et=e("aboutKumaURL","ถ้าคุณไม่ใส่ข้อมูลในช่อง Uptime Kuma URL ค่าเริ่มต้นจะเป็นจะเป็น Uptime Kuma Github"),Ht=e("emojiCheatSheet","ตาราง Emoji : {0}"),xt=e("pushover","Pushover"),Ft=e("pushy","Pushy"),Ot=e("PushByTechulus","Push by Techulus"),Gt=e("octopush","Octopush"),Kt=e("promosms","PromoSMS"),Wt=e("clicksendsms","ClickSend SMS"),Bt=e("lunasea","LunaSea"),Vt=e("apprise","Apprise (รองรับการแจ้งเตือนมากกว่า 50 บริการ)"),zt=e("GoogleChat","Google Chat (สำหรับ Google Workspace เท่านั้น)"),jt=e("pushbullet","Pushbullet"),qt=e("line","Line Messenger"),Jt=e("mattermost","Mattermost"),Qt=e("Device","อุปกรณ์"),Zt=e("pushoverDesc1","ลำดับความสำคัญฉุกเฉิน (2) มีการหมดเวลาเริ่มต้น 30 วินาทีระหว่างการลองใหม่และจะหมดอายุหลังจาก 1 ชั่วโมง"),Xt=e("pushoverDesc2","ถ้าคุณต้องการจะส่งการแจ้งเตือนไปยังอุปกรณ์อื่นๆ สามารถกำหนดได้ที่ช่องอุปกรณ์"),Yt=e("octopushTypePremium","พรีเมี่ยม (เร็ว - แนะนำสำหรับการแจ้งเตือน)"),_t=e("octopushTypeLowCost","ต้นทุนต่ำ (ช้า - บางครั้งจะถูกบล็อกโดยผู้ให้บริการ)"),$t=e("checkPrice","ตรวจสอบราคาของ {0} :"),eo=e("apiCredentials","ข้อมูลการตรวจสอบสิทธิ์ API"),to=e("octopushLegacyHint","คุณใช้เวอร์ชันดั้งเดิมของ Octopush (2011 - 2020) หรือเวอร์ชันใหม่หรือไม่?"),oo=e("octopushPhoneNumber","หมายเลขโทรศัพท์ (รูปแบบสากล เช่น +33612345678) "),ao=e("octopushSMSSender","ชื่อผู้ส่ง SMS : ความยาว 3 - 11 ตัวอักษร, ตัวเลข และช่องว่าง (a-zA-Z0-9 )"),so=e("appriseInstalled","Apprise ถูกติดตั้งแล้ว"),no=e("appriseNotInstalled","Apprise ยังไม่ถูกติดตั้ง {0}"),ro=e("lineDevConsoleTo","Line Developers Console - {0}"),io=e("wayToGetLineChannelToken","ขั้นแรกให้เข้า {0} สร้างผู้ให้บริการและช่องทาง (Messaging API) จากนั้นคุณจะได้รับกุญแจการเข้าถึงช่องและไอดีผู้ใช้จากรายการเมนูที่กล่าวถึงข้างต้น"),co=e("aboutIconURL",'คุณสามารถระบุลิงก์รูปภาพใน "URL ไอคอน" เพื่อแทนที่รูปภาพโปรไฟล์เริ่มต้น จะไม่ถูกใช้หากมีการตั้งค่า Icon Emoji'),lo=e("aboutMattermostChannelName",'คุณลบช่องเริ่มต้นที่ Webhook โพสต์ได้ด้วยการป้อนชื่อช่องลงในช่อง "ชื่อช่อง" ต้องเปิดใช้งานในการตั้งค่า Mattermost Webhook เช่น #ช่องอื่นๆ'),uo=e("matrix","Matrix"),po=e("promosmsTypeEco","SMS ECO - ราคาถูก แต่ช้าและมักจะโอเวอร์โหลด จำกัดเฉพาะผู้รับในโปแลนด์"),mo=e("promosmsTypeFlash","SMS FLASH - ข้อความจะแสดงบนอุปกรณ์ของผู้รับโดยอัตโนมัติ จำกัดเฉพาะผู้รับในโปแลนด์"),ho=e("promosmsTypeFull","SMS FULL - SMS ระดับพรีเมียม คุณสามารถใช้ชื่อผู้ส่งของคุณได้ (คุณต้องลงทะเบียนชื่อก่อน) เชื่อถือได้สำหรับการแจ้งเตือน"),go=e("promosmsTypeSpeed","SMS SPEED - ลำดับความสำคัญสูงสุดในระบบ รวดเร็วและเชื่อถือได้ แต่มีค่าใช้จ่ายสูง (ประมาณสองเท่าของราคาเต็ม SMS)"),So=e("promosmsPhoneNumber","หมายเลขโทรศัพท์ (สำหรับผู้รับโปแลนด์ คุณสามารถข้ามรหัสพื้นที่ได้)"),yo=e("promosmsSMSSender","ชื่อผู้ส่ง SMS : ชื่อที่ลงทะเบียนล่วงหน้าหรือหนึ่งในค่าเริ่มต้น: InfoSMS, ข้อมูล SMS, MaxSMS, INFO, SMS"),Do=e("matrixHomeserverURL","URL ของโฮมเซิร์ฟเวอร์ (พร้อม http(s):// และพอร์ตเสริม)"),To=e("matrixDesc1","คุณค้นหารหัสห้องภายในได้โดยดูในส่วนขั้นสูงของการตั้งค่าห้องในไคลเอ็นต์ Matrix มันควรจะมีลักษณะเช่น !PMdRCpsIfLwsfjIye6:kiznick.server."),ko=e("matrixDesc2","ขอแนะนำเป็นอย่างยิ่งให้คุณสร้างผู้ใช้ใหม่และอย่าใช้โทเค็นการเข้าถึงของผู้ใช้ Matrix ของคุณเอง เนื่องจากจะทำให้สามารถเข้าถึงบัญชีของคุณและห้องทั้งหมดที่คุณเข้าร่วม ให้สร้างผู้ใช้ใหม่และเชิญเฉพาะห้องที่คุณต้องการรับการแจ้งเตือนแทน คุณสามารถรับโทเค็นเพื่อการเข้าถึงได้โดยเรียกใช้ {0}"),Po=e("Method","วิธี"),bo=e("Body","เนื้อหา"),Ao=e("Headers","ส่วนหัว"),vo=e("PushUrl","Push URL"),Co=e("HeadersInvalidFormat","เนื้อหาคำขอส่วนหัวไม่ใช่ JSON ที่ถูกต้อง: "),Mo=e("BodyInvalidFormat","เนื้อหาคำขอไม่ใช่ JSON ที่ถูกต้อง : "),wo=e("clearDataOlderThan","เก็บข้อมูลมอนิเตอร์ {0} วัน"),Io=e("PasswordsDoNotMatch","รหัสผ่านไม่ตรงกัน"),fo=e("records","บันทึก"),Ro=e("steamApiKeyDescription","สำหรับการมอนิเตอร์ Steam Game Server คุณต้องมี Steam Web-API key, คุณสามารถสมัครได้จากที่นี่ : "),No=e("topic","หัวข้อ"),Lo=e("topicExplanation","หัวข้อ MQTT ที่จะมอนิเตอร์"),Uo=e("successMessage","ข้อความที่จะถือว่าประสบความสำเร็จ"),Eo=e("successMessageExplanation","ข้อความ MQTT ที่จะถือว่าประสบความสำเร็จ"),Ho=e("recent","ล่าสุด"),xo=e("Done","สำเร็จ"),Fo=e("Info","ข้อมูล"),Oo=e("Security","ความปลอดภัย"),Go=e("Default","ค่าเริ่มต้น"),Ko=e("Title","หัวข้อ"),Wo=e("Content","เนื้อหา"),Bo=e("Style","สไตล์"),Vo=e("info","ข้อมูล"),zo=e("warning","แจ้งเตือน"),jo=e("danger","อันตราย"),qo=e("primary","หลัก"),Jo=e("light","สว่าง"),Qo=e("dark","มืด"),Zo=e("Post","โพสต์"),Xo=e("Created","สร้าง"),Yo=e("Unpin","เลิกตรึง"),_o=e("Description","รายละเอียด"),$o=e("Services","บริการ"),ea=e("Discard","ทิ้ง"),ta=e("Cancel","ยกเลิก"),oa=e("shrinkDatabaseDescription","ทริกเกอร์ฐานข้อมูล VACUUM สำหรับ SQLite หากฐานข้อมูลของคุณถูกสร้างขึ้นหลังจากเวอร์ชั่น 1.10.0 แสดงว่า AUTO_VACUUM เปิดใช้งานอยู่แล้วและไม่จำเป็นต้องดำเนินการนี้"),aa=e("serwersms","SerwerSMS.pl"),sa=e("serwersmsAPIUser","API Username (incl. webapi_ prefix)"),na=e("serwersmsAPIPassword","API Password"),ra=e("serwersmsPhoneNumber","หมายเลขโทรศัพท์"),ia=e("serwersmsSenderName","ชื่อผู้ส่ง SMS (ลงทะเบียนผ่านหน้าควบคุม)"),ca=e("stackfield","Stackfield"),la=e("Customize","ปรับแต่ง"),da=e("smtpDkimSettings","การตั้งค่า DKIM"),ua=e("smtpDkimDesc","โปรดดู Nodemailer DKIM {0} สำหรับการใช้งาน"),pa=e("documentation","คู่มือการใช้งาน"),ma=e("smtpDkimDomain","ชื่อโดเมน"),ha=e("smtpDkimKeySelector","Key Selector"),ga=e("smtpDkimPrivateKey","Private Key"),Sa=e("smtpDkimHashAlgo","อัลกอริทึมแฮช (ไม่บังคับ)"),ya=e("smtpDkimheaderFieldNames","คีย์ส่วนหัวสำหรับลงชื่อ (ไม่บังคับ)"),Da=e("smtpDkimskipFields","Header Keys ไม่ต้องเซ็น (ไม่บังคับ)"),Ta=e("gorush","Gorush"),ka=e("alerta","Alerta"),Pa=e("alertaApiEndpoint","API Endpoint"),ba=e("alertaEnvironment","Environment"),Aa=e("alertaApiKey","กุญแจ API"),va=e("alertaAlertState","แจ้งเตือนสถานะ"),Ca=e("alertaRecoverState","กู้คืนสถานะ"),Ma=e("deleteStatusPageMsg","คุณแน่ใจหรือไม่ว่าต้องการลบหน้าสถานะนี้"),wa=e("Proxies","พร็อกซี"),Ia=e("enabled","เปิดใช้งานแล้ว"),fa=e("setAsDefault","ตั้งเป็นค่าเริ่มต้น"),Ra=e("deleteProxyMsg","คุณแน่ใจหรือไม่ว่าต้องการลบพร็อกซีสำหรับมอนิเตอร์ทั้งหมด?"),Na=e("proxyDescription","ต้องตั้งค่ามอนิเตอร์ให้ใช้พร็อกซีเพื่อให้ใช้งานได้"),La=e("enableProxyDescription","พร็อกซีนี้จะไม่ส่งผลต่อมอนิเตอร์จนกว่าจะเปิดใช้งาน คุณสามารถควบคุมการปิดใช้งานพร็อกซีชั่วคราวจากมอนิเตอร์ทั้งหมดได้ที่ส่วนสถานะการเปิดใช้งาน"),Ua=e("setAsDefaultProxyDescription","พร็อกซีนี้จะถูกเปิดโดนค่าเริ่มต้นสำหรับมอนิเตอร์ใหม่, คุณสามารถปิดการแจ้งเตือนสำหรับแต่ละมอนิเตอร์ได้"),Ea=e("Valid","ถูกต้อง"),Ha=e("Invalid","ไม่ถูกต้อง"),xa=e("AccessKeyId","กุญแจสิทธิ ID"),Fa=e("SecretAccessKey","กุญแจสิทธิ Secret"),Oa=e("PhoneNumbers","PhoneNumbers"),Ga=e("TemplateCode","รหัสเทมเพลต"),Ka=e("SignName","ป้ายชื่อ"),Wa=e("WebHookUrl","WebHookUrl"),Ba=e("SecretKey","SecretKey"),Va=e("Platform","แพลตฟอร์ม"),za=e("Huawei","Huawei"),ja=e("High","สูง"),qa=e("Retry","ลองใหม่"),Ja=e("Topic","หัวข้อ"),Qa=e("User","ผู้ใช้"),Za=e("Installed","ติดตั้งแล้ว"),Xa=e("Running","กำลังทำงาน"),Ya=e("Start","เริ่ม"),_a=e("Stop","หยุด"),$a=e("Slug","ชื่อ"),es=e("startOrEndWithOnly","เริ่มหรือจบด้วย {0} เท่านั้น"),ts=e("Next","ต่อไป"),os=e("Backup","สำรองข้อมูล"),as=e("About","เกี่ยวกับ"),ss=e("wayToGetCloudflaredURL","(ดาวโหลด cloudflared จาก {0})"),ns=e("cloudflareWebsite","เว็บไซต์ Cloudflare"),rs=e("onebotHttpAddress","ที่อยู่ HTTP OneBot"),is=e("onebotMessageType","ชนิดข้อความ OneBot"),cs=e("onebotGroupMessage","กลุ่ม"),ls=e("onebotPrivateMessage","ส่วนตัว"),ds=e("onebotUserOrGroupId","กลุ่ม / ไอดีผู้ใช้"),us=e("onebotSafetyTips","เพื่อความปลอดภัย จำเป็นต้องตั้งค่ากุญแจการเข้าถึง"),ps=e("signedInDisp","เข้าใช้งานในฐานะ {0}"),ms=e("signedInDispDisabled","ปิดการยืนยันตัวตน"),hs=e("endpoint","endpoint"),gs=e("octopushAPIKey",'"API key" จากข้อมูลยืนยันตัวตน HTTP API ในแผงควบคุม'),Ss=e("octopushLogin",'"Login" จากข้อมูลยืนยันตัวตน HTTP API ในแผงควบคุม'),ys=e("promosmsLogin","API Login Name"),Ds=e("promosmsPassword","API Password"),Ts=e("pushyAPIKey","Secret API Key"),ks=e("pushyToken","Device token"),Ps=e("wayToGetClickSendSMSToken","คุณสามารถรับ API Username และ API Key ได้จาก {0}"),bs=e("wayToGetLineNotifyToken","คุณสามารถรับ access token ได้จาก {0}"),As=e("resendEveryXTimes","ส่งซ้ำทุก {0} ครั้ง"),vs=e("resendDisabled","การส่งซ้ำถูกปิดใช้งาน"),Cs=e("dnsPortDescription","พอร์ตของเซิร์ฟเวอร์ DNS, ค่าเริ่มต้นคือ 53, คุณสามารถเปลี่ยนพอร์ตตอนไหนก็ได้"),Ms=e("error","เกิดข้อผิดพลาด"),ws=e("critical","วิกฤต"),Is=e("wayToGetPagerDutyKey",'คุณสามารถรับคีย์ได้โดยการไปที่ Service -> Service Directory -> (Select a service) -> Integrations -> Add integration, และค้นหา "Events API V2", สำหรับข้อมูลเพิ่มเติม {0}'),fs=e("Authentication","การตรวจสอบสิทธิ์"),Rs=e("HomeAssistant","Home Assistant"),Ns=e("RadiusSecret","Radius Secret"),Ls=e("RadiusSecretDescription","แบ่งปันคีย์ลับระหว่างผู้ใช้งานและเซิร์ฟเวอร์"),Us=e("RadiusCalledStationId","Called Station Id"),Es=e("RadiusCalledStationIdDescription","Identifier of the called device"),Hs=e("RadiusCallingStationId","Calling Station Id"),xs=e("RadiusCallingStationIdDescription","Identifier of the calling device"),Fs=e("Query","Query"),Os=e("settingsCertificateExpiry","วันหมดอายุของใบรับรอง TLS"),Gs=e("certificationExpiryDescription","การตรวจสอบ HTTPS จะแจ้งเตือนถ้าใบอนุญาติ TLS จะหมดอายุใน:"),Ks=e("deleteDockerHostMsg","คุณแน่ใจหรือไม่ที่จะลบ Docker host นี้สำหรับการมอนิเตอร์ทั้งหมด?"),Ws=e("socket","Socket"),Bs=e("tcp","TCP / HTTP"),Vs=e("Domain","โดเมน"),zs=e("Workstation","Workstation"),js=e("disableCloudflaredNoAuthMsg","คุณอยู่ในโหมดไม่มีการตรวจสอบสิทธิ์, ไม่จำเป็นต้องมีรหัสผ่าน"),qs=e("trustProxyDescription","เชื่อ Header 'X-Forwarded-*', คุณควรเปิดใช้งาน ถ้าคุณต้องการ IP ของผู้ใช้ที่ถูกต้องและ Uptime Kuma อยู่ข้างหลัง Nginx หรือ Apache"),Js=e("Examples","ตัวอย่าง"),Qs=e("webhookAdditionalHeadersTitle","Header เพิ่มเติม"),Zs=e("webhookAdditionalHeadersDesc","กำหนด Header ที่จะส่งไปหร้อมกับ Webhook"),Xs=e("Custom","กำหนดเอง"),Ys=e("Game","เกม"),_s=e("statusMaintenance","การซ่อมบำรุง"),$s=e("Maintenance","การซ่อมบำรุง"),en=e("Monitor","มอนิเตอร์ | มอนิเตอร์"),tn=e("markdownSupported","รองรับ Markdown"),on=e("Help","ช่วยเหลือ"),an=e("ZohoCliq","ZohoCliq"),sn=e("backupOutdatedWarning","ไม่ได้รับการพัฒนาแล้ว : ไม่สามารถสร้างหรือกูข้อมูลสำรองได้สมบูรณ์ เนื่องจากมีฟีเจอร์ใหม่เพิ่มขึ้นมากและการแบ็คอัพไม่ได้ถูกพัฒนา"),nn=e("backupRecommend","กรุณาแบ็คอัพข้อมูลทั้งหมดหรือโฟลเดอร์ Data (./data/) โดยตรงแทน"),rn=e("Optional","ไม่จำเป็น"),cn=e("squadcast","Squadcast"),ln=e("or","หรือ"),dn=e("recurringInterval","ช่วงเวลา"),un=e("Recurring","ทำซ้ำ"),pn=e("pagertreeCritical","วิกฤต"),mn=e("pagertreeDoNothing","ไม่ต้องทำอะไร"),hn=e("pagertreeResolve","แก้ไขอัตโนมัติ"),gn=e("wayToGetPagerTreeIntegrationURL","หลังจากสร้างการรวม Uptime Kuma ใน PagerTree แล้ว ให้คัดลอก Endpoint, ดูรายละเอียดทั้งหมด {0}"),Sn=e("telegramSendSilently","ส่งอย่างเงียบ ๆ"),yn=e("telegramProtectContent","ป้องกันการส่งต่อ/บันทึก"),Dn=e("strategyManual","ตั่งให้ใช้งาน/ไม่ใช้งานด้วยตนเอง"),Tn=e("warningTimezone","ใช้เขตเวลาของเซิร์ฟเวอร์"),kn=e("weekdayShortMon","จันทร์"),Pn=e("weekdayShortTue","วันอังคาร"),bn=e("weekdayShortWed","พุธ"),An=e("weekdayShortThu","พฤหัสบดี"),vn=e("weekdayShortFri","ศุกร์"),Cn=e("weekdayShortSat","เสาร์"),Mn=e("weekdayShortSun","อาทิตย์"),wn=e("dayOfWeek","วันในสัปดาห์"),In=e("dayOfMonth","วันในเดือน"),fn=e("telegramMessageThreadID","(ตัวเลือก) ไอดีเทรดข้อความ"),Rn=e("telegramMessageThreadIDDescription","ตัวระบุที่ไม่ซ้ำซึ่งเป็นทางเลือกสำหรับเธรดข้อความเป้าหมาย (หัวข้อ) ของฟอรัม สำหรับฟอรัมซูเปอร์กรุ๊ปเท่านั้น"),Nn=e("sameAsServerTimezone","เช่นเดียวกับเขตเวลาของเซิร์ฟเวอร์"),Ln=e("startDateTime","วันที่/เวลาเริ่มต้น"),Un=e("endDateTime","วันที่/เวลาสิ้นสุด"),En=e("cronSchedule","กำหนดการ: "),Hn=e("invalidCronExpression","นิพจน์ Cron ไม่ถูกต้อง: {0}"),xn=e("cronExpression","นิพจน์ Cron"),Fn=e("lastDay","วันสุดท้าย"),On=e("lastDay1","วันสุดท้ายของเดือน"),Gn=e("lastDay2","วันที่ 2 สุดท้ายของเดือน"),Kn=e("lastDay3","วันที่ 3 สุดท้ายของเดือน"),Wn=e("lastDay4","วันที่ 4 สุดท้ายของเดือน"),Bn=e("pauseMaintenanceMsg","แน่ใจไหมว่าต้องการหยุดชั่วคราว"),Vn=e("statusPageMaintenanceEndDate","จบ"),zn=e("statusPageRefreshIn","รีโหลดใน: {0}"),jn=e("telegramSendSilentlyDescription","ส่งข้อความอย่างเงียบๆ ผู้ใช้จะได้รับการแจ้งเตือนโดยไม่มีเสียง"),qn=e("telegramProtectContentDescription","หากเปิดใช้งาน ข้อความบอทใน Telegram จะได้รับการปกป้องจากการส่งต่อและการบันทึก"),Jn=e("dnsCacheDescription","อาจจะทำงานไม่ได้กับ IPv6, ปิดใช้งานถ้าเจอปัญหา"),Qn=e("IconUrl","URL ไอคอน"),Zn=e("Enable","เปิดใช้งาน"),Xn=e("Disable","ปิดใช้งาน"),Yn=e("Clone","โคลนมอนิเตอร์"),_n=e("cloneOf","ชื่อเล่นมอนิเตอร์"),$n=e("wayToGetZohoCliqURL","คุณสามารถดูวิธีการสร้าง Webhook URL {0}"),er=e("Home","หน้าหลัก"),tr=e("loadingError","ไม่สามารถดึงข้อมูลได้ โปรดลองอีกครั้งในภายหลัง"),or=e("plugin","ปลั้กอิน | ปลั้กอิน"),ar=e("install","ติดตั้ง"),sr=e("installing","กำลังติดตั้ง"),nr=e("uninstall","ถอนการติดตั้ง"),rr=e("uninstalling","กำลังถอนการติดตั้ง"),ir=e("confirmUninstallPlugin","แน่ใจหรือไม่ว่าต้องการถอนการติดตั้งปลั้กอินนี้?"),cr=e("recurringIntervalMessage","ดำเนินการทุกวัน | ดำเนินการทุก {0} วัน"),lr=e("chromeExecutableAutoDetect","ตรวจจับอัตโนมัติ"),dr=e("chromeExecutableDescription","สำหรับผู้ใช้งาน Docker, ถ้ายังไม่ได้ติดตั่ง Chromium, อาจจะเสียเวลาในการติดตั่งและแสดงผลการทดสอบเพิ่มเติม, ใช้พื้นที่ประมาณ 1GB"),ur=e("notificationRegional","ภูมิภาค"),pr=e("timeoutAfter","หมดเวลาหลังจาก {0} วินาที"),mr=e("Select","เลือก");e("default",{languageName:t,checkEverySecond:o,retryCheckEverySecond:a,retriesDescription:s,ignoreTLSError:n,upsideDownModeDescription:r,maxRedirectDescription:i,acceptedStatusCodesDescription:c,passwordNotMatchMsg:l,notificationDescription:d,keywordDescription:u,pauseDashboardHome:p,deleteMonitorMsg:m,deleteNotificationMsg:h,resolverserverDescription:g,rrtypeDescription:S,pauseMonitorMsg:y,enableDefaultNotificationDescription:D,clearEventsMsg:T,clearHeartbeatsMsg:k,confirmClearStatisticsMsg:P,importHandleDescription:b,confirmImportMsg:A,twoFAVerifyLabel:v,tokenValidSettingsMsg:C,confirmEnableTwoFAMsg:M,confirmDisableTwoFAMsg:w,Settings:I,Dashboard:f,"New Update":"อัพเดทใหม่",Language:R,Appearance:N,Theme:L,General:U,"Primary Base URL":"URL หลัก",Version:E,"Check Update On GitHub":"ตรวจสอบการอัปเดตบน GitHub",List:H,Add:x,"Add New Monitor":"เพิ่มมอนิเตอร์ใหม่","Quick Stats":"สถิติด่วน",Up:F,Down:O,Pending:G,Unknown:K,Pause:W,Name:B,Status:V,DateTime:z,Message:j,"No important events":"ไม่มีเหตการณ์ที่สำคัญ",Resume:q,Edit:J,Delete:Q,Current:Z,Uptime:X,"Cert Exp.":"วันหมดอายุใบรับรอง",days:Y,day:_,"-day":"-วัน",hour:$,"-hour":"-ชั่วโมง",Response:ee,Ping:te,"Monitor Type":"ประเภทมอนิเตอร์",Keyword:oe,"Friendly Name":"ชื่อที่เป็นมิตร",URL:ae,Hostname:se,Port:ne,"Heartbeat Interval":"ระยะเวลาระหว่างการทดสอบ",Retries:re,"Heartbeat Retry Interval":"ระยะห่างระหว่างการทดสอบใหม่หลังจากไม่สำเร็จ",Advanced:ie,"Upside Down Mode":"โหมดสลับ","Max. Redirects":"จำนวนการเปลี่ยนเส้นทางสูงสุด","Accepted Status Codes":"รหัสสถานะที่ยอมรับ","Push URL":"URL เป้าหมาย",needPushEvery:ce,pushOptionalParams:le,Save:de,Notifications:ue,"Not available, please setup.":"ไม่พร้อมใช้งาน, กรุณาตั้งค่า","Setup Notification":"ตั้งค่าการแจ้งเตือน",Light:pe,Dark:me,Auto:he,"Theme - Heartbeat Bar":"หน้าตา - แถบการตอบสนอง",Normal:ge,Bottom:Se,None:ye,Timezone:De,"Search Engine Visibility":"การมองเห็นของเครื่องมือค้นหา","Allow indexing":"อนุญาตให้สร้างดัชนี","Discourage search engines from indexing site":"ปฏิเสธเครื่องมือค้นหาไม่ให้สร้างดัชนีของเว็บไซต์","Change Password":"เปลี่ยนรหัสผ่าน","Current Password":"รหัสผ่านปัจจุบัน","New Password":"รหัสผ่านใหม่","Repeat New Password":"ยืนยันรหัสผ่านใหม่","Update Password":"อัพเดทรหัสผ่าน","Disable Auth":"ปิดใช้งานการตรวจสอบสิทธิ์","Enable Auth":"เปิดใช้งานการตรวจสอบสิทธิ์","disableauth.message1":"คุณต้องการที่จะ <strong>ปิดใช้งานระบบรับรองความถูกต้องใช่หรือไม่</strong>?","disableauth.message2":"ระบบนี้ถูกออกแบบมาเพื่อการใช้งานกับระบบรับรองความถูกต้องของบุคคลที่สามเช่น Cloudflare Access, Authelia หรือวิธีการอื่นๆ","Please use this option carefully!":"โปรดใช้ความระมัดระวังในการเลือกใช้งานระบบนี้ !",Logout:Te,Leave:ke,"I understand, please disable":"ฉันเข้าใจแล้ว, กรุณาปิดการใช้งาน",Confirm:Pe,Yes:be,No:Ae,Username:ve,Password:Ce,"Remember me":"จดจำฉันไว้",Login:Me,"No Monitors, please":"ไม่มีมอนิเตอร์, กรุณา","add one":"สร้าง","Notification Type":"ประเภทการแจ้งเตือน",Email:we,Test:Ie,"Certificate Info":"ข้อมูลใบรับรอง","Resolver Server":"เซิร์ฟเวอร์ที่ค้นหา","Resource Record Type":"ประเภท DNS Record","Last Result":"ผลล่าสุด","Create your admin account":"สร้างบัญชีผู้ดูแลระบบ","Repeat Password":"ยืนยันรหัสผ่าน","Import Backup":"นำเข้าข้อมูลสำรอง","Export Backup":"ส่งออกข้อมูลสำรอง",Export:fe,Import:Re,respTime:Ne,notAvailableShort:Le,"Default enabled":"เปิดใช้งานโดยค่าเริ่มต้น","Apply on all existing monitors":"ใช้กับมอนิเตอร์ทั้งหมด",Create:Ue,"Clear Data":"ล้างข้อมูล",Events:Ee,Heartbeats:He,"Auto Get":"ดึงอัตโนมัติ",backupDescription:xe,backupDescription2:Fe,backupDescription3:Oe,alertNoFile:Ge,alertWrongFileType:Ke,"Clear all statistics":"ล้างข้อมูลสถิติทั้งหมด","Skip existing":"ข้ามรายการที่มีอยู่แล้ว",Overwrite:We,Options:Be,"Keep both":"เก็บทั้งสอง","Verify Token":"ยืนยันกุญแจ","Setup 2FA":"ติดตั้ง 2FA","Enable 2FA":"เปิดใช้งาน 2FA","Disable 2FA":"ปิดใช้งาน 2FA","2FA Settings":"ตั้งค่า 2FA","Two Factor Authentication":"การยืนยันตัวตนแบบสองขั้นตอน",Active:Ve,Inactive:ze,Token:je,"Show URI":"แสดง URI",Tags:qe,"Add New below or Select...":"เพิ่มใหม่ด้านล่างหรือเลือก…","Tag with this name already exist.":"แท็กที่มีชื่อนี้มีอยู่แล้ว","Tag with this value already exist.":"แท็กที่มีข้อมูลนี้มีอยู่แล้ว",color:Je,"value (optional)":"ข้อมูล (ไม่จำเป็น)",Gray:Qe,Red:Ze,Orange:Xe,Green:Ye,Blue:_e,Indigo:$e,Purple:et,Pink:tt,"Search...":"ค้นหา…","Avg. Ping":"ค่า Ping เฉลี่ย","Avg. Response":"ค่า Response เฉลี่ย","Entry Page":"หน้าต้อนรับ",statusPageNothing:ot,"No Services":"ไม่มีบริการ","All Systems Operational":"บริการทั้งหมดทำงานได้ปกติ","Partially Degraded Service":"บริการมีปัญหาบางส่วน","Degraded Service":"บริการมีปัญหา","Add Group":"เพิ่มกลุ่ม","Add a monitor":"เพิ่มมอนิเตอร์","Edit Status Page":"แก้ไขหน้าสถานะ","Go to Dashboard":"ไปที่หน้าควบคุม","Status Page":"หน้าสถานะ","Status Pages":"หน้าสถานะ",defaultNotificationName:at,here:st,Required:nt,telegram:rt,"Bot Token":"กุญแจของบอท",wayToGetTelegramToken:it,"Chat ID":"ไอดีแชท",supportTelegramChatID:ct,wayToGetTelegramChatID:lt,"YOUR BOT TOKEN HERE":"กุญแจของบอทของคุณที่นี่",chatIDNotFound:dt,webhook:ut,"Post URL":"URL โพสต์","Content Type":"ประเภทเนื้อหา",webhookJsonDesc:pt,webhookFormDataDesc:mt,smtp:ht,secureOptionNone:gt,secureOptionTLS:St,"Ignore TLS Error":"เพิกเฉยข้อผิดพลาด TLS","From Email":"จากอีเมล",emailCustomSubject:yt,"To Email":"ถึงอีเมล",smtpCC:Dt,smtpBCC:Tt,discord:kt,"Discord Webhook URL":"Discord Webhook URL",wayToGetDiscordURL:Pt,"Bot Display Name":"ชื่อบอท","Prefix Custom Message":"คำนำหน้าข้อความที่กำหนดเอง","Hello @everyone is...":"สวัสดี {'@'}everyone นี่…",teams:bt,"Webhook URL":"Webhook URL",wayToGetTeamsURL:At,signal:vt,Number:"หมายเลข",Recipients:Ct,needSignalAPI:Mt,wayToCheckSignalURL:wt,signalImportant:It,gotify:ft,"Application Token":"กุญแจของแอพพลิเคชั่น","Server URL":"Server URL",Priority:Rt,slack:Nt,"Icon Emoji":"Icon Emoji","Channel Name":"ชื่อห้อง","Uptime Kuma URL":"Uptime Kuma URL",aboutWebhooks:Lt,aboutChannelName:Ut,aboutKumaURL:Et,emojiCheatSheet:Ht,"rocket.chat":"Rocket.Chat",pushover:xt,pushy:Ft,PushByTechulus:Ot,octopush:Gt,promosms:Kt,clicksendsms:Wt,lunasea:Bt,apprise:Vt,GoogleChat:zt,pushbullet:jt,line:qt,mattermost:Jt,"User Key":"กุญแจผู้ใช้งาน",Device:Qt,"Message Title":"หัวข้อข้อความ","Notification Sound":"เสียงแจ้งเตือน","More info on:":"ข้อมูลเพิ่มเติม : {0}",pushoverDesc1:Zt,pushoverDesc2:Xt,"SMS Type":"ประเภท SMS",octopushTypePremium:Yt,octopushTypeLowCost:_t,checkPrice:$t,apiCredentials:eo,octopushLegacyHint:to,"Check octopush prices":"ตรวจสอบราคาของ Octopush {0}",octopushPhoneNumber:oo,octopushSMSSender:ao,"LunaSea Device ID":"ไอดีอุปกรณ์ LunaSea","Apprise URL":"Apprise URL","Example:":"ตัวอย่าง : {0}","Read more:":"อ่านเพิ่มเติม : {0}","Status:":"สถานะ : {0}","Read more":"อ่านเพิ่มเติม",appriseInstalled:so,appriseNotInstalled:no,"Access Token":"กุญแจการเข้าถึง","Channel access token":"กุญแจการเข้าถึงของช่อง","Line Developers Console":"Line Developers Console",lineDevConsoleTo:ro,"Basic Settings":"การตั้งค่าพื้นฐาน","User ID":"ไอดีผู้ใช้","Messaging API":"Messaging API",wayToGetLineChannelToken:io,"Icon URL":"Icon URL",aboutIconURL:co,aboutMattermostChannelName:lo,matrix:uo,promosmsTypeEco:po,promosmsTypeFlash:mo,promosmsTypeFull:ho,promosmsTypeSpeed:go,promosmsPhoneNumber:So,promosmsSMSSender:yo,"Feishu WebHookUrl":"Feishu WebHookURL",matrixHomeserverURL:Do,"Internal Room Id":"รหัสห้องภายใน",matrixDesc1:To,matrixDesc2:ko,Method:Po,Body:bo,Headers:Ao,PushUrl:vo,HeadersInvalidFormat:Co,BodyInvalidFormat:Mo,"Monitor History":"ประวัติมอนิเตอร์",clearDataOlderThan:wo,PasswordsDoNotMatch:Io,records:fo,"One record":"หนึ่งบันทึก",steamApiKeyDescription:Ro,"Current User":"ผู้ใช้ปัจจุบัน",topic:No,topicExplanation:Lo,successMessage:Uo,successMessageExplanation:Eo,recent:Ho,Done:xo,Info:Fo,Security:Oo,"Steam API Key":"Steam API Key","Shrink Database":"ย่อฐานข้อมูล","Pick a RR-Type...":"เลือกชนิด DNS Record","Pick Accepted Status Codes...":"เลือกเลขสถานะที่ยอมรับ…",Default:Go,"HTTP Options":"ตัวเลือก HTTP","Create Incident":"สร้างเหตุการณ์",Title:Ko,Content:Wo,Style:Bo,info:Vo,warning:zo,danger:jo,primary:qo,light:Jo,dark:Qo,Post:Zo,"Please input title and content":"กรุณาใส่ชื่อและเนื้อหา",Created:Xo,"Last Updated":"อัพเดทล่าสุด",Unpin:Yo,"Switch to Light Theme":"เปลี่ยนเป็นแบบสว่าง","Switch to Dark Theme":"เปลี่ยนเป็นแบบมืด","Show Tags":"แสดงแท็ก","Hide Tags":"ซ่อนแท็ก",Description:_o,"No monitors available.":"ไม่มีมอนิเตอร์ที่สามารถใช้งานได้","Add one":"เพิ่ม","No Monitors":"ไม่มีมอนิเตอร์","Untitled Group":"กลุ่มที่ไม่มีชื่อ",Services:$o,Discard:ea,Cancel:ta,"Powered by":"ขับเคลื่อนโดย",shrinkDatabaseDescription:oa,serwersms:aa,serwersmsAPIUser:sa,serwersmsAPIPassword:na,serwersmsPhoneNumber:ra,serwersmsSenderName:ia,stackfield:ca,Customize:la,"Custom Footer":"ส่วนท้ายที่กำหนดเอง","Custom CSS":"CSS ที่กำหนดเอง",smtpDkimSettings:da,smtpDkimDesc:ua,documentation:pa,smtpDkimDomain:ma,smtpDkimKeySelector:ha,smtpDkimPrivateKey:ga,smtpDkimHashAlgo:Sa,smtpDkimheaderFieldNames:ya,smtpDkimskipFields:Da,gorush:Ta,alerta:ka,alertaApiEndpoint:Pa,alertaEnvironment:ba,alertaApiKey:Aa,alertaAlertState:va,alertaRecoverState:Ca,deleteStatusPageMsg:Ma,Proxies:wa,default:"ค่าเริ่มต้น",enabled:Ia,setAsDefault:fa,deleteProxyMsg:Ra,proxyDescription:Na,enableProxyDescription:La,setAsDefaultProxyDescription:Ua,"Certificate Chain":"ห่วงโซ่ใบรับรอง",Valid:Ea,Invalid:Ha,AccessKeyId:xa,SecretAccessKey:Fa,PhoneNumbers:Oa,TemplateCode:Ga,SignName:Ka,"Sms template must contain parameters: ":"เทมเพลต SMS ต้องมีพารามิเตอร์ : ","Bark Endpoint":"Bark Endpoint",WebHookUrl:Wa,SecretKey:Ba,"For safety, must use secret key":"เพื่อความปลอดภัย จำเป็นต้องตั้งค่ากุญแจการเข้าถึง","Device Token":"Device Token",Platform:Va,Huawei:za,High:ja,Retry:qa,Topic:Ja,"WeCom Bot Key":"WeCom Bot Key","Setup Proxy":"ติดตั้งพร็อกซี่","Proxy Protocol":"โปรโตคอลพร็อกซี่","Proxy Server":"เซิร์ฟเวอร์พร็อกซี","Proxy server has authentication":"พร็อกซีเซิร์ฟเวอร์มีการตรวจสอบสิทธิ์",User:Qa,Installed:Za,"Not installed":"ไม่ได้ติดตั้ง",Running:Xa,"Not running":"ไม่ได้ทำงาน","Remove Token":"ลบกุญแจ",Start:Ya,Stop:_a,"Uptime Kuma":"Uptime Kuma","Add New Status Page":"เพิ่มหน้าสถานะใหม่",Slug:$a,"Accept characters:":"ตัวอักษรที่ใช้งานได้ :",startOrEndWithOnly:es,"No consecutive dashes":"ไม่มีขีดกลางติดต่อกัน",Next:ts,"The slug is already taken. Please choose another slug.":"ชื่อนี้ถูกใช้งานแล้ว กรุณาใช้ชื่ออื่น","No Proxy":"ไม่มีพร็อกซี่","HTTP Basic Auth":"HTTP Basic Auth","New Status Page":"หน้าสถานะใหม่","Page Not Found":"ไม่พบหน้านี้","Reverse Proxy":"พร็อกซีย้อนกลับ",Backup:os,About:as,wayToGetCloudflaredURL:ss,cloudflareWebsite:ns,"Message:":"ข้อความ :","Don't know how to get the token? Please read the guide:":"ไม่รู้วิธีการรับกุญแจ? กรุณาอ่านคู่มือ:","The current connection may be lost if you are currently connecting via Cloudflare Tunnel. Are you sure want to stop it? Type your current password to confirm it.":"การเชื่อมต่อปัจุบันอาจขาดหายหากคุณกำลังเชื่อมต่อ Cloudflare Tunnel คุณแน่ใจหรือไม่ที่จะหยุด, พิมรหัสผ่านของคุณเพื่อยืนยัน","Other Software":"ซอฟต์แวร์อื่นๆ","For example: nginx, Apache and Traefik.":"เช่น: nginx, Apache และ Traefik","Please read":"กรุณาอ่าน","Subject:":"เรื่อง :","Valid To:":"ใช้ได้ถึง :","Days Remaining:":"จำนวนวันที่เหลือ :","Issuer:":"ผู้ออก :","Fingerprint:":"ลายนิ้วมือ :","No status pages":"ไม่มีหน้าสถานะ","Domain Name Expiry Notification":"แจ้งเตือนการหมดอายุของโดเมน",Proxy:"Proxy","Date Created":"วันที่สร้าง",onebotHttpAddress:rs,onebotMessageType:is,onebotGroupMessage:cs,onebotPrivateMessage:ls,onebotUserOrGroupId:ds,onebotSafetyTips:us,"PushDeer Key":"กุญแจ PushDeer","Footer Text":"ข้อความส่วนท้าย","Show Powered By":'แสดงข้อความ "ขับเคลื่อนโดย"',"Domain Names":"Domain Names",signedInDisp:ps,signedInDispDisabled:ms,"Certificate Expiry Notification":"แจ้งเตือนใบรับรองหมดอายุ","API Username":"API Username","API Key":"API Key","Recipient Number":"หมายเลขผู้รับ","From Name/Number":"จาก ชื่อ / หมายเลข","Leave blank to use a shared sender number.":"ไม่ต้องกรอกเพื่อใช้ชื่อผู้ส่งร่วมกัน","Octopush API Version":"เวอร์ชั่น API Octopush","Legacy Octopush-DM":"Octopush-DM แบบเก่า",endpoint:hs,octopushAPIKey:gs,octopushLogin:Ss,promosmsLogin:ys,promosmsPassword:Ds,"pushoversounds pushover":"Pushover (default)","pushoversounds bike":"Bike","pushoversounds bugle":"Bugle","pushoversounds cashregister":"Cash Register","pushoversounds classical":"Classical","pushoversounds cosmic":"Cosmic","pushoversounds falling":"Falling","pushoversounds gamelan":"Gamelan","pushoversounds incoming":"Incoming","pushoversounds intermission":"Intermission","pushoversounds magic":"Magic","pushoversounds mechanical":"Mechanical","pushoversounds pianobar":"Piano Bar","pushoversounds siren":"Siren","pushoversounds spacealarm":"Space Alarm","pushoversounds tugboat":"Tug Boat","pushoversounds alien":"Alien Alarm (long)","pushoversounds climb":"Climb (long)","pushoversounds persistent":"Persistent (long)","pushoversounds echo":"Pushover Echo (long)","pushoversounds updown":"Up Down (long)","pushoversounds vibrate":"Vibrate Only","pushoversounds none":"None (silent)",pushyAPIKey:Ts,pushyToken:ks,"Show update if available":"แสดงการอัปเดตถ้ามี","Also check beta release":"ตรวจสอบรุ่นเบต้า","Using a Reverse Proxy?":"ใช้ Reverse Proxy อยู่ใช่มั้ย?","Check how to config it for WebSocket":"ตรวจสอบวิธีการตั้งค่าสำหรับ WebSocket","Steam Game Server":"Steam Game Server","Most likely causes:":"สาเหตุที่เป็นไปได้มากที่สุด :","The resource is no longer available.":"ทรัพยากรไม่สามารถใช้งานได้อีกต่อไป","There might be a typing error in the address.":"อาจมีข้อผิดพลาดในการพิมพ์ที่อยู่","What you can try:":"สิ่งที่คุณสามารถลองทำ :","Retype the address.":"พิมพ์ที่อยู่อีกครั้ง","Go back to the previous page.":"กลับไปหน้าที่แล้ว","Coming Soon":"เร็วๆ นี้",wayToGetClickSendSMSToken:Ps,wayToGetLineNotifyToken:bs,resendEveryXTimes:As,resendDisabled:vs,dnsPortDescription:Cs,"Resend Notification if Down X times consecutively":"ส่งการแจ้งเตือนซ้ำถ้าออฟไลน์ครบ X ครั้ง",error:Ms,critical:ws,wayToGetPagerDutyKey:Is,"Integration Key":"Integration Key","Integration URL":"Integration URL","Auto resolve or acknowledged":"แก้ไขอัตโนมัติหรือยอมรับ","do nothing":"ไม่ทำอะไร","auto acknowledged":"ยอมรับอัตโนมัติ","auto resolve":"แก้ไขอัตโนมัติ","Bark Group":"กลุ่มที่จะประกาศ","Bark Sound":"เสียงประกาศ",Authentication:fs,"HTTP Headers":"HTTP Headers","Trust Proxy":"Trust Proxy",HomeAssistant:Rs,RadiusSecret:Ns,RadiusSecretDescription:Ls,RadiusCalledStationId:Us,RadiusCalledStationIdDescription:Es,RadiusCallingStationId:Hs,RadiusCallingStationIdDescription:xs,"Connection String":"Connection String",Query:Fs,settingsCertificateExpiry:Os,certificationExpiryDescription:Gs,"Setup Docker Host":"ติดตั้ง Docker Host","Connection Type":"ประเภทการเชื่อมต่อ","Docker Daemon":"Docker Daemon",deleteDockerHostMsg:Ks,socket:Ws,tcp:Bs,"Docker Container":"Docker Container","Container Name / ID":"Container Name / ID","Docker Host":"Docker Host","Docker Hosts":"Docker Hosts","ntfy Topic":"หัวข้อ ntfy",Domain:Vs,Workstation:zs,disableCloudflaredNoAuthMsg:js,trustProxyDescription:qs,Examples:Js,"Home Assistant URL":"Home Assistant URL","Long-Lived Access Token":"Access Token แบบมีอายุนาน","Long-Lived Access Token can be created by clicking on your profile name (bottom left) and scrolling to the bottom then click Create Token. ":'Access Token แบบมีอายุนานสามารถสร้างได้โดยคลิกชื่อบนโปรไฟล์ (ล่างซ้าย) และเลื่อนไปข้างล่างจากนั้นคลิก "Create Token" ',"Notification Service":"บริการแจ้งเตือน","default: notify all devices":"ค่าเริ่มต้น: แจ้งเตือนทุกอุปกรณ์",'A list of Notification Services can be found in Home Assistant under "Developer Tools > Services" search for "notification" to find your device/phone name.':'รายการแจ้งเตือนสามารถหาได้ใน Home Assistant ในเมนู "Developer Tools > Services" แล้วค้นหา "notification" เพื่อหาชื่ออุปกรณ์หรือชื่อโทรศัพท์',"Automations can optionally be triggered in Home Assistant:":"สามารถเลือกสั่งงานระบบอัตโนมัติได้ใน Home Assistant:","Trigger type:":"ชนิดสิ่งกระตุ้น:","Event type:":"ชนิดเหตการณ์:","Event data:":"ข้อมูลกิจกรรม:","Then choose an action, for example switch the scene to where an RGB light is red.":"จากนั้นเลือกการกระทำ, ตัวอย่าง เช่น เปลี่ยนเป็นไฟสีแดง","Frontend Version":"เวอร์ชั่น Frontend","Frontend Version do not match backend version!":"เวอร์ชั่น Frontend ไม่ตรงกับ Backend !",webhookAdditionalHeadersTitle:Qs,webhookAdditionalHeadersDesc:Zs,"Start of maintenance":"เริ่มการซ่อมบำรุง","All Status Pages":"หน้าสถานะทั้งหมด",Custom:Xs,Game:Ys,statusMaintenance:_s,Maintenance:$s,Monitor:en,"Select status pages...":"เลือกหน้าสถานะ","Schedule maintenance":"กำหนดเวลาบำรุงรักษา","Affected Monitors":"มอนิเตอร์ที่ได้รับผลกระทบ",markdownSupported:tn,Help:on,"Pick Affected Monitors...":"เลือกมอนิเตอร์ที่ได้รับผลกระทบ","Packet Size":"ขนาดของ Packet",ZohoCliq:an,backupOutdatedWarning:sn,backupRecommend:nn,Optional:rn,squadcast:cn,or:ln,recurringInterval:dn,Recurring:un,"General Monitor Type":"ชนิดมอนิเตอร์ทั่วไป",pagertreeCritical:pn,pagertreeDoNothing:mn,pagertreeResolve:hn,wayToGetPagerTreeIntegrationURL:gn,telegramSendSilently:Sn,"maintenanceStatus-inactive":"ไม่ใช้งาน",telegramProtectContent:yn,"Add New Tag":"เพิ่มแท็กใหม่",strategyManual:Dn,warningTimezone:Tn,weekdayShortMon:kn,weekdayShortTue:Pn,weekdayShortWed:bn,weekdayShortThu:An,weekdayShortFri:vn,weekdayShortSat:Cn,weekdayShortSun:Mn,dayOfWeek:wn,dayOfMonth:In,"maintenanceStatus-under-maintenance":"อยู่ภายใต้การบำรุงรักษา","maintenanceStatus-scheduled":"กำหนดการ","maintenanceStatus-ended":"สิ้นสุด","maintenanceStatus-unknown":"ไม่ทราบ","Specific Monitor Type":"ประเภทมอนิเตอร์เฉพาะ",telegramMessageThreadID:fn,telegramMessageThreadIDDescription:Rn,sameAsServerTimezone:Nn,startDateTime:Ln,endDateTime:Un,cronSchedule:En,invalidCronExpression:Hn,cronExpression:xn,lastDay:Fn,lastDay1:On,lastDay2:Gn,lastDay3:Kn,lastDay4:Wn,"No Maintenance":"ไม่มีการบำรุงรักษา",pauseMaintenanceMsg:Bn,"Display Timezone":"แสดงเขตเวลา",statusPageMaintenanceEndDate:Vn,"Server Timezone":"เขตเวลาเซิร์ฟเวอร์",statusPageRefreshIn:zn,telegramSendSilentlyDescription:jn,telegramProtectContentDescription:qn,dnsCacheDescription:Jn,IconUrl:Qn,"Enable DNS Cache":"เปิดใช้งาน DNS Cache",Enable:Zn,Disable:Xn,"Single Maintenance Window":"หน้าการปรับปรุงเดี่ยว","Clone Monitor":"มอนิเตอร์",Clone:Yn,cloneOf:_n,wayToGetZohoCliqURL:$n,"Cannot connect to the socket server":"ไม่สามารถเชื่อมต่อกับเซิร์ฟเวอร์ Socket","Reconnecting...":"กำลังเชื่อมต่อใหม่",Home:er,"Date and Time":"วันที่และเวลา","DateTime Range":"ช่วงวันที่และเวลา",loadingError:tr,plugin:or,install:ar,installing:sr,uninstall:nr,uninstalling:rr,confirmUninstallPlugin:ir,"Schedule Maintenance":"กำหนดเวลาซ่อมแซม","Edit Maintenance":"แก้ใขการบำรุงรักษา",recurringIntervalMessage:cr,chromeExecutableAutoDetect:lr,chromeExecutableDescription:dr,notificationRegional:ur,timeoutAfter:pr,Select:mr,"Expected Value":"ค่าที่คาดหวัง"})}}}));
