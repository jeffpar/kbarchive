---
layout: page
title: "Q256927: XCON: Event 1008 Occurs When Internet Mail Service Is Started"
permalink: /kb/256/Q256927/
---

## Q256927: XCON: Event 1008 Occurs When Internet Mail Service Is Started

	Article: Q256927
	Product(s): Microsoft Exchange
	Version(s): 4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): exc4 exc5 exc55
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start the Internet Mail Service, the following event ID is displayed in
	the application event log:
	
	  Event Type:Error
	  Event Source:Perflib
	  Event Category:None
	  Event ID:1008
	  Description:
	  The Open Procedure for service "MSExchangeIMC" in DLL
	  "G:\EXCHSRVR\bin\imsperf.dll" failed. Performance data for this service will
	  not be available. The Status code returned is the first DWORD in the attached
	  data.
	
	CAUSE
	=====
	
	This behavior can occur because:
	
	1. The Imsperf.dll file is the wrong version, was not registered, or is
	  missing.
	
	  -or-
	
	2. The performance counters are incorrect.
	
	RESOLUTION
	==========
	
	To resolve this behavior, ensure that Imsperf.dll file is present, is the
	correct version, and is properly registered. To do this:
	
	1. Type the following at a command prompt:
	
	  " regsvr32 <path>\imsperf.dll " (without the quotation marks)
	
	2. Run the following commands:
	
	  " unlodctr MSExchangeIMC
	
	  lodctr <drive>:\exchsrvr\bin\imcperf.ini " (without the quotation marks)
	
	  where <drive> is the drive letter where the Exchange Server binaries are
	  installed.
	
	When the commands have finished running, check the event log to ensure that this
	operation was completed properly.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc4 exc5 exc55 
	Component         : IMS
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : :4.0,5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	
