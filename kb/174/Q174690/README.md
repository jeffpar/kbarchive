---
layout: page
title: "Q174690: XGEN: Perflib Errors 1008, 1009, 1011 in Application Logs"
permalink: kb/174/Q174690/
---

## Q174690: XGEN: Perflib Errors 1008, 1009, 1011 in Application Logs

	Article: Q174690
	Product(s): Microsoft Exchange
	Version(s): WinNT:4.0,5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 16-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Event Viewer Application log indicates a large number of the following stop
	events:
	
	  Event ID 1008
	  Source: Perflib
	  Type: Error
	  Category: None
	  Description: The Open Procedure for service "MSExchangeDS" in DLL
	  "C:\EXCHSRVR\bin\perfdsa.dll" failed. Performance data for this service
	  will not be available. Status code returned is DWORD 0.
	
	  Event ID 1009
	  Source: Perflib
	  Type: Error
	  Category: None
	  The Open Procedure for service "MSExchangeDS" in DLL "perfdsa.dll"
	  generated an exception. Performance data for this service will not be
	  available. Exception code returned is DWORD 0.
	
	  Event ID 1011
	  Source: Perflib
	  Type: Error
	  Category: None
	  Description: The library file "C:\EXCHSRVR\bin\perfdsa.dll" specified
	  for the "MSExchangeDS" service could not be opened. Performance data for
	  this service will not be available. Status code is data DWORD 0.
	  These events will be repeated for several DLLs associated with various
	  Exchange services.
	
	CAUSE
	=====
	
	One possible cause for this behavior is that DLLs associated with performance
	monitor have hung. The problem was traced to link monitors running against the
	Exchange Server computer.
	
	RESOLUTION
	==========
	
	Reboot all servers that have the link monitors running against the Exchange
	Server computer. After the servers have been rebooted, the errors should stop
	appearing in the Event Viewer.
	
	Additional query words: Perfmon, performance, perflib
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbZNotKeyword2
	Version           : WinNT:4.0,5.0
	Issue type        : kbprb
	
	=============================================================================
	
