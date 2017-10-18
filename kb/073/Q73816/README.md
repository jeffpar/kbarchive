---
layout: page
title: "Q73816: IBM PC Support (AS/400) Requires PCSWIN.COM Patch"
permalink: kb/073/Q73816/
---

## Q73816: IBM PC Support (AS/400) Requires PCSWIN.COM Patch

	Article: Q73816
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	PCSWIN.COM is a terminate-and-stay-resident (TSR) program that MUST be run
	immediately after running the IBM PC Support router and before running Windows.
	To run the IBM PC Support software in Windows, you must have the PC Support
	version 3.0 software and the PCSWIN.COM patch from IBM.
	
	The following is a quotation from an IBM AS/400 Corrective Service Package:
	
	  PCSWIN allows PC Support Communications buffers to be allocated out of
	  conventional memory where they will not be disturbed by Windows'
	  context-switching. By default, 16K of buffer space is allocated for this
	  purpose. A command line parameter on PCSWIN allows you to specify the amount
	  of space to allocate for communications buffers.
	
	MORE INFORMATION
	================
	
	PC Support is an IBM connectivity package that is used to access an AS/400
	mainframe through a Token Ring network.
	
	To order the patch, call IBM at (800) 426-3333. IBM will refer you to an
	authorized dealer in your area where you can request PTF/FIX #LF70675.
	
	Additional query words: AS/400 AS400 PCSUPPORT PC-Support
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	
