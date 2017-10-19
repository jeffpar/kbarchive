---
layout: page
title: "Q165661: XWEB: Error Message: Failed to Get Inbox"
permalink: /kb/165/Q165661/
---

## Q165661: XWEB: Error Message: Failed to Get Inbox

	Article: Q165661
	Product(s): Microsoft Exchange
	Version(s): WinNT:5.0
	Operating System(s): 
	Keyword(s): kberrmsg kbusage
	Last Modified: 18-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to access your Microsoft Exchange Server mailbox using an Internet
	browser, the following error message may appear:
	
	  Failed to get Inbox.
	
	CAUSE
	=====
	
	This could happen if your mailbox object has not been fully replicated to the
	computer running Exchange Server that validates the logon process.
	
	RESOLUTION
	==========
	
	To resolve this problem:
	
	- Allow enough time for full directory replication and try logging on again.
	
	
	Additional query words: XADM
	
	======================================================================
	Keywords          : kberrmsg kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbZNotKeyword2
	Version           : WinNT:5.0
	
	=============================================================================
	
