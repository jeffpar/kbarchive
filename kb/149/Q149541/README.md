---
layout: page
title: "Q149541: XCLN: Unable to Send or Save Messages"
permalink: kb/149/Q149541/
---

## Q149541: XCLN: Unable to Send or Save Messages

	Article: Q149541
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 25-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 3.x client, version 4.0 
	- Microsoft Exchange Windows 95/98 client, version 4.0 
	- Microsoft Exchange Windows NT client, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When an attempt is made to send or save a message in Microsoft Exchange Windows
	clients, the following error message is displayed:
	
	  The item could not be sent. Network problems are preventing connection to the
	  Microsoft Exchange Server computer. <OK>
	
	MORE INFORMATION
	================
	
	This error will occur if your delivery location is set to have messages
	delivered to your Microsoft Exchange Server mailbox and the Microsoft Exchange
	Information Store service is not running.
	
	In addition, you will not be able to save the message to your Inbox, save the
	message out in message format, or print the message. The Microsoft Exchange
	Windows client is unable to access the message object because the Microsoft
	Exchange Information Store is not running and so it cannot correctly format the
	message. You will be able to save the message in Text (.txt)or Rich Text Format
	(.rtf).
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in version 4.0 of the Microsoft
	Exchange Windows clients. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange400 kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbZNotKeyword3 kbExchange400NT kbExchange400Win95
	Version           : WINDOWS:4.0
	
	=============================================================================
	
