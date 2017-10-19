---
layout: page
title: "Q316711: BUG: Incorrect CONV_ID for WinCPICSetEvent/WinCPICExtractEvent"
permalink: /kb/316/Q316711/
---

## Q316711: BUG: Incorrect CONV_ID for WinCPICSetEvent/WinCPICExtractEvent

	Article: Q316711
	Product(s): Microsoft SNA Server
	Version(s): 4.0,4.0 SP1,4.0 SP2,4.0 SP3,4.0 SP4
	Operating System(s): 
	Keyword(s): sna4 kbsna400sp1 kbsna400sp2 kbsna400sp3 kbhis2000 kbhis2000bug kbsna400sp4
	Last Modified: 22-JAN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3, 4.0 SP4 
	- Microsoft Host Integration Server 2000 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Common Programming Interface for Communications (CPI-C) application programming
	interface (API) traces display an incorrect Conversation ID (CONV_ID) when
	tracing the following CPI-C verbs:
	
	- WinCPICSetEvent
	- WinCPICExtractEvent
	
	The following is an example of how a WinCPICSetEvent verb appears in a CPI-C API
	trace:
	
	  CPIC  WinCPICSetEvent request  - event 12345678
	  CPIC  
	  CPIC  Conversation ID = 000000AB
	
	NOTE: This behavior does not affect the functionality of any CPI-C applications
	that call the WinCPICSetEvent and WinCPICExtractEvent verbs.
	
	CAUSE
	=====
	
	This behavior occurs because the CPI-C DLL (Wcpic32.dll) writes an incorrect
	conversation ID for the WinCPICSetEvent and WinCPICExtractEvent verbs to the
	CPI-C API trace files when CPI-C API traces are enabled.
	
	For example, a conversation ID of 11223344 (Intel byte-swapped format) is
	incorrectly displayed in the trace file as 00000011. The correct format of the
	traced conversation ID would be 44332211.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	
	MORE INFORMATION
	================
	
	Host Integration Server 2000 and SNA Server traces are enabled when you run the
	Trace Initiator program (Snatrace.exe). For more information about the Trace
	Initiator program, refer to the Host Integration Server 2000 and SNA Server
	Online Documentation.
	
	Additional query words:
	
	======================================================================
	Keywords          : sna4 kbsna400sp1 kbsna400sp2 kbsna400sp3 kbhis2000 kbhis2000bug kbsna400sp4 
	Technology        : kbAudDeveloper kbSNAServSearch kbHostIntegServ2000 kbSNAServ400 kbSNAServ400SP1 kbSNAServ400SP2 kbSNAServ400SP3 kbSNAServ400SP4
	Version           : :4.0,4.0 SP1,4.0 SP2,4.0 SP3,4.0 SP4
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
