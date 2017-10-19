---
layout: page
title: "Q155503: SMS: IPX Address Not Inventoried When You Use TCP/IP"
permalink: /kb/155/Q155503/
---

## Q155503: SMS: IPX Address Not Inventoried When You Use TCP/IP

	Article: Q155503
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.1,1.2
	Operating System(s): 
	Keyword(s): kbnetwork kbInventory smsinv
	Last Modified: 25-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.1, 1.2 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If you do not use a NetWare server as the Systems Management Server logon
	server, the IPX address of a Windows client computer (using both TCP/IP and IPX
	protocols) is not inventoried.
	
	The TCP/IP address is inventoried; however, if TCP/IP is detected, the IPX
	retrieval step is skipped.
	
	NOTE: This problem does not occur with Windows NT client computers and clients
	that are inventoried by a NetWare server. In both these cases, IP and IPX
	addresses are retrieved successfully.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.2. This problem has been corrected in the latest U.S. Service Pack for
	Microsoft Systems Management Server version 1.2. For information on obtaining
	the Service Pack, query on the following word in the Microsoft Knowledge Base
	(without the spaces):
	
	  S E R V P A C K
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbnetwork kbInventory smsinv 
	Technology        : kbSMSSearch kbSMS110 kbSMS120
	Version           : winnt:1.1,1.2
	
	=============================================================================
	
