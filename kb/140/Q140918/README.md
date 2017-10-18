---
layout: page
title: "Q140918: SMS INVDOS Does Not Report IPX Address on IPX and TCP/IP Client"
permalink: kb/140/Q140918/
---

## Q140918: SMS INVDOS Does Not Report IPX Address on IPX and TCP/IP Client

	Article: Q140918
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.1
	Operating System(s): 
	Keyword(s): kbnetwork kbInventory smsinv
	Last Modified: 25-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Systems Management Server Inventory Agent does not report an IPX address when it
	detects a NetWare client that has both IPX and TCP/IP protocols loaded. It does
	report the IPX address if detects an IPX only client (network type = Netware).
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.1. This problem has been corrected in Systems Management Server
	version 1.2.
	
	Additional query words: prodsms sms
	
	======================================================================
	Keywords          : kbnetwork kbInventory smsinv 
	Technology        : kbSMSSearch kbSMS110
	Version           : winnt:1.1
	
	=============================================================================
	
