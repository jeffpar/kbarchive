---
layout: page
title: "Q178046: XADM: Err Msg: Background Thread FDsWaitTask Encountered..."
permalink: kb/178/Q178046/
---

## Q178046: XADM: Err Msg: Background Thread FDsWaitTask Encountered...

	Article: Q178046
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): kberrmsg
	Last Modified: 06-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	
	
	SYMPTOMS
	========
	
	The Windows NT Event Viewer Application Event Log on the Microsoft Exchange
	Server computer may record the following event:
	
	  Event ID: 7201
	  Source: MSExchangeIS
	  Type: Warning
	  Category: General
	  Description: Background thread FDsWaitTask encountered a problem.
	  Error code DS_E_TOO_Late.
	
	CAUSE
	=====
	
	The Microsoft Exchange Server Information Store (IS) issued a warning that all
	of the cached DS Structures in the IS were invalid.
	
	RESOLUTION
	==========
	
	The IS handles this error by rebuilding the DS Structures in the cache so this
	error can be safely ignored.
	
	
	======================================================================
	Keywords          : kberrmsg 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : WINDOWS:4.0,5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	
