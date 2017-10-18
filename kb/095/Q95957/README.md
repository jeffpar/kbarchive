---
layout: page
title: "Q95957: Qemm Err Msg: File Server Encountered a Critical..."
permalink: kb/095/Q95957/
---

## Q95957: Qemm Err Msg: File Server Encountered a Critical...

	Article: Q95957
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use QuarterDeck's Qemm extended memory manager with Windows in 386
	enhanced mode, Windows may generate the following error message when you run
	Intel's Faxability Plus for Windows:
	
	  File server encountered a critical error and terminated.
	
	WORKAROUND
	==========
	
	To work around this problem, disable the Stealth Mapping feature in Qemm. For
	information about how to do this, see your Qemm manual.
	
	MORE INFORMATION
	================
	
	Faxability Plus for Windows comes with the SatisFAXtion Fax/Modem. CASMGR, a
	terminate-and-stay-resident (TSR) program that captures the fax and communicates
	with the fax/modem card, also causes this error message.
	
	The products included here are manufactured by vendors independent of Microsoft;
	we make no warranty, implied or otherwise, regarding these products' performance
	or reliability.
	
	Additional query words: 3.10 3.11 3rdparty VSERVER
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
