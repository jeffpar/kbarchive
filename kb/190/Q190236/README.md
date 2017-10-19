---
layout: page
title: "Q190236: XFOR: Removing Connectors After Applying Exchange 5.5 SP1"
permalink: /kb/190/Q190236/
---

## Q190236: XFOR: Removing Connectors After Applying Exchange 5.5 SP1

	Article: Q190236
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5 SP1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 24-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 SP1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	
	After you install Exchange Server 5.5 SP1, you cannot perform a "Remove All" to
	uninstall connectors that were previously installed by the Exchange Connectivity
	Setup application. Performing a "Remove All" does not remove the connector
	files. The Notes, SNADS, and OfficeVision/VM connectors are the only connectors
	affected by this behavior.
	
	WORKAROUND
	==========
	
	The Exchange connectors for Notes, SNADS, and OfficeVision/VM included in the
	Microsoft Exchange Connectivity package are installed from the Exchange Server
	5.5 CD \Server\Exchconn directory. The connectors are updated from \Exchconn
	directories on the Exchange Server 5.5 Service Pack 1 CD.
	
	To uninstall any of these connectors from an Exchange Server computer, perform
	the following steps:
	
	1. Click Start, click Programs, and then click Microsoft Exchange Connectivity.
	  Click Setup.
	
	2. On the Exchange Connectivity Setup application, select "Uninstall Microsoft
	  Exchange Connectivity Software", and then follow the instructions provided.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbZNotKeyword2 kbExchange550SP1
	Version           : winnt:5.5 SP1
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
