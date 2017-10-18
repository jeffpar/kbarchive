---
layout: page
title: "Q147936: Incorrect Output Printing Through Captured LPT Port to FPNW"
permalink: kb/147/Q147936/
---

## Q147936: Incorrect Output Printing Through Captured LPT Port to FPNW

	Article: Q147936
	Product(s): Microsoft Windows NT
	Version(s): 3.51 4.0
	Operating System(s): 
	Keyword(s): kbprint kbPrinting
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.51, 4.0 
	- Microsoft File and Print Services for NetWare version 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a NetWare client prints to an LPT port that is captured to a File and Print
	Services for NetWare (FPNW) server, the output is incorrect. For example,
	control codes (postscript codes) are also printed instead of it being processed
	by the printer.
	
	CAUSE
	=====
	
	The NetWare client sends the job to the FPNW server as a Text print job. FPNW
	prints it as though it is plain text.
	
	RESOLUTION
	==========
	
	To correct this problem, add the /No Tabs (or /NT) switch to the end of the
	Capture line.
	
	  Sample usage:  CAPTURE QUEUE=fpnwqueue NOTABS
	  Abbreviated:   CAPTURE Q=fpnwqueue NT
	
	If your NetWare client runs in Windows, clear the Enable Tabs check box in the
	LPT settings of NetWare User Tools. The NetWare client then sends the data to
	the FPNW server as a byte stream print job.
	
	Additional query words: prodnt FPNW plain text capture novell
	
	======================================================================
	Keywords          : kbprint kbPrinting 
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search kbServicesNetwareSearch kbFPNW351
	Version           : 3.51 4.0
	
	=============================================================================
	
