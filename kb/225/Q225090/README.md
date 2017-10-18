---
layout: page
title: "Q225090: XADM: 3093 PF Replication Error 0x8004010f Reading Property 0x67"
permalink: kb/225/Q225090/
---

## Q225090: XADM: 3093 PF Replication Error 0x8004010f Reading Property 0x67

	Article: Q225090
	Product(s): Microsoft Exchange
	Version(s): winnt:5.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	When diagnostics logging is set to MAX for the MSExchangeIS Public object,
	Replication category, the Application Event Log may contain the following error
	which can be regarded as harmless.
	
	  Event ID: 3093
	  Source: MSExchangeIS Public
	  Type: Error
	  Category: Replication Errors
	  Description:
	  Error 0x8004010f reading property 0x67010003 on object type
	  tbtOwningFolders.
	
	MORE INFORMATION
	================
	
	This behavior is by design. To be better able to track problems, the following
	code was added to log ALL not found errors when the logging level is set to 5
	(MAX) for source MSExchangeIS Public and category Replication:
	
	  (0x8004010f) = ecNotFound-MAPI_E_NOT_FOUND
	
	Most of these are harmless, and the code handles the not found error.
	
	Additional query words: 3093 tbtOwningFolders 0x67010003 0x8004010f
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbZNotKeyword2
	Version           : winnt:5.0,5.5
	Issue type        : kbinfo
	
	=============================================================================
	
