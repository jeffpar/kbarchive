---
layout: page
title: "Q108374: SMTP: How to Find Available Memory"
permalink: kb/108/Q108374/
---

## Q108374: SMTP: How to Find Available Memory

	Article: Q108374
	Product(s): Microsoft Mail For PC Networks
	Version(s): MS-DOS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to SMTP, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Version 3.0 of the Microsoft Mail Gateway to SMTP displays the memory available
	to the log file or the Gateway PC screen in the following line:
	
	  Idling: 48452 bytes, largest 47428
	
	This means that, in conventional memory, after the Gateway has loaded, there are
	48452 bytes available, and the largest contiguous space is 47428 bytes. These
	numbers vary depending on whether the TCP/IP and networking software are loaded
	high.
	
	NOTE: SMTPGATE.EXE must be executed with a -Cd parameter.
	
	MORE INFORMATION
	================
	
	The Gateway code determines the memory available by calling two C library
	routines:
	
	_MEMAVL for the available memory
	_MEMMAX for the largest contiguous space.
	
	Additional query words: 3.00
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGateSMTP300
	Version           : MS-DOS:3.0
	
	=============================================================================
	
