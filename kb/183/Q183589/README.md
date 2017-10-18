---
layout: page
title: "Q183589: XFOR: Custom Recipients Do Not Appear After Dirsync"
permalink: kb/183/Q183589/
---

## Q183589: XFOR: Custom Recipients Do Not Appear After Dirsync

	Article: Q183589
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you perform a manual or scheduled directory synchronization (dirsync)
	between Exchange Server and the Lotus Notes Server, custom recipients in a
	recipients containers may not appear in the Notes Server; however, Exchange
	recipients do appear.
	
	CAUSE
	=====
	
	By default, custom recipients are not exported. The Export Custom Recipients
	option (located in the Export Containers tab in the Notes connector Properties)
	is not selected.
	
	RESOLUTION
	==========
	
	Open the Notes Connector properties, select the Export Container tab and enable
	the Export custom recipients option located in the lower right corner of the
	dialog box. Perform a manual or scheduled dirsync.
	
	MORE INFORMATION
	================
	
	This is by product design.
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : WINDOWS:5.5
	Issue type        : kbprb
	
	=============================================================================
	
