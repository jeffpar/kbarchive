---
layout: page
title: "Q82727: HyperAccess 5 Occasionally Locks Up System"
permalink: kb/082/Q82727/
---

## Q82727: HyperAccess 5 Occasionally Locks Up System

	Article: Q82727
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Under Windows, HyperAccess 5, an MS-DOS communications application, may lock up
	the system. The lock-ups are fairly consistent on any given system, but they
	vary widely among different systems depending on the individual configuration.
	
	MORE INFORMATION
	================
	
	These lock-ups can occur in Windows 3.0, Windows 3.1, and in MS-DOS outside of
	Windows. One situation in which a lock-up may occur is when HyperAccess 5 tries
	to recover from a COM port error (such as when a phone line is disconnected).
	HyperAccess goes into a tight loop while looking at a COM port with interrupts
	disabled and no provision for a time-out. This effectively hangs the machine.
	
	HyperAccess 5 is manufactured by HyperAccess, vendor independent of Microsoft; we
	make no warranty, implied or otherwise, regarding this product's performance or
	reliability.
	
	For additional information, contact HyperAccess.
	
	Additional query words: 3.10 hyperaccess5 hyper access hung freeze frozen winfest
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	
