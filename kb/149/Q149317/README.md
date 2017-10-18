---
layout: page
title: "Q149317: SMS: IP Address Not Reported for NetWare Clients"
permalink: kb/149/Q149317/
---

## Q149317: SMS: IP Address Not Reported for NetWare Clients

	Article: Q149317
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1,1.2
	Operating System(s): 
	Keyword(s): kbnetwork kbInventory smsinvkbfixlist
	Last Modified: 25-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1, 1.2 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	In the personal computer properties for a NetWare client, if the client also has
	TCP/IP installed, the IP address is not reported.
	
	CAUSE
	=====
	
	Once SMS has detected a NetWare redirector over IPX, it does not search for
	additional protocols.
	
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
	Keywords          : kbnetwork kbInventory smsinv kbfixlist
	Technology        : kbSMSSearch kbSMS100 kbSMS110 kbSMS120
	Version           : winnt:1.0,1.1,1.2
	Issue type        : kbbug
	
	=============================================================================
	
