---
layout: page
title: "Q123648: Can't Print to HP JetDirect Printers Over DLC w/Intel Flash32"
permalink: kb/123/Q123648/
---

## Q123648: Can't Print to HP JetDirect Printers Over DLC w/Intel Flash32

	Article: Q123648
	Product(s): Microsoft Windows NT
	Version(s): 3.50
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Under Windows NT 3.5, if you are using an Intel Flash32 network interface card
	(NIC), printing with the DLC protocol to an HP JetDirect card may not work
	properly. A connection can be made to the printer, but print jobs sent will be
	spooled and deleted, never printing.
	
	This problem is related to the driver for the Flash32 NIC, written by Intel.
	Currently, the only workaround is to use a different NIC for printing with DLC.
	
	For additional information, contact Intel technical support at (800) 638- 8686.
	
	
	The Flash32 network card is manufactured by Intel, a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding this products'
	performance or reliability.
	
	Additional query words: prodnt adapter 3rdparty
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	Version           : 3.50
	
	=============================================================================
	
