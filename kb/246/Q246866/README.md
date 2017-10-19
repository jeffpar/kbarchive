---
layout: page
title: "Q246866: XCLN: Resource Calendars Display Incorrect Free and Busy Times"
permalink: /kb/246/Q246866/
---

## Q246866: XCLN: Resource Calendars Display Incorrect Free and Busy Times

	Article: Q246866
	Product(s): Microsoft Exchange
	Version(s): 5.5,8.03,8.04
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook 97, versions 8.03, 8.04 
	- Microsoft Outlook 98 
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Conference rooms that use the AutoAccept script with the Event Service may
	display incorrect free and busy information.
	
	CAUSE
	=====
	
	If the Event Service is used with the AutoAccept script, don't open the
	conference room calendar by clicking Open on the File menu and then clicking
	Other User's Folder. This causes problems with free and busy publishing because
	the AutoAccept script is responsible for publishing the free and busy time.
	Every time a user opens the calendar directly at the same time that the free and
	busy information is updated, the free and busy information becomes corrupted or
	incorrect.
	
	RESOLUTION
	==========
	
	To resolve this problem, perform the following steps:
	
	1. Log on to each conference room mailbox directly. (Do not add the mailbox by
	  clicking Services on the Tools menu.) Log on directly as the mailbox by using
	  the Windows NT account that is associated with it.
	
	  NOTE: To log on to the conference room mailbox directly you must create a new
	  profile.
	
	  Make sure that you configure Outlook to prompt you to select the profile that
	  you want to use every time that you start Outlook.
	
	2. Right-click the Calendar folder, and then click Properties. Click the
	  Permissions tab, and then in the Name list, click Default. In the Roles list,
	  click None, and then click OK to change the default permissions role to none.
	
	3. On the Tools menu, click Options, click Calendar Options, and then click Free
	  Busy Options. Set the calendar to publish free and busy information every 15
	  minutes. You can set the calendar to publish up to 12 months.
	
	4. Quit and log off from Outlook.
	
	5. Click the Start button, click Run, in the Open box, type "outlook
	  /cleanfreebusy" (without the quotation marks), and then click OK. It may take
	  a minute before the client starts.
	
	6. Quit and log on as another user. Plan a meeting and check the free and busy
	  information. It may take up to 15 minutes before the data is updated
	  correctly.
	
	Additional query words: CDO 8.03 8.04 8.5
	
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbExchangeSearch kbExchange550 kbZNotKeyword2 kbOutlook97Search kbOutlook98Search kbZNotKeyword3 kbOutlook803 kbOutlook804
	Version           : :5.5,8.03,8.04
	Issue type        : kbprb
	
	=============================================================================
	
