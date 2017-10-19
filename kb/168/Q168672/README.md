---
layout: page
title: "Q168672: Cannot Read Japanese E-mail Messages on MSN"
permalink: /kb/168/Q168672/
---

## Q168672: Cannot Read Japanese E-mail Messages on MSN

	Article: Q168672
	Product(s): The Microsoft Network
	Version(s): WINDOWS:1.2,1.3,2.0,2.5
	Operating System(s): 
	Keyword(s): kb3rdparty kbenv kbmsn
	Last Modified: 12-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Network versions 1.2, 1.3, 2.0, 2.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You may be unable to read Japanese e-mail messages on MSN, The Microsoft
	Network.
	
	CAUSE
	=====
	
	This behavior occurs because the messages are incorrectly encoded by the local
	mail server or by the mail client. Most Japanese characters use 8-bit data.
	Therefore, even text messages have to be encoded through the Internet. The code
	should be Shift-Jis in order to view a Japanese message with Windows; however,
	messages could be incorrectly encoded into EUC or JIS (ISO-2022-JP).
	
	RESOLUTION
	==========
	
	If the mail message uses a lot of "Hankaku Katakana" characters, it is probably
	encoded in EUC. If the message uses a lot of "$" characters, it is probably
	encoded in Jis. In these cases, messages can be retrieved correctly in Japanese
	(Shift-Jis) by using an encoding tool such as PageBrowser.
	
	MORE INFORMATION
	================
	
	The third-party product discussed in this article is manufactured by a vendor
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	this product's performance or reliability.
	
	Additional query words: msn
	
	======================================================================
	Keywords          : kb3rdparty kbenv kbmsn 
	Technology        : kbMSNSearch kbMSN200 kbMSN130 kbMSN250 kbMSN120
	Version           : WINDOWS:1.2,1.3,2.0,2.5
	Issue type        : kbprb
	
	=============================================================================
	
