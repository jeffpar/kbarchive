---
layout: page
title: "Q196254: XFOR: MMC Must Be Closed and Reopened after a Net Stop"
permalink: kb/196/Q196254/
---

## Q196254: XFOR: MMC Must Be Closed and Reopened after a Net Stop

	Article: Q196254
	Product(s): Microsoft Exchange
	Version(s): WINNT:5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The Microsoft Management Console (MMC) must be closed and reopened to be usable
	after a 'net stop ChatSvc' with the MMC open. This happens when you stop the
	Microsoft Exchange Chat service from the command prompt using the command "net
	stop chatsvc," and then start the service again with the command "net start
	chatsvc" with the MMC open.
	
	CAUSE
	=====
	
	The MMC can not determine the state of the service. Both the Pause and Continue
	buttons are unavailable.
	
	RESOLUTION
	==========
	
	Stop and restart the MMC.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Chat Server.
	
	
	Additional query words: Mcischat
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : WINNT:5.5
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
