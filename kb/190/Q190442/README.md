---
layout: page
title: "Q190442: XADM: Error 0xc0020422 Installing Service Pack"
permalink: /kb/190/Q190442/
---

## Q190442: XADM: Error 0xc0020422 Installing Service Pack

	Article: Q190442
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 26-JUL-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If an Exchange service has been set to be disabled prior to installation of a
	service pack, the following error message appears:
	
	  The specified service is disabled and cannot be started.
	
	  Microsoft Windows NT
	  ID no: 0xc020422
	
	CAUSE
	=====
	
	After the update is complete, Exchange-related services are restarted. If a
	service does not start, the above error message appears.
	
	RESOLUTION
	==========
	
	To resolve the issue, set any services that are disabled to MANUAL or AUTO, and
	re-install the service pack. After the update is complete, the services can be
	set back to their preferred settings.
	
	
	Additional query words: SP1
	
	======================================================================
	Keywords          :  
	Technology        : kbZNotKeyword6 kbExchangeSearch kbExchange550 kbExchangeClientSearch kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbprb
	
	=============================================================================
	
