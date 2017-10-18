---
layout: page
title: "Q174344: XCLN: Private Messages Can Be Viewed by Delegates Using Exchange"
permalink: kb/174/Q174344/
---

## Q174344: XCLN: Private Messages Can Be Viewed by Delegates Using Exchange

	Article: Q174344
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 28-JUN-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 3.x client, versions 4.0, 5.0 
	- Microsoft Exchange Windows 95/98 client, versions 4.0, 5.0 
	- Microsoft Exchange Windows NT client, versions 4.0, 5.0 
	- Microsoft Exchange Macintosh client, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	A delegate for another user's mailbox can read messages marked as Private using
	the Microsoft Exchange Client. This behavior does not occur when using the
	Microsoft Outlook client.
	
	CAUSE
	=====
	
	The Microsoft Outlook client is designed to filter messages marked as Private so
	that only the intended recipient can view the message through his or her Inbox.
	This filtering process prevents delegates from viewing the contents of private
	messages that were intended for the original recipient only. The Microsoft
	Exchange Client ignores this sensitivity property and displays the messages to
	the delegate, as well as to the original recipient.
	
	WORKAROUND
	==========
	
	To ensure privacy, have the delegate for the user's mailbox install and use the
	Outlook client only.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbHWMAC kbOSMAC kbExchangeSearch kbExchange500 kbExchange400 kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbZNotKeyword3 kbExchange500Mac kbExchange400Mac kbExchange400NT kbExchange500NT kbExchange400Win95 kbExchange500Win95
	Version           : WINDOWS:4.0,5.0
	Issue type        : kbprb
	
	=============================================================================
	
