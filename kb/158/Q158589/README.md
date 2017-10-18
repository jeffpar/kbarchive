---
layout: page
title: "Q158589: XCON: Only a Few Messages Delivered over X.400 Connector"
permalink: kb/158/Q158589/
---

## Q158589: XCON: Only a Few Messages Delivered over X.400 Connector

	Article: Q158589
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	This problem occurs when you use the Chinese version of Windows NT 3.51. An
	X.400 connector over TP4 stack is used to connect to Microsoft Exchange Server
	in a different site, and the Use Expedited Data check box on the X.400 connector
	Stack property page is selected. The message transfer agent (MTA) only delivers
	one to four mail messages to the remote site and then stops. Restarting the MTA
	does not resolve the problem.
	
	WORKAROUND
	==========
	
	Clear the Use Expedited Data check box on Stack property page.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0
	
	=============================================================================
	
