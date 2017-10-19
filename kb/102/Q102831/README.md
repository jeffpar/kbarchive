---
layout: page
title: "Q102831: Mac Srv: Update Gateway Connect Times Sends Outbound Message"
permalink: /kb/102/Q102831/
---

## Q102831: Mac Srv: Update Gateway Connect Times Sends Outbound Message

	Article: Q102831
	Product(s): Microsoft Mail For Appletalk Networks
	Version(s): WINDOWS:3.0,3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for AppleTalk Networks, versions 3.0, 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In versions 3.0 and 3.1 of Microsoft Mail for AppleTalk Networks, when you
	choose the Update button in the Gateway Connect Times screen, a mail message is
	sent to Gateway Services (GWS). This message appears temporarily in the Outbound
	Gateway Queue in the Mail Network Administrator program.
	
	GWS reads this message and then deletes it. After reading the message, GWS
	updates its gateway schedule times.
	
	NOTE: Gateway Services is installed when MS Mail GW is loaded. The Outbound
	Gateway Queue represents the inbox for GWS.
	
	Additional query words: 3.00 3.10 description
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailATN300 kbMailATN310
	Version           : WINDOWS:3.0,3.1
	
	=============================================================================
	
