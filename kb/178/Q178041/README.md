---
layout: page
title: "Q178041: XADM: Event ID 1171 Exception 0xe0010003"
permalink: /kb/178/Q178041/
---

## Q178041: XADM: Event ID 1171 Exception 0xe0010003

	Article: Q178041
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.5
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 20-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The following directory service exception error may surface any time the
	directory service is running:
	
	  Event ID: 1171
	  Source: MSExchangeDS
	  Type: Error
	  Category:  Internal Processing
	
	  Description:
	  Exception 0xe0010003 has occurred with parameters 77f1cd91 and -1
	  (internal
	  ID 31104ee). Contact Microsoft Technical Support for assistance.
	
	CAUSE
	=====
	
	This is an out of memory exception error.
	
	WORKAROUND
	==========
	
	
	
	RESOLUTION
	==========
	
	This type of exception may occur but is only a problem if this event is observed
	repeatedly. If this is the case, the problem will need further troubleshooting
	to determine the process that is utilizing the required memory.
	
	Additional query words: Application Log
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : WINDOWS:5.5
	Issue type        : kbprb
	
	=============================================================================
	
