---
layout: page
title: "Q177774: XADM: Event ID 1171 Occurs When Diagnostics Logging Is Set Too H"
permalink: /kb/177/Q177774/
---

## Q177774: XADM: Event ID 1171 Occurs When Diagnostics Logging Is Set Too H

	Article: Q177774
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	
	
	SYMPTOMS
	========
	
	In the Microsoft Exchange Administrator program, if you turn up the diagnostics
	logging level for the Internal Processing category for MSExchangeDS, you may see
	the following exception error logged:
	
	  Event ID: 1171
	  Source: MSExchangeDS
	  Description: Exception e0010006 has occurred with parameters 11 and 1
	  (internal ID 405007f). Contact Microsoft Technical Support for
	  assistance.
	
	If you change the logging level to none, these events will not be logged.
	
	CAUSE
	=====
	
	If logging is set to anything other than none, all internal exceptions are
	logged as errors.
	
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbZNotKeyword2
	Version           : WINDOWS:5.0,5.5
	Issue type        : kbbug
	
	=============================================================================
	
