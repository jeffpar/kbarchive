---
layout: page
title: "Q285021: XADM: Exchange Event Service Does Not Start with Error 2140"
permalink: kb/285/Q285021/
---

## Q285021: XADM: Exchange Event Service Does Not Start with Error 2140

	Article: Q285021
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): kberrmsg
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start the Microsoft Event Service, you may receive the following error
	message:
	
	  Could not start the Microsoft Exchange Event Service on \\<SERVERNAME>
	  Error 2140: An internal Windows NT Error occurred.
	
	The following event ID message may be logged in the Application event log:
	
	  Event ID : 5
	  Source : MSExchangeES
	  Type : Error
	  Category : General
	  Description:
	  An unexpected MAPI error occurred. Error returned was [0x80004005]
	
	When you start the Microsoft Exchange Server Administrator program, you can open
	the properties of the Eventconfig server. All other services are started and
	working properly.
	
	CAUSE
	=====
	
	This issue can occur if the Event Service is using a different service account
	and the permissions on the service account that is used to start the service
	have been changed.
	
	RESOLUTION
	==========
	
	To resolve this issue, use a different service account to start the Event
	Service, or modify the permissions on the current service account.
	
	Additional query words: exch2kp2w
	
	======================================================================
	Keywords          : kberrmsg 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbprb
	
	=============================================================================
	
