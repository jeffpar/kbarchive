---
layout: page
title: "Q264162: XFOR: Internet Mail Service Won't Start on Windows 2000 Cluster"
permalink: /kb/264/Q264162/
---

## Q264162: XFOR: Internet Mail Service Won't Start on Windows 2000 Cluster

	Article: Q264162
	Product(s): Microsoft Exchange
	Version(s): 5.5,5.5 SP1,5.5 SP2,5.5 SP3
	Operating System(s): 
	Keyword(s): exc55 exc55sp1 exc55sp2 exc55sp3
	Last Modified: 26-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.5, 5.5 SP1, 5.5 SP2, 5.5 SP3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you configure the Internet Mail Service on a Microsoft Windows 2000
	Server-based computer that is a part of a cluster set, the Internet Mail Service
	may not start and you may receive the following error message:
	
	  Could not start. Service did not return an error.
	  This could be an internal Windows error or an internal service error.
	
	CAUSE
	=====
	
	This issue can occur if the cluster service is configured to use network
	configuration when network configuration is not available. The Internet Mail
	Service cannot start successfully.
	
	RESOLUTION
	==========
	
	To resolve this issue:
	
	1. Start the Cluster Manager utility.
	
	2. Click the group that contains the Exchange Server services.
	
	3. Click the Internet Mail Service, and then open the Internet Mail Service
	  properties.
	
	4. Click to clear the Use Network Configuration check box.
	
	
	Additional query words: xmrp IMS
	
	======================================================================
	Keywords          : exc55 exc55sp1 exc55sp2 exc55sp3 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2 kbExchange550SP1 kbExchange550SP2 kbExchange550SP3
	Version           : :5.5,5.5 SP1,5.5 SP2,5.5 SP3
	Issue type        : kbprb
	
	=============================================================================
	
