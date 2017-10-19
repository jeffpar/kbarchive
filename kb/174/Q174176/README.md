---
layout: page
title: "Q174176: XADM: Err Msg: Error 8 Has Occurred (Internal ID 30f0090)"
permalink: /kb/174/Q174176/
---

## Q174176: XADM: Err Msg: Error 8 Has Occurred (Internal ID 30f0090)

	Article: Q174176
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 17-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	
	The Microsoft Exchange Server Directory service logs the following event:
	
	  Event ID: 1166
	  Source: MSExchangeDS
	  Type: Information
	  Category: Internal Processing
	  Error 8 has occurred (Internal ID 30f0090). Contact Microsoft Technical
	  Support for assistance.
	
	CAUSE
	=====
	
	The system is low on virtual memory.
	
	RESOLUTION
	==========
	
	To resolve this problem:
	
	- Increase the size of the paging file to allow more free virtual memory for
	  Exchange Server.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	
	=============================================================================
	
