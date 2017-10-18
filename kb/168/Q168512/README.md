---
layout: page
title: "Q168512: IBMTRP.SYS Causes Stop 0x0000000A During Shutdown."
permalink: kb/168/Q168512/
---

## Q168512: IBMTRP.SYS Causes Stop 0x0000000A During Shutdown.

	Article: Q168512
	Product(s): Microsoft Windows NT
	Version(s): 3.51 4.0
	Operating System(s): 
	Keyword(s): kbfixlist
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	During a shutdown and restart from within Windows NT, you may receive the
	following error message:
	
	  Stop 0x0000000A (0xc18c313b, 0x00000002, 0x00000000, 0x8012f72d)
	  IRQL_NOT_LESS_OR_EQUAL.
	
	NOTE: The parameters in parenthesis are specific to your computer configuration
	and may be different.
	
	CAUSE
	=====
	
	This problem is specific to the IBM PCI Token Ring Card 16/4, reference 75H9800,
	or 75H9802, using the following driver:
	
	  Driver properties : IBMTRP.SYS, 89728 bytes, 5/21/96, 4:31p.
	
	
	RESOLUTION
	==========
	
	To correct this problem, obtain a new version of the Ibmtrp.sys driver from IBM
	at the following location:
	
	  http://www.networking.ibm.com/nes/nestoken.htm
	
	Download the following image (PCI Token Ring Adapter family):
	
	  PCI Token Ring NDIS Drivers Diskette
	  Diskette 2 of 5
	  [TRP1642.EXE | Version 1.2 | 1-30-97 | 518,330 bytes]
	
	The updated driver is dated 11/04/96, and its size is 90,944 bytes. Any version
	of the driver dated before this date causes the error to occur.
	
	Additional query words: ntblue
	======================================================================
	Keywords          :  kbfixlist
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT400search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search
	Version           : 3.51 4.0
	Hardware          : x86
	
	=============================================================================
	
