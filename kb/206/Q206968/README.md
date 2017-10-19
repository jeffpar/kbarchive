---
layout: page
title: "Q206968: XIMS: &quot;Relay Not Allowed&quot; After Installing Exchange 5.5 SP1"
permalink: /kb/206/Q206968/
---

## Q206968: XIMS: &quot;Relay Not Allowed&quot; After Installing Exchange 5.5 SP1

	Article: Q206968
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): kberrmsg
	Last Modified: 12-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After changing from the "Reroute incoming SMTP mail" option to the "Do not
	reroute SMTP mail" option on the Routing tab of the Microsoft Exchange Internet
	Mail Service, you may receive a "Relay Not Allowed" non-delivery report (NDR)
	message.
	
	CAUSE
	=====
	
	The following registry key shows that the RelayFlags setting may be set to a
	value of 2 or higher:
	
	  HKEY_LOCAL_MACHINE\System\CCS\Services\MSExchangeIMC\Parameters
	
	RESOLUTION
	==========
	
	- Set the RelayFlags registry entry to 0, 1 or delete the entry altogether.
	
	  -or-
	
	- Install Service Pack 1 (SP1), and configure the routing restrictions on the
	  Routing tab of the Microsoft Exchange Internet Mail Service.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server 5.5.
	
	MORE INFORMATION
	================
	
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q179289 XFOR: Internet Mail Service May Not Start When Multiple Entries Are
	  Used and RelayFlags
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
