---
layout: page
title: "Q151197: XCLN: Import of MMF May Create Duplicate Messages in Inbox"
permalink: kb/151/Q151197/
---

## Q151197: XCLN: Import of MMF May Create Duplicate Messages in Inbox

	Article: Q151197
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 28-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 95/98 client, versions 4.0, 5.0 
	- Microsoft Exchange Windows 3.x client, versions 4.0, 5.0 
	- Microsoft Exchange Windows NT client, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you import a Microsoft Mail MMF to a Microsoft Exchange PST in a profile
	that has only the MS Mail service installed, duplicate messages may be imported
	to the Inbox.
	
	CAUSE
	=====
	
	This will occur if the user had Inbox Shadowing turned on in an installation of
	the 16 or 32 bit MS Mail client. Subsequent new messages do not duplicate.
	
	RESOLUTION
	==========
	
	Prior to importing the MMF, turn off Inbox Shadowing using the following steps:
	
	1. Open the MS Mail client.
	
	2. From the Mail menu, open Options, then click the Server button.
	
	3. Uncheck the box "Copy Inbox on Postoffice for Dialin Access".
	
	4. Verify the Inbox has been synchronized.
	
	5. Exit the MS Mail client.
	
	
	Additional query words: duplicate import MMF PST shadow inbox
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbZNotKeyword3 kbExchange400NT kbExchange500NT kbExchange400Win95 kbExchange500Win95
	Version           : WINDOWS:4.0,5.0
	
	=============================================================================
	
